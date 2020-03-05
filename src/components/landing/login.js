import React from 'react'
import { Form } from 'react-bootstrap'
import {Input,Button,Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import url from '../../url'
import Axios from 'axios'

class Login extends React.Component{
    state = {
        email:"",
        password:""
    }

    changeInput = e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    authenticate = e=>{
        e.preventDefault()
        Axios.post(`${url.url}\\user\\login`,this.state).then(data=>{
            this.props.loginUser(data.data)
            console.log(data.data)
        })
        console.log({...this.state})
        console.log(this.props.logged)
        console.log(url.url)
    }

    render(){
        if(this.props.logged&&this.props.verified){
            return <Redirect to="/user"/>
        }
        if (this.props.logged||this.props.verified){
            return <Redirect to="/verify/email"/>
        }

        return (
            <div className="container-fluid" style={{height:"100vh",backgroundColor:"#1565C0"}}>
                <div className="mx-auto" style={{width:"60px",height:"150px",color:"white",fontSize:"27px",fontFamily:"serif",paddingTop:"50px"}}>
                    Dort Blog
                </div>
                <div className="rounded mx-auto" style={{width:"340px",backgroundColor:"white",height:"300px"}}>
                    <div className="mx-auto" style={{height:"100px",color:"#1565C0",fontSize:"25px",paddingTop:"20px",fontFamily:"serif"}}>
                        Dort Login Into <br />Your Account
                    </div>
                    <Form>
                        <Input icon="user" iconPosition="left" placeholder="email..." className="mb-2 w-75" name="email" value={this.state.email} onChange={this.changeInput}/>
                        <Input icon="unlock" iconPosition="left" placeholder="password..." className="mb-2 w-75" name="password" value={this.state.password} onChange={this.changeInput} type="password"/>
                        <br />
                        <Button animated size="large" primary className="w-75" onClick={this.authenticate}>
                            <Button.Content visible>login</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right' />
                            </Button.Content>
                        </Button>
                    </Form>
                    {this.props.invalid?<span className="text-danger">Invalid email or password</span>:<div></div>}
                    {!this.props.exists?<span className="text-danger">No such account exists</span>:<div></div>}
                    <label className="mt-2 pt-3" style={{backgroundColor:"#ECEFF1",width:"100%",height:"20%",fontFamily:"serif",fontSize:"20px"}}>
                        New To Dort Blog <Link to="/signup">Sign Up</Link>
                    </label>
                </div>
                <p><Link to="/reset/pass" style={{color:"white"}}>Forgotten Password</Link></p>
                
            </div>
        )
    }
}

const login = data=>({
    type:"LOGIN",
    data:data
})

const mapDispatchToProps = dispatch=>{
    return {
        loginUser: (data)=>dispatch(login(data))
    }
}

const mapStateToProps = state=>{
    return {
        logged: state.user.logged,
        verified: state.user.verified,
        invalid: state.user.invalid,
        exists: state.user.exist
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
