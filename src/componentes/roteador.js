import { useState } from "react";
import SignUp from "./singUp";
import SignIn from "./singIn";
import NavBar from "./navBar";

export default function Roteador() {

    const [currentView, setCurrentView] = useState('signIn');

    const handleViewChange = (view) => {
        setCurrentView(view);
    };

    const background = {
        backgroundImage: `url(${require("../img/background.png")})`,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        justifyContent: "center",
    };

    return (
        <div style={background}>
            <NavBar />
            {currentView === 'signIn' && <SignIn onSwitchView={handleViewChange} />}
            {currentView === 'signUp' && <SignUp onSwitchView={handleViewChange} />}
        </div>
    )
}
