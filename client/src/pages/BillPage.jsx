import React, {useState} from 'react';
import CustomTable from "../components/CustomTable/CustomTable.jsx";
import Container from "../components/UI/Container.jsx";
import {billData} from "../libs/dummyData.js";
import PrintBillModal from "../components/Modals/PrintBillModal.jsx";

const BillPage = () => {

    const [isPrintBillModalOpen, setIsPrintBillModalOpen] = useState(false)

    const columns = [
        {
            key: "billNo",
            value: "Bill No",
            width: "300px",
            className: "bill-no",
            render: (item) => {
                return item.billNo
            }
        },
        {
            key: "createdAt",
            value: "Created At",
            className: "created-at",
            width: "20%",
            render: (item) => {
                return (
                    <span>{item.createdAt}</span>
                )
            }
        },
        {
            key: "paymentMethod",
            value: "Payment Method",
            className: "payment-method",
            width: "250px",
            render: (item) => {
                return item.paymentMethod  === "cash" ? "Cash" : "Credit Cart"
            }
        },
        {
            key: "totalPrice",
            value: "Total Price",
            className: "total-price",
            width: "400px",
            render: (item) => {
                return (
                    <span>{item.totalPrice}</span>
                )
            }
        },
        {
            key: "action",
            value: "Print",
            className: "action",
            width: "250px",
            render: (item) => {
                return (
                    <button className="text-blue-500" onClick={() => {
                        setIsPrintBillModalOpen(true)
                    }}>Print</button>
                )
            }
        }
    ]

    return (
        <div className="mt-7 pb-24 md:pb-5">
            <h1 className="text-center text-3xl">Bills</h1>
            <Container>
                <div className="table-wrapper mt-5 overflow-auto">
                    <CustomTable data={billData} tableClass="bill-table" columns={columns} tableKey="id" />
                </div>
            </Container>

            <PrintBillModal onOpen={isPrintBillModalOpen} onClose={() => setIsPrintBillModalOpen(false)} />
        </div>
    );
};

export default BillPage;