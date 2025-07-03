import React from "react";

interface OpdrachtgeversDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const OpdrachtgeversDetailsModal: React.FC<OpdrachtgeversDetailsModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
                background: "rgba(0, 0, 0, 0.2)", // Subtle black tint
                backdropFilter: "blur(5px)", // Adds blur effect to the background
                WebkitBackdropFilter: "blur(5px)", // For Safari support
            }}
            onClick={onClose}
        >

            {/* Popup Content */}
            <div
                className="relative text-white bg-customer-details-popup shadow-lg p-6 w-full max-w-lg mx-4 md:mx-0"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
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
                    <Image
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
                    <p className="text-gray-600">
                        {opdrachtgevers[selectedImageIndex].period}
                    </p>
                    <h3 className={`text-xl font-semibold mt-4 mb-2`}>
                        Opdracht omschrijving
                    </h3>
                    <p className="text-gray-600">{opdrachtgevers[selectedImageIndex].description}</p>
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
    );
};
