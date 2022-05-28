import React from 'react';
import { useQuery } from 'react-query';

const Users = () => {
      const { data: usrs } = useQuery('./users', () => fetch('').then(res => res.json()))
      return (
            <div>
                  <h1>all users</h1>
            </div>
      );
};

export default Users;