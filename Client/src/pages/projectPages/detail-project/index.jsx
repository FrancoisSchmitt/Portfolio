import { useState, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import Dropdown from '../../../components/currentObject/dropdown';
import Detail from '../../../components/projectComponent/detail';
import { projectMainData } from '../../../service';

export default function DetailProject() {
      const id = useParams();

      const [detailProject, setDetailProject] = useState([]);
      useEffect(() => {
            (async () => {
                  let result = projectMainData(id.id);
                  setDetailProject(await result);
            })();
      }, []);

      // const resultDetailProject = detailProject;
      const resultDetailProject = detailProject.find(
            (project) => project._id === id.id,
      );
      console.log(resultDetailProject);

      return (
            <>
                  {detailProject ? (
                        <>
                              <Detail
                                    title={resultDetailProject?.title}
                                    description={
                                          resultDetailProject?.description
                                    }
                                    image={resultDetailProject?.image}
                                    imageAlt={resultDetailProject?.title}
                                    link={resultDetailProject?.projectUrl}
                              />

                              <Dropdown
                                    title="Objectif"
                                    content={resultDetailProject?.goal?.map(
                                          (goal, index) => (
                                                <li
                                                      key={`goal-${index}`}
                                                      className="goal-content-goal"
                                                >
                                                      {goal}
                                                </li>
                                          ),
                                    )}
                              />
                              <Dropdown
                                    title="Technologie"
                                    content={resultDetailProject?.stack?.map(
                                          (Stack, index) => (
                                                <li
                                                      key={`Stack-${index}`}
                                                      className="Stack-content-Stack"
                                                >
                                                      {Stack}
                                                </li>
                                          ),
                                    )}
                              />
                        </>
                  ) : (
                        <Navigate replace to="/404" />
                  )}
            </>
      );
}
