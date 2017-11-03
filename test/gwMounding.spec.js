/* global describe, it, before */

import chai from 'chai';
import { mounding } from '../src';

chai.expect();

const expect = chai.expect;

describe('Given the mounding hMax-function', () => {
    const values = [
        [0.045, 40, 20, 35, 0.085, 1.8, 2, 2, 35.16],
        [5.000, 40, 20, 35, 0.085, 1.8, 2, 2, 49.38],

    ];

    values.forEach( v => {
        const w = v[0];
        const L = v[1];
        const W = v[2];
        const hi = v[3];
        const Sy = v[4];
        const K = v[5];
        const t = v[6];
        const decimals = v[7];
        const expected = v[8].toFixed(decimals);

        it('calculating hMax', () => {
            expect(mounding.calculateHMax(w, L, W, hi, Sy, K, t).toFixed(decimals)).to.be.equal(expected);
        });
    });
});

describe('Given the mounding xMax-function', () => {
    const values = [
        [0.045, 40, 20, 35, 0.085, 1.8, 2, 2, 35.16],
        [5.000, 40, 20, 35, 0.085, 1.8, 2, 2, 49.38],

    ];

    values.forEach( v => {
        const w = v[0];
        const L = v[1];
        const W = v[2];
        const hi = v[3];
        const Sy = v[4];
        const K = v[5];
        const t = v[6];
        const decimals = v[7];
        const expected = v[8].toFixed(decimals);

        it('calculating hMax', () => {
            expect(mounding.calculateHMax(w, L, W, hi, Sy, K, t).toFixed(decimals)).to.be.equal(expected);
        });
    });
});

describe('Given the mounding hHi-function', () => {
    const values = [
        [10, 0, 0.045, 40, 20, 35, 0.085, 1.8, 2, 2, 0.15],
        [0, 0, 0.045, 40, 20, 35, 0.085, 1.8, 2, 2, 0.16],
        [0, 0, 5, 40, 20, 35, 0.085, 1.8, 2, 2, 14.38],
    ];

    values.forEach( v => {
        const x = v[0];
        const y = v[1];
        const w = v[2];
        const L = v[3];
        const W = v[4];
        const hi = v[5];
        const Sy = v[6];
        const K = v[7];
        const t = v[8];
        const decimals = v[9];
        const expected = v[10].toFixed(decimals);

        it('calculating hHi', () => {
            expect(mounding.calculateHi(x, y, w, L, W, hi, Sy, K, t).toFixed(decimals)).to.be.equal(expected);
        });
    });
});
