import ProjectList from "./ProjectList"
import { MOCK_PROJECTS } from "./MockProjects"

function ProjectsPage () {
    return (        
        <>
        <h1>Projects</h1>
        {/* {<pre>{JSON.sdfdftringify(MOCK_PROJECTS, null, ' ')}</pre>} */}
        <ProjectList projects={MOCK_PROJECTS}/>
        </>
    )

}

export default ProjectsPage
