import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import CustomCard from './components/Card';
import AddNoteForm from './components/AddNoteForm';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/login/Login';
import Signup from './components/signup/Signup';


const noteData = []


function App() {
  const[notes, setNotes] = useState(noteData);
  const handlerAddNote =(title, details) => {
    console.log('Title: ', title);
    const newNote = {id: Math.random(), title: title, details: details};
    const newNoteData = notes.concat(newNote)
    setNotes(newNoteData);
  }

  const handleDeleteNote = (id) => {
    console.log("Note ID: ", id);
    const newNoteData = notes.filter((item) => item.id !== id);
    setNotes(newNoteData);
  }
  return (
    <div>
      <Header />
      <Container>     
        <Grid container spacing={3}>
          {(notes.length === 0) ? (
            <div style={{width: '100%', paddingTop: 200}}>
              <Typography 
               variant="h1" 
               color="textSecondary" 
               style={{textAlign: 'center'}} 
               component="p">Start Adding your note here</Typography>
            </div>
          ):
          notes.map((item) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <CustomCard item={item} onDelete={handleDeleteNote} />
          </Grid>
          ))}
        </Grid>
      </Container>
       <AddNoteForm onSubmit={handlerAddNote}/> 

      <BrowserRouter>
        <div>          
          <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;