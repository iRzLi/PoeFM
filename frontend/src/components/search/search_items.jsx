import React from 'react';
// import { useState, useEffect } from 'react';
import './search_items.css';
import ItemListingContainer from '../item/item_listing_container';

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
        this.scrollingCall = this.scrollingCall.bind(this);
    }

    scrollingCall = () => {
        // console.log(window.scrollY + window.screenTop , (this.state.offset * 10 - 1) * 200)
        let extra = 0;
        if (this.state.offset<=2){
            extra = (200 / this.state.offset);
        }
        if (window.scrollY + window.screenTop + extra > (this.state.offset*10-1)*200) {
            // console.log(this.state.offset)
            this.setState({ offset: this.state.offset + 1 }, () => console.log(this.state.offset))
        }
    }

    componentDidUpdate(prevProps){
        // debugger
        if(prevProps.offset===1 && this.props.offset===0){
            this.setState({ offset: 1 });
        }

        if (Object.keys(prevProps.itemKeys).length === 0){
            if(Object.keys(this.props.itemKeys.result).length) {
                this.props.ApplytItemKeys(this.props.itemKeys, this.state.offset);
                // debugger
                document.addEventListener("scroll", this.scrollingCall);
            }
        } else if (prevProps.itemKeys.id !== this.props.itemKeys.id &&
             (Object.keys(this.props.itemKeys.result).length > (this.state.offset - 1) * 10)){
            this.setState({ offset: 1 }, () => this.props.ApplytItemKeys(this.props.itemKeys, this.state.offset))
            // debugger
            // add scroll event listener
            document.addEventListener("scroll", this.scrollingCall);

        } else if (prevProps.league === this.props.league && 
            (Object.keys(this.props.itemKeys.result).length) > (this.state.offset-1)*10 &&
         this.state.offset <= 10){
            this.props.ApplytItemKeys(this.props.itemKeys, this.state.offset)

            // debugger
            if(Object.keys(this.props.itemKeys.result).length <= this.state.offset * 10){
                //remove scroll event listener
                // debugger
                document.removeEventListener("scroll", this.scrollingCall)
            }
        } else if (prevProps.league !== this.props.league && 
            prevProps.itemKeys.id === this.props.itemKeys.id ){
                // debugger
                // make it research instead
                // inside another component
                // this is what happens if youve searched and then change league
            document.removeEventListener("scroll", this.scrollingCall);
        }

    }

    render(){
        let string = null;
        let itemListingContainer = null;
        if (Object.keys(this.props.itemKeys).length){
            if (Object.keys(this.props.itemKeys.result).length) {
                let shown = Math.min(this.state.offset * 10, this.props.itemKeys.result.length)
                let max = this.props.itemKeys.total;
                if (this.props.itemKeys.inexact) {
                    max += " + "
                }
                string = `Showing ${ shown } of ${ this.props.itemKeys.result.length } from ${ max }`
                itemListingContainer = <ItemListingContainer />
            }else {
                string = "No results found"
            }
        }
        


        return (
            <React.Fragment>
                <div className="showingText">{string}</div>
                {itemListingContainer}
            </React.Fragment>
        )
    }


}

export default SearchItems;