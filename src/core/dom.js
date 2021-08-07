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

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
        return this
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
        return this
    }

    toString() {
        return this.$el.innerHTML
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }
        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
        return this
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
