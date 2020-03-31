import axios from 'axios'

const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8081'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}/courses`

class CourseDataService {

    retrieveAllCourses() {
        console.log("Gotin3");
        console.log(INSTRUCTOR_API_URL);
        return axios.get(`${INSTRUCTOR_API_URL}`);
    }
}

export default new CourseDataService()