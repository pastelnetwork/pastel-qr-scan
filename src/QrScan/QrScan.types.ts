export interface TQRCodeProps {
  qrCode: string;
  total: number;
  index: number;
}

export interface TPrivateKey {
  address: string;
  privateKey: string;
}

export interface TUserInfo {
  username: string;
  password: string;
  newPassword: string;
  pastelId: string;
  addresses?: string[];
  pastelIds?: string[];
  address?: string;
}

export interface TPastelID {
  pastelId: string;
  content: string;
}

export interface TAddressBook {
  label: string;
  address: string;
}

export interface TAddressesAndPastelID {
  zPrivateKeys?: TPrivateKey[];
  tPrivateKeys?: TPrivateKey[];
  pastelIDs?: TPastelID[];
  addressBook?: TAddressBook[];
  profile?: {
    userName: string;
  };
  userInfo?: TUserInfo[];
}

export interface QrScanResultProps {
  text?: string;
  data?: TAddressesAndPastelID;
}

export interface QrScanProps {
  className?: string;
  videoWidth?: string;
  videoHeight?: string;
  onResult?: (_data: QrScanResultProps) => void;
}
