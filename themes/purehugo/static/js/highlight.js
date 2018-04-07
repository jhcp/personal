function highlight(container,what,spanClass) {
    var content = container.innerHTML,
        //pattern = new RegExp('(>[^<.]*)(' + what + ')([^<.]*)','g'),
        //replaceWith = '$1<span ' + ( spanClass ? 'class="' + spanClass + '"' : '' ) + '">$2</span>$3',
        pattern = new RegExp(what,'g'),
        replaceWith = '<span ' + ( spanClass ? 'class="' + spanClass + '"' : '' ) + '">$1</span>',
        highlighted = content.replace(pattern,replaceWith);
    return (container.innerHTML = highlighted) !== content;
}
window.onload = function () {highlight(document.getElementsByClassName('post-description')[0],/\[(.*)\]/,'venue'); };
