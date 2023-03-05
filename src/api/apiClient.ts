import { apiDomain } from './consts'
import useApiErrors from './useApiErrors'
import useAppLoad from './useAppLoad'

const displayError = (error: string) => {
  useApiErrors.getState().setToast({ severity: 'warn', summary: 'Warning', detail: error })
}

const fetchApi = async (
  payload: any = {
    url: '',
    method: 'GET',
    body: '',
    config: { signal: AbortSignal.timeout(8000) },
  },
) => {
  try {
    const response = await fetch(`${apiDomain}${payload.url}`, {
      method: payload.method,
      body: JSON.stringify(payload.body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      signal: AbortSignal.timeout(8000),
      ...payload.config,
    })

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
    console.log(err, 'wat')
    useAppLoad.getState().setHealthy(false)
    return false
  }
}

//network test
export const healthCheck = () =>
  fetchApi({ url: '/ping', config: { signal: AbortSignal.timeout(8000) } })
//auth endpoints
export const signin = (params: any) =>
  fetchApi({ url: '/auth/signin', method: 'POST', body: params })
export const signout = () => fetchApi({ url: '/auth/signout?rid=session', method: 'POST' })
export const sessioninfo = () => fetchApi({ url: '/sessioninfo' })
export const updateUser = () => fetchApi({ url: '/updateUser' })
