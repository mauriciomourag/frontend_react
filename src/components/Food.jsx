import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
  
  const [foods, setFoods] = useState(data);

  //Filtrar o tipo
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //Filtrar por preço
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-primary font-bold text-4xl text-center'>
       As Comidas Mais Bem Avaliadas
      </h1>
      
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Flitrar tipo */}
        <div>
          <p className='font-bold text-gray-700'>Filtrar por tipo</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              Tudo
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              Hamburger
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salada')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              Saladas
            </button>
            <button
              onClick={() => filterType('frango')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              Frango
            </button>
            <button
              onClick={() => filterType('japonesa')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              Comida Japonesa
            </button>
          </div>
        </div>

        {/* Filtrar por preço */}
        <div>
          <p className='font-bold text-gray-700'>Filtrar Preço</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-primaryhover text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
