import {useEffect, useState} from 'react';
import {http} from 'a-utils/src/http/http';
import {useDispatch, useSelector} from 'STORE/store';
import {addNotice} from 'STORE/slices/Options';

// TODO test
export function useHTTP<T>(url: string): [T | null, boolean, boolean, boolean] {
  const dispatch = useDispatch();
  const {api} = useSelector(state => state.options);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    setLoading(true);
    http<{content: T}>({
      action: api + url
    }).then((response) => {
      setLoading(false);
      setResponse(response.content);
      setSuccess(true);
      setError(false);
    }).catch((error) => {
      dispatch(addNotice({
        status: 'error',
        text: error.message ? error.message : error.status + ' ' + error.statusText
      }));

      setLoading(false);
      setResponse(null);
      setSuccess(false);
      setError(true);
    });

  }, [url]);

  return [response, loading, success, error];
}
