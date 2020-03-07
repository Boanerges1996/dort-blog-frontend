import React from 'react'
import {Form,Button,Comment,Header} from 'semantic-ui-react'
import url from '../../url.json'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import CommentBox from './commentBox.js'
import {socket} from '../../App'

class Comments extends React.Component{
    state = {
        comment:"",
        loading:false,
        write:false
    }

    takeComment = (e)=>{
        this.setState({
            comment:e.target.value
        })
    }
    

    postComment = ()=>{
        if(this.props.logged){
            Axios.post(`${url.url}/user/comment/write/${this.props.id}`,{...this.state,blog_id:this.props.blog_id},{
                headers:{
                    "auth-token":this.props.token
                }
            })
        }
        else{
            this.setState({
                write:true
            })
        }
    }
    componentDidMount(){
        Axios.get(`${url.url}/user/comment/get/blog/${this.props.blog_id}`).then(data=>{
            console.log(data.data)
            this.props.comments(data.data)
        })
        
    }
    render(){
        if(this.state.write){
            return <Redirect to="/login"/>
        }
        return (
            <div style={{textAlign:"left"}}>
                <Comment.Group>
                    <Header as='h3' dividing>
                    Comments
                    </Header>
                        {
                            this.props.myComments.map((data,index)=>{
                                return <CommentBox src={data.avatar} comment={data.comment} username={data.username} key={index}/>
                            })
                        }
                    {/* <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>Joe Henderson</Comment.Author>
                            <Comment.Metadata>
                            <div>5 days ago</div>
                            </Comment.Metadata>
                            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment> */}

                    <Form reply>
                        <Form.TextArea onChange={this.takeComment} value={this.state.comment}/>
                        <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={this.postComment} loading={this.state.loading}/>
                    </Form>
                </Comment.Group>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    return {
        id: state.user._id,
        token:state.user.auth_token,
        logged:state.user.logged,
        blog_id:state.selectedBlog._id,
        myComments:state.comments
    }
}

const getComment = data =>({
    type:"COMMENTS",
    data:data
})

const mapDispatchToProps = dispatch =>{
    return {
        comments: (data)=>dispatch(getComment(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments)