import { create } from 'zustand'


const useConverstation = create((set)=>({
    selectedConversation :null,
    setSelectedConversation: (selectedConversation)=> set({selectedConversation}),
    messages:[],
    setMessage: (messages) => set({messages})
}))

export default useConverstation
