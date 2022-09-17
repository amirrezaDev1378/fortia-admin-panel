import React, {FC} from 'react';
import {Show} from "react-haiku";

export type ErrorTypes = {
    isLoading: boolean;
    hasError: boolean;
    hasNoCards: boolean;
}
const Errors:FC<ErrorTypes> = ({isLoading , hasError , hasNoCards}) => {
    return (
        <>
            <Show.When isTrue={isLoading && !hasError}>
                <div>Loading...</div>
            </Show.When>

            <Show.When isTrue={hasError}>
                <div>Error</div>
            </Show.When>

            <Show.When isTrue={hasNoCards}>
                <div>
                    <h1>No cards Found</h1>
                </div>
            </Show.When>
        </>
    );
};

export default Errors;
