function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".main" + shadowSelector + " {background-color: white;}.center" + shadowSelector + " {text-align: center;}.header" + shadowSelector + " {background-color: #1589ee;font-family: 'Lucida Grande', Verdana, Arial, Sans-Serif;color: white;}.header1" + shadowSelector + " {font-size: 3rem;font-weight: 700;font-family: 'Poppins';}.header2" + shadowSelector + " {font-size: 20px;font-family: 'Playfair Display';letter-spacing: 5px;}.slds-context-bar" + shadowSelector + " {height: 3.5rem;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];