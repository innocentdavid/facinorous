import React from "react";
import ReactModal from "react-modal";

// type Props = {
//     isOpen: boolean;
//     message: string;
//     onResquestClose: () => void;
//     onClose: () => void;
// };

export default function CustomeAlert(props) {
    return (
        <ReactModal isOpen={props.isOpen} onResquestClose={props.onClose}>
            <div className="p-4 bg-red-500 text-white">
                <p className="">{props.message}</p>
                <button onClick={props.onClose} className="p-2 bg-white text-black">
                    close
                </button>
            </div>
        </ReactModal>
    );
}