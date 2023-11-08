import './index.css';
/**
 * @function AboutMe it was a function to display a lot of myself information it was using call api to get all this information
 * @returns
 */
export default function AboutMe(props) {
      return (
            <>
                  <div className="aboutme-container">
                        <ul className="aboutme-content aboutme-wrap">
                              <li className="test">
                                    <h1>
                                          Hello, je suis {props.lastName}{' '}
                                          {props.firstName} {props.work}
                                    </h1>
                              </li>
                              {props.whoIam}
                        </ul>
                        <ul className="aboutme-content">
                              <li className="profil-image">
                                    <img
                                          src={props.image}
                                          alt={props.altLastName}
                                    />
                              </li>
                        </ul>
                  </div>
            </>
      );
}
