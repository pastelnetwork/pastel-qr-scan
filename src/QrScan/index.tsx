import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

import { QrScanProps, TQRCodeProps } from './QrScan.types';
import { parseQRCodeFromString, decompressPastelIDAndPrivateKeys } from './utils';

export const QrScan: React.FC<QrScanProps> = ({
  className = '',
  videoWidth = '100%',
  videoHeight = '100%',
  onResult,
}) => {
  const [results, setResults] = useState<TQRCodeProps[]>([]);

  return (
    <div className={className}>
      <QrReader
        constraints={{ facingMode: 'user' }}
        onResult={result => {
          if (result) {
            const text = result.getText();
            if (text) {
              const qr = parseQRCodeFromString(text);
              if (qr?.qrCode) {
                const qrExist = results.find(item => item.qrCode === qr?.qrCode);
                if (!qrExist) {
                  let newResults: TQRCodeProps[] = results;
                  newResults.push({
                    index: qr.index,
                    total: qr.total,
                    qrCode: qr.qrCode,
                  });
                  newResults = newResults.sort((a, b) => a.index - b.index);
                  setResults([...newResults]);
                  if (newResults.length === newResults[0]?.total) {
                    const finalData = newResults.map(q => q.qrCode).join('');
                    const keys = decompressPastelIDAndPrivateKeys(finalData);
                    if (onResult) {
                      onResult({
                        data: {
                          zPrivateKeys: keys?.zPrivateKeys,
                          addressBook: keys?.addressBook,
                          pastelIDs: keys?.pastelIDs,
                          profile: keys?.profile,
                          tPrivateKeys: keys?.tPrivateKeys,
                          userInfo: keys?.userInfo,
                        },
                      });
                    }
                  }
                }
              } else if (onResult) {
                onResult({
                  text,
                });
              }
            }
          }
        }}
        videoStyle={{ width: videoWidth, height: videoHeight }}
      />
    </div>
  );
};
