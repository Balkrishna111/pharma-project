import logoImg from "../assets/sx-siphox-logo.svg";
import logoWhite from "../assets/logo-white.svg";
import hamImg from "../assets/sx-ham.svg";
import crossImg from "../assets/sx-cross-white.svg";
import trustPilot from "../assets/sx-trustpilot.svg";

const Navbar = () => {
  const slideBar = document.querySelector(".slide-bar");

  const toggleClass = () => {
    slideBar.classList.toggle("slide-nav-toggle");
  };

  return (
    <div className='main-nav-container'>
      <div className='navbar'>
        <div className='logo-container'>
          <img src={logoImg} alt='logo' height='20px' />
        </div>
        <div className='list-container'>
          <div className='list'>
            <ul className='nav-links-ul'>
              <li>Included Tests</li>
              <li>FAQs</li>
              <li>About</li>
            </ul>
            <ul className='nav-login-ul'>
              <li>Login</li>
              <li>
                <button className='green-btn'>Buy Now</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='slide-navbar'>
        <div className='hamburger'>
          <img src={hamImg} alt='hamburgerMenu' onClick={toggleClass} />
        </div>

        <div className='slide-bar'>
          <div className='slide-bar-nav'>
            <img src={logoWhite} alt='logo' height='20px' />
            <img
              src={crossImg}
              alt='cross'
              height='20px'
              onClick={toggleClass}
            />
          </div>

          <ul className='slide-bar-ul'>
            <li>
              <hr />
              Included Tests
            </li>
            <li>
              <hr />
              FAQs
            </li>
            <li>
              <hr />
              About
            </li>
            <li>
              <hr />
              Login{" "}
            </li>
            <li>
              <hr />
              <button className='green-btn'>Buy Now</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
