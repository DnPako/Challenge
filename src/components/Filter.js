import React from 'react';
import NextButton from './NextButton';
import { connect } from 'react-redux';
import * as actions from '../actions';
// Semantic UI
import { Card, Form, Input, Checkbox, Select } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Filter extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            checked: false,
            results: 10
        };
    }

    handleChange(e, value, name){
        // CASE: changing Checkbox
        if(value === undefined){
            const classes = [...e.target.parentNode.classList];
            const checked = classes.findIndex(classe => classe === 'checked');
            if(checked === -1){
                this.setState({ checked: true },  () => {
                    // Filter data
                    this.props.filterData({...this.state});
                });
            }
            else{
                this.setState({ checked: false }, () => {
                    // Filter data
                    this.props.filterData({...this.state});
                });
            }
            return;
        }
        // CASE: Simple search or selecting results from dropdown
        this.setState({ [name]: value }, () => {
            // Filter data
            this.props.filterData({...this.state});
        });
    }

    render() {
        const options = [
            { key: 1, text: '10', value: 10 },
            { key: 2, text: '25', value: 25 },
            { key: 3, text: '50', value: 50 },
        ];
        return (
            <Card fluid>
                <Card.Content>
                    <Form>
                        <Form.Field>
                            <Form.Input fluid icon='search' name='search' placeholder='Search...' onChange={(e, {value, name}) => this.handleChange(e, value, name)}/>
                        </Form.Field>
                        <Form.Field>
                            <Form.Checkbox toggle onChange={(e) => this.handleChange(e)}/>
                        </Form.Field>
                        <Form.Field>
                            <Form.Select fluid text='Results' name='results' options={options} simple item onChange={(e, {value, name}) => this.handleChange(e, value, name)}/>
                        </Form.Field>
                        <NextButton/>
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}


export default connect(null, actions)(Filter);
