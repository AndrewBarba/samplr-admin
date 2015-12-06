import React, { Component, PropTypes } from 'react';
import * as ENUMS from '../constants/Enums';
import { Input, Button } from 'react-bootstrap';
import CheckBoxList from 'react-checkbox-list';

export default class CreateGroupForm extends Component {

    // horrible Babel bug:
    constructor(props) {
        super(props);
    }

    static contextTypes = {
        history: PropTypes.object
    };

    static propTypes = {
        createSurveyForm: PropTypes.object.isRequired
    }


    handleFormSubmit = (e) => {
        e.preventDefault();

        const { createSurvey } = this.props;
        console.log(this.refs.schedule);

        // createSurvey({
        //     name: this.refs.name.getValue(),
        //     groupId: this.props.groupId
        // });
    }

    render() {
        const { createSurveyForm: { name, isLoading } } = this.props;

        let scheduleCheckboxes = [];
        ENUMS.SURVEY_TIMES.forEach((time, index) => {
            scheduleCheckboxes.push(
                (<Input key={index} type="checkbox" ref="schedule" label={time.label} />)
            );
        });

        return (
            <form onSubmit={this.handleFormSubmit}>
                <Input type='text'
                    id='name'
                    ref="name"
                    defaultValue={name}
                    label="Survey name"
                    placeholder="Please enter a name for this survey"/>

                <b>Schedule</b><br />
                <CheckBoxList data={ENUMS.SURVEY_TIMES} ref="schedule"/>

                <Button type="submit"
                    bsStyle="primary"
                    disabled={isLoading}>
                    { isLoading ? <span>Loading...</span> : <span>Create Survey</span> }
                </Button>
            </form>
        );
    }

}