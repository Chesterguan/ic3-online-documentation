import React from 'react'
import DatasetBox from './datasetbox';
import ProjectBox from './projectbox'
import WorkspaceBox from './workspacebox';

const ItemShowBox = ({ Title, List }) => {
  const list = List;
  return (
    // <div className='mx-[1rem] my-[1rem]'>

      <div className='flex ml-[1rem] flex-wrap font-sans max-w-[55rem]'>
        {
          Title == "Datasets" &&
            List.map(i => <DatasetBox Title={i.name} LinkTo = {i.link} Update = {i.update} NumPatients={i.numPatients}  NumSurgeries={i.numSurgeries}/>)
             
        }

        {
          Title == "Projects" &&
            List.map(i => <ProjectBox Title={i.name} LinkTo = {i.link} />)
            
        }

{
          Title == "Workspaces" &&
            List.map(i => <WorkspaceBox  Title={i.name} LinkTo = {i.link} Update = {i.update} NumPatients={i.numPatients}  NumSurgeries={i.numSurgeries}/>)
            
        }
      </div>

    // </div>
  )
}

export default ItemShowBox
