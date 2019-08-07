import { connect } from 'react-redux';
import { selectLeague } from '../../actions/league_actions';
import Modal from './modal';


const msp = state => {
    return {
        league: state.ui.league,
        leagues: state.entities.leagues,
    };
};

const mdp = dispatch => {
    return {
        selectLeague: (leagueString) => dispatch(selectLeague(leagueString))
    };
};

export default connect(msp, mdp)(Modal);