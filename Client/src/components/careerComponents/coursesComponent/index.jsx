import Dropdown from '../../currentObject/dropdown';

export default function CoursesComponent(props) {
      return (
            <>
                  <ul className="experiment">
                        <li className="no-wrap">
                              <h2>{props.coursesName} </h2>
                              <small>
                                    {props.coursesJobs &&
                                          props.coursesLvl &&
                                          props.coursesDateStart &&
                                          props.coursesDateEnd}
                              </small>
                        </li>
                        <li>
                              <p className="experiment-desc">
                                    {props.coursesDescription}
                              </p>
                        </li>
                        <Dropdown
                              title={props.stackTitle}
                              content={props.stack}
                        />
                        <Dropdown
                              title={props.goalTitle}
                              content={props.goal}
                        />
                  </ul>
            </>
      );
}
