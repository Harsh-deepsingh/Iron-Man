import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="flex">
    <div className="navbar">
      <div className="leftAlign">
      <div className="profile">
        <a href="https://www.linkedin.com/in/harshdeepsingh9828/" target="blank">
        <img src="LinkedIn.jpg" alt="LinkedIn"></img>
        </a>
      </div>
      </div>
      IRONMAN AI
      <div className="credit">
        Created by Harshdeep Singh
      </div>
    </div>
    </div>
  )
}

export default Navbar
