export default function CoursesComponent(props) {
      return (
            <>
                  <ul>
                        <li>{props.coursesName}</li>
                        <li>{props.coursesJobs}</li>
                        <li>{props.coursesLvl}</li>
                        <li>{props.coursesDateStart}</li>
                        <li>{props.coursesDateEnd}</li>
                        <li>{props.coursesGoal}</li>
                        <li>{props.coursesStack}</li>
                  </ul>
            </>
      );
}
