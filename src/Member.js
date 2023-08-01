import React from "react";


// Pass function as PROPS !
function Member(props) {
    return (
        <div>
            <h2>Member Component</h2>
            <button onClick={() => props.data()}>Call Data Function</button>
        </div>
    )
}

export default Member;