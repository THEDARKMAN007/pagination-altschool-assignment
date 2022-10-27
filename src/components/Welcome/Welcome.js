import { Link } from "react-router-dom";
import "./Welcome.css"

const Home = () => {

      return (
        <div className="home_body">
          <div className="home_Home">
            <div className="welcome">Welcome</div>
            <Link to='/welcome/Users' className="click-here">
              click here
            </Link>
          </div>
        </div>
      );
}

export default Home;
