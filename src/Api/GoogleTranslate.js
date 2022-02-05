import axios from "axios";

const GoogleTranslate = axios.create(
    {
        baseURL : "https://translation.googleapis.com/language",
        params : {
            key : "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
        }
    }
)

export default GoogleTranslate