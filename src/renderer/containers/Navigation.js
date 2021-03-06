import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import './Navigation.css'

export const Pages = Object.freeze({
    'Main': '/', 
    'Settings': '/settings'});

function createTabs(currentPage) {
    return Object.keys(Pages)
    .map(page => transformPage(currentPage, page));
}

function transformPage(currentPage, page) {
    const id = Pages[page];

    var pageState = '';
    if (currentPage === id) {
        pageState = 'is-active';
    }
    return <li key={id} className={pageState}>
            <Link to={id}>{page}</Link>
        </li>
}

const navigation = (props) => {
    return <div className="tabs Navigation">
        <ul>
            {createTabs(props.location.pathname)}
        </ul>
    </div>
}

export default withRouter(navigation);