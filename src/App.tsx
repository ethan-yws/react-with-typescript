import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
    people: {
        name: string;
        age: number;
        url: string;
        note?: string;
    }[];
}

function App() {
    const [people, setPeople] = useState<IState["people"]>([
        {
            name: "LeBron James",
            age: 35,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LeBron_James_crop.jpg/330px-LeBron_James_crop.jpg",
            note: "Need KD!",
        },
    ]);

    return (
        <div className="App">
            <h1>People invited to my Party</h1>
            <List people={people} />
            <AddToList people={people} setPeople={setPeople} />
        </div>
    );
}

export default App;
