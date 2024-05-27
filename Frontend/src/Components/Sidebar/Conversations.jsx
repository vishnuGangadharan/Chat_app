import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../hooks/useGetConversations';

function Conversations() {
 const {loading,totalConversations}= useGetConversations();
  return (
    <div className='py-2 flex flex-col overflow-auto'>

      {totalConversations.map((coversation,idx)=>(
         <Conversation
         key={coversation._id}
         conversation={coversation}
         lastIdx = {idx ===totalConversations.length - 1}
         /> 
      ))}

        {loading ? <span className='loading loading-spinner mx-auto '></span>: null}
        
    </div>
  )
}

export default Conversations