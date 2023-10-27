import { useState, useEffect } from 'react';

import { experimentMainData } from '../../../service';

import ExperimentComponent from '../../../components/careerComponents/experimentComponent';
// import Study from '../../../src/components/career/study';
export default function Experiment() {
      const [experience, setExperience] = useState([]);
      useEffect(() => {
            (async () => {
                  let projectRes = experimentMainData();
                  setExperience(await projectRes);
            })();
      }, []);
      const resExperience = experience;
      console.log(resExperience);

      return (
            <>
                  <section>
                        <h1 className="test">Éxperience</h1>
                        {resExperience.map((experiment, index) => (
                              <ExperimentComponent
                                    key={`experiment-${index}`}
                                    experimentsName={experiment.experimentsName}
                                    experimentsDescription={experiment?.experimentsDescription?.map(
                                          (description, index) => (
                                                <li
                                                      key={`description-${index}`}
                                                      className="experiment-content-description"
                                                >
                                                      {description}
                                                </li>
                                          ),
                                    )}
                                    experimentsGoal={experiment?.experimentsGoal?.map(
                                          (goal, index) => (
                                                <li
                                                      key={`goal-${index}`}
                                                      className="experiment-content-goal"
                                                >
                                                      <small> {goal}</small>
                                                </li>
                                          ),
                                    )}
                                    experimentStack={experiment?.experimentStack?.map(
                                          (Stack, index) => (
                                                <li
                                                      key={`stack-${index}`}
                                                      className="experiment-content-stack"
                                                >
                                                      <small> {Stack}</small>
                                                </li>
                                          ),
                                    )}
                                    experimentsJobs={experiment.experimentsJobs}
                              />
                        ))}
                  </section>
            </>
      );
}
