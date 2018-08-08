import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
 } from 'reactstrap'


export default class Header extends Component{
    constructor(props) {
        super(props)
        this.state = {
          isOpen: false
        }
    }
    
    toggle = () =>{
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <Container>
                        <Link className="navbar-brand" to="/">Online Cart</Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/menswear">Men's Wear</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/womenswear">Women's Wear</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
