import React from 'react'
import BlogList from '../landing/blogs'
// import UserHeader from './header'
import UserBody from './sideBar'
import UserHeader from './header2'
import SideBar from './sideBar'
import WriteBlog from './writeBlog'
import Blog from '../landing/blogs.json'
import {connect} from 'react-redux'
import Axios from 'axios'
import url from '../../url.json'
import {Redirect} from 'react-router-dom'
// import PrimarySearchAppBar from './header'

class User extends React.Component{
    state={
        side:false,
        left:false,
        writeModal:false,
        in:false
    }
    ShowSide = ()=>{
        this.setState({side:!this.state.side})
    }

    fetchBlog = async(e)=>{
        await Axios.get(`${url.url}/user/blog/one/${e.target.id}`).then(async data=>{
            await this.props.single(data.data)
            this.setState({in:true},()=>{
                window.location.reload()
            })
        })
    }

    componentDidMount (){
        Axios.get(`${url.url}/user/blog/all`).then(data=>{
            this.props.getBlogs(data.data)
        })
    }
    render(){
        if(this.state.in){
            return <Redirect to="/actual/blog"/>
        }
        return (
            <div>
                <UserHeader onClickMenu={()=>this.setState({left:true})} imgUrl={this.props.url}/>
                <SideBar left={this.state.left} closeLeft={()=>this.setState({left:false})} clickOne={()=>this.setState({left:false})}
                    write={()=>this.setState({writeModal:true})}
                />
                <WriteBlog show={this.state.writeModal} onHide={()=>this.setState({writeModal:false})}/>
                <div className="container">
                    {
                        this.props.Blogs.map((data,index)=>{
                            return <BlogList title={data.title} image={data.image} content={data.content} key={index} id={data._id}
                                onClick={this.fetchBlog} name={data.username}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

const fetchBlogs = data =>({
    type:"BLOGS",
    data:data
})

const getParticularBlog = data=>({
    type:"SINGLE_BLOG",
    data:data
})

const mapStateToProps = state =>{
    return {
        url: state.user.avatar,
        Blogs: state.blogs
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getBlogs: (data)=>dispatch(fetchBlogs(data)),
        single: (data)=>dispatch(getParticularBlog(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)