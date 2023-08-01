import React from "react";
import { Restaurant } from "./model/restaurant";

interface OwnProps {
    data: Restaurant;
}

const Store = (props: OwnProps) => {
    return (
        <div>
            <div>테스트입니다</div>
            <div>{props.data.address.city}</div>
        </div>
    );
};

export default Store;
