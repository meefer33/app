import { Editor } from 'primereact/editor'
import { classNames } from 'primereact/utils'
import { Controller, useFormContext } from 'react-hook-form'
import useFormErrorMessage from '../hooks/useFormErrorMessage'

interface IFormEditor {
  name: string
  label: string
  required?: boolean
  rules?: object
}

export default function FormEditor({ name, label, required = false, rules = {} }: IFormEditor) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const isRequired = required ? `${label} is required.` : false

  const renderHeader = () => {
    return (
      <>
        <span className='ql-formats'>
          <select className='ql-header'></select>
          <button className='ql-bold' aria-label='Bold'></button>
          <button className='ql-italic' aria-label='Italic'></button>
          <button className='ql-underline' aria-label='Underline'></button>
          <button className='ql-strike' aria-label='Strike'></button>
        </span>
        <span className='ql-formats'>
          <select className='ql-color'></select>
          <select className='ql-background'></select>
        </span>
        <span className='ql-formats'>
          <button className='ql-list' value="bullet" aria-label='Unordered List'></button>
          <button className='ql-list' value="ordered" aria-label='Ordered List'></button>
          <button className='ql-link' aria-label='Link'></button>
        </span>
        <span className='ql-formats'>
          <button className='ql-clean' aria-label='Remove Styles'></button>

        </span>
      </>
    )
  }

  const header = renderHeader()

  return (
    <div className='field'>
      <label className={classNames({ 'p-error': !!errors[name] })}>
        {label} {required && '*'}
      </label>
      <Controller
        name={name}
        control={control}
        rules={{
          required: isRequired,
          ...rules,
        }}
        render={({ field }) => (
          <Editor
            id={field.name}
            name='blog'
            {...field}
            onTextChange={(e) => field.onChange(e.textValue)}
            headerTemplate={header}
          />
        )}
      />
      {useFormErrorMessage(name, errors)}
    </div>
  )
}
