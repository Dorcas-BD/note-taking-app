import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import CustomCard from './components/Card';
import FormDialog from './components/FormDialog';

const noteData = [
  // {
  //   id: 1,
  //   title: "Goal",
  //   details: " Someday I am going to be a very good developer."
  // },
  // {
  //   id: 2,
  //   title: "Goal",
  //   details: " Someday I am going to be a very good developer."
  // },
  // {
  //   id: 3,
  //   title: "Goal",
  //   details: " Someday I am going to be a very good developer."
  // },
  // {
  //   id: 4,
  //   title: "Goal",
  //   details: " Someday I am going to be a very good developer."
  // },
  // {
  //   id: 5,
  //   title: "Goal",
  //   details: " Someday I am going to be a very good developer."
  // },
  // {
  //   id: 6,
  //   title: "Goal",
  //   details: " Someday I am going to be a very good developer."
  // }
]


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
              <Typography variant="h1" color="textSecondary" style={{textAlign: 'center'}} component="p">Start Adding your note here</Typography>
            </div>
          ):
          notes.map((item) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <CustomCard item={item} onDelete={handleDeleteNote} />
          </Grid>
          ))}
        </Grid>
      </Container>
       <FormDialog onSubmit={handlerAddNote}/> 
    </div>
  );
}

export default App;