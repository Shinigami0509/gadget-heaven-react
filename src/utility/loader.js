// routes.jsx or wherever you define loaders
const gadgetLoader = async () => {
  const res = await fetch('gadget.json'); // or API
  const data = await res.json();
  return data; // MUST BE AN ARRAY
};

export {gadgetLoader}
