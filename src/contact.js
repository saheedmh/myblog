const Contact = (props) => {
    console.log(props)
    return ( 
        <div className="Contact">
            <h1>Contact Page</h1>
            <h2>{props.name} {props.location} {props.phone}</h2>
        </div>
     );
}
 
export default Contact;