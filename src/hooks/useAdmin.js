import React, { useEffect, useState } from 'react';

const useAdmin = user => {
      const [admin, setAdmin] = useState(true);
      const [adminLoding, setAdminLoding] = useState(true);
      useEffect(() => {
            const email = user?.email;
            if (email) {
                  fetch(`http://localhost:5000/admin/${email}`,
                        {
                              method: 'GET',
                              headers: {
                                    'content-type': 'application',
                                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                              }

                        })
                        .then(res => res.json())
                        .then(data => {
                              setAdmin(data.admin);
                              setAdminLoding(false);
                        })

            }

      }, [user])

      return [admin, adminLoding]
};

export default useAdmin;