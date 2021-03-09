import { Component } from 'react'
import ProjectService from '../../../service/projects.service'
import { Container, Form, Button } from 'react-bootstrap'
import UploadService from '../../../service/upload.service'



class ProjectForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            project:{
                title: props.project?.title || '',
                startedProject: this.formatDate(props.project?.startedProject),
                endedProject: this.formatDate(props.project?.endedProject),
                description: props.project?.description || '',
                owner: props.project?.owner || '',
                review: props.project?.review || '',
                imageUrl: props.project?.imageUrl || ''
            },
            users: [],
            isUploading: false
        }

        this.projectService = new ProjectService()
        this.uploadService = new UploadService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ project: { ...this.state.project, [name]: value }})
    }

    handleSubmit(e) {

        e.preventDefault()

        if (this.props.project) {
            this.projectService
                .editProject(this.props.project?._id, this.state.project)
                .then(() => {
                    this.props.closeModal()
                    this.props.refreshList()
                })
                .catch(error => console.log(error))
        } else {
            if (this.state.project.owner = '')
                this.state.project.owner = this.props.user_id
            this.projectService
                .saveProject(this.state.project)
                .then(() => {
                    this.props.closeModal()
                    this.props.refreshList()
                })
                .catch(error => console.log(error))
        }
    }

    formatDate(date) {
        if (date == null)
            return null
        else
            return new Date(date).toISOString().slice(0, 10)
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers() {
        this.projectService
            .getCustomers()
            .then(response => this.setState({ users: response.data }))
            .catch(err => console.log(err))
    }

    handleFileUpload = e => {

        this.setState({ isUploading: true })

        const uploadData = new FormData()
        uploadData.append('imageUrl', e.target.files[0])

        this.uploadService
            .uploadFile(uploadData)
            .then(response => {
                this.setState({
                    isUploading: false,
                    project: { ...this.state.project, imageUrl: response.data.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.project.title} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date started:</Form.Label>
                        <Form.Control type="date" name="startedProject" value={this.state.project.startedProject} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date ended:</Form.Label>
                        <Form.Control type="date" name="endedProject" value={this.state.project.endedProject} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" value={this.state.project.description} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Add image (File): {this.state.isUploading}</Form.Label>
                        <Form.Control type="file" name="imageUrl" onChange={e => this.handleFileUpload (e)} />
                    </Form.Group>
                 
                    <Form.Group as="owner">
                        <Form.Label>Owner</Form.Label>
                        <Form.Control as="select" name="owner" defaultValue="Choose..." onChange={e => this.handleInputChange(e)}>
                            <option>Choose...</option>
                            {this.state.users?.map(elm => <option value={elm._id}> {elm.username} </option>)}
                        </Form.Control>
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">Done</Button>
                </Form>
            </Container>
        )
    }

}
export default ProjectForm


