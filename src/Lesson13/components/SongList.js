import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

    RenderList() {
        return this.props.songs.map(e => {
            return (
                <div className='item' key={e.title}>
                    <div className='right floated content'>
                        <button className='ui button primary' onClick={() => this.props.selectSong(e)}>
                            Select
                            </button>
                    </div>
                    <div className='content'>
                        {e.title}
                    </div>
                </div>
            );
        })
    }

    render() {
        return (

            <div className='ui divided list'>
                {this.RenderList()}
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs,
        selectSong: state.selectSong,
    }
}

export default connect(mapStateToProps, { selectSong })(SongList);