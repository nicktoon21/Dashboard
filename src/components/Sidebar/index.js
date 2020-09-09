import React from 'react';

import { AiOutlineHome, AiOutlineHistory, AiOutlineNotification, AiOutlineIdcard, AiOutlineExport } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { FcSettings } from 'react-icons/fc';
import { FiUsers } from 'react-icons/fi';

import './style.css';

export default function Sidebar(){
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <div className="sidebar-main">
                    <h1>Start</h1>
                    <a href="/"><AiOutlineHome/>Home</a>
                    <a href="/"><ImProfile/>Profile</a>
                    <a href="/"><AiOutlineHistory/>Log's</a>
                    <a href="/"><AiOutlineNotification/>Notification</a>
                </div>
                <div className="sidebar-maintenance">
                    <h1>Maintenance</h1>
                    <a href="/"><FcSettings/>Setting</a>
                    <a href="/"><FiUsers/>Users</a>
                    <a href="/"><AiOutlineIdcard/>Permissions</a>
                    <a href="/"><AiOutlineExport/>Access</a>
                </div>
            </div>
        </div>
    )
}
