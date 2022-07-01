import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
  mutation CreateProject($userEmail: String) {
    projectCreate(data: { name: "Project One", users: { connect: { email: $userEmail } } }) {
      id
    }
  }
`;

export const PROJECTS_QUERY = gql`
  query ProjectList {
    projectsList {
      count
      items {
        id
        name
        tasks {
          count
          items {
            id
            title
            description
            status
          }
        }
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation AddTask($projectId: ID, $userId: ID) {
    taskCreate(
      data: {
        title: "Test 1"
        description: "nullable"
        status: "ToDo"
        project: { connect: { id: $projectId } }
        author: { connect: { id: $userId } }
      }
    ) {
      id
    }
  }
`;
