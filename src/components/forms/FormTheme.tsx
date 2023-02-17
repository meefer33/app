import { Button } from 'primereact/button'
import { FormProvider, useForm } from 'react-hook-form'
import FormColorPallete from './controls/FormColorPallete'
import FormEditor from './controls/FormEditor'
import FormText from './controls/FormText'

export default function FormTheme() {
  const defaultValues = {
    surface: '',
    first_name: '',
    blog: ''
  }
  const methods = useForm({ defaultValues })

  const onSubmit = (d: object) => {
    console.log(d)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='p-fluid'>
        <FormColorPallete name='surface' label='Surface' required={true} />
        <FormText name='first_name' label='First Name' required={true} />
        <FormEditor name='blog' label='Blog' required={true} />
        <Button type='submit' label='Submit' className='w-full' />
      </form>
    </FormProvider>
  )
}
