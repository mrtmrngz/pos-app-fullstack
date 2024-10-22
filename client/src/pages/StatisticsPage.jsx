import React from 'react';
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


const StatisticsPage = () => {


    const data2 = [
        {
            name: "Ocak",
            satisMiktari: 12,
            toplamKazanc: 3700
        },
        {
            name: "Şubat",
            satisMiktari: 120,
            toplamKazanc: 37000
        },
        {
            name: "Mart",
            satisMiktari: 18,
            toplamKazanc: 3800
        },
        {
            name: "Nisan",
            satisMiktari: 6700,
            toplamKazanc: 375000
        },
        {
            name: "Mayıs",
            satisMiktari: 120,
            toplamKazanc: 37000
        },
        {
            name: "Haziran",
            satisMiktari: 3500,
            toplamKazanc: 852000
        },
        {
            name: "Temmuz",
            satisMiktari: 550,
            toplamKazanc: 82500
        },
        {
            name: "Ağustos",
            satisMiktari: 620,
            toplamKazanc: 255000
        },
        {
            name: "Eylül",
            satisMiktari: 6200,
            toplamKazanc: 25500
        },
        {
            name: "Ekim",
            satisMiktari: 620,
            toplamKazanc: 255000
        },
        {
            name: "Kasım",
            satisMiktari: 620,
            toplamKazanc: 255000
        },
        {
            name: "Aralık",
            satisMiktari: 620,
            toplamKazanc: 255000
        }
    ]

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
                                <h2>35</h2>
                            </div>
                        </div>
                        <div className="border border-border-color rounded-xl p-5 flex flex-col gap-y-3">
                            <div
                                className="title flex gap-x-1 items-center justify-center text-2xl md:text-lg 2xl:text-2xl">
                                <FaBoxes className="text-[#ad8762]"/>
                                <h3>Total Products Sold</h3>
                            </div>
                            <div className="desc font-semibold text-center text-3xl md:text-2xl 2xl:text-3xl">
                                <h2>22</h2>
                            </div>
                        </div>
                        <div className="border border-border-color rounded-xl p-5 flex flex-col gap-y-3">
                            <div
                                className="title flex gap-x-1 items-center justify-center text-2xl md:text-lg 2xl:text-2xl">
                                <FaMoneyBillWave className="text-[#85bb65]"/>
                                <h3>Total Income</h3>
                            </div>
                            <div className="desc font-semibold text-center text-3xl md:text-2xl 2xl:text-3xl">
                                <h2>$625.000</h2>
                            </div>
                        </div>
                        <div className="border border-border-color rounded-xl p-5 flex flex-col gap-y-3">
                            <div
                                className="title flex gap-x-1 items-center justify-center text-2xl md:text-lg 2xl:text-2xl">
                                <FaStar className="text-yellow-400"/>
                                <h3>Best Sellings Product</h3>
                            </div>
                            <div className="desc font-semibold text-center text-3xl md:text-2xl 2xl:text-3xl">
                                <h2>$625.000</h2>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-5">
                        <div className="h-[300px] overflow-x-auto">
                            <ResponsiveContainer width="100%" minWidth={768}>
                                <BarChart
                                    data={data2}
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