import { ScaleIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import StockDialog from "./Dialog/StockDialog";
const cards = [
    { name: "Account total balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
    { name: "Account Debit", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
    { name: "Account Credit", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
    { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
];
export default function Overview() {
    const [isActive, setIsActive] = useState(false)
    const [productData, setProductData] = useState({ product: '', productType: '', productPrice: '', productQuantity: '' })
    console.log(productData);
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-gray-900">
                    Overview
                </h1>
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    onClick={() => setIsActive(true)}
                >
                    Export
                </button>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => (
                    <div
                        key={card.name}
                        className="bg-white overflow-hidden shadow rounded-lg"
                    >
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <card.icon
                                        className="h-6 w-6 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                            {card.name}
                                        </dt>
                                        <dd>
                                            <div className="text-lg font-medium text-gray-900">
                                                {card.amount}
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                            <div className="text-sm">
                                <a
                                    href={card.href}
                                    className="font-medium text-cyan-700 hover:text-cyan-900"
                                ></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <StockDialog
                isActive={isActive}
                deaActive={() => setIsActive(false)}
                setProductData={setProductData}
                productData={productData}
            />
        </div>
    );
}