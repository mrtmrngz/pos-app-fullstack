import Modal from "../Portals/Modal.jsx";
import {Form, Formik} from "formik";
import CustomInput from "../Form/CustomInput.jsx";
import CustomSelect from "../Form/CustomSelect.jsx";
import Button from "../UI/Button.jsx";

const CheckoutModal = ({onOpen, onClose, setIsCheckOutModalOpen}) => {

    const formInitialValues = {
        totalProduct: 4,
        totalPrice: 300,
        paymentMethod: "",
        cartItems: []
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

    const handleSubmit = (values, actions) => {
        console.log(values)
        setIsCheckOutModalOpen(false)
    }

    return (
        <Modal title="Checkout" onOpen={onOpen} onClose={onClose}>
            <Formik initialValues={formInitialValues} onSubmit={handleSubmit}>
                {({values}) => (
                    <Form>

                        <CustomSelect label="Payment Method" data={paymentMethods} selectTitle="Select a Payment Method" htmlFor="paymentMethod" id="paymentMethod" name="paymentMethod" />

                        <div className="border border-border-color mt-5 p-5 flex flex-col gap-y-3">
                            <div className="flex items-center justify-between">
                                <strong>Sub Total:</strong>
                                <span className="text-lg">${values.totalPrice}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <strong className="text-danger">Tax</strong>
                                <span className="text-lg text-danger">6%</span>
                            </div>
                            <div className="flex items-center justify-between text-xl">
                                <strong>Total:</strong>
                                <span>${values.totalPrice}</span>
                            </div>
                        </div>

                        <div className="mt-5 flex justify-end">
                            <Button className="!m-0" htmlType="submit" type="primary">Checkout</Button>
                        </div>

                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default CheckoutModal;