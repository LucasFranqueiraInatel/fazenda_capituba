import React from 'react'
import { Component } from 'react'
import { MenuData } from './MenuData'
import "./NavbarStyle.css";

class Navbar extends Component {
    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className="logo">Fazenda Capituba

                </h1>
                <ul className='nav-menu'>
                    {MenuData.map((item, id) => {
                        return (
                            <li key={id}>
                                <a href={item.url} className={item.cName}>
                                    <i class={item.icon}></i>{item.title}
                                </a>
                            </li>

                        )
                    })}


                </ul>
            </nav >
        )
    }
}

export default Navbar;