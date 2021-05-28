import React, { useEffect, useState } from "react";

import { makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";
import Public from "@material-ui/icons/Public";
import  AccountCircle from "@material-ui/icons/AccountCircle";

export default function UserDetail() {
  const [user, setUser] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((resp) => resp.json())
      .then((user) => setUser(user));
  }, []);

  if (!user) {
    return <div>cargando...</div>;
  }

  return (
    <Paper elevation={2} className={classes.paper}>
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.conatinerRight}>
            <AccountCircle fontSize='large' color="disabled"/>
            <div>
              <Typography component="h5" variant="h5" >
                {user.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {user.username}
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.conatinerLeft}>
            <Public fontSize='small'/>&nbsp;
            <Typography variant="subtitle1" component='div' align='right' color="textSecondary">
              {user.website}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  paper: {
    margin: spacing(3, 0),
    padding: spacing(3),
  },
  conatinerRight: {
    display: 'flex',
    '& svg': {
      marginRight: spacing(1)
    }
  },
  conatinerLeft: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& svg': {
      color: palette.text.secondary
    }
  }
}));
