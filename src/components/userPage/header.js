import React from 'react'
import {Navbar,Nav,Button,Form,FormControl,NavDropdown,Image,Dropdown} from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'

class UserHeader extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <div >
                <Navbar bg="primary" expand="md" style={{backgroundColor:"#1565C0"}}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.props.click}/>
                    <div onClick={this.props.click}>
                        <Icon name="user" onClick={this.props.click} className="d-sm-none d-xs-none d-md-block"/>
                    </div>

                    <Navbar.Brand style={{color:"white"}} className="d-sm-none d-md-inline" >Dort Blog</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                    </Navbar.Collapse>
                    <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Form>
                    <Dropdown>
                        <Dropdown.Toggle>
                            <Image src="https://img.favpng.com/17/3/18/computer-icons-user-profile-male-png-favpng-ZmC9dDrp9x27KFnnge0jKWKBs.jpg" roundedCircle style={{width:"50px",height:"50px"}}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >Profile</Dropdown.Item>
                            <Dropdown.Item >Logout</Dropdown.Item>
                            {/* <Dropdown.Item >Something else</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </Navbar>
                </div>
            </div>
        )
    }
}

export default UserHeader