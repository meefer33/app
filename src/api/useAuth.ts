import { signOut } from 'supertokens-auth-react/recipe/emailpassword'
import { create } from 'zustand'
import { sessioninfo, updateUser } from './apiClient'
import createSelectors from './createSelectors'


const useAuthBase = create((set) => ({
  authed: false,
  user: null,
  userId: null,
  userInfo: null,
  setAuthed: (authed:boolean,userId:string) => {
    set({ authed: authed, userId: userId })
  },
  getSessionInfo: async() => {
    const userInfo = await sessioninfo()    
  },
  setUserId: async(userId:string) => {
    const udpdateUser = await updateUser()
    set({ userId: userId })
  },
  signOut: async () => {
    await signOut()
    set({ authed: false, user: null, userId: null })
  },
}))

const useAuth = createSelectors(useAuthBase)
export default useAuth
