const Singleton = (function () {
    let instance;

    function createInstance(x) {
        const object = new Object({ name: x });
        return object;
    }

    return {
        getInstance: function (x) {
            if (!instance) {
                instance = createInstance(x);
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance("Keyboard");
const instanceB = Singleton.getInstance("Mouse");

console.log(instanceA, instanceB);

// console.log(instanceA);