import React from 'react';
import './style.css';

export default function Cards(){
    return (
        <div className="cards-container">
            <div className="cards-content">
                <div className="cards-card">
                    <h3>Tutorials</h3>
                    <h1>65</h1>
                </div>
                <div className="cards-card">
                    <h3>Questions</h3>
                    <h1>20</h1>
                </div>
                <div className="cards-card">
                    <h3>Announcement</h3>
                    <h1>15</h1>
                </div>
                <div className="cards-card">
                    <h3>Total</h3>
                    <h1>100</h1>
                </div>
            </div>
        </div>
    );
}
