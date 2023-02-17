import { create } from 'zustand'
import createSelectors from './createSelectors'

const useApiErrorsBase = create((set) => ({
  toast: {},
  setToast: (data:object) => set(() => ({ toast: data })),
}))

const useApiErrors = createSelectors(useApiErrorsBase)
export default useApiErrors
