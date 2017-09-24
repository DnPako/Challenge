import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
// Semantic UI
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class NextButton extends React.Component {
    // Display next page of videos
    handleClick(){
        const { data, page } = this.props;
        this.props.nextData(data, page);
    }

    render() {
        const { data, page } = this.props;
        const pages = _.size(data);
        // Hide next button if no results are available
        if(pages === 1 || pages === page)
            return (
                <div></div>
            )
        return (
            <Button onClick={() => this.handleClick()} primary>Next</Button>
        )
    }
}

function mapStateToProps({videos: {data, page}}) {
    return {data, page};
}

export default connect(mapStateToProps, actions)(NextButton);
