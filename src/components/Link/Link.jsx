import { Link as ReactLink} from 'react-router-dom';
import styles from '../Link/Link.module.css';

function Link({children, to}) {
  return (
        <ReactLink className={styles.link} to={to}>{children}</ReactLink>
  );
}

export default Link;
