import React,{useState} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {


    const [videos, setVideos] = useState([]);
    const [SelectedVideo, setSelectedVideo] = useState(null);

    const onSearchSubmit = async (term) => {
        // console.log(term);
        // setSelectedVideo(null);
        const response = await youtube.get('/search',{
            params: {
                q : term
            }
        })
        // console.log(response);
        setSelectedVideo(response.data.items[0]);
        setVideos(response.data.items);
    }

    const onVideoSelect = (video) => {
        console.log(video);
        setSelectedVideo(video);
        document.documentElement.scrollTop = 0;
    }

    return (
    <div className="ui container">
        <SearchBar search={onSearchSubmit}/>
        <div className="ui grid">
            <div className="ui row">
                <div className="ten wide column">

                <VideoDetail video={SelectedVideo} />
                </div>
                <div className="six wide column horizontally padded">

                <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                </div>
                {/* I have {videos.length} videos */}

            </div>

        </div>
    </div>)
}

export default App;