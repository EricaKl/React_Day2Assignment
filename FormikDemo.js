import { useFormik } from "formik";
import *  as Yup from "yup";
function Formikdemo()
{
    const form = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:Yup.object({
            username:Yup.string().required("UserName is Required").min(10, "Min 10 characters needed")
        }),
        onSubmit:(values)=>{console.log("Form Submitted",values)}
        
    })
    return(
        <>
        <form onSubmit={form.handleSubmit}> 
            <input type="text" name="username" id="username" onChange={form.handleChange} 
            onBlur={form.handleBlur} 
            value={form.values.username}></input>
            {form.touched.username && form.errors.username && <span style={{color:'red'}}>
                {form.errors.username}</span>}
            <br/>
            <input type="email" name="email" id="email" onChange={form.handleChange} 
            value={form.values.email}></input>
            <br/>
            <input type="password" name="password" id="password" onChange={form.handleChange} 
            value={form.values.password}></input>
            <br/>
            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default Formikdemo;