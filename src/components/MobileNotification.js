// MobileNotification.js
import React, { useEffect } from "react";
import { showMobileNotification } from "../helpers/helpers";

const MobileNotification = ({ mobileNoti, setShowMobileNotification }) => {
  useEffect(() => {
    if (mobileNoti) {
      // Show mobile notification and set state
      setShowMobileNotification(true);

      // Hide mobile notification after a delay
      setTimeout(() => {
        setShowMobileNotification(false);
      }, 4000); // Adjust the timeout as needed
    }
  }, [mobileNoti, setShowMobileNotification]);

  return (
    <div>
      <div className={`mobile-noti ${mobileNoti ? "show" : ""}`}>
        <p>You have already entered this letter</p>
      </div>
    </div>
  );
};

export default MobileNotification;
