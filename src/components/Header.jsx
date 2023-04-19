const Header = ({selectNow,select}) =>{
    let selectClass = 'bg-green-600';
    return (
        <header className="w-full min-h-[80px] bg-indigo-500 rounded-[10px]">
            
            <nav className="h-full w-full py-[5px]">
                <ul className=" min-h-[100px] w-full max-w-full   flex justify-center gap-[20px] items-center flex-wrap  text-center text-fuchsia-100  text-[20px]  list-none">
                    <li className={`after:content-none before:content-none min-w-[200px]  rounded-xl p-[10px] ${selectNow === 'PersonalPronouns' ? selectClass : null}`}><button onClick={(e)=>select(e.target.value) } value='PersonalPronouns'>Личные местоимения</button></li>
                    <li className={`after:content-none before:content-none min-w-[200px]  rounded-xl p-[10px] ${selectNow === 'Plural' ? selectClass : null}`}><button onClick={(e)=>select(e.target.value) } value='Plural'>Множественное число</button></li>
                    <li className={`after:content-none before:content-none min-w-[200px]  rounded-xl p-[10px] ${selectNow === 'Articles' ? selectClass : null}`}><button onClick={(e)=>select(e.target.value) } value='Articles'>Артикли</button></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;