import React from 'react';
// Semantic UI
import { Card, Button, Image, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Video extends React.Component {
    // Hide or show bar for additional description
    hideBar(){
        const bar = document.querySelector(`#bar${this.props.video.uri.split("/")[2]}`);
        bar.classList.add('hide-bar');
    }
    displayBar(){
        const bar = document.querySelector(`#bar${this.props.video.uri.split("/")[2]}`);
        setTimeout(function() {
            bar.classList.remove('hide-bar');
        }, 500);
    }

    render() {
        const { video } = this.props;
        const videoUri = `https://vimeo.com/${video.uri}`;
        const barId = `bar${video.uri.split("/")[2]}`;
        return (
            <Card fluid>
                <span id={barId} className="display-bar"></span>
                <Card.Content>
                    <Card.Header className='profile'>
                            <div className="space">
                                <Image src={video.user.pictures !== null ? video.user.pictures.sizes[0].link : ''} size='mini' shape='circular' />
                            </div>
                            <div>
                                <Header as='h4'>{video.user.name}</Header>
                                <Card.Meta>
                                    {video.name}
                                </Card.Meta>
                            </div>
                    </Card.Header>{/*User*/}

                    <Card.Description className="details" onMouseOver={() => this.hideBar()} onMouseLeave={() => this.displayBar()}>
                        <div>
                            {video.description!==null ? video.description : 'No description available'}
                        </div>
                    </Card.Description>{/*Description*/}

                    <a href={videoUri}>
                        <Image fluid src={video.pictures.sizes[0].link}/>
                    </a>{/*Video*/}
                </Card.Content>

                <Card.Content extra>
                    <div className="meta">
                        <a>
                          <img src="./style/heart.png"></img> {video.metadata.connections.likes.total} Likes
                        </a> {/*Nbr of likes*/}
                        <a>
                            <img src="./style/eye.png"></img> {video.stats.plays} Views
                        </a> {/*Nbr of plays*/}
                        <a>
                            <img src="./style/comment.png"></img> {video.metadata.connections.comments.total} Comments
                        </a> {/*Nbr of comments*/}
                    </div>
                </Card.Content>
            </Card>
        )
    }
}


export default Video;
