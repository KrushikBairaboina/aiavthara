import React from 'react';
import { Col, Row,Image, Typography,Tabs} from 'antd';
const { Title,Paragraph } = Typography;
const { TabPane } = Tabs;


const About = () => {


  return (
    <>
      <Tabs defaultActiveKey="about" style={{ padding: '20px' }}>
      <TabPane tab="About" key="about">
      <Row gutter={16}>
        
        <Col span={8}>
        <Image
        src='/companion.png'
        style={{ height: '50vh' }}
         />
        </Col>
        <Col span={16} style={{textAlign:'center',position:"relative",display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Title level={4} type="success"  >We are open source!</Title>
            <Paragraph style={{fontSize:18}}>
            Welcome to Ai Avatara, where the fusion of imagination and innovation defines a new frontier. We're not just breaking ground; we're a small team making open-source AI accessible to the world, extending the vast potential of open source. This groundbreaking initiative transforms the enchanting concept of boundless interactions with AI chatbots from science fiction to reality. Unlike conventional companies, we are a dynamic, playful, and technologically advanced project. Within the realm of Ai Avatara, users not only have the exciting opportunity to materialize characters from their imagination but also contribute to our small team's mission of making open-source AI accessible globally. Immerse yourself in this extraordinary journey where creativity not only shapes but also expands the future of dialogue.
           </Paragraph>      
           <Paragraph style={{fontSize:18}}>
           As a small team dedicated to making open-source AI accessible, we believe in democratizing the potential of artificial intelligence. Ai Avatara is not just a platform; it's a collaborative space where users play a vital role in shaping the evolution of open-source AI. Join our community and contribute to the ongoing narrative of innovation and imagination. Together, let's push the boundaries of what's possible and redefine the landscape of AI-driven conversations. Here the synergy of a small, passionate team and a global community creates a unique and limitless experience in the realm of artificial intelligence. c 
           </Paragraph>
        </Col>
        
      
        <Col span={24} style={{textAlign:'center',position:"relative",display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Title level={4} type="success"  >Avatara Beta 1.0.0</Title>
            <Paragraph style={{fontSize:18}}>
            Presently, our operational focus is dedicated to the research and experimentation of various open-source models, with Avatara Beta 1.0.0 currently being the version in active use. It is imperative to underscore that the primary objective of our efforts is strictly research-oriented and not intended for commercial purposes. Our team is deeply engaged in fine-tuning and exploring the vast potential inherent in different open-source models.
           </Paragraph>
           <Paragraph style={{fontSize:18}}>
           Our model is fine-tuned on top of the Meta Llama2 7B model, enhancing its capabilities and performance. This unique approach allows us to explore and unlock new possibilities in AI dialogue. In this experimental phase, we extend an invitation to users to actively participate and contribute to the evolution of AI dialogue within our dynamic and collaborative community. Your engagement is invaluable as we collectively delve into the intricate facets of artificial intelligence. Stay tuned for updates and further developments as we continue to push the boundaries of open-source AI through our ongoing exploration and experimentation. Your involvement plays a pivotal role in shaping the future of AI dialogue, and we appreciate your contributions to this fascinating journey.
           </Paragraph>
        </Col>
        <Col span={24} style={{textAlign:'center',position:"relative",display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Title level={4} type="success"  >Our platform is only available on Sundays!</Title>
            <Paragraph style={{fontSize:18}}>
            Currently, we operate exclusively on Sundays, offering a dedicated day for users to contribute to the evolution of AI dialogue. Join our passionate team and the global community in redefining the landscape of AI-driven conversations every Sunday. Together, we're pushing the boundaries of what's possible in this exciting journey.
           </Paragraph>
          
        </Col>
      </Row>
      </TabPane>
      </Tabs>
    </>
  );
};

export default About;
