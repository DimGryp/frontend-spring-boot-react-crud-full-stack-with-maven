import React, { Component } from 'react';
import CourseDataService from  "../service/CourseDataService";
class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        console.log("Gotin");
        this.refreshCourses();

    }

    refreshCourses() {
        console.log("Gotin_2");
        CourseDataService.retrieveAllCourses()//HARDCODED
            .then(
                response => {
                    console.log("Gotin_3");
                    console.log(response);
                    this.setState({ courses: response.data })
                }
            )
    }
    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.courses.map(
                                course =>
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.description}</td>
                            </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent