import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => {
      const requiredIdx = prevState.contacts.findIndex(
        contact => contact.name === newContact.name
      );
      if (requiredIdx === -1) {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      }
      alert(`${newContact.name} is already in contacts`);
      return;
    });
  };

  filterChangeHandler = value => {
    this.setState({ filter: value });
  };

  deleteClickHandler = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { addContact, filterChangeHandler, deleteClickHandler } = this;
    const { contacts, filter } = this.state;
    const preparedFilter = filter.toLowerCase();
    const filteredContacts = !filter
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(preparedFilter)
        );
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter onChange={filterChangeHandler} />
        <ContactList
          contacts={filteredContacts}
          deleteClickHandler={deleteClickHandler}
        />
      </div>
    );
  }
}
