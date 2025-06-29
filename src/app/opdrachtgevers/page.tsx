import React from 'react';
import OpdrachtgeverGallery from '../../components/OpdrachtgeverGallery';

const Opdrachtgevers: React.FC = () => {
    return (
        <div>
            {/* Page content */}
            <h1 className="text-3xl font-bold text-center mt-10">Opdrachtgevers:</h1>
            <OpdrachtgeverGallery />
        </div>
    );
};

export default Opdrachtgevers;