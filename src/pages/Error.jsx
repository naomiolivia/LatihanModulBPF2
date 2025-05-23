// src/pages/Error.jsx
import { useParams } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import error400 from '../assets/400.png';
import error401 from '../assets/401.png';
import error403 from '../assets/403.png';

function Error() {
  const { code } = useParams();

  const errorData = {
    400: {
      description: 'Bad Request. Something is wrong with your request.',
      image: error400,
    },
    401: {
      description: 'Unauthorized. Please login to access this page.',
      image: error401,
    },
    403: {
      description: 'Forbidden. You don’t have permission to view this page.',
      image: error403,
    },
  };

  const data = errorData[code] || {
    description: 'Unknown error occurred.',
    image: error400,
  };

  return <ErrorPage code={code} description={data.description} image={data.image} />;
}

export default Error;
