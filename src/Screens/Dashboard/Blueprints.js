import React from 'react'

import { Drawer, Table, Icon, Divider } from 'antd';

import { Link, Switch, Route } from 'react-router-dom'

import api from '../../api/blueprints'

import Blueprint from './Blueprint'

const { Column, ColumnGroup } = Table;

const { Stub } = api

export default class Blueprints extends React.Component {
	state = { visible: true };

	showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
	};
	
	render() {
		return (
			<Switch>
				<Route exact path='/dashboard/blueprints'>
					<Table 
						dataSource={Stub}
						bordered
						title={() => <b style={{ fontSize: '1.5em' }}>Blueprints</b>}
						footer={() => <span>Click <a href="javascript:;">Info</a> on a service orchestration blueprint to view more information, including resource diagrams and a description of potential use cases.</span>}
					>
						{/* <ColumnGroup title="Name">
							<Column
								title="First Name"
								dataIndex="firstName"
								key="firstName"
							/>
							<Column
								title="Last Name"
								dataIndex="lastName"
								key="lastName"
							/>
						</ColumnGroup> */}
						<Column
							title="Name"
							dataIndex="name"
							key="name"
						/>
						<Column
							title="Version"
							dataIndex="version"
							key="version"
						/>
						<ColumnGroup title="Latency">
							<Column
								title="Lower Bound"
								dataIndex="latencyLowerBoundString"
								key="latencyLowerBoundString"
							/>
							<Column
								title="Upper Bound"
								dataIndex="latencyUpperBoundString"
								key="latencyUpperBoundString"
							/>
						</ColumnGroup>
						<Column
							title="Max Throughput"
							dataIndex="maxThroughputString"
							key="maxThroughputString"
						/>
						<Column
							title="Max Bitrate"
							dataIndex="maxBitrateString"
							key="maxBitrateString"
						/>
						<Column
							title="Gtd Bitrate"
							dataIndex="gtdBitrateString"
							key="gtdBitrateString"
						/>
						<Column
							title="Actions"
							key="actions"
							render={(text, record) => (
								<span>
									<Link to={`/dashboard/blueprints/${record.id}`}>Info</Link>
									<Divider type="vertical" />
									<a href="javascript:;">Retire</a>
									<Divider type="vertical" />
									<a href="javascript:;">Edit</a>
									{/* <a href="javascript:;" className="ant-dropdown-link">
										More actions <Icon type="down" />
									</a> */}
								</span>
							)}
						/>
					</Table>
				</Route>
				<Route path='/dashboard/blueprints/:id' component={Blueprint} />
			</Switch>
		)
	}
}