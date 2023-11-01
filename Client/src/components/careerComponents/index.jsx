import Dropdown from '../currentObject/dropdown';
import './index.css';

export default function CarrerComponent(props) {
      return (
            <>
                  <ul className="carrer-list" id={props.id}>
                        <li className="carrer-no-wrap">
                              <h2 className="carrer-title">
                                    {props.carrerTitle}{' '}
                              </h2>
                              <small className="carrer-specificity">
                                    {props.carrerJobs}
                              </small>
                              <small className="carrer-specificity">
                                    {props.carrerStudyLevel}
                              </small>
                              <small className="carrer-specificity">
                                    {props.carrerDateStart}
                              </small>
                              <small> à </small>
                              <small className="carrer-specificity">
                                    {props.carrerDateEnd}
                              </small>
                        </li>
                        {props.carrerDescription}
                        <li>
                              <Dropdown
                                    title={props.stackTitle}
                                    content={props.stack}
                              />
                        </li>
                        <li>
                              <Dropdown
                                    title={props.goalTitle}
                                    content={props.goal}
                              />
                        </li>
                  </ul>
            </>
      );
}
