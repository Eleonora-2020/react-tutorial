import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {

    state = { images: [] };

    formSubmit = async (term) => {
        //Serve per sovrascrivere il comportamento di default
        //crea una nuova versione della funzione e da i corretti valori
        // e.preventDefault();

        /**
         * per risolvere questo errroe è possibile:
         * 1) fare un binding nel constructor di this
         * 2) usare le arrow function che si riferiscono all'oggetto formSubmit = (e) => {
         * 3) usare arrow function nel render onSubmit={(e) => this.formSubmit(e)}
         */

        //async request
        //axios return a Promise
        const data = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query: term }
            //callback invoke when data arrived
        })
        console.log(data.data.results);

        this.setState({ images: data.data.results });
        //    .then((data) => {
        //        console.log(data.data.results)
        //    })
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '2rem' }}>
                <div className='ui row'>
                    <div className='ui col'>
                        <SearchBar
                            formSubmit={this.formSubmit} />
                    </div>
                </div>

                <ImageList images={this.state.images} />
            </div>
        )
    }

}

export default App;