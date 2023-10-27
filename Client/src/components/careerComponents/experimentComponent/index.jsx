import './index.css';
export default function ExperimentComponent(props) {
      return (
            <>
                  <ul className="experiment">
                        <li className="no-wrap">
                              <h2>{props.experimentsName} </h2>
                              <small>{props.experimentsJobs}</small>
                        </li>
                        <li>
                              <p className="experiment-desc">
                                    {props.experimentsDescription}
                              </p>
                        </li>
                        <div className="experiment-content-goal">
                              <p>Les différents objectifs on été </p>
                              {props.experimentsGoal}
                        </div>

                        <div className="experiment-content-stack">
                              <p>J'ai pu appronfondir mes compétences en </p>
                              {props.experimentStack}
                        </div>
                  </ul>
            </>
      );
}
