/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;
        try {
            var configuredHubBase = exports.TogetherJS.config.get("hubBase");
            if (configuredHubBase) {
                var hubBaseUrl = new URL(configuredHubBase, window.location.href);
                if (window.location.protocol === "https:" && hubBaseUrl.protocol !== "https:") {
                    hubBaseUrl.protocol = "https:";
                }
                else if (!hubBaseUrl.protocol) {
                    hubBaseUrl.protocol = window.location.protocol || "https:";
                }
                var normalizedHubBase = hubBaseUrl.toString().replace(/\/*$/, "/");
                exports.TogetherJS.config("hubBase", normalizedHubBase);
            }
        }
        catch (e) {
            console.warn("Unable to normalize TogetherJS hubBase", e);
        }

