import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Dropdown from '../../../components/currentObject/dropdown';
import Detail from '../../../components/projectComponent/detail';
import { PROJECT_DATA } from '../../../Mock/data.js';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function DetailProject() {
      const id = useParams();

      const project = PROJECT_DATA.find((project) => project.id === id.id);

      const [selected, setSelected] = useState(0);


      const data = project?.host;

      const toggle = (i) => {
            setSelected(selected === i ? 0 : i);

            console.log(selected)
      };
      return (
            <>
                  {project ? (
                        <>
                              <section className="detail-project-section">
                                    <h1>Kasa</h1>
                                    <div className="container-project">
                                          <div className="content-container">
                                                <ul className="project-list">
                                                      {data.map((item, i) => (
                                                            <li
                                                                  className={
                                                                        selected ===
                                                                        i
                                                                        ? `expanded show-${i+1}`
                                                                        : 'collapsed'
                                                                  }
                                                            
                                                                
                                                            >
                                                                  <h4
                                                                        onClick={() =>
                                                                              toggle(
                                                                                    i,
                                                                              )
                                                                        } 
                                                                  >
                                                                        {
                                                                              item.title
                                                                        }

                                                                        {selected ===
                                                                        i ? (
                                                                                    <FontAwesomeIcon 
                                                                                          
                                                                                    icon={
                                                                                          faChevronDown
                                                                                    }
                                                                              />
                                                                        ) : (
                                                                              <FontAwesomeIcon
                                                                                    icon={
                                                                                          faChevronUp
                                                                                    }
                                                                              />
                                                                        )}
                                                                  </h4>
                                                                  <div 
                                                                        className={'container-description'}>
                                                                        <div className="content-project">
                                                                              <div className="content-project-description">
                                                                                    <p
                                                                                         >

                                                                                    {
                                                                                          item.description
                                                                                    }
                                                                                    </p>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </li>
                                                      ))}
                                                </ul>
                                                <div className='content-project-image'>
                                                            {data.map(
                                                                  (item, i) => (
                                                      <picture className={selected === i ? '' : 'hidden'}>


                                                                              <source 
                                                                                    srcSet={item.image}
                                                                                    media="test"
                                                                                    />
                                                                              <img 
                                                                                    src={item.image}
                                                                                    alt=""
                                                                                    />

                                                      </picture>
                                                                                    ),
                                                                                    )}
                                                </div>
                                          </div>
                                    </div>
                              </section>
                              
                              

                              {/* <section className="project-detail-section">
<div>

<Detail
title={project?.title}
description={project?.description}
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
</div>
</section>
<section className="dropdown-detail-section">
<Dropdown
title="Objectifs"
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
title="Technologies"
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
</section> */}
                        </>
                  ) : (
                        <Navigate replace to="/404" />
                  )}
            </>
      );
}
