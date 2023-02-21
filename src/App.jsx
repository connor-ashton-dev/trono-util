import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from './Pdf';
import { useState } from 'react';
import MakeStuff from './MakeStuff';
import Person from './Person';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [cart, setCart] = useState([]);
  const [proceed, setProceed] = useState(false);
  const [discount, setDiscount] = useState('');
  const [ppe, setPPE] = useState('');
  const [shipName, setShipName] = useState('');
  const [shipAddy, setShipAddy] = useState('');
  const [shipRegion, setShipRegion] = useState('');
  const [billName, setBillName] = useState('');
  const [billRegion, setBillRegion] = useState('');
  const [billAddy, setBillAddy] = useState('');
  const [billDate, setBillDate] = useState('');
  const [billNumber, setBillNumber] = useState('');

  return (
    <div className="h-screen">
      {!proceed && (
        <Person
          setProceed={setProceed}
          setShipName={setShipName}
          setShipAddy={setShipAddy}
          setShipRegion={setShipRegion}
          setBillName={setBillName}
          setBillAddy={setBillAddy}
          setBillRegion={setBillRegion}
          setBillDate={setBillDate}
          setBillNumber={setBillNumber}
          shipName={shipName}
          shipAddy={shipAddy}
          shipRegion={shipRegion}
          billName={billName}
          billAddy={billAddy}
          billRegion={billRegion}
          billNumber={billNumber}
          billDate={billDate}
        />
      )}

      {!submitted && proceed && (
        <MakeStuff
          cart={cart}
          setCart={setCart}
          setSubmitted={setSubmitted}
          setDiscount={setDiscount}
          discount={discount}
          setPPE={setPPE}
          ppe={ppe}
          setProceed={setProceed}
        />
      )}

      {submitted && (
        <>
          <button
            className="py-3 px-3 ml-3 bg-slate-700 text-white my-2 rounded-lg"
            onClick={() => setSubmitted(!submitted)}
            discount={discount}
          >
            Go back
          </button>
          <PDFViewer className="h-screen w-screen">
            <PDF
              cart={cart}
              ppe={ppe}
              discount={discount}
              shipName={shipName}
              shipAddy={shipAddy}
              shipRegion={shipRegion}
              billName={billName}
              billAddy={billAddy}
              billRegion={billRegion}
              billNumber={billNumber}
              billDate={billDate}
            />
          </PDFViewer>
        </>
      )}
    </div>
  );
}

export default App;
