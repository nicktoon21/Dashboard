import React from 'react';
import {Avatar, AvatarPair} from '@primer/components';
import { AiOutlineSearch } from 'react-icons/ai';

import './style.css';

export default function Navbar(){
    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <div className="navbar-overview">
                    <h3>Overview</h3>
                </div>
                <div className="navbar-profile">
                    <div className="navbar-search">
                        <input type="text" placeholder="Pesquisar..."/>
                        <AiOutlineSearch/>
                    </div>
                    <h4>Nicolas Aguiar</h4>
                    <AvatarPair>
                        <Avatar src="https://avatars3.githubusercontent.com/u/51923372?s=460&u=41aa2334c7e5a8b335e1f30764112c668c42e540&v=4" />
                    </AvatarPair>
                </div>
            </div>
        </div>
    )
}
