import React from 'react';
import { useQuery } from '@apollo/client';
import { PROJECTS_QUERY } from 'shared/graphql';
import ReactMarkdown from 'react-markdown';
import './styles.css';

function ProjectsPage() {
  const { data: response, loading } = useQuery(PROJECTS_QUERY);
  if (loading) return <p>Wait...</p>;
  const projects = response?.projectsList?.items;
  return (
    <div className="container">
      {projects.map((project) => (
        <details key={project.id} open={false}>
          <summary>{project.name}</summary>
          <div className="content">
            <ol>
              <lh>
                <strong>Task List</strong>
              </lh>
              {project.tasks.items.map((task) => (
                <li>
                  <p>
                    <span>[{task.status}]</span>
                    {task.title}:<ReactMarkdown>{task.description}</ReactMarkdown>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </details>
      ))}
    </div>
  );
}

export default ProjectsPage;
