import { projectsData } from "src/data/projects";

export const getProjects = () => {
  return projectsData;
}

export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
}
export const getAllProjectIds = () => {
    return projectsData.map(project => project.id);
}
