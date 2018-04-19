import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./SearchForm.css";

class SearchForm extends Component {
	state = {
		topic: "",
		startYear: "",
		endYear: ""
	};

	handleInputChange = input => {
		const {name, value} = input.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<form className="search-form">
				<div className="form-group">
					<label>Topic:</label>
					<input 
						type="text"
						className="form-control"
						value={this.state.topic}
						name="topic"
						onChange={this.handleInputChange}
						placeholder="Topic"
					/>
				</div>
				<div className="form-group">
					<label>Start Year:</label>
					<input
						type="text"
						className="form-control"
						value={this.state.startYear}
						name="startYear"
						onChange={this.handleInputChange}
						placeholder="Start Year" 
					/>
				</div>
				<div className="form-group">
					<label>End Year:</label>
					<input
						type="text"
						className="form-control"
						value={this.state.endYear}
						name="endYear"
						onChange={this.handleInputChange}
						placeholder="End Year" 
					/>
				</div>
				 <Link to={
				 	`/news/${this.state.topic}+${this.state.startYear}+${this.state.endYear}`
				 	}>
				 	Submit
				 </Link>
			</form>
		)
	}
}

export default SearchForm