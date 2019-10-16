import React from 'react';
import { Formik } from 'formik';

const ContactUs = () => (
  <div>
    <h1>Formik Basic Example</h1>
    <Formik
      initialValues={{ name: 'Jean Luc Picard' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type='text'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name='name'
          />
          {props.errors.name && <div id='feedback'>{props.errors.name}</div>}
          <button type='submit'>Submit</button>
        </form>
      )}
    />
  </div>
);

export default ContactUs;
