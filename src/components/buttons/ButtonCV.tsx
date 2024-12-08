import { useState } from 'react'
import './Button.css'
import cvPDF from '/tamaraSalinas.pdf'


interface Props {
    text: string

    href?: string
    backgroundColor?: string
    color?: string
    borderColor?: string
    classname?: string
    onClick?: () => void;
}


export const ButtonCV = ({ text, href, backgroundColor, color, borderColor, onClick }: Props) => {
    const handleDownloadCV = () => {

        console.log('hace click');
        const link = document.createElement('a');
        link.href = cvPDF;
        link.download = 'cv.pdf';
        link.click();
        if (onClick) {
            onClick();
        }

    };

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
            style={{ backgroundColor: isHover ? "white" : backgroundColor, color: isHover ? "#ff5586" : color, borderColor: isHover ? "#ff5586" : borderColor }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleDownloadCV}
        >
            {text}
        </a>

    )
}
