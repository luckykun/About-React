'use strict';

require('./index.css');

function isFlexSupported(style) {
    return 'flex' in style || 'webkitFlex' in style || 'MozFlex' in style;
}
if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    var documentElement = window.document.documentElement;

    var NO_FLEX = 'no-flex';
    if (!isFlexSupported(documentElement.style) && documentElement.className.indexOf(NO_FLEX) === -1) {
        documentElement.className += ' ' + NO_FLEX;
    }
}