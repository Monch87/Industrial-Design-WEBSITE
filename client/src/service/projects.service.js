import axios from 'axios'

class ProjectService {
    constructor(){
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/designer` //package.json trabajo en el script de inicio (start) y creo una variable de entorno
        })
    }

    getProjects = () => this.api.get('/allProjects')
    getbyOwner = userId => this.api.get(`/byOwner/${userId}`)  ///PREGUNTAR A TEO SI ESTO ESTA BIEN
    getProject = projectId => this.api.get(`/oneProject/${projectId}`)
    saveProject = projectDetails => this.api.post('/newProject', projectDetails)
    editProject = (projectId, projectDetails) => this.api.put(`/editProject/${projectId}`, projectDetails)
    deleteProject = projectId => this.api.get(`/deleteProject/${projectId}`) ///PREGUNTAR A TEO SI ESTO ESTA BIEN
}

export default ProjectService



