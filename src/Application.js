import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import Router from './Router'

class Application extends Component{

    componentDidMount = async() => {
        fetch('/api/user/me',{
            method : 'GET',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            //this credentials config is required for fetching cookie details
            credentials: 'same-origin'
        })
        .then( response => {
            return response.json()
        })
        .then( user =>{
            window.user = user
        })
    }

    render(){
        return (
            <Fragment>
                <Header/>
                <Router/>
            </Fragment>
        )
    }
}

export default Application

