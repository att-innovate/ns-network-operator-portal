import React from 'react'

import Resource from './Resource'

export default class Resources extends React.Component {
	render() {
		return (
			<div style={{ padding: '30px 30px 0px 30px' }}>
				{this.props.resources.map((
					resource, index
				) => (
					<div key={index} style={{ marginTop: (index > 0) ? 20 : 0 }}>
						<Resource resource={resource} />
					</div>
				))}
			</div>	
		)
	}
}