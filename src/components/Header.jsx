import { NavLink } from "react-router-dom";

 

const Header = () => {
    return (
        <div className=" space-x-5 gap-6 m-12 p-12 text-center text-4xl font-mono font-extrabold bg-slate-300 w-full  ">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/signup'>SignUp</NavLink>
            <NavLink to='/signin'>SignIn</NavLink>
        </div>
    );
};

export default Header;