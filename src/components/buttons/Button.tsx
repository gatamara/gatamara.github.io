import { useState } from 'react'
import './Button.css'

interface Props {
    text: string
    icon?: JSX.Element
    href?: string
    backgroundColor?: string
    color?: string
    borderColor?: string
    classname?: string

}


export const Button = ({ text, icon, href, backgroundColor, color, borderColor }: Props) => {



    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <a
            href={href}
            target='_blank'
            className='button'
            style={{ backgroundColor: isHover ? "black" : backgroundColor, color: color, borderColor: isHover ? "#ff5586" : borderColor }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {icon}   {text}
        </a>
    )
}
