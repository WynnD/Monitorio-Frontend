import Spinner from 'common/Spinner';
import { connect } from "react-redux";

const mapStateToProps = state => {
	return { isFetching: state.isFetching };
};

const SpinnerContainer = connect(mapStateToProps)(Spinner);

export default SpinnerContainer;