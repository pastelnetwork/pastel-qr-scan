import LZUTF8 from 'lzutf8';

import { TQRCodeProps, TAddressesAndPastelID } from './QrScan.types';

export const parseQRCodeFromString = (str: string): TQRCodeProps | null => {
  if (!str) {
    return null;
  }

  const qr = str.split('::');
  if (qr?.length) {
    return {
      index: Number(qr[0]),
      total: Number(qr[1]),
      qrCode: qr[2],
    };
  }

  return null;
};

export const decompressPastelIDAndPrivateKeys = (str: string): TAddressesAndPastelID | null => {
  if (!str) {
    return null;
  }

  return JSON.parse(
    LZUTF8.decompress(decodeURIComponent(str), {
      inputEncoding: 'Base64',
    }),
  );
};
