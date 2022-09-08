import React from "react";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router";

export default function CreateStudent() {
    const navigate = useNavigate()
    return (
        <div>
            <Formik
                initialValues={
                    {
                        name: '',
                        action: '',
                        description: ''
                    }
                }
                onSubmit={(values) => {
                    axios.post('http://localhost:3001/students', values).then(() => {
                        alert('Thành công!');
                        navigate("/students/list")
                    })
                }}
            >
                <Form>
                    <Field name={'name'}></Field>
                    <Field name={'action'}></Field>
                    <Field name={'description'}></Field>
                    <button>Save</button>
                </Form>
            </Formik>
        </div>
    )
}
