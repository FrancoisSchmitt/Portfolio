import { Link } from 'react-router-dom';
import './index.css';
import { useInView } from 'react-intersection-observer';

/**
 *
 * @function Card it was a function to display elements with props
 * @returns
 */
export default function Card(props) {
      const { ref: ulRef, inView: ulIsVisible } = useInView();
      return (
            <>
                  <div className="card-container">
                        <ul
                              ref={ulRef}
                              className={`card-list ${
                                    ulIsVisible ? `card-section-annimation` : ''
                              }`}
                        >
                              <li>
                                    <h1>{props.title}</h1>
                              </li>

                              <Link
                                    to={`${props.url}${props.linked}`}
                                    className="test-project"
                              >
                                    <li>
                                          <p>{props.link}</p>
                                    </li>
                              </Link>
                        </ul>
                  </div>
            </>
      );
}
