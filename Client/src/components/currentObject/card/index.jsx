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
                              <li>
                                    <p>{props.link}</p>
                              </li>
                        </ul>
                  </div>
            </>
      );
}
