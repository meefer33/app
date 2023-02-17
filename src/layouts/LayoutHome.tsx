import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const LayoutHome: FC = () => {
  return (
    <div className='flex flex-column align-items-center w-full p-4 md:p-6 lg:p-8'>
      <Outlet/>
    </div>
  )
}
export default LayoutHome
