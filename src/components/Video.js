import React from 'react';
// Semantic UI
import { Card, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Video extends React.Component {
    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        Steve Sanders
                    </Card.Header>
                    <Card.Meta>
                        Friends of Elliot
                    </Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="meta">
                        <a>
                          <img src="./style/heart.png"></img> 102451125 Likes
                        </a> {/*Nbr of likes*/}
                        <a>
                            <img src="./style/eye.png"></img> 3565 Views
                        </a> {/*Nbr of plays*/}
                        <a>
                            <img src="./style/comment.png"></img> 489 Comments
                        </a> {/*Nbr of comments*/}
                    </div>
                </Card.Content>
            </Card>
        )
    }
}


export default Video;
