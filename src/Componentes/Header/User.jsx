import { Fragment } from "react";
import { Link } from "react-router-dom";

function User() {
  return (
    <Fragment>
      <Link to="/usuario">
        <i className="fas fa-users"></i>
      </Link>
    </Fragment>
  );
}
export default User;
