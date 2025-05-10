// src/components/ARViewer.jsx
import React from 'react';

const ARViewer = ({ modelUrl, iosModelUrl, altText }) => {
  return (
    <model-viewer
      src={modelUrl}
      ios-src={iosModelUrl}
      alt={altText || '3D model'}
      ar
      ar-modes="scene-viewer quick-look webxr"
      camera-controls
      auto-rotate
      style={{
        width: '100%',
        height: '500px',
        position: 'relative',
      }}
    >
      {/* AR Button */}
      <button
    slot="ar-button"
    style={{
      display: 'block',
      position: 'absolute',
      bottom: '16px',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '12px 24px',
      fontSize: '18px',
      backgroundColor: '#ff6600',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      zIndex: 9999,
      opacity: 1,
      pointerEvents: 'auto',
    }}
  >
        👀 View in Your Room
      </button>
    </model-viewer>
  );
};

export default ARViewer;
