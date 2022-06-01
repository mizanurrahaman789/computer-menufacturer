import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading'
import UserRow from './UserRow';

const Users = () => {
      // const { data: users } = useQuery('./users', () => fetch('http://localhost:5000/user', {
      //       method: 'GET',
      //       Headers: {
      //             authorization: `Bearer${localStorage.getItem('accessToken')}`
      //       }
      // })

      //       .then(res => res.json()));
      // if (users) {
      //       return <isLoding></isLoding>
      // }



      const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                  authorization: `Bearer${localStorage.getItem('accessToken')}`
            }
      }).then(res => res.json()));
      if (isLoading) {
            return <Loading></Loading>
      }
      return (
            <div>
                  <h1>hello</h1>
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
                                          users.map(user => <UserRow
                                                key={user._id}
                                                user={user}
                                                refetch={refetch}
                                          ></UserRow>)
                                    }
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default Users;