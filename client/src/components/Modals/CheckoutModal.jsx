import Modal from "../Portals/Modal.jsx";
import {Form, Formik} from "formik";
import CustomInput from "../Form/CustomInput.jsx";
import CustomSelect from "../Form/CustomSelect.jsx";
import Button from "../UI/Button.jsx";
import {useCart} from "../../Context/index.js";
import priceFormat from "../../libs/priceFormat.js";
import * as yup from 'yup'
import apiRequest from "../../libs/apiRequest.js";
import {useState} from "react";

const CheckoutModal = ({onOpen, onClose, setIsCheckOutModalOpen}) => {
    const [loading, setLoading] = useState(false)
    const {cartItems, clearCart} = useCart()
    const totalLength = cartItems.reduce((total, item) => total + item.quantity, 0)
    const subTotal = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0)
    const tax = 6

    const formInitialValues = {
        totalProduct: totalLength,
        totalPrice: (subTotal + ((subTotal * tax) / 100)),
        paymentMethod: "",
        cartItems: cartItems
    }

    const paymentMethods = [
        {
            key: "cash",
            value: "Cash"
        },
        {
            key: "creditCart",
            value: "Credit Card"
        }
    ]

    const paymentValidate = yup.object().shape({
        paymentMethod: yup.string().oneOf(["cash", "creditCart"], "Please select payment method!").required("Please select payment method!")
    })

    const handleSubmit = async (values, actions) => {
        setLoading(true)
        const sendedValues = {
            paymentMethod: values.paymentMethod,
            cartItems: cartItems,
            subTotal: parseInt(subTotal),
            tax: parseInt(tax),
            totalAmount: Number((subTotal + ((tax * subTotal) / 100)))
        }

        try {
            const res = await apiRequest.post('/bills', sendedValues)
            setIsCheckOutModalOpen(false)
            clearCart()
            actions.resetForm()
        }catch (err) {
            console.log(err)
        }finally {
            setLoading(false)
        }
    }

    return (
        <Modal title="Checkout" onOpen={onOpen} onClose={onClose}>
            <Formik initialValues={formInitialValues} onSubmit={handleSubmit} validationSchema={paymentValidate}>
                {({values}) => (
                    <Form>

                        <CustomSelect label="Payment Method" data={paymentMethods} selectTitle="Select a Payment Method"
                                      htmlFor="paymentMethod" id="paymentMethod" name="paymentMethod"/>

                        <div className="border border-border-color mt-5 p-5 flex flex-col gap-y-3">
                            <div className="flex items-center justify-between">
                                <strong>Sub Total:</strong>
                                <span className="text-lg">{priceFormat(subTotal)}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <strong className="text-danger">Tax</strong>
                                <span className="text-lg text-danger">{tax}%</span>
                            </div>
                            <div className="flex items-center justify-between text-xl">
                                <strong>Total:</strong>
                                <span>{priceFormat((subTotal + ((tax * subTotal) / 100)))}</span>
                            </div>
                        </div>

                        <div className="mt-5 flex justify-end">
                            <Button disabled={subTotal === 0 || loading} className="!m-0" htmlType="submit"
                                    type="primary">Checkout</Button>
                        </div>

                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default CheckoutModal;