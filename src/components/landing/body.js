import React from 'react'
import BlogList from './blogs'
import Blogs from './blogs.json'
import Axios from 'axios'
import url from '../../url.json'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class LandBody extends React.Component{
    state = {
        in:false
    }
    viewBlog = async(e)=>{
        Axios.get(`${url.url}/user/blog/one/${e.target.id}`).then(async data=>{
            await this.props.single(data.data)
            await Axios.get(`${url.url}/user/comment/get/blog/${this.props.blog_id}`).then(data=>{
                this.props.comment(data.data)
            })
            this.setState({
                in:true
            })
        })
    }

    componentDidMount(){
        Axios.get(`${url.url}/user/blog/all`).then(data=>{
            this.props.getBlogs(data.data)
        })
    }
    render(){
        if(this.state.in){
            return <Redirect to="/actual/blog"/>
        }
        return (
            <div className="container " style={{paddingTop:"10px",marginTop:"80px",backgroundImage:"url('sky.svg')"}}>
                {
                    this.props.Data.map((data,index)=>{
                        return <BlogList title={data.title} image={data.image} content={data.content} key={index} 
                        id={data._id} onClick={this.viewBlog}/>
                    })
                }
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
        Data: state.blogs
    }
}

const getComments = data =>({
    type:"COMMENTS",
    data:data
})

const mapDispatchToProps = dispatch =>{
    return {
        getBlogs: (data)=>dispatch(fetchBlogs(data)),
        single: (data)=>dispatch(getParticularBlog(data)),
        comment: (data)=>dispatch(getComments(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LandBody)