import React, { Component } from  'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router-dom';
import FlashcardPage from './flashcardPage'


const FlashcardsIndex = ({ flashcards }) =>{

  return (
    <div>

    {flashcards.map(flashcard => (
      <FlashcardPage flashcard={flashcard} key={flashcard.id}/>))}


    </div>
    )
}



export default FlashcardsIndex;