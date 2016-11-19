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

export class Record {
    Title: string;
    Url: string;
    Publisher: string;
    PublishDate: string;
    Summary: string;
    IBDStocks: any[];
    IsThirdParty: boolean;
}

export class D {
    __type: string;
    Records: Record[];
    ViewAllUrl: string;
    marketIndices: MarketIndice[];
    UpdateTime: string;
    TimeStamp: string;
    MarketStatus: string;
}

export class StockMarket {
    d: D
}

export class MarketDataInput {
    req: Req;
}

export class Req {
    Symbol: string;
    Type: number;
    StartDate: string;
    EndDate: string;
    EnableBats: boolean;
}

export class ChartProperties {
  chartType: string;
  datasets: any; //{ data: number[]; label: string }[];
  labels: string[];
  options: any;
  colors: any[];
  legend: boolean;
}

export class Series
{
    close: number;
    date: string;
}

export class GetDataResult
{
    series: Series[];
    symbol: string;
}

export class MarketDataOutput
{
    GetDataResult: GetDataResult;
}

export class MarketIndice
{
    Symbol: string;
    IndexValueChange: string;
    IndexValue: string;
    IndexAbbr: string;
    IndexName: string;
    IndexValuePctChange: string;
    IndexVolume: string;
    IndexVolumeChange: string;
    IndexVolumePctChange: string;
    IsUp: boolean;
    Flag: string;
    ChartUrl: string;
}

export class Bullion
{
    symbol: string;
    prices: string[];

    constructor( sym: string) {
        this.symbol = sym;
        this.prices = new Array<string>();
    }

}