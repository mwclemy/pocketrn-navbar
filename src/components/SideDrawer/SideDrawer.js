import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import styles from './side-drawer.module.css'
import Logo from '../Logo/Logo';
const SideDrawer = (props) => {
    let attachedClasses = [styles.sideDrawer, styles.open];
    if (!props.open) {
        attachedClasses = [styles.sideDrawer, styles.close];
    }
    return (
        <>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={styles.sideDrawerHeader}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    {props.open ? <span className={styles.closeButton} onClick={props.clicked}></span> : null}
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
}

export default SideDrawer;