import React from 'react';
import { Spinner } from 'react-activity';
import 'react-activity/dist/react-activity.css';
import './Loading.css';

const Loading = () => (
    <Spinner data-testid="loading" color="#FFF" size={24} speed={1} animating={true}/>
);

export default Loading;
