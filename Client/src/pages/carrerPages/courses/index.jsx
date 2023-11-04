import { useEffect, useState } from 'react';
import CarrerComponent from '../../../components/careerComponents';
import { coursesMainData } from '../../../service';

export default function Courses() {
      const [courses, setCourses] = useState([]);
      useEffect(() => {
            (async () => {
                  let coursesRes = coursesMainData();
                  setCourses(await coursesRes);
            })();
      }, []);
      const resCourses = courses;
      return (
            <section>
                  <h1 className="object-title">Formation</h1>
                  {resCourses.map((courses, index) => (
                        <CarrerComponent
                              id={courses?.coursesName}
                              key={`courses-${index}`}
                              carrerTitle={courses.coursesName}
                              carrerJobs={courses?.coursesJobs}
                              carrerStudyLevel={courses?.coursesLvl}
                              carrerDateStart={courses?.coursesDateStart}
                              carrerDateEnd={courses?.coursesDateEnd}
                              carrerDescription={courses?.coursesDescription?.map(
                                    (description, index) => (
                                          <li
                                                key={`description-${index}`}
                                                className="carrer-content-description"
                                          >
                                                <p className="carrer-description">
                                                      {description}
                                                </p>
                                          </li>
                                    ),
                              )}
                              stackTitle="Stack"
                              goalTitle="Goal"
                              goal={courses?.coursesGoal?.map((goal, index) => (
                                    <li
                                          key={`goal-${index}`}
                                          className="carrer-content-goal"
                                    >
                                          <small> {goal}</small>
                                    </li>
                              ))}
                              stack={courses?.coursesStack?.map(
                                    (Stack, index) => (
                                          <li
                                                key={`stack-${index}`}
                                                className="carrer-content-stack"
                                          >
                                                <small> {Stack}</small>
                                          </li>
                                    ),
                              )}
                        />
                  ))}
            </section>
      );
}
