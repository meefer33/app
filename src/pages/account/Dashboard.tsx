import useAuth from '@/api/useAuth'
import Builder from '@/components/builder/Builder'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const { user, getUser } = useAuth()


  useEffect(() => {
    console.log(user)
  }, [user])

  const [items] = useState(['1', '2', '3']);

  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <Builder />
  )
}
