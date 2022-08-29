import React from 'react'
import {createContext, useState} from "react"


const authContext= createContext();
AuthProvider= authContext.Provider;

function AuthContext() {
    const [success, setSuccess]= useState("false");
    const [error, setError]= useState("null");
    const [loading, setloading]= useState("false");
    const [user, setUser]= useState("null");

  return (
    <div>
    
    </div>
  )
}

export default AuthContext