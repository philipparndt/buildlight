import React from 'react'

export const Pages = Object.freeze({"Main": 1, "Settings": 2});
const PageFactories = {};

function createTabs(currentPage, pageChangedHandler) {
    const pages = Object.keys(Pages)
    .map(page => {
        const id = Pages[page];

        var pageState = "";
        if (currentPage === id) {
            pageState = "is-active";
        }

        return <li className={pageState}>
                <a onClick={() => pageChangedHandler(id)}>
                    {page}
                </a>
            </li>;
    });

    return <div className="tabs">
        <ul>
            {pages}
        </ul>
    </div>
}

export function registerPage(page, pageFactory) {
    PageFactories[page] = pageFactory;
}

function createPage(page) {
    return PageFactories[page]();
}

export default (props) => {
    return <>
        {createTabs(props.currentPage, props.pageChangedHandler)}
        {createPage(props.currentPage)}
    </>;
}