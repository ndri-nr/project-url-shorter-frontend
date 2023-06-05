import { useState, useEffect, lazy , Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as url from '../../stores/services/url';
import Loader from '../../components/Loader';
import './UrlDetail.css';

const NotFound = lazy(()=>import('../Error/404/404'))
const SomethingWentWrong = lazy(()=>import('../Error/500/500'))

const UrlDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [error, setError] = useState(200);
  
  const fetchUrlData = async () => {
    try {
      const res = await dispatch(url.getRedirect(slug));
      
      if (res.status === 200) window.location = res.data.redirectTo;
      if (res.status === 404) setError(404);
      if (res.status === 500) setError(500);
    } catch (err) {
      console.log("err ", err);
    }
  };

  useEffect(() => {
    fetchUrlData();
  }, [slug]);

  return (
    <div className="page">
      {error === 200 && (
        <Loader text={"redirecting..."} />
      )}
      {error === 404 && (
        <Suspense fallback={<Loader />}>
          <NotFound />
        </Suspense>
      )}
      {error === 500 && (
        <Suspense fallback={<Loader />}>
          <SomethingWentWrong />
        </Suspense>
      )}
    </div>
  );
}

export default UrlDetail;
