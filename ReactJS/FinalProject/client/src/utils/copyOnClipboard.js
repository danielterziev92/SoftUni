import {toast} from "react-hot-toast";

import clipboard from 'clipboard-copy';


export default async function copyOnClipboard(value) {
    try {
        await clipboard(value);
        toast.success(`${value} беше копиран в клипборда`);
    } catch (error) {
        toast.error('Грешка при копирането в клипборда');
    }
}