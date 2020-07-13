import React from 'react';
import { Context } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    //viene aggiunta una propriety direttamente a type
    //può essere inserita all'interno della classe o all'esterno
    //static contextType = LanguageContext;

    renderSubmit(language) {
        return language === 'english' ? "Submit" : 'Invia'
    }

    renderButton(color) {
        return (
            <button className={`ui ${color} button`}>
                <Context.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </Context.Consumer>
            </button>
        )
    }

    render() {
        //const text = this.context === 'english' ? 'Submit': 'Invia';
        return (
            <ColorContext.Consumer>
                {(color) =>
                    this.renderButton(color)
                }

            </ColorContext.Consumer>

        )
    }
}
//external mode
//Button.contextType = LanguageContext;
export default Button