import "./header.styles.scss";
import Logo from "../logo/logo.component";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
}
