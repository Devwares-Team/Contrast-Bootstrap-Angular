/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, HostBinding, ChangeDetectorRef } from '@angular/core';
import { SliderElementDirective } from './slider-element.directive';
export class SliderHandleDirective extends SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        super(elemRef, renderer, changeDetectionRef);
        this.active = false;
        this.role = '';
        this.tabindex = '';
        this.ariaOrientation = '';
        this.ariaLabel = '';
        this.ariaLabelledBy = '';
        this.ariaValueNow = '';
        this.ariaValueText = '';
        this.ariaValueMin = '';
        this.ariaValueMax = '';
    }
    /**
     * @return {?}
     */
    focus() {
        this.elemRef.nativeElement.focus();
    }
}
SliderHandleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxSliderHandle]'
            },] },
];
/** @nocollapse */
SliderHandleDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
SliderHandleDirective.propDecorators = {
    active: [{ type: HostBinding, args: ['class.ngx-slider-active',] }],
    role: [{ type: HostBinding, args: ['attr.role',] }],
    tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    ariaOrientation: [{ type: HostBinding, args: ['attr.aria-orientation',] }],
    ariaLabel: [{ type: HostBinding, args: ['attr.aria-label',] }],
    ariaLabelledBy: [{ type: HostBinding, args: ['attr.aria-labelledby',] }],
    ariaValueNow: [{ type: HostBinding, args: ['attr.aria-valuenow',] }],
    ariaValueText: [{ type: HostBinding, args: ['attr.aria-valuetext',] }],
    ariaValueMin: [{ type: HostBinding, args: ['attr.aria-valuemin',] }],
    ariaValueMax: [{ type: HostBinding, args: ['attr.aria-valuemax',] }]
};
if (false) {
    /** @type {?} */
    SliderHandleDirective.prototype.active;
    /** @type {?} */
    SliderHandleDirective.prototype.role;
    /** @type {?} */
    SliderHandleDirective.prototype.tabindex;
    /** @type {?} */
    SliderHandleDirective.prototype.ariaOrientation;
    /** @type {?} */
    SliderHandleDirective.prototype.ariaLabel;
    /** @type {?} */
    SliderHandleDirective.prototype.ariaLabelledBy;
    /** @type {?} */
    SliderHandleDirective.prototype.ariaValueNow;
    /** @type {?} */
    SliderHandleDirective.prototype.ariaValueText;
    /** @type {?} */
    SliderHandleDirective.prototype.ariaValueMin;
    /** @type {?} */
    SliderHandleDirective.prototype.ariaValueMax;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWhhbmRsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1zbGlkZXIvbmd4LXNsaWRlci8iLCJzb3VyY2VzIjpbInNsaWRlci1oYW5kbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBS3BFLE1BQU0sNEJBQTZCLFNBQVEsc0JBQXNCOzs7Ozs7SUFtQy9ELFlBQVksT0FBbUIsRUFBRSxRQUFtQixFQUFFLGtCQUFxQztRQUN6RixLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO3NCQWxDN0IsS0FBSztvQkFHUixFQUFFO3dCQUdFLEVBQUU7K0JBR0ssRUFBRTt5QkFHUixFQUFFOzhCQUdHLEVBQUU7NEJBR0osRUFBRTs2QkFHRCxFQUFFOzRCQUdILEVBQUU7NEJBR0YsRUFBRTtLQVF4Qjs7OztJQU5ELEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNwQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCOzs7O1lBTG1CLFVBQVU7WUFBRSxTQUFTO1lBQWUsaUJBQWlCOzs7cUJBT3RFLFdBQVcsU0FBQyx5QkFBeUI7bUJBR3JDLFdBQVcsU0FBQyxXQUFXO3VCQUd2QixXQUFXLFNBQUMsZUFBZTs4QkFHM0IsV0FBVyxTQUFDLHVCQUF1Qjt3QkFHbkMsV0FBVyxTQUFDLGlCQUFpQjs2QkFHN0IsV0FBVyxTQUFDLHNCQUFzQjsyQkFHbEMsV0FBVyxTQUFDLG9CQUFvQjs0QkFHaEMsV0FBVyxTQUFDLHFCQUFxQjsyQkFHakMsV0FBVyxTQUFDLG9CQUFvQjsyQkFHaEMsV0FBVyxTQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNsaWRlckVsZW1lbnREaXJlY3RpdmUgfSBmcm9tICcuL3NsaWRlci1lbGVtZW50LmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hTbGlkZXJIYW5kbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJIYW5kbGVEaXJlY3RpdmUgZXh0ZW5kcyBTbGlkZXJFbGVtZW50RGlyZWN0aXZlIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZ3gtc2xpZGVyLWFjdGl2ZScpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgcm9sZTogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgdGFiaW5kZXg6IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLW9yaWVudGF0aW9uJylcbiAgYXJpYU9yaWVudGF0aW9uOiBzdHJpbmcgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbCcpXG4gIGFyaWFMYWJlbDogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWxsZWRieScpXG4gIGFyaWFMYWJlbGxlZEJ5OiBzdHJpbmcgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS12YWx1ZW5vdycpXG4gIGFyaWFWYWx1ZU5vdzogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtdmFsdWV0ZXh0JylcbiAgYXJpYVZhbHVlVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtdmFsdWVtaW4nKVxuICBhcmlhVmFsdWVNaW46IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXZhbHVlbWF4JylcbiAgYXJpYVZhbHVlTWF4OiBzdHJpbmcgPSAnJztcblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1SZWYsIHJlbmRlcmVyLCBjaGFuZ2VEZXRlY3Rpb25SZWYpO1xuICB9XG59XG4iXX0=