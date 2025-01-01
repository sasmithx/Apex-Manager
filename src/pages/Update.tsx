import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { CustomerModal } from "../components/CustomerModal.tsx";
import { Customer } from "../models/Customer";
import { CustomerContext } from "../store/CustomerProvider.tsx";
import { ItemContext } from "../store/ItemProvider.tsx";
import { Item } from "../models/Item.ts";
import { ItemModal } from "../components/ItemModal.tsx";

export function Update() {
    const navigate = useNavigate();

    // Retrieve context for customers and items
    const [customers, dispatch] = useContext(CustomerContext) || [[], () => {}];
    const [items, idispatch] = useContext(ItemContext) || [[], () => {}];

    /* Customer State */
    const [id,setId] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    /* Item State */
    const [itemId, setItemId] = useState("");
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    function handleCustomerSubmit() {
        const updatedCustomer = new Customer(id,name, email, phone);
        dispatch({ type: "UPDATE_CUSTOMER", payload: updatedCustomer });
        navigate("/");
    }

    function handleItemSubmit() {
        const updatedItem = new Item(itemId,itemName, Number(price), Number(quantity));
        idispatch({ type: "UPDATE_ITEM", payload: updatedItem });
        navigate("/");
    }

    return (
        <div className="p-6">
            {/* Main Section */}
            <div className="grid grid-cols-2 gap-6">
                {/* Customer Update Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <header>
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">
                            Update Customer
                        </h2>
                    </header>
                    <CustomerModal
                        handleSubmit={handleCustomerSubmit}
                        setId={setId}
                        setName={setName}
                        setEmail={setEmail}
                        setPhone={setPhone}
                    >
                        Update Customer
                    </CustomerModal>
                </div>

                {/* Item Update Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <header>
                        <h2 className="text-2xl font-bold text-gray-700 mb-4">
                            Update Item
                        </h2>
                    </header>
                    <ItemModal
                        handleSubmitClick={handleItemSubmit}
                        setItemID={setItemId}
                        setItemName={setItemName}
                        setPrice={setPrice}
                        setQuantity={setQuantity}
                    >
                        Update Item
                    </ItemModal>
                </div>
            </div>
        </div>
    );
}
