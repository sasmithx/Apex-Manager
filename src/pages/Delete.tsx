import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { Customer } from "../models/Customer";
import { CustomerModal } from "../components/CustomerModal.tsx";
import { CustomerContext } from "../store/CustomerProvider.tsx";
import { ItemContext } from "../store/ItemProvider.tsx";
import { Item } from "../models/Item.ts";
import { ItemModal } from "../components/ItemModal.tsx";

export function Delete() {
    const navigate = useNavigate();

    const [customers, dispatch] = useContext(CustomerContext);
    const [items, idispatch] = useContext(ItemContext);

    /*Customer*/
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    /*Item*/
    const [itemId, setItemId] = useState("");
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    function handleSubmit() {
        const deleteCustomer = new Customer(name, email, phone);
        dispatch({ type: 'DELETE_CUSTOMER', payload: deleteCustomer });
        navigate('/');
    }

    function handleSubmitClick() {
        const deleteItem = new Item(itemId,itemName, Number(price), Number(quantity));
        idispatch({ type: 'DELETE_ITEM', payload: deleteItem });
        navigate('/');
    }

    return (
        <div className="p-6">
            {/*Main Section*/}
            <div className="grid grid-cols-2">
                {/*Customer*/}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <header><h2 className="text-2xl font-bold text-gray-700 mb-4">Delete Customer</h2></header>
                    <br />
                    <CustomerModal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} setPhone={setPhone}>
                        Delete Customer
                    </CustomerModal>
                </div>
                {/*Item*/}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <header><h2 className="text-2xl font-bold text-gray-700 mb-4">Delete Item</h2></header>
                    <br />
                    <ItemModal handleSubmitClick={handleSubmitClick} setItemID={setItemId} setItemName={setItemName} setPrice={setPrice} setQuantity={setQuantity}>
                        Delete Item
                    </ItemModal>
                </div>
            </div>
        </div>
    );
}
