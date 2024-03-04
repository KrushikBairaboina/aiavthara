
import React from 'react';
import { Tabs } from 'antd';
import Terms from '../book/terms';
import Guide from '../book/cguide';
const { TabPane } = Tabs;

const AvataraBook = () => {
  return (
    
    <div style={{ padding: '20px' }}>
    <Tabs defaultActiveKey="profile">
      <TabPane tab="Character Guide" key="Character Guide">
      <Guide/>
      </TabPane>
      <TabPane tab="Terms and Conditions" key="Terms and Conditions">
        <Terms/>
      </TabPane>
    </Tabs>
    </div>

  );
};

export default AvataraBook;
