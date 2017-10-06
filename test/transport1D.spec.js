/* global describe, it, before */

import chai from 'chai';
import {transport1D} from '../lib/library.js';

chai.expect();

const expect = chai.expect;

describe('Given the transport1D-function (ogata-banks)', () => {

    const values = [
        [725, 15, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 0.02313],
        [500, 15, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 0.02313],
        [500, 13, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 0.07249],
        [500, 10, 13650, 2.592, 0.002, 0.23, 0.923, 0.01, 1.0000]
    ];

    values.forEach( v => {

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

        it('calculating transport1D-function should return ' + expected, () => {
            expect(transport1D.calculateC(x, t, K, I, ne, alphaL, Kd).toFixed(decimals)).to.be.equal(expected);
        });
    });
});

describe('Given the transport1D-function (ogata-banks)', () => {

    const values = [
        [725, 15, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 2500],
        [500, 15, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 2500],
        [500, 13, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 420],
        [500, 13, 365, 40, 0.002, 0.23, 0.923, 0.01, 60],
        [500, 10, 13650, 2.592, 0.002, 0.23, 0.923, 0.01, 180]
    ];

    values.forEach( v => {

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
            expect(transport1D.calculateTmax(x, K, I, ne, alphaL, Kd).toFixed(decimals)).to.be.equal(expected);
        });
    });
});

describe('Given the transport1D-function (ogata-banks)', () => {

    const values = [
        [725, 15, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 20],
        [500, 15, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 20],
        [500, 13, 365, 2.592, 0.002, 0.23, 0.923, 0.01, 20],
        [500, 13, 365, 40, 0.002, 0.23, 0.923, 0.01, 200],
        [500, 10, 13650, 2.592, 0.002, 0.23, 0.923, 0.01, 400]
    ];

    values.forEach( v => {

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
            expect(transport1D.calculateXmax(t, K, I, ne, alphaL, Kd).toFixed(decimals)).to.be.equal(expected);
        });
    });
});
