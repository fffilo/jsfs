;(function() {

	/**
	 * Get element property or execute method.
	 *
	 * @param  {Object} element
	 * @param  {Array}  propList
	 * @return {Mixed}
	 */
	var _prop = function(element, propList) {
		for (var i = 0; i < propList.length; i++) {
			if (typeof element[propList[i]] === "function") {
				return element[propList[i]]();
			}
			else if (typeof element[propList[i]] !== "undefined") {
				return element[propList[i]];
			}
		}
	}

	window.jsfs = {

		/**
		 * The Document.fullscreen read-only property reports
		 * whether or not the document is currently displaying
		 * content in fullscreen mode.
		 *
		 * https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
		 *
		 * @return {Boolean}
		 */
		fullscreen: function() {
			return _prop(document, [ "fullscreen", "webkitIsFullScreen", "mozFullScreen" ]);
		},

		/**
		 * The Document.fullscreenEnabled read-only property
		 * returns a Boolean that reports whether or not
		 * full-screen mode is available. Full screen mode
		 * is available only for a page that has no windowed
		 * plug-ins in any of its documents, and if all
		 * <iframe> elements which contain the document have
		 * their allowfullscreen attribute set.
		 *
		 * https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
		 *
		 * @return {Boolean}
		 */
		enabled: function() {
			return _prop(document, [ "fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled" ]);
		},

		/**
		 * The Document.fullscreenElement read-only property
		 * returns the Element that is currently being presented
		 * in full-screen mode in this document, or null if
		 * full-screen mode is not currently in use.
		 *
		 * https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
		 *
		 * @return {Mixed}
		 */
		element: function() {
			return _prop(document, [ "fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement" ]);
		},

		/**
		 * The Document.exitFullscreen() is a method that takes
		 * the document out of full-screen mode; this is used
		 * to reverse the effects of a call to make an element
		 * in the document full-screen using its
		 * Element.requestFullscreen() method.
		 *
		 * https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
		 *
		 * @return {Void}
		 */
		exit: function() {
			return _prop(document, [ "exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen" ]);
		},

		/**
		 * The Element.requestFullscreen() method issues an
		 * asynchronous request to make the element be
		 * displayed full-screen.
		 *
		 * https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
		 *
		 * @param  {Mixed} element
		 * @return {Void}
		 */
		request: function(element) {
			return _prop(element || document.body, [ "requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen" ]);
		},

		/**
		 * Toggles fullscreen.
		 *
		 * @param  {Mixed} element
		 * @return {Void}
		 */
		toggle: function(element) {
			if (this.element()) {
				return this.exit()
			}

			return this.request(element)
		}

	}

})();
