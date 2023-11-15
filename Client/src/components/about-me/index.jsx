import { useInView } from 'react-intersection-observer';
import './index.css';
/**
 * @function AboutMe it was a function to display a lot of myself information it was using call api to get all this information
 * @returns
 */
export default function AboutMe(props) {
      const { ref: imageAboutMe, inView: imageAboutMeIsVisible } = useInView({
            threshold: 0,
            initialInView: true,
      });
      const { ref: titleAboutMe, inView: titleAboutMeIsVisible } = useInView({
            threshold: 1,
            initialInView: true,
      });
      return (
            <>
                  <div className="aboutme-container">
                        <ul className="aboutme-content aboutme-wrap">
                              <li className="aboutme-list-title">
                                    <h1
                                          ref={titleAboutMe}
                                          className={`homepage-aboutme-title ${
                                                titleAboutMeIsVisible
                                                      ? `homepage-aboutme-title-animation`
                                                      : ''
                                          }`}
                                    >
                                          Bienvenu, je suis {props.lastName}{' '}
                                          {props.firstName}
                                    </h1>
                                    <span>{props.work}</span>
                              </li>
                              {props.whoIam}
                        </ul>
                        <ul className="aboutme-content">
                              <li
                                    ref={imageAboutMe}
                                    className={`homepage-aboutme-image ${
                                          imageAboutMeIsVisible
                                                ? `homepage-aboutme-image-animation`
                                                : ''
                                    }`}
                              >
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
