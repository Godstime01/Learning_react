import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [mode, setMode] = useState(localStorage.getItem("theme") ? localStorage.getItem('theme') : 'light')
    const html = document.documentElement;

    useEffect(()=>{
        switch (mode){
            case "dark":
                html.classList.remove("dark")
                localStorage.setItem("theme", "dark")
                break;
            case 'light':
                html.classList.add("dark")
                localStorage.setItem("theme", 'light')
                break;
            default:
                break;
        }
    }, [mode])

    
    function toggleDarkMode() {
        if(mode == "dark"){
            setMode("light")
        }else{
            setMode('dark')
        }
    }

    return (
        <nav className='shadow-lg p-4 bg-white text-blue-300 dark:text-white dark:bg-blue-200'>
            <div className="container mx-auto my-3 flex justify-between items-center ">
                <h2>Where in the world?</h2>

                <button className='flex gap-2 items-center' onClick={toggleDarkMode}>
                    <ion-icon name="moon"></ion-icon>
                    <span>Darkmode</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar