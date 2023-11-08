import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import './index.css';
import { Link } from 'react-router-dom';
import { projectMainData } from '../../../service';
import CardProject from '../../../components/currentObject/cardProject';
import styles from './index.css';

export default function ProjectPage() {
      const [projectData, setProjectData] = useState([]);

      useEffect(() => {
            (async () => {
                  let projectRes = projectMainData();
                  setProjectData(await projectRes);
            })();
      }, []);

      const { ref: myRef, inView: myElementIsVisible } = useInView();
      const { ref: magicSectionRef, inView: magicSectionIsVisible } =
            useInView();
      const resProject = projectData;
      return (
            <>
                  <section className="container">
                        <div className="gallery-container">
                              <ul className="mItem">
                                    <li>
                                          {resProject.map((project, index) => (
                                                <Link
                                                      key={`/detail-project/-${index}`}
                                                      to={`/detail-project/${project.id}`}
                                                      ref={magicSectionRef}
                                                      className={`rocket ${
                                                            magicSectionIsVisible
                                                                  ? `animeRocket`
                                                                  : ''
                                                      }`}
                                                >
                                                      <CardProject
                                                            image={
                                                                  project.image
                                                            }
                                                            altImage={
                                                                  project.image
                                                            }
                                                      />
                                                      <p>
                                                            {myElementIsVisible
                                                                  ? 'Yes! 🥳'
                                                                  : 'No 🙈'}
                                                      </p>
                                                </Link>
                                          ))}
                                    </li>
                              </ul>
                        </div>
                  </section>
            </>
      );
}
