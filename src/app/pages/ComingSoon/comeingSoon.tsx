"use client";
import React, { useEffect, useState } from 'react';
import styles from './ComingSoon.module.css';
import comingSoonImg from '../../assets/Images/comeing-soon.webp';
import Image from 'next/image';

// Define the Countdown interface with days
interface Countdown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const ComingSoon: React.FC = () => {
    // Define the target date and time
    const targetDate = new Date('2025-01-01T12:00:00Z'); // Example date
    const targetTimestamp = targetDate.getTime(); // Convert to timestamp

    // State to store the countdown values
    const [countdown, setCountdown] = useState<Countdown>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Function to calculate and update countdown
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetTimestamp - now;

        if (distance < 0) {
            setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });
        }
    };

    useEffect(() => {
        const countdownInterval = setInterval(updateCountdown, 1000);
        return () => clearInterval(countdownInterval); // Clear interval on unmount
    }, []);

    return (
        <div className={styles.comingSoonWrapper}>
            <div className={styles.comingSoonBox}>
                <div className={styles.comingSoonImg}>
                    <Image
                        priority={true}
                        src={comingSoonImg}
                        width={797}
                        height={602}
                        alt='coming soon img'
                        className={styles.imgFluid}
                    />
                    <div className={styles.clock}>
                        <ul>
                            <li>
                                <div className={styles.circle}>
                                    <span id="days">{countdown.days}</span>
                                </div>
                                Day{countdown.days !== 1 ? 's' : ''}
                            </li>
                            <li>
                                <div className={styles.circle}>
                                    <span id="hours">{countdown.hours}</span>
                                </div>
                                Hours
                            </li>
                            <li>
                                <div className={styles.circle}>
                                    <span id="minutes">{countdown.minutes}</span>
                                </div>
                                Min
                            </li>
                            <li>
                                <div className={styles.circle}>
                                    <span id="seconds">{countdown.seconds}</span>
                                </div>
                                Sec
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
