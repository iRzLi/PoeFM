import { connect } from 'react-redux';
// import { updateSearchString } from '../../actions/search_actions';
import searchItems from './search_items';

const mapStateToProps = state => {
    return {
        offset: state.ui.offset,
        itemKeys: state.entities.item_keys,
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         updateSearchString: (searchItemsObj) => dispatch(updateSearchString(searchString))
//     };
// };

export default connect(mapStateToProps, null)(searchItems);