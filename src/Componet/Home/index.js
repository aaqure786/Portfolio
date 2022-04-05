import logoTitle from '../../assests/images/logo-s.png'
import './index.scss'
import {Link} from 'react-router-dom'

const Home = () => {

return(
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br/> I am 
                <img src={logoTitle} alt='Developer'/>
                lobodon
                <br/>
                web developer
                </h1>
                <h2>Forntend Developer React Js Expert</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
);
    
}
export default Home