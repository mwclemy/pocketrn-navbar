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
                    {props.open ?
                        <svg className={styles.closeButton} style={{ width: '24px', height: '24px' }} onClick={props.clicked} viewBox="0 0 24 24">
                            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                        </svg>
                        : null}
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
}

export default SideDrawer;