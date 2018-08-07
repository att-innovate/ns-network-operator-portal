import React from 'react';
import styles from './index.css'
import { Layout, Menu, Icon } from 'antd';

import { withRouter, Switch, Route } from 'react-router-dom'

import Blueprints from './Blueprints'

const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
	}
	
	onClickMenuItem = ({ item, key, keyPath }) => {
		switch (key) {
			case 'blueprints':
			case 'orchestration':
			case 'monitoring':
				this.props.history.push('/dashboard/' + key)
				break;
			default:
				console.log('broken link!')
		}
	}

  render() {
		// FIXME: Nasty hack ...
		// const defaultSelectedKeys = this

    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">
						{ 
							this.state.collapsed 
							? 'L/BR'
							: 'Logo + Brand Name'
						}
					</div>
          <Menu 
						theme="dark" mode="inline" defaultSelectedKeys={['1']}
						onClick={this.onClickMenuItem}
					>
            <Menu.Item key="blueprints">
							<Icon type="dashboard" />
							<span>Blueprints</span>
            </Menu.Item>
            <Menu.Item key="orchestration">
							<Icon type="form" />
              <span>Orchestration</span>
            </Menu.Item>
						<Menu.Item key="monitoring">
							<Icon type="shop" />
              <span>Monitoring</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ 
						margin: '24px 16px', padding: 24, minHeight: 280 
					}}>
						<Switch>
							<Route 
								path="/dashboard/blueprints" 
								component={Blueprints}
							/>
							<Route 
								path="/dashboard/orchestration" 
								component={null} 
							/>
							<Route 
								path="/dashboard/monitoring" 
								component={null} 
							/>
						</Switch>
						<br />
						<br />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Dashboard)