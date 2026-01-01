import { NavLink } from "react-router-dom";
import "../../styles/layout.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>Clueso</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Feedback
        </NavLink>

        <NavLink
          to="/insights"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Insights
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
