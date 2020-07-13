import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../store/action'

class GoogleAuth extends React.Component {

    //non va bene mi serve qualcosa di centralizzato che mi dice se l'utente è loggato
    //meglio in redux store e non nello state della pagina
    //così altri componenet potranno avere facilmente accesso alla proprietà
    //state = {
    //null perché non sappiamo se l'utente è loggato oppure no
    //  isSignedIn: null
    //}

    componentDidMount() {
        //variable in window scope
        //callback che viene chiamata solo quando load ha successo ovvero viene creato client:auth2
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '726900637793-cneihqq3r7d5ct13hrivat687fsfqgjd.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    //listen if user get authentication and change the state
    onAuthChange = (isSignedIn) => {
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        if (isSignedIn)
            this.props.signIn(this.auth.currentUser.get().getId())
        else
            this.props.signOut(this.auth.currentUser.get().getId())
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <div>
                    <button className='ui red google button'>
                        <i className='google icon' />
                        Sign In with Google
                    </button>
                </div>);
        } else if (this.props.isSignedIn) {
            return (
                <div>
                    <button onClick={this.onSignOutClick} className='ui red google button'>
                        <i className='google icon' />
                        Sign Out
                    </button>
                </div>);
        } else {
            return (<div>
                <button onClick={this.onSignInClick} className='ui red google button'>
                    <i className='google icon' />
                    Sign In with Google
                </button>
            </div>);
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = (state) => ({
    isSignedIn: state.authReducer.isSignedIn
})

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);