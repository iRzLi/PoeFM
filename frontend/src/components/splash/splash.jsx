import React from 'react';
import Buffer from '../buffer/buffer';
import Navbar from '../navbar/navbar';
import './splash.css';

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
            let temp = Array(100).fill().map((_, i) => {
                return <li key={i}> Hello{i}</li>
            });
            return (
                <>
                            <Navbar />
                            <ul>
                                {temp}
                            </ul>
                    
                </>
            )
        }
    }
}

export default Splash;