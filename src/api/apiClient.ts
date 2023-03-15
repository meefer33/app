import { apiDomain } from './consts'
import useApiErrors from './useApiErrors'
import useAppLoad from './useAppLoad'
import useAuth from './useAuth'

const displayError = (error: string) => {
  useApiErrors.getState().setToast({ severity: 'warn', summary: 'Warning', detail: error })
}

const getHeaders = () => {
  const headers = {'Content-type': 'application/json; charset=UTF-8','Access-Control-Allow-Origin':'*'}
  console.log(useAuth.getState().authed)
  if(useAuth.getState().authed) {
      headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  } 
  return headers
}

const fetchApi = async (
  payload: any = {
    url: '',
    method: 'GET',
    body: '',
    config: { signal: AbortSignal.timeout(8000) },
    mode: 'no-cors',
  },
) => {
  try {
    const response = await fetch(`${apiDomain}${payload.url}`, {
      method: payload.method,
      body: JSON.stringify(payload.body),
      headers: getHeaders(),
      signal: AbortSignal.timeout(8000),
      ...payload.config,
    })
console.log(response)
    const jsonResponse = await response.json()
console.log(jsonResponse)
    if (response.status >= 200 && response.status <= 299) {
      return jsonResponse
    } else {
      // Handle errors
      displayError(jsonResponse.error)
      return false
    }
  } catch (err) {
    console.log(err, 'wat')
    useAppLoad.getState().setHealthy(false)
    return false
  }
}

//network test
export const healthCheck = async() => await fetch('https://hasapi.apps33.dev/healthz',{signal: AbortSignal.timeout(8000)})
  
//auth endpoints
export const signin = (params: any) => fetchApi({ url: '/auth/login', method: 'POST', body: params })
export const getUser = () => fetchApi({ url: '/user'})
export const getResources = () => fetchApi({ url: '/resources'})
