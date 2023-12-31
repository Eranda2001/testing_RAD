import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { UseAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = UseAuthContext()

    const handleClick = () =>{
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    {user && (//conditionlly dispay the relevant content
                    <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                    )}
                    {!user && (<div>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>
                    )}
                </nav>
            </div>
        </header>
    );
}
 
export default Navbar;