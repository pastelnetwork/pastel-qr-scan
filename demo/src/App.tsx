import { useState } from 'react';
import { QrScan, QrScanResultProps } from 'pastel-qr-scan';

import './global.styles.css';

const App: React.FC = () => {
  const [results, setResults] = useState<QrScanResultProps | null>(null);
  const handleResult = (data: QrScanResultProps) => {
    setResults(data);
  };
  const renderResult = () => {
    if (!results) {
      return;
    }
    if (results?.text) {
      return (
        <div style={{ marginTop: '20px' }}>Content: {results?.text}</div>
      )
    }
    return (
      <div style={{ marginTop: '20px' }}>
        {results?.data?.addressBook?.length ?
          <div>Address Book: {JSON.stringify(results.data.addressBook)}</div> : null
        }
        {results?.data?.pastelIDs?.length ?
          <div>Pastel ID: {JSON.stringify(results.data.pastelIDs)}</div> : null
        }
        {results?.data?.profile?.userName ?
          <div>Username: {results.data.profile.userName}</div> : null
        }
        {results?.data?.tPrivateKeys?.length ?
          <div>tPrivateKey: {JSON.stringify(results.data.tPrivateKeys)}</div> : null
        }
        {results?.data?.zPrivateKeys?.length ?
          <div>zPrivateKey: {JSON.stringify(results.data.zPrivateKeys)}</div> : null
        }
        {results?.data?.userInfo?.length ?
          <div>User Info: {JSON.stringify(results.data.userInfo)}</div> : null
        }
      </div>
    )
  }
  return (
    <div>
      <QrScan
        onResult={handleResult}
        videoWidth="500px"
        videoHeight="500px"
        className="video-container"
      />
      {renderResult()}
    </div>
  );
};

export default App;
