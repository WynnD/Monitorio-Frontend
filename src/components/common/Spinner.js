import React from "react";
import PropTypes from "prop-types";

const Spinner = ({isFetching}) => {
	if (isFetching) {
		return (
			<div className="loading-spinner"></div>
		);
	} else {
		return (
			<div className="loading-spinner-disabled"></div>
		);
	}
};

Spinner.propTypes = {
	isFetching: PropTypes.bool.isRequired
};

export default Spinner;