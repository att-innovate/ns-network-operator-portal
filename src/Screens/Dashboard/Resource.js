import React from 'react'

import { Icon } from 'antd'

const icons = {
	vRAN: <Icon type="api" />,
	vEPG: <Icon type="api" />,
	vAPP: <Icon type="api" />,
	vHSS: <Icon type="api" />,
	vMME: <Icon type="api" />
}

class Resource extends React.Component {
	icon = (key) => icons[key]

	render() {
		return (
			<div 
				style={{
					padding: 5,
					borderTop: '4px solid black',
					borderRight: '1px solid black' ,
					borderBottom: '1px solid black',
					borderLeft: '1px solid black',
					textAlign: 'center' 
				}}
			>
				{this.icon(this.props.resource)}
				<br />
				{this.props.resource}
			</div>
		)
	}
}

export default Resource