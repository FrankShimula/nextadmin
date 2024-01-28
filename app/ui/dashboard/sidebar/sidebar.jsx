import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdPerson,
  MdShoppingCart,
  MdCategory,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdPerson />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingCart />,
      },
      {
        title: "Categories",
        path: "/dashboard/categories",
        icon: <MdCategory />,
      },
    ],
  },
  {
    title: "Users",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
