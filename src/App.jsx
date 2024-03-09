import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//! 38-6 && 38-7
import Todo from "./Todo";
//!  38-8
import Actor from "./Actor";
import Singer from "./Singer";
//! 38-9
import BookStore from "./BookStore";

//!Component
function App() {
    //! 38-7
    const actors = ["a", "b", "c", "d"];
    //! 38-8
    const singers = [
        { id: 1, name: "Mahfuz", age: 68 },
        { id: 2, name: "Eva", age: 38 },
        { id: 3, name: "hero", age: 30 },
    ];
    //! 38-9
    const books = [
        { id: 1, name: "Physics", price: 200 },
        { id: 2, name: "Math", price: 100 },
        { id: 3, name: "Chemistry", price: 120 },
        { id: 4, name: "Biology", price: 300 },
    ];
    return (
        //!Fragment
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            {/* //! 38-9 */}
            <BookStore books={books}></BookStore>

            <Device name="Leptop" price="55"></Device>
            <Device name="Mobile" price="17.5"></Device>
            {/* //!1st {} means i want to send a value dynamically */}
            <Person jame={{ name: "jame", age: 29 }}></Person>
            {/* <Person></Person> */}
            <Student grade="7" score="99"></Student>
            <Student grade={8} score="55"></Student>
            <Student></Student>
            <Developer></Developer>
            {/* //! 38-6 & 38-7 */}
            <Todo task="Learn React" isDone={true}></Todo>
            <Todo task="Core Concepts" isDone={false}></Todo>
            <Todo task="Try JSX" isDone={true}></Todo>
            {/* //! 38-7  */}
            <Actor name={"bapparaz"}></Actor>
            {actors.map((actor) => (
                <Actor name={actor}></Actor>
            ))}
            {/* //! 38-8 */}
            {/* //! it was bug 🙂 */}
            {/* <Singer></Singer> */}
            {singers.map((singer) => (
                <Singer singer={singer}></Singer>
            ))}
        </>
    );
}

//!38-4 Module
//*received as a object
function Device(anyName) {
    console.log(anyName);
    return <h2 style={{ border: "4px solid cyan" }}>This Device: {anyName.name}</h2>;
}

//! 38-3 Module: crate 1st component
function Person(props) {
    console.log("props = ", props);
    console.log("props.jame = ", props.jame);
    console.log(`props.jame.age = ${props.jame.age}`);
    const age = 25;
    const anoAge = 28;
    const person = { name: "JubayerJ", age: 25 };
    return (
        <h3>
            I am {person.name}. My first component in Person with age: {age + anoAge}. Send nested object throw props and my age is {props.jame.age}.
        </h3>
    );
}

//!38-3 Module
//!38-5 destructuring & default value
function Student({ grade = 0, score = 0 }) {
    console.log(grade, score);
    return (
        //!38-4 added CSS -- method 1
        <div className="student">
            <h3>This is Student Component</h3>
            <p>Class: {grade}</p>
            <p>Score: {score}</p>
        </div>
    );
}

//!38-4 Module
function Developer() {
    //! Added CSS -- method 2
    const devStyle = {
        margin: "20px",
        padding: "20px",
        border: "5px solid purple",
        borderRadius: "20px",
    };
    return (
        <div style={devStyle}>
            <h5>Developer Component</h5>
            <p>Coding: </p>
        </div>
    );
}
export default App;
