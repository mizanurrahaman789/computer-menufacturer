import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import useAdmin from '../../hooks/useAdmin';

const RequireAdmin = ({ children }) => {
      const [user, loading] = useAuthState(auth);
      const [admin, adminLoding] = useAdmin()
      const location = useLocation(user);
      if (loading || adminLoding) {
            return <Loading></Loading>
      }
      if (!user || !admin) {
            signOut(auth);
            return <Navigate to="/login" state={{ from: location }} replace></Navigate>
      }
      return children;
};


export default RequireAdmin;