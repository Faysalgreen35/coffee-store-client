import { useState } from "react";
import { useLoaderData } from "react-router-dom";



const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] =useState(loadedUsers);

    const handleDelete = id  =>{
        // make sure user is confirm to delete 

        fetch(`https://coffee-store-server-iota-two.vercel.app/user/${id}`, {
            method: 'DELETE'
           
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                console.log('deleted successfully');
                //remove the user from th ui
                const reamainingUsers = users.filter(user => user._id !== id)
                setUsers(reamainingUsers);
            }
        })
    }

    return (
        <div>
            <h1>users: {loadedUsers.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>CreatedAt</th>
                            <th>Last logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        users.map((user, idx) => 
                            <tr key={user._id}>
                            <th>{idx + 1}</th>
                            <td> {user.email}  </td>
                            <td>{user.createdAt}</td>
                            <td>{user.lastLoggedAt} </td>
                            <td>
                                <button onClick={(() => handleDelete(user._id))}>X</button>
                            </td>
                        </tr>)
                       }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;