import React, {useEffect, useRef, useState} from 'react';
import styles from './Shops.module.scss';
import picker from "COMPONENTS/ui/ContactMap/img/picker.png";
import pickerMinor from "COMPONENTS/ui/ContactMap/img/pickerMinor.png";

import {YMaps, Map, Placemark, GeolocationControl} from "react-yandex-maps";
import useGlobalDOMEvents from "HOOKS/useGlobalDOMEvents";
import {useSelector} from "STORE/store";
import {Popup} from "COMPONENTS/ui/popup/Popup";


export type Props = {
  title: string;
  addresses: {
    city: string;
    cityId: string;
    cityCenter: number[];
    content: AddressType[];
  }[]
}

export type AddressType = {
  id: string;
  name: string;
  address: string;
  time?: string;
  phone?: string;
  coordinate: number[];
}

export const Shops = ({title, addresses}: Props) => {
  const [selectOpened, setSelectOpened] = useState(false)
  const [selectTitle, setSelectTitle] = useState('Город')
  const [selectedArray, setSelectedArray] = useState<AddressType[] | null>(null)
  const [currentCity, setCurrentCity] = useState('')
  const [currentCoordinate, setCurrentCoordinate] = useState([45.728367,42.956793])
  const [currentShop, setCurrentShop] = useState<string>('')
  const [map, setMap] = useState<any | null>(null)
  const [zoom, setZoom] = useState(10)
  const lang = useSelector(state => state.cheesyState.lang)
  const [isMobile, setIsMobile] = useState<boolean | null>(false);
  const [isPopupActive, setIsPopupActive] = useState(false)


  const resize = () => {
    setIsMobile(window.innerWidth < 768)
  }

  useEffect(() => {
    resize();
  }, []);

  useGlobalDOMEvents({
    resize
  });

  useEffect(() => {
    setCurrentCity(addresses[0].cityId)
    setSelectTitle(addresses[0].city)
    setSelectedArray(addresses[0].content)

    //cityCenter - https://www.latlong.net/
    // НО! Вместо [59.938480,30.312481] нужно [59.938480,30.312481 + .35]
    // чтобы город был по центру экрана
    setCurrentCoordinate(addresses[0].cityCenter)
  }, [])

  useEffect(() =>{
    if (!map) return;

    //это нужно, чтобы точка была по видимому центру экрана
    let offset = isMobile ? 0 : 0.025
    let center = [currentCoordinate[0], currentCoordinate[1] + offset];
    map.setCenter(center, zoom)
  }, [currentCoordinate, map])

  const yaMap = <YMaps>
    <Map defaultState={{
      center: [],
      zoom: zoom,
      lang
    }}
         instanceRef={setMap}
         width={'100%'}
         height={'100%'} >
      <GeolocationControl />

      {selectedArray && selectedArray.map((place, i) => {
        return <Placemark
          key={place.id}
          geometry={place.coordinate}
          options={{
            iconLayout: "default#image",
            iconImageSize: place.coordinate === currentCoordinate ? [50, 50] : [8, 8],
            iconImageHref: place.coordinate === currentCoordinate ? picker : pickerMinor,
          }}
          onClick={() => {
            setZoom(14)
            setCurrentShop(place.id)
            setCurrentCoordinate(place.coordinate)
          }}
        />
      })}
    </Map>
  </YMaps>

  return <section className={styles.section}>
    <div className={styles.map}>
      {isMobile
        ? <Popup
          active={isPopupActive}
          onClose={() => setIsPopupActive(false)}
        >
            {yaMap}
        </Popup>
        : yaMap
      }
    </div>

      <div className={styles.textBlock}>
        <div>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.select}>
            <button onClick={() => {setSelectOpened(!selectOpened)}} className={`${styles.selectTitle} ${selectOpened ? styles.active : ''}`}>
              {selectTitle}
            </button>
            <div className={`${styles.selectChoices} ${selectOpened ? styles.active : ''}`}>
              {addresses.map((city) => {
                return <button
                  key={city.cityId}
                  className={`${styles.option} ${currentCity === city.cityId ? styles.active : ''}`}
                  onClick={() => {
                    setSelectOpened(false)
                    setCurrentCity(city.cityId)
                    setSelectTitle(city.city)
                    setSelectedArray(city.content)

                    //setCurrentShop(city.content[0].id)
                    //setCurrentCoordinate(city.content[0].coordinate)

                    setZoom(10)
                    setCurrentCoordinate(city.cityCenter)
                  }}
                >{city.city}</button>
              })}
            </div>
          </div>
        </div>

        {selectedArray &&  <div className={styles.addressArr}>
          {selectedArray
            .map((addr ) => {
              return !isMobile ? <button
                key={addr.id}
                onClick={() => {
                   setCurrentShop(addr.id)
                   setCurrentCoordinate(addr.coordinate)
                  setZoom(14)
                }}
                className={`${styles.addressBlock} ${currentShop === addr.id ? styles.active : '' }`}
              >
                <div className={styles.name} dangerouslySetInnerHTML={{__html: addr.name}}/>
                <p className={styles.address} dangerouslySetInnerHTML={{__html: addr.address}}/>
                {addr.phone && <p className={styles.phone} dangerouslySetInnerHTML={{__html: addr.phone}}/>}
                {addr.time && <p className={styles.hours} dangerouslySetInnerHTML={{__html: addr.time}}/>}
              </button>
                : <div
                  key={addr.id}
                  className={`${styles.addressBlock}`}
                >
                  <div className={styles.name} dangerouslySetInnerHTML={{__html: addr.name}}/>
                  <p className={styles.address} dangerouslySetInnerHTML={{__html: addr.address}}/>
                  {addr.phone && <p className={styles.phone} dangerouslySetInnerHTML={{__html: addr.phone}}/>}
                  {addr.time && <p className={styles.hours} dangerouslySetInnerHTML={{__html: addr.time}}/>}

                  <button
                    onClick={() => {
                      setCurrentShop(addr.id)
                      setCurrentCoordinate(addr.coordinate)
                      setZoom(14)
                      setIsPopupActive(true)
                    }}
                   className="btn btn--filled btn--xs"
                   type="button">
                    Посмотреть на карте
                  </button>
                </div>
          })}
        </div>}
      </div>
  </section>
}
