import { getUserName } from "../services/localStorage";

const Profilearea = () => {
    return ( 
        <div className="profile-area">
            <div className="pfp"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png" alt="default profile picture" /></div>
            <p className="username">Welcome {getUserName()}!</p>
        </div>
     );
}
 
export default Profilearea;