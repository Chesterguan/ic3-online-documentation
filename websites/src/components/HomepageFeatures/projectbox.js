import React from 'react'
import Link from '@docusaurus/Link';


const ProjectBox = ({ Title, LinkTo }) => {
  return (
    <Link className={`no-underline`} to={LinkTo}>
      <div className='
      flex mr-[23px] 
      items-center flex-wrap  
      w-[16rem] h-[12rem] 
      text-center border-1 rounded-sm shadow-lg no-underline
      hover:bg-[#ddd]
      font-[500]
      hover:font-[800]
      mt-[1.5rem]
      '>

        <div className='w-[12rem]   no-underline'>
          {Title}
        </div>



      </div>
    </Link>
  )
}

export default ProjectBox
