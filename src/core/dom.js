class Dom {
    constructor(selector) {
        if (typeof selector === 'string') {
            this.$el = document.querySelector(selector)
            return;
        }
        this.$el = selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
        }
        return this

    }

    clear() {
        this.html('')
        return this
    }

    toString() {
        return this.$el.innerHTML
    }

    append(node) {
        if (Element.prototype.append) {
            this.$el.append(node)
            return
        }
        this.$el.appendChild(node)
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, ...classes) => {
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(...classes)
    }
    return $(el)
}
