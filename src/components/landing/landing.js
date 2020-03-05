import React from 'react'
import {connect} from 'react-redux'
import LandHeader from './header'
import LandFooter from './footer'
import LandBody from './body'
import {Redirect} from 'react-router-dom'

class Landing extends React.Component{
    render(){
        if(this.props.logged){
            return <Redirect to="/user"/>
        }
        return (
            <div>
                <LandHeader />
                <LandBody />
                <LandFooter />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        logged: state.user.logged
    }
}

export default connect(mapStateToProps)(Landing)