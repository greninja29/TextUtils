import React, { useState } from "react";
export default function TextForm(props){
  let handleupclick = ()=>{
    console.log("button is clicked");
    // let newtext=text.toUpperCase();
    // settext(newtext);
    let newone = "";
    for (let i = 0; i < text.length; i++){
      newone += String.fromCharCode(
        text.charCodeAt(i) > 96 && text.charCodeAt(i) < 123
          ? text.charCodeAt(i) - 32
          : text.charCodeAt(i)
      );
      // "String.fromCharCode(text.charCodeAt(i)-32)" is returning a string that is why we are unable to do like newone[i]=String.fromCharCode(text.charCodeAt(i)-32) by giving newone=text initially, and there is no char datatype in javascript
    }
    settext(newone);
    props.showalert("converted to upper case","success")
  };
  let handleloclick = () => {
    console.log("button is clicked");
    // let newtext=text.toUpperCase();
    // settext(newtext);
    let newone = "";
    for (let i = 0; i < text.length; i++) {
      newone += String.fromCharCode(
        text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91
          ? text.charCodeAt(i) + 32
          : text.charCodeAt(i)
      );
      // "String.fromCharCode(text.charCodeAt(i)-32)" is returning a string that is why we are unable to do like newone[i]=String.fromCharCode(text.charCodeAt(i)-32) by giving newone=text initially, and there is no char datatype in javascript
    }
    settext(newone);
    props.showalert("converted to Lower case","success")    
  };
  // var word_count=1;
  let handlechange = (event) => {
    console.log("changes are happening in the textarea");
    settext(event.target.value);
    // if(text.length==0){
    //   word_count=1;
    // }
    // else{
    //   let i=text.length-1;
    //   let count=0;
    //   while(i>=0 && text[i]===" "){
    //     count++;
    //     i--;
    //   }
    //   word_count=count;
    // }
    // let test=text.trim();
    // settext(test)
  };
  //try to understand what is event, "event.target.value", text, settext, useState
  //and find why iam unable to implement the uppercase function without using the inbuilt function
  let handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/); //used regular expression, all those words which are separated by one or more spaces are splitted into an array
    settext(newtext.join(" ")); // here all the words which are splitted are joined with single space, and there will be a space at the end also
    props.showalert("Extra spaces Removed","success")  
  };
  let handleClearText = () => {
    settext("");
    props.showalert("Text cleared","success")    
  };
  let handleCopying = () => {
    console.log("Text Copied");
    var test = document.getElementById("mybox");
    test.select();
    test.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(test.value);
    props.showalert("Text copied to clipboard","success")    
  };
  let handleCapitalising = () => {
    console.log("capitalising button clicked"); //for debugging
    let justcheck = text.split("\n");
    console.log(justcheck);
    for (let i = 0; i < justcheck.length; i++) {
      let newtext = justcheck[i].split(/\s*\.\s*/);
      console.log(newtext); //for debugging
      for (let i = 0; i < newtext.length; i++) {
        newtext[i] = newtext[i].trim();
        if (newtext[i].charCodeAt(0) > 96 && newtext[i].charCodeAt(0) < 123) {
          newtext[i] =
            String.fromCharCode(newtext[i].charCodeAt(0) - 32) +
            newtext[i].slice(1);
        }
      }
      console.log(newtext); //for debugging
      let temp = newtext.join(". ");
      if (
        temp.endsWith(" ") === false &&
        temp.endsWith(",") === false &&
        temp.endsWith("!") === false &&
        temp.endsWith("?") === false
      ) {
        temp += ". ";
      }
      if (temp[0] === ".") {
        temp = temp.slice(2);
      }
      justcheck[i] = temp;
    }
    settext(justcheck.join("\n"));
    props.showalert("Text Capitalized","success")    
  };
  const [text, settext] = useState("");
  return (
    <>
      <div
        className="container"
        style={{color:props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handlechange}
            style={{
              backgroundColor: props.mode === "dark" ? "#142640" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-2 my-1" onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-warning mx-2 my-1"
          onClick={handleCapitalising}
        >
          Capitalise
        </button>
        <button className="btn btn-info mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-secondary mx-2 my-1" onClick={handleCopying}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          There are {text.length} number of characters, and{" "}
          {text[text.length - 1] === " " || text.length === 0
            ? text.split(" ").length - 1
            : text.split(" ").length}{" "}
          number of words, and {text.split("\n").length} number of lines in your
          text.
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} Minutes to read</p>
        <h2>Preview of the text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
