import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import './league.css';

class League extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dropdown: false,
        }
        this.timer = null;
        this.alterDropdown = this.alterDropdown.bind(this);
        // this.mouseLeaveTimer = this.mouseLeaveTimer.bind(this);
        // this.mouseEnterTime = this.mouseEnterTime.bind(this);
        this.mouseLeaveEvent = this.mouseLeaveEvent.bind(this);
        this.changeLeague = this.changeLeague.bind(this);
    }

    alterDropdown(e){
        e.preventDefault();
        if(e.type==="click") {
            this.setState({dropdown: !this.state.dropdown})
        }
    }

    // mouseLeaveTimer(e){
    //     e.preventDefault();
    //     this.timer = setTimeout(()=>{
    //         this.setState({ dropdown: false })
    //     },1000)
    // }

    // mouseEnterTime(e){
    //     e.preventDefault();
    //     clearTimeout(this.timer);
    // }

    mouseLeaveEvent(e){
        e.preventDefault();
        if(this.state.dropdown===true){
            this.setState({ dropdown:false })
        }
    }

    changeLeague(leagueName){
        this.props.selectLeague(leagueName);
    }


    render(){
        let caret = <FontAwesomeIcon icon={faAngleDown} />
        let dropDownBox = null;

        let leagueList = Object.keys(this.props.leagues).map(element => {
            if (element.includes("SSF")===false){
                return <li className="leagueLi" key={element} onClick={()=>this.changeLeague(element)}>{element}</li>;
            }else {
                return null
            }
        });

        if (this.state.dropdown) {
            caret = <FontAwesomeIcon icon={faAngleUp} />

            dropDownBox = (
                <div className="dropDown">
                    <ul>
                        {leagueList}
                    </ul>
                </div>)
        }

        return (
            <div className="league" onClick={this.alterDropdown} onMouseLeave={this.mouseLeaveEvent}>
                <div className="leagueName">{this.props.league} </div>
                <div className="caretDown" >{caret}</div>
                {dropDownBox}
            </div>
        )
    }
}

export default League;