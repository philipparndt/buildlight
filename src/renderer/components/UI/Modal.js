import React from 'react'

export default (props) => {
    const visibility = "modal" + (props.visible ? " is-active" : "");

    return (
        <div class={visibility}>
            <div class="modal-background"/>
            <div class="modal-content">
                {props.children}
            </div>
            <button class="modal-close is-large" aria-label="close" onClick={props.onCancel}></button>
            <footer className="modal-foot">
                <button className="button is-success is-loading">Save changes</button>
                <button className="button" onClick={props.onCancel}>Cancel</button>
            </footer>
        </div>
    )
};