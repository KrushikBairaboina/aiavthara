import { avatarData } from '@/pages/data';
import { Button, Card, Image } from 'antd';
const { Meta } = Card;

const Main= () => (
  <>
  <div style={{ padding: '20px' }}>
    <Button style={{ marginRight: '8px' }} >Spritual</Button>
    <Button style={{ marginRight: '8px' }}>Science</Button>
    <Button style={{ marginRight: '8px' }}>Actors</Button>
    <Button style={{ marginRight: '8px' }} >Sports</Button>
    <Button style={{ marginRight: '8px' }}>Politics</Button>
    <Button style={{ marginRight: '8px' }} >Animals</Button>
    <Button style={{ marginRight: '8px' }}>Technology</Button>
    <Button style={{ marginRight: '8px' }}>others</Button>
  </div>

  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems:"center"}}>
  {avatarData.map((item, index) => (
    <Card
      key={index}
      hoverable
      
      style={{
        display: 'flex',
        flexDirection: 'column',
        width:" 200px",
        height:'350px',
        margin: '16px',
        border:"10px",
        justifyContent:"center",
        alignItems:"center",
        
      }}
      cover={<Image 
        alt={item.title} 
      src={item.url} 
      style={{ width:"170px",height:"170px"}}
      />}
      
      >
        <Meta title={item.title} description={item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description}/>
      
    </Card>
  ))}
</div>
  </>
  
);

export default Main;