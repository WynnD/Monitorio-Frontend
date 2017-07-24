import React from "react";
import {FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import PropTypes from "prop-types";

class FormInput extends React.Component {
	render() {
		const { label, input, ...props } = this.props;
		return (
			<FormGroup>
				<ControlLabel>{label}</ControlLabel>
				<FormControl type="text" {...input} />
			</FormGroup>
		);
	}
}

FormInput.propTypes = {
	label: PropTypes.string
};

export default FormInput;