import {
      USER_MAIN_DATA,
      COURSES_DATA,
      EXPERIMENT_DATA,
      PROJECT_DATA,
} from '../Mock/data';

/**
 * @param {*} user
 * @projectMainData it was a call api to get all project data
 * @coursesMainData it was a call api to get all courses data
 * @userMainData it was a call api to get all user data
 * @experimentMainData it was a call api to get all experiment data
 * @returns
 */

function IDMock(id) {
      let positionID = 0;
      switch (id) {
            case id:
                  positionID = 0;
                  break;
            default:
                  break;
      }
      return positionID;
}

async function userMainData() {
      try {
            const user = USER_MAIN_DATA;
            return user;
      } catch (error) {
            console.log('getMainInformation : ' + error);
      }
}
async function experimentMainData() {
      try {
            const experiment = EXPERIMENT_DATA;
            return experiment;
      } catch (error) {
            console.log('getMainInformation : ' + error);
      }
}

// async function experimentMainData(id) {
//       try {

//                   const positionArray = IDMock(id);
//                   const test = EXPERIMENT_DATA[positionArray];
//                   return test;

//       } catch (error) {
//             console.log('getActivity : ' + error);
//       }
//       }

async function coursesMainData() {
      try {
            const courses = COURSES_DATA;
            return courses;
      } catch (error) {
            console.log('getMainInformation : ' + error);
      }
}
async function projectMainData(id) {
      try {
            const project = PROJECT_DATA;
            return project;
      } catch (error) {
            console.log('getMainInformation : ' + error);
      }
}

export { experimentMainData, userMainData, coursesMainData, projectMainData };
