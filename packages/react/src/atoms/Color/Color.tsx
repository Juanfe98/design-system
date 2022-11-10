import React from 'react';
import Spacing from '../../foundation/Spacing';

interface Props {
  hexCode: string;
  width?:  keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color = ({hexCode, width='sm', height='sm'}: Props) => {
  const className = `dse-width-${width} dse-height-${height}`;

  return  <div className={className} style={{backgroundColor: hexCode}}></div>
}

export default Color;