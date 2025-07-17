/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Assuming Header.css contains your existing styles
import header from '../media/Header.jpg'

const Navbar = () => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className='header-text'>
            <img src={header} alt="Semana Acadêmica" style={{ width: '100%', height: 'auto' }} />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex flex-column align-items-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="tab nav-item p-2">
                                <a className="navtext nav-link" href="#" onClick={() => navigate("/")}>Início</a>
                            </li>
                            <li className="tab nav-item p-2">
                                <a className="navtext nav-link" href="#" onClick={() => navigate("/inscrições")}>Inscreva-se</a>
                            </li>
                            <li
                                className="tab nav-item p-2 custom-dropdown" // Add a custom class for styling
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <a
                                    className="navtext nav-link" // Removed dropdown-toggle
                                    href="#"
                                    id="submetaDropdown"
                                    role="button"
                                    aria-expanded={dropdownOpen ? "true" : "false"}
                                    onClick={() => navigate("/submeta")} // Prevent default navigation
                                >
                                    Submeta seu trabalho
                                </a>
                                {dropdownOpen && ( // Conditionally render the dropdown menu
                                    <ul
                                        className="custom-dropdown-menu" // Custom class for the dropdown menu
                                        aria-labelledby="submetaDropdown"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={() => navigate("/pesquisa-graduacao")}>
                                                Pesquisa - Graduação
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={() => navigate("/pesquisa-pos-graduacao")}>
                                                Pesquisa - Pós-graduação
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={() => navigate("/ensino-extensao")}>
                                                Ensino/Extensão - Geral
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="tab p-2 nav-item">
                                <a className="navtext nav-link" href="#" onClick={() => navigate("/anais")}>Anais</a>
                            </li>
                            <li className="tab p-2 nav-item">
                                <a className="navtext nav-link" href="#" onClick={() => navigate("/certificados")}>Certificados</a>
                            </li>
                            <li className="tab p-2 nav-item">
                                <a className="navtext nav-link" href="#" onClick={() => navigate("/faq")}>Perguntas Frequentes</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;