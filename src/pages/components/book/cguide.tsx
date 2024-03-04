import React from 'react';
import { Col, Row,Image, Typography, } from 'antd';
import Link from "next/link";
const { Title,Paragraph } = Typography;


const Guide = () => {


  return (
    <>
      <Row gutter={16}>
        
        <Col span={16}>
        <Image
        src='/guide.png'
         height={600}
         />
        </Col>
        <Col span={8} style={{textAlign:'center',position:"relative",display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Title level={4} type="success"  >Welcome to Avatara Book!</Title>
            <Paragraph style={{fontSize:18}}>Welcome to the realm of Avatara, where imagination meets innovation! Unleash the power of your creativity as you embark on a journey to breathe life into your very own AI Avataras. With just a click, you can create avataras that spring forth from the depths of your imagination, ready to engage with the world and captivate others with their unique charm. Get ready to explore the limitless possibilities of avatara creation and connect with a community of like-minded storytellers. To embark on the adventure of a lifetime and watch your Avatara come to life!

           </Paragraph>
        </Col>
        
        <Col span={24}>
        <Title level={4} type="success">Creating Your Avatara</Title>
        <ul>
        <li> <Paragraph style={{fontSize:18}}> <strong style={{fontSize:20}}>Name : </strong>  Give your character a name that reflects their personality, story, or essence. Whether it's whimsical, mysterious, or downright quirky, let the name set the tone for your Avatara's journey.</Paragraph>
         </li>
         <li> <Paragraph style={{fontSize:18}}> <strong style={{fontSize:20}}>Description : </strong> Paint a vivid picture of your character with a detailed description. Highlight their physical appearance, personality traits, and any unique features that make them stand out. The more detailed, the better—this is your chance to bring your character to life in the minds of others. </Paragraph>
         </li>
         <li> <Paragraph style={{fontSize:18}}> <strong style={{fontSize:20}}>Context (Max length: 512 characters) : </strong> Craft a compelling narrative for your Avatara. What world do they inhabit? What adventures have they experienced? What motivates them? Provide a concise yet rich context to guide interactions and responses, allowing others to understand and connect with your creation on a deeper level.  </Paragraph>
         </li>
         <li> <Paragraph style={{fontSize:18}}> <strong style={{fontSize:20}}>Visibility : </strong>  Choose the visibility setting for your Avatara. Select "Public" if you want others to engage with and interact with your creation. By sharing your Avatara with the world, you open the door to collaborative storytelling and shared adventures. </Paragraph>
         </li> 
        </ul>  
        </Col>
        <Col span={24} >
            <Title level={4} type="success"  >After Creation</Title>
            <Paragraph style={{fontSize:18}}>
                 Once you've birthed your Avatara into the digital realm, the magic doesn't stop there. A wallposter—akin to a feed post—will be published, allowing other members of the Avatara community to discover, interact, and weave their own narratives into the tapestry of your character's story. Remember, with great creativity comes great responsibility:
           </Paragraph>
           <Paragraph style={{fontSize:18}}>
           As you embark on this collaborative storytelling adventure, please be a responsible citizen of the Avatara community. Respect the creativity and boundaries of others, and foster a positive and inclusive environment for everyone. Your Avatara is a reflection of your imagination, so let it shine brightly and inspire others to do the same. Together, let's create a world where every Avatara has a story worth telling. Start creating your Avatara now and join the collective journey of bringing imaginary characters to life! click here to <Link href="/components/content/create" > Create Avatara</Link>
           </Paragraph>
        </Col>
        
      </Row>
    </>
  );
};

export default Guide;
