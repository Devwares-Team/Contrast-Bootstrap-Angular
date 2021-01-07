/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, Renderer2 } from '@angular/core';
import { SliderElementDirective } from './slider-element.directive';
import { ValueHelper } from './value-helper';
export class SliderLabelDirective extends SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        super(elemRef, renderer, changeDetectionRef);
        this._value = null;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        /** @type {?} */
        let recalculateDimension = false;
        if (!this.alwaysHide &&
            (ValueHelper.isNullOrUndefined(this.value) ||
                this.value.length !== value.length ||
                (this.value.length > 0 && this.dimension === 0))) {
            recalculateDimension = true;
        }
        this._value = value;
        this.elemRef.nativeElement.innerHTML = value;
        // Update dimension only when length of the label have changed
        if (recalculateDimension) {
            this.calculateDimension();
        }
    }
}
SliderLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxSliderLabel]'
            },] },
];
/** @nocollapse */
SliderLabelDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    SliderLabelDirective.prototype._value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWxhYmVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXNsaWRlci9uZ3gtc2xpZGVyLyIsInNvdXJjZXMiOlsic2xpZGVyLWxhYmVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUs3QyxNQUFNLDJCQUE0QixTQUFRLHNCQUFzQjs7Ozs7O0lBTTlELFlBQVksT0FBbUIsRUFBRSxRQUFtQixFQUFFLGtCQUFxQztRQUN6RixLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO3NCQU50QixJQUFJO0tBTzVCOzs7O0lBTkQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7OztJQU1ELFFBQVEsQ0FBQyxLQUFhOztRQUNwQixJQUFJLG9CQUFvQixHQUFZLEtBQUssQ0FBQztRQUUxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDaEIsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU07Z0JBQ2xDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyRCxvQkFBb0IsR0FBRyxJQUFJLENBQUM7U0FDN0I7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOztRQUc3QyxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0tBQ0Y7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQU5zQyxVQUFVO1lBQUUsU0FBUztZQUFuRCxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNsaWRlckVsZW1lbnREaXJlY3RpdmUgfSBmcm9tICcuL3NsaWRlci1lbGVtZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBWYWx1ZUhlbHBlciB9IGZyb20gJy4vdmFsdWUtaGVscGVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neFNsaWRlckxhYmVsXSdcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyTGFiZWxEaXJlY3RpdmUgZXh0ZW5kcyBTbGlkZXJFbGVtZW50RGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyA9IG51bGw7XG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtUmVmLCByZW5kZXJlciwgY2hhbmdlRGV0ZWN0aW9uUmVmKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgcmVjYWxjdWxhdGVEaW1lbnNpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy5hbHdheXNIaWRlICYmXG4gICAgICAgIChWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZhbHVlKSB8fFxuICAgICAgICAgdGhpcy52YWx1ZS5sZW5ndGggIT09IHZhbHVlLmxlbmd0aCB8fFxuICAgICAgICAgKHRoaXMudmFsdWUubGVuZ3RoID4gMCAmJiB0aGlzLmRpbWVuc2lvbiA9PT0gMCkpKSB7XG4gICAgICByZWNhbGN1bGF0ZURpbWVuc2lvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcblxuICAgIC8vIFVwZGF0ZSBkaW1lbnNpb24gb25seSB3aGVuIGxlbmd0aCBvZiB0aGUgbGFiZWwgaGF2ZSBjaGFuZ2VkXG4gICAgaWYgKHJlY2FsY3VsYXRlRGltZW5zaW9uKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbigpO1xuICAgIH1cbiAgfVxufVxuIl19