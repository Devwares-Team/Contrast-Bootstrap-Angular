/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 *  Collection of functions to handle conversions/lookups of values
 */
export class ValueHelper {
    /**
     * @param {?} value
     * @return {?}
     */
    static isNullOrUndefined(value) {
        return value === undefined || value === null;
    }
    /**
     * @param {?} array1
     * @param {?} array2
     * @return {?}
     */
    static areArraysEqual(array1, array2) {
        if (array1.length !== array2.length) {
            return false;
        }
        for (let i = 0; i < array1.length; ++i) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static linearValueToPosition(val, minVal, maxVal) {
        /** @type {?} */
        const range = maxVal - minVal;
        return (val - minVal) / range;
    }
    /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static logValueToPosition(val, minVal, maxVal) {
        val = Math.log(val);
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        /** @type {?} */
        const range = maxVal - minVal;
        return (val - minVal) / range;
    }
    /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static linearPositionToValue(percent, minVal, maxVal) {
        return percent * (maxVal - minVal) + minVal;
    }
    /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static logPositionToValue(percent, minVal, maxVal) {
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        /** @type {?} */
        const value = percent * (maxVal - minVal) + minVal;
        return Math.exp(value);
    }
    /**
     * @param {?} modelValue
     * @param {?} stepsArray
     * @return {?}
     */
    static findStepIndex(modelValue, stepsArray) {
        /** @type {?} */
        const differences = stepsArray.map((step) => Math.abs(modelValue - step.value));
        /** @type {?} */
        let minDifferenceIndex = 0;
        for (let index = 0; index < stepsArray.length; index++) {
            if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
                minDifferenceIndex = index;
            }
        }
        return minDifferenceIndex;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvIiwic291cmNlcyI6WyJ2YWx1ZS1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLE1BQU07Ozs7O0lBQ0osTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQVU7UUFDakMsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUM7S0FDOUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBYSxFQUFFLE1BQWE7UUFDaEQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzlDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7OztJQUVELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFXLEVBQUUsTUFBYyxFQUFFLE1BQWM7O1FBQ3RFLE1BQU0sS0FBSyxHQUFXLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDL0I7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBVyxFQUFFLE1BQWMsRUFBRSxNQUFjO1FBQ25FLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUMxQixNQUFNLEtBQUssR0FBVyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQy9COzs7Ozs7O0lBRUQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE9BQWUsRUFBRSxNQUFjLEVBQUUsTUFBYztRQUMxRSxPQUFPLE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7S0FDN0M7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBZSxFQUFFLE1BQWMsRUFBRSxNQUFjO1FBQ3ZFLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUMxQixNQUFNLEtBQUssR0FBVyxPQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4Qjs7Ozs7O0lBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFrQixFQUFFLFVBQWtDOztRQUN6RSxNQUFNLFdBQVcsR0FBYSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBMEIsRUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7O1FBRXhILElBQUksa0JBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBQ25DLEtBQUssSUFBSSxLQUFLLEdBQVcsQ0FBQyxFQUFFLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzlELElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRTtnQkFDbEgsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO2FBQzVCO1NBQ0Y7UUFFRCxPQUFPLGtCQUFrQixDQUFDO0tBQzNCO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21TdGVwRGVmaW5pdGlvbiB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbi8qKlxuICogIENvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIHRvIGhhbmRsZSBjb252ZXJzaW9ucy9sb29rdXBzIG9mIHZhbHVlc1xuICovXG5leHBvcnQgY2xhc3MgVmFsdWVIZWxwZXIge1xuICBzdGF0aWMgaXNOdWxsT3JVbmRlZmluZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGFyZUFycmF5c0VxdWFsKGFycmF5MTogYW55W10sIGFycmF5MjogYW55W10pOiBib29sZWFuIHtcbiAgICBpZiAoYXJyYXkxLmxlbmd0aCAhPT0gYXJyYXkyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBhcnJheTEubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChhcnJheTFbaV0gIT09IGFycmF5MltpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgbGluZWFyVmFsdWVUb1Bvc2l0aW9uKHZhbDogbnVtYmVyLCBtaW5WYWw6IG51bWJlciwgbWF4VmFsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHJhbmdlOiBudW1iZXIgPSBtYXhWYWwgLSBtaW5WYWw7XG4gICAgcmV0dXJuICh2YWwgLSBtaW5WYWwpIC8gcmFuZ2U7XG4gIH1cblxuICBzdGF0aWMgbG9nVmFsdWVUb1Bvc2l0aW9uKHZhbDogbnVtYmVyLCBtaW5WYWw6IG51bWJlciwgbWF4VmFsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHZhbCA9IE1hdGgubG9nKHZhbCk7XG4gICAgbWluVmFsID0gTWF0aC5sb2cobWluVmFsKTtcbiAgICBtYXhWYWwgPSBNYXRoLmxvZyhtYXhWYWwpO1xuICAgIGNvbnN0IHJhbmdlOiBudW1iZXIgPSBtYXhWYWwgLSBtaW5WYWw7XG4gICAgcmV0dXJuICh2YWwgLSBtaW5WYWwpIC8gcmFuZ2U7XG4gIH1cblxuICBzdGF0aWMgbGluZWFyUG9zaXRpb25Ub1ZhbHVlKHBlcmNlbnQ6IG51bWJlciwgbWluVmFsOiBudW1iZXIsIG1heFZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGVyY2VudCAqIChtYXhWYWwgLSBtaW5WYWwpICsgbWluVmFsO1xuICB9XG5cbiAgc3RhdGljIGxvZ1Bvc2l0aW9uVG9WYWx1ZShwZXJjZW50OiBudW1iZXIsIG1pblZhbDogbnVtYmVyLCBtYXhWYWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgbWluVmFsID0gTWF0aC5sb2cobWluVmFsKTtcbiAgICBtYXhWYWwgPSBNYXRoLmxvZyhtYXhWYWwpO1xuICAgIGNvbnN0IHZhbHVlOiBudW1iZXIgPSBwZXJjZW50ICogKG1heFZhbCAtIG1pblZhbCkgKyBtaW5WYWw7XG4gICAgcmV0dXJuIE1hdGguZXhwKHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kU3RlcEluZGV4KG1vZGVsVmFsdWU6IG51bWJlciwgc3RlcHNBcnJheTogQ3VzdG9tU3RlcERlZmluaXRpb25bXSk6IG51bWJlciB7XG4gICAgY29uc3QgZGlmZmVyZW5jZXM6IG51bWJlcltdID0gc3RlcHNBcnJheS5tYXAoKHN0ZXA6IEN1c3RvbVN0ZXBEZWZpbml0aW9uKTogbnVtYmVyID0+IE1hdGguYWJzKG1vZGVsVmFsdWUgLSBzdGVwLnZhbHVlKSk7XG5cbiAgICBsZXQgbWluRGlmZmVyZW5jZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIGZvciAobGV0IGluZGV4OiBudW1iZXIgPSAwOyBpbmRleCA8IHN0ZXBzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoZGlmZmVyZW5jZXNbaW5kZXhdICE9PSBkaWZmZXJlbmNlc1ttaW5EaWZmZXJlbmNlSW5kZXhdICYmIGRpZmZlcmVuY2VzW2luZGV4XSA8IGRpZmZlcmVuY2VzW21pbkRpZmZlcmVuY2VJbmRleF0pIHtcbiAgICAgICAgbWluRGlmZmVyZW5jZUluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pbkRpZmZlcmVuY2VJbmRleDtcbiAgfVxufVxuIl19