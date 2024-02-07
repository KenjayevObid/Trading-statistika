// TradingViewWidget.jsx
import React, { memo } from "react";
import TradingWievHeadMap from "./TradingWievHeadMap";
// import TradingWievLine from "./TradingWievLine";
import TradingWievCompony from "./TradingWievCompony";

function TradingViewWidget() {


  return (
    <div style={{display: "flex", justifyContent: 'center', flexDirection: 'column'}}> 
    <TradingWievHeadMap />
    <TradingWievCompony/>
    {/* <TradingWievLine /> */}
     </div>
    
  );
}

export default memo(TradingViewWidget);
