import { Image } from "../atoms/Image"

type CardProps = {
    cardClass: string
    imageWrapperClass: string
    imageAlt: string
    imageSrc: string
    textWrapperClass?: string
    cover?: string
    children?: React.ReactNode
}

export const Card = ({ cardClass, imageWrapperClass, imageAlt, imageSrc, textWrapperClass, children, cover, ...rest }: CardProps) => {
    return (
        <div className={cardClass} {...rest}>
            <Image className={imageWrapperClass} objectCover={cover} alt={imageAlt} image={imageSrc} />
            <div className={textWrapperClass}>
                {children}
            </div>
        </div>
    )
}
