import React from 'react';
import {Tabs } from 'antd';
import Profile from '../account/profile';
import Character from '../account/character';
const { TabPane } = Tabs;

const Account = () => {
  return (
    
    <div style={{ padding: '20px' }}>
    <Tabs defaultActiveKey="profile">
      <TabPane tab="Profile" key="profile">
        <Profile/>
      </TabPane>
      <TabPane tab="Characters" key="characters">
        <Character />
      </TabPane>
    </Tabs>
    </div>

  );
};

export default Account;
