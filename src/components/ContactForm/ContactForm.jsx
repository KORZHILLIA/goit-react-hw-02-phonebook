import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  inputChangeHandler = event => {
    const value = event.target.name;
    return this.setState({ [value]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => this.setState({ name: '', number: '' });
  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          <input
            className={styles.input}
            onChange={this.inputChangeHandler}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          Name
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            onChange={this.inputChangeHandler}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          Number
        </label>
        <button className="btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
