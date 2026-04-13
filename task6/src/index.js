import React from 'react';
import ReactDOM from 'react-dom/client'; //18버전부터는 react-dom/client로 변경됨
import './index.css';
import reportWebVitals from './reportWebVitals';

//import Library from './chapter_03/Library';
//import Clock from './chapter_04/Clock';
//import CommentList from './chapter_05/CommentList';
//import NotificationList from './chapter_06/NotificationList';
//import Accomodate from './chapter_07/Accomodate';
//import ConfirmButton from './chapter_08/ConfirmButton';
//import LandingPage from './chapter_09/LandingPage';
//import AttendanceBook from './chapter_10/AttendanceBook';
//import SignUp from './chapter_11/SignUp';
//import Calculator from './chapter_12/Calculator';
//import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>
);

reportWebVitals();