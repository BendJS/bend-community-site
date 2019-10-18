import React from 'react';
import { Formik } from 'formik';
import {
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from '@material-ui/core';

const ContactUs = () => (
  <div>
    <Typography variant="h3" component="h1" gutterBottom>
      Formik Basic Example
    </Typography>
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
          <FormControl>
            <InputLabel htmlFor="fullname">Full Name</InputLabel>
            <Input
              type='text'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name='name'
            />
            <FormHelperText>We'll never share your name.</FormHelperText>
          </FormControl>
          {props.errors.name && <FormHelperText id='feedback' error>{props.errors.name}</FormHelperText>}
          <div style={{marginTop: `20px`}}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      )}
    />
  </div>
);

export default ContactUs;
