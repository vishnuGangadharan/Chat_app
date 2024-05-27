import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../../Context/AuthContext'
function useLogin() {
  const [loading,setLoading] = useState(false)
  const { setAuthUser} = useAuthContext()


const login = async(username,password)=>{
    let success =handleInputError({username,password})
   if(!success) return;
    setLoading(true)
    try {
        let res = await fetch('/api/auth/login',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ username, password }) 
        })  
        const data = await res.json()
        console.log("herrr");
        console.log(data);
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.setItem("chat-user",JSON.stringify(data))
        setAuthUser(data)

    } catch (error) {
        toast.error(error.message)

    }finally{
        setLoading(false)
    }
    
}

return {loading, login}
}

export default useLogin


function handleInputError({username,password}){
    if(!username || !password){
      toast.error('please fill in all fields') 
      return false 
    }
   
    if(password.length <6){
        toast.error('password length must be more than 6') 
        return false  
    }
    return true
} 