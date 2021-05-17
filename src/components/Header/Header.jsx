import React, { useState } from 'react';

// styles
import './style.css'

export const HeaderComponent = () => {

    const [dark, setDark] = useState(false)

    function validateCheck(value) {
        const $element = document.querySelector('.js-checked')
        const $root = document.querySelector(':root')
        console.log('$root: ', $root.style);
        setDark($element.checked)

        if ($element.checked){
            $root.style.setProperty('--primary-color', '#233e8b')
            $root.style.setProperty('--secondary-color', '#1eae98')
            $root.style.setProperty('--thread-color', '#a9f1df')
            $root.style.setProperty('--text-color', '#e6dddd')

        } else {
            $root.style.setProperty('--primary-color', '#94d0cc')
            $root.style.setProperty('--secondary-color', '#eec4c4')
            $root.style.setProperty('--thread-color', '#d1d9d9')
            $root.style.setProperty('--text-color', '#2d2a2a')
                     
        }
    }

    return (
    <div>
        <div className="header">
            <div className="header-display-mode">
                <input type="checkbox" className="js-checked" 
                    onClick={validateCheck} /> { dark ? 'Oscuro' : 'Claro'}
            </div>
            <h2 className="header-title text-color">
                Paises del mundo
            </h2>
            <div className="header-lenguage">
                <select type="select">
                    <option value="ligth">English</option>
                    <option value="dark">Español</option>
                </select>
            </div>
        </div>
    </div>
    )
}
