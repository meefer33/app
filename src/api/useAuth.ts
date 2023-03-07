import { create } from 'zustand'
import { signin } from './apiClient'
import createSelectors from './createSelectors'

const useAuthBase = create((set) => ({
  authed: false,
  user: null,
  userId: null,
  userInfo: null,
  setAuthed: (authed: boolean, userId: string, userInfo: object) => {
    set({ authed: authed, userId: userId, userInfo: userInfo })
  },
  setUserId: async (userId: string) => {
    set({ userId: userId })
  },
  signIn: async (login: object) => {
    const authInfo = await signin(login)
    console.log('pay', authInfo)
    localStorage.setItem('token', authInfo.token)
    localStorage.setItem('user', JSON.stringify(authInfo.payload))
    set({ authed: true, userId: authInfo.payload.userId, userInfo: authInfo.payload })
  },
  signOut: async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    set({ authed: false, user: null, userId: null })
  },
}))

const useAuth = createSelectors(useAuthBase)
export default useAuth
