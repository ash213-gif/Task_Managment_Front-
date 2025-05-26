import React,{createContext} from 'react'

export default function Signupcontext({setFormData, formData, children}) {

const SignupContext = createContext();
  const SignupProvider = SignupContext.Provider;


  return (
    <SignupProvider  >
        {children}
    </SignupProvider>
  )
}
