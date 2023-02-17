import { Dropdown, DropdownProps } from 'primereact/dropdown'
import { classNames } from 'primereact/utils'
import { Controller, useFormContext } from 'react-hook-form'
import useFormErrorMessage from '../hooks/useFormErrorMessage'

interface IFormText {
  name: string
  label: string
  required?: boolean
  rules?: object
}

export default function FormColorPallete({ name, label, required = false, rules = {} }: IFormText) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const isRequired = required ? `${label} is required.` : false

  const makeColors = () => {
    const num = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
    const base = ['gray','bluegray','blue','green','red','yellow','orange','purple','teal','cyan','pink','indigo']
    let colors = []
    base.map((v) => {
      num.map((vv) => {
        let hex = getComputedStyle(document.documentElement).getPropertyValue(`--${v}-${vv}`)
        let w = { name: `bg-${v}-${vv}`, value: hex }
        colors.push(w)
      })
    })
    return colors
  }
//console.log(makeColors())
  const colors = [
    {
        "name": "bg-gray-50",
        "value": " #e9e9ea"
    },
    {
        "name": "bg-gray-100",
        "value": " #d2d4d5"
    },
    {
        "name": "bg-gray-200",
        "value": " #bcbec0"
    },
    {
        "name": "bg-gray-300",
        "value": " #a6a8ab"
    },
    {
        "name": "bg-gray-400",
        "value": " #909397"
    },
    {
        "name": "bg-gray-500",
        "value": " #797d82"
    },
    {
        "name": "bg-gray-600",
        "value": " #63676d"
    },
    {
        "name": "bg-gray-700",
        "value": " #4d5158"
    },
    {
        "name": "bg-gray-800",
        "value": " #363c43"
    },
    {
        "name": "bg-gray-900",
        "value": " #20262e"
    },
    {
        "name": "bg-bluegray-50",
        "value": " #f7f8f9"
    },
    {
        "name": "bg-bluegray-100",
        "value": " #dadee3"
    },
    {
        "name": "bg-bluegray-200",
        "value": " #bcc3cd"
    },
    {
        "name": "bg-bluegray-300",
        "value": " #9fa9b7"
    },
    {
        "name": "bg-bluegray-400",
        "value": " #818ea1"
    },
    {
        "name": "bg-bluegray-500",
        "value": " #64748b"
    },
    {
        "name": "bg-bluegray-600",
        "value": " #556376"
    },
    {
        "name": "bg-bluegray-700",
        "value": " #465161"
    },
    {
        "name": "bg-bluegray-800",
        "value": " #37404c"
    },
    {
        "name": "bg-bluegray-900",
        "value": " #282e38"
    },
    {
        "name": "bg-blue-50",
        "value": " #f5f9ff"
    },
    {
        "name": "bg-blue-100",
        "value": " #d0e1fd"
    },
    {
        "name": "bg-blue-200",
        "value": " #abc9fb"
    },
    {
        "name": "bg-blue-300",
        "value": " #85b2f9"
    },
    {
        "name": "bg-blue-400",
        "value": " #609af8"
    },
    {
        "name": "bg-blue-500",
        "value": " #3b82f6"
    },
    {
        "name": "bg-blue-600",
        "value": " #326fd1"
    },
    {
        "name": "bg-blue-700",
        "value": " #295bac"
    },
    {
        "name": "bg-blue-800",
        "value": " #204887"
    },
    {
        "name": "bg-blue-900",
        "value": " #183462"
    },
    {
        "name": "bg-green-50",
        "value": " #f4fcf7"
    },
    {
        "name": "bg-green-100",
        "value": " #caf1d8"
    },
    {
        "name": "bg-green-200",
        "value": " #a0e6ba"
    },
    {
        "name": "bg-green-300",
        "value": " #76db9b"
    },
    {
        "name": "bg-green-400",
        "value": " #4cd07d"
    },
    {
        "name": "bg-green-500",
        "value": " #22c55e"
    },
    {
        "name": "bg-green-600",
        "value": " #1da750"
    },
    {
        "name": "bg-green-700",
        "value": " #188a42"
    },
    {
        "name": "bg-green-800",
        "value": " #136c34"
    },
    {
        "name": "bg-green-900",
        "value": " #0e4f26"
    },
    {
        "name": "bg-red-50",
        "value": " #fff5f5"
    },
    {
        "name": "bg-red-100",
        "value": " #ffd0ce"
    },
    {
        "name": "bg-red-200",
        "value": " #ffaca7"
    },
    {
        "name": "bg-red-300",
        "value": " #ff8780"
    },
    {
        "name": "bg-red-400",
        "value": " #ff6259"
    },
    {
        "name": "bg-red-500",
        "value": " #ff3d32"
    },
    {
        "name": "bg-red-600",
        "value": " #d9342b"
    },
    {
        "name": "bg-red-700",
        "value": " #b32b23"
    },
    {
        "name": "bg-red-800",
        "value": " #8c221c"
    },
    {
        "name": "bg-red-900",
        "value": " #661814"
    },
    {
        "name": "bg-yellow-50",
        "value": " #fefbf3"
    },
    {
        "name": "bg-yellow-100",
        "value": " #faedc4"
    },
    {
        "name": "bg-yellow-200",
        "value": " #f6de95"
    },
    {
        "name": "bg-yellow-300",
        "value": " #f2d066"
    },
    {
        "name": "bg-yellow-400",
        "value": " #eec137"
    },
    {
        "name": "bg-yellow-500",
        "value": " #eab308"
    },
    {
        "name": "bg-yellow-600",
        "value": " #c79807"
    },
    {
        "name": "bg-yellow-700",
        "value": " #a47d06"
    },
    {
        "name": "bg-yellow-800",
        "value": " #816204"
    },
    {
        "name": "bg-yellow-900",
        "value": " #5e4803"
    },
    {
        "name": "bg-orange-50",
        "value": " #fff8f3"
    },
    {
        "name": "bg-orange-100",
        "value": " #feddc7"
    },
    {
        "name": "bg-orange-200",
        "value": " #fcc39b"
    },
    {
        "name": "bg-orange-300",
        "value": " #fba86f"
    },
    {
        "name": "bg-orange-400",
        "value": " #fa8e42"
    },
    {
        "name": "bg-orange-500",
        "value": " #f97316"
    },
    {
        "name": "bg-orange-600",
        "value": " #d46213"
    },
    {
        "name": "bg-orange-700",
        "value": " #ae510f"
    },
    {
        "name": "bg-orange-800",
        "value": " #893f0c"
    },
    {
        "name": "bg-orange-900",
        "value": " #642e09"
    },
    {
        "name": "bg-purple-50",
        "value": " #fbf7ff"
    },
    {
        "name": "bg-purple-100",
        "value": " #ead6fd"
    },
    {
        "name": "bg-purple-200",
        "value": " #dab6fc"
    },
    {
        "name": "bg-purple-300",
        "value": " #c996fa"
    },
    {
        "name": "bg-purple-400",
        "value": " #b975f9"
    },
    {
        "name": "bg-purple-500",
        "value": " #a855f7"
    },
    {
        "name": "bg-purple-600",
        "value": " #8f48d2"
    },
    {
        "name": "bg-purple-700",
        "value": " #763cad"
    },
    {
        "name": "bg-purple-800",
        "value": " #5c2f88"
    },
    {
        "name": "bg-purple-900",
        "value": " #432263"
    },
    {
        "name": "bg-teal-50",
        "value": " #f3fbfb"
    },
    {
        "name": "bg-teal-100",
        "value": " #c7eeea"
    },
    {
        "name": "bg-teal-200",
        "value": " #9ae0d9"
    },
    {
        "name": "bg-teal-300",
        "value": " #6dd3c8"
    },
    {
        "name": "bg-teal-400",
        "value": " #41c5b7"
    },
    {
        "name": "bg-teal-500",
        "value": " #14b8a6"
    },
    {
        "name": "bg-teal-600",
        "value": " #119c8d"
    },
    {
        "name": "bg-teal-700",
        "value": " #0e8174"
    },
    {
        "name": "bg-teal-800",
        "value": " #0b655b"
    },
    {
        "name": "bg-teal-900",
        "value": " #084a42"
    },
    {
        "name": "bg-cyan-50",
        "value": " #f3fbfd"
    },
    {
        "name": "bg-cyan-100",
        "value": " #c3edf5"
    },
    {
        "name": "bg-cyan-200",
        "value": " #94e0ed"
    },
    {
        "name": "bg-cyan-300",
        "value": " #65d2e4"
    },
    {
        "name": "bg-cyan-400",
        "value": " #35c4dc"
    },
    {
        "name": "bg-cyan-500",
        "value": " #06b6d4"
    },
    {
        "name": "bg-cyan-600",
        "value": " #059bb4"
    },
    {
        "name": "bg-cyan-700",
        "value": " #047f94"
    },
    {
        "name": "bg-cyan-800",
        "value": " #036475"
    },
    {
        "name": "bg-cyan-900",
        "value": " #024955"
    },
    {
        "name": "bg-pink-50",
        "value": " #fef6fa"
    },
    {
        "name": "bg-pink-100",
        "value": " #fad3e7"
    },
    {
        "name": "bg-pink-200",
        "value": " #f7b0d3"
    },
    {
        "name": "bg-pink-300",
        "value": " #f38ec0"
    },
    {
        "name": "bg-pink-400",
        "value": " #f06bac"
    },
    {
        "name": "bg-pink-500",
        "value": " #ec4899"
    },
    {
        "name": "bg-pink-600",
        "value": " #c93d82"
    },
    {
        "name": "bg-pink-700",
        "value": " #a5326b"
    },
    {
        "name": "bg-pink-800",
        "value": " #822854"
    },
    {
        "name": "bg-pink-900",
        "value": " #5e1d3d"
    },
    {
        "name": "bg-indigo-50",
        "value": " #f7f7fe"
    },
    {
        "name": "bg-indigo-100",
        "value": " #dadafc"
    },
    {
        "name": "bg-indigo-200",
        "value": " #bcbdf9"
    },
    {
        "name": "bg-indigo-300",
        "value": " #9ea0f6"
    },
    {
        "name": "bg-indigo-400",
        "value": " #8183f4"
    },
    {
        "name": "bg-indigo-500",
        "value": " #6366f1"
    },
    {
        "name": "bg-indigo-600",
        "value": " #5457cd"
    },
    {
        "name": "bg-indigo-700",
        "value": " #4547a9"
    },
    {
        "name": "bg-indigo-800",
        "value": " #363885"
    },
    {
        "name": "bg-indigo-900",
        "value": " #282960"
    }
]

  const selectedColorTemplate = (option: any, props: DropdownProps) => {
    if (option) {
      return <div className={`${option.name} p-3`}></div>
    }
    return <span>{props.placeholder}</span>
  }

  const colorOptionTemplate = (option: any) => {
    return <div className={`${option.name} p-3`}></div>
  }

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
        render={({ field: { ref, ...field } }) => (
          <Dropdown
            id={field.name}
            {...field}
            className={classNames({ 'p-invalid': errors[name] })}
            value={field.value}
            options={colors}
            onChange={(e) => {
                field.onChange(e.value)
                //document.documentElement.style.setProperty(field.name, e.value)
            }}
            optionLabel='name'
            showClear
            placeholder='Select a Color'
            valueTemplate={selectedColorTemplate}
            itemTemplate={colorOptionTemplate}
          />
        )}
      />
      {useFormErrorMessage(name, errors)}
    </div>
  )
}
