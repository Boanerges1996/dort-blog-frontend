import React from 'react'
// import {Card,Image,Icon,Button} from 'semantic-ui-react'
import {Card,Button} from 'react-bootstrap'
import {Button as Btn,Card as Cr,Icon} from 'semantic-ui-react'

class BlogList extends React.Component{
    render(){
        return (
            <div className="m-2 float-left">
                <Card style={{ width: '20rem'}}>
                    <Card.Img variant="top" src={this.props.image} style={{height:"200px"}}/>
                    <Card.Body>
                        <Cr.Header><b>{this.props.title}</b></Cr.Header>
                        <Cr.Meta>
                            <span className="text-muted">{this.props.name}</span>
                        </Cr.Meta>
                        <Card.Text className="text-truncate">
                        {this.props.content}
                        </Card.Text>
                        <Btn id={this.props.id} onClick={this.props.onClick}>View content</Btn>
                        <Cr.Content extra className="mt-2">
                            <a>
                                <Icon name='user' />
                                22 Followers
                            </a>
                        </Cr.Content>
                    </Card.Body>
                </Card>
                {/* <Card>
                    <Image src={this.props.image} wrapped ui={false}/>
                    <Card.Content>
                        <Card.Header>{this.props.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{this.props.name}</span>
                        </Card.Meta>
                        <Card.Description className="text-truncate">
                            {this.props.content}
                        </Card.Description>
                        <Button id={this.props.id} onClick={this.props.onClick}>View Content</Button>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Followers
                        </a>
                    </Card.Content>
                </Card> */}
            </div>
        )
    }
}

export default BlogList