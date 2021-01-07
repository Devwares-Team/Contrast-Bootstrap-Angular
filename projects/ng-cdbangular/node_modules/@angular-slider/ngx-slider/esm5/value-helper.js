/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 *  Collection of functions to handle conversions/lookups of values
 */
var /**
 *  Collection of functions to handle conversions/lookups of values
 */
ValueHelper = /** @class */ (function () {
    function ValueHelper() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ValueHelper.isNullOrUndefined = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value === undefined || value === null;
    };
    /**
     * @param {?} array1
     * @param {?} array2
     * @return {?}
     */
    ValueHelper.areArraysEqual = /**
     * @param {?} array1
     * @param {?} array2
     * @return {?}
     */
    function (array1, array2) {
        if (array1.length !== array2.length) {
            return false;
        }
        for (var i = 0; i < array1.length; ++i) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    };
    /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    ValueHelper.linearValueToPosition = /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    function (val, minVal, maxVal) {
        /** @type {?} */
        var range = maxVal - minVal;
        return (val - minVal) / range;
    };
    /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    ValueHelper.logValueToPosition = /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    function (val, minVal, maxVal) {
        val = Math.log(val);
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        /** @type {?} */
        var range = maxVal - minVal;
        return (val - minVal) / range;
    };
    /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    ValueHelper.linearPositionToValue = /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    function (percent, minVal, maxVal) {
        return percent * (maxVal - minVal) + minVal;
    };
    /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    ValueHelper.logPositionToValue = /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    function (percent, minVal, maxVal) {
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        /** @type {?} */
        var value = percent * (maxVal - minVal) + minVal;
        return Math.exp(value);
    };
    /**
     * @param {?} modelValue
     * @param {?} stepsArray
     * @return {?}
     */
    ValueHelper.findStepIndex = /**
     * @param {?} modelValue
     * @param {?} stepsArray
     * @return {?}
     */
    function (modelValue, stepsArray) {
        /** @type {?} */
        var differences = stepsArray.map(function (step) { return Math.abs(modelValue - step.value); });
        /** @type {?} */
        var minDifferenceIndex = 0;
        for (var index = 0; index < stepsArray.length; index++) {
            if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
                minDifferenceIndex = index;
            }
        }
        return minDifferenceIndex;
    };
    return ValueHelper;
}());
/**
 *  Collection of functions to handle conversions/lookups of values
 */
export { ValueHelper };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvIiwic291cmNlcyI6WyJ2YWx1ZS1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBOzs7QUFBQTs7Ozs7OztJQUNTLDZCQUFpQjs7OztJQUF4QixVQUF5QixLQUFVO1FBQ2pDLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0tBQzlDOzs7Ozs7SUFFTSwwQkFBYzs7Ozs7SUFBckIsVUFBc0IsTUFBYSxFQUFFLE1BQWE7UUFDaEQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzlDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7OztJQUVNLGlDQUFxQjs7Ozs7O0lBQTVCLFVBQTZCLEdBQVcsRUFBRSxNQUFjLEVBQUUsTUFBYzs7UUFDdEUsSUFBTSxLQUFLLEdBQVcsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUMvQjs7Ozs7OztJQUVNLDhCQUFrQjs7Ozs7O0lBQXpCLFVBQTBCLEdBQVcsRUFBRSxNQUFjLEVBQUUsTUFBYztRQUNuRSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFDMUIsSUFBTSxLQUFLLEdBQVcsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUMvQjs7Ozs7OztJQUVNLGlDQUFxQjs7Ozs7O0lBQTVCLFVBQTZCLE9BQWUsRUFBRSxNQUFjLEVBQUUsTUFBYztRQUMxRSxPQUFPLE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7S0FDN0M7Ozs7Ozs7SUFFTSw4QkFBa0I7Ozs7OztJQUF6QixVQUEwQixPQUFlLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDdkUsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBQzFCLElBQU0sS0FBSyxHQUFXLE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hCOzs7Ozs7SUFFTSx5QkFBYTs7Ozs7SUFBcEIsVUFBcUIsVUFBa0IsRUFBRSxVQUFrQzs7UUFDekUsSUFBTSxXQUFXLEdBQWEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQTBCLElBQWEsT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQzs7UUFFeEgsSUFBSSxrQkFBa0IsR0FBVyxDQUFDLENBQUM7UUFDbkMsS0FBSyxJQUFJLEtBQUssR0FBVyxDQUFDLEVBQUUsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDOUQsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO2dCQUNsSCxrQkFBa0IsR0FBRyxLQUFLLENBQUM7YUFDNUI7U0FDRjtRQUVELE9BQU8sa0JBQWtCLENBQUM7S0FDM0I7c0JBM0RIO0lBNERDLENBQUE7Ozs7QUF2REQsdUJBdURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VzdG9tU3RlcERlZmluaXRpb24gfSBmcm9tICcuL29wdGlvbnMnO1xuXG4vKipcbiAqICBDb2xsZWN0aW9uIG9mIGZ1bmN0aW9ucyB0byBoYW5kbGUgY29udmVyc2lvbnMvbG9va3VwcyBvZiB2YWx1ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFZhbHVlSGVscGVyIHtcbiAgc3RhdGljIGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBhcmVBcnJheXNFcXVhbChhcnJheTE6IGFueVtdLCBhcnJheTI6IGFueVtdKTogYm9vbGVhbiB7XG4gICAgaWYgKGFycmF5MS5sZW5ndGggIT09IGFycmF5Mi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgYXJyYXkxLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoYXJyYXkxW2ldICE9PSBhcnJheTJbaV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGxpbmVhclZhbHVlVG9Qb3NpdGlvbih2YWw6IG51bWJlciwgbWluVmFsOiBudW1iZXIsIG1heFZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCByYW5nZTogbnVtYmVyID0gbWF4VmFsIC0gbWluVmFsO1xuICAgIHJldHVybiAodmFsIC0gbWluVmFsKSAvIHJhbmdlO1xuICB9XG5cbiAgc3RhdGljIGxvZ1ZhbHVlVG9Qb3NpdGlvbih2YWw6IG51bWJlciwgbWluVmFsOiBudW1iZXIsIG1heFZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICB2YWwgPSBNYXRoLmxvZyh2YWwpO1xuICAgIG1pblZhbCA9IE1hdGgubG9nKG1pblZhbCk7XG4gICAgbWF4VmFsID0gTWF0aC5sb2cobWF4VmFsKTtcbiAgICBjb25zdCByYW5nZTogbnVtYmVyID0gbWF4VmFsIC0gbWluVmFsO1xuICAgIHJldHVybiAodmFsIC0gbWluVmFsKSAvIHJhbmdlO1xuICB9XG5cbiAgc3RhdGljIGxpbmVhclBvc2l0aW9uVG9WYWx1ZShwZXJjZW50OiBudW1iZXIsIG1pblZhbDogbnVtYmVyLCBtYXhWYWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHBlcmNlbnQgKiAobWF4VmFsIC0gbWluVmFsKSArIG1pblZhbDtcbiAgfVxuXG4gIHN0YXRpYyBsb2dQb3NpdGlvblRvVmFsdWUocGVyY2VudDogbnVtYmVyLCBtaW5WYWw6IG51bWJlciwgbWF4VmFsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIG1pblZhbCA9IE1hdGgubG9nKG1pblZhbCk7XG4gICAgbWF4VmFsID0gTWF0aC5sb2cobWF4VmFsKTtcbiAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gcGVyY2VudCAqIChtYXhWYWwgLSBtaW5WYWwpICsgbWluVmFsO1xuICAgIHJldHVybiBNYXRoLmV4cCh2YWx1ZSk7XG4gIH1cblxuICBzdGF0aWMgZmluZFN0ZXBJbmRleChtb2RlbFZhbHVlOiBudW1iZXIsIHN0ZXBzQXJyYXk6IEN1c3RvbVN0ZXBEZWZpbml0aW9uW10pOiBudW1iZXIge1xuICAgIGNvbnN0IGRpZmZlcmVuY2VzOiBudW1iZXJbXSA9IHN0ZXBzQXJyYXkubWFwKChzdGVwOiBDdXN0b21TdGVwRGVmaW5pdGlvbik6IG51bWJlciA9PiBNYXRoLmFicyhtb2RlbFZhbHVlIC0gc3RlcC52YWx1ZSkpO1xuXG4gICAgbGV0IG1pbkRpZmZlcmVuY2VJbmRleDogbnVtYmVyID0gMDtcbiAgICBmb3IgKGxldCBpbmRleDogbnVtYmVyID0gMDsgaW5kZXggPCBzdGVwc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGRpZmZlcmVuY2VzW2luZGV4XSAhPT0gZGlmZmVyZW5jZXNbbWluRGlmZmVyZW5jZUluZGV4XSAmJiBkaWZmZXJlbmNlc1tpbmRleF0gPCBkaWZmZXJlbmNlc1ttaW5EaWZmZXJlbmNlSW5kZXhdKSB7XG4gICAgICAgIG1pbkRpZmZlcmVuY2VJbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtaW5EaWZmZXJlbmNlSW5kZXg7XG4gIH1cbn1cbiJdfQ==