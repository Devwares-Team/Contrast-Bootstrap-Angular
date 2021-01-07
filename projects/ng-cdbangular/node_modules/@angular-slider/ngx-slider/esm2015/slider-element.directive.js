/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, HostBinding, ChangeDetectorRef } from '@angular/core';
import { EventListenerHelper } from './event-listener-helper';
import { ValueHelper } from './value-helper';
export class SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.changeDetectionRef = changeDetectionRef;
        this._position = 0;
        this._dimension = 0;
        this._alwaysHide = false;
        this._vertical = false;
        this._scale = 1;
        this.opacity = 1;
        this.visibility = 'visible';
        this.left = '';
        this.bottom = '';
        this.height = '';
        this.width = '';
        this.eventListeners = [];
        this.eventListenerHelper = new EventListenerHelper(this.renderer);
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position;
    }
    /**
     * @return {?}
     */
    get dimension() {
        return this._dimension;
    }
    /**
     * @return {?}
     */
    get alwaysHide() {
        return this._alwaysHide;
    }
    /**
     * @return {?}
     */
    get vertical() {
        return this._vertical;
    }
    /**
     * @return {?}
     */
    get scale() {
        return this._scale;
    }
    /**
     * @param {?} hide
     * @return {?}
     */
    setAlwaysHide(hide) {
        this._alwaysHide = hide;
        if (hide) {
            this.visibility = 'hidden';
        }
        else {
            this.visibility = 'visible';
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.opacity = 0;
    }
    /**
     * @return {?}
     */
    show() {
        if (this.alwaysHide) {
            return;
        }
        this.opacity = 1;
    }
    /**
     * @return {?}
     */
    isVisible() {
        if (this.alwaysHide) {
            return false;
        }
        return this.opacity !== 0;
    }
    /**
     * @param {?} vertical
     * @return {?}
     */
    setVertical(vertical) {
        this._vertical = vertical;
        if (this._vertical) {
            this.left = '';
            this.width = '';
        }
        else {
            this.bottom = '';
            this.height = '';
        }
    }
    /**
     * @param {?} scale
     * @return {?}
     */
    setScale(scale) {
        this._scale = scale;
    }
    /**
     * @param {?} pos
     * @return {?}
     */
    setPosition(pos) {
        if (this._position !== pos && !this.isRefDestroyed()) {
            this.changeDetectionRef.markForCheck();
        }
        this._position = pos;
        if (this._vertical) {
            this.bottom = Math.round(pos) + 'px';
        }
        else {
            this.left = Math.round(pos) + 'px';
        }
    }
    /**
     * @return {?}
     */
    calculateDimension() {
        /** @type {?} */
        const val = this.getBoundingClientRect();
        if (this.vertical) {
            this._dimension = (val.bottom - val.top) * this.scale;
        }
        else {
            this._dimension = (val.right - val.left) * this.scale;
        }
    }
    /**
     * @param {?} dim
     * @return {?}
     */
    setDimension(dim) {
        if (this._dimension !== dim && !this.isRefDestroyed()) {
            this.changeDetectionRef.markForCheck();
        }
        this._dimension = dim;
        if (this._vertical) {
            this.height = Math.round(dim) + 'px';
        }
        else {
            this.width = Math.round(dim) + 'px';
        }
    }
    /**
     * @return {?}
     */
    getBoundingClientRect() {
        return this.elemRef.nativeElement.getBoundingClientRect();
    }
    /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    on(eventName, callback, debounceInterval) {
        /** @type {?} */
        const listener = this.eventListenerHelper.attachEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
        this.eventListeners.push(listener);
    }
    /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    onPassive(eventName, callback, debounceInterval) {
        /** @type {?} */
        const listener = this.eventListenerHelper.attachPassiveEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
        this.eventListeners.push(listener);
    }
    /**
     * @param {?=} eventName
     * @return {?}
     */
    off(eventName) {
        /** @type {?} */
        let listenersToKeep;
        /** @type {?} */
        let listenersToRemove;
        if (!ValueHelper.isNullOrUndefined(eventName)) {
            listenersToKeep = this.eventListeners.filter((event) => event.eventName !== eventName);
            listenersToRemove = this.eventListeners.filter((event) => event.eventName === eventName);
        }
        else {
            listenersToKeep = [];
            listenersToRemove = this.eventListeners;
        }
        for (const listener of listenersToRemove) {
            this.eventListenerHelper.detachEventListener(listener);
        }
        this.eventListeners = listenersToKeep;
    }
    /**
     * @return {?}
     */
    isRefDestroyed() {
        return ValueHelper.isNullOrUndefined(this.changeDetectionRef) || this.changeDetectionRef['destroyed'];
    }
}
SliderElementDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxSliderElement]'
            },] },
];
/** @nocollapse */
SliderElementDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
SliderElementDirective.propDecorators = {
    opacity: [{ type: HostBinding, args: ['style.opacity',] }],
    visibility: [{ type: HostBinding, args: ['style.visibility',] }],
    left: [{ type: HostBinding, args: ['style.left',] }],
    bottom: [{ type: HostBinding, args: ['style.bottom',] }],
    height: [{ type: HostBinding, args: ['style.height',] }],
    width: [{ type: HostBinding, args: ['style.width',] }]
};
if (false) {
    /** @type {?} */
    SliderElementDirective.prototype._position;
    /** @type {?} */
    SliderElementDirective.prototype._dimension;
    /** @type {?} */
    SliderElementDirective.prototype._alwaysHide;
    /** @type {?} */
    SliderElementDirective.prototype._vertical;
    /** @type {?} */
    SliderElementDirective.prototype._scale;
    /** @type {?} */
    SliderElementDirective.prototype.opacity;
    /** @type {?} */
    SliderElementDirective.prototype.visibility;
    /** @type {?} */
    SliderElementDirective.prototype.left;
    /** @type {?} */
    SliderElementDirective.prototype.bottom;
    /** @type {?} */
    SliderElementDirective.prototype.height;
    /** @type {?} */
    SliderElementDirective.prototype.width;
    /** @type {?} */
    SliderElementDirective.prototype.eventListenerHelper;
    /** @type {?} */
    SliderElementDirective.prototype.eventListeners;
    /** @type {?} */
    SliderElementDirective.prototype.elemRef;
    /** @type {?} */
    SliderElementDirective.prototype.renderer;
    /** @type {?} */
    SliderElementDirective.prototype.changeDetectionRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWVsZW1lbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvIiwic291cmNlcyI6WyJzbGlkZXItZWxlbWVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzdDLE1BQU07Ozs7OztJQStDSixZQUFzQixPQUFtQixFQUFZLFFBQW1CLEVBQVksa0JBQXFDO1FBQW5HLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVksdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjt5QkE5QzdGLENBQUM7MEJBS0EsQ0FBQzsyQkFLQyxLQUFLO3lCQUtQLEtBQUs7c0JBS1QsQ0FBQzt1QkFNUixDQUFDOzBCQUdFLFNBQVM7b0JBR2YsRUFBRTtzQkFHQSxFQUFFO3NCQUdGLEVBQUU7cUJBR0gsRUFBRTs4QkFHd0IsRUFBRTtRQUcxQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDbkU7Ozs7SUEvQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7O0lBR0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7O0lBR0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7O0lBR0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tB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LENBQUMsS0FBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQztTQUN6RzthQUFNO1lBQ0wsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUNyQixpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pDO1FBRUQsS0FBSyxNQUFNLFFBQVEsSUFBSSxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEQ7UUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLGVBQWUsQ0FBQztLQUN2Qzs7OztJQUVPLGNBQWM7UUFDcEIsT0FBTyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7O1lBMUt6RyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7OztZQVBtQixVQUFVO1lBQUUsU0FBUztZQUFlLGlCQUFpQjs7O3NCQWtDdEUsV0FBVyxTQUFDLGVBQWU7eUJBRzNCLFdBQVcsU0FBQyxrQkFBa0I7bUJBRzlCLFdBQVcsU0FBQyxZQUFZO3FCQUd4QixXQUFXLFNBQUMsY0FBYztxQkFHMUIsV0FBVyxTQUFDLGNBQWM7b0JBRzFCLFdBQVcsU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRMaXN0ZW5lckhlbHBlciB9IGZyb20gJy4vZXZlbnQtbGlzdGVuZXItaGVscGVyJztcbmltcG9ydCB7IEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL2V2ZW50LWxpc3RlbmVyJztcbmltcG9ydCB7IFZhbHVlSGVscGVyIH0gZnJvbSAnLi92YWx1ZS1oZWxwZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4U2xpZGVyRWxlbWVudF0nXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckVsZW1lbnREaXJlY3RpdmUge1xuICBwcml2YXRlIF9wb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgZ2V0IHBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGltZW5zaW9uOiBudW1iZXIgPSAwO1xuICBnZXQgZGltZW5zaW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RpbWVuc2lvbjtcbiAgfVxuXG4gIHByaXZhdGUgX2Fsd2F5c0hpZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ2V0IGFsd2F5c0hpZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Fsd2F5c0hpZGU7XG4gIH1cblxuICBwcml2YXRlIF92ZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xuICBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2NhbGU6IG51bWJlciA9IDE7XG4gIGdldCBzY2FsZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY2FsZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUub3BhY2l0eScpXG4gIG9wYWNpdHk6IG51bWJlciA9IDE7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS52aXNpYmlsaXR5JylcbiAgdmlzaWJpbGl0eTogc3RyaW5nID0gJ3Zpc2libGUnO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUubGVmdCcpXG4gIGxlZnQ6IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuYm90dG9tJylcbiAgYm90dG9tOiBzdHJpbmcgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXG4gIGhlaWdodDogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXG4gIHdpZHRoOiBzdHJpbmcgPSAnJztcblxuICBwcml2YXRlIGV2ZW50TGlzdGVuZXJIZWxwZXI6IEV2ZW50TGlzdGVuZXJIZWxwZXI7XG4gIHByaXZhdGUgZXZlbnRMaXN0ZW5lcnM6IEV2ZW50TGlzdGVuZXJbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbGVtUmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJvdGVjdGVkIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIgPSBuZXcgRXZlbnRMaXN0ZW5lckhlbHBlcih0aGlzLnJlbmRlcmVyKTtcbiAgfVxuXG4gIHNldEFsd2F5c0hpZGUoaGlkZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Fsd2F5c0hpZGUgPSBoaWRlO1xuICAgIGlmIChoaWRlKSB7XG4gICAgICB0aGlzLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5vcGFjaXR5ID0gMDtcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWx3YXlzSGlkZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub3BhY2l0eSA9IDE7XG4gIH1cblxuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuYWx3YXlzSGlkZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5ICE9PSAwO1xuICB9XG5cbiAgc2V0VmVydGljYWwodmVydGljYWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHZlcnRpY2FsO1xuICAgIGlmICh0aGlzLl92ZXJ0aWNhbCkge1xuICAgICAgdGhpcy5sZWZ0ID0gJyc7XG4gICAgICB0aGlzLndpZHRoID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm90dG9tID0gJyc7XG4gICAgICB0aGlzLmhlaWdodCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHNldFNjYWxlKHNjYWxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zY2FsZSA9IHNjYWxlO1xuICB9XG5cbiAgIC8vIFNldCBlbGVtZW50IGxlZnQvdG9wIHBvc2l0aW9uIGRlcGVuZGluZyBvbiB3aGV0aGVyIHNsaWRlciBpcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gIHNldFBvc2l0aW9uKHBvczogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Bvc2l0aW9uICE9PSBwb3MgJiYgIXRoaXMuaXNSZWZEZXN0cm95ZWQoKSkge1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcG9zaXRpb24gPSBwb3M7XG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmJvdHRvbSA9IE1hdGgucm91bmQocG9zKSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGVmdCA9IE1hdGgucm91bmQocG9zKSArICdweCc7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIGVsZW1lbnQncyB3aWR0aC9oZWlnaHQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgc2xpZGVyIGlzIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgY2FsY3VsYXRlRGltZW5zaW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbDogQ2xpZW50UmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHRoaXMuX2RpbWVuc2lvbiA9ICh2YWwuYm90dG9tIC0gdmFsLnRvcCkgKiB0aGlzLnNjYWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kaW1lbnNpb24gPSAodmFsLnJpZ2h0IC0gdmFsLmxlZnQpICogdGhpcy5zY2FsZTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgZWxlbWVudCB3aWR0aC9oZWlnaHQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgc2xpZGVyIGlzIGhvcml6b250YWwgb3IgdmVydGljYWxcbiAgc2V0RGltZW5zaW9uKGRpbTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RpbWVuc2lvbiAhPT0gZGltICYmICF0aGlzLmlzUmVmRGVzdHJveWVkKCkpIHtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRoaXMuX2RpbWVuc2lvbiA9IGRpbTtcbiAgICBpZiAodGhpcy5fdmVydGljYWwpIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZChkaW0pICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53aWR0aCA9IE1hdGgucm91bmQoZGltKSArICdweCc7XG4gICAgfVxuICB9XG5cbiAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IHZvaWQsIGRlYm91bmNlSW50ZXJ2YWw/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lckhlbHBlci5hdHRhY2hFdmVudExpc3RlbmVyKFxuICAgICAgdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGRlYm91bmNlSW50ZXJ2YWwpO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIH1cblxuICBvblBhc3NpdmUoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gdm9pZCwgZGVib3VuY2VJbnRlcnZhbD86IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RlbmVyOiBFdmVudExpc3RlbmVyID0gdGhpcy5ldmVudExpc3RlbmVySGVscGVyLmF0dGFjaFBhc3NpdmVFdmVudExpc3RlbmVyKFxuICAgICAgdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGRlYm91bmNlSW50ZXJ2YWwpO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIH1cblxuICBvZmYoZXZlbnROYW1lPzogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IGxpc3RlbmVyc1RvS2VlcDogRXZlbnRMaXN0ZW5lcltdO1xuICAgIGxldCBsaXN0ZW5lcnNUb1JlbW92ZTogRXZlbnRMaXN0ZW5lcltdO1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoZXZlbnROYW1lKSkge1xuICAgICAgbGlzdGVuZXJzVG9LZWVwID0gdGhpcy5ldmVudExpc3RlbmVycy5maWx0ZXIoKGV2ZW50OiBFdmVudExpc3RlbmVyKSA9PiBldmVudC5ldmVudE5hbWUgIT09IGV2ZW50TmFtZSk7XG4gICAgICBsaXN0ZW5lcnNUb1JlbW92ZSA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmlsdGVyKChldmVudDogRXZlbnRMaXN0ZW5lcikgPT4gZXZlbnQuZXZlbnROYW1lID09PSBldmVudE5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lcnNUb0tlZXAgPSBbXTtcbiAgICAgIGxpc3RlbmVyc1RvUmVtb3ZlID0gdGhpcy5ldmVudExpc3RlbmVycztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVyc1RvUmVtb3ZlKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIuZGV0YWNoRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IGxpc3RlbmVyc1RvS2VlcDtcbiAgfVxuXG4gIHByaXZhdGUgaXNSZWZEZXN0cm95ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmKSB8fCB0aGlzLmNoYW5nZURldGVjdGlvblJlZlsnZGVzdHJveWVkJ107XG4gIH1cbn1cbiJdfQ==