import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {AppComponent} from "../../../app.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent]
        });
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it(`should have as title 'schmierschiss'`, () => {
    //     const app = fixture.componentInstance;
    //     expect(component.title).toEqual('schmierschiss');
    // });
    //
    // it('should render title', () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.nativeElement as HTMLElement;
    //     expect(compiled.querySelector('.content span')?.textContent).toContain('schmierschiss app is running!');
    // });
});


