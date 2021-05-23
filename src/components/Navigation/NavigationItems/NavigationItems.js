import NavigationItem from './NavigationItem/NavigationItem'
import styles from './navigation-items.module.css';
const NavigationItems = () => (
    <ul className={styles.navItems}>
        <NavigationItem link='/patients' exact>Patient</NavigationItem>
        <NavigationItem link='/caregivers'>Caregivers</NavigationItem>
        <NavigationItem link='/nursers'>Nurses</NavigationItem>
        <NavigationItem link='/providers'>HealthCare Providers</NavigationItem>
        <NavigationItem link='/about'>About</NavigationItem>
        <NavigationItem link='/contact'>Contact</NavigationItem>
        <NavigationItem link='/signup' buttonLink>
            <button>SIGNUP / LOGIN</button>
        </NavigationItem>
    </ul>
);
export default NavigationItems;