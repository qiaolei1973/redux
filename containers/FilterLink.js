import { connect } from "react-redux";
import Link from "../component/Link";
import {setVisibility} from "../actions";

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibityFilter
    }
}

const mapDIspatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibility(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDIspatchToProps,
)(Link)