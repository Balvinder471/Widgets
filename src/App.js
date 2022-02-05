import React, {useState} from "react";

import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";

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

const options = [
    {
        label : "Red Color",
        value: "Red"
    },
    {
        label : "Green Color",
        value: "Green"
    },
    {
        label : "Blue Color",
        value: "Blue"
    },
    {
        label : "Orange Color",
        value: "Orange"
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div className="mt-4">
            <Header/>
        <Route url="/">
            <Accordion items={items} />
        </Route>
        <Route url="/dropdown">
            <Dropdown
            label="Select a Color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            />
        </Route>
        <Route url="/search">
            <Search/>
        </Route>
        <Route url="/translate">
            <Translate/>
        </Route>
        </div>
    )
}

export default App