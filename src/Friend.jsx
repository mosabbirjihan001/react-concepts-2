export default function Friend ({friend}){
    const {name , email , username , address} = friend;
    return (
        <div className="box">
            <h4>Name :{ name} </h4>
            <p>Email :{ email} </p>
            <p>UserName :{ username} </p>
            <p>Address :{ address.city} </p>
            <p>Zip Code :{ address.zipcode} </p>
            <p>lat :{ address.geo.lat} </p>
            <p>lng :{ address.geo.lng} </p>
        </div>
    )

}