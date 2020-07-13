import React, { Fragment } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../store/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {

    componentDidMount() {
        console.log(this.props);
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            //Fragment is an invisible element...render anything
            <Fragment>
                <button className='ui negative button' onClick={() => this.props.deleteStream(id)}>Delete</button>
                <Link className='ui button' to='/'>Cancel</Link>
            </Fragment>
        )
    }

    renderContent() {
        console.log(this.props.stream)
        if (!this.props.stream)
            return "Are you sure you want to delete this stream?"
        else
            return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`
    }


    render() {
        return (
            <div>
                <div>StreamDelete</div>
                <Modal
                    title='Delete Stream'
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')} />
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return{stream: state.streamReducer[ownProps.match.params.id]}
}


export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);