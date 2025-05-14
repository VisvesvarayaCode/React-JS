import React, {useState} from "react";
function Switch(){
    const [isOn, setIsOn] = useState(false);//false
   
    const handleSwitch=()=>{
        setIsOn(!isOn)//True-false
    };

    return(
        <div>
            <p>The Button is {isOn? 'ON':'OFF'}</p>//false-true
            <button onClick={handleSwitch}>Switch</button>
        </div>
    )

}
export default Switch;