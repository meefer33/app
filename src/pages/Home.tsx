import FormLogin from '../components/forms/FormLogin'
import { useNavigate } from 'react-router-dom'
import useAuth from '@/api/useAuth'
import { useEffect } from 'react'

export default function Home() {
  const {authed} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // if authed redirect to login page
    authed && navigate('/account')
  }, [authed])

  return (
    <div className='surface-card p-4 shadow-2 border-round w-full lg:w-4 '>
      <div className='text-center mb-5'>
        <div className='text-900 text-3xl font-medium mb-3'>Welcome Back</div>
        <span className='text-600 font-medium line-height-3'>Don't have an account?</span>
        <a className='font-medium no-underline ml-2 text-blue-500 cursor-pointer'>Create today!</a>
      </div>
      <FormLogin />
    </div>
  )
}
