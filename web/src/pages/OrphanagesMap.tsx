import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { ThemeContext } from 'styled-components'

import mapMarkerImg from '../images/map-marker.svg'

import { Container } from '../styles/pages/orphanages-map'
import mapIcon from '../utils/mapIcon'
import api from '../services/api'

interface Orphanage {
  id: number
  latitude: number
  longitude: number
  name: string
}

function OrphanagesMap() {
  const { title } = useContext(ThemeContext)
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [])

  return (
    <Container>
      <div id="page-map">

        <aside>

          <header>

            <img src={mapMarkerImg} alt="Happy"/>

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>

          </header>

          <footer>

            <strong>Guarulhos</strong>
            <span>São Paulo</span>

          </footer>

        </aside>

        <Map 
          center={[-23.3915386,-46.593389]}
          zoom={12}
          style={{ width: '100%', height: '100%' }}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />  */}
          { 
            title === 'light'
            ? (
              <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
              )
            : (
              <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            )
          }

          {orphanages.map(orphanage => {
            return (
              <Marker
                key={orphanage.id} 
                position={[orphanage.latitude, orphanage.longitude]}
                icon={mapIcon}
              >
                <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                  {orphanage.name}
                  <Link to={`/orphanages/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#FFF"/>
                  </Link>
                </Popup>
              </Marker>
            )
          })}
        </Map>

        <Link to="/orphanages/create" className="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>
      </div>
    </Container>
  )
}

export default OrphanagesMap