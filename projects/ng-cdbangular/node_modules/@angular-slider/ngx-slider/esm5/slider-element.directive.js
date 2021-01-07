/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Renderer2, HostBinding, ChangeDetectorRef } from '@angular/core';
import { EventListenerHelper } from './event-listener-helper';
import { ValueHelper } from './value-helper';
var SliderElementDirective = /** @class */ (function () {
    function SliderElementDirective(elemRef, renderer, changeDetectionRef) {
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
    Object.defineProperty(SliderElementDirective.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderElementDirective.prototype, "dimension", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dimension;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderElementDirective.prototype, "alwaysHide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._alwaysHide;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderElementDirective.prototype, "vertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderElementDirective.prototype, "scale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scale;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} hide
     * @return {?}
     */
    SliderElementDirective.prototype.setAlwaysHide = /**
     * @param {?} hide
     * @return {?}
     */
    function (hide) {
        this._alwaysHide = hide;
        if (hide) {
            this.visibility = 'hidden';
        }
        else {
            this.visibility = 'visible';
        }
    };
    /**
     * @return {?}
     */
    SliderElementDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.opacity = 0;
    };
    /**
     * @return {?}
     */
    SliderElementDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        if (this.alwaysHide) {
            return;
        }
        this.opacity = 1;
    };
    /**
     * @return {?}
     */
    SliderElementDirective.prototype.isVisible = /**
     * @return {?}
     */
    function () {
        if (this.alwaysHide) {
            return false;
        }
        return this.opacity !== 0;
    };
    /**
     * @param {?} vertical
     * @return {?}
     */
    SliderElementDirective.prototype.setVertical = /**
     * @param {?} vertical
     * @return {?}
     */
    function (vertical) {
        this._vertical = vertical;
        if (this._vertical) {
            this.left = '';
            this.width = '';
        }
        else {
            this.bottom = '';
            this.height = '';
        }
    };
    /**
     * @param {?} scale
     * @return {?}
     */
    SliderElementDirective.prototype.setScale = /**
     * @param {?} scale
     * @return {?}
     */
    function (scale) {
        this._scale = scale;
    };
    // Set element left/top position depending on whether slider is horizontal or vertical
    /**
     * @param {?} pos
     * @return {?}
     */
    SliderElementDirective.prototype.setPosition = /**
     * @param {?} pos
     * @return {?}
     */
    function (pos) {
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
    };
    // Calculate element's width/height depending on whether slider is horizontal or vertical
    /**
     * @return {?}
     */
    SliderElementDirective.prototype.calculateDimension = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var val = this.getBoundingClientRect();
        if (this.vertical) {
            this._dimension = (val.bottom - val.top) * this.scale;
        }
        else {
            this._dimension = (val.right - val.left) * this.scale;
        }
    };
    // Set element width/height depending on whether slider is horizontal or vertical
    /**
     * @param {?} dim
     * @return {?}
     */
    SliderElementDirective.prototype.setDimension = /**
     * @param {?} dim
     * @return {?}
     */
    function (dim) {
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
    };
    /**
     * @return {?}
     */
    SliderElementDirective.prototype.getBoundingClientRect = /**
     * @return {?}
     */
    function () {
        return this.elemRef.nativeElement.getBoundingClientRect();
    };
    /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    SliderElementDirective.prototype.on = /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    function (eventName, callback, debounceInterval) {
        /** @type {?} */
        var listener = this.eventListenerHelper.attachEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
        this.eventListeners.push(listener);
    };
    /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    SliderElementDirective.prototype.onPassive = /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    function (eventName, callback, debounceInterval) {
        /** @type {?} */
        var listener = this.eventListenerHelper.attachPassiveEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
        this.eventListeners.push(listener);
    };
    /**
     * @param {?=} eventName
     * @return {?}
     */
    SliderElementDirective.prototype.off = /**
     * @param {?=} eventName
     * @return {?}
     */
    function (eventName) {
        /** @type {?} */
        var listenersToKeep;
        /** @type {?} */
        var listenersToRemove;
        if (!ValueHelper.isNullOrUndefined(eventName)) {
            listenersToKeep = this.eventListeners.filter(function (event) { return event.eventName !== eventName; });
            listenersToRemove = this.eventListeners.filter(function (event) { return event.eventName === eventName; });
        }
        else {
            listenersToKeep = [];
            listenersToRemove = this.eventListeners;
        }
        try {
            for (var listenersToRemove_1 = tslib_1.__values(listenersToRemove), listenersToRemove_1_1 = listenersToRemove_1.next(); !listenersToRemove_1_1.done; listenersToRemove_1_1 = listenersToRemove_1.next()) {
                var listener = listenersToRemove_1_1.value;
                this.eventListenerHelper.detachEventListener(listener);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (listenersToRemove_1_1 && !listenersToRemove_1_1.done && (_a = listenersToRemove_1.return)) _a.call(listenersToRemove_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.eventListeners = listenersToKeep;
        var e_1, _a;
    };
    /**
     * @return {?}
     */
    SliderElementDirective.prototype.isRefDestroyed = /**
     * @return {?}
     */
    function () {
        return ValueHelper.isNullOrUndefined(this.changeDetectionRef) || this.changeDetectionRef['destroyed'];
    };
    SliderElementDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngxSliderElement]'
                },] },
    ];
    /** @nocollapse */
    SliderElementDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    SliderElementDirective.propDecorators = {
        opacity: [{ type: HostBinding, args: ['style.opacity',] }],
        visibility: [{ type: HostBinding, args: ['style.visibility',] }],
        left: [{ type: HostBinding, args: ['style.left',] }],
        bottom: [{ type: HostBinding, args: ['style.bottom',] }],
        height: [{ type: HostBinding, args: ['style.height',] }],
        width: [{ type: HostBinding, args: ['style.width',] }]
    };
    return SliderElementDirective;
}());
export { SliderElementDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWVsZW1lbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvIiwic291cmNlcyI6WyJzbGlkZXItZWxlbWVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFvRDNDLGdDQUFzQixPQUFtQixFQUFZLFFBQW1CLEVBQVksa0JBQXFDO1FBQW5HLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVksdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjt5QkE5QzdGLENBQUM7MEJBS0EsQ0FBQzsyQkFLQyxLQUFLO3lCQUtQLEtBQUs7c0JBS1QsQ0FBQzt1QkFNUixDQUFDOzBCQUdFLFNBQVM7b0JBR2YsRUFBRTtzQkFHQSxFQUFFO3NCQUdGLEVBQUU7cUJBR0gsRUFBRTs4QkFHd0IsRUFBRTtRQUcxQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDbkU7SUEvQ0Qsc0JBQUksNENBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7O09BQUE7SUFHRCxzQkFBSSw2Q0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7T0FBQTtJQUdELHNCQUFJLDhDQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7OztPQUFBO0lBR0Qsc0JBQUksNENBQVE7Ozs7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QVFhLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJIZWxwZXIgfSBmcm9tICcuL2V2ZW50LWxpc3RlbmVyLWhlbHBlcic7XG5pbXBvcnQgeyBFdmVudExpc3RlbmVyIH0gZnJvbSAnLi9ldmVudC1saXN0ZW5lcic7XG5pbXBvcnQgeyBWYWx1ZUhlbHBlciB9IGZyb20gJy4vdmFsdWUtaGVscGVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neFNsaWRlckVsZW1lbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJFbGVtZW50RGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBfcG9zaXRpb246IG51bWJlciA9IDA7XG4gIGdldCBwb3NpdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgX2RpbWVuc2lvbjogbnVtYmVyID0gMDtcbiAgZ2V0IGRpbWVuc2lvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb247XG4gIH1cblxuICBwcml2YXRlIF9hbHdheXNIaWRlOiBib29sZWFuID0gZmFsc2U7XG4gIGdldCBhbHdheXNIaWRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbHdheXNIaWRlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ2V0IHZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuXG4gIHByaXZhdGUgX3NjYWxlOiBudW1iZXIgPSAxO1xuICBnZXQgc2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm9wYWNpdHknKVxuICBvcGFjaXR5OiBudW1iZXIgPSAxO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUudmlzaWJpbGl0eScpXG4gIHZpc2liaWxpdHk6IHN0cmluZyA9ICd2aXNpYmxlJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmxlZnQnKVxuICBsZWZ0OiBzdHJpbmcgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJvdHRvbScpXG4gIGJvdHRvbTogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKVxuICBoZWlnaHQ6IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICB3aWR0aDogc3RyaW5nID0gJyc7XG5cbiAgcHJpdmF0ZSBldmVudExpc3RlbmVySGVscGVyOiBFdmVudExpc3RlbmVySGVscGVyO1xuICBwcml2YXRlIGV2ZW50TGlzdGVuZXJzOiBFdmVudExpc3RlbmVyW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbVJlZjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByb3RlY3RlZCBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVySGVscGVyID0gbmV3IEV2ZW50TGlzdGVuZXJIZWxwZXIodGhpcy5yZW5kZXJlcik7XG4gIH1cblxuICBzZXRBbHdheXNIaWRlKGhpZGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9hbHdheXNIaWRlID0gaGlkZTtcbiAgICBpZiAoaGlkZSkge1xuICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMub3BhY2l0eSA9IDA7XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFsd2F5c0hpZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9wYWNpdHkgPSAxO1xuICB9XG5cbiAgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmFsd2F5c0hpZGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eSAhPT0gMDtcbiAgfVxuXG4gIHNldFZlcnRpY2FsKHZlcnRpY2FsOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fdmVydGljYWwgPSB2ZXJ0aWNhbDtcbiAgICBpZiAodGhpcy5fdmVydGljYWwpIHtcbiAgICAgIHRoaXMubGVmdCA9ICcnO1xuICAgICAgdGhpcy53aWR0aCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdHRvbSA9ICcnO1xuICAgICAgdGhpcy5oZWlnaHQgPSAnJztcbiAgICB9XG4gIH1cblxuICBzZXRTY2FsZShzY2FsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fc2NhbGUgPSBzY2FsZTtcbiAgfVxuXG4gICAvLyBTZXQgZWxlbWVudCBsZWZ0L3RvcCBwb3NpdGlvbiBkZXBlbmRpbmcgb24gd2hldGhlciBzbGlkZXIgaXMgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICBzZXRQb3NpdGlvbihwb3M6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wb3NpdGlvbiAhPT0gcG9zICYmICF0aGlzLmlzUmVmRGVzdHJveWVkKCkpIHtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zO1xuICAgIGlmICh0aGlzLl92ZXJ0aWNhbCkge1xuICAgICAgdGhpcy5ib3R0b20gPSBNYXRoLnJvdW5kKHBvcykgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxlZnQgPSBNYXRoLnJvdW5kKHBvcykgKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIC8vIENhbGN1bGF0ZSBlbGVtZW50J3Mgd2lkdGgvaGVpZ2h0IGRlcGVuZGluZyBvbiB3aGV0aGVyIHNsaWRlciBpcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gIGNhbGN1bGF0ZURpbWVuc2lvbigpOiB2b2lkIHtcbiAgICBjb25zdCB2YWw6IENsaWVudFJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLl9kaW1lbnNpb24gPSAodmFsLmJvdHRvbSAtIHZhbC50b3ApICogdGhpcy5zY2FsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGltZW5zaW9uID0gKHZhbC5yaWdodCAtIHZhbC5sZWZ0KSAqIHRoaXMuc2NhbGU7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IGVsZW1lbnQgd2lkdGgvaGVpZ2h0IGRlcGVuZGluZyBvbiB3aGV0aGVyIHNsaWRlciBpcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gIHNldERpbWVuc2lvbihkaW06IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kaW1lbnNpb24gIT09IGRpbSAmJiAhdGhpcy5pc1JlZkRlc3Ryb3llZCgpKSB7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kaW1lbnNpb24gPSBkaW07XG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IE1hdGgucm91bmQoZGltKSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLnJvdW5kKGRpbSkgKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiB2b2lkLCBkZWJvdW5jZUludGVydmFsPzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIuYXR0YWNoRXZlbnRMaXN0ZW5lcihcbiAgICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LCBldmVudE5hbWUsIGNhbGxiYWNrLCBkZWJvdW5jZUludGVydmFsKTtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICB9XG5cbiAgb25QYXNzaXZlKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IHZvaWQsIGRlYm91bmNlSW50ZXJ2YWw/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lckhlbHBlci5hdHRhY2hQYXNzaXZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LCBldmVudE5hbWUsIGNhbGxiYWNrLCBkZWJvdW5jZUludGVydmFsKTtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICB9XG5cbiAgb2ZmKGV2ZW50TmFtZT86IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBsaXN0ZW5lcnNUb0tlZXA6IEV2ZW50TGlzdGVuZXJbXTtcbiAgICBsZXQgbGlzdGVuZXJzVG9SZW1vdmU6IEV2ZW50TGlzdGVuZXJbXTtcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50TmFtZSkpIHtcbiAgICAgIGxpc3RlbmVyc1RvS2VlcCA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmlsdGVyKChldmVudDogRXZlbnRMaXN0ZW5lcikgPT4gZXZlbnQuZXZlbnROYW1lICE9PSBldmVudE5hbWUpO1xuICAgICAgbGlzdGVuZXJzVG9SZW1vdmUgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmZpbHRlcigoZXZlbnQ6IEV2ZW50TGlzdGVuZXIpID0+IGV2ZW50LmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdGVuZXJzVG9LZWVwID0gW107XG4gICAgICBsaXN0ZW5lcnNUb1JlbW92ZSA9IHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnNUb1JlbW92ZSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVySGVscGVyLmRldGFjaEV2ZW50TGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNUb0tlZXA7XG4gIH1cblxuICBwcml2YXRlIGlzUmVmRGVzdHJveWVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLmNoYW5nZURldGVjdGlvblJlZikgfHwgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWZbJ2Rlc3Ryb3llZCddO1xuICB9XG59XG4iXX0=