import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Orders from '../Orders/Orders';
import './PartsDetails.css'

const PartsDetails = () => {
      const { purchaseId } = useParams();
      const [parts, setParts] = useState({});
      useEffect(() => {
            const url = `http://localhost:5000/parts/${purchaseId}`
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
                              <h4>ID: {parts.id}</h4>
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