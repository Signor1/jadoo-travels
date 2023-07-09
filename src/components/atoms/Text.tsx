type TextOwnProps<E extends React.ElementType> = {
    className: string
    children?: React.ReactNode
    as?: E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

export const Text = <E extends React.ElementType = 'div'>({ className, children, as }: TextProps<E>) => {
    const Component = as || 'div'
    return (
        <Component className={className}>{children}</Component>
    )
}
