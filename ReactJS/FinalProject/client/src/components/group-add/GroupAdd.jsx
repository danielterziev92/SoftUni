import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";

import useForm from "../../hooks/useForm.js";

const FormKey = {
    Code: 'code',
    Name: 'name',
    ParentCategory: 'parent_category',
}

export default function GroupAdd({allGroups, hideModal}) {
    const {formValue, changeDataHandler, onSubmitForm} = useForm({}, onSubmitHandler);

    function onSubmitHandler(data) {
        console.log(data)
    }

    return (
        <MessageBoxModal
            title={'Добавяне на група'}
            body={
                <form onSubmit={onSubmitForm}>
                    <div>
                        <label htmlFor={FormKey.Code}>Код:</label>
                        <input type="text" id={FormKey.Code} name={FormKey.Code} value={formValue[FormKey.Code]}
                               onChange={changeDataHandler}/>
                    </div>

                </form>}
            errorButtonMessage={'Отказ'}
            errorButtonHandler={hideModal}
            successButtonMessage={'Запази'}
            successButtonHandler={onSubmitForm}
            closeModalHanlder={hideModal}
        />
    );
}