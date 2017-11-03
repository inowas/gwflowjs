/* global describe, it, before */

import chai from 'chai';
import { helpers } from '../src/index';

chai.expect();

const expect = chai.expect;

describe('Given the erf(c)-function', () => {
    const values = [
        [0.00, 0.0000000, 1.0000000],
        [0.05, 0.0563720, 0.9436280],
        [0.10, 0.1124629, 0.8875371],
        [0.15, 0.1679960, 0.8320040],
        [0.20, 0.2227026, 0.7772974],
        [0.25, 0.2763264, 0.7236736],
        [0.30, 0.3286268, 0.6713732],
        [0.35, 0.3793821, 0.6206179],
        [0.40, 0.4283924, 0.5716076],
        [0.45, 0.4754817, 0.5245183],
        [0.50, 0.5204999, 0.4795001],
        [0.55, 0.5633234, 0.4366766],
        [0.60, 0.6038561, 0.3961439],
        [0.65, 0.6420293, 0.3579707],
        [0.70, 0.6778012, 0.3221988],
        [0.75, 0.7111556, 0.2888444],
        [0.80, 0.7421010, 0.2578990],
        [0.85, 0.7706681, 0.2293319],
        [0.90, 0.7969082, 0.2030918],
        [0.95, 0.8208908, 0.1791092],
        [1.00, 0.8427008, 0.1572992],
        [1.10, 0.8802051, 0.1197949],
        [1.20, 0.9103140, 0.0896860],
        [1.30, 0.9340079, 0.0659921],
        [1.40, 0.9522851, 0.0477149],
        [1.50, 0.9661051, 0.0338949],
        [1.60, 0.9763484, 0.0236516],
        [1.70, 0.9837905, 0.0162095],
        [1.80, 0.9890905, 0.0109095],
        [1.90, 0.9927904, 0.0072096],
        [2.00, 0.9953223, 0.0046777],
        [2.10, 0.9970205, 0.0029795],
        [2.20, 0.9981372, 0.0018628],
        [2.30, 0.9988568, 0.0011432],
        [2.40, 0.9993115, 0.0006885],
        [2.50, 0.9995930, 0.0004070],
        [2.60, 0.9997640, 0.0002360],
        [2.70, 0.9998657, 0.0001343],
        [2.80, 0.9999250, 0.0000750],
        [2.90, 0.9999589, 0.0000411],
        [3.00, 0.9999779, 0.0000221],
        [3.10, 0.9999884, 0.0000116],
        [3.20, 0.9999940, 0.0000060],
        [3.30, 0.9999969, 0.0000031],
        [3.40, 0.9999985, 0.0000015],
        [3.50, 0.9999993, 0.0000007]
    ];

    values.forEach( v => {
        const x = v[0];
        const decimals = 5;
        const expected = v[1].toFixed(decimals);

        it('calculating erf(x) with x=' + x + ' should return ' + expected, () => {
            expect(helpers.erf(x, decimals)).to.be.equal(expected);
        });
    });

    values.forEach( v => {
        const x = v[0];
        const decimals = 4;
        const expected = v[2].toFixed(decimals);

        it('calculating erfc(x) with x=' + x + ' should return ' + expected, () => {
            expect(helpers.erfc(x, decimals)).to.be.equal(expected);
        });
    });
});

describe('Given the numericallyIntegrate-function', () => {
    const f = (x) => {
        return Math.pow(x, 3) - 2 * Math.pow(x, 2) + 2;
    };

    const values = [
        [-1.5, -1, 0.0001, 3, -1.599],
        [-1, 0, 0.0001, 3, 1.083],
        [-0.8, 0, 0.0001, 3, 1.156],
        [0, 1, 0.001, 3, 1.582],
        [0, 5, 0.0001, 1, 82.9],
    ];

    values.forEach( v => {
        const a = v[0];
        const b = v[1];
        const dx = v[2];
        const decimals = v[3];
        const expected = v[4].toFixed(decimals);

        it('calculating with a=' + a + ', b=' + b + ', dx=' + dx + ', should return ' + expected, () => {
            expect(helpers.numericallyIntegrate(a, b, dx, f).toFixed(decimals)).to.be.equal(expected);
        });
    });
});
