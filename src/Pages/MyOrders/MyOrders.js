import React, { useEffect, useState } from 'react';

const MyOrders = () => {
      const [orders, setOrder] = useState([]);

      useEffect(() => {
            fetch('http://localhost:5000/order?user=${user.email}')
                  .then(res => res.json())
                  .then(data => setOrder(data))
      })
      return (
            <div>
                  <div class="overflow-x-auto">
                        <table class="table w-full">

                              <thead>
                                    <tr>
                                          <th>ID</th>
                                          <th>quintity</th>
                                          <th>Name</th>
                                          <th>Email</th>
                                          <th>Phone</th>
                                          <th>Addres</th>
                                    </tr>
                              </thead>
                              <tbody>

                                    {
                                          orders.map((a, index) => <tr>
                                                <th>{a._id}</th>
                                                <td>{a.quintity}</td>
                                                <td>{a.name}</td>
                                                <td>{a.email}</td>
                                                <td>{a.phone}</td>
                                                <td>{a.addres}</td>
                                          </tr>)
                                    }
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default MyOrders;