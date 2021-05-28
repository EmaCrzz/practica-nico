import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from "@material-ui/core";
import UserDetail from "./UserDetail";

// const initTodo = {
//   userId: null,
//   id: null, // autogenerado
//   title: "",
//   direccion: "",
//   completed: false,
// };

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListTodos from './ListTodos';
import HeaderListTodos from './HeaderListTodos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
    const classes = useStyles();


  // const onSubmit = e => {
  //   e.preventDefault()
  //   // setTodos([...todos, {...newTodo, id: todos.length + 1}])
  //   setTodos((prev) => prev.concat({ ...newTodo, id: prev.length + 1 }))
  //   setNewTodo({...initTodo, userId})
  // }

  // const handleChangeInput = ({ target: { value, name }}) => {
  //   setNewTodo({ ...newTodo, [name]: value })
  // }
  
  // const handleChangeCheckbox = ({ target: { checked }}) => {
  //   setNewTodo({ ...newTodo, completed: checked })
  // }

  // const onDelete = idTodo => {
  //   const filterTodo = todos.filter(todo => todo.id !== Number(idTodo))
  //   setTodos(filterTodo)
  // }

  return (
    <CssBaseline>
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Button color="inherit">Inicio</Button>
            <Typography variant="h6" className={classes.title}>
              Estudiando React
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <UserDetail />
          <HeaderListTodos />
          <ListTodos />
          {/* <p>
        <b>name:</b> {user.name}
      </p>
      <p>
        <b>username:</b> {user.username}
      </p>
      <p>
        <b>email:</b> {user.email}
      </p>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}{" "}
              <button onClick={() => onDelete(todo.id)}>borrar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Crear nueva tarea</h3>
      <form onSubmit={onSubmit}>
        <input
          placeholder="ingrese tarea"
          name="title"
          value={newTodo.title}
          onChange={handleChangeInput}
        />
        <input
          placeholder="ingrese direccion"
          name="direccion"
          value={newTodo.direccion}
          onChange={handleChangeInput}
        />
        <br />
        <label>
          completada
          <input
            name="completed"
            type="checkbox"
            checked={newTodo.completed}
            onChange={handleChangeCheckbox}
          />
        </label>
        <br />
        <button>guardar</button>
      </form> */}
        </Container>
      </div>
    </CssBaseline>
  );
}

export default App;
