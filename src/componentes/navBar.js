export default function NavBar() {

    const nav = {
        //backgroundColor: "rgba(255, 0, 0, 0.5)",
        height: "10vh",
        width: "90vw",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        borderRadius: "10px",
        margin: "0 auto",
        marginTop: "20px",
    };

    const buttons = {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100px",
        color: "white",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    };

    return (
        <div style={nav}>
            <button style={buttons}>Profile</button>
            <button style={buttons}>Sing In</button>
            <button style={buttons}>Sing Up</button>
        </div>
    )

};