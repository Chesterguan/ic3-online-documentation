import React from 'react'
import Link from '@docusaurus/Link';

const DatasetBox = ({ Title, LinkTo, Update, NumPatients, NumSurgeries }) => {
  return (
    <Link className={`items-center`} to={LinkTo} style={{textDecorationLine: "none"}}>
    <div className='flex mr-[1.8rem] items-center flex-wrap w-[16rem] h-[12rem] text-center border-1 rounded-sm shadow-lg
          hover:bg-[#ddd]
          font-[500]
          hover:font-[800]
          justify-center
          mt-[1.5rem]
          '>
     
        <div className='w-[12rem] font-[500] mt-[1rem]'>
          {Title}
        </div>
        <div className=' mt-[0.5rem] '>

          <div className='text-[0.8rem]'>Patients: {NumPatients} </div>

          <div className='text-[0.8rem]'>Surgeries: {NumSurgeries}</div>
          <div className='font-[300] text-[0.6rem] mt-[1rem]'>
            update: {Update}
          </div>
        </div>


      


    </div>
    </Link>
  )
}

export default DatasetBox
