import { Navigate } from "react-router-dom";
const Protected = ({children }) => {
   const credential = JSON.parse(localStorage.getItem("cred"));
   const userEmail = "test@gmail.com";
   const userPassword = "12345678";
  
    if (credential.email===userEmail && credential.password === userPassword) {
        return children;   
    }
    alert("Please enter email=test@gmail.com and password=12345678" )
    return <Navigate to="/" replace />
};
export default Protected;