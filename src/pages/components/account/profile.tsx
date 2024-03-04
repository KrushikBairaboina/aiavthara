import React, { useState } from 'react';
import { Form, Input, Button,Space, Upload, Row, Col, DatePicker, Typography, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const { Text } = Typography;


const Profile = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const calculateAge = (date) => {
    if (date) {
      const birthDate = date.toDate();
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - birthDate;
      const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
      return ageInYears;
    }
    return null;
  };
  return (
    <> 
      <Row >
        <Col span={10}>
          <Space >
            <Form name="basic"  requiredMark={false}>
              <Form.Item
                label="Name"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
              label="Email"
              name="Email"
              rules={[{
                type: 'email',
              },]}>
                <Input/>

              </Form.Item>

          <Form.Item
            label="Date Of Birth"
            name="Date Of Birth"
            rules={[{ required: true, message: 'Please pick Dob' }]}
          >
            <DatePicker onChange={handleDateChange} style={{ marginBottom: '16px' }} />
            <br/>
            {selectedDate && (
              
              <Text>
              Age: {calculateAge(selectedDate)} {calculateAge(selectedDate) === 1 ? 'year' : 'years'}
            </Text>
             )}
          </Form.Item>
          <Form.Item
            label="Bio"
            name="Bio"
            rules={[{ required: true, message: 'Please input Bio ' }]}
          >
            <Input />
          </Form.Item>


          <Form.Item
              label="Profile Picture"
              name="Profile Picture"
              rules={[{ required: true, message: 'Please input Image!' }]}
            >
              <Dragger>
                <p className="ant-upload-drag-icon">
                  <UserOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Dragger>
            </Form.Item>

             

              <Form.Item wrapperCol={{ offset: 10, span: 18 }}>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </Col>
    
      </Row>
    </>
  );
};

export default Profile;
