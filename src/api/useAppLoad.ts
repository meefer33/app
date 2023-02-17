import { create } from 'zustand'
import { healthCheck } from './apiClient'
import createSelectors from './createSelectors'
import Session from 'supertokens-auth-react/recipe/session';
import useAuth from './useAuth';

const useAppLoadBase = create((set) => ({
  appLoaded: false,
  healthy: true,
  setHealthy: (healthy:boolean) => {
    set({ healthy: healthy })
  },
  loadApp: async () => {
    const health = await healthCheck()
    console.log('health',health)
    health && set({ appLoaded: true })
  },
}))

const useAppLoad = createSelectors(useAppLoadBase)
export default useAppLoad
