import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        console.log(meta);
        const classNameError = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            // <input
            //     onChange={formProps.input.onChange}
            //     value={formProps.input.value}
            // />

            //scrittura ristretta => prende tutte le property dell'input element
            <div className={classNameError}>
                <label>
                    {label}
                </label>
                <input {...input} autoComplete="off" />
                {/* error message if touched is true */}
                {this.renderError(meta)}
            </div>

        );

    }

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.onSubmit(formValues);
    }

    render() {
        console.log(this.props);
        return (
            //handleSubmit ha bisogno di una funzione in cui riceve e fa il submit delle informazioni
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                <Field name='title' component={this.renderInput} label="Enter title" />
                <Field name='description' component={this.renderInput} label="Enter description" />
                <button className='ui button primary'>Submit</button>
            </form>
        );
    }

}

const validate = (formValues) => {
    const errors = {};
    console.log(formValues)
    if (!formValues.title) {
        //run if user enter not valid title
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        //run if user enter not valid title
        errors.description = 'You must enter a desctiption';
    }

    return errors;
}

export default (reduxForm({
    form: 'StreamForm',
    validate
})(StreamForm));