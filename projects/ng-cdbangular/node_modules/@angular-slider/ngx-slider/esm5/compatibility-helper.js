/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Helper with compatibility functions to support different browsers
 */
var /**
 * Helper with compatibility functions to support different browsers
 */
CompatibilityHelper = /** @class */ (function () {
    function CompatibilityHelper() {
    }
    /**
     * Workaround for TouchEvent constructor sadly not being available on all browsers (e.g. Firefox, Safari)
     * @param {?} event
     * @return {?}
     */
    CompatibilityHelper.isTouchEvent = /**
     * Workaround for TouchEvent constructor sadly not being available on all browsers (e.g. Firefox, Safari)
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ((/** @type {?} */ (window)).TouchEvent !== undefined) {
            return event instanceof TouchEvent;
        }
        return event.touches !== undefined;
    };
    /**
     * Detect presence of ResizeObserver API
     * @return {?}
     */
    CompatibilityHelper.isResizeObserverAvailable = /**
     * Detect presence of ResizeObserver API
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (window)).ResizeObserver !== undefined;
    };
    return CompatibilityHelper;
}());
/**
 * Helper with compatibility functions to support different browsers
 */
export { CompatibilityHelper };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGF0aWJpbGl0eS1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW5ndWxhci1zbGlkZXIvbmd4LXNsaWRlci8iLCJzb3VyY2VzIjpbImNvbXBhdGliaWxpdHktaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQTs7O0FBQUE7Ozs7Ozs7O0lBRWdCLGdDQUFZOzs7OztjQUFDLEtBQVU7UUFDbkMsSUFBSSxtQkFBQyxNQUFhLEVBQUMsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQzVDLE9BQU8sS0FBSyxZQUFZLFVBQVUsQ0FBQztTQUNwQztRQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7Ozs7OztJQUl2Qiw2Q0FBeUI7Ozs7O1FBQ3JDLE9BQU8sbUJBQUMsTUFBYSxFQUFDLENBQUMsY0FBYyxLQUFLLFNBQVMsQ0FBQzs7OEJBbEJ4RDtJQW9CQyxDQUFBOzs7O0FBZEQsK0JBY0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWNsYXJhdGlvbiBmb3IgUmVzaXplT2JzZXJ2ZXIgYSBuZXcgQVBJIGF2YWlsYWJsZSBpbiBzb21lIG9mIG5ld2VzdCBicm93c2Vyczpcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZXNpemVPYnNlcnZlclxuZGVjbGFyZSBjbGFzcyBSZXNpemVPYnNlcnZlciB7XG59XG5cbi8qKiBIZWxwZXIgd2l0aCBjb21wYXRpYmlsaXR5IGZ1bmN0aW9ucyB0byBzdXBwb3J0IGRpZmZlcmVudCBicm93c2VycyAqL1xuZXhwb3J0IGNsYXNzIENvbXBhdGliaWxpdHlIZWxwZXIge1xuICAvKiogV29ya2Fyb3VuZCBmb3IgVG91Y2hFdmVudCBjb25zdHJ1Y3RvciBzYWRseSBub3QgYmVpbmcgYXZhaWxhYmxlIG9uIGFsbCBicm93c2VycyAoZS5nLiBGaXJlZm94LCBTYWZhcmkpICovXG4gIHB1YmxpYyBzdGF0aWMgaXNUb3VjaEV2ZW50KGV2ZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLlRvdWNoRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gZXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqIERldGVjdCBwcmVzZW5jZSBvZiBSZXNpemVPYnNlcnZlciBBUEkgKi9cbiAgcHVibGljIHN0YXRpYyBpc1Jlc2l6ZU9ic2VydmVyQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAod2luZG93IGFzIGFueSkuUmVzaXplT2JzZXJ2ZXIgIT09IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19