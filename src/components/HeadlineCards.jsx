import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>

      <div className='rounded-xl relative'>

        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Café da Manhã</p>
          <p className='px-2'>Até as 12h</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Pedir Agora</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1515189703465-7a8ee3f0146c?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='/'
        />
      </div>

      <div className='rounded-xl relative'>

        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Top Restaurantes</p>
          <p className='px-2'>Melhores avaliados</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Pedir Agora</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='/'
        />
      </div>

      <div className='rounded-xl relative'>

        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sobremesas Incríveis</p>
          <p className='px-2'>Doces e Bolos</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Pedir Agora</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
