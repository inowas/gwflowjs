/* global describe, it, before */

import chai from 'chai';
import {transport1d} from '../src/index';

chai.expect();

const expect = chai.expect;

describe('Given the transport1d-function (ogata-banks)', () => {
    const values = [
        [500, 5, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 0.84033],
        [500, 10, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 0.32231],
        [500, 15, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 0.03200],
        [500, 5, 170, 2.592, 0.002, 0.23, 0.923, 0.01, 0.37421],
        [500, 10, 730, 2.592, 0.002, 0.23, 0.923, 0.01, 0.88399],
        [500, 15, 1095, 2.592, 0.002, 0.23, 0.923, 0.01, 0.91521]
    ];

    values.forEach(v => {
        const decimals = 5;

        const C0 = v[0];
        const x = v[1];
        const t = v[2];
        const K = v[3];
        const I = v[4];
        const ne = v[5];
        const alphaL = v[6];
        const Kd = v[7];
        const expected = v[8].toFixed(decimals);

        it('calculating transport1d-function should return ' + expected, () => {
            expect(transport1d.calculateCC0(x, t, K, I, ne, alphaL, Kd).toFixed(decimals)).to.be.equal(expected);
        });
    });
});

describe('Given the transport1d-function (ogata-banks)', () => {
    const values = [
        [725, 15, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 2360],
        [500, 15, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 2360],
        [500, 13, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 2200],
        [500, 13, 365, 40, 0.002, 0.23, 0.923, 0.01, 180],
        [500, 10, 13650, 2.592, 0.002, 0.23, 0.923, 0.01, 1940]
    ];

    values.forEach(v => {
        const decimals = 5;

        const C0 = v[0];
        const x = v[1];
        const t = v[2];
        const K = v[3];
        const I = v[4];
        const ne = v[5];
        const alphaL = v[6];
        const Kd = v[7];
        const expected = v[8].toFixed(decimals);

        it('calculating Tmax-function should return ' + expected, () => {
            expect(transport1d.calculateTmax(x, K, I, ne, alphaL, Kd).toFixed(decimals)).to.be.equal(expected);
        });
    });
});

describe('Given the transport1d-function (ogata-banks)', () => {
    const values = [
        [725, 15, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 60],
        [500, 15, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 60],
        [500, 13, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 60],
        [500, 13, 365, 40, 0.002, 0.23, 0.923, 0.01, 200],
        [500, 10, 13650, 2.592, 0.002, 0.23, 0.923, 0.01, 400]
    ];

    values.forEach(v => {
        const decimals = 5;

        const C0 = v[0];
        const x = v[1];
        const t = v[2];
        const K = v[3];
        const I = v[4];
        const ne = v[5];
        const alphaL = v[6];
        const Kd = v[7];
        const expected = v[8].toFixed(decimals);

        it('calculating XMax-function should return ' + expected, () => {
            expect(transport1d.calculateXmax(t, K, I, ne, alphaL, Kd).toFixed(decimals)).to.be.equal(expected);
        });
    });
});
