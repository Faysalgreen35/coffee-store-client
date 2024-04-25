import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, setCoffees, coffees }) => {

    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://coffee-store-server-iota-two.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const reamining = coffees.filter(cof =>cof._id !== _id)
                            setCoffees(reamining);
                        }
                    })

            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" className="bg-transparent " /></figure>
            <div className="flex justify-between mt-2  w-full pr-4">
                <div className="space-y-4">
                    <h2 className="card-title mt-4">Name: {name}</h2>

                    <p> {quantity}</p>
                    <p> {supplier}</p>
                    <p> {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn btn-secondary join-item">View</button>
                    <Link to={`updateCoffee/${_id}`}>
                    <button className="btn btn-secondary join-item">Edit</button>
                    </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-error  join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;