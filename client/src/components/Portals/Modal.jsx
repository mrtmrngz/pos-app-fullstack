import ReactDOM from 'react-dom'
import { IoMdClose } from "react-icons/io";


const BackDrop = (props) => {
    return <div onClick={props.onClose} className={`backdrop fixed inset-0 w-full h-full z-[650] ${props.onOpen ? "active" : ""} ${props.className ? props.className : ""} ${props.isSecondModal ? "bg-transparent" : "bg-black/55"}`}/>
}

const ModalContent = (props) => {
    return (
        <div className={`modal-wrapper max-h-[500px] overflow-auto ${props.onOpen ? "active" : ""} ${props.className ? props.className : ""}`}>
            <div className="wrapper p-5 flex flex-col gap-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-xl">{props.title}</h3>
                    <button onClick={props.onClose} className="w-7 h-7 flex items-center justify-center hover:bg-soft-gray cursor-pointer">
                        <IoMdClose size={20} />
                    </button>
                </div>
                {props.children}
            </div>
        </div>
    )
}

const Modal = ({children, title, onOpen, onClose, className, isSecondModal=false}) => {
    const modalHTMLElement = document.getElementById('modal')
    return (
        <>

            {ReactDOM.createPortal(<BackDrop onOpen={onOpen} isSecondModal={isSecondModal} className={className} onClose={onClose} />, modalHTMLElement)}

            {ReactDOM.createPortal(<ModalContent title={title} isSecondModal={isSecondModal} className={className} onOpen={onOpen} onClose={onClose}>{children}</ModalContent>, modalHTMLElement)}

        </>
    );
};

export default Modal;