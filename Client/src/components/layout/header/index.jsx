import './index.css';
import { NavLink } from 'react-router-dom';
/**
 *
 * @returns Header
 */
export default function Header() {
      return (
            <header className="header">
                  <nav className="header-nav">
                        <ul className="header-list">
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
                                          Expériences
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
                                          Formations
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
                        </ul>
                  </nav>
            </header>
      );
}
