export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  let status = "win";

  // Check if word is a non-empty string
  if (typeof word === "string" && word.trim().length > 0) {
    // Check for win
    word.split("").forEach((letter) => {
      if (!correct.includes(letter)) {
        status = "";
      }
    });
  } else {
    // Handle the case where word is not a non-empty string
    status = "";
  }

  // Check for loss
  if (wrong.length === 9) status = "lose";

  return status;
}

export const showMobileNotification = (setShow) => {
  setShow(true);
  setTimeout(() => {
    setShow(false);
  }, 2000); // Different timeout for mobile notification
};
