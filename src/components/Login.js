import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Container, Form,FormFeedback,Input,Label,Row,Card,Col} from "reactstrap"
import * as Yup from "yup";
import { LoginUser } from "../redux/auth/Login/action";
const Login = (props) => {

    const dispatch = useDispatch()
    //const [passwordShown, setPasswordShown] = useState(false)
const navigate = useNavigate();

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Enter valid Email address")
                .max(255)
                .required("Please Enter Your Email"),
            password: Yup.string()
                .required("Please Enter Your Password")
                .min(6, "Password must be at least 6 characters"),
        }),
        onSubmit: values => {
            handleLogin(values)
            navigate('/home')
            console.log(handleLogin(values))
        },
    })

    const handleLogin = async values => {
        var data = {
            email: values?.email,
            password: values?.password,
        }
        dispatch(LoginUser(data, props.history))
    }

    return (
        <div>
            <div>
                <Container className="mt-5">
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card className="overflow-hidden">
                                <div className="bg-success">
                                    <Row>
                                        <Col className="col-12">
                                            <div className="mt-3 d-grid">
                                            <h5 style={{textAlign:'center'}}>SignIn Page</h5>
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
        </div>
    )
}
export default Login;