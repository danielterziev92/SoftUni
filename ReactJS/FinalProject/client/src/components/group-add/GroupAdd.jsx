import MessageBoxModal from "../message-box-modal/MessageBoxModal.jsx";

import style from './GroupAdd.module.css';

import useMessageContext from "../../hooks/useMessageContext.js";

import useForm from "../../hooks/useForm.js";

const FormKey = {
    Code: 'code',
    Name: 'name',
    ParentCategory: 'parent_category',
}

export default function GroupAdd({allGroups, hideModal, setNewGroup}) {
    const {updateMessage, updateStatus} = useMessageContext();
    const {formValue, changeDataHandler, onSubmitForm} = useForm(
        Object.fromEntries(Object.keys(FormKey).map(key => [FormKey[key], ''])),
        onSubmitHandler
    );

    async function onSubmitHandler(data) {
        if (data.code === '' || data.name === '') {
            updateMessage('Всички полета са задълцителни');
            updateStatus('error');
            return;
        }

        const parentCategoryId = allGroups.find(group => group.name === data?.parent_category)?.id;
        // try {
        //     const response = await addGroup({
        //                     code: data.code,
        //                     name: data.name,
        //                     parent_category: Number(parentCategoryId) || null
        //                 });
        //     setNewGroup(response);
        //     hideModal();
        // } catch (e) {
        //     updateMessage(e);
        //     updateStatus('error');
        // }
    }

    return (
        <MessageBoxModal
            title={'Добавяне на група'}
            body={
                <form onSubmit={onSubmitForm} className={style.groupAddForm}>
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
                        name="parent_category"
                        value={formValue.parent_category_name || ''}
                        onChange={changeDataHandler}>
                        <option value="">Главна категория</option>
                        {/*{allGroups.map(category => (*/}
                        {/*    <option key={category.id} value={category.name}>*/}
                        {/*        {category.name}*/}
                        {/*    </option>*/}
                        {/*))}*/}
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