import React from 'react'

function Message() {
  return (
    <div className='chat chat-end '>
        <div className='chat-image avatar'>
           <div className='w-10 rounded-full'>
            <img src="" alt="" />

           </div>
        </div>
        <div>
           <div className={`chat-bubble text-white bg-blue-500 `}>Hi! What's Up</div> 
           <div className={`chat-footer text-xs opacity-50 flex gap-1 items-center `}>12:42</div> 
        </div>
    </div>
  )
}

export default Message