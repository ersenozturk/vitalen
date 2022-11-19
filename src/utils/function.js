export const randomItemFunc = (value) => {
    return value?.[Math.floor(Math.random() * value?.length)]
  };