import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Offers } from '../../types/offers';
import { City } from '../../const';

type MapProps = {
  city: City;
  offers: Offers;
  activeCard: number | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const DEFAULT_CITY = {
  lat: 52.374,
  lng: 4.88969
};

function Map({city, offers, activeCard}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, DEFAULT_CITY);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        markers.push(marker);

        marker
          .setIcon(activeCard !== undefined && offer.id === activeCard
            ? currentCustomIcon
            : defaultCustomIcon
          )
          .addTo(map);
      });
    }
    return () => markers.forEach((marker) => marker.remove());
  }, [map, offers, activeCard, city]);

  return <div style={{ height: '100%' }} ref={mapRef} />;
}

export default Map;
