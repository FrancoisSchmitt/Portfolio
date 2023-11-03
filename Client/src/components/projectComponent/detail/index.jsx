import './index.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  Github  from '../../../assets/tesra.svg'

import { faLink } from '@fortawesome/free-solid-svg-icons';
export default function Detail(props) {
      return (
            <>
                  <ul className="detail-project">
                        <li>
                              <h1>{props.title}</h1>
                        </li>
                        <li>
                              <p>{props.description}</p>
                        </li>
                  </ul>
                  <ul className='icon-project'>
                        <li className='icon'>
                              <Link to={props.github}>
                                    <img className="github-icon" src={Github} alt="Logo" />

                              </Link>
                        </li>
                        <li className='icon'>
                              <Link to={props.website}>
                                    {/* Website */}
                                    <FontAwesomeIcon icon={faLink} />
                              </Link>
                        </li>
                  </ul>
                  <ul className="cecatest">{props.image}</ul>
            </>
      );
}
