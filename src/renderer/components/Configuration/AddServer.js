import React from 'react';
import ModalCard from '../UI/ModalCard'

export default (props) => {
    return (
        <ModalCard title="Add server" visible={props.visible} onCancel={props.onCancel}>
            <article className="message">
                <div className="message-header">
                    <p>URL</p>
                </div>
                <div className="message-body">
                    <input type="text" value="http://jenkins.example.com"/>
                </div>
            </article>

            <article className="message">
                <div className="message-header">
                    <p>Credentials</p>
                </div>
                <div className="message-body">
                    <label>Username</label>
                    <input type="text" value=""/>
                    <label>Password</label>
                    <input type="password" value=""/>
                </div>
            </article>
        </ModalCard>
    )
};