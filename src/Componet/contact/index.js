import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact =()=>{
    const [letterClass,setletterClass] = useState('text-animate')
    const refForm = useRef();
    useEffect(()=>{
             setTimeout(()=>{
            setletterClass('text-animate-hover')
        },3000)
        
    },[])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ogbl6kc', 'template_pnut53j', refForm.current, 'WDwi9b0M3JvyXW6iC')
          .then((result) => {
              console.log(result.text);
              alert('Message has been sent! sussessfuly');
          }, (error) => {
              console.log(error.text);
              alert('something went wrong please try agian');
          });
      };
    return(
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                </h1>
                <p>
                    I am a front-end developer and looking for opportunity to work with IT companies.
                    And also looking for individuals to work with them as a freelanceer. If you are interested, 
                    Contact with me.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'> 
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'> 
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li className='half'> 
                                <input type='text' name='subject' placeholder='Subject' required />
                            </li>
                            <li className='half'>
                                <textarea placeholder='Message' name='message' required>

                                </textarea>
                            </li>
                            <li className='half'>
                                <input type='submit' className='flat-button' value='Send' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact