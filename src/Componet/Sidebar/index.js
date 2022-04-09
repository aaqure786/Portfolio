import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assests/images/logo-s.jfif'
// import Logosubtitle from '../../assests/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
   
 return (
     <div className='nav-bar'>
         <Link className='logo' to ='/'>
             <img src={LogoS} alt="Logo" />
             <h4>Abra Ahmad Qureshi</h4>
             {/* <img className='sub-logo' src={Logosubtitle} alt="Logo-subtitle" /> */}
         </Link>
         <nav>
             <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
             </NavLink>
             <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
             </NavLink>
             <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
             </NavLink>
         </nav>
         <ul>
             <li>
                 <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/abrar-ahmad-792724220/'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                 </a>
             </li>

             <li>
                 <a target="_blank" rel='noreferrer' href='https://github.com/aaqure786'>
                    <FontAwesomeIcon icon={faGithub} />
                 </a>
             </li>
         </ul>

     </div>
 )
}

export default Sidebar