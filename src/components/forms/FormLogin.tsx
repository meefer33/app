import useAuth from '@/api/useAuth'
import { Button } from 'primereact/button'
import { FormProvider, useForm } from 'react-hook-form'
import FormEmail from './controls/FormEmail'
import FormPassword from './controls/FormPassword'


export default function FormLogin() {
  
  const {signIn,session} = useAuth()
  const formLogin = {
    defaultValues: {
      email: '',
      password: '',
    },
    form: [
      {type: 'Email', name: 'email', label: 'Email', required: true}
    ]
  }

  const defaultValues = formLogin.defaultValues
  const methods = useForm({ defaultValues })

  const onSubmit = (form:{email:string,password:string}) => {
    console.log(form.email,form.password)

    const formFields = {
      formFields: [
        {id:'email',value:form.email},
        {id:'password',value:form.password},
      ]
    }
   signIn(formFields)
  
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='p-fluid'>
        <FormEmail name='email' label='Email' required={true} />
        <FormPassword name='password' label='Password' required={true} />
        <Button type='submit' label='Sign In' icon='pi pi-user' className='w-full' />
      </form>
    </FormProvider>
  )
}
