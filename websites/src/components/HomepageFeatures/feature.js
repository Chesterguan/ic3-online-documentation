import React from 'react'
import clsx from 'clsx';
import styles from './styles.module.css';
import { Button } from 'antd';
import HomeProjectDetail from './home-project-details';


const Feature = ({ url, link, title, description, List }) => {

    return (
        <div className={clsx('col col--4 my-[1rem]')}>
            <div className="text--center flex justify-center items-center flex-col">
                <img className={styles.featureSvg} src={url} />
                <div className='text-xl font-[800]'>{title}</div>
                
            </div>

            <div className="text--center padding-horiz--md ">
                <p className='lg:h-[8rem]'>{description}</p>
                <div className='my-[0.5rem] flex justify-evenly'>
                <HomeProjectDetail  title={title} />
                {/* <Button href={link}>Show {title} </Button>  */}
                <Button href={link}>Docs</Button>
                </div>
                
            </div>

            
            
        </div>
    )
}

export default Feature


