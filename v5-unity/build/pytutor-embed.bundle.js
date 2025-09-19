            var pythonTutorBaseUrl = (typeof window !== 'undefined' && window.location && window.location.origin ? window.location.origin : 'https://pythontutor.com');
            if (pythonTutorBaseUrl.charAt(pythonTutorBaseUrl.length - 1) !== '/') {
                pythonTutorBaseUrl += '/';
            }
            base.append('<div style="font-size: 8pt; margin-bottom: 10px;"><a href="' + pythonTutorBaseUrl + '" target="_blank" style="color: #3D58A2;">Python Tutor</a> by <a href="https://twitter.com/pgbovine" target="_blank" style="color: #3D58A2;">Philip Guo</a></div>');
/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;
        var baseUrl = (typeof window !== 'undefined' && window.location && window.location.origin ? window.location.origin : 'https://pythontutor.com');
        if (baseUrl.charAt(baseUrl.length - 1) !== '/') {
            baseUrl += '/';
        }
        params.editCodeBaseURL = baseUrl + 'visualize.html';
