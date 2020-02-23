import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import Loading from "../components/Loading";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    margin: "auto",
    maxWidth: 100 + "vh",
    minWidth: 40 + "vh"
  },
  root: {
    flexGrow: 1,
    margin: 50
  },

  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 60,
    borderRadius: "50%",
    height: 60,
    overflow: "hidden"
  }
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  const data = useSelector(state => state.data.data);
  const details = useSelector(state => state.data.details);
  const loading = useSelector(state => state.data.loading);

  console.log("LOADING: ", loading, "DATA: ", data, "DETAILS: ", details);
  // console.log(data);
  return (
    <div className={classes.root}>
      {loading ? (
        <Loading />
      ) : (
        <Card>
          <CardContent>
            <Typography className={classes.content} gutterBottom variant="h5">
              {details.city_name} {details.country_code}
              <i class="fas fa-cloud-sun-rain"></i>
            </Typography>

            <Typography component="h2" color="textSecondary">
              {details.timezone}
            </Typography>
            <br />
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default Home;

// {data.map((day, index) => (
//   <Grid className={classes.padding} key={index}>
//     <Card className={classes.card}>
//       <>
//         <CardMedia
//           className={classes.cover}
//           image={image}
//           title="Live from space album cover"
//         />
//       </>
//       <div className={classes.details}>
//         <CardContent className={classes.content}>
//           <Typography component="h5" variant="h5">
//             {details.city_name} {details.country_code}
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary">
//             {details.timezone}
//           </Typography>

//           <Typography component="h5" variant="h5" color="textSecondary">
//             {/* + {one.min_temp} - {one.max_temp} */}
//           </Typography>
//           <Typography component="h5" variant="h5" color="textSecondary">
//             {/* {one.weather.description} */}
//           </Typography>
//           <br />
//         </CardContent>
//       </div>
//     </Card>
//   </Grid>
// ))}
