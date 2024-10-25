import React, {useEffect, useState} from 'react';
import Container from "../components/UI/Container.jsx";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Legend, Line, LineChart, Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import { MdPointOfSale, MdSupervisedUserCircle  } from "react-icons/md";
import { FaMoneyBillWave, FaBoxes, FaStar  } from "react-icons/fa";
import apiRequest from "../libs/apiRequest.js";
import Spinner from "../components/UI/Spinner.jsx";
import priceFormat from "../libs/priceFormat.js";


const StatisticsPage = () => {

    const [bills, setBills] = useState([])
    const [billItems, setBillItems] = useState([])
    const [loading, setLoading] = useState(false)
    const totalIncome = bills.reduce((total, item) => total + item.totalAmount, 0)
    const totalProductSold = billItems.reduce((total, item) => total + item.quantity, 0)
    const mostSoldProduct = billItems.length > 0
        ? billItems.reduce((max, product) => product.quantity > max.quantity ? product : max)
        : null;
    const statsData = bills.reduce((acc, bill) => {
        const datePart = bill.date.substring(0, 10);
        const [year, month] = datePart.split("-");

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const longMonth = monthNames[parseInt(month, 10) - 1];

        if(!acc[longMonth]) {
            acc[longMonth] = {
                name: longMonth,
                satisMiktari: 0,
                toplamKazanc: 0
            }
        }

        const monthlySales = billItems.reduce((total, item) => total + item.quantity, 0);
        const monthlyIncome = billItems.reduce((total, item) => total + (item.quantity * item.price), 0);

        acc[longMonth].satisMiktari += monthlySales
        acc[longMonth].toplamKazanc += monthlyIncome
        return acc
    }, {})

    const statsArray = Object.values(statsData)


    useEffect(() => {
        const fetchBills = async () => {
            setLoading(true)
            try {
                const res = await apiRequest.get('/bills')
                setBills(res.data)
                setBillItems(res.data.flatMap(item => {
                    return item.cartItems
                }))
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
        <div className="statics mt-7 overflow-auto pb-24 md:pb-5">
            <h1 className="text-center text-3xl">Statics</h1>
            <Container>
                <div className="mt-5  flex flex-col gap-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                        <div className="border border-border-color rounded-xl p-5 flex flex-col gap-y-3">
                            <div
                                className="title flex gap-x-1 items-center justify-center text-2xl md:text-lg 2xl:text-2xl">
                                <MdPointOfSale className="text-[#a8a3a3]"/>
                                <h3>Total Sales</h3>
                            </div>
                            <div className="desc font-semibold text-center text-3xl md:text-2xl 2xl:text-3xl">
                                <h2>{bills.length}</h2>
                            </div>
                        </div>
                        <div className="border border-border-color rounded-xl p-5 flex flex-col gap-y-3">
                            <div
                                className="title flex gap-x-1 items-center justify-center text-2xl md:text-lg 2xl:text-2xl">
                                <FaBoxes className="text-[#ad8762]"/>
                                <h3>Total Products Sold</h3>
                            </div>
                            <div className="desc font-semibold text-center text-3xl md:text-2xl 2xl:text-3xl">
                                <h2>{totalProductSold}</h2>
                            </div>
                        </div>
                        <div className="border border-border-color rounded-xl p-5 flex flex-col gap-y-3">
                            <div
                                className="title flex gap-x-1 items-center justify-center text-2xl md:text-lg 2xl:text-2xl">
                                <FaMoneyBillWave className="text-[#85bb65]"/>
                                <h3>Total Income</h3>
                            </div>
                            <div className="desc font-semibold text-center text-3xl md:text-2xl 2xl:text-3xl">
                                <h2>{priceFormat(totalIncome)}</h2>
                            </div>
                        </div>
                        <div className="border border-border-color rounded-xl p-5 flex flex-col gap-y-3">
                            <div
                                className="title flex gap-x-1 items-center justify-center text-2xl md:text-lg 2xl:text-2xl">
                                <FaStar className="text-yellow-400"/>
                                <h3>Best Sellings Product</h3>
                            </div>
                            <div className="desc font-semibold text-center text-3xl md:text-2xl 2xl:text-3xl">
                                <h2>{mostSoldProduct?.title}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-5">
                        <div className="h-[300px] overflow-x-auto">
                            <ResponsiveContainer width="100%" minWidth={768}>
                                <BarChart
                                    data={statsArray}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" interval={0} tick={{fontSize: 14}}  tickFormatter={(name) => name.substring(0, 3)} />
                                    <YAxis yAxisId="left" tick={{fontSize: 14}} />
                                    <YAxis yAxisId="right" orientation="right" tick={{fontSize: 14}} />
                                    <Tooltip contentStyle={{fontSize: "14px"}} />
                                    <Legend formatter={(value) => value === "satisMiktari" ? "Satış Miktarı": "Toplam Satış"} wrapperStyle={{fontSize: "12px"}} />
                                    <Bar yAxisId="left" dataKey="satisMiktari" fill="#ff7043" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                                    <Bar yAxisId="right" dataKey="toplamKazanc" fill="#42A5F5" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StatisticsPage;