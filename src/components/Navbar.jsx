import { Link } from "react-router-dom";

let Navbar=()=>{
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Resume Builder
          </Link>
        </div>
      </nav>
    );
};
export default Navbar;