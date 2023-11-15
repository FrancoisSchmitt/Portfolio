import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faGear } from '@fortawesome/free-solid-svg-icons';
import Responsive from '../../assets/responsive-design.svg';
import UX from '../../assets/user-experience.svg';
import UI from '../../assets/user-interface.svg';


import './index.css';
export default function ServiceComponent() {
      return (
            <>
                  <ul className="service-content">
                        <li>
                              <FontAwesomeIcon icon={faCode} />
                              <h3>Code propre</h3>
                              <p>
                                    Créer un code propre qui respecte les règles et normes du langage de developpement
                              </p>
                        </li>
                        <li>
                      <FontAwesomeIcon icon={faDatabase} />
                              <h3>Gestion de données</h3>
                              <p>
                                   Intéragire avec des données qui sont transmisse soit par une API, soit par une liste de données mock
                              </p>
                        </li>
                        <li>
                      <FontAwesomeIcon icon={faGear} />
                              <h3>Algorithme</h3>
                              <p>
                                   Créer des algorithmes, plus ou moins complexes
                              </p>
                        </li>
                        <li>
                              <FontAwesomeIcon icon={faCode} />
                              <h3>Conception créative</h3>
                              <p>
                                   J'aime créer des projets créatif 
                              </p>
                        </li>
                  <li>
                            <img src={Responsive} alt="" />
                              <h3>Responsive design </h3>
                              <p>
                                    Mise en place d'un système de responsive pour que l'experience utilisateur soit bien meilleurs
                              </p>
                        </li>
                        <li>
                              <FontAwesomeIcon icon={faCode} />
                              <h3>Animation</h3>
                              <p>
                                  Création d'animation
                              </p>
                        </li>
                  </ul>
            </>
      );
}
