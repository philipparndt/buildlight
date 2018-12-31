import React from 'react'

export default (props) => {
    const visibility = "modal" + (props.visible ? " is-active" : "");

    return (
        <div className={visibility}>
            <div className="modal-background"/>
            <div className="modal-content">
                {props.children}
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={props.onCancel}></button>
            <footer className="modal-foot">
                <button className="button is-success is-loading">Save changes</button>
                <button className="button" onClick={props.onCancel}>Cancel</button>
            </footer>
        </div>
    )
};