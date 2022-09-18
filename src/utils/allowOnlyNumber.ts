import React from "react";

export const allowOnlyNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
}
