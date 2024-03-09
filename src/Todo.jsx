//! 38-6 && 38-7 -- (conditional rendering)
export default function Todo({ task, isDone }) {
    //! if-else statement
    // if (isDone) {
    //     // return <li>Finished: {task}</li>;
    //     return null;
    // }
    // return <li>Work on: {task}</li>;

    //! Ternary Operator
    // return (
    //     <li>
    //         {isDone ? "Finished" : "Work on"} : {task}
    //     </li>
    // );

    //! &&
    // return (
    //     <li>
    //         {task} {isDone && " :Done"}
    //     </li>
    // );

    //! ||
    // return (
    //     <li>
    //         {task} {isDone || " :Do it"}
    //     </li>
    // );

    //! using variable
    let listItem = <li>Work on: {task}</li>;
    if(isDone){
        listItem = <li>Finished: {task}</li>;
    }
    return listItem;
}
