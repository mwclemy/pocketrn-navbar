import styles from './tool-bar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../SideDrawer/DrawerToggle/DrawerToggle';
const Toolbar = (props) => (
    <header className={styles.toolBar}>
        <div className={styles.logo}>
            <Logo />
        </div>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <nav className={styles.deskTopOnly}>
            <NavigationItems isAuthenticated={props.isAuthenticated} />
        </nav>
    </header>
);

export default Toolbar;