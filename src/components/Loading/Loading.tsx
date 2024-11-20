import React from 'react';
import ReactLoading, { LoadingProps } from 'react-loading';
import './Loading.scss'


const Loading = ({ type, color }: LoadingProps) => (
   <div className='LoadingContainer'>
      <ReactLoading type={type} color={color} />
   </div>
);

export default Loading;