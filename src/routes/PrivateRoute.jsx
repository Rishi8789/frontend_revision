import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
   
   if(true){
    return children;
   }else{
    return <Navigate to="/"/>
   }
  
}

export default PrivateRoute