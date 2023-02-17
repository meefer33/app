import useApiErrors from './useApiErrors'
import useAppLoad from './useAppLoad'

const displayError = (error: string) => {
  useApiErrors.getState().setToast({ severity: 'warn', summary: 'Warning', detail: error })
}

const fetchApi = async (payload:any = {url: '', method: 'GET', config: {signal: AbortSignal.timeout(8000)}}) => {
  try {
    const response = await fetch(`http://localhost:3001${payload.url}`, {method: payload.method, signal: AbortSignal.timeout(8000),...payload.config})
    console.log(response)
    if (response.status >= 200 && response.status <= 299) {
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      return jsonResponse
    } else {
      // Handle errors
      console.log(response.status, response.statusText)
      displayError(response.statusText)
      return { status: response.status, message: response.statusText }
    }
  } catch (err) {
    console.log(err,'wat')
    useAppLoad.getState().setHealthy(false)
    return false
  }
}

//network test
export const healthCheck = () => fetchApi({url: '/ping', config: {signal: AbortSignal.timeout(8000)}})
//auth endpoints
export const sessioninfo = () => fetchApi({url: '/sessioninfo'})
export const updateUser = () => fetchApi({url: '/updateUser'})
