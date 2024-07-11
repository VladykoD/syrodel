import {MainPage} from './pages/Main/MainPage';
import {MainAdvantages} from './pages/Main/MainAdvantages/MainAdvantages';
import {MainCatalog} from './pages/Main/MainCatalog/MainCatalog';
import {MainJournal} from './pages/Main/MainJournal/MainJournal';
import {MainProducts} from './pages/Main/MainProducts/MainProducts';
import {MainDelivery} from './pages/Main/MainDelivery/MainDelivery';
import {MainManufacture} from './pages/Main/MainManufacture/MainManufacture';
import {MainContacts} from './pages/Main/MainContacts/MainContacts';

import {Contact} from './pages/Contact/Contact';

import {TextPage} from './pages/TextPage/TextPage';

import {ProductsTop} from './pages/Products/ProductsTop';
import {ProductsFilter} from "./pages/Products/ProdutsFilter/ProdutsFilter";
import {ProductsContacts} from './pages/Products/ProductsContacts/ProductsContacts';

import {Shops} from './pages/Shops/Shops';

import {NoPage} from './pages/NoPage/NoPage';

import {Primitives} from 'COMMON/content/primitives/Primitives';
import {Video} from 'COMMON/content/video/Video';

type TypeOfContent = typeof content;
type ContentKeys = keyof TypeOfContent;

interface ContentType<T extends ContentKeys> {
  type: T;
  content: Parameters<TypeOfContent[T]>[0];
}

export type ContentTypes = (

  ContentType<'mainPage'> |
  ContentType<'mainAdvantages'> |
  ContentType<'mainCatalog'> |
  ContentType<'mainJournal'> |
  ContentType<'mainProducts'> |
  ContentType<'mainDelivery'> |
  ContentType<'mainManufacture'> |
  ContentType<'mainContacts'> |

  ContentType<'contact'> |
  ContentType<'texts'> |

  ContentType<'productsTop'> |
  ContentType<'productsFilter'> |
  ContentType<'productsContacts'> |

  ContentType<'shops'> |

  ContentType<'noPage'> |

  ContentType<'primitives'> |
  ContentType<'videoBlock'>
)[];

export type ContentProps = {
  items: ContentTypes;
}


const content = {
  mainPage: MainPage,
  mainAdvantages: MainAdvantages,
  mainCatalog: MainCatalog,
  mainJournal: MainJournal,
  mainProducts: MainProducts,
  mainDelivery: MainDelivery,
  mainManufacture: MainManufacture,
  mainContacts: MainContacts,

  contact: Contact,

  texts: TextPage,

  productsTop: ProductsTop,
  productsFilter: ProductsFilter,
  productsContacts: ProductsContacts,

  shops: Shops,

  noPage: NoPage,

  primitives: Primitives,
  videoBlock: Video,
}


export const Content = ({items}: ContentProps) => {
  return <>
    {items.map((item, i) => {
      const ContentChild = content[item.type];
      // @ts-ignore
      return <ContentChild key={'ci-' + i} {...item.content}/>
    })}
  </>
}
