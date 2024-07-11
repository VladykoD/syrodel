import './SliderButtons.scss';

import React from 'react';

type Props = {
  onChange?: (direction: -1 | 1) => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

export const SliderButtons = ({onChange = () => {}, prevDisabled, nextDisabled}: Props) => {
  return <div className='slider-buttons'>
    <div className='slider-buttons-inner'>
      <button className='slider-button prev' disabled={prevDisabled} onClick={() => onChange(-1)}/>
      <button className='slider-button next' disabled={nextDisabled} onClick={() => onChange(1)}/>
    </div>
  </div>
}