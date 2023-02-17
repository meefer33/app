import { Outlet } from 'react-router-dom'
import { Section } from '@/ui/layouts/Layouts'

export default function Settings() {
  return (
    <Section>
      <Outlet />
    </Section>
  )
}
