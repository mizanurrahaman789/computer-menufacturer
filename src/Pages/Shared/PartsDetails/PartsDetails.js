import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Orders from '../Orders/Orders';
import './PartsDetails.css'

const PartsDetails = () => {
      const { purchasesId } = useParams();
      const [PartsDetails, setPartsDetails] = useState({});
      useEffect(() => {
            const url = `https://ancient-dawn-28621.herokuapp.com/partsdetails/${purchasesId}`;
            fetch(url)
                  .then(res => res.json())
                  .then(data => setPartsDetails(data))
      }, [purchasesId]);

      return (
            <div className='flex bg-slate-200'>
                  <h1 className='text-center text-5xl'>Parts details</h1>
                  <div className='items-detailss mx-auto'>
                        <div className='text-center'>
                              <img className='w-30 ' src={PartsDetails.img} alt=""></img>
                        </div>
                        <div className='text-area'>
                              <h4>ID: {PartsDetails._id}</h4>
                              <h1>Name: {PartsDetails.name}</h1>
                              <h5>Available quantity: {PartsDetails.availablequantity}</h5>
                              <h5>Minimum order quantity: {PartsDetails.minimumorderquantity}</h5>
                              <h6>Per unit price: {PartsDetails.perunitprice}</h6>
                              <h6>Description: <small>{PartsDetails.description}</small> </h6>
                        </div>

                  </div>
                  <div className='mx-auto'>
                        <Orders></Orders>
                  </div>
            </div>
      );
};

export default PartsDetails;