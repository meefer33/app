import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { Controller, useFormContext } from 'react-hook-form'
import useFormErrorMessage from '../hooks/useFormErrorMessage'

interface IFormEmail {
  name: string
  label: string
  required?: boolean
}

export default function FormEmail({
  name,
  label,
  required = false
}: IFormEmail) {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const isRequired = required ? `${label} is required.` : false

  return (
    <div className="field">
      <label className={classNames({ 'p-error': !!errors[name] })}>
        {label} {required && '*'}
      </label>
      <span className="p-input-icon-right">
        <i className="pi pi-envelope" />
        <Controller
          name={name}
          control={control}
          rules={{
            required: isRequired,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address. E.g. example@email.com'
            }
          }}
          render={({ field }) => (
            <InputText
              id={field.name}
              {...field}
              className={classNames({ 'p-invalid': errors[name] })}
            />
          )}
        />
      </span>
      {useFormErrorMessage(name, errors)}
    </div>
  )
}
