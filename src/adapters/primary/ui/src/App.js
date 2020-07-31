import React, { useState } from 'react';
import { countries } from 'countries-list';
import { Form, Input, Select, Checkbox, Steps, Button, message, Layout, Menu, Breadcrumb } from 'antd';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

import './App.css';

const { Header, Content, Footer } = Layout;

const { Step } = Steps;

function App() {
  // const [value, setValue] = useState();
  const [current, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Phone Number',
      content: <Form
          className="phone-number-form" 
          name="basic"
          onFinish={() => setCurrentStep(current + 1)}
        >
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true, message: 'Please input your country!' }]}
          >
            <Select
              showSearch
              placeholder="Select a country"
              optionFilterProp="children"
              // onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              // onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {Object.keys(countries).map((key) => <Select.Option key={key} value={key}>{countries[key].name}</Select.Option>)}
            </Select>
            {/* <Input /> */}
          </Form.Item>
  
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>,
    },
    {
      title: 'Verify Code',
      content: <Form
          className="phone-number-form" 
          name="basic"
          onFinish={() => setCurrentStep(current + 1)}
        >
          <Form.Item
            label="Verification code"
            name="code"
            rules={[{ required: true, message: 'Please input your verification code!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>,
    },
    {
      title: 'Info',
      content: <Form
          className="phone-number-form" 
          name="basic"
          onFinish={() => console.log('ok')}
        >
          <Form.Item
            label="First name"
            name="firstName"
            rules={[{ required: true, message: 'Please input your First name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="lastName"
            rules={[{ required: true, message: 'Please input your Last name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Nickname"
            name="nickname"
            rules={[{ required: true, message: 'Please input your Nickname!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>,
    },
  ];
  

  return (
    <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['login']}>
              <Menu.Item key="login">Signup</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Signup</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <Steps current={current}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <div className="steps-content">{steps[current].content}</div>
              <div className="steps-action">
              </div>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>footer TBD</Footer> */}
        </Layout>

      {/* <header className="App-header">
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
        />
      </header> */}
    </div>
  );
}

export default App;
