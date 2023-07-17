import {Component, OnInit} from '@angular/core';
import {AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Calc} from "./Calc";


@Component({
    selector: 'app-resin',
    templateUrl: './resin-calc.component.html',
    styleUrls: ['./resin-calc.component.scss']
})
export class ResinCalcComponent implements OnInit {

    private static readonly PATTERN: RegExp = /\d+(\.\d+)?$/; // float or ratio of floats
    private static readonly INITIAL_MASS_MIX: number = 100;
    private static readonly INITIAL_RATIO: number = 100 / 45; // 100:45

    public form: FormGroup;
    private calc: Calc;

    constructor(private formBuilder: FormBuilder) {

        const formControlOptions: AbstractControlOptions = {
            validators: [Validators.required, Validators.pattern(ResinCalcComponent.PATTERN)]
        };

        const densityOfEpoxy: FormControl = new FormControl<number | null>(1200, formControlOptions);
        const ratioResinHardener: FormControl = new FormControl<number | null>(ResinCalcComponent.INITIAL_RATIO, formControlOptions);
        const percentageColor: FormControl = new FormControl<number | null>(0, formControlOptions);
        const massMix: FormControl = new FormControl<number | null>(ResinCalcComponent.INITIAL_MASS_MIX, formControlOptions);
        const massResin: FormControl = new FormControl<number | null>(null, formControlOptions);
        const massHardener: FormControl = new FormControl<number | null>(null, formControlOptions);
        const massColor: FormControl = new FormControl<number | null>(null, formControlOptions);
        const volMlMix: FormControl = new FormControl<number | null>(null, formControlOptions);
        const volMm3Mix: FormControl = new FormControl<number | null>(null, formControlOptions);
        const cubeEdgeLength: FormControl = new FormControl<number | null>(null, formControlOptions);

        this.form = this.formBuilder.group({
            densityOfEpoxy,
            ratioResinHardener,
            percentageColor,
            massMix,
            massResin,
            massHardener,
            massColor,
            volMlMix,
            volMm3Mix,
            cubeEdgeLength,
        });

        this.calc = new Calc(
            densityOfEpoxy.value,
            ratioResinHardener.value,
            percentageColor.value,
            massMix.value,
            massResin.value,
            massHardener.value,
            massColor.value,
            volMlMix.value,
            volMm3Mix.value,
            cubeEdgeLength.value,
        );
        this.calc.change.subscribe(this.onCalced.bind(this))
    }

    ngOnInit() {
        this.calc.massMix = ResinCalcComponent.INITIAL_MASS_MIX;
    }

    onInputChange(event: Event) {
        const inputElement: HTMLInputElement = event.target as HTMLInputElement
        const formControlName: string = inputElement.getAttribute('formControlName') as string
        const formControl: FormControl = this.form.get(formControlName) as FormControl;
        // console.log(formControlName, formControl)
        switch (formControlName) {
            case 'densityOfEpoxy':
                this.calc.densityOfEpoxy = parseFloat(formControl.value);
                break;
            case 'ratioResinHardener':
                this.calc.ratioResinHardener = parseFloat(formControl.value);
                console.log('formControl.value')
                break;
            case 'percentageColor':
                this.calc.percentageColor = parseFloat(formControl.value);
                break;
            case 'massMix':
                this.calc.massMix = parseFloat(formControl.value);
                break;
            case 'massResin':
                this.calc.massResin = parseFloat(formControl.value);
                break;
            case 'massHardener':
                this.calc.massHardener = parseFloat(formControl.value);
                break;
            case 'massColor':
                this.calc.massColor = parseFloat(formControl.value);
                break;
            case 'volMlMix':
                this.calc.volMlMix = parseFloat(formControl.value);
                break;
            case 'volMm3Mix':
                this.calc.volMm3Mix = parseFloat(formControl.value);
                break;
            case 'cubeEdgeLength':
                this.calc.cubeEdgeLength = parseFloat(formControl.value);
                break;
        }
    }

    private onCalced() {
        this.form.get('densityOfEpoxy')?.setValue(this.calc.densityOfEpoxy);
        this.form.get('ratioResinHardener')?.setValue(this.calc.ratioResinHardener);
        this.form.get('percentageColor')?.setValue(this.calc.percentageColor);
        this.form.get('massMix')?.setValue(this.calc.massMix);
        this.form.get('massResin')?.setValue(this.calc.massResin);
        this.form.get('massHardener')?.setValue(this.calc.massHardener);
        this.form.get('massColor')?.setValue(this.calc.massColor);
        this.form.get('volMlMix')?.setValue(this.calc.volMlMix);
        this.form.get('volMm3Mix')?.setValue(this.calc.volMm3Mix);
        this.form.get('cubeEdgeLength')?.setValue(this.calc.cubeEdgeLength);
    }


}
