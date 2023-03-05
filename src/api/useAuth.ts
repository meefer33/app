import { create } from 'zustand'
import { sessioninfo, signin, signout, updateUser } from './apiClient'
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
    await sessioninfo()    
  },
  setUserId: async(userId:string) => {
    await updateUser()
    set({ userId: userId })
  },
  signIn: async(login:object) => {
    await signin(login)
  },
  signOut: async () => {
    await signout()
    set({ authed: false, user: null, userId: null })
  },
}))

const useAuth = createSelectors(useAuthBase)
export default useAuth
