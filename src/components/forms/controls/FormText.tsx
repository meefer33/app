import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { Controller, useFormContext } from 'react-hook-form'
import useFormErrorMessage from '../hooks/useFormErrorMessage'

interface IFormText {
  name: string
  label: string
  required?: boolean
  rules?: object
}

export default function FormText({
  name,
  label,
  required = false,
  rules = {}
}: IFormText) {
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
      <Controller
        name={name}
        control={control}
        rules={{
          required: isRequired,
          ...rules
        }}
        render={({ field }) => (
          <InputText
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
