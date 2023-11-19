// import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";
// import {useState} from "react";
//
// const initialMessageModalData = {
//     showModal: false,
//     title: '',
//     message: '',
//     successButtonMessage: '',
//     errorButtonMessage: '',
//     successButtonHandler: null,
//     errorButtonHandler: null,
// }
//
//
// export default function ProductDetailMessageBox({closeMessageModal}) {
//     const [messageModalData, setMessageModalData] = useState(initialMessageModalData);
//
//     const closeMessageModal = () => setMessageModalData(state => ({...state, showModal: false}));
//
//     return (
//         <MessageBoxModal
//             {...messageModalData}
//             setMessageModalData={setMessageModalData}
//             closeModalHanlder={closeMessageModal}
//         />
//     );
// }