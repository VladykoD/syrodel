import {useDispatch} from 'STORE/store';
import {addNotice} from 'STORE/slices/Options';


export function useNotice() {
  const dispatch = useDispatch();

  return (text: string, isError?: boolean) => {
    dispatch(addNotice({
      status: isError ? 'error' : undefined,
      text
    }));
  }
}