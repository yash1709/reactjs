import React from "react";


// Pass function as PROPS !
function User03(props) {
    return (
        <div>
            <h2>User03 Component</h2>
            <button onClick={() => props.data()}>Call Data Function</button>
        </div>
    )
}

export default User03;