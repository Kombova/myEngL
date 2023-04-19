
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PersonalPronouns from './components/PersonalPronouns';
import Plural from './components/Plural';
import Articles from './components/Articles';
import BackgoundButton from './components/BackgroundButton';
function App() {
  const[selectMenu,setSelectMenu]=useState('PersonalPronouns');
  return (
    <>
    <BackgoundButton/>
    <div className='max-w-[1000px] mx-auto rounded-t-[10px] bg-slate-100 wrap'>
      <Header selectNow={selectMenu} select={setSelectMenu}/>
      <main className='w-full pb-[40px] px-[10px]' >
        {selectMenu === 'PersonalPronouns' ? <PersonalPronouns/> : null}
        {selectMenu === 'Plural' ? <Plural/> : null}
        {selectMenu === 'Articles' ? <Articles/> : null}
      </main>
      
    </div>
    
    </>
  );
}

export default App;
