import React from 'react';
import {useLocation} from 'react-router-dom';
import {useHTTP} from 'HOOKS/useHTTP';
import {Content, ContentProps} from 'COMPONENTS/Content';
import {normalizeUrl} from "COMMON/Filter/Filter";

export const BigPage = () => {
  const {pathname} = useLocation();
  const [response, loading, success, error] = useHTTP<ContentProps>(normalizeUrl(pathname));

  if (!response) return <div/>;

  return <Content {...response}/>
}
