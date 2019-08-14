import { connect } from 'react-redux';
import { ApplytItemKeys } from '../../actions/item_key_actions';
// import { updateOffsetByOne } from '../../actions/offset_actions';
import searchItems from './search_items';

const mapStateToProps = state => {
    return {
        // offset: state.ui.offset,
        itemKeys: state.entities.item_keys,
        league: state.ui.league,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ApplytItemKeys: (itemKeysObj, offset) => dispatch(ApplytItemKeys(itemKeysObj, offset)),
        // updateOffsetByOne: () => dispatch(updateOffsetByOne()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(searchItems);