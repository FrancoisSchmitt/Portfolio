import Redux from '../../assets/redux.svg';
import React from '../../assets/react.svg';
import JavaScript from '../../assets/javascript.svg';
import HTML from '../../assets/html.svg';
import CSS from '../../assets/css.svg';
import './index.css';
export default function SkillComponents() {
      return (
            <>
                  <ul className="skill-content">
                        <li>
                              <img src={React} alt="" />
                              <p>React.Js</p>
                        </li>
                        <li>
                              <img src={Redux} alt="" />
                              <p>Redux.Js</p>
                        </li>
                        <li>
                              <img src={JavaScript} alt="" />
                              <p>JavaScript</p>
                        </li>
                        <li>
                              <img src={HTML} alt="" />
                              <p>HTML</p>
                        </li>
                        <li>
                              <img src={CSS} alt="" />
                              <p>CSS</p>
                        </li>
                  </ul>
            </>
      );
}
