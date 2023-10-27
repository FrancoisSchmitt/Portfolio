import { useState, useEffect } from 'react';

import './index.css';
import { Link } from 'react-router-dom';
import { projectMainData } from '../../../service';
import CardProject from '../../../components/currentObject/cardProject';

export default function ProjectPage() {
      const [projectData, setProjectData] = useState([]);
      useEffect(() => {
            (async () => {
                  let projectRes = projectMainData();
                  setProjectData(await projectRes);
            })();
      }, []);
      const resProject = projectData;
      console.log(resProject);
      return (
            <>
                  <section className="container">
                        <div className="gallery-container">
                              <ul className="mItem">
                                    <li>
                                          {resProject.map((project, index) => (
                                                <Link
                                                      key={`/detail-project/-${index}`}
                                                      to={`/detail-project/${project._id}`}
                                                      className="gallery-link"
                                                >
                                                      <CardProject
                                                            image={
                                                                  project.image
                                                            }
                                                            altImage={
                                                                  project.image
                                                            }
                                                      />
                                                </Link>
                                          ))}
                                    </li>
                              </ul>
                        </div>
                  </section>
            </>
      );
}
