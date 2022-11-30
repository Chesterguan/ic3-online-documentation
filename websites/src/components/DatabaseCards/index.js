
import React from 'react';
import styles from './styles.module.css';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { Col, Row, Statistic, Card, Divider } from 'antd';

// TODO: implement the codes to fetch statistics from Database through Next/Node backend

const FeatureList=[
    {
        title:'MySQL-IDELIAST',
        description:'',
        numPatients:20380,
        numEncounters:18273,
        numSurgeries:7384,
        isOMOP:'Disabled',
        icon:<FrownOutlined/>
    },
    {
        title:'OMOP-IDELIAST',
        description:'',
        numPatients:20380,
        numEncounters:18273,
        numSurgeries:7384,
        isOMOP:'Enabled',
        icon:<SmileOutlined/>
    },
    {
        title:'OMOP-IDELIAST',
        description:'',
        numPatients:20380,
        numEncounters:18273,
        numSurgeries:7384,
        isOMOP:'Enabled',
        icon:<SmileOutlined/>
    },
    {
        title:'OMOP-IDELIAST',
        description:'',
        numPatients:20380,
        numEncounters:18273,
        numSurgeries:7384,
        isOMOP:'Enabled',
        icon:<SmileOutlined/>
    },
]

function Feature({title, numPatients, numEncounters, numSurgeries, isOMOP,icon }) {

    return (
      <div style={{'margin-right':'2rem', 'margin-top':'1rem'}}>
        <Card hoverable title={title} bordered={true} style={{width:400}}>
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
            <Statistic title="OMOP version" value={isOMOP} prefix= {icon} />
            </Col>
            <Col></Col>
        </Row>
        </Card>
      </div>
    );
  }
  
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
  