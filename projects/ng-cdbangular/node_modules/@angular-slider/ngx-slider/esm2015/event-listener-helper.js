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
export class EventListenerHelper {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
    }
    /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    attachPassiveEventListener(nativeElement, eventName, callback, throttleInterval) {
        // Only use passive event listeners if the browser supports it
        if (detectPassiveEvents.hasSupport !== true) {
            return this.attachEventListener(nativeElement, eventName, callback, throttleInterval);
        }
        /** @type {?} */
        const listener = new EventListener();
        listener.eventName = eventName;
        listener.events = new Subject();
        /** @type {?} */
        const observerCallback = (event) => {
            listener.events.next(event);
        };
        nativeElement.addEventListener(eventName, observerCallback, { passive: true, capture: false });
        listener.teardownCallback = () => {
            nativeElement.removeEventListener(eventName, observerCallback, { passive: true, capture: false });
        };
        listener.eventsSubscription = listener.events
            .pipe((!ValueHelper.isNullOrUndefined(throttleInterval))
            ? throttleTime(throttleInterval, undefined, { leading: true, trailing: true })
            : tap(() => { }) // no-op
        )
            .subscribe((event) => {
            callback(event);
        });
        return listener;
    }
    /**
     * @param {?} eventListener
     * @return {?}
     */
    detachEventListener(eventListener) {
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
    }
    /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    attachEventListener(nativeElement, eventName, callback, throttleInterval) {
        /** @type {?} */
        const listener = new EventListener();
        listener.eventName = eventName;
        listener.events = new Subject();
        /** @type {?} */
        const observerCallback = (event) => {
            listener.events.next(event);
        };
        listener.teardownCallback = this.renderer.listen(nativeElement, eventName, observerCallback);
        listener.eventsSubscription = listener.events
            .pipe((!ValueHelper.isNullOrUndefined(throttleInterval))
            ? throttleTime(throttleInterval, undefined, { leading: true, trailing: true })
            : tap(() => { }) // no-op
        )
            .subscribe((event) => { callback(event); });
        return listener;
    }
}
if (false) {
    /** @type {?} */
    EventListenerHelper.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtbGlzdGVuZXItaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvIiwic291cmNlcyI6WyJldmVudC1saXN0ZW5lci1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLG1CQUFtQixNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLN0MsTUFBTTs7OztJQUNKLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7S0FDdEM7Ozs7Ozs7O0lBRU0sMEJBQTBCLENBQUMsYUFBa0IsRUFBRSxTQUFpQixFQUFFLFFBQThCLEVBQ25HLGdCQUF5Qjs7UUFFM0IsSUFBSSxtQkFBbUIsQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQzNDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDdkY7O1FBR0QsTUFBTSxRQUFRLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7UUFDcEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDL0IsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDOztRQUV2QyxNQUFNLGdCQUFnQixHQUEyQixDQUFDLEtBQVksRUFBUSxFQUFFO1lBQ3RFLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCLENBQUM7UUFDRixhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxF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OztDQUVuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGVUaW1lLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgZGV0ZWN0UGFzc2l2ZUV2ZW50cyBmcm9tICdkZXRlY3QtcGFzc2l2ZS1ldmVudHMnO1xuXG5pbXBvcnQgeyBFdmVudExpc3RlbmVyIH0gZnJvbSAnLi9ldmVudC1saXN0ZW5lcic7XG5pbXBvcnQgeyBWYWx1ZUhlbHBlciB9IGZyb20gJy4vdmFsdWUtaGVscGVyJztcblxuLyoqXG4gKiBIZWxwZXIgY2xhc3MgdG8gYXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBET00gZWxlbWVudHMgd2l0aCBkZWJvdW5jZSBzdXBwb3J0IHVzaW5nIHJ4anNcbiAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdGVuZXJIZWxwZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIHB1YmxpYyBhdHRhY2hQYXNzaXZlRXZlbnRMaXN0ZW5lcihuYXRpdmVFbGVtZW50OiBhbnksIGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IHZvaWQsXG4gICAgICB0aHJvdHRsZUludGVydmFsPzogbnVtYmVyKTogRXZlbnRMaXN0ZW5lciB7XG4gICAgLy8gT25seSB1c2UgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgaXRcbiAgICBpZiAoZGV0ZWN0UGFzc2l2ZUV2ZW50cy5oYXNTdXBwb3J0ICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRhY2hFdmVudExpc3RlbmVyKG5hdGl2ZUVsZW1lbnQsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIHRocm90dGxlSW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIC8vIEFuZ3VsYXIgZG9lc24ndCBzdXBwb3J0IHBhc3NpdmUgZXZlbnQgaGFuZGxlcnMgKHlldCksIHNvIHdlIG5lZWQgdG8gcm9sbCBvdXIgb3duIGNvZGUgdXNpbmcgbmF0aXZlIGZ1bmN0aW9uc1xuICAgIGNvbnN0IGxpc3RlbmVyOiBFdmVudExpc3RlbmVyID0gbmV3IEV2ZW50TGlzdGVuZXIoKTtcbiAgICBsaXN0ZW5lci5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgbGlzdGVuZXIuZXZlbnRzID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XG5cbiAgICBjb25zdCBvYnNlcnZlckNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgbGlzdGVuZXIuZXZlbnRzLm5leHQoZXZlbnQpO1xuICAgIH07XG4gICAgbmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgb2JzZXJ2ZXJDYWxsYmFjaywge3Bhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlfSk7XG5cbiAgICBsaXN0ZW5lci50ZWFyZG93bkNhbGxiYWNrID0gKCk6IHZvaWQgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgb2JzZXJ2ZXJDYWxsYmFjaywge3Bhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlfSk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLmV2ZW50c1N1YnNjcmlwdGlvbiA9IGxpc3RlbmVyLmV2ZW50c1xuICAgICAgLnBpcGUoKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aHJvdHRsZUludGVydmFsKSlcbiAgICAgICAgPyB0aHJvdHRsZVRpbWUodGhyb3R0bGVJbnRlcnZhbCwgdW5kZWZpbmVkLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlfSlcbiAgICAgICAgOiB0YXAoKCkgPT4ge30pIC8vIG5vLW9wXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGlzdGVuZXI7XG4gIH1cblxuICBwdWJsaWMgZGV0YWNoRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyOiBFdmVudExpc3RlbmVyKTogdm9pZCB7XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChldmVudExpc3RlbmVyLmV2ZW50c1N1YnNjcmlwdGlvbikpIHtcbiAgICAgIGV2ZW50TGlzdGVuZXIuZXZlbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBldmVudExpc3RlbmVyLmV2ZW50c1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChldmVudExpc3RlbmVyLmV2ZW50cykpIHtcbiAgICAgIGV2ZW50TGlzdGVuZXIuZXZlbnRzLmNvbXBsZXRlKCk7XG4gICAgICBldmVudExpc3RlbmVyLmV2ZW50cyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChldmVudExpc3RlbmVyLnRlYXJkb3duQ2FsbGJhY2spKSB7XG4gICAgICBldmVudExpc3RlbmVyLnRlYXJkb3duQ2FsbGJhY2soKTtcbiAgICAgIGV2ZW50TGlzdGVuZXIudGVhcmRvd25DYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGF0dGFjaEV2ZW50TGlzdGVuZXIobmF0aXZlRWxlbWVudDogYW55LCBldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiB2b2lkLFxuICAgICAgdGhyb3R0bGVJbnRlcnZhbD86IG51bWJlcik6IEV2ZW50TGlzdGVuZXIge1xuICAgIGNvbnN0IGxpc3RlbmVyOiBFdmVudExpc3RlbmVyID0gbmV3IEV2ZW50TGlzdGVuZXIoKTtcbiAgICBsaXN0ZW5lci5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgbGlzdGVuZXIuZXZlbnRzID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XG5cbiAgICBjb25zdCBvYnNlcnZlckNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgbGlzdGVuZXIuZXZlbnRzLm5leHQoZXZlbnQpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci50ZWFyZG93bkNhbGxiYWNrID0gdGhpcy5yZW5kZXJlci5saXN0ZW4obmF0aXZlRWxlbWVudCwgZXZlbnROYW1lLCBvYnNlcnZlckNhbGxiYWNrKTtcblxuICAgIGxpc3RlbmVyLmV2ZW50c1N1YnNjcmlwdGlvbiA9IGxpc3RlbmVyLmV2ZW50c1xuICAgICAgLnBpcGUoKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aHJvdHRsZUludGVydmFsKSlcbiAgICAgICAgICA/IHRocm90dGxlVGltZSh0aHJvdHRsZUludGVydmFsLCB1bmRlZmluZWQsIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWV9KVxuICAgICAgICAgIDogdGFwKCgpID0+IHt9KSAvLyBuby1vcFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7IGNhbGxiYWNrKGV2ZW50KTsgfSk7XG5cbiAgICByZXR1cm4gbGlzdGVuZXI7XG4gIH1cbn1cbiJdfQ==