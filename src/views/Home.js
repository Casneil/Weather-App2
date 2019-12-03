import React from "react";
import Cards from "../components/Cards";
import { connect } from "react-redux";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import image from "../images/sunshine.jpg";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    margin: 10
  },
  root: {
    flexGrow: 1
  },
  padding: {
    paddingTop: "20px"
  },

  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 60,
    borderRadius: "50%",
    height: 60,
    overflow: "hidden"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

const Home = ({ data }) => {
  const classes = useStyles();
  const theme = useTheme();
  // console.log(data);
  return (
    <Grid container className={classes.root} spacing={2}>
      {data.map(day => (
        <Grid className={classes.padding} key={day.city_name}>
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {day.city_name} {day.country_code}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {day.timezone}
                </Typography>
                <br />
              </CardContent>
            </div>
            <div className="image">
              <CardMedia
                className={classes.cover}
                // image={image}
                // title="Live from space album cover"
              />
            </div>
          </Card>

          {/* <Cards threeDays={threeDays} fiveDays={fiveDays} /> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
