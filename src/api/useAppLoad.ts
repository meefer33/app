import { create } from 'zustand'
import { healthCheck } from './apiClient'
import createSelectors from './createSelectors'
import useAuth from './useAuth';

const useAppLoadBase = create((set) => ({
  appLoaded: false,
  healthy: true,
  setHealthy: (healthy:boolean) => {
    set({ healthy: healthy })
  },
  loadApp: async () => {
    const health = await healthCheck()
    if(localStorage.getItem('token') && localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user'))
      console.log(user)
      useAuth.setState({ authed: true, userId: user.userId, userInfo: user })
    }    
    health && set({ appLoaded: true })
  },
}))

const useAppLoad = createSelectors(useAppLoadBase)
export default useAppLoad
