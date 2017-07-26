import React from "react";
import {FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import PropTypes from "prop-types";

class FormInput extends React.Component {
	render() {
		const { label, placeholder, ...input} = this.props;
		return (
			<FormGroup>
				{ () => {
					if (label) {
						return <ControlLabel>{label}</ControlLabel>;
					}
				}}
				<FormControl type="text" placeholder={placeholder} {...input} />
			</FormGroup>
		);
	}
}

FormInput.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string
};

export default FormInput;