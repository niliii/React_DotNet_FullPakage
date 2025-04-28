import React from 'react';
import ReactDOM from 'react-dom/client';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function  MainHeader(){
  return(<p>React Cours</p>)
}
function  SubHeader(){
  return(<p>this is an exiting cours</p>)
}
function Header(){
  return(
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  )
}
function Mainbody(){
    return(
      <div>hi index.js</div>
    )
}
function Footer(){
  return(<p>Happy coding</p>)
}
root.render(
<div>
  <Header/>
  <Mainbody/>
  <Footer/>
</div>
);


// reportWebVitals();
