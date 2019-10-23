import React from 'react';
import { Link } from '@reach/router';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from '@material-ui/core';


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    button: {
      '&:hover': {
        color: `#FFFFFF`
      }
    }
  }),
);

function Home() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      data-testid="app"
    >
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Bend Community Site
            </Typography>
            <Button color="inherit" component={ Link } to="/" className={classes.button}>Home</Button>
            <Button color="inherit" component={ Link } to="/contact-us" className={classes.button}>Contact Us</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Home;
