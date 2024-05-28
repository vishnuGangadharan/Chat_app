import React, { useState } from 'react'
import useConverstation from '../../zustand/userConversations'
import toast from 'react-hot-toast'

function useSendMessage() {
  
    const [loading,setLoading] = useState(false)
     const {messages,setMessage, selectedConversation } = useConverstation()

     const sendMessage = async(message) =>{
        setLoading(true)
        try {
           const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({message})
           }) 

           const data = await res.json()
           console.log(data);
           if(data.error) throw new Error(data.error)
           setMessage([...messages,data])
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
     }

return {sendMessage,loading  }

}

export default useSendMessage