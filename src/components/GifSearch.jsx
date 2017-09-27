import React from 'react';
import {connect} from 'react-redux';
import { fetchGif } from './actions';

class GifSearch extends React.Component {

    render(){

        return (
            <div>Gif search page here to stay</div>
        )
    }

}

export const mapStateToProps = (state) => {
    return {
        gifs: state.gifs
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchgifs: (searchTerm) => dispatch(fetchGif(searchTerm))
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(GifSearch);
