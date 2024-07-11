import './defaultPage.scss';
import React from 'react';
import {BrowserRouter, Route, Navigate, Routes, useLocation} from 'react-router-dom';

import router, {basename} from 'COMMON/router';
import ScrollToTop from './ui/scroll-top/ScrollToTop';
import {NoticeWrapper} from './ui/notice/Notice';

import {Header} from 'COMMON/Header/Header';
import {Footer} from 'COMMON/Footer/Footer';
import {BigPage} from 'COMPONENTS/pages/BigPage';
import {ScreenSize} from "COMMON/ScreenSize/ScreenSize";
import {NoPage} from "COMPONENTS/pages/NoPage/NoPage";
import {motion, AnimatePresence} from 'framer-motion';
import {SvgSprite} from "COMPONENTS/ui/SvgSprite/SvgSprite";


type AppProps = {
}

const AnimatedSwitch = () => {
  const location = useLocation();

  return (
      <AnimatePresence key={location.pathname}>
      <motion.div
          className="pageWrap"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
      >
          <Routes>
            <Route index element={<BigPage/>}/>
            <Route path={router.products} element={<BigPage/>}/>
            <Route path={router.contact} element={<BigPage/>}/>

            <Route path={router.shops} element={<BigPage/>}/>
            <Route path={router.textPageRoute} element={<BigPage/>}/>

            <Route path='/404' element={<NoPage/>}/>

            <Route path='*' element={<Navigate to='/404'/>}/>
          </Routes>
      </motion.div>
      </AnimatePresence>
  );
};


export default class App extends React.Component<AppProps> {
  render() {

    return (
      <BrowserRouter basename={basename}>
        <ScreenSize/>
        <NoticeWrapper/>
        <ScrollToTop/>
        <Header/>
        <AnimatedSwitch />
        <SvgSprite />

        <Footer base={`${basename}`}/>
      </BrowserRouter>
    );
  }
}
