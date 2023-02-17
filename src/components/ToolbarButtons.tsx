import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import { Sidebar } from 'primereact/sidebar'
import { useRef, useState } from 'react'
import { StyleClass } from 'primereact/styleclass'
import { Ripple } from 'primereact/ripple'
import useAuth from '@/api/useAuth'

export default function ToolBarButtons() {
  const navigate = useNavigate()
  const [visibleRight, setVisibleRight] = useState(false)
  const btnRef2 = useRef(null)
  const {session,signOut} = useAuth()

  return (
    <div className='flex justify-content-between  p-3 surface-ground'>
      <div>
        <StyleClass
          nodeRef={btnRef2}
          selector='#app-sidebar'
          enterClassName='hidden'
          enterActiveClassName='fadeinleft'
          leaveToClassName='hidden'
          leaveActiveClassName='fadeoutleft'
        >
          <a ref={btnRef2} className='p-ripple cursor-pointer block lg:hidden text-700'>
            <i className='pi pi-bars text-2xl'></i>
            <Ripple />
          </a>
        </StyleClass>
      </div>
      <div>
        <div className='flex align-items-center flex-grow-1 justify-content-between '>
          {session ? (
            <>
              <Button
                icon='pi pi-server pi-fw'
                className='p-button-text mr-2 p-1 w-6'
                style={{ border: '0' }}
                aria-label='Filter'
                onClick={() => {
                  navigate('/account/dashboard')
                }}
              />
              <Button
                icon='pi pi-sign-out pi-fw'
                className='p-button-text mr-2 p-1 w-6'
                style={{ border: '0' }}
                aria-label='Filter'
                onClick={() => {
                  signOut()
                }}
              />
            </>
          ) : (
            <Button
              icon='pi pi-power-off pi-fw'
              className='p-button-text mr-2 p-1 w-6'
              style={{ border: '0' }}
              aria-label='Filter'
              onClick={() => {
                navigate('/')
              }}
            />
          )}
          <Button
            icon='pi pi-cog pi-fw'
            className='p-button-text  p-1 w-6'
            style={{ border: '0' }}
            aria-label='Filter'
            onClick={() => setVisibleRight(true)}
          />
          <Sidebar visible={visibleRight} position='right' onHide={() => setVisibleRight(false)}>
            Sidebar
          </Sidebar>
        </div>
      </div>
    </div>
  )
}
