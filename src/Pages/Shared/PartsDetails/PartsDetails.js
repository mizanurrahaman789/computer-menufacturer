import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Orders from '../Orders/Orders';
import './PartsDetails.css'

const PartsDetails = () => {
      const { purchasesId } = useParams();
      const [partdetails, setPartdetails] = useState({});
      useEffect(() => {
            const url = `http://localhost:5000/partdetails/${purchasesId}`;
            console.log(url)
            fetch(url)
                  .then(res => res.json())
                  .then(data => setPartdetails(data))
      }, []);

      return (
            <div className='flex bg-slate-200'>
                  <div className='items-detailss mx-auto'>
                        <div className='text-center'>
                              <img className='w-30 ' src={partdetails.img} alt=""></img>
                        </div>
                        <div className='text-area'>
                              <h4>ID: {partdetails._id}</h4>
                              <h1>Name: {partdetails.name}</h1>
                              <h5>Available quantity: {partdetails.availablequantity}</h5>
                              <h5>Minimum order quantity: {partdetails.minimumorderquantity}</h5>
                              <h6>Per unit price: {partdetails.perunitprice}</h6>
                              <h6>Description: <small>{partdetails.description}</small> </h6>
                        </div>

                  </div>
                  <div className='mx-auto'>
                        <Orders></Orders>
                  </div>
            </div>
      );
};

export default PartsDetails;