type InputProps = {
    containerClass: string
    inputClass: string
    children?: React.ReactNode
} & Omit<React.ComponentProps<'input'>, 'children'>

export const Input = ({ containerClass, inputClass, children, ...rest }: InputProps) => {
    return (
        <div className={containerClass}>
            <input className={inputClass} {...rest} />
            {children}
        </div>
    )
}