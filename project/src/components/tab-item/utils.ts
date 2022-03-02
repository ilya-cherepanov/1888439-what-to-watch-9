const makeSlug = (text: string): string =>
  text.trim().toLowerCase().replace(/ /g, '-').replace(/&/g, 'and');


export {makeSlug};
