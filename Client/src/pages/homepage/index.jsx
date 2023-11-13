import './index.css';
import { useInView } from 'react-intersection-observer';

import Card from '../../components/currentObject/card';
import AboutMe from '../../components/about-me';
import { useEffect, useState } from 'react';
import {
      userMainData,
      experimentMainData,
      coursesMainData,
      projectMainData,
} from '../../service';

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

      const { ref: titleSection1, inView: title1IsVisible } = useInView({
            threshold: 1,
            initialInView: true,
      });
      const { ref: titleSection2, inView: title2IsVisible } = useInView({
            threshold: 1,
            initialInView: true,
      });
      const { ref: descriptionAboutMe, inView: descriptionAboutMeIsVisible } =
            useInView({
                  threshold: 1,
                  initialInView: true,
            });

      const resultUsers = userData;
      const resultProject = projectData;
      const resultExperiment = experimentData;
      const resultCourses = coursesData;


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
                                                      ref={descriptionAboutMe}
                                                      className={`homepage-content-description ${
                                                            descriptionAboutMeIsVisible
                                                                  ? `homepage-content-description-animation-${
                                                                          index +
                                                                          1
                                                                    }`
                                                                  : ''
                                                      }`}
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

                  <section className="carrer-section">
                        <h1
                              ref={titleSection1}
                              className={`section-title-1 ${
                                    title1IsVisible ? `title-annimation-1` : ''
                              }`}
                        >
                              experiences / Formations
                        </h1>

                        {resultExperiment
                              .slice(0, 5)
                              .map((experiment, index) => (
                                    <Card
                                          index={index + 1}
                                          key={`/project/-${index + 1}`}
                                          title={experiment?.experimentsName}
                                    />
                              ))}
                        {resultCourses.slice(0, 5).map((courses, index) => (
                              <Card
                                    index={index + 2}
                                    key={`/project/-${index}`}
                                    title={courses?.coursesName}
                              />
                        ))}
                  </section>
                  <section className="project-section">
                        <h1
                              ref={titleSection2}
                              className={`section-title-1 ${
                                    title2IsVisible ? `title-annimation-2` : ''
                              }`}
                        >
                              Projets réalisés
                        </h1>
                        {resultProject.slice(0, 5).map((project, index) => (
                              <Card
                                    index={index + 1}
                                    key={`/project/-${index}`}
                                    title={project?.title}
                                    link="Voir le projet"
                                    linked={project.title}
                              />
                        ))}
                  </section>
            </>
      );
}
