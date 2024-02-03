import "./navbar.css"

const Navbar = () => {
  return (
    <div className="flex">
    <div className="navbar">
      <div className="leftAlign">
      <div className="profile">
        <img src="LinkedIn.jpg" alt="LinkedIn"></img>
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
