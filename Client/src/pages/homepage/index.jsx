import './index.css';

import Card from '../../components/currentObject/card';
import AboutMe from '../../components/about-me';
import CardProject from '../../components/currentObject/cardProject';
import { useEffect, useState } from 'react';
import {
      userMainData,
      experimentMainData,
      coursesMainData,
      projectMainData,
} from '../../service';
import { Link } from 'react-router-dom';

export default function Homepage() {
      const [userData, setUserData] = useState([]);
      const [projectData, setprojectData] = useState([]);
      const [experimentData, setExperimentData] = useState([]);
      const [coursesData, setCoursesData] = useState([]);
      useEffect(() => {
            (async () => {
                  let resultUser = userMainData();
                  setUserData(await resultUser);
                  let resultProject = projectMainData();
                  setprojectData(await resultProject);
                  let experimentResult = experimentMainData();
                  setExperimentData(await experimentResult);
                  let coursesResult = coursesMainData();
                  setCoursesData(await coursesResult);
            })();
      }, []);

      const resultUsers = userData;
      const resultProject = projectData;
      const resultExperiment = experimentData;
      const resultCourses = coursesData;

      // console.log(resultUsers);
      console.log(resultProject);
      // console.log(resultCourses);
      return (
            <>
                  {resultUsers.map((user, index) => (
                        <section
                              className="aboutme-section"
                              key={`goal-${index}`}
                        >
                              <AboutMe
                                    lastName={user?.lastName}
                                    firstName={user.firstName}
                                    work={user.jobs}
                                    whoIam={user?.whoIam?.map(
                                          (whoIam, index) => (
                                                <li
                                                      key={`goal-${index}`}
                                                      className="goal-content-goal"
                                                >
                                                      {whoIam}
                                                </li>
                                          ),
                                    )}
                                    image={user.image}
                                    altLastName={user.altLastName}
                              />
                        </section>
                  ))}
                  <section className="card-section">
                        <h1 className="section-title">
                              Éxperience / Formation
                        </h1>
                        <div className="background-homepage-card">
                              <div className="homepage-card-container">
                                    {resultExperiment
                                          .slice(0, 5)
                                          .map((experiment, index) => (
                                                <Card
                                                      key={`/project/-${index}`}
                                                      title={
                                                            experiment?.experimentsName
                                                      }
                                                />
                                          ))}
                                    {resultCourses
                                          .slice(0, 5)
                                          .map((courses, index) => (
                                                <Card
                                                      key={`/project/-${index}`}
                                                      title={
                                                            courses?.coursesName
                                                      }
                                                />
                                          ))}
                              </div>
                        </div>
                  </section>
                  <section className="project-section">
                        <h1 className="section-title">Projets réaliser</h1>
                        {resultProject.slice(0, 5).map((project, index) => (
                              <Card
                                    key={`/project/-${index}`}
                                    title={project?.title}
                                    link="Voir le projet"
                                    url="/detail-project/"
                                    linked={project._id}
                              />
                        ))}
                  </section>
            </>
      );
}
