import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../store/action';
import StreamForm from './StreamForm';

class StreamCreator extends React.Component {

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.createStream(formValues);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Create a stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
            //handleSubmit ha bisogno di una funzione in cui riceve e fa il submit delle informazioni
            
        );
    }

}

export default connect(null, { createStream })(StreamCreator);