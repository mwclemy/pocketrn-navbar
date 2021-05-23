import React from 'react';
import styles from './navigation-item.module.css';
import { NavLink } from 'react-router-dom';
const NavigationItem = (props) => {
    let attachedClasses = [styles.navItem];
    if (props.buttonLink) {
        attachedClasses = [styles.navItem, styles.buttonLink];
    }
    return <li className={attachedClasses.join(' ')}>
        <NavLink
            to={props.link}
            activeClassName={styles.active}
            exact={props.exact}>
            {props.children}
        </NavLink>
    </li>
}
export default NavigationItem;