import { Link } from 'react-router-dom';
import './index.css';
/**
 *
 * @function Card it was a function to display elements with props
 * @returns
 */
export default function Card(props) {
      return (
            <>
                  <div className="card-container">
                        <ul className="card-list">
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
