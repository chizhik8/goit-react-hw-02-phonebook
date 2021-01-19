import React, { Component } from 'react'

import { ContactForm } from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';
// import Filter from './components/Filter/Filter';
// import PropTypes from 'prop-types'

export class App extends Component {
  static propTypes = {}
  static defaultProps = {}

  state = {
    contacts: [],
    // filter: '',
  }

  addContacts = (name,number) => { 
    const contact = {
      id: uuidv4(),
      name,
      number
    }
    this.setState(prevState => { 
      return {
        contacts: [...prevState.contacts, contact],
      }
    })
  }

  render() {
    console.log('App state:',this.state);
    return (
    <div>
      <h1>Phonebook</h1>
        <ContactForm onAddContacts={this.addContacts}/>
      <h2>Contacts</h2>
      {/* <Filter /> */}
        <ContactList contacts={this.state.contacts} />
    </div>
    )
  }
}

export default App
