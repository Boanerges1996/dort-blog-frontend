import React from "react";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Button as Btn,Icon,Input} from 'semantic-ui-react'

class LandHeader extends React.Component{
    render(){
        return (
            <div className="container fixed-top" >
                <div>
                <Navbar bg="primary" expand="md" >
                    <Navbar.Brand style={{color:"white"}}>Dort Blog</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link style={{color:"white"}}>Home</Nav.Link>
                            <Nav.Link style={{color:"white"}}>About Us</Nav.Link>
                            <Nav.Link style={{color:"white"}}>Services</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Btn icon inverted color="white">
                                <Icon name="search"/>
                            </Btn>
                            <Link to="/login" style={{textDecoration:"none",color:"inherit"}}><Btn inverted color="white">Login</Btn></Link>
                            <Link to="/signup" style={{textDecoration:"none",color:"inherit"}}><Btn inverted color="white">Signup</Btn></Link>
                        </Form>
                    </Navbar.Collapse>
                        <Dropdown className="d-sm-block d-md-none mx-0">
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{border:"1px solid white"}}>
                                Menu
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/login">Login</Link>   
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/signup">Signup</Link>  
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>Home</Dropdown.Item>
                                <Dropdown.Item>About Us</Dropdown.Item>
                                <Dropdown.Item>Services</Dropdown.Item>
                            </Dropdown.Menu>      
                        </Dropdown>
                        <Input icon="search" placeholder="Searching..." className="d-md-none d-sm-flex w-25 mx-0"/>                   
                </Navbar>
                </div>
            </div>
        )
    }
}

export default LandHeader