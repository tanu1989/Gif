import React from 'react';
import {connect} from 'react-redux';
import {FormGroup, FormControl, Button, Col, Image} from 'react-bootstrap';
import { fetchGif } from './actions';



const GifGrid = ({gifs}) => {
    if(gifs.loading && gifs.prevSearchTerm !== gifs.searchTerm){
        return <div>Loading...</div>
    }else if(!gifs.loading && gifs.error){
        return <div>Error in request</div>
    }else if(!gifs.loading && gifs.gifs.data.length !== 0){
        const {data} = gifs.gifs;
        return ( <div className="images__grid">
            {data.map((img) => {
                const embed = img.images.original.url;
                return <Image src={embed} responsive/>
            })}
        </div>)
    }else {
        return null;
    }

}

class GifSearch extends React.Component {

    state = {
        searchTerm :'',
    }

    handleOnChange = (e) => {
        const val = e.currentTarget.value;
        this.setState(() => ({
            searchTerm : val,
        }));
        this.props.fetchGif(val);
    }

    handleSearch = () => {
        const {searchTerm} = this.state;
        this.props.fetchGif(searchTerm);

    }

    render(){
        const {gifs} = this.props;

        return (
            <div id="home">
                <div className="search-container">
                <div className="header">Search GIFs</div>
                <FormGroup>
                    <Col sm={10}>
                        <FormControl
                            autoFocus
                            type="text"
                            bsSize="large"
                            onChange={this.handleOnChange}
                            placeholder="Search GIF...."
                        />
                    </Col>
                    <Col sm={2}>
                        <Button bsSize="large"
                                block
                                className="search-Button"
                                onClick={this.handleSearch}
                        >
                            Search
                        </Button>
                    </Col>
                </FormGroup>
                </div>

                {gifs.gifs && <GifGrid gifs={gifs}/>}
            </div>
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
        fetchGif: (searchTerm) => dispatch(fetchGif(searchTerm))
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(GifSearch);
