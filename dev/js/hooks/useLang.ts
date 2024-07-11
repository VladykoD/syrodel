import {useSelector} from 'STORE/store';
import {languages} from 'COMMON/translations';
import {Lang} from 'TYPES/State';

export default function useLang(): [string, Lang] {
  const {lang} = useSelector((state) => state.options);

  let link = '';
  // TODO: Языки(пока скрыто)
  // if (languages.length > 1) {
    link = `${lang}/`;
  // }


  return [link, lang];
}
