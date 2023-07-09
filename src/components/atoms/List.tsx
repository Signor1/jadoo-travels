type ListProps = {
    className?: string
    children: React.ReactNode | string
}

export const List = ({ className, children, ...rest }: ListProps) => {
    return (
        <>
            <li className={className} {...rest}>{children}</li>
        </>
    )
}
