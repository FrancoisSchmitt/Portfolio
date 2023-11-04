import { useState, useEffect } from 'react';
import { experimentMainData } from '../../../service';
import CarrerComponent from '../../../components/careerComponents';

export default function Experiment() {
      const [experience, setExperience] = useState([]);
      useEffect(() => {
            (async () => {
                  let projectRes = experimentMainData();
                  setExperience(await projectRes);
            })();
      }, []);
      const resExperience = experience;
      return (
            <>
                  <section>
                        <h1 className="object-title">Éxperience</h1>
                        {resExperience.map((experiment, index) => (
                              <CarrerComponent
                                    key={`experiment-${index}`}
                                    carrerTitle={experiment.experimentsName}
                                    carrerDateStart={
                                          experiment.experimentDateStart
                                    }
                                    carrerJobs={experiment?.experimentsJobs}
                                    carrerDateEnd={experiment.experimentDateEnd}
                                    carrerDescription={experiment?.experimentsDescription?.map(
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
                                    goalTitle="Objectif"
                                    stackTitle="Stacks"
                                    goal={experiment?.experimentsGoal?.map(
                                          (goal, index) => (
                                                <li
                                                      key={`goal-${index}`}
                                                      className="carrer-content-goal"
                                                >
                                                      <small> {goal}</small>
                                                </li>
                                          ),
                                    )}
                                    stack={experiment?.experimentStack?.map(
                                          (Stack, index) => (
                                                <li
                                                      key={`stack-${index}`}
                                                      className="carrer-content-stack"
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
