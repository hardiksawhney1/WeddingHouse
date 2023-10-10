import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import menuicon1 from '../images/menuicon1.png'
export default function Menu(){
    return(
        <div className="menu">
            <FontAwesomeIcon icon={faBars} className='menubars' />
        </div>
    );
}