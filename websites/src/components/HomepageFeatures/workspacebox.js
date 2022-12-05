import React from 'react'
import Link from '@docusaurus/Link';

const WorkspaceBox = ({ Title, LinkTo, Update, NumPatients, NumSurgeries }) => {
  return (
    <div className='flex mr-[1.8rem] items-center flex-wrap w-[16rem] h-[12rem] text-center border-1 rounded-sm shadow-lg'>
      <Link to={LinkTo}>
        <div className='w-[12rem] font-[500] mt-[1rem]'>
          {Title}
        </div>
        <div className=' mt-[0.5rem]'>

          <div className='text-[0.8rem]'>Patients: {NumPatients} </div>

          <div className='text-[0.8rem]'>Surgeries: {NumSurgeries}</div>
          <div className='font-[300] text-[0.6rem] mt-[1rem]'>
            update: {Update}
          </div>
        </div>


      </Link>


    </div>
  )
}

export default WorkspaceBox
