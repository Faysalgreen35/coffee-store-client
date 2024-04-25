import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

 

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee ={name, quantity, supplier, taste, category, details, photo};
        console.log(updatedCoffee);

        // send data to the server 
        fetch(`https://coffee-store-server-iota-two.vercel.app/coffee/${_id}`, {
        method: 'PUT',
        headers:{
            'content-type': 'application/json'
        },

        body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then (data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })


    }

    return (
        <div className="bg-[#F4F3F0] p-20">
        <h1 className="text-3xl font-extrabold mb-8">Update coffee:  {name}</h1>

        <form onSubmit={handleUpdateCoffee} >
            {/* form row  */}
            <div className="md:flex mb-8 ">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span>Coffee Name</span>
                    </label>
                    <div className="join">


                        <input className="input input-bordered join-item w-full" defaultValue={name}  name="name" type="text" placeholder="Cooffee Name" />

                    </div>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span>Available Quantity</span>
                    </label>
                    <div className="join">


                        <input className="input input-bordered join-item w-full" defaultValue={quantity}  name="quantity" type="text" placeholder="Available Quantity" />

                    </div>
                </div>
            </div>
            {/* form supplier row  */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span>Supplier Name</span>
                    </label>
                    <div className="join">


                        <input className="input input-bordered join-item w-full" defaultValue={supplier}  name="supplier" type="text" placeholder="Supplier" />

                    </div>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span>Taste</span>
                    </label>
                    <div className="join">


                        <input className="input input-bordered join-item w-full" defaultValue={taste}  name="taste" type="text" placeholder="Taste" />

                    </div>
                </div>
            </div>
            {/* form category and details row  */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span>Category</span>
                    </label>
                    <div className="join">
                        <input className="input input-bordered join-item w-full" defaultValue={category}  name="category" type="text" placeholder="Category" />

                    </div>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span>Details</span>
                    </label>
                    <div className="join">
                        <input className="input input-bordered join-item w-full" defaultValue={details}  name="details" type="text" placeholder="Details" />

                    </div>
                </div>
            </div>
            {/* form photo url row  */}
            <div className="md:flex mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span>Photo Url</span>
                    </label>
                     
                    <div className="join">
                        <input className="input input-bordered join-item w-full" defaultValue={photo}  name="photo" type="text" placeholder="Photo Url" />

                    </div>
                </div>
                 
            </div>
            <input className="btn btn-block btn-secondary"  type="submit" value="Update Coffee" />
        </form>
    </div>
    );
};

export default UpdateCoffee;