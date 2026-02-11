// import React from 'react';

// const Home = () => {
//   const handleYesClick = () => {
//     // Handle the click event for the "Yes" button
//     alert("Yay! Let's spread love together!");
//   };

//   const handleNoClick = () => {
//     // Handle the click event for the "No" button
//     alert("That's okay! Have a lovely day!");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
//       <p className="text-lg mb-8 text-gray-700">Hi Emely! </p>
//       <h1 className="text-4xl text-red-600 font-serif mb-6">Will You Be My Valentine?</h1>
     
//       <div className="flex space-x-4">
//         <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full shadow-md" onClick={handleYesClick}>Yes, I'd love to!</button>
//         <button className="bg-pink-300 hover:bg-pink-400 text-gray-800 font-semibold py-2 px-6 rounded-full shadow-md" onClick={handleNoClick}>No, thanks</button>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';

const Home = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to ryan's ghost",
      "please",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const resetState = () => {
    setNoCount(0);
    setYesPressed(false);
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media1.tenor.com/m/I6OXdw_A6FYAAAAC/soriamoriaa.gif" alt="Kissing bear" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!!!! I LOVE You;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute love bear with roses"
          />
          <h1>Hi Jocelyne :) </h1> 
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={resetState}
              className="rounded bg-gray-400 px-4 py-2 font-bold text-gray-800 hover:bg-gray-500"
            >
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

