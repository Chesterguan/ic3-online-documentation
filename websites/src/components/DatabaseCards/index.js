
import React from 'react';
import styles from './styles.module.css';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { Col, Row, Statistic, Card, Divider } from 'antd';

// TODO: implement the codes to fetch statistics from Database through Next/Node backend

const FeatureList=[
    {
        title:'IDEALIST',
        description:'Surgical Patients',
        numPatients:20380,
        numEncounters:18273,
        numSurgeries:7384,
        isOMOP:'Enabled',
        link:'/docs/datasets/IDEALIST'
    },
    {
        title:'AKI EPIC 2',
        description:'',
        numPatients:20380,
        numEncounters:18273,
        numSurgeries:7384,
        isOMOP:'Disabled',
        link:'/docs/datasets/AKIEPIC2',
    },
    {
        title:'Multimodal AI',
        description:'',
        numPatients:20380,
        numEncounters:18273,
        numSurgeries:7384,
        isOMOP:'Enabled',
        link:'/docs/datasets/MultimodalAI'
    },
    {
        title:'ChoRUS',
        description:'OMOP surgical patients',
        numPatients:20380,
        numEncounters:18273,
        numSurgeries:7384,
        isOMOP:'Enabled',
        link:'/docs/datasets/Chorus'
    },
]

function Feature({title, description, numPatients, numEncounters, numSurgeries, isOMOP, link }) {
  const omopFlag = isOMOP.includes("Enabled");
  const icon = omopFlag?<SmileOutlined/>:<FrownOutlined/>;
  const wordColor = omopFlag?'#3f8600':'#cf1322';

    return (
      <div style={{'margin-right':'2rem', 'margin-top':'1rem'}}>
        <Card hoverable title={title} bordered={true} style={{width:400}} type='inner' extra=<a href={link}>Details</a>>
        <p>{description}</p>
        <Row gutter={16}>
            <Col span={12}>
            <Statistic title="Num of patients" value={numPatients} />
            </Col>
            <Col span={12}>
            <Statistic title="Num of encounters" value={numEncounters} />
            </Col>
            <Col span={12}>
            <Statistic title="Number of surgeries" value={numSurgeries} />
            </Col>
            <Col span={12}>
            <Statistic title="OMOP version" value={isOMOP} prefix= {icon} valueStyle={{
              color: {wordColor}, // TODO: why not working ?
            }} />
            </Col>
            <Col></Col>
        </Row>
        </Card>
      </div>
    );
  }
  //valueStyle={{color:{color,}}}
  
  export default function DatabaseCards() {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))
            }
          </div>
        </div>
      </section>
    );
  }
  