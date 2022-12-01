import React, { useState } from 'react';
import { SmileOutlined, FrownOutlined, ClockCircleOutlined } from '@ant-design/icons';
import {Timeline} from 'antd';


export const FeatureList=[
    {
        timestamp:'2022-11-01',
        color:'green',
        task:'IDEALIST OMOP database is ready for internal usage.',
        icon: <SmileOutlined />
    },
    {
        timestamp:'2022-12-15',
        color:'blue',
        task:'Get Sample Multimodal AI data (version2)',
        icon: <ClockCircleOutlined />
    },
    {
        timestamp:'2023-01-31',
        color:'blue',
        task:'Finish the OMOP mapping of Multimodal AI datasets',
        icon: <ClockCircleOutlined />
    }, 
]

function Feature({timestamp, color, task, icon}) {
    return (
        <Timeline.Item dot={icon} color = {color} style={{fontSize:'16px'}}>
            <strong>{timestamp} : </strong>
            <span>{task}</span>
        </Timeline.Item>
    );
  }

export default function TimelineComponent(){
    return (
        <>
            <Timeline mode="alternative">
            {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
                ))
                }
            </Timeline>
        </>
    );
};