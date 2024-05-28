import React from 'react'
import {useAuthContext} from "../../Context/AuthContext"
import useConverstation from '../../zustand/userConversations'
import { extractTime } from '../../utils/extractTime'

function Message({message}) {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConverstation()
  const fromMe = message.senderId === authUser._id;
  const formatedTime = extractTime(message.createdAt)

  const chatClassName = fromMe ? 'chat-end' : "chat-start";
  const profilePic = fromMe ? authUser.profilpic : selectedConversation?.profilpic
  const bubbleBgColor = fromMe? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
           <div className='w-10 rounded-full'>
            <img src={profilePic} alt="profile pic" />

           </div>
        </div>
        <div>
           <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div> 
           <div className={`chat-footer text-xs opacity-50 flex gap-1 items-center `}>{formatedTime}</div> 
        </div>
    </div>
  )
}

export default Message