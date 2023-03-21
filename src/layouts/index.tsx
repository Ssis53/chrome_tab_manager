import { Link, Outlet, } from 'umi';
import styles from './index.less';
export default function Layout() {
  console.log('渲染了啊layout');
  
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <Link to="/detail">Detail</Link>
        </li>
        <li>
          <Link to="/other">Other</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
