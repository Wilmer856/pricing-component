import { useState } from 'react';

export function PriceToggle({ onToggle }) {

    const [isMonthly, setIsMonthly] = useState(false);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
        onToggle(!isMonthly);
    };

  return (
    <div>
      <div className="heading-container">
        <h3 className={`toggle-setting ${!isMonthly ? 'active' : ''}`}>Annually</h3>
        <div className="toggle-box">
          <div className={`toggle-switch ${isMonthly ? 'monthly-price' : ''}`} onClick={handleToggle}></div>
        </div>
        <h3 className={`toggle-setting ${isMonthly ? 'active' : ''}`}>Monthly</h3>
      </div>
    </div>
  );
}

