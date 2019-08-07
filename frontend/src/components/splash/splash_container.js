import { connect } from 'react-redux';
import Splash from './splash';
import * as ItemActions from '../../actions/item_actions';
import * as StatActions from '../../actions/stat_actions';
import * as StaticDropActions from '../../actions/static_drop_actions';
import * as LeagueActions from '../../actions/league_actions';



const mdp = dispatch => {
    return {
        getItems: () => dispatch(ItemActions.requestItems()),
        getStats: () => dispatch(StatActions.requestStats()),
        getStaticDrops: () => dispatch(StaticDropActions.requestStaticDrops()),
        getLeagues: () => dispatch(LeagueActions.requestLeagues()),
    };
};



export default connect(null, mdp)(Splash);