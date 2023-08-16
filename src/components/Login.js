import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Container, Form, FormFeedback, Input, Label, Row, Card, Col } from "reactstrap"
import * as Yup from "yup";
import { LoginUser } from "../redux/auth/Login/action";
import './Registeration.css'
const Login = (props) => {

    const dispatch = useDispatch()
    //const [passwordShown, setPasswordShown] = useState(false)
    const navigate = useNavigate();

    /* useEffect(() => {
        if (localStorage.getItem("token")) {
          setTimeout(() => {
            navigate("/home");
          }, 1);
        }
      }, []);
 */

    const loginValidation = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Enter valid Email address")
                .required("Please Enter Your Email"),
            password: Yup.string()
                .required("Please Enter Your Password")
                //.min(6, "Password must be at least 6 characters"),
                .min(8)
                .matches("^.*[0-9].*$", "Atleast one number required")
                .matches("^.*[a-zA-Z].*$", "Atleast one letter required")
                .required("Password is required")
        }),
        onSubmit: values => {
            handleLogin(values)
            setTimeout(() => {

                navigate('/home')
            }, 1000);

            //console.log(handleLogin(values))
        },
    })

    const handleLogin = async values => {
        var data = {
            email: values?.email,
            password: values?.password,
        }
        dispatch(LoginUser(data, props.history))
        localStorage.getItem("email", values.email)
    }

    return (
        <div className="container-fluid">
            <div className="row g-2">
                <div className="col-md-6 col-sm-12 register-img">
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="register_container mt-1">
                        <h4>Get Started</h4>
                        <p className="newUser_list">
                            New User ? &nbsp;
                            <Link to="/register" className="link">
                                Register
                            </Link>{" "}
                        </p>
                        <Form onSubmit={handleLogin}>
                            <div className="form-horizontal">
                                {/* {RegisterationError &&
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
 */}                                <div >

                                    <div className="mb-3">
                                        <Label for="email" className="form-label">
                                            Email
                                        </Label>
                                        <Input
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter Your Email"
                                            type="email"
                                            onChange={loginValidation.handleChange}
                                            onBlur={loginValidation.handleBlur}
                                            value={loginValidation.values.email || ""}
                                            invalid={
                                                loginValidation.touched.email &&
                                                    loginValidation.errors.email
                                                    ? true
                                                    : false
                                            }
                                        />
                                        {loginValidation.touched.email &&
                                            loginValidation.errors.email ? (
                                            <FormFeedback type="invalid">
                                                {loginValidation.errors.email}
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
                                                onChange={loginValidation.handleChange}
                                                onBlur={loginValidation.handleBlur}
                                                value={loginValidation.values.password || ""}
                                                invalid={
                                                    loginValidation.touched.password &&
                                                        loginValidation.errors.password
                                                        ? true
                                                        : false
                                                }
                                            />
                                            {loginValidation.touched.password &&
                                                loginValidation.errors.password ? (
                                                <FormFeedback type="invalid">
                                                    {loginValidation.errors.password}
                                                </FormFeedback>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="mt-3 d-grid">
                                        <button
                                            className=" btn_register btn btn-primary"
                                            type="submit"
                                        >
                                            Login
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

        /*  <div>
             <Container className="mt-5">
                 <Row className="justify-content-center">
                     <Col md={8} lg={6} xl={5}>
                         <Card className="overflow-hidden">
                             <div className="bg-success">
                                 <Row>
                                     <Col className="col-12">
                                         <div className="mt-3 d-grid">
                                             <h5 style={{ textAlign: 'center' }}>SignIn Page</h5>
                                         </div>
                                     </Col>
                                 </Row>
                             </div>
                             <div>
                                 <Form
                                     className="form-horizontal"
                                     onSubmit={e => {
                                         e.preventDefault()
                                         validation.handleSubmit()
                                         return false
                                     }}
                                 >
                                     <div className="mb-3">
                                         <Label className="form-label">Email</Label>
                                         <Input
                                             name="email"
                                             type="text"
                                             placeholder="Enter Email"
                                             onChange={validation.handleChange}
                                             onBlur={validation.handleBlur}
                                             value={validation.values.email || ""}
                                             invalid={
                                                 validation.touched.email && validation.errors.email
                                                     ? true
                                                     : false
                                             }
                                         />
                                         {validation.touched.email && validation.errors.email ? (
                                             <FormFeedback type="invalid">
                                                 {validation.errors.email}
                                             </FormFeedback>
                                         ) : null}
                                     </div>
                                     <div className="mb-3">
                                         <Label className="form-label">Password</Label>
                                         <Input
                                             name="password"
                                             type="text"
                                             value={validation.values.password || ""}
                                             //type={passwordShown ? "text" : "password"}
                                             placeholder="Enter Password"
                                             onChange={validation.handleChange}
                                             onBlur={validation.handleBlur}
                                             invalid={
                                                 validation.touched.password &&
                                                     validation.errors.password
                                                     ? true
                                                     : false
                                             }
                                         />
                                     </div>
 
 
                                     <div className="mt-3 d-grid">
                                         <button
                                             className="btn btn-primary btn-block"
                                             type="submit"
                                         >
                                             Log In
                                         </button>
                                     </div>
                                 </Form>
                             </div>
                         </Card>
                     </Col>
                 </Row>
             </Container>
         </div>
  */
    )
}
export default Login;