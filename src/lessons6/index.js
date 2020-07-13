import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from '../serviceWorker';
import SeasonDisplay from './SeasonDisplay';
import './seasonDisplay.css';
import Spinner from './Spinner';

class App extends React.Component {
    //no required good location for initialialize state
    //si passano le props come nelle functional compoents
    constructor(props) {
        //super perché questa classe è una estensione di React.Component
        //super si riferisce alle props del parent
        super(props);

        //inizializzazione dello stato
        //questo è l'unico momento in cui è possibile fare una inizializzazione diretta
        this.state = { lat: null, errorMessage: '' };
    }

    /**
     * altro modo per inizializzare lo stato
     * possibile eliminare il constructor, super and this.state
     * */
    //state = { lat: null, errorMessage: '' };

    //chiamato per primo
    componentDidMount() {
        console.log('My component was render on the screen');
        window.navigator.geolocation.getCurrentPosition(
            //callback success
            (position) => {
                console.log(position);
                //errorMessage property non viene modificata in alcun modo da questa chiamata
                this.setState({ lat: position.coords.latitude });
            },
            //callback error
            (err) => {
                console.log(err);
                this.setState({ errorMessage: err.message });
            }
        );
    }

    //chiamato ad ogni update del render. Dopo essere stato chiamato viene chiamato di nuovo render method
    componentDidUpdate() {
        console.log('My component was just update - it rerender');
    }

    //required for REACT component or container
    render() {
        //la posizione di questa funzione è sbagliata, perché viene richiamata ad ogni render
        // window.navigator.geolocation.getCurrentPosition(
        //     //callback success
        //     (position) => this.setState({lat: position.coords.latitude}),
        //     //callback error
        //     (err) => console.log(err)
        // );

        //latitude say what is my emisphere

        return (
            <div className='border red'>
                {this.state.errorMessage === '' && this.state.lat === null ?
                    // insert spinner
                    <Spinner textSpinner='Please accept location request' />
                    :
                    <div>
                        {this.state.errorMessage === '' ?
                            <SeasonDisplay lat={this.state.lat} />
                            :
                            <p>Error: {this.state.errorMessage}</p>
                        }
                    </div>
                }
            </div>);
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
