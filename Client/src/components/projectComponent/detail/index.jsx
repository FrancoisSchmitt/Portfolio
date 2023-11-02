import './index.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
                                    <FontAwesomeIcon icon={faGithub} />
                              </Link>
                        </li>
                        <li className='icon'>
                              <Link to={props.website}>
                                    <FontAwesomeIcon icon={faLink} />
                              </Link>
                        </li>
                  </ul>
                  <ul className="cecatest">{props.image}</ul>
            </>
      );
}
