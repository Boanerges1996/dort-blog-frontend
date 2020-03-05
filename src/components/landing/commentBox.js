import React from 'react'
import {Comment} from 'semantic-ui-react'

class CommentBox extends React.Component{
    render(){
        return (
            <div>
                <Comment>
                        <Comment.Avatar src={this.props.src} />
                        <Comment.Content>
                            <Comment.Author as='a'>{this.props.username}</Comment.Author>
                            <Comment.Metadata>
                            <div>5 days ago</div>
                            </Comment.Metadata>
                                <Comment.Text>{this.props.comment}</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                </Comment.Content>
                </Comment>
            </div>
        )
    }
}

export default CommentBox