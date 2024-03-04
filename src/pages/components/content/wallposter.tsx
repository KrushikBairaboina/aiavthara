import { avatarData } from '@/pages/data';
import { Row, Col, Space, Typography, Button, Flex, Image } from 'antd';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';

const imgStyle = {
  width: 200,
  height: 200,
  objectFit: 'scale-down',
};

const { Title, Paragraph } = Typography;

const Wallposter = () => (
  <Row gutter={[16, 16]} style={{ padding: '20px' }}>
    {avatarData.map((item, index) => (
      <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px',
            border: '1px solid #e8e8e8',
            borderRadius: '8px',
            background: '#fff',
            height: '300px',
          }}
        >  
          <Space align="center">
            <Image alt={item.title} src={item.url} style={imgStyle} />
            <Space direction='vertical'>
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Space>
          </Space>
          {/* <Flex  style={{ marginTop: 'auto',justifyContent:"flex-end" }}>
              <Button>

                <SettingOutlined />

              </Button>
              <Button>
                <EditOutlined />

              </Button>
              <Button>
                <EllipsisOutlined />

              </Button>
          </Flex> */}
            
          
        </div>
        
      </Col>
    ))}
  </Row>
);

export default Wallposter;