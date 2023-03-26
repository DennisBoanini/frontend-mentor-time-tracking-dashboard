import * as React from 'react';
import styles from './Activity.module.css';
import { ActivityFrame } from "../../models/ActivityFrame.model";

type Props = {
    activity: ActivityFrame;
    frame: 'daily' | 'weekly' | 'monthly';
};

export function Activity(props: Props) {
    function getLastLabel() {
        switch (props.frame) {
            case "weekly":
                return `Last Week - ${props.activity.timeframes[props.frame].previous}hrs`;
            case "daily":
                return `Last Day - ${props.activity.timeframes[props.frame].previous}hrs`;
            case "monthly":
                return `Last Month - ${props.activity.timeframes[props.frame].previous}hrs`;
        }
    }

    return (
        <div className={`${styles.card} ${styles[props.activity.title.split(' ').join('-').toLowerCase()]}`}>
            <div className={styles.info}>
                <div className={styles.title}>
                    <span>{props.activity.title}</span>
                    <img src="./public/icon-ellipsis.svg" alt={props.activity.title}/>
                </div>
                <div className={styles.times}>
                    <span className={styles.actual}>{props.activity.timeframes[props.frame].current}hrs</span>
                    <span className={styles.last}>{getLastLabel()}</span>
                </div>
            </div>
        </div>
    );
};