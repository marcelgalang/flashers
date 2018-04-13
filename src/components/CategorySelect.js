import React, {PropTypes} from "react";
import { connect } from 'react-redux';
import Select from "react-select";

const CategorySelect = ({categories, onChange, value, onBlur}) => {
  const categoryOptions = categories.map(
    category => ({
      label: category.name,
      value: category.id
    }));

  function handleChange(value) {
    onChange(value);
  }

  function handleBlur() {
    onBlur();
  }

  // https://github.com/JedWatson/react-select/issues/1129
  return (
    <div name="category" label="Categories">
      <Select
        name="category"
        options={categoryOptions}
        multi
        simpleValue
        disabled={false}
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}

        onBlurResetsInput={false}/>
    </div>
  );
};
//Having the code like this with handleBlur calling onBlur from Redux Forms works for some reason while the code below that directly wires Redux Forms' onBlur doesn't work.


const mapStateToProps = state => ({
  categories: state.categories
})


export default connect(mapStateToProps)(CategorySelect);