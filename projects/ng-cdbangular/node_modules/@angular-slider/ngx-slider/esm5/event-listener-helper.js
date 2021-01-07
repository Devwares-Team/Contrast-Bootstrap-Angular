/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { throttleTime, tap } from 'rxjs/operators';
import detectPassiveEvents from 'detect-passive-events';
import { EventListener } from './event-listener';
import { ValueHelper } from './value-helper';
/**
 * Helper class to attach event listeners to DOM elements with debounce support using rxjs
 */
var /**
 * Helper class to attach event listeners to DOM elements with debounce support using rxjs
 */
EventListenerHelper = /** @class */ (function () {
    function EventListenerHelper(renderer) {
        this.renderer = renderer;
    }
    /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    EventListenerHelper.prototype.attachPassiveEventListener = /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    function (nativeElement, eventName, callback, throttleInterval) {
        // Only use passive event listeners if the browser supports it
        if (detectPassiveEvents.hasSupport !== true) {
            return this.attachEventListener(nativeElement, eventName, callback, throttleInterval);
        }
        /** @type {?} */
        var listener = new EventListener();
        listener.eventName = eventName;
        listener.events = new Subject();
        /** @type {?} */
        var observerCallback = function (event) {
            listener.events.next(event);
        };
        nativeElement.addEventListener(eventName, observerCallback, { passive: true, capture: false });
        listener.teardownCallback = function () {
            nativeElement.removeEventListener(eventName, observerCallback, { passive: true, capture: false });
        };
        listener.eventsSubscription = listener.events
            .pipe((!ValueHelper.isNullOrUndefined(throttleInterval))
            ? throttleTime(throttleInterval, undefined, { leading: true, trailing: true })
            : tap(function () { }) // no-op
        )
            .subscribe(function (event) {
            callback(event);
        });
        return listener;
    };
    /**
     * @param {?} eventListener
     * @return {?}
     */
    EventListenerHelper.prototype.detachEventListener = /**
     * @param {?} eventListener
     * @return {?}
     */
    function (eventListener) {
        if (!ValueHelper.isNullOrUndefined(eventListener.eventsSubscription)) {
            eventListener.eventsSubscription.unsubscribe();
            eventListener.eventsSubscription = null;
        }
        if (!ValueHelper.isNullOrUndefined(eventListener.events)) {
            eventListener.events.complete();
            eventListener.events = null;
        }
        if (!ValueHelper.isNullOrUndefined(eventListener.teardownCallback)) {
            eventListener.teardownCallback();
            eventListener.teardownCallback = null;
        }
    };
    /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    EventListenerHelper.prototype.attachEventListener = /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    function (nativeElement, eventName, callback, throttleInterval) {
        /** @type {?} */
        var listener = new EventListener();
        listener.eventName = eventName;
        listener.events = new Subject();
        /** @type {?} */
        var observerCallback = function (event) {
            listener.events.next(event);
        };
        listener.teardownCallback = this.renderer.listen(nativeElement, eventName, observerCallback);
        listener.eventsSubscription = listener.events
            .pipe((!ValueHelper.isNullOrUndefined(throttleInterval))
            ? throttleTime(throttleInterval, undefined, { leading: true, trailing: true })
            : tap(function () { }) // no-op
        )
            .subscribe(function (event) { callback(event); });
        return listener;
    };
    return EventListenerHelper;
}());
/**
 * Helper class to attach event listeners to DOM elements with debounce support using rxjs
 */
export { EventListenerHelper };
if (false) {
    /** @type {?} */
    EventListenerHelper.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlzdGVuZXItaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvIiwic291cmNlcyI6WyJldmVudC1saXN0ZW5lci1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLG1CQUFtQixNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLN0M7OztBQUFBO0lBQ0UsNkJBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7S0FDdEM7Ozs7Ozs7O0lBRU0sd0RBQTBCOzs7Ozs7O2NBQUMsYUFBa0IsRUFBRSxTQUFpQixFQUFFLFFBQThCLEVBQ25HLGdCQUF5Qjs7UUFFM0IsSUFBSSxtQkFBbUIsQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQzNDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDdkY7O1FBR0QsSUFBTSxRQUFRLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7UUFDcEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDL0IsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDOztRQUV2QyxJQUFNLGdCQUFnQixHQUEyQixVQUFDLEtBQVk7WUFDNUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0IsQ0FBQztRQUNGLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUs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WyJpbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRocm90dGxlVGltZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IGRldGVjdFBhc3NpdmVFdmVudHMgZnJvbSAnZGV0ZWN0LXBhc3NpdmUtZXZlbnRzJztcblxuaW1wb3J0IHsgRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vZXZlbnQtbGlzdGVuZXInO1xuaW1wb3J0IHsgVmFsdWVIZWxwZXIgfSBmcm9tICcuL3ZhbHVlLWhlbHBlcic7XG5cbi8qKlxuICogSGVscGVyIGNsYXNzIHRvIGF0dGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gRE9NIGVsZW1lbnRzIHdpdGggZGVib3VuY2Ugc3VwcG9ydCB1c2luZyByeGpzXG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudExpc3RlbmVySGVscGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBwdWJsaWMgYXR0YWNoUGFzc2l2ZUV2ZW50TGlzdGVuZXIobmF0aXZlRWxlbWVudDogYW55LCBldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiB2b2lkLFxuICAgICAgdGhyb3R0bGVJbnRlcnZhbD86IG51bWJlcik6IEV2ZW50TGlzdGVuZXIge1xuICAgIC8vIE9ubHkgdXNlIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIGl0XG4gICAgaWYgKGRldGVjdFBhc3NpdmVFdmVudHMuaGFzU3VwcG9ydCAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoRXZlbnRMaXN0ZW5lcihuYXRpdmVFbGVtZW50LCBldmVudE5hbWUsIGNhbGxiYWNrLCB0aHJvdHRsZUludGVydmFsKTtcbiAgICB9XG5cbiAgICAvLyBBbmd1bGFyIGRvZXNuJ3Qgc3VwcG9ydCBwYXNzaXZlIGV2ZW50IGhhbmRsZXJzICh5ZXQpLCBzbyB3ZSBuZWVkIHRvIHJvbGwgb3VyIG93biBjb2RlIHVzaW5nIG5hdGl2ZSBmdW5jdGlvbnNcbiAgICBjb25zdCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciA9IG5ldyBFdmVudExpc3RlbmVyKCk7XG4gICAgbGlzdGVuZXIuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIGxpc3RlbmVyLmV2ZW50cyA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXJDYWxsYmFjazogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCA9IChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGxpc3RlbmVyLmV2ZW50cy5uZXh0KGV2ZW50KTtcbiAgICB9O1xuICAgIG5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG9ic2VydmVyQ2FsbGJhY2ssIHtwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZX0pO1xuXG4gICAgbGlzdGVuZXIudGVhcmRvd25DYWxsYmFjayA9ICgpOiB2b2lkID0+IHtcbiAgICAgIG5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG9ic2VydmVyQ2FsbGJhY2ssIHtwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci5ldmVudHNTdWJzY3JpcHRpb24gPSBsaXN0ZW5lci5ldmVudHNcbiAgICAgIC5waXBlKCghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhyb3R0bGVJbnRlcnZhbCkpXG4gICAgICAgID8gdGhyb3R0bGVUaW1lKHRocm90dGxlSW50ZXJ2YWwsIHVuZGVmaW5lZCwgeyBsZWFkaW5nOiB0cnVlLCB0cmFpbGluZzogdHJ1ZX0pXG4gICAgICAgIDogdGFwKCgpID0+IHt9KSAvLyBuby1vcFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpc3RlbmVyO1xuICB9XG5cbiAgcHVibGljIGRldGFjaEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoZXZlbnRMaXN0ZW5lci5ldmVudHNTdWJzY3JpcHRpb24pKSB7XG4gICAgICBldmVudExpc3RlbmVyLmV2ZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgZXZlbnRMaXN0ZW5lci5ldmVudHNTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoZXZlbnRMaXN0ZW5lci5ldmVudHMpKSB7XG4gICAgICBldmVudExpc3RlbmVyLmV2ZW50cy5jb21wbGV0ZSgpO1xuICAgICAgZXZlbnRMaXN0ZW5lci5ldmVudHMgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoZXZlbnRMaXN0ZW5lci50ZWFyZG93bkNhbGxiYWNrKSkge1xuICAgICAgZXZlbnRMaXN0ZW5lci50ZWFyZG93bkNhbGxiYWNrKCk7XG4gICAgICBldmVudExpc3RlbmVyLnRlYXJkb3duQ2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhdHRhY2hFdmVudExpc3RlbmVyKG5hdGl2ZUVsZW1lbnQ6IGFueSwgZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gdm9pZCxcbiAgICAgIHRocm90dGxlSW50ZXJ2YWw/OiBudW1iZXIpOiBFdmVudExpc3RlbmVyIHtcbiAgICBjb25zdCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciA9IG5ldyBFdmVudExpc3RlbmVyKCk7XG4gICAgbGlzdGVuZXIuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIGxpc3RlbmVyLmV2ZW50cyA9IG5ldyBTdWJqZWN0PEV2ZW50PigpO1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXJDYWxsYmFjazogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCA9IChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGxpc3RlbmVyLmV2ZW50cy5uZXh0KGV2ZW50KTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIudGVhcmRvd25DYWxsYmFjayA9IHRoaXMucmVuZGVyZXIubGlzdGVuKG5hdGl2ZUVsZW1lbnQsIGV2ZW50TmFtZSwgb2JzZXJ2ZXJDYWxsYmFjayk7XG5cbiAgICBsaXN0ZW5lci5ldmVudHNTdWJzY3JpcHRpb24gPSBsaXN0ZW5lci5ldmVudHNcbiAgICAgIC5waXBlKCghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhyb3R0bGVJbnRlcnZhbCkpXG4gICAgICAgICAgPyB0aHJvdHRsZVRpbWUodGhyb3R0bGVJbnRlcnZhbCwgdW5kZWZpbmVkLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlfSlcbiAgICAgICAgICA6IHRhcCgoKSA9PiB7fSkgLy8gbm8tb3BcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBFdmVudCkgPT4geyBjYWxsYmFjayhldmVudCk7IH0pO1xuXG4gICAgcmV0dXJuIGxpc3RlbmVyO1xuICB9XG59XG4iXX0=