import { Editor } from 'primereact/editor';
import { classNames } from 'primereact/utils'
import { Controller, useFormContext } from 'react-hook-form'
import useFormErrorMessage from '../hooks/useFormErrorMessage'

interface IFormEditor {
  name: string
  label: string
  required?: boolean
  rules?: object
}

export default function FormEditor({
  name,
  label,
  required = false,
  rules = {}
}: IFormEditor) {
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
        <Editor id={field.name} name="blog" {...field} onTextChange={(e) => field.onChange(e.textValue)} />
        )}
      />
      {useFormErrorMessage(name, errors)}
    </div>
  )
}
