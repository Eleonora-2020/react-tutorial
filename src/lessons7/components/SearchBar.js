import React from 'react';

class SearchBar extends React.Component {

    /**
     * primo modo per risolvere errore di state in formSubmit
     */
    // constructor(){
    //     super();
    //     this.formSubmit = this.formSubmit.bind(this);
    // }

    state= {term : ''};

    formSubmit(e){
        //Serve per sovrascrivere il comportamento di default
        //crea una nuova versione della funzione e da i corretti valori
        e.preventDefault();

        /**
         * per risolvere questo errroe è possibile:
         * 1) fare un binding nel constructor di this
         * 2) usare le arrow function che si riferiscono all'oggetto formSubmit = (e) => {
         * 3) usare arrow function nel render onSubmit={(e) => this.formSubmit(e)}
         */
        //console.log(this.state.term);
        this.props.formSubmit(this.state.term);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={(e) => this.formSubmit(e)}>
                    <div className='field'>
                        <label>Image Search</label>
                        {/* 
                            Se si mettono le parentesi alla function viene chiamata solo al primo render
                            è una callback evento vero e proprio
                            Onchange viene chiamata ogni volta che un testo viene cambiato
                        */}
                        <input 
                        type='text' 
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;