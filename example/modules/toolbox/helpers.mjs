export const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
export const roundDecimals = (val, decimals) => parseFloat(val.toFixed(decimals))
