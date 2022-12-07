import React from 'react';
import {Avatar, Card, Button, Tooltip, Space} from 'antd';
import {MessageOutlined, VideoCameraOutlined, ReconciliationOutlined} from '@ant-design/icons';

import styles from './styles.module.css';


// Default dictionary of tags 
const TagsDict = {
    'Text':{
        words: 'Text',
        tooltip: 'Medical text data',
        icon: <MessageOutlined />
    },
    'Image':{
        words: 'Image',
        tooltip: 'Medical images such as CT Scan',
        icon: <VideoCameraOutlined  />
    },
    'EHR':{
        words: 'EHR', 
        tooltip: 'Electrical Health Records',
        icon: <ReconciliationOutlined />
    },
    'NLP': {
        words: 'NLP',
        tooltip: 'Natural Language Processing',
    }
}

var FeatureList = [  // The meta info of the model cards
    {
      title: 'SOFA',
      url: '/img/workspaces.png', // img should be small
      description: (
        <>
          The online documentation is designed to transfer knowledge between our researchers.
          You are able to find the details about all projects, datasets and techinical issues in one place. 
        </>
      ),
      tagArray: ['Text','Image','EHR'],
      author: 'https://github.com/endiliey.png' // can use github avatar : https://github.com/[ACCOUNT].png
    },
    {
      title: 'MySurgeryRisk',
      url: '/img/projects.png',
      description: (
        <>
          Please feel free to use the <strong>search tool</strong> above to ask your questions. Answers will show up smoothly.
          If you hope to add more sections, please feel free to add an issue <a>here</a>.
          swhslwswksqkwsq
        </>
      ),
      tagArray: ['Text','Image'],
      author:'https://github.com/Chesterguan.png'
    },
    {
      title: 'AKI Phenotype',
      url: '/img/datasets.png', 
      description: (
        <>
          The documentation tool is built with <a href='https://docusaurus.io/'>Docusaurus</a> and maintained by IC3 DevOps. We will keep the documentation updated. 
          swskqskqjwhsqwshkjqjskqwhsjkhqwjk
        </>
      ),
      tagArray: ['Text', 'NLP'],
      author: 'https://github.com/ruppert20.png'
    },
  ];


function Action({tooltip, icon, words}) {
  return (
    <Tooltip title = {tooltip} >
        <Button icon = {icon}>
            {words}
        </Button>
    </Tooltip>
  );
}


function Feature({url, title, description, tagArray, author}) {
    const {Meta} = Card;
    var actions = [];
    for (let key in TagsDict){
        if (tagArray.indexOf(key) > -1){
            actions.push(TagsDict[key])
        }
    }
    const comp = actions.map((props, idx) => (
        <Action key={idx} {...props} />
    ))
    return (
    <div style={{'margin-right':'auto', 'margin-top':'1rem', 'maxWidth':'40%',}}>
      <Card hoverable
        cover={<img style={{'margin':'0.1rem'}}  src={url} />}
        actions= {
            [<Space align='start' >{comp}</Space>]
        }>
        <Meta title = {title} 
            description={description}
            avatar = {<Avatar src = {author} />} 
        />
      </Card>
    </div>
    );
  }
  
export default function ModelCards() {
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
