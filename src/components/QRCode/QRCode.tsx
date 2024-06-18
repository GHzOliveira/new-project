import QRCode from 'qrcode.react';

const QRCodeComponent = () => {
  const url = 'http://localhost:3000';

  return (
    <div>
      <h1>QR Code para o Projeto</h1>
      <QRCode value={url} />
    </div>
  );
};

export default QRCodeComponent;
