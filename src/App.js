import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Section } from './components/Section/Section.jsx';
import { InputForm } from './components/InputForm/InputForm.jsx';
import { Contacts } from './components/Contacts/Contacts.jsx';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleAddContact = evt => {
    evt.preventDefault();
    console.log(evt.target.elements);

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

    evt.target.elements[0].value = this.state.name;
    evt.target.elements[1].value = this.state.number;
  };

  render() {
    return (
      <div className={s.app}>
        <Section title={'Phonebook'}>
          <InputForm addContact={this.handleAddContact} />
          <Contacts info={this.state.contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
