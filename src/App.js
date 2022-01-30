import React from "react";

import Accordion from "./Components/Accordion";
import Search from "./Components/Search";

const items = [
    {
        title : 'Why are we here ?',
        content : 'Just to learn something new and utilize it in our next project'
    },
    {
        title : 'Why do we care about useless people ?',
        content : 'The so called useless people can help you someday'
    },
    {
        title : 'What about our future?',
        content : 'The future lies in the hands of our creator'
    },
    {
        title : 'What is Love?',
        content : "A shitty feeling that shouldn't exist"
    }
]

const App = () => {
    return (
        <div className="mt-4">
            <Search/>
        </div>
    )
}

export default App