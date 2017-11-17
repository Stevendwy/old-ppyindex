import React, {
	Component
} from 'react'
import MiddleContentTitle from './bmiddlecontenttitle'
import MiddleContentInput from './bmiddlecontentinput'

export default class MiddleContent extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="BmiddleContainer">
				<MiddleContentTitle />
				<MiddleContentInput />
			</div>
		)
	}
}