import erfc from './erfc';

/*
T08. 1D transport model (Ogata-Banks)

C	= Concentration of the solute in the fluid [ML-3]
C0	= Initial (t=0) concentration of the solute in the fluid [ML-3]
DL	= Longitudinal dispersion coefficient [L2T– 1]
vx	= Down gradient average fluid velocity [LT– 1]
x	= Down gradient distance from constant point concentration [L]
t	= Time since introduction of constant point concentration [T]
R	= Retardation factor [-]
erfc	= complementary error function
*/


/*
Longitudinal dispersion coefficient

DL	= Longitudinal dispersion coefficient [L2T– 1]
alphaL	= Longitudinal dispersivity [L]
vx	= Down gradient average fluid velocity [LT– 1]
*/
function calculateDL(alphaL, vx) {
    return (alphaL * vx);
}

/*
Bulk density

rhoB= Bulk density [ML-3]
ne	= Effective porosity [-]
rhoS= Particle density [ML-3]
 */
function calculateRHob(ne, rhoS = 2.65) {
    return (1 - ne) * rhoS;
}

/*
R	= Retardation factor [-]
Kd	= Sorption partition coefficient [L3M-1]
rhoB= Bulk density [ML-3]
ne	= Effective porosity [-]
 */
function calculateR(ne, Kd) {
    const rhoB = calculateRHob(ne);
    return (1 + Kd * rhoB / ne);
}

/*
Down gradient average fluid velocity (vX)

K = Hydraulic conductivity [m/d]
ne	= Effective porosity [-]
I = Hydraulic gradient
 */
function calculateVx(K, ne, I) {
    return K * I / ne;
}

/*
KOC	= Partition coefficient between organic carbon in the soil and water [LM-1]
KOW	= Octanol/water partition coefficient [LM-1]
a	= 1 (Constant according to Karickhoff et. al, 1979)
b	= 0.21 (Constant according to Karickhoff et. al, 1979)
*/
function calculateKoc(Kow, a = 1, b = 0.21) {
    return Math.exp(a * Math.log(Kow) - b);
}

/*
Kd	= Sorption partition coefficient [L3M-1]
Kow	= Octanol/water partition coefficient [LM-1]
cOrg	= Organic carbon content in the soil [MM]
 */
export function calculateKd(Kow, cOrg) {
    return calculateKoc(Kow) * cOrg;
}

export function calculateTmax(x, K, I, ne, alphaL, Kd) {
    let c = 0;
    let t = 0;
    while (c < 0.9999) {
        c = this.calculateC(x, t, K, I, ne, alphaL, Kd);
        t = t + 20;
    }

    return t;
}

export function calculateXmax(t, K, I, ne, alphaL, Kd) {
    let c = 1;
    let x = 0;
    while (c > 0.0001) {
        c = this.calculateC(x, t, K, I, ne, alphaL, Kd);
        x = x + 20;
    }

    return x;
}

export function calculateC(x, t, K, I, ne, alphaL, Kd) {
    const vx = calculateVx(K, ne, I);
    const DL = calculateDL(alphaL, vx);
    const R = calculateR(ne, Kd);

    const term1 = erfc((x - (vx * t / R)) / (2 * Math.sqrt(DL * t / R)));
    const term2 = erfc((x + (vx * t / R)) / (2 * Math.sqrt(DL * t / R)));

    return (0.5 * (term1 + Math.exp(vx * x / DL) * term2));
}
