
export interface DistanceCalculationResponse {

    distance: number | null;
}

export const isDistanceCalculationResponse = (input : any) : input is DistanceCalculationResponse => {

    if (!input) {
        return false;
    }

    let result : boolean = typeof input === "object";
    result = result && (input.distance && typeof input.distance === "number");

    return result;
}