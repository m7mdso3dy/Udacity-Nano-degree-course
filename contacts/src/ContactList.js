import React, { Component } from "react";

class ContactList extends Component {
    render() {
        return (
            <ol className='contact-list'>
                {
                    this.props.contacts.map(contact => (
                        <li
                            className='contact-list-item'
                            key={contact.id}
                        >
                            <div
                                className='contact-avatar'
                                style={{
                                    backgroundImage:`url(${contact.avatarURL})`
                                }}
                            />
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>@{contact.handle}</p>
                            </div>
                            <button className='contact-remove'>remove</button>
                        </li>
                    ))
                }
            </ol>
        )
    }
}

export default ContactList;