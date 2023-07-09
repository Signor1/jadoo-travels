type ButtonProps = {
    className: string
    children: string | React.ReactNode
} & Omit<React.ComponentProps<'button'>, 'children'>

export const Button = ({ className, children, ...rest }: ButtonProps) => {
    return (
        <button {...rest} className={className}>{children}</button>
    )
}
