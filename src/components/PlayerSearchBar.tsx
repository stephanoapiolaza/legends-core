import React, { useState } from 'react';
import './PlayerSearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { RoutingPath } from 'screens/routing';

const PlayerSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: any) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
      <form onSubmit={handleSearch} className="d-flex">
        <div className="input-group search-bar" role="button" onClick={() => navigate(RoutingPath.talentSearch)}>
          <span className="input-group-text bg-dark border-dark" style={{
              borderTopLeftRadius: '50px',
              borderBottomLeftRadius: '50px',
            }}>
            <FontAwesomeIcon icon={faSearch} className="text-gray" />
          </span>
          <input
            type="text"
            className="form-control bg-dark border-dark text-gray me-3"
            placeholder="Buscar Jugadores..."
            aria-label="Search Players"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              borderTopRightRadius: '50px',
              borderBottomRightRadius: '50px',
              paddingLeft: '5px',
              color: 'white'
            }}
          />
        </div>
      </form>
  );
};

export default PlayerSearchBar;