import './index.css';
import { Link } from 'react-router-dom';

import Github from '../../../assets/github.svg';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Detail(props) {
      const [isListOpen, setIsListOpen] = useState(false);
      const [isActive, setActive] = useState(false);

      const toggleClass = (e) => {
            setActive(!isActive);
            console.log(isActive);
            console.log(e);
      };

      return (
            <>
                  <h1>Kasa</h1>
                  <div className="container-project">
                        <div className="content-container-project">
                              <ul className="list-of-project">
                                    {props.test}
                                    <li
                                          className={
                                                isActive
                                                      ? 'collasp'
                                                      : 'expanded'
                                          }
                                    >
                                          <h4 onClick={toggleClass}>
                                                iPhone et Mac
                                                <FontAwesomeIcon
                                                      icon={faChevronDown}
                                                />
                                          </h4>
                                          <div className="content-container-project-result">
                                                <div className="content-project">
                                                      <div className="content-project-description">
                                                            {props.description}
                                                      </div>
                                                      <div className="content-project-image image">
                                                            {props.image}
                                                      </div>
                                                </div>
                                          </div>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </>
      );
}
