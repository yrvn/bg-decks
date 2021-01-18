require("normalize.css/normalize.css");
require("./styles/index.scss");

/*document.addEventListener("DOMContentLoaded", () => {
    const pluginsTriggerElement = document.getElementById("plugins-trigger");
    const pluginsElement = document.getElementById("plugins");

    const pluginsVisibleClass = "splash-overview-plugins__list--visible";

    pluginsTriggerElement.onclick = () => {
        pluginsElement.classList.toggle(pluginsVisibleClass);
    };
});*/

class Foo {
    constructor() {
        this.value = "foobar";
    }
    static instance() {
        return new Foo();
    }
    getValue() {
        return this.value;
    }
}

console.log(Foo.instance().getValue());
