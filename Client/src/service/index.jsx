import axios from 'axios';
import {
      USER_MAIN_DATA,
      COURSES_DATA,
      EXPERIMENT_DATA,
      PROJECT_DATA,
} from '../Mock/data';

/**
 *
 * @param {*} user
 * @const postLogin is the call of the api that allows to make a POST request for the login
 * @getProject it was a call api to get all project I create with @createNewProject
 * @getExperience it was a call api to get all project I create with @createNewExperience
 * @getFormation it was a call api to get all project I create with @createNewFormation
 * @createNewProject it was a request to create new project in my db
 * @createNewExperience it was a request to create new experience in my db
 * @createNewFormation it was a request to create new formation in my db
 *
 * @returns
 */

async function userMainData() {
      try {
            const user = USER_MAIN_DATA;
            // console.log(user);
            return user;
      } catch (error) {
            console.log('getMainInformation : ' + error);
      }
}
async function experimentMainData() {
      try {
            const experiment = EXPERIMENT_DATA;
            // console.log(experiment);
            return experiment;
      } catch (error) {
            console.log('getMainInformation : ' + error);
      }
}
async function coursesMainData() {
      try {
            const courses = COURSES_DATA;
            // console.log(courses);
            return courses;
      } catch (error) {
            console.log('getMainInformation : ' + error);
      }
}
async function projectMainData(id) {
      try {
            const project = PROJECT_DATA;
            console.log(project);
            return project;
      } catch (error) {
            console.log('getMainInformation : ' + error);
      }
}

export { experimentMainData, userMainData, coursesMainData, projectMainData };
// export { getProject, getExperiment, getCourses, getProjectById, getUser, userMainData };
