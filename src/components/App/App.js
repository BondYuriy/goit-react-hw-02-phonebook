import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = obj => {
    const { contacts } = this.state;

    const isResult = contacts.filter(
      contact =>
        contact.name.toLocaleLowerCase() === obj.name.toLocaleLowerCase(),
    );

    if (isResult.length > 0) {
      alert('such name exists');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, obj],
      }));
    }
  };

  handleFilterChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    this.setState({
      [name]: value,
    });
  };

  deleteContact = id => {
    const { contacts } = this.state;

    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredFriends = contacts.filter(friend =>
      friend.name.toLocaleLowerCase().includes(filter),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredFriends} onDelete={this.deleteContact} />
      </div>
    );
  }
}
