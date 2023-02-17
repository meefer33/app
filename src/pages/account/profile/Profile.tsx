import { Outlet } from 'react-router-dom'
import { Section } from '@/ui/layouts/Layouts'

export default function Profile() {
  return (
    <Section>
      <Outlet />
    </Section>
  )
}
