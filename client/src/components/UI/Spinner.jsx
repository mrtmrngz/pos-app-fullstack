import {HashLoader} from "react-spinners";

const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh_-_80px)] w-full">
            <HashLoader color={"#42A5F5"}/>
        </div>
    );
};

export default Spinner;