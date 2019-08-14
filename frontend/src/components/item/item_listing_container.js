import { connect } from 'react-redux';
import ItemListing from './item_listing';

const mapStateToProps = state => {
    return {
        item_listings: state.entities.item_listings,
        // stats: state.entities.stats,
    };
};


export default connect(mapStateToProps, null)(ItemListing);