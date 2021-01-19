import React from 'react'

export default function ContactList({contacts}) {
    console.log('ContactList contacts:', contacts,)
    return (
        <div>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}> {contact.name}: {contact.number}</li>               
                ))}
            </ul>
        </div>
    )
}
