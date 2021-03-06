import {Component} from "react";
import React from "react";
import CourseDataService from '../service/CourseDataService';
import {Field, Form, Formik} from "formik";

const INSTRUCTOR = 'in28minutes'
//test
class CourseComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this)
        this.onCancel=this.onCancel.bind(this);
    }
    onSubmit(values) {


        let course = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            CourseDataService.createCourse(username, course)
                .then(() => this.props.history.push('/courses'))
        } else {
            CourseDataService.updateCourse(username, this.state.id, course)
                .then(() => this.props.history.push('/courses'))
        }
        console.log(values);
    }

    onCancel(values) {
        console.log("Cancel Pressed");
        this.props.history.push('/courses');
    }

    validate(values) {

        let errors = {}
        let username = INSTRUCTOR
     let password="test"
        // let password="1"
        // let password="2"
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        return errors
    }
    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))
    }

    render() {

        let { description, id } = this.state

        return (
               <div>
                <h3>Course</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, description }}
                        onSubmit={this.onSubmit}
                       onCancel={this.onCancel}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                    <button className="btn btn-cancel" type="cancel" onClick={this.onCancel}>Cancel</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}
export default CourseComponent