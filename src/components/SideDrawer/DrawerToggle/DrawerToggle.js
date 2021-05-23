import styles from './drawer-toggle.module.css';
const DrawerToggle = (props) => (
    <div className={styles.drawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);
export default DrawerToggle;