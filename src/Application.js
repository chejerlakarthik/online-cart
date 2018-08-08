import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import Router from './Router'

class Application extends Component{
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

