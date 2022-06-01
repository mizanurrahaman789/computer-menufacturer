import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Part.css';


const Part = ({ part }) => {
      const { _id, name, description, perunitprice, img, availablequantity, minimumorderquantity } = part;

      const navigate = useNavigate();
      const navigateTopurchaseDetails = id => {
            navigate(`/purchase/${_id}`)
      }
      return (
            <div>
                  <div className="card card-compact lg:max-w-lg  bg-base-100 shadow-xl">
                        <figure className='card-section w-50 h-50'><img src={img} alt="" /></figure>
                        <div class="card-body">
                              <h4 className="card-title">ID: {_id}</h4>
                              <h4 className="card-title">Name: {name}</h4>


                              <h5>{
                                    availablequantity.length > 0
                                          ? <span>{availablequantity[0]}</span>
                                          : <span className='text-red-500'>You have to purchase at least 42 products</span>
                              }</h5>


                              <h5>Available quantity: {availablequantity.length}</h5>

                              <h5 className="card-title">Available quantity :{availablequantity.length}{availablequantity.length > 1 ? 'quantitys' : 'quantity'} </h5>




                              {/* <h5>{
                                    minimumorderquantity.length > 0
                                          ? <span>{minimumorderquantity[0]}</span>
                                          : <span className='text-red-500'>You have to purchase at least 42 products</span>
                              }</h5> */}

                              {/* <h5 className="card-title">Minimum Order quantity: {availablequantity.length}</h5> */}

                              {/* <h5 className="card-title">Minimum Order quantity :{availablequantity.length}{availablequantity.length > 42 ? 'quantitys' : 'You have to purchase at least 42 products'} </h5> */}



                              <h5 className="card-title">per unit price: {perunitprice}</h5>
                              <h5 >Description: {description}</h5>
                              <div className="card-actions justify-center ">
                                    <button onClick={() => navigateTopurchaseDetails(_id)} href="/purchase" disabled={availablequantity.length === 0} className="btn btn-primary w-50">Purchase</button>

                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Part;