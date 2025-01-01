export function ItemModal(props, children) {
    return (
        <>
            <input type="text" placeholder='Item ID' onChange={(e) => props.setItemID(e.target.value)}/>
            <input type="text" placeholder='Name' onChange={(e) => props.setItemName(e.target.value)}/>
            <input type="text" placeholder='price' onChange={(e) => props.setPrice(e.target.value)}/>
            <input type="text" placeholder='quantity' onChange={(e) => props.setQuantity(e.target.value)}/>

            <br/>
            <button onClick={props.handleSubmitClick}>{props.children}</button>
        </>
    );
}