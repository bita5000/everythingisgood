import React from "react";
import { Menu } from "./model/restaurant";

interface BestMenuProps {
    cookie: Menu;
}
const BestMenu = ({ cookie }: BestMenuProps) => {
    return (
        <div>
            <div>BestMenu</div>
            <div>{cookie.name}</div>
        </div>
    );
};

export default BestMenu;
