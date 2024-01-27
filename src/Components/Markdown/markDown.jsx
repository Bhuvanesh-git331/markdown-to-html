import React, {useState, useEffect, useContext} from "react";
import { GlobalContext } from "../../GlobalState/globalState";
import './markdown.css';

const MarkDown = (props) => {
    const [markDown, setMarkDown]=useState('');
    const [parsedHtmlData, setParsedHtmlData]=useState('');
    const {convertMarkDownToHtml, textData}=useContext(GlobalContext)

   
/**making api call only when markDown state changes  */
  useEffect(()=>{
   if(markDown){
    convertMarkDownToHtml(markDown)
   }
  }, [markDown])

    const handleLeft=(e)=>{
        setMarkDown(e.target.value);
    }


    useEffect(() => {
        if(markDown){
            setParsedHtmlData(textData);
        } else {
            setParsedHtmlData('')
        }
        
    }, [textData, markDown]);

    return (
        <div className="container">
            <textarea 
            className="left_container"
            value={markDown ? markDown : ''} 
            onChange={handleLeft} >
            </textarea>

            <textarea 
            className="right_container"
            value={parsedHtmlData ? parsedHtmlData : ''}
          
            >
                {parsedHtmlData}
            </textarea>
        </div>
    )

}

export default MarkDown