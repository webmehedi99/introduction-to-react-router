import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user =useLoaderData() ;
    const {name, website} = user ;
    return (
        <div>
           <h2>Show About User Details :{name}</h2>
           <p>Website : {website}</p>  
        </div>
    );
};

export default UserDetails;