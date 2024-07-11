// всякие такие глобальные нужные данные


import translations from 'COMMON/translations';
export type Lang = keyof typeof translations;


export interface Options {
  domain: string;
  api: string;
  lang: Lang;
  title: string;
  resolution: number;
  notices: (Notice & {id: string})[];
  nets: {
    name: string;
    link: string;
  }[]
}

export type Notice = {text: string, status?: 'normal' | 'error'};

export interface CheesyState {
  menuIsOpened: boolean;
  modalIsOpened: boolean;
  lang: string;
}

// глобальный оверлэй для всех попапов
export interface Message<E extends { [key: string]: string[] } = { [key: string]: string[] }> {
  message: string;
  errors?: E;
}

// основной стейт стора
export interface State {
  options: Options;
  cheesyState: CheesyState;
}
