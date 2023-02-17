import { Button } from 'primereact/button'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ToolbarButtons from '@/components/ToolbarButtons'
import SideNavMulti from '../ui/layouts/SideNavMulti'
import SideNavMenu from '../ui/layouts/SideNavMenu'
import useAuth from '@/api/useAuth'
import Session from 'supertokens-auth-react/recipe/session'

export default function LayoutDashboard() {
  const navigate = useNavigate()
  const {authed,signOut} = useAuth()
  const sessionContext: any = Session.useSessionContext()

  useEffect(() => { 
    console.log('HELP')
    if (!sessionContext.loading && sessionContext.doesSessionExist){
      useAuth.getState().setUserId()
    }
  }, [sessionContext])

  const menu = {
    items: [
      { name: 'dashboard', icon: 'pi-home', link: '/account/dashboard' },
      { name: 'profile', icon: 'pi-user', link: '/account/profile' },
      { name: 'settings', icon: 'pi-cog', link: '/account/settings' },
      { name: 'builder', icon: 'pi-cog', link: '/account/builder' },
    ],
    content: {
      dashboard: { label: 'Dashboard', menu: 'dashboard' },
      builder: { label: 'Builder', menu: 'builder' },
      profile: {
        label: 'Profile',
        menu: (
          <SideNavMenu
            title='Profile'
            links={[
              { name: 'Edit', link: 'profile/edit' },
              { name: 'Settings', link: 'profile/settings' },
            ]}
          />
        ),
      },
      settings: {
        label: 'Settings',
        menu: (
          <SideNavMenu
            title='Settings'
            links={[
              { name: 'Branding', link: 'settings/branding' },
              { name: 'Roles', link: 'settings/roles' },
            ]}
          />
        ),
      },
    },
  }

  const BottomMenu = () => (
    <Button
      icon='pi pi-sign-out pi-fw'
      className='p-button-text m-1'
      style={{ border: '0' }}
      aria-label='Filter'
      onClick={() => {
        signOut()
      }}
    />
  )

  useEffect(() => {
    console.log('ld',authed)
    if (!authed) {
      navigate('/login')
    }
  }, [authed])

  return (
    <SideNavMulti menu={menu} bottomMenu={<BottomMenu />} topbarNav={<ToolbarButtons />}>
      <Outlet />
    </SideNavMulti>
  )
}
