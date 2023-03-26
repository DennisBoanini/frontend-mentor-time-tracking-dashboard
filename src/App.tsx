import styles from './App.module.css'
import Person from "./components/Person/Person";
import jeremy from '../public/image-jeremy.png'
import React, { useState } from "react";
import { Activity } from "./components/Activity/Activity";
import data from './data.json';

function App() {
    const [frameSelected, setFrameSelected] = useState<'daily' | 'weekly' | 'monthly'>('weekly');

    return (
        <div className={styles.App}>
            <Person name={'Jeremy Robson'} image={jeremy} onTimeSelected={frame => setFrameSelected(frame)}/>
            <div className={styles.activities}>
                {data.map((activity, index) => (
                    <Activity key={index} activity={activity} frame={frameSelected}/>
                ))}
            </div>
        </div>
    )
}

export default App
