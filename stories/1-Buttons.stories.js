import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Bootstrap | Buttons',
};

export const KitchenSink = () => (
  <ButtonToolbar>
    <Button
      variant="primary"
      onClick={()  => {alert('Primary Button Clicked!')}}
    >
      Primary
    </Button>
    <Button
      variant="secondary"
      onClick={()  => {alert('Secondary Button Clicked!')}}
    >
      Secondary
    </Button>
    <Button
      variant="success"
      onClick={()  => {alert('Success Button Clicked!')}}
    >
      Success
    </Button>
    <Button
      variant="warning"
      onClick={()  => {alert('Warning Button Clicked!')}}
    >
      Warning
    </Button>
    <Button
      variant="danger"
      onClick={()  => {alert('Danger Button Clicked!')}}
    >
      Danger
    </Button>
    <Button
      variant="info"
      onClick={()  => {alert('Info Button Clicked!')}}
    >
      Info
    </Button>
    <Button
      variant="light"
      onClick={()  => {alert('Light Button Clicked!')}}
    >
      Light
    </Button>
    <Button
      variant="dark"
      onClick={()  => {alert('Dark Button Clicked!')}}
    >
      Dark
    </Button>
    <Button
      variant="link"
      onClick={()  => {alert('Link Button Clicked!')}}
    >
      Link
    </Button>
  </ButtonToolbar>
);
