import { Chart } from 'chart.js';
import { CtLit } from '@conectate/ct-lit';
export default class CtChartJS extends CtLit {
    chart: Chart.ChartConfiguration & Chart;
    type: Chart.ChartType;
    data: Chart.ChartData;
    options: Chart.ChartOptions;
    delay: number;
    autopaint: boolean;
    autoadjust: boolean;
    x_: number;
    y_: number;
    sizeChart: (x: number, y: number) => import("lit-html").TemplateResult;
    ctx: CanvasRenderingContext2D;
    resize: any;
    render(): import("lit-html").TemplateResult;
    constructor();
    firstUpdated(_props: Map<PropertyKey, unknown>): Promise<void>;
    init(): Promise<void>;
    paint(): void;
    disconnectedCallback(): void;
    /**
     * Use Proxy to watch object props change
     * @params obj
     */
    observe<T extends object>(obj: T): T;
    /**
     * Manually update chart
     */
    updateChart: () => void;
}
//# sourceMappingURL=ct-chartjs.d.ts.map