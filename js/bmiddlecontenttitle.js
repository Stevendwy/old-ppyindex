import React, {
	Component
} from 'react'

export default class MiddleContentTitle extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="BmiddleContainerTitle">
				<div className="BmiddleContainerTitleLeft">VIN车架号查询</div>
				<div className="BmiddleContainerTitleRight"> 零件号查询</div>
				<div className="BmiddleContainerTitleRight"> 车型查询</div>
			</div>
		)
	}
}