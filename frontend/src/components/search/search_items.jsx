import React from 'react';
// import { useState, useEffect } from 'react';
import './search_items.css';


// const SearchItems = (props) => {

//     const [offset, setOffset] = useState(1);
//     useEffect(() => {
//         if (Object.keys(props.itemKeys).length &&
//         Object.keys(props.itemKeys.result).length){
//             props.ApplytItemKeys(props.itemKeys, offset);
//         }
//     }, [offset])

//     const scrollingCall = () => {
//         if (window.scrollY > 1000) {
//             setOffset(offset+1);
//         }
//     }

//     // document.addEventListener()
//     // console.log(props.itemKeys);
//     // debugger
//     // if (Object.keys(props.itemKeys).length){
//     // debugger
//     // make requests here with item keys when there are keys
//     if (Object.keys(props.itemKeys).length){
//         // checks if there are results(keys)
//         if (Object.keys(props.itemKeys.result).length){

//             // add event listener
//             document.addEventListener("scroll", scrollingCall);
//             console.log(offset);
//             if(offset>10){
//                 document.removeEventListener("scroll", scrollingCall);
//             }

//             let shown = Math.min(offset * 10, props.itemKeys.result.length )
//             let max = props.itemKeys.total;
//             if (props.itemKeys.inexact){
//                 max+= " + "
//             }

//             // props.ApplytItemKeys(props.itemKeys, offset);
//             return (
//                 <div className="showingText">Showing {shown} of {props.itemKeys.result.length} from {max}</div>
//             )
//         }else {
//             return (
//                 <div className="showingText">No results found</div>
//             )
//         }
//     }else {
//         // when there are no keys currently available
//         return (
//             <div className="showingText"></div>
//         )
//     }
// }

class SearchItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            offset: 1,
        }
    }

    componentDidUpdate(prevProps){
        // debugger
        if (Object.keys(prevProps.itemKeys).length === 0){
            if(Object.keys(this.props.itemKeys.result).length) {
                this.props.ApplytItemKeys(this.props.itemKeys, this.state.offset);
                // debugger
            }
        } else if (prevProps.itemKeys.id !== this.props.itemKeys.id &&
             (Object.keys(this.props.itemKeys.result).length < (this.stateoffset - 1) * 10)){
            this.setState({ offset: 1 }, () => this.props.ApplytItemKeys(this.props.itemKeys, this.state.offset))
        } else if ((Object.keys(this.props.itemKeys.result).length < (this.stateoffset-1)*10) &&
         this.state.offset <= 10){
            this.props.ApplytItemKeys(this.props.itemKeys, this.state.offset)
        }
    }

    render(){
        let string = null;
        if (Object.keys(this.props.itemKeys).length){
            if (Object.keys(this.props.itemKeys.result).length) {
                let shown = Math.min(this.state.offset * 10, this.props.itemKeys.result.length)
                let max = this.props.itemKeys.total;
                if (this.props.itemKeys.inexact) {
                    max += " + "
                }
                string = `Showing ${ shown } of ${ this.props.itemKeys.result.length } from ${ max }`
            }else {
                string = "No results found"
            }
        }
        


        return (
            <div className="showingText">{string}</div>
        )
    }


}

export default SearchItems;