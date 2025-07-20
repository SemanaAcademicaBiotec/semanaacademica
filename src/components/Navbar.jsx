/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming Header.css contains your existing styles
import header from '../media/Header.jpg'

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className='header-text'>
            <Link to="/">
                <img src={header} alt="Semana Acadêmica" style={{ width: '100%', height: 'auto', cursor: 'pointer' }} />
            </Link>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex flex-column align-items-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="tab nav-item p-2">
                                <Link className="navtext nav-link" to="/">Início</Link>
                            </li>
                            <li className="tab nav-item p-2">
                                <Link className="navtext nav-link" to="/inscrições">Inscreva-se</Link>
                            </li>
                            <li className="tab nav-item p-2">
                                <Link className="navtext nav-link" to="/apresentacao">Apresentação</Link>
                            </li>
                            <li className="tab nav-item p-2">
                                <Link className="navtext nav-link" to="/cronograma">Cronograma</Link>
                            </li>
                            <li
                                className="tab nav-item p-2 custom-dropdown"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <Link
                                    className="navtext nav-link"
                                    to="/submeta"
                                    id="submetaDropdown"
                                    role="button"
                                    aria-expanded={dropdownOpen ? "true" : "false"}
                                >
                                    Submeta seu trabalho
                                </Link>
                                {dropdownOpen && (
                                    <ul
                                        className="custom-dropdown-menu"
                                        aria-labelledby="submetaDropdown"
                                    >
                                        <li>
                                            <Link className="dropdown-item" to="/pesquisa-graduacao">
                                                Pesquisa - Graduação
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/pesquisa-pos-graduacao">
                                                Pesquisa - Pós-graduação
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/ensino-extensao">
                                                Ensino/Extensão - Geral
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="tab p-2 nav-item">
                                <Link className="navtext nav-link" to="/modelo">Modelos de resumos</Link>
                            </li>
                            <li className="tab p-2 nav-item">
                                <Link className="navtext nav-link" to="/anais">Anais</Link>
                            </li>
                            <li className="tab p-2 nav-item">
                                <Link className="navtext nav-link" to="/certificados">Certificados</Link>
                            </li>
                            <li className="tab p-2 nav-item">
                                <Link className="navtext nav-link" to="/faq">Perguntas Frequentes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;