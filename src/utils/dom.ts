const getScrolled = () => {
    var top = window.pageYOffset
    if (typeof top === "number") {
        return {
            top: top,
            left: window.pageXOffset
        }
    }
    return {
        top: document.documentElement.scrollTop,
        left: document.documentElement.scrollLeft
    }
}

function toInt(number) {
    return parseInt(number, 10)
}

export const offset = (element) => {
    var clientRect = element.getBoundingClientRect()
    var scrolled = getScrolled()
    return {
        top: toInt(clientRect.top + scrolled.top),
        bottom: toInt(clientRect.bottom - scrolled.top),
        left: toInt(clientRect.left + scrolled.left),
        right: toInt(clientRect.right - scrolled.left),
        width: toInt(clientRect.right - clientRect.left),
        height: toInt(clientRect.bottom - clientRect.top)
    }
}

export const getAxis = () => {
    return {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }
}