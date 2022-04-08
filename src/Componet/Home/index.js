import logoTitle from '../../assests/images/logo-a.png'
import logoq from '../../assests/images/logo-q.png'

import './index.scss'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
// import Logo from '../Logo'

const Home = () => {
    const [letterClass, setletterClass] = useState('text-animate')
    const nameArray = ['b','r','a','r']
    const nameArray1 = ['h','m','a','d']
    const nameArray2 = ['u','r','e','s','h','i']


    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
    useEffect(()=>{
        setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 4000)
    },[])

return(
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass}_12`}>i</span>
                <br/> 
                <span className={`${letterClass}_13`}>I</span> 
                <span className={`${letterClass}_14`}>'m</span> 
                <img src={logoTitle} alt='Developer'/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx = {15}/>
                <img src={logoTitle} alt='Developer'/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray1} idx = {19}/>
                <img src={logoq} alt='Developer'/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray2} idx = {25}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx = {39}/>
                </h1>
                <h2>Forntend Developer React Js Expert</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            {/* <Logo/> */}
            
        </div>
);
    
}
export default Home