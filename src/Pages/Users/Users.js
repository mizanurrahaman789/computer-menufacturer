import React from 'react';
import { useQuery } from 'react-query';

const Users = () => {
      const { data: users } = useQuery('./users', () => fetch(''), {
            method: 'GET',
            Headers: {
                  authorization: `Bearer${localStorage.getItem('accessToken')}`
            }
      }

            .then(res => res.json()));
      if (users) {
            return <isLoding></isLoding>
      }
      return (
            <div>
                  <div class="overflow-x-auto">
                        <table class="table w-full">

                              <thead>
                                    <tr>
                                          <th>ID</th>
                                          <th>Name</th>
                                          <th>Email</th>
                                    </tr>
                              </thead>
                              <tbody>

                                    {
                                          users.map((a, index) => <tr>
                                                <th>{a._id}</th>
                                                <td>{a.name}</td>
                                                <td>{a.email}</td>
                                          </tr>)
                                    }
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default Users;