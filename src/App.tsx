import React, { useState } from "react";
import Store from "./Store";
import BestMenu from "./BestMenu";
import { Restaurant } from "./model/restaurant";
import { Menu } from "./model/restaurant";

const App = () => {
    const data = {
        name: "hi",
        category: "wow",
        address: {
            city: "gogo",
            detail: "111",
            zipCode: 2314234
        },
        menu: [
            { name: "eoeoeo", price: 202020, category: "pasta" },
            { name: "dd", price: 333, category: "parrrsta" },
            { name: "rerer", price: 3322, category: "gggd" }
        ]
    };

    const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);

    const cookie: Menu = {
        name: "chococookie",
        price: 3000,
        category: "cookie"
    };

    return (
        <div>
            <Store data={myRestaurant} />
            <BestMenu cookie={cookie} />
        </div>
    );
};

export default App;
