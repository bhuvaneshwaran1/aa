import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import * as Yup from "yup";
import './Registeration.css'
import {
    Card, Col, Container, Label, Nav, NavItem, NavLink, Row, Form, Input, FormFeedback, Alert
} from "reactstrap"
import { RegisterPageUser, RegisterUserSuccess } from '../redux/auth/Register/action'
const Registeration = (props) => {

    const dispatch = useDispatch()
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
        localStorage.setItem("fullname", values.fullname, values.email)
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
        <div className="container-fluid">
            <div className="row g-2">
                <div className="col-md-6 col-sm-12 register-img">
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="register_container mt-1">

                        <p className="newUser_list">
                            Existing User ? &nbsp;
                            <Link to="/" className="link">
                                Login
                            </Link>{" "}
                        </p>
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
                                            className=" btn_register btn btn-primary"
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                    </div>

                                    {/*  <div className="mt-3 text-center">
                                        <p>
                                            Already have an account ?
                                            <Link to="/login" className=" text-primary">
                                                Login
                                            </Link>{" "}
                                        </p>
                                    </div>
 */}

                                </div>
                            </div>
                        </Form>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Registeration