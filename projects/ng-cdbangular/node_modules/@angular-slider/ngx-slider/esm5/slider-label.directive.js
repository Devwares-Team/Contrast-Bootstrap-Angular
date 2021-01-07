/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, Renderer2 } from '@angular/core';
import { SliderElementDirective } from './slider-element.directive';
import { ValueHelper } from './value-helper';
var SliderLabelDirective = /** @class */ (function (_super) {
    tslib_1.__extends(SliderLabelDirective, _super);
    function SliderLabelDirective(elemRef, renderer, changeDetectionRef) {
        var _this = _super.call(this, elemRef, renderer, changeDetectionRef) || this;
        _this._value = null;
        return _this;
    }
    Object.defineProperty(SliderLabelDirective.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SliderLabelDirective.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var recalculateDimension = false;
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
    };
    SliderLabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxSliderLabel]'
                },] },
    ];
    /** @nocollapse */
    SliderLabelDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    return SliderLabelDirective;
}(SliderElementDirective));
export { SliderLabelDirective };
if (false) {
    /** @type {?} */
    SliderLabelDirective.prototype._value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWxhYmVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFyLXNsaWRlci9uZ3gtc2xpZGVyLyIsInNvdXJjZXMiOlsic2xpZGVyLWxhYmVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBS0gsZ0RBQXNCO0lBTTlELDhCQUFZLE9BQW1CLEVBQUUsUUFBbUIsRUFBRSxrQkFBcUM7UUFBM0YsWUFDRSxrQkFBTSxPQUFPLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixDQUFDLFNBQzdDO3VCQVB3QixJQUFJOztLQU81QjtJQU5ELHNCQUFJLHVDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7OztPQUFBOzs7OztJQU1ELHVDQUFROzs7O0lBQVIsVUFBUyxLQUFhOztRQUNwQixJQUFJLG9CQUFvQixHQUFZLEtBQUssQ0FBQztRQUUxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDaEIsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU07Z0JBQ2xDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyRCxvQkFBb0IsR0FBRyxJQUFJLENBQUM7U0FDN0I7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOztRQUc3QyxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0tBQ0Y7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7Ozs7Z0JBTnNDLFVBQVU7Z0JBQUUsU0FBUztnQkFBbkQsaUJBQWlCOzsrQkFBMUI7RUFPMEMsc0JBQXNCO1NBQW5ELG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2xpZGVyRWxlbWVudERpcmVjdGl2ZSB9IGZyb20gJy4vc2xpZGVyLWVsZW1lbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFZhbHVlSGVscGVyIH0gZnJvbSAnLi92YWx1ZS1oZWxwZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4U2xpZGVyTGFiZWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJMYWJlbERpcmVjdGl2ZSBleHRlbmRzIFNsaWRlckVsZW1lbnREaXJlY3RpdmUge1xuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbVJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1SZWYsIHJlbmRlcmVyLCBjaGFuZ2VEZXRlY3Rpb25SZWYpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCByZWNhbGN1bGF0ZURpbWVuc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLmFsd2F5c0hpZGUgJiZcbiAgICAgICAgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmFsdWUpIHx8XG4gICAgICAgICB0aGlzLnZhbHVlLmxlbmd0aCAhPT0gdmFsdWUubGVuZ3RoIHx8XG4gICAgICAgICAodGhpcy52YWx1ZS5sZW5ndGggPiAwICYmIHRoaXMuZGltZW5zaW9uID09PSAwKSkpIHtcbiAgICAgIHJlY2FsY3VsYXRlRGltZW5zaW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHZhbHVlO1xuXG4gICAgLy8gVXBkYXRlIGRpbWVuc2lvbiBvbmx5IHdoZW4gbGVuZ3RoIG9mIHRoZSBsYWJlbCBoYXZlIGNoYW5nZWRcbiAgICBpZiAocmVjYWxjdWxhdGVEaW1lbnNpb24pIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9uKCk7XG4gICAgfVxuICB9XG59XG4iXX0=