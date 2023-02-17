import { Password } from 'primereact/password'
import { classNames } from 'primereact/utils'
import { Controller, useFormContext } from 'react-hook-form'
import useFormErrorMessage from '../hooks/useFormErrorMessage'

interface IFormPassword {
  name: string
  label: string
  required?: boolean
}

export default function FormPassword({
  name,
  label,
  required = false
}: IFormPassword) {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const isRequired = required ? `${label} is required.` : false

  return (
    <div className="field">
      <label className={classNames({ 'p-error': errors[name] })}>
        {label} {required && '*'}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{ required: isRequired }}
        render={({ field }) => (
          <Password
            toggleMask
            feedback={false}
            id={field.name}
            {...field}
            className={classNames({ 'p-invalid': errors[name] })}
          />
        )}
      />
      {useFormErrorMessage(name, errors)}
    </div>
  )
}
