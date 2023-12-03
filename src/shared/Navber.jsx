import { useContext } from 'react';
import {  Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';


const Navber = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogout=()=>{
        logOut()
        .then(()=>{})
        .then(error => console.log(error))
    }

    const navItem = 
    <>
        <li><NavLink to='/'>Home</NavLink></li>
      
        <li><NavLink to='/student'>Dashboard</NavLink></li>
        
       
    </>
    return (
        <div className="navbar fixed bg-slate-600 text-white z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 p-2 shadow bg-emerald-900 flex-none">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className='rounded-lg' style={{width:'50px'}} src="https://i.ibb.co/Vgf7wjL/download-5.jpg" alt="" />
                    Program <span className='text-red-500'>ming</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
            {user ?
                    <>
                         <img title={user?.displayName} style={{width:"40px"}} className="rounded-lg mr-4" src={user?.photoURL} alt="" />
                        <button className='btn text-white bg-red-950' onClick={handleLogout}>LogOut</button>
                    </>
                    :
                  <> <Link to='/login'><button className="btn btn-info">Login</button></Link> </>
                }
            </div>
        </div>
    
    );
};

export default Navber;