'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { pakistanCities, provinceBoundaries, pakistanCenter } from '@/lib/mapData/pakistan-geo';

// Dynamically import map components (Leaflet doesn't work with SSR)
const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    { ssr: false }
);
const Marker = dynamic(
    () => import('react-leaflet').then((mod) => mod.Marker),
    { ssr: false }
);
const Popup = dynamic(
    () => import('react-leaflet').then((mod) => mod.Popup),
    { ssr: false }
);
const Polygon = dynamic(
    () => import('react-leaflet').then((mod) => mod.Polygon),
    { ssr: false }
);

interface PakistanMapProps {
    showCities?: boolean;
    showProvinces?: boolean;
    selectedProvince?: string | null;
}

export default function PakistanMap({
    showCities = true,
    showProvinces = true,
    selectedProvince = null
}: PakistanMapProps) {
    const [mounted, setMounted] = useState(false);
    const [mapType, setMapType] = useState<'street' | 'satellite'>('street');

    useEffect(() => {
        setMounted(true);

        // Import Leaflet CSS
        import('leaflet/dist/leaflet.css');

        // Fix Leaflet marker icon issue
        import('leaflet').then((L) => {
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            });
        });
    }, []);

    if (!mounted) {
        return (
            <div className="flex h-96 items-center justify-center rounded-xl bg-slate-100">
                <div className="text-center">
                    <div className="mb-2 h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-blue-600" />
                    <p className="text-sm text-slate-600">Loading map...</p>
                </div>
            </div>
        );
    }

    const tileUrl = mapType === 'satellite'
        ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    return (
        <div className="relative">
            {/* Map Type Selector */}
            <div className="absolute right-4 top-4 z-[1000] flex gap-2">
                <button
                    onClick={() => setMapType('street')}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold shadow-lg transition-all ${mapType === 'street'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                >
                    Street
                </button>
                <button
                    onClick={() => setMapType('satellite')}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold shadow-lg transition-all ${mapType === 'satellite'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                >
                    Satellite
                </button>
            </div>

            {/* Map Container */}
            <div className="h-96 overflow-hidden rounded-xl shadow-lg ring-1 ring-slate-200 md:h-[600px]">
                <MapContainer
                    center={[pakistanCenter.lat, pakistanCenter.lng]}
                    zoom={pakistanCenter.zoom}
                    style={{ height: '100%', width: '100%' }}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        url={tileUrl}
                        attribution={mapType === 'satellite'
                            ? '&copy; Esri &mdash; Source: Esri'
                            : '&copy; OpenStreetMap contributors'
                        }
                    />

                    {/* Province Boundaries */}
                    {showProvinces && Object.entries(provinceBoundaries).map(([key, province]) => (
                        <Polygon
                            key={key}
                            positions={province.coordinates as any}
                            pathOptions={{
                                color: province.color,
                                weight: 2,
                                fillColor: province.color,
                                fillOpacity: selectedProvince === key ? 0.4 : 0.1
                            }}
                        >
                            <Popup>
                                <div className="text-center">
                                    <h3 className="font-bold text-slate-900">{province.name}</h3>
                                    <p className="text-xs text-slate-600">Click for details</p>
                                </div>
                            </Popup>
                        </Polygon>
                    ))}

                    {/* City Markers */}
                    {showCities && pakistanCities.map((city, index) => (
                        <Marker key={index} position={[city.lat, city.lng]}>
                            <Popup>
                                <div>
                                    <h3 className="font-bold text-slate-900">{city.name}</h3>
                                    <p className="text-xs text-slate-600">{city.province}</p>
                                    <p className="text-xs font-semibold text-blue-600">Pop: {city.population}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            {/* Legend */}
            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                <h4 className="mb-3 text-sm font-semibold text-slate-900">Map Legend</h4>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {Object.entries(provinceBoundaries).map(([key, province]) => (
                        <div key={key} className="flex items-center gap-2">
                            <div
                                className="h-4 w-4 rounded"
                                style={{ backgroundColor: province.color }}
                            />
                            <span className="text-xs text-slate-700">{province.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
