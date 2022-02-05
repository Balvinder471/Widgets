import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
   {
      label : "Afrikaans",
      value : "af"
   },
   {
      label: "Arabic",
      value:"ar"
   },
   {
      label: "Hindi",
      value: "hi"
   }
]

const Translate = () => {
   const [language, setLanguage] = useState(options[0])
   const [text, setText] = useState('')
   return (
       <div>
          <div className="flex flex-col items-center gap-4 mb-[50px] mt-[50px]">
             <label htmlFor="initial">Type something to translate : </label>
             <input type="text" id="initial" value={text} onChange={(event => setText(event.target.value))} className="border border-solid border-gray-300 hover:border-black focus:border-black rounded p-1 focus:outline-0"/>
          </div>
          <Dropdown
              label={"Select a Language : "}
              options={options}
              selected={language}
              onSelectedChange={setLanguage}
          />
           <hr/>
           <div>
               <h3>Output : </h3>
               <Convert
               text={text}
               language={language}
               />
           </div>
       </div>
   )
}

export default Translate