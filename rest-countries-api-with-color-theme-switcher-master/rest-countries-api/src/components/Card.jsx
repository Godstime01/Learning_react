import React from 'react'


const Card = (props) => {

  return (
    <div className='rounded bg-white text-blue-100 dark:bg-blue-200 dark:text-white shadow-lg flex flex-col w-50 aspect-square'>
      <img src={props.image} className='item-self-stretch aspect-square w-full' alt="" />

      <div className="p-10">
        <h3 className='text-blue-200 text-3xl my-4 dark:text-white font-extrabold'>{props.name}</h3>
        <p><span className='title font-bold mr-3'>Population</span>{props.population}</p>
        <p><span className='font-bold mr-3'>Region: </span>{props.region}</p>
        <p><span className='font-bold mr-3'>Capital</span>{props.capital}</p>
      </div>
    </div>
  )
}

export default Card