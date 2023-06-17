import './Button.css'


interface Props {
    text: string
    icon?: JSX.Element
    href?: string
}


export const Button = ({ text, icon, href }: Props) => {
    return (
        <a href={href} target='_blank' className='button'>
            {icon}   {text}
        </a>
    )
}
