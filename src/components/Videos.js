import React from 'react';
import Video from './Video';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';


class Videos extends React.Component {
    componentWillMount() {
        // Populate the state with data on mount
        this.props.displayData();
    }

    render() {
        const { data, page } = this.props;
        if(data === undefined || _.isEmpty(data)){
            return (
                <div>Ouuups <strong>No available videos for the moment !!!</strong></div>
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
