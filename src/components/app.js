import React from 'react';
// Semantic UI
import { Container, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// Components
import Filter from './Filter';
import Videos from './Videos';

class App extends React.Component {
  render() {
    return (
      <Container fluid >
          <Grid columns='sixteen'>
               <Grid.Row>
                   <Grid.Column width={12}>
                       <Videos></Videos>
                   </Grid.Column>
                   <Grid.Column width={3}>
                       <Filter></Filter>
                   </Grid.Column>
               </Grid.Row>
          </Grid>
      </Container>
    );
  }
}

export default App;
