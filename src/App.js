import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Section } from './components/Section/Section.jsx';
import { InputForm } from './components/InputForm/InputForm.jsx';
import { Filter } from './components/Filter/Filter.jsx';
import { ContactList } from './components/ContactList/ContactList.jsx';
import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = evt => {
    evt.preventDefault();

    const doubleContact = this.state.contacts.find(
      contact =>
        evt.target.elements[0].value.toLowerCase() ===
        contact.name.toLowerCase(),
    );

    if (!doubleContact) {
      const newContact = {
        id: uuidv4(),
        name: evt.target.elements.name.value,
        number: evt.target.elements.number.value,
      };

      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    } else {
      alert(doubleContact.name + 'is alredy in contacts');
    }

    evt.target.elements[0].value = '';
    evt.target.elements[1].value = '';
  };

  handleFilterContact = evt => {
    evt.preventDefault();

    this.setState({ filter: evt.target.value.toLowerCase() });
  };

  handleDeleteContact = evt => {
    const arrayWithoutDeletedContact = this.state.contacts.filter(contact => {
      return contact.id !== evt.target.id;
    });

    this.setState({
      contacts: [...arrayWithoutDeletedContact],
    });
  };

  render() {
    return (
      <div className={s.app}>
        <Section title={'Phonebook'}>
          <InputForm addContact={this.handleAddContact} />
          <ContactList
            info={this.state}
            deleteContact={this.handleDeleteContact}
          >
            <Filter
              info={this.state}
              filterContact={this.handleFilterContact}
            />
          </ContactList>
        </Section>
      </div>
    );
  }
}
