import './Primitives.scss';

import React, {ReactNode, } from 'react';
import {HTMLContent} from 'COMMON/content/HTMLContent/HTMLContent';

type Props = {
  children?: string | string[];
  className?: string;
}
// const BigText = ({children, className}: Props) => <p className={className ? `${className} big-text` : 'big-text'}>{children}</p>
// const LargeText = ({children, className}: Props) => <p className={className ? `${className} h2` : 'h2'}>{children}</p>
// const List = ({children, className}: Props) => <ul className={className}>
//   {Array.isArray(children) ? children.map((t, i) => <li key={'li-' + i}>{t}</li>) : <li>{children}</li>}
// </ul>
const BigText = ({children}: Props) => <p className='big-text'>{children}</p>
const LargeText = ({children}: Props) => <p className='h2'>{children}</p>
const List = ({children}: Props) => <ul>
  {Array.isArray(children) ? children.map((t, i) => <li key={'li-' + i}>{t}</li>) : <li>{children}</li>}
</ul>

type PrimitiveTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type Primitive = {
  type: PrimitiveTag | 'bigP' | 'largeP' | 'ul' | 'html';
  isDiv?: boolean;
  content: string | string[];
}
export type PrimitivesProps = {
  items: Primitive[];
}


export const Primitives = ({items}: PrimitivesProps) => {
  return <div className='primitives'>
    {items.map(({type, content, isDiv}, i) => {
      if (!type) throw new Error('"type" in not exist');

      let Child: React.FunctionComponent<Props> | string = type;
      let className = '';

      if (isDiv) {
        Child = 'div';
        className = type;
      }

      switch (type) {
        case 'bigP':
          Child = BigText;
          break;
        case 'largeP':
          Child = LargeText;
          break;
        case 'ul':
          Child = List;
          break;
        case 'html':
          Child = HTMLContent;
          break;
      }

      return <Child key={'ch-' + i} className={className}>{content}</Child>
    })}
  </div>
}
