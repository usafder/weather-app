import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <h3>The page you're looking for doesn't exist.</h3>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
}

export default NotFound;
