import React, { useState } from 'react';
import { Form, Input, Button, Checkbox,Space, Select, Upload, Row, Col, Typography, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { avatarData } from '@/pages/data';

const { Option } = Select;
const { Dragger } = Upload;

const Create = () => {
const  [avataraData, setAvataraData] = useState(avatarData);
const onFinish = (values) => {
  setAvataraData(values);
  console.log(values);

};
  return (
    <> 
      <Row style={{ padding: '20px' }}>
      <h3>Create a Character</h3>
      <Divider />
        <Col >
          <Space direction="vertical">
            <Form name="basic" layout="vertical" requiredMark={false} onFinish={onFinish} >
              <Form.Item
                label="Name"
                name="username"
                extra="The name can include first and last names. "
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
            label="Greetings"
            name="Greetings"
            extra='What would they say to introduce themselves? For example, "Albert Einstein" could say: "Hello, I am Albert Einstein. I was born on March 14, 1879, and I conceived of the theory of special relativity and general relativity.'
            rules={[{ required: true, message: 'Please input Greetings!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
              label="Upload"
              name="Upload"
              rules={[{ required: true, message: 'Please input Image!' }]}
            >
              <Dragger>
                <p className="ant-upload-drag-icon">
                  <UserOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Dragger>
            </Form.Item>
          <Form.Item
            label="Context"
            name="Context"
            extra="Provide additional character details or background in the field. "
            rules={[{ required: true, message: 'Please input Context ' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="Description"
            extra="The name can include first and last names. "
            rules={[{ required: true, message: 'Please input Description!' }]}
          >
            <Input />
          </Form.Item>

              <Form.Item
                label="Visibility"
                name="Visibility"
                extra="Who is allowed to talk to them?"
                rules={[{ required: true, message: 'Please select One option' }]}
              >
                <Select>
                  <Option value="private">Private: Only you can chat</Option>
                  <Option value="public">Public: Anyone can chat</Option>
                </Select>
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>I agree to the AI Avatara </Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 10, span: 18 }}>
                <Button type="primary" htmlType="submit">
                  Create Character
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Create;
