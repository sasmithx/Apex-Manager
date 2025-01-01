import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {Customer} from "../models/Customer.ts";
import {CustomerModal} from "../components/CustomerModal.tsx";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Item} from "../models/Item.ts";
import {ItemModal} from "../components/ItemModal.tsx";
import {ItemContext} from "../store/ItemProvider.tsx";

export function Add() {

    const navigate = useNavigate();

    const [customers, dispatch] = useContext(CustomerContext);

    const [items, idispatch] = useContext(ItemContext)

    /*Customer*/
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    /*Item*/
    const [itemId, setItemId] = useState("");
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(id,name, email, phone);
        dispatch({type:'ADD_CUSTOMER', payload:newCustomer});
        navigate('/');
    }

    function handleSubmitClick(){
        const newItem = new Item(itemId,itemName,Number(price),Number(quantity));
        idispatch({type:'ADD_ITEM', payload:newItem});
        navigate('/');
    }

    return (
        <div className="p-6">
            {/*Main Section*/}
            <div className="grid grid-cols-2">
                {/*Customer*/}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <header>
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Add Customer</h2>
                    </header>
                    <br/>

                    <CustomerModal
                        handleSubmit={handleSubmit}
                        setId={setId}
                        setName={setName}
                        setEmail={setEmail}
                        setPhone={setPhone}
                    >
                        Add Customer
                    </CustomerModal>
                </div>
                {/*Item*/}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <header>
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">Add Item</h2>
                    </header>
                    <br/>

                    <ItemModal
                        handleSubmitClick={handleSubmitClick}
                        setItemID={setItemId}
                        setItemName={setItemName}
                        setPrice={setPrice}
                        setQuantity={setQuantity}
                    >
                        Add Item
                    </ItemModal>
                </div>
            </div>
        </div>
    );
}