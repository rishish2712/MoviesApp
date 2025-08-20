import React from 'react';

export default function Navbar() {
    return (
        <div className="navbar">
            <select className="category" id="">
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
            </select>

            <input type="text" className="search" id="search" placeholder="Search for Movies..." />
            <select className="rating" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}