import React from 'react'
import LandHeader from './header'
import {Image,Container} from 'semantic-ui-react'
import { Avatar } from '@material-ui/core'
import Comment from './comment'
import {connect} from 'react-redux'
import UserHeader from '../userPage/header2'
import SideBar from '../userPage/sideBar'



class ActualBlog extends React.Component{
    state={
        left:false,
        writeModal:false
    }
    render(){
        return (
            <div>
                {this.props.logged?
                    <div>
                        <UserHeader onClickMenu={()=>this.setState({left:true})} imgUrl={this.props.user.avatar}/>
                        <SideBar left={this.state.left} closeLeft={()=>this.setState({left:false})} clickOne={()=>this.setState({left:false})}
                            write={()=>this.setState({writeModal:true})}
                        />
                    </div>
                    :<LandHeader />}
                <div className="container">
                
                <div className="container-fluid " style={{paddingTop:"60px",float:"left"}}>
                    <div style={{float:"left"}}>
                        <Avatar src={this.props.data.avatar} />
                    </div>
                    <div style={{float:"left",padding:"2px",textAlign:"left"}}>
                        {this.props.data.username}
                        <br />
                        <b>{this.props.data.email}</b>
                    </div>    
                </div>
                <div className="text-centre">
                    <h1><b style={{fontFamily:"serif",fontSize:"30px"}}>{this.props.data.title}</b></h1>
                    <Image src={this.props.data.image} fluid size="large" centered/>
                    <Container >
                    <p style={{fontFamily:"serif",fontSize:"25px",marginTop:"3px",textAlign:"left"}}>
                        {
                            this.props.data.content
                        }
                    </p>
                    </Container>
                    <br />
                    <Comment />
                </div>
                </div>
            </div>
            
        )
    }
}
const mapStateToProps = state =>{
    return {
        data: state.selectedBlog,
        logged:state.user.logged,
        user: state.user
    }
}
export default connect(mapStateToProps)(ActualBlog)