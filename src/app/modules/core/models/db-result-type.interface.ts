
export interface DbResultType {
    columns: string[];
    values: any[][];
}

export const isDbResultType  = (input: any) : input is DbResultType => {

    if (!input) {
        return false;
    }

    if (typeof input === 'object') {
        return (input.columns && input.values);
    }

    return false;
}