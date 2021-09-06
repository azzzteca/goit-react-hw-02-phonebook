import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { Section } from './components/Section/Section.jsx';
import { InputForm } from './components/InputForm/InputForm.jsx';
import { Contacts } from './components/Contacts/Contacts.jsx';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleAddContact(evt) {
    evt.preventDefault();

    console.log(evt.target.elements.name.value);

    // this.setState({
    //   contacts: this.state.contacts.push(evt.target.va),
    // });
  }

  render() {
    return (
      <div className={s.app}>
        <Section title={'Phonebook'}>
          <InputForm addContact={this.handleAddContact} />
          <Contacts info={this.state} />
        </Section>
      </div>
    );
  }
}

export default App;
