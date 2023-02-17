export default function useFormErrorMessage(name: string, errors: object) {
  {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    )
  }
}
