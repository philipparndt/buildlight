import React from 'react'
import './Checkbox.css';

export default (props) => {
    const modalclassName = "modal" + (props.visible ? " is-active" : "");

    return (
        <div className={modalclassName}>
            <div className="modal-background"/>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{props.title}</p>
                    <button className="delete" aria-label="close"  onClick={props.onCancel}></button>
                </header>
                <section className="modal-card-body">
                    {props.children}
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success is-loading">Save changes</button>
                    <button className="button" onClick={props.onCancel}>Cancel</button>
                </footer>
            </div>
        </div>
    )
};