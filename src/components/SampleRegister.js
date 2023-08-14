import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import {
    Card, Col, Container, Label, Nav, NavItem, NavLink, Row, Form, Input, FormFeedback, Alert
} from "reactstrap"
import * as Yup from "yup";
import { RegisterPageUser, RegisterUserSuccess } from "../redux/auth/Register/action";
import { toast } from "react-toastify";

const SampleRegister = (props) => {
    const dispatch = useDispatch()
    //const [passwordShown, setPasswordShown] = useState(false)
    const formikRegister = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullname: "",
            email: "",
            password: "",
            confirm_password: "",
        },
        validationSchema: Yup.object().shape({
            fullname: Yup.string().required("Please enter your Full Name").min(3, 'Must be longer than 3 characters')
            .max(20, 'Nice try, nobody has a first name that long'),
            email: Yup.string()
                .email("Enter valid Email address")
                .required("Please Enter Your Email"),
            password: Yup.string().required("Please enter your Password").min(6),
            confirm_password: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords don't match!")
                .required("Please Enter Your Verify Password"),
        }),
        onSubmit: values => {
            handleRegisterValues(values)
            console.log(handleRegisterValues(values))
        },
    })

    const {
        RegisterationSuccess, RegisterationError, loading
    } = useSelector(state => ({
        RegisterationSuccess: state.RegisterUser?.RegisterationSuccess,
        RegisterationError: state.RegisterUser?.RegisterationError,
        loading: state.RegisterUser?.loading,
    }))

    const handleRegisterValues = values => {
        dispatch(RegisterUserSuccess(""))
        var data = {
            fullname: values.fullname,
            email: values.email,
            password: values.password,
            confirm_password: values.confirm_password,
        }
        dispatch(RegisterPageUser(data, props.history))
    }

    useEffect(() => {
        if (RegisterationSuccess?.status === 200) {
            formikRegister.resetForm()
        }
    }, [RegisterationSuccess])

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        formikRegister.handleSubmit()
    }

    return (
        <div>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6} xl={5}>
                        <Card className="overflow-hidden">
                            <div className="bg-success bg-soft">
                                <Row>
                                    <Col className="col-12">
                                        <div className="mt-3 d-grid">
                                            <h5 style={{ textAlign: 'center' }}>SignUp Page</h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <Form onSubmit={handleSubmitRegister}>
                                <div className="form-horizontal">
                                    {RegisterationError &&
                                        RegisterationError &&
                                        !loading ? (
                                        <Alert color="danger">
                                            {RegisterationError?.message}
                                        </Alert>
                                    ) : null}

                                    {RegisterationSuccess ? (
                                        <Alert
                                            color="success"
                                            style={{ marginTop: "13px" }}
                                        >
                                            {RegisterationSuccess?.message}
                                        </Alert>
                                    ) : null}
                                    <div >

                                        <div className="mb-3">
                                            <Label for="fullname" className="form-label">
                                                Full Name</Label>
                                            <Input
                                                name="fullname"
                                                className="form-control"
                                                placeholder="Enter Your Full Name"
                                                type="text"
                                                onChange={formikRegister.handleChange}
                                                onBlur={formikRegister.handleBlur}
                                                value={formikRegister.values.fullname || ""}
                                                invalid={
                                                    formikRegister.touched.fullname &&
                                                        formikRegister.errors.fullname
                                                        ? true
                                                        : false
                                                }
                                            />
                                            {formikRegister.touched.fullname &&
                                                formikRegister.errors.fullname ? (
                                                <FormFeedback type="invalid">
                                                    {formikRegister.errors.fullname}
                                                </FormFeedback>
                                            ) : null}
                                        </div>

                                        <div className="mb-3">
                                            <Label for="email" className="form-label">
                                                Email
                                            </Label>
                                            <Input
                                                name="email"
                                                className="form-control"
                                                placeholder="Enter Your Email"
                                                type="email"
                                                onChange={formikRegister.handleChange}
                                                onBlur={formikRegister.handleBlur}
                                                value={formikRegister.values.email || ""}
                                                invalid={
                                                    formikRegister.touched.email &&
                                                        formikRegister.errors.email
                                                        ? true
                                                        : false
                                                }
                                            />
                                            {formikRegister.touched.email &&
                                                formikRegister.errors.email ? (
                                                <FormFeedback type="invalid">
                                                    {formikRegister.errors.email}
                                                </FormFeedback>
                                            ) : null}
                                        </div>

                                        <div className="mb-3">
                                            <Label for="password" className="form-label">
                                                Password
                                            </Label>
                                            <div className="" style={{ position: "relative" }}>
                                            <Input
                                                name="password"
                                                classpassword="form-control"
                                                placeholder="Enter Your Password"
                                                type="text"
                                                onChange={formikRegister.handleChange}
                                                onBlur={formikRegister.handleBlur}
                                                value={formikRegister.values.password || ""}
                                                invalid={
                                                    formikRegister.touched.password &&
                                                        formikRegister.errors.password
                                                        ? true
                                                        : false
                                                }
                                            />
                                            {formikRegister.touched.password &&
                                                formikRegister.errors.password ? (
                                                <FormFeedback type="invalid">
                                                    {formikRegister.errors.password}
                                                </FormFeedback>
                                            ) : null}
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <Label
                                                for="confirm_password"
                                                className="form-label"
                                            >
                                                Verify Password
                                            </Label>
                                            <Input
                                                name="confirm_password"
                                                classpassword="form-control"
                                                placeholder="Enter Your Confirm Password"
                                                type="text"
                                                onChange={formikRegister.handleChange}
                                                onBlur={formikRegister.handleBlur}
                                                value={
                                                    formikRegister.values.confirm_password ||
                                                    ""
                                                }
                                                invalid={
                                                    formikRegister.touched.confirm_password &&
                                                        formikRegister.errors.confirm_password
                                                        ? true
                                                        : false
                                                }
                                            />
                                            {formikRegister.touched.confirm_password &&
                                                formikRegister.errors.confirm_password ? (
                                                <FormFeedback type="invalid">
                                                    {formikRegister.errors.confirm_password}
                                                </FormFeedback>
                                            ) : null}
                                        </div>

                                        <div className="mt-3 d-grid">
                                            <button
                                                className="btn btn-primary btn-block"
                                                type="submit"
                                            >
                                                Register
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </Form>

                            <div className="mt-3 text-center">
                                <p>
                                    Already have an account ?
                                    <Link to="/login" className=" text-primary">
                                        Login
                                    </Link>{" "}
                                </p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default SampleRegister;