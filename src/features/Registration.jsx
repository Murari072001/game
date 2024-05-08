import {  useFormik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup"

function Registration(props)
{
    const navigate=useNavigate()
    let userFormik=useFormik({
        initialValues:{
            "name":"",
            "password":"",
            "email":"",
            "phone":"",
            "city":""
        },
        validationSchema:Yup.object({
            "name":Yup.string().required("*This Field is Required*"),
            "password":Yup.number().typeError("*Password Must Be A Number*").required("*This Field is Required*").min(100,"*Not Less Than 3*").max(999999,"*Not More Than 6*"),
            "email":Yup.string().required("*This Field is Required*").email("*Please Enter Valid Email*"),
            "phone":Yup.number().typeError("*Password Must Be A Number*").required("*This Field is Required*").min(1000000000,"*Not Less Than 10 Digits*").max(9999999999,"*Not More Than 10 Digits*"),
            "city":Yup.string().required("*This Field is Required*")
        }),
        onSubmit:(values)=>{
            alert("Registration Done Successfully!!!")
            props.dispatch({type:"register",payload:values})
            navigate("/login")
        }
    })
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        userFormik.handleSubmit()
    }
    // console.log(userFormik);
    return <div>
        <form  onSubmit={handleSubmit} className="w-50 p-3 ms-auto me-auto border border-3 border-dark rounded rounded-3">
            <h1>Registration</h1>
            {userFormik.touched.name&&<b className="text-danger">{userFormik.errors.name}</b>}
            <div className="form-floating">
                <input type="text" className="form-control" name="name" id="name" placeholder="Enter Full Name" onBlur={userFormik.handleBlur} onChange={userFormik.handleChange}/>
                <label htmlFor="name">Enter Full Name</label>
            </div>
            {userFormik.touched.password&&<b className="text-danger">{userFormik.errors.password}</b>}
            <div className="form-floating">
                <input type="password" className="form-control" name="password" id="password" placeholder="Enter Password" onBlur={userFormik.handleBlur} onChange={userFormik.handleChange}/>
                <label htmlFor="password">Enter Password</label>
            </div>
            {userFormik.touched.email&&<b className="text-danger">{userFormik.errors.email}</b>}
            <div className="form-floating">
                <input type="email" className="form-control" name="email" id="email" placeholder="Enter Email" onBlur={userFormik.handleBlur} onChange={userFormik.handleChange}/>
                <label htmlFor="email">Enter Email</label>
            </div>
            {userFormik.touched.phone&&<b className="text-danger">{userFormik.errors.phone}</b>}
            <div className="form-floating">
                <input type="text" className="form-control" name="phone" id="phone" placeholder="Enter Phone Number" onBlur={userFormik.handleBlur} onChange={userFormik.handleChange}/>
                <label htmlFor="phone">Enter Phone Number</label>
            </div>
            {userFormik.touched.city&&<b className="text-danger">{userFormik.errors.city}</b>}
            <div className="form-floating">
                <input type="text" className="form-control" name="city" id="city" placeholder="Enter City" onBlur={userFormik.handleBlur} onChange={userFormik.handleChange}/>
                <label htmlFor="city">Enter City</label>
            </div>
            <button className="btn btn-outline-primary m-3 w-50" type="submit">Submit Details</button>
        </form>
    </div>
}

export default connect(store=>store)(Registration)