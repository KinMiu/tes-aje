import Logo from '../assets/images/Yugioh-ID  Logo.png'
import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom'

// icons
import {FaSearch} from 'react-icons/fa'
const Navbar = () => {
	const navigate = useNavigate()
  return(
    <div className="navbar">
			<div className="navs">
				<div className="nav">
					<div className="logo">
						<img src={Logo} alt="Yugioh ID Logo" />
					</div>
					<div className="menu">
						<ul>
							<li><button onClick={() => navigate('/')}>Home</button></li>
							<li><button onClick={() => navigate('/')}>About</button></li>
							<li><button onClick={() => navigate('/')}>Series</button></li>
							<li><button onClick={() => navigate('/')}>Card</button></li>
						</ul>
					</div>
				</div>
				<div className="search">
					<div className="searchBar">
						<input type="text" placeholder='Search....'/>
					</div>
					<button>
						<FaSearch/>
					</button>
				</div>
			</div>
    </div>
  )
}

export default Navbar