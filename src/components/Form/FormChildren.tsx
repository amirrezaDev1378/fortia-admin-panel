import React, {FC, useCallback, useMemo} from "react";
import {FormConfig} from "@components/Form/Form";
import FormError from "@components/Form/FormError";

type formChildrenType = {
    children: React.ReactNode[] | React.ReactNode,
    register: Function,
    errors: any,
    config?: FormConfig
}
const FormChildren: FC<formChildrenType> = ({children, register, errors, config}) => {
    const childrenArray = Array.isArray(children) ? children : [children];

    return (
        <>
            {
                childrenArray.map((Child, i) => {
                    if (React.isValidElement(Child)) {
                        const fieldName = Child.props.name;
                        const isSubmitButton = Child.props?.type === 'submit';
                        const formHasErrors = Object.keys(errors).length !== 0;
                        const otherProps = isSubmitButton ? {disabled: formHasErrors} :register(fieldName);


                        if (!fieldName && !isSubmitButton) {
                            return <></>;
                        }

                        const props = {
                            ...Child.props,
                            ...otherProps,
                        }
                        return <React.Fragment key={i}>
                            {React.cloneElement(Child, {...props})}
                            {errors[fieldName] && <FormError key={`${fieldName} ${i}`} error={errors[fieldName].message}/>}
                        </React.Fragment>
                    }
                })
            }
        </>
    )

}
export default FormChildren;
