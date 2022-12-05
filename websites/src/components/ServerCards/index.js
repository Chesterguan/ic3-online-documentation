import React,{ useState } from 'react';
import styles from './styles.module.css';
import { Card } from 'antd';

/**
 * 
 * The component is built to display server statictics
 * 
 * **/

const FeatureList = [
  {
    title: 'TestBed Server',
    os:'Ubuntu 14.04.6 LTS',
    ip:'10.14.132.154',
    'domain':'mysurgeryrisk.ahc.ufl.edu',
    cpuType: 'Intel(R) Xeon(R) CPU E5-2640 v3 @ 2.60GHz',
    cpuNum:'32',
    gpuType: 'NVIDIA GTX Titan X',
    gpuNum: '4',
    ram:'135',
    diskH:'8',
    diskS:'0.5',
    status:'RAM replacement required',
    link:'#',
    description: (
      <>
        The server is mainly applied for <strong>testing and educational</strong> purpose.<br />
        Currently, MySurgeryRisk Web Application is deployed in this server.
      </>
    ),
  },
  {
    title: 'Data Server',
    os:'CentOS Linux release 7.9.2009 (Core)',
    ip:'10.14.134.118',
    'domain':'mysurgeryrisk-data.ahc.ufl.edu',
    cpuType: 'Intel(R) Xeon(R) Silver 4208 CPU @ 2.10GHz',
    cpuNum:'32',
    gpuType: '',
    gpuNum: 'N/A',
    ram:'376',
    diskH:'72',
    diskS:'4',
    status:'In working now',
    link:'#',
    description: (
      <>
        The server is mainly applied for <strong>small data processing pipelines and storage</strong>.<br />
      </>
    ),
  },
  {
    title: 'Production Server',
    os:'Ubuntu 18.04.6 LTS',
    ip:'10.14.134.116',
    'domain':'mysurgeryrisk-prod.ahc.ufl.edu',
    cpuType: 'Intel(R) Xeon(R) Gold 6240 CPU @ 2.60GHz',
    cpuNum:'72',
    gpuType: 'NVIDIA Quadro RTX 6000',
    gpuNum: '4',
    ram:'763',
    diskH:'0',
    diskS:'31.2',
    status:'In working now',
    link:'#',
    description: (
      <>
        The server is used for <strong>production</strong>. <br />
        Data pipelines, modeal training and background service are mostly deployed here.
      </>
    ),
  },
];

function Feature({title, description,ip,domain, os, cpuType, cpuNum,gpuType, gpuNum, ram, diskH, diskS,link,status}) {
  const isWorking = status.includes("working");
  return (
    <div>
    <Card className='my-[1rem] border-4' hoverable title= {title} bordered={true} style={{width:700}} extra={<a href={link}>Details</a>}>
        <p>{description}</p>
        <h5>IP: {ip} &nbsp; &nbsp; &nbsp; Domain: {domain} &nbsp; &nbsp; &nbsp; OS: {os}</h5>
        <h5>CPU: {cpuNum} cores {cpuType}</h5>
        <h5>GPU: {gpuNum} cores {gpuType}</h5>
        <h5>RAM: {ram}(GB) &nbsp; &nbsp; &nbsp; Storage: {diskH}(TB) HDD &nbsp;{diskS}(TB) SSD </h5>
        <h4 style={isWorking?{color:'green'}:{color:'red'}}>{status}</h4>
    </Card>
    <p></p>
    </div>
  );
}

export default function ServerCards() {
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


