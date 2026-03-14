import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <ul>

        <li>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
          >
            Users
          </NavLink>
        </li>

        <li className="menu-link">Posts</li>

        <li className="menu-link">Discussions</li>

      </ul>
    </aside>
  );
}

export default Sidebar;