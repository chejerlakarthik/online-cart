import React from 'react'

const UnAuthorized = () => {
    return (
        <div>Not Authorized</div>
    )
}

const requireUser = (Component) => {
    return window.user?
    <Component/>:
    <UnAuthorized/>    
}

export default requireUser
