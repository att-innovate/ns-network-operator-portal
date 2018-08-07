import React from 'react'

import { 
	Row, Col, Card, Icon, Divider, Button, Dropdown, Menu, Tabs 
} from 'antd'

import api from '../../api/blueprints'

import Resources from './Resources'
import Resource from './Resource'

const TabPane = Tabs.TabPane;
const { Meta } = Card;

const { Stub } = api

const gridStyle = {
	width: '33.33%',
	minHeight: 90
};

const Retired = () => (
	<Icon 
		style={{ color: 'rgb(226, 60, 57)' }} type="close-square" 
	/>
)

const Active = () => (
	<Icon 
		style={{ color: 'rgb(114, 192, 64)' }} type="check-square" 
	/>
)

export default class Blueprint extends React.Component {
	render() {
		
		const blueprint = Stub.find(x => x.id == this.props.match.params.id)

		if (!blueprint) {
			return <div>Sorry, but the blueprint was not found.</div>
		}

		// FIXME: need to pull actual data for any associated versions
		const menu = (
			<Menu>
				<Menu.Item>
					<Active />&nbsp;&nbsp;1.3
				</Menu.Item>
				<Menu.Item>
					<Active />&nbsp;&nbsp;1.2
				</Menu.Item>
				<Menu.Item>
					<Retired />&nbsp;&nbsp;1.1
				</Menu.Item>
			</Menu>
		);

		return (
			<div>
				<Card>
					<div style={{ marginBottom: 25, textAlign: 'right' }}>
						<Button 
							// style={{ marginTop: 25 }} 
							size={'large'} type="primary" icon="edit"
						>
							Edit
						</Button>
						&nbsp;&nbsp;
						<Button 
							// style={{ marginTop: 25 }} 
							size={'large'} type="danger" icon="close"
						>
							Retire
						</Button>
					</div>
					<Card.Grid style={gridStyle}>
						<span>Name</span>
						<br />
						<span><b>{blueprint.name}</b></span>
					</Card.Grid>
					<Card.Grid style={gridStyle}>
						<span>Version</span>
						<br />
						<Dropdown overlay={menu}>
							<a className="ant-dropdown-link" href="#">
								{
									(blueprint.retired)
									? <Retired />
									: <Active />
								}&nbsp;&nbsp;{blueprint.version} <Icon type="down" />
							</a>
						</Dropdown>
					</Card.Grid>
					<Card.Grid style={gridStyle}>
						<span>Latency</span>
						<br />
						<span><b>{blueprint.latencyLowerBoundString} - {blueprint.latencyUpperBoundString}</b></span>
					</Card.Grid>
					<Card.Grid style={gridStyle}>
						<span>Max Throughput</span>
						<br />
						<span><b>{blueprint.maxThroughputString}</b></span>
					</Card.Grid>
					<Card.Grid style={gridStyle}>
						<span>Max Bitrate</span>
						<br />
						<span><b>{blueprint.maxBitrateString}</b></span>
					</Card.Grid>
					<Card.Grid style={gridStyle}>
						<span>Gtd Bitrate</span>
						<br />
						<span><b>{blueprint.gtdBitrateString}</b></span>
					</Card.Grid>
					<div style={{ height: 185, width: '100%' }} />
					<Divider type="horizontal"  />
					{blueprint.desc}
					<Divider type="horizontal" />
					<Tabs onChange={() => null} type="card">
						<TabPane tab="Resources" key="1">
							<Row gutter={16}>
								<Col span={6}>
									<Card cover={<Resources resources={blueprint.resources.customerSite} />}>
										<Meta
											title={<div style={{ textAlign: 'center'}}>Customer Site</div>}
											description={<div style={{ textAlign: 'center'}}>Latency 0.5 - 20 ms</div>}
										/>
									</Card>
								</Col>
								<Col span={6}>
									<Card cover={<Resources resources={blueprint.resources.edgeDC} />}>
										<Meta
											title={<div style={{ textAlign: 'center'}}>Edge DC</div>}
											description={<div style={{ textAlign: 'center'}}>Latency 20 - 100 ms</div>}
										/>
									</Card>
								</Col>
								<Col span={6}>
									<Card cover={<Resources resources={blueprint.resources.regionalDC} />}>
										<Meta
											title={<div style={{ textAlign: 'center'}}>Regional DC</div>}
											description={<div style={{ textAlign: 'center'}}>Latency 100 - 500 ms</div>}
										/>
									</Card>
								</Col>
								<Col span={6}>
									<Card cover={<Resources resources={blueprint.resources.nationalDC} />}>
										<Meta
											title={<div style={{ textAlign: 'center'}}>National DC</div>}
											description={<div style={{ textAlign: 'center'}}>Latency 500 ms 1 s</div>}
										/>
									</Card>
								</Col>
							</Row>
						</TabPane>
					</Tabs>
				</Card>
			</div>
		)
	}
}