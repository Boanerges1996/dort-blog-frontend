import React from 'react'
import { Form } from 'react-bootstrap'
import {Input,Button,Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import url from '../../url.json'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Signup extends React.Component{
    state = {
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        exist:true
    }

    changeInput = e=>{
        this.setState({[e.target.name]:e.target.value})
    }

    registerUser = (e)=>{
        e.preventDefault()
        Axios.post(`${url.url}\\user\\signup`,this.state)
        .then(data=>{
            this.setState({exist:data.data.exist})
        })
    }

    render(){
        if(this.props.verified){
            return <Redirect to="/verify/email"/>
        }
        return (
            <div className="container-fluid" style={{height:"100vh",backgroundColor:"#1565C0"}}>
                <div className="mx-auto" style={{width:"60px",height:"150px",color:"white",fontSize:"27px",fontFamily:"serif",paddingTop:"50px"}}>
                    Dort Blog
                </div>
                <div className="rounded mx-auto" style={{width:"340px",backgroundColor:"white",height:"400px"}}>
                    <div className="mx-auto" style={{height:"100px",color:"#1565C0",fontSize:"25px",paddingTop:"20px",fontFamily:"serif"}}>
                        Dort Login Into <br />Your Account
                    </div>
                    <Form onSubmit={this.registerUser}>
                        <Input placeholder="firstname" className="mb-2 w-75" type="text" name="firstname" onChange={this.changeInput} value={this.state.firstname}/>
                        <Input placeholder="lastname" className="mb-2 w-75" type="text" name="lastname" onChange={this.changeInput} value={this.state.lastname}/>
                        <Input placeholder="email..." className="mb-2 w-75" type="email" name="email" onChange={this.changeInput} value={this.state.email}/>
                        <Input placeholder="password..." className="mb-2 w-75" type="password" name="password" onChange={this.changeInput} value={this.state.password}/>
                        <br />
                        <Button animated size="large" primary className="w-75" onClick={this.registerUser}>
                            <Button.Content visible>Signup</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right' />
                            </Button.Content>
                        </Button>
                        <label className="mt-2 pt-3" style={{backgroundColor:"#ECEFF1",width:"100%",height:"20%",fontFamily:"serif",fontSize:"20px"}}>
                            If exist <Link to="/login">Login</Link>
                        </label>
                    </Form>
                    {
                        !this.state.exist?<span className="text-danger">Email account already exist</span>:<div></div>
                    }
                </div>
                <p className="mt-2"><Link to="/reset/pass" style={{color:"white"}}>Forgotten Password</Link></p>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        exist: state.user.exist,
        verified: state.user.verified
    }
}

const exists = data =>({
    type:"SIGNUP",
    data:data
})

const mapDispatchToProps = dispatch =>{
    return {
        Exist: (data)=>dispatch(exists(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup)
