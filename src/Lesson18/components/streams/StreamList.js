import React from 'react';
import { connect } from 'react-redux'
import { fetchStreams } from '../../store/action'
import { Link } from 'react-router-dom';

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className='ui button negative'>
                        Delete
                    </Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map(e => {
            return (
                <div className='item' key={e.id}>
                    {this.renderAdmin(e)}
                    <i className='large middle aligned icon camera'></i>
                    <div className='content'>
                        <Link to={`/streams/${e.id}`}>
                            {e.title}
                        </Link>
                        <div className='description'>
                            {e.description}
                        </div>
                    </div>

                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn !== null) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to='/streams/new' className='ui button primary'>
                        Create Stream
                    </Link>
                </div>

            );
        }
    }

    render() {
        return (
            <div>
                <h2>StreamList</h2>
                <div className='ui celled list'>
                    {this.renderList()}
                </div>

                {this.renderCreate()}

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streamReducer),
        currentUserId: state.authReducer.userId,
        isSignedIn: state.authReducer.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);