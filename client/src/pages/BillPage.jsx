import React, {useEffect, useState} from 'react';
import CustomTable from "../components/CustomTable/CustomTable.jsx";
import Container from "../components/UI/Container.jsx";
import {billData} from "../libs/dummyData.js";
import PrintBillModal from "../components/Modals/PrintBillModal.jsx";
import Spinner from "../components/UI/Spinner.jsx";
import apiRequest from "../libs/apiRequest.js";
import priceFormat from "../libs/priceFormat.js";

const BillPage = () => {

    const [isPrintBillModalOpen, setIsPrintBillModalOpen] = useState(false)
    const [bills, setBills] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            key: "billNo",
            value: "Bill No",
            width: "400px",
            className: "bill-no",
            render: (item) => {
                return item.billNumber
            }
        },
        {
            key: "createdAt",
            value: "Created At",
            className: "created-at",
            width: "30%",
            render: (item) => {
                const options = {year: 'numeric', month: "long", day: "numeric"}
                const formattedData = new Date(item?.date).toLocaleDateString('en-US', options)
                return (
                    <span>{formattedData}</span>
                )
            }
        },
        {
            key: "paymentMethod",
            value: "Payment Method",
            className: "payment-method",
            width: "300px",
            render: (item) => {
                return item?.paymentMethod  === "cash" ? "Cash" : "Credit Cart"
            }
        },
        {
            key: "totalPrice",
            value: "Total Price",
            className: "total-price",
            width: "400px",
            render: (item) => {
                return (
                    <span>{priceFormat(item?.totalAmount)}</span>
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

    useEffect(() => {
        const fetchBills = async () => {
            setLoading(true)
            try {
                const res = await apiRequest.get('/bills')
                setBills(res.data)
            }catch (err) {
                console.log(err)
            }finally {
                setLoading(false)
            }
        }
        fetchBills()
    }, [])


    if(loading) {
        return <Spinner />
    }

    return (
        <div className="mt-7 pb-24 md:pb-5">
            <h1 className="text-center text-3xl">Bills</h1>
            <Container>
                <div className="table-wrapper mt-5 overflow-auto">
                    <CustomTable data={bills} tableClass="bill-table" columns={columns} tableKey="_id" />
                </div>
            </Container>

            <PrintBillModal onOpen={isPrintBillModalOpen} onClose={() => setIsPrintBillModalOpen(false)} />
        </div>
    );
};

export default BillPage;