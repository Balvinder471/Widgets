import React, {useEffect, useState} from "react";
import GoogleTranslate from "../Api/GoogleTranslate";

const Convert = ({language, text}) => {
    const [output, setOutput] = useState('')
    useEffect( () => {
      let timerId = setTimeout  ( async () =>
        {
           const response = await GoogleTranslate.post("/translate/v2", {
                    q: text,
                    target: language.value
            })
            setOutput(response.data.data.translations[0].translatedText)
        }, 800)
        return () => clearTimeout(timerId)
    }, [language, text])

return (
    <div>
        {output}
    </div>
)
}

export default Convert