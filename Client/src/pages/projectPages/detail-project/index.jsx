import { useState, useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import Dropdown from '../../../components/currentObject/dropdown';
import Detail from '../../../components/projectComponent/detail';
import { projectMainData } from '../../../service';
import { PROJECT_DATA } from '../../../Mock/data.js'

export default function DetailProject() {
      const id = useParams();

      const project = PROJECT_DATA.find(
            (project) => project.id === id.id,
      );

      return (
            <>
                  {project ? (
                        <>
                              <Detail
                                    title={project?.title}
                                    description={
                                          project?.description
                                    }
                                    github={project?.githubUrl}
                                    website={project?.projectUrl}
                                    image={project?.allImage?.map(
                                          (image, index) => (
                                                <li
                                                      key={`image-${index}`}
                                                      className="image-content-project"
                                                >
                                                      <img
                                                            className="image-project"
                                                            src={image}
                                                            alt=""
                                                      />
                                                </li>
                                          ),
                                    )}
                              />

                              <Dropdown
                                    title="Objectif"
                                    content={project?.goal?.map(
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
                                    content={project?.stack?.map(
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
