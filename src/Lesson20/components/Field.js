import React from 'react';
import {Context} from '../contexts/LanguageContext';

class Field extends React.Component {

    static contextType = Context;
    //quando si usa il consumer non cìè bisogno di dichiarare si usa quando bisogna accedere a 
    //più informazioni di contesto
    //contextType quando si vuole accedere ad un'unica informazione

    renderLabel(value){
        return value === 'english' ? 'Name' : 'Nome';
    }

    render() {
        return (
            <div className='ui field'>
                <label>{this.renderLabel(this.context.language)}
                </label>
                <input />
            </div>
        )
    }
}

export default Field