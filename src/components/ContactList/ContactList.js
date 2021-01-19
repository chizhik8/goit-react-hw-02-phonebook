import React from 'react'

export default function ContactList({contacts, onRemoveContact}) {
    console.log('ContactList contacts:', contacts,)
    return (
        <div>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}> {contact.name}: {contact.number}
                        <button
                            type='button'
                            onClick={() => onRemoveContact(contact.id)}>X</button>
                    </li>               
                ))}
            </ul>
            
        </div>
    )
}
