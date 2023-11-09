import { Link } from 'react-router-dom';
import './index.css';
import { useInView } from 'react-intersection-observer';

/**
 *
 * @function Card it was a function to display elements with props
 * @returns
 */
export default function Card(props) {
      const { ref: ulRef, inView: elementIsVisible } = useInView();
      return (
            <>
                  <div className="card-container">
                        <ul className="card-list">
                              <li
                                    ref={ulRef}
                                    className={`card-list-content ${
                                          elementIsVisible
                                                ? `card-list-${props.index}`
                                                : ''
                                    }`}
                              >
                                    <h1>{props.title}</h1>
                                    <Link
                                          to={`${props.url}${props.linked}`}
                                          className="link-project"
                                    >
                                          <p>{props.link}</p>
                                    </Link>
                              </li>
                        </ul>
                  </div>
            </>
      );
}
