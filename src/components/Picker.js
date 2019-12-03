import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around"
    }
  },
  space: {
    margin: 20
  },
  grid: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
}));

const Picker = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.grid}>
      <Grid>
        <Button className={classes.space} variant="contained" color="primary">
          One Day
        </Button>
        <Button className={classes.space} variant="contained" color="primary">
          Three Days
        </Button>
        <Button className={classes.space} variant="contained" color="primary">
          Seven Days
        </Button>
      </Grid>
    </Grid>
  );
};

export default Picker;
