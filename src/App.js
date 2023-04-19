
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PersonalPronouns from './components/PersonalPronouns';
import Plural from './components/Plural';
function App() {
  const[selectMenu,setSelectMenu]=useState('PersonalPronouns');
  return (
    <div className='max-w-[1300px] mx-auto border bg-slate-100'>
      <Header selectNow={selectMenu} select={setSelectMenu}/>
      <main className='w-full pb-[40px] px-[10px]' >
        {selectMenu === 'PersonalPronouns' ? <PersonalPronouns/> : null}
        {selectMenu === 'Plural' ? <Plural/> : null}
      </main>
    </div>
  );
}

export default App;
