import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="container">
      <h2>
        Sorry, page not found
      </h2>
      <Link to={"/"}>Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
