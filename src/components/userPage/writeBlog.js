import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import {Modal,Button,Form as Frm} from 'react-bootstrap'
import {Button as Btn} from '@material-ui/core'
import {storage} from '../../firebase/index'
import Axios from 'axios'
import {connect} from 'react-redux'
import url from '../../url.json'


class WriteBlog extends Component {
  state = {
      title:"",
      show:false,
      category:"",
      content:"",
      file:null,
      image:"",
      loading:false
  }

  handleChange = (e, { value }) => this.setState({ value })
  closeModal = ()=>{
      this.setState({show:false})
  }

  selectCategory = e=>{
      this.setState({category:e.target.value},()=>console.log(this.state.category))
  }
  takeContent = e =>{
      this.setState({content:e.target.value})
  }
  takeBlogCover = e =>{
      this.setState({
          file:e.target.files[0]
      })
  }

  saveBlog = async e =>{
      e.preventDefault()
      this.setState({
          loading:true
      })
      // Upload image first to firebase
      const file = this.state.file
      const uploadTask = storage.ref(`images/${file.name}`).put(file)
        await uploadTask.on('state_changed',(snapshot)=>{
            // Shows our progress
        },(error)=>{
            // error function
            console.log(error)
        },
        ()=>{
            storage.ref('images').child(file.name).getDownloadURL().then(imageUrl=>{
                console.log(imageUrl)
                this.setState({image:imageUrl},async ()=>{
                    console.log(this.state)
                    await Axios.post(`${url.url}/user/blog/write/${this.props.id}`,this.state,{
                        headers:{
                            "auth-token":this.props.token
                        }
                    }).then(data=>console.log(data.data))
                    window.location.reload()
                })
            })
        })
    //   console.log({
    //       ...this.state
    //   })
    //   window.location.reload()
  }
   takeTitle = e=>{
       this.setState({title:e.target.value})
   }

  render() {
    const { value } = this.state
    return (
        <Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton>
            <Modal.Title>Write Your Blog</Modal.Title>
            </Modal.Header>
            <Modal.Body>Enjoy our wonderful Write Ups
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Title' placeholder='Blog Title' value={this.state.title} onChange={this.takeTitle}/>
                    <Frm.Control as="select" onChange={this.selectCategory}>
                        <option value="science">Science</option>
                        <option value="engineering">Engineering</option>
                        <option value="fashion">Fashion</option>
                        <option value="art">Art</option>
                        <option value="religion">Religion</option>
                        <option value="politics">Politics</option>
                    </Frm.Control>
                </Form.Group>
                <Form.TextArea label='Context' placeholder='Write All About Blog Here' onChange={this.takeContent}/>
                {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
                <input
                    accept="image/*"
                    style={{display:"none"}}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={this.takeBlogCover}
                />
                <label htmlFor="contained-button-file">
                    <Btn variant="contained" component="span">
                        Upload Blog Cover
                    </Btn>
                </label>
                <Form.Button onClick={this.saveBlog} loading={this.state.loading}>Submit</Form.Button>
            </Form>
    
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={this.props.onHide}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
    }
}

const mapStateToProps = state =>{
    return {
        token: state.user.auth_token,
        id: state.user._id
    }
}

export default connect(mapStateToProps)(WriteBlog)