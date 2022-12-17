import React,{useState,useEffect} from 'react';
import {auth} from '../../firebase';
import {withRouter} from 'react-router-dom';


function Login(props){

    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");

   

    const login = async()=>{
        
         await auth.signInWithEmailAndPassword(email,password).then(response =>{
            props.history.push('/Dashboard');
         })
         .catch(error =>{
            alert(error.message);
         });
    
       
    }

    const logOut = async()=>{
        await auth.signOut();
        alert("sing out");
    }

    

    return(
        <div style={{textAlign: 'center'}}>
            <h1>Ingresar al Dashboard</h1>
           <div> 
                <input value={email} type="text" placeholder="username" onChange={e => { setEmail(e.target.value) }} ></input>
                <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} ></input>
                <input type="button" onClick={login} value="Entrar" ></input>
                <input type="button" onClick={logOut} value="Salir" ></input>
           </div>
           
        </div>
    );
}

export default withRouter(Login);