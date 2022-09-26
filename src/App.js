import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Modal from 'react-modal';
import ReactGa from 'react-ga';

import './styles/reset.css'
import './styles/global.css'

import Header from './containers/Header';
import Footer from './containers/Footer';
import HomePage from './containers/pages/HomePage';
import ArticlePage from './containers/pages/ArticlePage/ArticlePage';
import AuthorsPage from './containers/pages/AuthorsPage';
import NewsPage from './containers/pages/NewsPage/NewsPage';
import RecomendationPage from './containers/pages/RecomendationPage';
import VideoListPage from './containers/pages/VideoListPage/VideoListPage';
import VideoPage from './containers/pages/VideoPage/VideoPage';
import EventPage from './containers/pages/EventPage/EventPage';
import OrganizationPage from './containers/pages/OrganizationPage/OrganizationPage';
import ArticlesListPage from './containers/pages/ArticlesListPage/ArticlesListPage';
import NewPage from './containers/pages/NewPage/NewPage';
import {categoriesAxios} from './components/axios';
import AuthorsArticlesListPage from './containers/pages/AuthorsArticlesListPage/AuthorsArticlesListPage';
import NotFoundPage from './containers/pages/NotFoundPage/NotFoundPage';
import AboutPage from './containers/pages/AboutPage/AboutPage'
import Authorization from './containers/pages/AdminPage/Authorization';
import ArrowTop from './containers/ArrowTop/ArrowTop';
import PrivacyPolicy from './containers/pages/PrivacyPolicy/PrivacyPolicy';
import AboutSite from './containers/pages/AboutSite/AboutSite';
import SearchResultPage from './containers/pages/SearchResultPage/SearchResultPage';

function App() {
    const [categories, setCategories] = useState([]);
    const [languageID, setLanguageID] = useState('ukr');
    const [showModal, setShowModal] = useState(window.localStorage.getItem('showModal') !== 'hide');

    useEffect(() => {
      categoriesAxios.get('/').then(response => {
        if (response.status === 200) {
            setCategories(response.data);
        } else {
            throw new Error('Recomendation Error');
        }
      }).catch(err => {
          console.log(err);
      });

      ReactGa.initialize('UA-217346696-1');
      ReactGa.pageview('/');
    }, []);

    // const setLanguage = useCallback((langID) => {
    //   window.localStorage.setItem('languageID', langID);
    //   setLanguageID(langID);
    // }, [])

    // useEffect(() => {
    //   const windowLanguageID = window.localStorage.getItem('languageID');
    //   if (windowLanguageID) {
    //     setLanguageID(windowLanguageID);
    //   }
    // }, [languageID]);

    const noHandler = () => {
      window.location = 'https://www.google.com/';
  }

  const yesHandler = () => {
      window.localStorage.setItem('showModal', 'hide');
      setShowModal(window.localStorage.getItem('showModal') !== 'hide');
  }

  const ModalWindow = <>
      <Modal
          isOpen={showModal}
          className="Modal globalWrapper"
        >
          <div className="Content">
              <p>Шановний відвідувач, підтвердіть, будь ласка,</p>
              <p>що ви є фахівцем галузі охорони здоров’я України</p>
              <p>і даєте згоду на доброчесне виконання зобов’язань користувача</p>
              <p> згідно з <a href="/files/Website-user-information agreement.pdf" target="_blank" rel="noopener noreferrer">Угодою користувача інформації вебсайту http://vitapol.info</a></p>
              <div className="buttonsWrapper">
                <button onClick={yesHandler}>Так, згоден</button>
                <button onClick={noHandler}>Ні</button>
              </div>
          </div>
      </Modal>
  </>

  return <BrowserRouter>
      <Header categories={categories} languageID={languageID} setLanguageID={() => {}}/>
        {ModalWindow}
        <Switch>
          <Route exact path='/' render={props => <HomePage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/articles/:categoryID' render={props => <ArticlesListPage {...props} categories={categories} languageID={languageID} />}/>
          <Route path='/article/preview/:previewArticleID' render={props => <ArticlePage {...props} categories={categories} languageID={languageID} />}/>
          <Route path='/article/:articleID' render={props => <ArticlePage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/authors' render={props => <AuthorsPage {...props} categories={categories} languageID={languageID} />}/>
          <Route path='/authors/:authorsID' render={props => <AuthorsArticlesListPage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/news' render={props => <NewsPage {...props} categories={categories} languageID={languageID} />}/>
          <Route path='/news/:newsID' render={props => <NewPage {...props} categories={categories} languageID={languageID} />} />
          <Route exact path='/recomendations/:categoryEng' render={props => <RecomendationPage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/videosList/:categoryEng' render={props => <VideoListPage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/videosList' render={props => <VideoListPage {...props} categories={categories} languageID={languageID} />}/>
          <Route path='/videos/:videosID' render={props => <VideoPage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/events' render={props => <EventPage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/organizations' render={props => <OrganizationPage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/about' render={props => <AboutPage {...props} categories={categories} languageID={languageID} />}/>
          <Route exact path='/about/:pageType' render={props => <AboutPage {...props} categories={categories} languageID={languageID} />}/>
          <Route path="/privacy-policy" render={props => <PrivacyPolicy {...props} categories={categories} languageID={languageID} />} />
          <Route path="/about-site" render={props => <AboutSite {...props} categories={categories} languageID={languageID} />} />
          <Route path="/search/:query" render={props => <SearchResultPage {...props} categories={categories} languageID={languageID} />} />
          <Route path="/admin" component={Authorization} />
          <Route render={props => <NotFoundPage languageID={languageID} />} />
        </Switch>
      <Footer categories={categories} languageID={languageID}/>
      <ArrowTop />
    </BrowserRouter>
}

export default App;
