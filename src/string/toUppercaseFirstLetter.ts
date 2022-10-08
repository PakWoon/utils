const toUppercaseFirstLetter = (str: string) => {
  const [firstLetter, ...other] = str;
  return [firstLetter.toUpperCase(), ...other].join('');
};

export default toUppercaseFirstLetter;
