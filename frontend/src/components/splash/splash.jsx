import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCog } from '@fortawesome/free-solid-svg-icons'
import Buffer from '../buffer/buffer';

class Splash extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: null,
            stats: null,
            static_drops: null,
            leagues: null,
        };
    }

    componentDidMount(){
        this.props.getItems().then(res => {
            this.setState({items: true})
        });
        this.props.getStats().then(res => {
            this.setState({ stats: true })
        });
        this.props.getStaticDrops().then(res => {
            this.setState({ static_drops: true })
        });
        this.props.getLeagues().then(res => {
            this.setState({ leagues: true })
        });
    }

    render(){
        let {items, stats, static_drops, leagues} = this.state;
        if (items === null || stats === null || static_drops === null || leagues === null){
            return(
                <div className="modal-background">
                    <div className="modal-child">
                        <Buffer color={"#ffffff"} />
                    </div>
                </div>
            )
        }else {
            return (
                <>
                    <div>Hello from Splash</div>
                </>
            )
        }
    }
}

export default Splash;