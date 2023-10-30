import { useEffect, useState } from 'react';
import CoursesComponent from '../../../components/careerComponents/coursesComponent';
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
      console.log(resCourses);
      return (
            <section>
                  <h1 className="test">Éxperience</h1>
                  {resCourses.map((courses, index) => (
                        <CoursesComponent
                              key={`courses-${index}`}
                              coursesName={courses.coursesName}
                              coursesJobs={courses?.coursesJobs}
                              coursesLvl={courses?.coursesLvl}
                              coursesDateStart={courses?.coursesDateStart}
                              coursesDateEnd={courses?.coursesDateEnd}
                              coursesDescription={courses?.coursesDescription}
                              stackTitle="Stack"
                              goalTitle="Goal"
                              goal={courses?.coursesGoal?.map((goal, index) => (
                                    <li
                                          key={`goal-${index}`}
                                          className="courses-content-goal"
                                    >
                                          <small> {goal}</small>
                                    </li>
                              ))}
                              stack={courses?.coursesStack?.map(
                                    (Stack, index) => (
                                          <li
                                                key={`stack-${index}`}
                                                className="courses-content-stack"
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
