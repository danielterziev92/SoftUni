import style from './GroupEdit.module.css';

import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";

import useForm from "../../hooks/useForm.js";

export default function GroupEdit({groupData, allCategories, hideModal, updateHandler}) {
    const {formValue, changeDataHandler, onSubmitForm} = useForm(groupData, updateHandler);


    function EditGroupModalBody() {
        return (
            <form onSubmit={onSubmitForm} className={style.groupEdit}>
                <div>
                    <label htmlFor="code">Код: </label>
                    <input type="text" name="code" value={formValue.code} onChange={changeDataHandler}/>
                </div>
                <div>
                    <label htmlFor="code">Име: </label>
                    <input type="text" name="name" value={formValue.name} onChange={changeDataHandler}/>
                </div>
                <select
                    name="parent_category_name"
                    value={formValue.parent_category_name}
                    onChange={changeDataHandler}>
                    <option value="">Главна категория</option>
                    {allCategories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </form>
        )
    }

    return (
        <MessageBoxModal
            title={`Редактиране на ${groupData.name}`}
            body={<EditGroupModalBody/>}
            errorButtonMessage={'Отказ'}
            errorButtonHandler={hideModal}
            successButtonMessage={'Да'}
            successButtonHandler={onSubmitForm}
            closeModalHanlder={hideModal}
        />
    );
}