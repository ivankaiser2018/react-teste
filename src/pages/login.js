import React, {useEffect,useState} from 'react';
import {Formik} from 'formik';
import {useHistory} from 'react-router-dom'
import API from '../services/api';


function Login() {
  const history = useHistory();
    const api = new API();

    const submit = (values) =>  {

        if(!values.email || !values.password) return;
        
        api.login(values).then(x => x.json()).then(response => {
            if(response.token){
                localStorage.setItem('token',reponse.token);
                history.push('/');
            }
            console.log(response);
        });
    }
 

  return (
    <>
    
    <Formik initialValues={{email:'',password:''}} onSubmit={submit}>
    {props => (
         <form style={{ marginTop:300}} onSubmit={props.handleSubmit}>

           <input
             type="text"
             style={{display:'block', margin:'auto',marginTop:10}}
             onFocus={() => console.log(props)}
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.email}
             name="email"
           />
                
           <input
             type="password"
             style={{display:'block', margin:'auto',marginTop:10}}
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.password}
             name="password"
           />
           <button type="submit" style={{display:'block', margin:'auto',marginTop:10}}>Submit</button>
         </form>
       )}
    </Formik>


    
    
    </>
  );
}

export default Login;
