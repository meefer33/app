import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutDashboard from '@/layouts/LayoutDashboard'
import LayoutHome from '@/layouts/LayoutHome'
import Dashboard from '@/pages/account/Dashboard'
import Home from '@/pages/Home'
import NetworkError from '@/pages/NetworkError'
import { BlockUI } from 'primereact/blockui'
import PageNotFound from '@/pages/PageNotFound'
import Profile from '@/pages/account/profile/Profile'
import ProfileEdit from '@/pages/account/profile/ProfileEdit'
import ProfileSettings from '@/pages/account/profile/ProfileSettings'
import useApiErrors from './api/useApiErrors'
import { useToast } from './components/toast/ToastContext'
import useAppLoad from './api/useAppLoad'
import Settings from './pages/account/settings/Settings'
import SettingsBranding from './pages/account/settings/SettingsBranding'
import SettingsRoles from './pages/account/settings/SettingsRoles'
import Session from 'supertokens-auth-react/recipe/session'
import useAuth from './api/useAuth'
import Login from './pages/Login'

const App = () => {
  const { healthy, loadApp, appLoaded } = useAppLoad()
  const { toast } = useApiErrors()
  const { showToast } = useToast()


  useEffect(() => {
    loadApp()
  }, [])

  useEffect(() => {
    toast.detail && showToast(toast.severity, toast.summary, toast.detail)
  }, [toast])

  return (
    <>
      {appLoaded && (
        <Routes>
          <Route path='/' element={<LayoutHome />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Route>
          <Route path='/account' element={<LayoutDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path='/account/dashboard' element={<Dashboard />} />
            <Route path='/account/profile/' element={<Profile />}>
              <Route index element={<ProfileEdit />} />
              <Route path='edit' element={<ProfileEdit />} />
              <Route path='settings' element={<ProfileSettings />} />
            </Route>
            <Route path='/account/settings/' element={<Settings />}>
              <Route index element={<SettingsBranding />} />
              <Route path='branding' element={<SettingsBranding />} />
              <Route path='roles' element={<SettingsRoles />} />
            </Route>
          </Route>
          <Route path='/network-error' element={<PageNotFound />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      )}
      <BlockUI blocked={!healthy} template={<NetworkError />} fullScreen />
    </>
  )
}
export default App
