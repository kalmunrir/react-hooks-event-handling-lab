// Code Keypad Component Here

function Keypad (){
    
    function passwordInputHandler(event){
        console.log("Entering password...");
    }
    
    return (
        <div>
            <input type="password" onChange={passwordInputHandler}/>
        </div>
    )
}

export default Keypad;