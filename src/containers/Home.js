import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import styles from './Home.modules.css';
const Home = () => {
    const { setTestState } = useStoreActions(action => action.testModel);
    const { name } = useStoreState(state => state.testModel);


    useEffect(() => {
        const name = "Aniket";
        setTestState({ name });
    }, []);

    return (
        <>
            <div className={styles.homeContainer}>
                <div className={styles.title}> Hey {name}, Welcome to the home page </div>
                <div className={styles.introImage}> <img src="../../public/assets/images/UnderDevelopment.jpeg" alt="Under Development" /> </div>
            </div>
        </>
    );
};

export default Home;