import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render() {
        // const user = this.props.users.find(e => e.id === this.props.userId);
        return (
            <div className='header'>
                {this.props.user &&
                    this.props.user.name}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.usersReducer.find(e => e.id === ownProps.userId) }
}

export default connect(mapStateToProps)(UserHeader);