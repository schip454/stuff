import { NavLink } from "react-router-dom";
import styles from "../../styles/Sidebar.module.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);
  // const newList = list.slice(0, 6);

  return (
    <section className={styles.sidebar}>
      <h2 className={styles.title}>Categories</h2>
      <nav>
        <ul className={styles.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`/categories/${id}`}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href="#" className={styles.link}>
          Help
        </a>
        <a
          href="#"
          className={styles.link}
          style={{ textDecoration: "underline" }}>
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
