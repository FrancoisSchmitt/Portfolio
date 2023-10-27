import './index.css';
// import ButtonMailto from '../../currentObject/buttonMailTo/index.jsx';
import { NavLink } from 'react-router-dom';

/**
 *
 * @returns Footers
 */

export default function Footer() {
      return (
            <footer className="footer">
                  <nav className="footer-nav">
                        {/* <ul>
                              <li>
                                    <ButtonMailto
                                          label="Me contacter"
                                          mailto="mailto:Schmitt.francois.1699@gmail.com"
                                    />
                              </li>
                        </ul> */}
                        <ul className="footer-list">
                              <li>
                                    <NavLink
                                          to="/"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                      ? 'active'
                                                      : ''
                                          }
                                    >
                                          Accueil
                                    </NavLink>
                              </li>

                              <li>
                                    <NavLink
                                          to="/Experiment"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                      ? 'active'
                                                      : ''
                                          }
                                    >
                                          Éxperience
                                    </NavLink>
                              </li>
                              <li>
                                    <NavLink
                                          to="/Courses"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                      ? 'active'
                                                      : ''
                                          }
                                    >
                                          Formation
                                    </NavLink>
                              </li>

                              <li>
                                    <NavLink
                                          to="/Project"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                      ? 'active'
                                                      : ''
                                          }
                                    >
                                          Projets
                                    </NavLink>
                              </li>

                              <li>
                                    <NavLink
                                          to="https://www.linkedin.com/in/schmitt-francois"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                      ? 'active'
                                                      : ''
                                          }
                                    >
                                          Linkedin
                                    </NavLink>
                              </li>

                              <li>
                                    <NavLink
                                          to="https://github.com/FrancoisSchmitt"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                      ? 'active'
                                                      : ''
                                          }
                                    >
                                          GitHub
                                    </NavLink>
                              </li>
                        </ul>
                        <ul>
                              <li>
                                    François Schmitt, © 2023. Tous droits
                                    réservés.
                              </li>
                        </ul>
                  </nav>
            </footer>
      );
}
