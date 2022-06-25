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

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    return this.setState(prevState => {
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
    return this.setState({ filter: value });
  };

  deleteClickHandler = id => {
    const { contacts } = this.state;
    const requiredContactIdx = contacts.findIndex(contact => contact.id === id);
    contacts.splice(requiredContactIdx, 1);
    return this.setState({ contacts });
  };
  render() {
    const { contacts, filter } = this.state;
    const preparedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(preparedFilter)
    );
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterChangeHandler} />
        <ContactList
          contacts={filteredContacts}
          deleteClickHandler={this.deleteClickHandler}
        />
      </div>
    );
  }
}
