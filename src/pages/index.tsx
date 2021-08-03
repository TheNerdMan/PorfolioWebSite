// External Modules
import React from "react";
import Helmet from "react-helmet";

// Internal Modules
import App from '../app/app';

// Data
import * as staticData from '../data/static-data';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

// Markup
export default () => {
  const { title, lang, description } = staticData.helmetTopLevelData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Title Fallback'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Description Fallback'} />
      </Helmet>
      <App />
    </>
  )
}
