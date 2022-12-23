import React, { useState } from 'react'

export default function TextForm(props) {
    // const [text, setText] = useState('Enter text here'); // This hook explains that the keyword text will be the current state of the component and setText will be the future updation state, updation function and whatever we pass inside the setText function we update the current state with that, The useState holds the current state value which is text
    // text = "new text"; // Worng way to change the state
    // setText("new text"); // Correct way to change the state
    // The hooks in react are used to use features of class based components inside function based components without creating a class.
    const [text, setText] = useState('');

    const handleUpClick = () => {
        if (text === "") {
            props.showAlert('Please enter some text to continue', 'warning')
        }
        else {
            let newText = text.toUpperCase();
            setText(newText);
            // setText('You have clicked the upperCase button and handleUpClick function has been fired');
            props.showAlert('Text Converted To UPPERCASE', 'success')
        }
    }
    const handleLoClick = () => {
        if (text === "") {
            props.showAlert('Please enter some text to continue', 'warning')
        }
        else {
            let newText = text.toLowerCase();
            setText(newText);
            // setText('You have clicked the lowerCase button and handleLoClick function has been fired');
            props.showAlert('Text Converted To lowercase', 'success')
        }
    }
    const handleSentenceCaseClick = () => {
        if (text === "") {
            props.showAlert('Please enter some text to continue', 'warning')
        }
        else {
            let newText = text.replace(/\w\S*/g,
                function (text) {
                    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
                }
            );
            setText(newText)
            props.showAlert('Text Converted To Sentence Case', 'success')
        }
    }
    const handleAlternateCase = () => {
        if (text === "") {
            props.showAlert('Please enter some text to continue', 'warning')
        }
        else {
            let newText = text.split("").map((letter, i) => ((i % 2) === 0 ? letter.toUpperCase() : letter.toLowerCase())).join("");
            setText(newText)
            props.showAlert('Text Converted To aLtErNaTiNg CaSe', 'success')
            // Another Way of Alternate Casing but didnt worked in react
            // let newText = text.toLowerCase().split("");
            // for (let i = 0; i < newText.length; i=i+2) {
            //     newText[i] = newText[i].toUpperCase();
            //     newText = newText.join("");
            //     return newText
            // }
            // setText(newText)
        }
    }

    const handleReverseClick = () => {
        if (text === "") {
            props.showAlert('Please enter some text to continue', 'warning')
        }
        else {
            let txtToArr = Array.from(text);
            let arrRever = txtToArr.reverse();
            let arrToTxt = arrRever.join("");
            setText(arrToTxt);
            props.showAlert('Text has been changed to Reverse Order', 'warning')
        }
    }
    const handleWhiteSpaceClick = () => {
        if (text === "") {
            props.showAlert('Please enter some text to continue', 'warning')
        }
        else {
            // let newText = text.replace(/\s+/g, " ");
            // setText(newText);
            //Another Way
            let newText = text.split(/[ ]+/)
            setText(newText.join(" "))
            props.showAlert('Excess whitespaces has been removed', 'success')
        }
    }
    const handleClearClick = () => {
        if (text === "") {
            props.showAlert('Please enter some text to continue', 'warning')
        }
        else {
            let newText = "";
            setText(newText);
            props.showAlert('Your text has been cleared from the TextBox', 'danger')
        }
    }
    const handleCopy = () => {
        if (text === "") {
            props.showAlert('Please enter some text to continue', 'warning')
        }
        else {
            let text = document.getElementById("my-box")
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert('Your text has been copied to clipboard', 'success')
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value) // This line basically allows user type inside text area because as we see that previously we declared the value of the text box is text-state but whenever we try to update text/type text it is not allowing, To allow we said that whenever any change occurs in text box(onChange event occured in text box) the onChange function should setText(update state) with the event occured in onChange function.
        // console.log("onChange");
        // The OnChange Event is necessary because without listening to event as the usertype we cannot update the value attribute in the textarea tag.
    }
    const textemptylength = () => {
        // if (text === "") {
        //     return (text.split(/\s+/).length - 1)
        // }
        // else {
        //     return (text.split(/\s+/).length)
        // }
        let text1 = text.split(/\s+/).filter((element) => { return element.length !== 0 }).length
        return text1
    }
    const textTime = () => {
        if (text === "") {
            return ((0 * (text.split(" ").length)).toFixed(3))
        }
        else {
            return ((0.008 * (text.split(" ").length)).toFixed(3))
        }
    }
    return (
        <>
            <div className={`bg-container bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <div className="container main-container">
                    <div className="container text-container mb-3 mx-2">
                        <h2 className='mb-3'>{props.heading}</h2>
                        <textarea className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} value={text} onChange={handleOnChange} id="my-box" placeholder='Enter text here' rows="9" />
                        <div className="contanier my-1">
                            <button className="btn btn-primary btn-sm my-3 mx-1" onClick={handleUpClick}>To UpperCase</button>
                            <button className="btn btn-secondary btn-sm my-3 mx-1" onClick={handleLoClick}>To lowercase</button>
                            <button className="btn btn-success btn-sm my-3 mx-1" onClick={handleSentenceCaseClick}>To SentenceCase</button>
                            <button className="btn btn-warning btn-sm my-3 mx-1" onClick={handleAlternateCase}>To aLtErNaTiNgCaSe</button>
                            <button className="btn btn-primary btn-sm my-3 mx-1" onClick={handleReverseClick}>Reverse Text</button>
                            <button className="btn btn-info btn-sm my-3 mx-1" onClick={handleWhiteSpaceClick}>Remove Excess WhiteSpaces</button>
                            <button className="btn btn-danger btn-sm my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
                            <button className="btn btn-secondary btn-sm my-3 mx-1" onClick={handleCopy}>Copy Text</button>
                        </div>
                    </div>
                    <hr />
                    <div className="container summary-container mb-3 my-3 mx-2">
                        <h2>Text Summary</h2>
                        <p>{textemptylength()} Words</p>
                        <p>{text.length} Characters</p>
                        <p>Takes {textTime()} Minutes To Read For An Average Human</p>
                    </div>
                    <hr />
                    <div className="container preview-container mt-3 mx-2">
                        <h2>Preview Your Text</h2>
                        <p>{text.length > 0 ? text : "Give some input in 'Text Input Here' to preview here."}</p>
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}
