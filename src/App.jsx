import "./App.css";
import ReusableForm from "./components/ReusableForm/ReusableForm";
// import CustomHookForm from "./components/CustomHookForm/CustomHookForm";
// import RefForm from "./components/RefForm/RefForm";
// import SimpleForm from "./SimpleForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
    const handleSignUpSubmit = (data) => {
        console.log("Sign Up data", data);
    };
    const handleUpdateProfile = (data) => {
        console.log("Profile Update", data);
    };

    return (
        <>
            <h1>Vite + React</h1>
            {/* <SimpleForm></SimpleForm> */}
            {/* <StatefulForm></StatefulForm> */}
            {/* <RefForm></RefForm> */}
            {/* <CustomHookForm></CustomHookForm> */}
            <ReusableForm formTitleProps={"Sign Up"} handleSubmit={handleSignUpSubmit}>
                <div>
                    <h2>Sign Up</h2>
                    <p>please sing up right now</p>
                </div>
            </ReusableForm>

            <ReusableForm formTitleProps={"Profile Update"} handleSubmit={handleUpdateProfile} submitBtnText="Update">
                <div>
                    <h2>Update Profile</h2>
                    <button>Click to show your Profile</button>
                </div>
            </ReusableForm>
        </>
    );
}

export default App;
