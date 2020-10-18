import React, { useEffect, useState, useContext } from "react";
import { FaFacebook, FaShare, FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useParams } from 'react-router-dom'
import { ThemeContext } from 'styled-components'

import { Container } from'../styles/pages/orphanage';
import Sidebar from "../components/Sidebar";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
  latitude: number
  longitude: number
  name: string
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: string
  images: Array<{
    id: number
    url: string
  }>
  contact: {
    whatsapp?: string,
    facebook?: string,
    website?: string,
  }
}

interface OrphanageParams {
  id: string
}

export default function Orphanage() {
  const { title } = useContext(ThemeContext)

  const params = useParams<OrphanageParams>()
  const [orphanage, setOrphanage] = useState<Orphanage>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      console.log(response.data)
      setOrphanage(response.data)
    })
  }, [params.id])

  if(!orphanage) return <p>Carregando...</p>

  return (
    <Container>
      <div id="page-orphanage">
        <Sidebar />

        <main>
          <div className="orphanage-details">
            <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />

            <div className="images">
              {orphanage.images.map((image, index) => {
                return (
                  <button 
                    key={image.id} 
                    className={activeImageIndex === index ? "active" : ""} 
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img src={image.url} alt={orphanage.name} />
                  </button>
                )
              })}
              
            </div>
            
            <div className="orphanage-details-content">
              <h1>{orphanage.name}</h1>
              <p>{orphanage.about}</p>

              <div className="map-container">
                <Map 
                  center={[orphanage.latitude, orphanage.longitude]} 
                  zoom={11} 
                  style={{ width: '100%', height: 280 }}
                  dragging={false}
                  touchZoom={false}
                  zoomControl={false}
                  scrollWheelZoom={false}
                  doubleClickZoom={false}
                >
                  {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                  { 
                    title === 'light'
                    ? (
                      <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                      )
                    : (
                      <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                    )
                  }
                  <Marker interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
                </Map>

                <footer>
                  <a href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`} target="_blank" rel="noopener noreferrer">Ver rotas no Google Maps</a>
                </footer>
              </div>

              <hr />

              <h2>Instruções para visita</h2>
              <p>{orphanage.instructions}</p>

              <div className="open-details">
                <div className="hour">
                  <FiClock size={32} color="#15B6D6" />
                  Segunda à Sexta <br />
                  {orphanage.opening_hours}
                </div>
                
                {
                  orphanage.open_on_weekends
                  ? (
                    <div className="open-on-weekends">
                      <FiInfo size={32} color="#39CC83" />
                      Atendemos <br />
                      fim de semana
                    </div>
                  )
                  : (
                    <div className="open-on-weekends dont-open">
                      <FiInfo size={32} color="#FF669D" />
                      Não atendemos <br />
                      fim de semana
                    </div>
                  )
                }
              </div>

              <a 
                href={`https://api.whatsapp.com/send?phone=${orphanage.contact.whatsapp}&text=Gostaria%20de%20realizar%20uma%20visita.`} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="contact-whatsapp">
                  <FaWhatsapp size={20} color="#FFF" />
                  Entrar em contato por whatsapp
                </button>
              </a>
              
              {
                orphanage.contact.facebook && (
                  <a 
                    href={`${orphanage.contact.facebook}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button type="button" className="contact-facebook">
                      <FaFacebook size={20} color="#FFF" />
                      Acessar página do Facebook
                    </button>
                  </a>
                )
              }

              {
                orphanage.contact.website && (
                  <a 
                    href={`${orphanage.contact.website}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button type="button" className="contact-website">
                      <FaShare size={20} color="#FFF" />
                      Acessar o site do orfanato
                    </button>
                  </a>
                )
              }

            </div>
          </div>
        </main>
      </div>
    </Container>
  );
}