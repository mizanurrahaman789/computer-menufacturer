import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
      const { email, role } = user;
      const makeadmin = () => {
            fetch(`http://localhost:5000/user/admin/${email}`, {
                  method: 'PUT',
                  headers: {
                        authorization: `Bearer${localStorage.getItem('accessToken')}`
                  }
            })
                  .then(res => res.json())
                  .then(data => {
                        refetch();
                        toast.success(`successfully made an admin`)
                  })

      }
      return (
            <tr>
                  <th>1</th>
                  <td>{email}</td>
                  <td>{role !== 'admin' && <button onClick={makeadmin} class="btn">Make Admin</button>}</td>
                  <td><button class="btn">Delet</button></td>

                  <td>area</td>
            </tr>
      );
};

export default UserRow;