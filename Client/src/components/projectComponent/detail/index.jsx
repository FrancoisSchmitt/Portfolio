import './index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
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
                        <li>
                              <img src={props.image} alt={props.imageAlt} />
                        </li>

                        <li>
                              <p>
                                    Visiter le site
                                    <Link
                                          to={props.link}
                                          className="gallery-link"
                                    >
                                          <small>{props.title}</small>
                                    </Link>
                              </p>
                        </li>
                  </ul>
            </>
      );
}
