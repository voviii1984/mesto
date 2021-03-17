export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._rendererItem = items;
        this._renderer = renderer;
    
        this._container = document.querySelector(containerSelector);
    }

    renderItems(){
        this._rendererItem.forEach(item => {
            this._renderer(item)
        })
    }

    addItem(element) {
        this._container.append(element);
    }
}