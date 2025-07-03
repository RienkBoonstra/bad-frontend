"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Opdrachtgever } from './opdrachtgever';

const opdrachtgevers: Opdrachtgever[] = [];

// This controls modal visibility
const hidePopup = () => setIsModalOpen(false);

const OpdrachtgeverGallery = () => {
    const opdrachtgevers = [
        { image: "/clients/cjib.png", name: "CJIB", description: "Ontwikkeld en geoptimaliseerd Java-gebaseerde" +
                " back-end services voor het geautomatiseerde incassosysteem van het CJIB. Werkzaamheden omvatten" +
                " het refactoren van legacy-code, het vervangen van Eclipse Link door Hibernate van de en JPA, en het " +
                "implementeren van RESTful API’s voor koppelingen met interne en externe systemen. Binnen een Agile-team " +
                "samengewerkt aan schaalbare en betrouwbare oplossingen ter ondersteuning van ketenpartners en processen" +
                " binnen het domein van verkeers- en strafrecht.", period: "2024-2025" },
        { image: "/clients/dpg-media.png", name: "DPG Media", description: "A leading media group serving quality and information.", period: "2018-2023"},
        { image: "/clients/ing.png", name: "ING", description: "A trusted global leader in banking services.", period: "2014-2018" },
        { image: "/clients/nn.png", name: "NN Group", description: "An international financial services provider.", period: "2020-2021" },
    ];

    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const showPopup = (index: number) => {
        setSelectedImageIndex(index);
    };

    const hidePopup = () => {
        setSelectedImageIndex(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {opdrachtgevers.map((opdrachtgever, index) => (
                    <div
                        key={index}
                        className="relative w-full h-48 shadow-md
                       hover:shadow-lg cursor-pointer transform transition duration-200 hover:scale-105 overflow-hidden"
                        onClick={() => showPopup(index)}
                    >
                        {/* Image */}
                        <div className="w-full h-full relative">
                            <Image
                                src={opdrachtgever.image}
                                alt={opdrachtgever.name}
                                fill
                                className="object-contain"
                            />

                            {/* Period Overlay */}
                            <div
                                className="absolute bottom-0 left-0 right-0 text-white text-sm bg-black bg-opacity-50 px-2 py-1 text-center">
                                {opdrachtgever.period}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup */}
            {selectedImageIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    style={{
                        background: "rgba(0, 0, 0, 0.2)", // Subtle black tint
                        backdropFilter: "blur(5px)", // Adds blur effect to the background
                        WebkitBackdropFilter: "blur(5px)", // For Safari support
                    }}
                    onClick={hidePopup}
                >

                    {/* Popup Content */}
                    <div
                        className="relative text-white bg-customer-details-popup shadow-lg p-6 w-full max-w-4xl mx-4 md:mx-0"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={hidePopup}
                            className="absolute top-4 right-4 text-white hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none p-2 shadow-md"
                            aria-label="Close popup"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Logo */}
                        <div className="flex justify-center mb-6">
                            <img
                                src={opdrachtgevers[selectedImageIndex].image}
                                alt={opdrachtgevers[selectedImageIndex].name}
                                width={250}
                                height={250}
                                className="object-contain"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold mb-2">
                                {opdrachtgevers[selectedImageIndex].name}
                            </h2>
                            <p className="text-gray-300">
                                {opdrachtgevers[selectedImageIndex].period}
                            </p>

                            <h3 className={`text-xl font-semibold mt-4 mb-2`}>
                                Opdracht omschrijving
                            </h3>
                            <p className="text-gray-300">{opdrachtgevers[selectedImageIndex].description}</p>
                            <p>

                            </p>
                            <h3 className={`text-xl font-semibold mt-4 mb-2`}>
                                Toegepaste technieken
                            </h3>
                            <ul>
                                <li>Java 17</li>
                                <li>Spring Boot 3.x.x</li>
                                <li>Postgress x.x.x</li>
                                <li>Kubernetes</li>
                                <li>Cucumber x.x.x</li>
                                <li>[...]</li>
                            </ul>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OpdrachtgeverGallery;
