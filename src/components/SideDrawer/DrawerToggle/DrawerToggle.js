import styles from './drawer-toggle.module.css';
const DrawerToggle = (props) => (
    <div className={styles.drawerToggle} onClick={props.clicked}>
        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
    </div>
);
export default DrawerToggle;