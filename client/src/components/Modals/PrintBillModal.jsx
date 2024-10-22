import React from 'react';
import Modal from "../Portals/Modal.jsx";
import Button from "../UI/Button.jsx";
import CustomTable from "../CustomTable/CustomTable.jsx";

const PrintBillModal = ({onOpen, onClose}) => {

    const data = [
        {
            id: 1,
            title: "Elma",
            imageUrl: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
            price: 55,
            quantity: 65,
        },
        {
            id: 2,
            title: "Elma",
            imageUrl: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
            price: 55,
            quantity: 65,
        },
        {
            id: 3,
            title: "Elma",
            imageUrl: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
            price: 55,
            quantity: 65,
        }
    ]

    const columns = [
        {
            key: "productImage",
            value: "Image",
            className: "bill-image h-[80px]",
            width: "80px",
            render: (item) => {
                return (
                    <img src={item.imageUrl} className="w-full h-full object-cover" alt={item.title} />
                )
            }
        },
        {
            key: "productTitle",
            value: "Name",
            className: "bill-title",
            width: "300px",
            render: (item) => {
                return (
                    <strong>{item.title}</strong>
                )
            }
        },
        {
            key: "productPrice",
            value: "Price",
            className: "bill-price",
            width: "100px",
            render: (item) => {
                return item.price
            }
        },
        {
            key: "productQuantity",
            value: "Quantity",
            className: "bill-quantity",
            width: "100px",
            render: (item) => {
                return item.quantity
            }
        },
        {
            key: "productTotal",
            value: "Total",
            className: "bill-total",
            width: "200px",
            render: (item) => {
                return item.price * item.quantity
            }
        }
    ]

    return (
        <Modal title="Print Bill" onOpen={onOpen} onClose={onClose} className="print-bill-modal">
            <div className="border border-border-color p-4 flex flex-col gap-y-3">
                <div className="logo">
                    <span className="text-4xl tracking-wide font-semibold">LOGO</span>
                </div>

                <div className="bill-info flex flex-col gap-y-3 sm:flex-row items-center justify-center text-center sm:text-left sm:justify-between">
                    <div className="text-sm">
                        <h3 className="font-semibold">Bill Detail</h3>
                        <ul className="flex flex-col gap-y-1 text-slate-700">
                            <li>Market Name</li>
                            <li>Hidden St. 1234 Dallas, TX</li>
                        </ul>
                    </div>

                    <div className="text-sm flex flex-col items-center gap-y-2">
                        <div>
                            <h3 className="font-semibold">Bill Number</h3>
                            <span className="text-slate-700">INV-000001</span>
                        </div>
                        <div>
                            <h3 className="font-semibold">Date of issue</h3>
                            <span className="text-slate-700">10.21.2024</span>
                        </div>
                    </div>
                </div>

                <div className="mt-2 overflow-x-auto">
                    <CustomTable tableKey="id" tableClass="bill-print-table" data={data} columns={columns} />
                </div>

                <div className="flex justify-end my-2">
                    <div className="border border-border-color rounded-lg p-4 w-full sm:w-1/2 flex flex-col gap-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">Subtotal</h3>
                            <span className="text-lg">$255</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">Tax</h3>
                            <span className="text-lg text-danger">6%</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-xl">Total</h3>
                            <span className="text-2xl">$260</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-2 text-xs">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloremque illo
                        incidunt inventore ratione reiciendis ullam vitae. Ad amet atque consequuntur cumque cupiditate
                        ducimus est eum incidunt ipsum maiores minus nulla officiis pariatur, perferendis quas quasi
                        repellat, similique soluta totam velit. Magni minima quas similique sint tempora! Doloribus,
                        officiis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloremque illo
                        incidunt inventore ratione reiciendis ullam vitae. Ad amet atque consequuntur cumque cupiditate
                        ducimus est eum incidunt ipsum maiores minus nulla officiis pariatur, perferendis quas quasi
                        repellat, similique soluta totam velit. Magni minima quas similique sint tempora! Doloribus,
                        officiis.
                    </p>
                </div>
            </div>
            <div className="flex justify-end">
                <Button className="!m-0" type="primary">Print</Button>
            </div>
        </Modal>
    );
};

export default PrintBillModal;