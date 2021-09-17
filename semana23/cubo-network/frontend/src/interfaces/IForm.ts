import React from "react";
export default interface IForm {
    form: Record<string,  unknown>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void
}