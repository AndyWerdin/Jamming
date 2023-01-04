import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

const TrackList = (props) => {
    return (
        <div className="TrackList">
            {/*<!-- You will add a map method that renders a set of Track components  -->'*/}
            {props.tracks.map((track) => {return <Track key={track.id} track={track}/>})}
        </div>
    );
};

export default TrackList;