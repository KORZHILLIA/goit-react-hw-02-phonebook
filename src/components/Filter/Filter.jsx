import PropTypes from 'prop-types';
import { Component } from 'react';

class Filter extends Component {
  inputChangeHandler = event => {
    const value = event.target.value;
    this.props.onChange(value);
  };
  render() {
    return (
      <>
        <h3>Find contacts by name</h3>
        <input type="text" onChange={this.inputChangeHandler} />
      </>
    );
  }
}

Filter.defaultProps = {
  onChange: () => {},
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
export default Filter;
