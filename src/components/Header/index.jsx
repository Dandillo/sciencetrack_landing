import logo from "../../assets/svg/Logo.svg";
import "./style.scss";
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul className="links">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Об игре
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Этапы
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Другие игры
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Войти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
