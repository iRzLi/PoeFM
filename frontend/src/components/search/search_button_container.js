import { connect } from 'react-redux';
import SearchButton from './search_button';
import {requestItemKeys} from '../../actions/item_key_actions';

const mapStateToProps = state => {
    return {
        searchString: state.ui.search,
        league: state.ui.league,
        items: state.entities.items,
        offset: state.ui.offset,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestItemKeys: (obj) => dispatch(requestItemKeys(obj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);