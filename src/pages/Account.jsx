import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from '../firebase';
import { useState } from "react";

const Account = () => {
  const { logOut, user } = UserAuth();
  const [imgURL, setImgURL] = useState("");
  const [progressPorcent, setPorgessPorcent] = useState(0);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }       
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    if (!file) return;


    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPorgessPorcent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
        });
      }
    );
  };

  return (
    <div className='w-[400px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12 text-primary'>Minha Conta</h1>
      <div className='p-3'>
        <p className='font-semibold'>Seja Bem-Vindo, {user?.displayName}</p>
      </div>
      <div className='p-3 m-3'>
      <header className="Images-header">
        <form onSubmit={handleSubmit}>
          <h1 className='p-5 text-primary text-center text-xl font-bold '>Escolha uma foto de perfil</h1>
          <input type="file" />
          <button className='border border-blue-500 bg-primary hover:bg-primaryhover w-full p-3 my-6 text-white'>Enviar Foto</button>
        </form>
        {!imgURL && <p className='text-blue-500 text-center text-2xl'>{progressPorcent}%</p>}
        {imgURL && <img src={imgURL} alt="Imagem" height={200} />}
      </header>
      </div>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10 bg-red-500 hover:bg-red-400 text-white '>
        Logout
      </button>
    </div>
  );
};

export default Account;
