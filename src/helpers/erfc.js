import erf from './erf';

export default function erfc(x, decimals = 7) {
    return (1 - erf(x, decimals)).toFixed(decimals);
}
