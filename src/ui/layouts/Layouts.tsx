interface Props {
  cn?: string
  width?: string
  children: React.ReactNode
}

interface ColProps extends Props {
  cn?: string
  size?: string
  children: React.ReactNode
}

export const Section = ({
  children,
  cn = 'px-2 py-4 md:px-4'
}: Props) => {
  return (
    <div className={cn} >
      {children}
    </div>
  )
}

export const Grid = ({ children, cn = '' }: Props) => {
  return <div className={`grid ${cn}`}>{children}</div>
}

export const Col = ({ children, size = '', cn = '' }: ColProps) => {
  const cols = size ? `col-12 lg:col-${size}` : `col-12`
  return <div className={`${cols} ${cn}`}>{children}</div>
}
