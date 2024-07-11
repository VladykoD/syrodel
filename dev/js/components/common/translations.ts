
import router, {basename} from 'COMMON/router';
import {Lang} from 'TYPES/State';


const translations = {
  ru: {
    menu: {
      primary: [
        {
          title: 'Продукция',
          link: router.products,
          key: 0,
        },
        {
          title: 'Магазины',
          link: router.shops,
          key: 1,
        },
        {
          title: 'Текстовая страница',
          link: router.textPageRoute,
          key: 2,
        },
        {
          title: 'Контакты',
          link: router.contact,
          key: 3,
        },
      ],

      /*
      secondaryTitle: 'О заводе',
      secondary: [
        {
          title: 'Производство',
          link: router.big.items.about,
          key: 4,
        },
        {
          title: 'Награды',
          link: router.big.items.about,
          key: 5,
        },
        {
          title: 'Отчётность',
          link: router.big.items.about,
          key: 6,
        },
        {
          title: 'История',
          link: router.big.items.about,
          key: 7,
        },
      ],
       */

      contacts: {
        mail: 'syrodel@mail.ru',
        phones: ['+7 (865 42) 2-13-94', '+7 (865 42) 2-15-74'],
        address: 'Россия, Ставропольский край, г.&nbsp;Ипатово, ул.&nbsp;Заречная, д.&nbsp;38'
      },

    },

    copyright: 'АО Сыродел',
    policy: {
      title: 'Политика конфиденциальности',
      link: './tmp/policy.pdf'
    }
  },

  common: {
    imageMenu: {
      webp: ['./tmp/menu/menu@1x.webp', './tmp/menu/menu@2x.webp'],
      default: ['./tmp/menu/menu@1x.jpg', './tmp/menu/menu@2x.jpg'],
      alt: '',
    }
  },
}
export const languages = Object.keys(translations) as Lang[];
export const defaultLang = 'ru';
export default translations;
