'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { majorCities, accurateRivers, cpecRouteAccurate, realMountains } from '@/lib/mapData/pakistan';
import { RiverLayer } from './RiverLayer';
import { CPECLayer } from './CPECLayer';
import { MountainLayer } from './MountainLayer';
import { LayerControl } from './LayerControl';
import { cn } from '@/lib/cn';

export function PakistanInteractive() {
    const [layers, setLayers] = useState({
        rivers: false,
        cpec: false,
        mountains: false,
    });

    const [hoveredInfo, setHoveredInfo] = useState<any>(null);
    const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

    const toggleLayer = (layer: keyof typeof layers) => {
        setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
    };

    return (
        <div className="relative h-[600px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-hard">
            {/* Layer Control */}
            <LayerControl layers={layers} onToggleLayer={toggleLayer} />

            {/* Info Card */}
            <AnimatePresence>
                {hoveredInfo && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-4 top-4 z-10 max-w-sm rounded-xl bg-white p-4 shadow-hard"
                    >
                        <h4 className="mb-2 font-semibold text-oxford-900">{hoveredInfo.name}</h4>
                        <div className="space-y-1 text-sm text-slate-600">
                            {hoveredInfo.origin && <p><strong>Origin:</strong> {hoveredInfo.origin}</p>}
                            {hoveredInfo.length && <p><strong>Length:</strong> {hoveredInfo.length}</p>}
                            {hoveredInfo.height && <p><strong>Height:</strong> {hoveredInfo.height}</p>}
                            {hoveredInfo.range && <p><strong>Range:</strong> {hoveredInfo.range}</p>}
                            {hoveredInfo.capital && <p><strong>Capital:</strong> {hoveredInfo.capital}</p>}
                            {hoveredInfo.population && <p><strong>Population:</strong> {hoveredInfo.population}</p>}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Map */}
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 2200,
                    center: [71, 30],
                }}
                className="h-full w-full"
            >
                {/* Provinces - Load from real GeoJSON */}
                <Geographies geography="/pakistan-simple.json">
                    {({ geographies }: any) =>
                        geographies.map((geo: any) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={selectedProvince === geo.properties.NAME_1 ? "#1e3a8a" : "#e2e8f0"}
                                stroke="#64748b"
                                strokeWidth={0.5}
                                className="cursor-pointer transition-colors hover:fill-oxford-600"
                                onMouseEnter={() => setHoveredInfo(geo.properties)}
                                onMouseLeave={() => setHoveredInfo(null)}
                                onClick={() => setSelectedProvince(geo.properties.NAME_1)}
                            />
                        ))
                    }
                </Geographies>

                {/* Cities */}
                {majorCities.map((city) => (
                    <g key={city.name}>
                        <circle
                            cx={city.coordinates[0]}
                            cy={city.coordinates[1]}
                            r={0.15}
                            fill="#DC2626"
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredInfo(city)}
                            onMouseLeave={() => setHoveredInfo(null)}
                        />
                        <text
                            x={city.coordinates[0]}
                            y={city.coordinates[1] - 0.3}
                            textAnchor="middle"
                            className="fill-slate-900 text-[0.3px] font-medium"
                        >
                            {city.name}
                        </text>
                    </g>
                ))}

                {/* Interactive Layers */}
                <RiverLayer
                    rivers={accurateRivers}
                    isVisible={layers.rivers}
                    onHover={setHoveredInfo}
                />

                <CPECLayer
                    route={cpecRouteAccurate}
                    isVisible={layers.cpec}
                    onSEZClick={(sez) => setHoveredInfo(sez)}
                />

                <MountainLayer
                    mountains={realMountains}
                    isVisible={layers.mountains}
                    onMountainClick={(mountain) => setHoveredInfo(mountain)}
                />
            </ComposableMap>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 p-3 shadow-medium backdrop-blur">
                <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-600"></div>
                        <span>Major Cities</span>
                    </div>
                    {layers.rivers && (
                        <div className="flex items-center gap-2">
                            <div className="h-0.5 w-4 bg-blue-500"></div>
                            <span>Rivers</span>
                        </div>
                    )}
                    {layers.cpec && (
                        <div className="flex items-center gap-2">
                            <div className="h-0.5 w-4 border-t-2 border-dashed border-orange-500"></div>
                            <span>CPEC Route</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
