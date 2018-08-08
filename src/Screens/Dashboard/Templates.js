import React from 'react'

import { Collapse, Card, Icon } from 'antd';

import { Route, Link, Switch, Router } from 'react-router-dom'

// TODO: replace with Redux connector ...
import BlueprintsAPI from '../../api/blueprints'
import TemplatesAPI from '../../api/templates'

import Template from './Template'

// FIXME: you'll want to efficiently bucket templates by blueprint type, so we don't have
// to run nested .map operations ...
// Either do this at the API level, or the Redux level!

const Panel = Collapse.Panel;
const { Meta } = Card;

const { Stub: blueprintsStub } = BlueprintsAPI
const { Stub: templatesStub } = TemplatesAPI

export default class Templates extends React.Component {
	render() {
		const defaultActiveKeys = blueprintsStub.map((x) => x.id.toString())

		return (
			<Switch>
				<Route exact path='/dashboard/templates'>
				<Collapse defaultActiveKey={defaultActiveKeys}>
					{blueprintsStub.map(x => (
						<Panel header={x.name} key={x.id}>
							{templatesStub.filter(y => (
								y.blueprintId === x.id
							)).map(z => (
								<Card
									style={{ width: 300, marginTop: 10, marginBottom: 10 }}
									cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
									/* <Icon type="setting" /> */
									actions={[<Link to={`/dashboard/templates/${z.id}`}><Icon type="arrow-right" /></Link>, <Icon type="ellipsis" />]}
								>
									<Meta
										title={z.name}
										description={
											<div>
												<div>
													Blueprint: <Link to={`/dashboard/blueprints/${x.id}`}>{x.name} v{x.version}</Link>
												</div>
												<div style={{ marginTop: 10 }}>
													{z.desc}
												</div>
											</div>
										}
									/>
								</Card>
							))}
						</Panel>
					))}
				</Collapse>
				</Route>
				<Route path='/dashboard/templates/:id' component={Template} />
			</Switch>
		)
	}
}