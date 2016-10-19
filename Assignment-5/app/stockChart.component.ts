import { NgModule } from "@angular/core";

@NgModule({

})

export class ChartDataInput {
    Normalized: boolean;
    NumberOfDays: number;
    DataPeriod: string;
    Elements: Element[];
}

export class ChartDataOutput {
    Labels: any;
    Positions: number[];
    Dates: string[];
    Elements: Element[];
}

export class Close {
    min: number;
    max: number;
    maxDate: string;
    minDate: string;
    values: number[];
}

export class DataSeries {
    close: Close;
}

export class Element {
    Currency: string;
    TimeStamp: any;
    Symbol: string;
    Type: string;
    DataSeries: DataSeries;
    Params: string[];

    constructor(symbol: string, type: string, params: string[]) {
        this.Symbol = symbol;
        this.Type = type;
        this.Params = params;
    }
}
