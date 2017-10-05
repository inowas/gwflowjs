import erf from './erf';
import numericallyIntegrate from './numericallyIntegrate';

function S(alpha, beta) {
    const func = (tau) => {
        if (tau !== 0) {
            const sqrtTau = Math.sqrt(tau);
            return erf(alpha / sqrtTau) * erf(beta / sqrtTau);
        }

        return 0;
    };

    return numericallyIntegrate(0, 1, 0.001, func);
}

export function calculateHi(x, y, w, L, W, hi, Sy, K, t) {
    const a = W / 2;
    const l = L / 2;
    const v = K * hi / Sy;
    const sqrt4vt = Math.sqrt(4 * v * t);

    const s1 = S((l + x) / sqrt4vt, (a + y) / sqrt4vt);
    const s2 = S((l + x) / sqrt4vt, (a - y) / sqrt4vt);
    const s3 = S((l - x) / sqrt4vt, (a + y) / sqrt4vt);
    const s4 = S((l - x) / sqrt4vt, (a - y) / sqrt4vt);

    return Math.sqrt(w / 2 / K * v * t * (s1 + s2 + s3 + s4) + hi * hi).toFixed(5) - hi.toFixed(5); // eq 1
}

export function calculateHMax(w, L, W, hi, Sy, K, t) {
    return calculateHi(0, 0, w, L, W, hi, Sy, K, t) + hi;
}
