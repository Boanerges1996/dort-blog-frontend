import React from 'react'
import { connect } from 'react-redux'
import UserHeader from './header2'
import { Redirect } from 'react-router'


class UserProfile extends React.Component{
    render(){
        if(!this.props.data.logged){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <UserHeader imgUrl={this.props.data.avatar}/>
                <div className="container">
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        data: state.user
    }
}

export default connect(mapStateToProps)(UserProfile)