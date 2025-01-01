import { useContext } from 'react';
import { Customer } from '../models/Customer';
import { CustomerContext } from '../store/CustomerProvider.tsx';
import { ItemContext } from '../store/ItemProvider.tsx';
import { Item } from '../models/Item.ts';

// Import Heroicons
import { UsersIcon, CubeIcon, TagIcon, UserIcon, EnvelopeIcon, CurrencyDollarIcon, HashtagIcon, PhoneIcon  } from '@heroicons/react/24/solid';
import {ClockModal} from "../components/ClockModal.tsx";

// Import DigitalClock component


export function Dashboard() {
    // Retrieve customers from CustomerContext
    const [customers] = useContext(CustomerContext) || [[], () => {}];

    // Retrieve items from ItemContext
    const [items] = useContext(ItemContext) || [[], () => {}];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Dashboard</h1>

            {/* Digital Clock */}
            <div >
                <ClockModal />
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Customer Count Card */}
                <div className="bg-gray-700 text-white rounded-lg shadow-md p-6 flex items-center">
                    <UsersIcon className="h-12 w-12 text-white mr-4" />
                    <div>
                        <h2 className="text-2xl font-semibold">Customer Count</h2>
                        <p className="text-4xl font-bold mt-2">{customers.length}</p>
                    </div>
                </div>

                {/* Item Count Card */}
                <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 flex items-center">
                    <CubeIcon className="h-12 w-12 text-white mr-4" />
                    <div>
                        <h2 className="text-2xl font-semibold">Item Count</h2>
                        <p className="text-4xl font-bold mt-2">{items.length}</p>
                    </div>
                </div>
            </div>

            {/* Main Section */}
            <div className="grid grid-cols-2">
            {/* Left: Customers */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-1 text-custom-color">
                        Customers
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {customers.map((customer: Customer) => (
                            <div
                                key={customer.id} // Assuming id is unique
                                className="bg-rose-100 shadow-md rounded-lg p-4 border border-gray-200"
                            >
                                <div className="flex items-center space-x-2 mb-2">
                                    <TagIcon className="h-6 w-6 text-gray-500"/>
                                    <h2 className="text-lg font-semibold text-blue-600">ID: {customer.id}</h2>
                                </div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <UserIcon className="h-6 w-6 text-gray-500"/>
                                    <h2 className="text-lg font-semibold text-blue-600">Name: {customer.name}</h2>
                                </div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <EnvelopeIcon className="h-6 w-6 text-gray-500"/>
                                    <p className="text-gray-600">Email: {customer.email}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <PhoneIcon className="h-6 w-6 text-gray-500"/>
                                    <p className="text-gray-600">Phone: {customer.phone}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Items */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">Items</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {items.map((item: Item) => (
                            <div
                                key={item.itemId} // Assuming itemID is unique
                                className="bg-emerald-100 shadow-md rounded-lg p-4 border border-gray-200"
                            >
                                <div className="flex items-center space-x-2 mb-2">
                                    <TagIcon className="h-6 w-6 text-gray-500"/>
                                    <h2 className="text-lg font-semibold text-blue-600">ID: {item.itemId}</h2>
                                </div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <CubeIcon className="h-6 w-6 text-gray-500"/>
                                    <h2 className="text-lg font-semibold text-blue-600">Name: {item.itemName}</h2>
                                </div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <CurrencyDollarIcon className="h-6 w-6 text-gray-500"/>
                                    <p className="text-gray-600">Price: ${item.price}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <HashtagIcon className="h-6 w-6 text-gray-500"/>
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
