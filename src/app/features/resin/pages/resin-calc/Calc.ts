import {FormBuilder} from "@angular/forms";
import {Subject} from "rxjs";

export class Calc {

    private _densityOfEpoxy: number;
    private _ratioResinHardener: number;
    private _percentageColor: number;
    private _massMix: number;
    private _massResin: number;
    private _massHardener: number;
    private _massColor: number;
    private _volMlMix: number;
    private _volMm3Mix: number;
    private _cubeEdgeLength: number;

    public readonly change: Subject<void> = new Subject<void>();

    constructor(
        densityOfEpoxy: number,
        ratioResinHardener: number,
        percentageColor: number,
        massMix: number,
        massResin: number,
        massHardener: number,
        massColor: number,
        volMlMix: number,
        volMm3Mix: number,
        cubeEdgeLength: number,
    ) {
        this._densityOfEpoxy = densityOfEpoxy;
        this._ratioResinHardener = ratioResinHardener;
        this._percentageColor = percentageColor;
        this._massMix = massMix;
        this._massResin = massResin;
        this._massHardener = massHardener;
        this._massColor = massColor;
        this._volMlMix = volMlMix;
        this._volMm3Mix = volMm3Mix;
        this._cubeEdgeLength = cubeEdgeLength;
    }

    /////////////////////////// GET ///////////////////////////

    get densityOfEpoxy(): number {
        return this._densityOfEpoxy;
    }

    get ratioResinHardener(): number {
        return this._ratioResinHardener;
    }

    get percentageColor(): number {
        return this._percentageColor;
    }

    get massMix(): number {
        return this._massMix;
    }

    get massResin(): number {
        return this._massResin;
    }

    get massHardener(): number {
        return this._massHardener;
    }

    get massColor(): number {
        return this._massColor;
    }

    get volMlMix(): number {
        return this._volMlMix;
    }

    get volMm3Mix(): number {
        return this._volMm3Mix;
    }

    get cubeEdgeLength(): number {
        return this._cubeEdgeLength;
    }

/////////////////////////// SET ///////////////////////////

    set densityOfEpoxy(value: number) {
        console.log("set", 'densityOfEpoxy', value)
        this._densityOfEpoxy = value;
        this.calcByChangeDensityOfEpoxy();
    }

    set ratioResinHardener(value: number) {
        console.log("set", 'ratioResinHardener', value)
        this._ratioResinHardener = value;
        this.calcByChangeRatioResinHardener();
    }

    set percentageColor(value: number) {
        console.log("set", 'percentageColor', value)
        this._percentageColor = value;
        this.calcByChangePercentageColor();
    }

    set massMix(value: number) {
        console.log("set", 'massMix', value)
        this._massMix = value;
        this.calcByChangeMassMix();
    }

    set massResin(value: number) {
        console.log("set", 'massResin', value)
        this._massResin = value;
        this.calcByChangeMassResin();
    }

    set massHardener(value: number) {
        console.log("set", 'massHardener', value)
        this._massHardener = value;
        this.calcByChangeMassHardener();
    }

    set massColor(value: number) {
        console.log("set", 'massColor', value)
        this._massColor = value;
        this.calcByChangeMassColor();
    }

    set volMlMix(value: number) {
        this._volMlMix = value;
        this.calcByChangeVolMlMix();
    }

    set volMm3Mix(value: number) {
        this._volMm3Mix = value;
        this.calcByChangeVolMm3Mix();
    }

    set cubeEdgeLength(value: number) {
        this._cubeEdgeLength = value;
        this.calcByChangeCubeEdgeLength();
    }

/////////////////////////// CALC ///////////////////////////

    private calcByChangeMassMix(): void {
        console.log("calcByChangeMassMix");
        this.calcPropsMassesOfComponents();
        this.calcPropsVolsMix();
        this.triggerChange();
    }

    private calcByChangeRatioResinHardener() {
        console.log("calcByChangeRatioResinHardener");
        this.calcPropsMassesOfComponents();
        this.triggerChange();
    }

    private calcByChangePercentageColor() {
        console.log("calcByChangePercentageColor");
        this.calcPropsMassesOfComponents();
        this.triggerChange();
    }

    private calcByChangeMassColor() {
        console.log("calcByChangeMassColor");
        this.calcPropsMix();
        this.calcPropMassResin();
        this.calcPropMassHardener();
        this.calcPropPercentageColor();
        this.triggerChange();
    }

    private calcByChangeMassResin() {
        console.log("calcByChangeMassResin");
        this.calcPropsMix();
        this.calcPropRatioResinHardener();
        this.calcPropPercentageColor();
        this.triggerChange();
    }

    private calcByChangeMassHardener() {
        console.log("calcByChangeMassHardener");
        this.calcPropsMix();
        this.calcPropRatioResinHardener();
        this.calcPropPercentageColor();
        this.triggerChange();
    }

    private calcByChangeDensityOfEpoxy() {
        console.log("calcByChangeDensityOfEpoxy");
        this.calcPropsVolsMix();
        this.triggerChange();
    }

    private calcByChangeVolMlMix() {
        console.log("calcByChangeVolMlMix");
        this.calcPropMassMixByVolMlMix();
        this.calcPropsMassesOfComponents();
        this.calcPropVolMm3Mix();
        this.calcPropCubeEdgeLength();
        this.triggerChange();
    }

    private calcByChangeVolMm3Mix() {
        console.log("calcByChangeVolMm3Mix");
        this.calcPropMassMixByVolMm3Mix();
        this.calcPropsMassesOfComponents();
        this.calcPropVolMlMix();
        this.calcPropCubeEdgeLength();
        this.triggerChange();
    }

    private calcByChangeCubeEdgeLength() {
        console.log("calcByChangeCubeEdgeLength");
        this.calcPropMassMixByCubeEdgeLength();
        this.calcPropsMassesOfComponents();
        this.calcPropVolMlMix();
        this.calcPropVolMm3Mix();
        this.triggerChange();
    }

    /////////////////////////// PROP CALC  ///////////////////////////

    private calcPropsMix(): void {
        this.calcPropMassMixByMassesOfComponents();
        this.calcPropsVolsMix();
    }

    private calcPropsMassesOfComponents(): void {
        this.calcPropMassColor();
        this.calcPropMassResin();
        this.calcPropMassHardener();
    }

    private calcPropsVolsMix(): void {
        this.calcPropVolMlMix();
        this.calcPropVolMm3Mix();
        this.calcPropCubeEdgeLength();
    }

    private calcPropMassMixByMassesOfComponents(): void {
        this._massMix = this._massResin + this._massHardener + this._massColor;
    }

    private calcPropMassMixByVolMlMix(): void {
        this._massMix = this._densityOfEpoxy * this._volMlMix / 1000;
    }

    private calcPropMassMixByVolMm3Mix(): void {
        this._massMix = this._densityOfEpoxy * this._volMm3Mix / 1000000;
    }

    private calcPropMassMixByCubeEdgeLength(): void {
        this._massMix = Math.pow(this._cubeEdgeLength, 3) * this._densityOfEpoxy / 1000000;
    }

    private calcPropVolMlMix(): void {
        this._volMlMix = this.calcValMm3ByDensity() / 1000;
    }

    private calcPropVolMm3Mix(): void {
        this._volMm3Mix = this.calcValMm3ByDensity();
    }

    private calcPropCubeEdgeLength(): void {
        this._cubeEdgeLength = Math.cbrt(this.calcValMm3ByDensity());
    }

    private calcPropMassResin(): void {
        const massMixWithoutColor: number = this.calcValMassMixWithoutMassColor();
        this._massResin = massMixWithoutColor / ((1 / this._ratioResinHardener) + 1)
    }

    private calcPropMassHardener(): void {
        const massMixWithoutColor: number = this.calcValMassMixWithoutMassColor();
        this._massHardener = massMixWithoutColor / (this._ratioResinHardener + 1)
    }

    private calcPropMassColor(): void {
        this._massColor = this._percentageColor / 100 * this.massMix
    }

    private calcPropPercentageColor(): void {
        const massColorInMassMix: number = this.calcValMassColorInMassMix();
        this._percentageColor = 100 / massColorInMassMix;
    }

    private calcPropRatioResinHardener() {
        this._ratioResinHardener = this._massResin / this._massHardener;
    }

    /////////////////////////// HELP CALC  ///////////////////////////

    private calcValMassMixWithoutMassColor(): number {
        return this._massMix - this._massColor;
    }

    private calcValMassColorInMassMix(): number {
        return this._massMix / this._massColor;
    }

    private calcValMm3ByDensity(): number {
        return this._massMix / this._densityOfEpoxy * 1000000
    }

    /////////////////////////// MISC ///////////////////////////

    private triggerChange() {
        console.log("claculated massMic", this._massResin + this._massHardener + this._massColor);
        this.change.next();
    }
}
