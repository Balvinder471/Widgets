import React, {useState, useEffect} from "react";

import Wikipedia from "../Api/Wikipedia";

const Search = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        let timerId
        if(term) {
             timerId = setTimeout(
                async () => {
                    try {
                        const result = await Wikipedia.get('w/api.php', {
                            params: {
                                srsearch: term
                            }
                        })
                        setResults(result.data.query.search)
                    } catch (error) {
                        console.log(error)
                    }
                },800)
        }
        return () => clearTimeout(timerId) //cleanup func, called before next re render
    }, [term])

    const render = () => {
        if(results.length === 0)
            return <h2 className="text-center mt-4">Waiting on someone? Just do a search already will ya!!</h2>
        return (
            <div className="w-7/12 mx-auto mt-6 border border-gray-300 rounded pt-3 pb-3 pl-4 pr-4 flex flex-col items-start gap-4">
                {
                    results.map((item) => {
                       return (
                           <div key={item.pageid}>
                               <h1 className="text-amber-600 text-xl font-bold">{item.title}</h1>
                               <div className="flex items-center gap-3">
                               <p dangerouslySetInnerHTML={{__html : item.snippet}}></p>
                                   <a className="bg-gray-500 text-sm text-gray-100 rounded pt-2 pb-2 pl-5 pr-5 hover:bg-white hover:text-amber-600 hover:outline hover:outline-1 hover:outline-green-900" target="_blank" href={`https://en.wikipedia.org?curid=${item.pageid}`}>Go</a>
                               </div>
                               <hr/>
                           </div>
                       )
                    })
                }
            </div>
        )
    }

    return (
        <div>
            <div className="border border-gray-300 border-solid rounded-md w-1/4 mx-auto flex flex-col items-start gap-4 mt-4 pt-3 pb-3 pl-4">
                <label>Search Something : </label>
                <input value={term} onChange={(event) => setTerm(event.currentTarget.value)} className="border border-solid border-gray-300 hover:border-black focus:border-black rounded p-1 focus:outline-0" />
            </div>
            {render()}
        </div>
    )
}

export default Search