import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Orders from '../Orders/Orders';
import './PartsDetails.css'

const PartsDetails = () => {
      const { purchasesId } = useParams();
      const [parts, setParts] = useState('');
      useEffect(() => {
            const url = `https://ancient-dawn-28621.herokuapp.com/parts/${purchasesId}`
            console.log(url)
            fetch(url)
                  .then(res => res.json())
                  .then(data => setParts(data))
      }, []);

      return (
            <div className='flex bg-slate-200'>

                  <div className='items-detailss mx-auto'>
                        <div className='text-center'>
                              <img className='w-30 ' src={parts.img} alt=""></img>
                        </div>
                        <div className='text-area'>
                              <h4>ID: {parts._id}</h4>
                              <h1>Name: {parts.name}</h1>
                              <h5>Available quantity: {parts.availablequantity}</h5>
                              <h5>Minimum order quantity: {parts.minimumorderquantity}</h5>
                              <h6>Per unit price: {parts.perunitprice}</h6>
                              <h6>Description: <small>{parts.description}</small> </h6>
                        </div>

                  </div>
                  <div className='mx-auto'>
                        <Orders></Orders>
                  </div>
            </div>
      );
};

export default PartsDetails;