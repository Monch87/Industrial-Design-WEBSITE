const ProjectsList = ({projects}) => {
    return (
        <ul>
            {projects?.map(elm => <li>{elm.title}</li>)}
        </ul>
    )
}


export default ProjectsList