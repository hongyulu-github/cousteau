import { dictionary } from "./dictionary";

export const t = (key: string): string => {
  // Mocking languageKeyList as it's not provided in the code snippet
  const languageKeyList: string[] = ["es", "en"];

  // Default language is English
  let languageKey = "en";

  if (navigator && navigator.language) {
    const locale = navigator.language;
    const languageCode = locale.split("-")[0];

    if (languageKeyList.includes(languageCode)) {
      languageKey = languageCode;
    }
  }

  // Check if the key exists in the dictionary
  if (!(key in dictionary)) {
    return key;
  }

  // Return the translation based on the language key
  return (dictionary[key] as { [key: string]: string })[languageKey];
};

// export const middleManCall = async ({ callFunction, props }) => {
//   let response = await callFunction(props);
//   if (response?.error) {
//     console.log(response.error);
//     let msg = t("connectionServerError");

//     if (response.error === "Invalid Token") {
//       msg = t("expiredTokenError");
//     }
//     /*  switch (response.error) {
//         case "Invalid Token":
//           msg = t("expiredTokenError");
//           break;
//       } */

//     if (props?.email && response?.error?.includes("User not found")) {
//       msg = t("UserNotFoundException");
//       alert(msg);
//       //window.location.reload();
//     } else {
//       alert(msg);
//       window.location.replace("/");
//     }
//   } else {
//     return response;
//   }
// };

// export const isSameArray = ({ array1, array2 }) => {
//   let isSame = false;

//   let array1String = JSON.stringify(array1);
//   let array2String = JSON.stringify(array2);

//   if (array1String === array2String) {
//     isSame = true;
//   }

//   return isSame;
// };

// export const deepCopy = (object) => {
//   return object !== undefined ? JSON.parse(JSON.stringify(object)) : undefined;
// };

// export const roundToDecimals = (numberToRound, decimalsToRound) => {
//   numberToRound = parseFloat(numberToRound);
//   if (numberToRound !== 0) {
//     if (numberToRound > 0) {
//       numberToRound += 0.0000000000000005;
//     }
//     if (numberToRound < 0) {
//       numberToRound -= 0.0000000000000007;
//     }
//   }

//   let value = +(
//     Math.round(numberToRound + "e+" + decimalsToRound) +
//     "e-" +
//     decimalsToRound
//   );
//   if (isNaN(value)) {
//     value = 0;
//   }
//   return value;
// };

// export const download = (content, fileName, contentType) => {
//   var a = document.createElement("a");
//   var file = new Blob([content], { type: contentType });
//   a.href = URL.createObjectURL(file);
//   a.download = fileName;
//   a.click();
// };

// export const capitalize = (s) => {
//   if (typeof s !== "string") return "";
//   return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
// };

// export const normalizeText = (text) => {
//   if (text !== undefined && text !== null) {
//     return text
//       .toUpperCase()
//       .normalize("NFD")
//       .replace(/[\u0300-\u036f]/g, "");
//   }
// };

// export const getUserInitials = (persona) => {
//   let initials = "";

//   if (persona?.name && persona?.surname) {
//     initials = `${persona.name[0].toUpperCase()}${persona?.surname?.[0].toUpperCase()}`;
//   } else {
//     let nameList = persona?.name?.split(" ");

//     initials = `${getFirstCharOrEmpty(nameList?.[0])}${getFirstCharOrEmpty(
//       nameList?.[1]
//     )}`;

//     initials = initials?.trim();
//   }

//   return initials;
// };

// // export const isSameArray = ({ array1, array2 }) => {
// //   let isSame = false;

// //   let array1String = JSON.stringify(array1);
// //   let array2String = JSON.stringify(array2);

// //   if (array1String === array2String) {
// //     isSame = true;
// //   }

// //   return isSame;
// // };

// export const calculateDistanceElementFromViewPort = ({
//   elementRef,
//   setDistance,
// }) => {
//   if (elementRef.current) {
//     const { top, bottom, left, right } =
//       elementRef.current.getBoundingClientRect();

//     const viewportHeight = window.innerHeight;
//     const viewportWidth = window.innerWidth;

//     const distanceTop = top;
//     const distanceBottom = viewportHeight - bottom;
//     const distanceLeft = left;
//     const distanceRight = viewportWidth - right;

//     let distance = {
//       top: distanceTop,
//       bottom: distanceBottom,
//       left: distanceLeft,
//       right: distanceRight,
//     };

//     setDistance(distance);
//   }
// };
