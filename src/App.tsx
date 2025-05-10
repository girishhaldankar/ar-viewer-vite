import React from 'react';
import ARViewer from './components/ARViewer';

function App() {
  return (
    <div style={{ padding: '2rem', position: 'relative' }}>
  <h1>View This Chair in Your Room</h1>
  <ARViewer
    modelUrl="https://modelviewer.dev/assets/ShopifyModels/Chair.glb"
    iosModelUrl="https://modelviewer.dev/assets/ShopifyModels/Chair.usdz"
    altText="3D Chair"
  />
</div>
  );
}

export default App;
