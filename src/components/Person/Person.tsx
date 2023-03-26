import * as React from 'react';
import styles from './Person.module.css';
import { useState } from "react";

type Props = {
    name: string;
    image: string
    onTimeSelected: (type: 'daily' | 'weekly' | 'monthly') => void
};

export default function Person(props: Props) {
    const [frameSelected, setFrameSelected] = useState<'daily' | 'weekly' | 'monthly'>('weekly');

    function onFrameSelected(frame: 'daily' | 'weekly' | 'monthly') {
        props.onTimeSelected(frame);
        setFrameSelected(frame);
    }

    return (
        <div className={styles.Person}>
            <div className={styles.profile}>
                <img src={props.image} alt="profile"/>
                <span className={styles.title}>Report for</span>
                <span className={styles.name}>Jeremy <br/> Robson</span>
            </div>
            <div className={styles.time_container}>
                <div className={styles.time}>
                    <span className={frameSelected === 'daily' ? styles.selected : ''} onClick={() => onFrameSelected('daily')}>Daily</span>
                    <span className={frameSelected === 'weekly' ? styles.selected : ''} onClick={() => onFrameSelected('weekly')}>Weekly</span>
                    <span className={frameSelected === 'monthly' ? styles.selected : ''} onClick={() => onFrameSelected('monthly')}>Monthly</span>
                </div>
            </div>
        </div>
    );
};