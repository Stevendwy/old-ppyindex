import React, {
	Component
} from 'react'

export default class MiddleContentInput extends Component {
	constructor() {
		super()
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="BmiddleContainerInput">
				<input className="BmiddleContainerInputLeft" placeholder="请输入17位车架号" />
				<div className="BmiddleContainerInputRight">查询</div>
			</div>
		)
	}
}