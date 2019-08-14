import { connect } from 'react-redux';
import Item from './item';

const mapStateToProps = (state, props) => {
    // debugger
    return {
        item: props.item,
        stats: state.entities.stats,
    };
};


export default connect(mapStateToProps, null)(Item);