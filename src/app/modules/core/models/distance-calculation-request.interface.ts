
export interface DistanceCalculationRequest {

    dist1: number | null;
    ra1: number | null;
    dec1: number | null;
    dist2: number | null;
    ra2: number | null;
    dec2: number | null;
}

export const isDistanceCalculationRequest = (input: any) : input is DistanceCalculationRequest => {

    if (!input) {
        return false;
    }

    let result: boolean = typeof input === "object";
    result = result && (input.dist1 && typeof input.dist1 === "number");
    result = result && (input.ra1 && typeof input.ra1 === "number");
    result = result && (input.dec1 && typeof input.dec1 === "number");
    result = result && (input.dist2 && typeof input.dist2 === "number");
    result = result && (input.ra2 && typeof input.ra2 === "number");
    result = result && (input.dec2 && typeof input.dec2 === "number");

    return result;
}