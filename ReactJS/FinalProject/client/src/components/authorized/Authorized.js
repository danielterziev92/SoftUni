import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import Urls from "../../utils/Urls.js";
import {logoutUser, selectUser} from "../../features/user/userSlice.js";

const AuthorizedComponent = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const response = await axios.get(Urls.userAuthentication);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        checkAuthentication();
    }, [user]);

    const handleLogout = () => {
        axios.post(Urls.userLogout.then(() => {
            // Dispatch signout action to reset user state
            dispatch(logoutUser());
        }));
    };

    return (
        <div>
            <h2>Welcome, {user.user.email}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default AuthorizedComponent;
