(function(window) {

    // Selector
    window.$$ = function(a) {
        return document.querySelector(a);
    };

    // Select
    window.Array.prototype.select = function() {
        if (this.length === 0) {
          console.error(`Error: select cannot be called on an empty array`)
        //   return undefined;
        return "Error: select cannot be called on an empty array";
        }
        return this;
    };

    // Get first item of an array
    window.Array.prototype.first = function(item) {
        var na = this[0];
        return na;
    };

    // Get last item of an array
    window.Array.prototype.last = function(item) {
        var na = this[this.length - 1];
        return na;
    };

    // Max value in an array
    window.Array.prototype.max = function() {
        if (this.length === 0) {
          return undefined;
        }
        let max = this[0];
        for (let i = 1; i < this.length; i++) {
          if (this[i] > max) {
            max = this[i];
          }
        }
        return max;
    };

    // Min value in an array
    Array.prototype.min = function() {
        if (this.length === 0) {
          return undefined;
        }
        let min = this[0];
        for (let i = 1; i < this.length; i++) {
          if (this[i] < min) {
            min = this[i];
          }
        }
        return min;
    };

    // Remove item in an array by value
    window.Array.prototype.remove = function(item) {
        var fa = [];
        for (var i = 0; i < this.length; i++) {
          if (this[i] !== item) {
            fa.push(this[i]);
          }
        }
        return fa;
    };

    // Add item to an array, add to last
    window.Array.prototype.append = function(item) {
        var na = this;
        na.push(item);
        return na;
    };

    // Add item to an array, add to start (first item)
    window.Array.prototype.inject = function(item) {
        var ca = this;
        var na = [item];
        for (let i = 0; i < ca.length; i++) {
            na.push(ca[i]);
        }
        return na;
    };

    // Clear all items in the array
    window.Array.prototype.clear = function() {
        var ca = this;
        ca = [];
        return ca;
    };

})(window);