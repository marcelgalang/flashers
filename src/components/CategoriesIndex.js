import React, { Component } from 'react';
import Select from 'react-select';
import'react-select/dist/react-select.css';
import CategoryPage from './categoryPage';
import { connect } from 'react-redux';
import FlashcardsIndex from './flashcardsIndex'

class CategoriesIndex extends Component {
    debugger

    constructor(props) {
    super(props);
    this.state = {
      categories: this.props.categories,
      currentCategoryId: ""
    };
  }

  handleChange(){
    console.log("got here")
    this.setState({currentCategoryId: this.refs.categorySelector.value})
  }
  debugger

  render(){
    const {categories} = this.props
    let options = categories.map(category => (
    <option key={category.id} value={category.id}>{category.name}</option>))
    const selectedCategory = categories.find(category =>
      category.id == this.state.currentCategoryId
      );
    let deck;

    if (selectedCategory){
      deck = <FlashcardsIndex flashcards={selectedCategory.flashcards}/>
    }
    return (
      <div>

        <select ref="categorySelector" options={options} value ={ this.state.currentCategoryId} onChange={ (e)=> {this.handleChange();}}>{options}</select>
        {deck}


      </div>
      );
  }
}


const mapStateToProps = state => ({
  categories: state.categories
})

export default connect(mapStateToProps)(CategoriesIndex);