import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";

import useForm from "../../hooks/useForm.js";

const FormKey = {
    Code: 'code',
    Name: 'name',
    ParentCategory: 'parent_category',
}

export default function GroupAdd({allGroups, hideModal, setNewGroup}) {
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
                    <div>
                        <label htmlFor={FormKey.Name}>Име:</label>
                        <input type="text" id={FormKey.Name} name={FormKey.Name} value={formValue[FormKey.Name]}
                               onChange={changeDataHandler}/>
                    </div>
                    <select
                        name="parent_category_name"
                        value={formValue.parent_category_name || ''}
                        onChange={changeDataHandler}>
                        <option value="">Главна категория</option>
                        {allGroups.map(category => (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </form>}
            errorButtonMessage={'Отказ'}
            errorButtonHandler={hideModal}
            successButtonMessage={'Запази'}
            successButtonHandler={onSubmitForm}
            closeModalHanlder={hideModal}
        />
    );
}