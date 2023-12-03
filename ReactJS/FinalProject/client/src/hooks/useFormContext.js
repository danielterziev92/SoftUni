import {useContext} from "react";
import {FormContext} from "../contexts/FormContext.js";

export default function useFormContext() {
    return useContext(FormContext);
}