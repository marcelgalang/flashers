import React, { Component } from  'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router-dom';
import FlashcardPage from './flashcardPage'


const FlashcardsIndex = ({ flashcards }) =>{

  let card = flashcards[0]


  return (
    <div>


    <FlashcardPage flashcard={card} key={card.id}/>

    </div>
    )
}



export default FlashcardsIndex;