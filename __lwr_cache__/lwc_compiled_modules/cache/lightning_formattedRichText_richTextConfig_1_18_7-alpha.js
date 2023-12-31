const tagsWhitelist = Object.freeze(['a', 'abbr', 'acronym', 'address', 'b', 'br', 'big', 'blockquote', 'caption', 'cite', 'code', 'col', 'colgroup', 'del', 'div', 'dl', 'dd', 'dt', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'i', 'img', 'ins', 'kbd', 'li', 'ol', 'mark', 'p', 'param', 'pre', 'q', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'tt', 'u', 'ul', 'var', 'strike', 'font']);
const attrWhitelist = Object.freeze(['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'coords', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'span', 'srclang', 'start', 'src', 'step', 'style', 'summary', 'tabindex', 'target', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'data-fileid']);
const uriAllowList = Object.freeze(['ftp', 'ftps', 'http', 'https', 'mailto', 'tel', 'callto', 'cid', 'xmpp', 'ciscotel', 'navision']);
const uriAllowListString = uriAllowList.join('|');
// eslint-disable-next-line no-useless-escape
const allowedUriRegString = `^(?:(?:${uriAllowListString}):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))`;
const allowedUriRegEx = new RegExp(allowedUriRegString, 'i');
export const richTextConfig = Object.freeze({
  ALLOWED_TAGS: tagsWhitelist,
  ALLOWED_ATTR: attrWhitelist,
  ALLOWED_URI_REGEXP: allowedUriRegEx,
  ALLOW_UNKNOWN_PROTOCOLS: false
});