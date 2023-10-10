
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
export default function Contacts(){
    return(
        <div>
        <div className="contacts">
            {/* <ul>
                <li className='linkingcon'>
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="elementscon">Call +01 1234567890</span>
                </li>
                <li className='linkingcon'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="elementscon">donila@gmail.com</span>
                </li>
            </ul> */}
                <div className='linkingcon'>
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="elementscon">Call +01 1234567890</span>
                </div>
                <div className='linkingcon2'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="elementscon">donila@gmail.com</span>
                </div>
            </div>
        </div>
    );
}