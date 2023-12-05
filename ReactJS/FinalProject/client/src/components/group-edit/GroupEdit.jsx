import style from './GroupEdit.module.css';

import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";

import useForm from "../../hooks/useForm.js";

const FormKey = {
    Code: 'code',
    Name: 'name'
}

export default function GroupEdit({groupData, allCategories, hideModal, updateHandler}) {
    const {formValue, changeDataHandler, onSubmitForm} = useForm(groupData, updateHandler);

    return (
        <MessageBoxModal
            title={`Редактиране на ${groupData.name}`}
            body={<form onSubmit={onSubmitForm} className={style.groupEdit}>
                <div>
                    <label htmlFor={FormKey.Code}>Код: </label>
                    <input id={FormKey.Code} type="text" name={FormKey.Code} value={formValue[FormKey.Code]}
                           onChange={changeDataHandler}/>
                </div>
                <div>
                    <label htmlFor={FormKey.Name}>Име: </label>
                    <input id={FormKey.Name} type="text" name={FormKey.Name} value={formValue[FormKey.Name]}
                           onChange={changeDataHandler}/>
                </div>
                <select
                    name="parent_category_name"
                    value={formValue.parent_category_name || ''}
                    onChange={changeDataHandler}>
                    <option value="">Главна категория</option>
                    {allCategories.map(category => (
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