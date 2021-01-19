import React, { Component } from 'react'

import { ContactForm } from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';
import { Filter } from './components/Filter/Filter';
// import PropTypes from 'prop-types'

export class App extends Component {
  static propTypes = {}
  static defaultProps = {}

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
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

  addFilter = (filter) => { 
    this.setState(() => { 
      return { filter: filter}
    })
  }

  removeContact = (contactId) => {
    
    this.setState(prevState => { 
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
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
        <Filter onInputFilter={this.addFilter}/>
        <ContactList contacts={this.state.contacts} onRemoveContact={this.removeContact} />
    </div>
    )
  }
}

export default App
