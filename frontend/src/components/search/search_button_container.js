import { connect } from 'react-redux';
import SearchButton from './search_button';

const mapStateToProps = state => {
    return {
        searchString: state.ui.search,
        league: state.ui.league,
        items: state.entities.items,
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         updateSearchString: (searchString) => dispatch(updateSearchString(searchString))
//     };
// };

export default connect(mapStateToProps, null)(SearchButton);