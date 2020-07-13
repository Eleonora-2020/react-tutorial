import React from 'react';
import SearchBar from './SearchBar';
import video from '../apis/video';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount = async () => {
        this.onSubmitForm('cars');

    }

    onSubmitForm = async (term) => {
        console.log(term);

        const response = await video.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        
         });

    }

    onVideoSelect = (video) => {
        console.log(video);

        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className='ui container'>
                <div className="ui grid">
                    <div className="ui row">
                        <SearchBar onSubmitForm={this.onSubmitForm} />
                    </div>

                    <div className="ui row">
                        <div className="eleven wide column">
                            {this.state.selectedVideo !== null ?
                                <VideoDetail videoSelect={this.state.selectedVideo} />
                                :
                                <p>Loading...</p>
                            }
                        </div>
                        <div className="five wide column">
                            {this.state.videos.length > 0 &&

                                <VideoList selectedVideo={this.state.selectedVideo} onVideoSelectProp={this.onVideoSelect} videos={this.state.videos} />

                            }
                        </div>
                    </div>
                </div>
            </div>


        );
    }


}

export default App