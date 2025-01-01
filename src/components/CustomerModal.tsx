export function CustomerModal(props, children) {
    return (
        <>
            <input type="text" placeholder='Customer ID' onChange={(e) => props.setId(e.target.value)}/>
            <input type="text" placeholder='Name' onChange={(e) => props.setName(e.target.value)}/>
            <input type="text" placeholder='Email' onChange={(e) => props.setEmail(e.target.value)}/>
            <input type="text" placeholder='Phone' onChange={(e) => props.setPhone(e.target.value)}/>

            <br/>
            <button onClick={props.handleSubmit}>{props.children}</button>
        </>
    );
}