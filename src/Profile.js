import { useState } from 'react';

function Profile() {

    // const [loggedIn, setLoggedIn] = useState(false);
    const [loggedIn, setLoggedIn] = useState(1);


    // if (loggedIn) {
    //     return (
    //         <div>
    //             <h2>Profile Component : Welcome Yash</h2>
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div>
    //             <h2>Profile Component : Welcome Guest</h2>
    //         </div>
    //     )
    // }


    // if-else
    // return (
    //     <div>
    //         {loggedIn ? <h2>Profile Component : Welcome Yash</h2> : <h2>Profile Component : Welcome Guest</h2>}
    //     </div>
    // )


    // if- else if-else
    return (
        <div>
            {loggedIn == 1 ? <h2>Welcome User 1</h2> : loggedIn == 2 ? <h2>Welcome User 2</h2> : <h2>Welcome User 3</h2>}
        </div>
    )
}

export default Profile;