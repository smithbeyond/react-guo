import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import $ from "jquery";
import { Link } from 'react-router'
const { Header, Content } = Layout;


class App extends Component {
  constructor(props) {
      super(props)

      this.getData = this.getData.bind(this)
      this.state = {
          show: true,
      }
  }

  async getData() {
      // $.ajax({
      //     type: "GET",
      //     url: '',
      //     data: {},
      //     success: function(retData, status) {
      //
      //     }.bind(this),
      // })
      console.log('getData')
  }

  componentWillMount() {
        this.getData()
  }

  render() {

    const content = (
          <div>content</div>
      )
    return (
  <Layout>
    <div style={{ color: 'white', fontSize: '30px', position: 'absolute', top: '5px', right : '120px'}}> { this.state.username } </div>

    <Header className="header" style={{ paddingLeft: '20px', height: '55px' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['ms']}
        style={{ lineHeight: '55px', fontSize: '16px' }}
      >
        <Menu.Item key="ms">
            menu1...
        </Menu.Item>
        <Menu.Item key="lang">
          menu2...
        </Menu.Item>
      </Menu>
</Header>
      <Content style={{ padding: '0 0px' }}>
          {this.props.children}
      </Content>
  </Layout>
    )
  }
}

export default App;