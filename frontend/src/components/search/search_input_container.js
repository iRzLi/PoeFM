import { connect } from 'react-redux';
import { updateSearchString } from '../../actions/search_actions';
import SearchInput from './search_input';

const mapStateToProps = state => {
    return {
        searchString: state.ui.search,
        league: state.ui.league,
        items: state.entities.items,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateSearchString: (searchString) => dispatch(updateSearchString(searchString))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);