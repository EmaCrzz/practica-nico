import React, {useEffect, useState} from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import CheckCircle from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';


const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
}));

export default function ListTodos() {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=2")
      .then((resp) => resp.json())
      .then((todos) => setTodos(todos));
  }, []);

  return (

      <List dense className={classes.root}>
        {todos.map(({title, completed, id}) => {
          return (
            <div key={id}>
              <ListItem disableGutters>
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                  {completed ? <CheckCircle /> : <RadioButtonUncheckedIcon />}
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>

  );
}
