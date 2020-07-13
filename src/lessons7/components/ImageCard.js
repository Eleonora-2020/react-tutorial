import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            spans: 0
        }

        //riferimento all'elemento che sarà chiamato all'interno della classe.
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        //evento che aspetta che si carichino l'immagine per avere l'altezza all'interno del client
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans: spans });
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                {/* questo è un tag JSX
                quindi non abbiamo un modo per riferirci a questo tag direttamente
                ed in modo univoco
                 */}
                <img
                    //riferimento al Ref creato
                    //questo è un riferimento al DOM
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={description}
                />
            </div>
        )
    }
}

export default ImageCard