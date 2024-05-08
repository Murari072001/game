import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"
function Login(props) {
    const navigate = useNavigate()
    let loginFormik = useFormik({
        initialValues: {
            "login": props.user.Allusers[props.user.Allusers.length - 1]?.name,
            "password": props.user.Allusers[props.user.Allusers.length - 1]?.password,
            "newerr": ""
        },
        validationSchema: Yup.object({
            "login": Yup.string().required("*This Field is Required*"),
            "password": Yup.string().required("*This Field is Required*")
        }),
        onSubmit: (values) => {
            // let x=props.user.Allusers.filter((user)=>user.name===values.login&&user.password===values.password)
            console.log(values);
            let newVal={
                "login":values.login,
                "password":values.password
            }
            axios.post("https://prode.czargaming.com/api/agentAccount/login",newVal).then((res) => {
                console.log(res)
                if (res.data.success) {
                    props.dispatch({ type: "login", payload: values })
                    setTimeout(() => {
                        navigate("/dashboard")
                    }, 1000)
                    loginFormik.setErrors({ "newerr": res.data.description })
                    document.getElementById("success").style.display="block"
                }
                else {
                    loginFormik.setErrors({ "newerr": res.data.description })
                    // loginFormik.values.login=""
                    // loginFormik.values.password=""
                    document.getElementById("newerr").style.display = "block"
                }
            })

        }
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        loginFormik.handleSubmit()
    }
    return <div>
        <div id="success">
            <div className="succ">
                <h2>{loginFormik.errors.newerr}</h2>
                <button className="btn btn-success" onClick={() => { document.getElementById("success").style.display = "none" }}>Ok</button>
            </div>
        </div>
        <div id="newerr">
            <div className="err">
                <h2>{loginFormik.errors.newerr}</h2>
                <button className="btn btn-secondary" onClick={() => { document.getElementById("newerr").style.display = "none" }}>Try Again</button>
            </div>
        </div>
        <form onSubmit={handleSubmit} className="w-50 p-3 ms-auto me-auto border border-3 border-dark rounded rounded-3">
            <h1>Login Page</h1>
            {loginFormik.errors.newerr && <b className="text-danger">{loginFormik.errors.newerr}</b>}
            {loginFormik.touched.login && <b className="text-danger">{loginFormik.errors.login}</b>}
            <div className="form-floating">
                <input type="text" className="form-control" name="login" id="login" value={loginFormik.values.login} placeholder="Enter login" onBlur={loginFormik.handleBlur} onChange={loginFormik.handleChange} />
                <label htmlFor="login">Enter Username</label>
            </div>
            {loginFormik.touched.password && <b className="text-danger">{loginFormik.errors.password}</b>}
            <div className="form-floating">
                <input type="password" className="form-control" name="password" id="password" value={loginFormik.values.password} placeholder="Enter Password" onBlur={loginFormik.handleBlur} onChange={loginFormik.handleChange} />
                <label htmlFor="password">Enter Password</label>
            </div>
            <button className="btn btn-outline-primary" type="submit">Login</button>
        </form>
    </div>
}

export default connect(store => store)(Login)