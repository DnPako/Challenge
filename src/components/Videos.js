import React from 'react';
import Video from './Video';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Videos extends React.Component {
    componentWillMount() {
        // Populate the state with data on mount
        this.props.displayData();
    }

    render() {
        const { data, page } = this.props;
        if(data === undefined){
            return (
                <div>Loading...</div>
            );
        }
        return (
            // Display each video
            <div>
                {data[page].map((video, index) =>
                    <Video key={index} video={video}/>
                )}
            </div>
        )
    }
}

function mapStateToProps({videos: {data, page}}) {
    return {data, page};
}

export default connect(mapStateToProps, actions)(Videos);
