import './index.scss';
import logoS from '../../assests/images/logo-s.png'
import {  useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo =() =>{

    const bgRef = useRef();
    // const outlinelogRef = useRef();
    const solidlogRef = useRef();

    useEffect(()=>{
        gsap.registerPlugin(DrawSVGPlugin)
        gsap.timeline()
        .to(bgRef.current,{
            duration:1,
            opacity: 1
        })
    },[])
    return(
        <div className='logo-container' ref={bgRef}>
            <img ref={solidlogRef} src={logoS} alt="s" className='solid-logo'/>
            <svg
            width="559pt"
            height="897pt"
            version='1.0'
            viewBox='0 0 559 897'
            xmlns='http://www.w3.org/2000/svg'
            >
                <g className='svg-container'
                transform='translate(0 457) scale(.1 -.1)'
                fill='none'
                >
                {/* <path d ="m2930 4560c-344-16-623-85-915-228-231-114406-241-600431-61060-145-137-31" */}
                
                </g>

            </svg>
        </div>
    )
}

export default Logo