import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1 onClick={() => navigate("/")}>Shop</h1>

      <div>
        <NavLink to={"/cart"}>Cart</NavLink>
      </div>
    </div>
  );
}
