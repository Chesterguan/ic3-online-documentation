import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Feature from './feature';

const FeatureList = [
  {
    title: 'Projects',
    url: '/img/projects.png',
    link:'/docs/category/featured-projects',
    description: (
      <>
        The project is the top view of the research.&nbsp;The documentation is written by project-wise. Knowledge is organized with the related projects.
      </>
    ),
  },
  {
    title: 'Datasets',
    url: '/img/datasets.png',
    link:'/docs/category/datasets',
    description: (
      <>
        Datasets are the key points of our research.&nbsp; We have prepared a large dataset for you and the data dictionary will lead you to the success.
      </>
    ),
  },
  {
    title: 'Workspaces',
    url: '/img/workspaces.png',
    link:'/docs/category/workspaces',
    description: (
      <>
        Workspaces are the place where we play with the data. Pipelines, applications, microservice and model trainings are developed and deployed here.
      </>
    ),
  },

];



export default function HomepageIcons() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
            
          ))}
        </div>
      </div>
    </section>
  );
}
