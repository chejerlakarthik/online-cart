import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import Home from './Home'

class SignIn extends Component{

    componentDidMount(){
        console.log("Mounted")
    }

    render(){
        const { user } = window
        return(
            user ? <Fragment>
                <div className="page-center">
                    <Link className="btn btn-danger" to="/api/auth/google" role="button">Login with Google</Link>
                </div>
            </Fragment> : <Home/>
        )
    }
}

export default SignIn