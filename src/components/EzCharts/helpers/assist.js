export const on = (() => {
  if (document.addEventListener) {
    return (element, event, handler) => {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return (element, event, handler) => {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

export const off = (() => {
  if (document.removeEventListener) {
    return (element, event, handler) => {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return (element, event, handler) => {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

export const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
