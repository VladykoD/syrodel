
import {YMaps, Map, Placemark} from "react-yandex-maps";

import map from './img/map.jpg';
import picker from './img/picker.png';
import {useSelector} from "STORE/store";


export type Props = {
  address: addressProps;
}
export type addressProps = {
  region: string,
  city: string,
  street: string,
  coordinate: number[],
}

export const ContactMap = ({address}: Props) => {
  const lang = useSelector(state => state.cheesyState.lang)

  return <>
      <img src={map} alt="карта не загрузилась"/>
      <YMaps>

      <Map defaultState={{
        center: address.coordinate,
        zoom: 14,
        lang
      }}
           width={'100%'}
           height={'100%'} >
        <Placemark
            geometry={address.coordinate}
            options={{
              iconLayout: "default#image",
              iconImageSize: [50, 50],
              iconImageHref: picker
            }}
        />
      </Map>
    </YMaps>
  </>

}
