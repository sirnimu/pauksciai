const convertUTFtoLatin = (str) => {
  const settings = [
    { original: "ą", simplified: "a" },
    { original: "č", simplified: "c" },
    { original: "ę", simplified: "e" },
    { original: "ė", simplified: "e" },
    { original: "į", simplified: "i" },
    { original: "š", simplified: "s" },
    { original: "ų", simplified: "u" },
    { original: "ū", simplified: "u" },
    { original: "ž", simplified: "z" },
  ];

  return settings.reduce(
    (str, letter) => str.replace(letter.original, letter.simplified),
    str
  );
};

export default convertUTFtoLatin;
