import React, { Component } from 'react';
import ListCoursesComponent from "./ListCoursesComponent";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import CourseComponent from "./CourseComponent";
import AboutComponent from "./AboutComponent"
import {HashRouter } from 'react-router-dom';


class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                        <Route path="/about" exact component={AboutComponent} />
                    </Switch>


                </>
            </Router>




        )
    }
}

export default InstructorApp