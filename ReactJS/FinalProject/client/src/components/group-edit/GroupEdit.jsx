import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";

import useForm from "../../hooks/useForm.js";

export default function GroupEdit({groupData, allCategories, hideModal, updateHandler}) {
    const {formValue, updateFormValue, changeDataHandler, onSubmitForm} = useForm(groupData, updateHandler);

    function EditGroupModalBody() {
        return (
            <>
                <div>
                    <label htmlFor="code">Код: </label>
                    <input type="text" name="code" value={formValue.code} onChange={changeDataHandler}/>
                </div>
                <div>
                    <label htmlFor="code">Име: </label>
                    <input type="text" name="name" value={formValue.name} onChange={changeDataHandler}/>
                </div>
                <select name="parent_category" id="parent_category">
                    <option value={null}>Главна категория</option>
                    {allCategories.map(category => (
                        <option key={category.id} value={category.id}
                                selected={category.name === groupData.parent_category_name}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </>
        )
    }

    return (
        <MessageBoxModal
            title={'Изтриване на продукт'}
            body={<EditGroupModalBody/>}
            closeModalHanlder={hideModal}
            errorButtonMessage={'Отказ'}
            errorButtonHandler={hideModal}
            successButtonMessage={'Да'}
            successButtonHandler={() => onSubmitForm()}
        />
    );
}