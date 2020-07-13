import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (e) => {
        console.log(e.target.value);

        this.setState({ term: e.target.value })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log(this.state.term);

        this.props.onSubmitForm(this.state.term);
    }


    render() {
        return (
            <div className="ui column">
                <div className='search-bar ui segment'>
                    <form className='ui form' onSubmit={this.onSubmitForm}>

                        <div className='field'>
                            <label>Video search</label>
                            <input type='text' value={this.state.term} onChange={(e) => this.onInputChange(e)} />
                        </div>
                    </form>

                </div>
            </div>
        );
    }

}

export default SearchBar