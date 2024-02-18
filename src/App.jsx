import { useState } from 'react'
import { PriceToggle } from './TogglePrices'
import { CardHolder } from './CardHolder'


export default function App() {

  const [isMonthly, setIsMonthly] = useState(false);

  const handleToggle = (value) => {
    setIsMonthly(value);
  };

  return (
    <>
      <h1 className="primary-text">Our Pricing</h1>
      <PriceToggle onToggle={handleToggle} />
      <CardHolder isMonthly={isMonthly} />
    </>
  );
}


