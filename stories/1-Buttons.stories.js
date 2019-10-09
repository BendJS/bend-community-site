import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Buttons',
};

export const KitchenSink = () => (
  <ButtonToolbar>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="success">Success</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="info">Info</Button>
    <Button variant="light">Light</Button>
    <Button variant="dark">Dark</Button>
    <Button variant="link">Link</Button>
  </ButtonToolbar>
);
