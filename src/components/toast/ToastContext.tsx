import { createContext, useContext, useRef } from 'react'
import { Toast } from 'primereact/toast'

interface IToastProvider {
  children?: JSX.Element[] | JSX.Element
}

const ToastContext = createContext(null)
export const useToast = () => useContext(ToastContext)

export const ToastProvider = ({ children }: IToastProvider) => {
  const toast = useRef(null)

  const showToast = (
    severity: string,
    summary: string,
    detail: string,
    life = 1000
  ) => {
    toast.current.show({
      severity: severity,
      summary: summary,
      detail: detail,
      life: life
    })
  }

  const toaster = {
    showToast
  }

  return (
    <ToastContext.Provider value={toaster}>
      {children}
      <Toast ref={toast} position="bottom-center" />
    </ToastContext.Provider>
  )
}
