import "../../styles/components/homepage/Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* Left side icons */}
      <div className="header__left-icons">
        <img
          src="https://www.kings-taunton.co.uk/wp-content/themes/kings-taunton/dist/assets/img/search-icon-transparent.svg"
          alt="Search"
          className="icon"
        />
        <img
          src="https://www.kings-taunton.co.uk/wp-content/themes/kings-taunton/dist/assets/img/portal-icon-transparent.svg"
          alt="User Portal"
          className="icon"
        />
      </div>

      {/* Center logo */}
      <div className="header__logo">
  <img
    src="/logo4.png"   // ✅ Correct way to reference from public/
    alt="King's College International"
    className="header__logo-image"
  />
</div>

      {/* Right side menu */}
      <div className="header__menu">
        <img
          src="https://www.kings-taunton.co.uk/wp-content/themes/kings-taunton/dist/assets/img/burger-icon-transparent.svg"
          alt="Menu"
          className="icon"
        />
      </div>
    </header>
  );
}
