import React from 'react';
import {
  Button
} from '@material-ui/core';

export default {
  title: `Material | Buttons`,
};

export const KitchenSink = () => (
  <div>
    <Button variant="contained" onClick={()  => {alert('Default Button Clicked!')}}>
      Default
    </Button>
    <Button variant="contained" color="primary" onClick={()  => {alert('Primary Button Clicked!')}}>
      Primary
    </Button>
    <Button variant="contained" color="secondary" onClick={()  => {alert('Secondary Button Clicked!')}}>
      Secondary
    </Button>
    <Button variant="contained" color="secondary" disabled>
      Disabled
    </Button>
    <Button variant="contained" href="#contained-buttons">
      Link
    </Button>
  </div>
);
