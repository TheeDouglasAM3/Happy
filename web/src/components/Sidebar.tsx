import React from 'react'
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import mapMarkerImg from '../images/map-marker.svg';

import { Container } from '../styles/components/sidebar'

export default function Sidebar() {

  const { goBack } = useHistory();

  return (
    <Container>
      <aside className="app-sidebar">
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    </Container>
  )
}