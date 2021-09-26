import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import Header from './Header';
import ToDoList from './ToDoList';

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        height: "100%"
    }
});
function Todo() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Form />
            <ToDoList />
        </div>    
    )
}
export default Todo;
