webpackJsonp([1], [, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}, r = {};
	r.nosUrl = function(e, t, n, a, r) {
		return 0 !== a && (a = 1), !(/beauty\.nosdn\.127\.net/.test(e) || /\.nos\.netease\.com/g.test(e)) || ~e.indexOf(".gif") && !n || (e.indexOf("?imageView") < 0 ? e += "?" : e += "|", e += "imageView&quality=95&interlace=1", t && (n && ~e.indexOf(".gif") && (e += "&type=png"), e += "&thumbnail=" + t, e += "&enlarge=" + a), r && (e += "&pad=" + r)), e
	}, r.EventUtil = {
		addHandler: function(e, t, n) {
			e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
		},
		removeHandler: function(e, t, n) {
			e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
		},
		stopPropagation: function(e) {
			e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
		},
		preventDefault: function(e) {
			e.preventDefault ? e.preventDefault() : e.returnValue = !1
		}
	}, r.scrollUnique = function(e) {
		var t = void 0,
			n = document.getElementById(e),
			a = "mousewheel";
		void 0 !== document.mozHidden && (a = "DOMMouseScroll"), r.EventUtil.addHandler(n, a, function(e) {
			var a = e || window.event,
				o = n.scrollHeight,
				l = n.clientHeight,
				i = o - l,
				u = n.scrollTop,
				c = a.wheelDelta ? a.wheelDelta : a.detail;
			c < -3 || 3 === c ? t = !0 : (c > 3 || -3 === c) && (t = !1), (t && u >= i || !t && u <= 0) && r.EventUtil.preventDefault(a)
		})
	}, r.handleCountTo999 = function(e) {
		return e > 999 ? "999+" : e
	}, r.truncate = function(e, t) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "...";
		return e.length <= t ? e : e.slice(0, t) + n
	}, r.getKey = function() {
		var e = 0;
		return function() {
			return e++
		}
	}(), r.toW = function(e) {
		return e > 1e5 ? Math.floor(e / 1e4) + "万" : e
	}, r.checkNumber = function(e, t) {
		var n = e.replace(/[^\d\.]/g, "").split(".").slice(0, 2).join(".");
		return Number(n) > t ? t.toString() : n
	}, r.getLength = function(e) {
		try {
			return e || (e = ""), ("" + e).replace(/[^\x00-\xff]/g, "xx").length
		} catch (e) {}
	}, r.length = function(e) {
		try {
			var t = 0;
			e || (e = "");
			for (var n = 0; n < e.length; n++) {
				var a = e.charAt(n);
				escape(a).length > 3 ? t += 2 : t += 1
			}
			return t
		} catch (e) {}
	}, r.getDate = function(e) {
		if (!e || e <= -22090176e5) return {
			year: 0,
			month: 0,
			date: 0
		};
		var t = new Date(e);
		return {
			year: t.getFullYear(),
			month: t.getMonth() + 1,
			date: t.getDate()
		}
	}, r.getDisplayTime = function(e) {
		var t = "",
			n = parseInt(e / 60 / 60, 10),
			a = parseInt(e / 60 - 60 * n, 10),
			r = parseInt(e % 60, 10);
		return n && (t += n + "时"), a && (t += a + "分"), t += r + "秒"
	}, r.getDisplayTime2 = function(e) {
		var t = "",
			n = parseInt(e / 60 / 60, 10),
			a = parseInt(e / 60 - 60 * n, 10),
			r = parseInt(e % 60, 10),
			o = void 0,
			l = void 0;
		return o = a < 10 ? "0" + a : a.toString(), l = r < 10 ? "0" + r : r.toString(), n > 0 && (t = n > 10 ? n + ":" : "0" + n + ":"), t += o + ":" + l
	}, r.traversalObject = function(e, t) {
		return "object" !== (void 0 === e ? "undefined" : a(e)) || null === e ? e : (Object.keys(e).forEach(function(n) {
			switch (a(e[n])) {
				case "object":
					e[n] = r.traversalObject(e[n], t);
					break;
				case "string":
					"html" !== n && (e[n] = t(e[n]))
			}
		}), e)
	}, r.html2Escape = function() {
		return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/[<>&"]/g, function(e) {
			return {
				"<": "&lt;",
				">": "&gt;",
				"&": "&amp;",
				'"': "&quot;"
			}[e]
		})
	}, r.escape2Html = function() {
		var e = {
			lt: "<",
			gt: ">",
			nbsp: " ",
			quot: '"'
		};
		return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/&amp;/g, "&").replace(/&(lt|gt|nbsp|quot);/g, function(t, n) {
			return e[n]
		})
	}, t.
	default = r
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, o = n(227),
		l = a(o),
		i = n(226),
		u = (a(i), n(146));
	(function(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
		return t.
		default = e, t
	})(u).polyfill();
	var c = function(e) {
		var t = new FormData;
		return Object.keys(e).forEach(function(n) {
			t.append(n, e[n])
		}), t
	}, s = function(e) {
		var t = e && Object.keys(e),
			n = void 0;
		return t && t.length > 0 && (n = t.map(function(t) {
			return t + "=" + encodeURIComponent(e[t])
		}).join("&")), n
	}, f = function(e, t) {
		t = t || {};
		var n = void 0,
			a = (t.method || "get").toLowerCase(),
			o = "get" === a ? t.body || {} : {}, i = {
				url: e,
				method: a,
				params: o,
				withCredentials: !1
			};
		if ("get" === a) {
			n = r({}, i, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				}
			})
		}
		if ("post" === a || "put" === a) {
			var u = t,
				f = u.body,
				d = u.headers,
				p = t,
				h = p.norest,
				m = p.formData;
			d = d || {}, h && (d["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8"), d["Content-Type"] && "application/x-www-form-urlencoded;charset=utf-8" === d["Content-Type"] && (f = s(t.body)), m && (d["Content-Type"] = "multipart/form-data", f = c(t.body)), d["Content-Type"] || m || (d.Accept = "application/json", d["Content-Type"] = "application/json"), n = r({}, i, {
				data: f,
				headers: d
			})
		}
		return new Promise(function(e, t) {
			(0, l.
			default)(n).then(function(e) {
				return 200 !== e.status && t(e.statusText), e.data
			}).then(function(n) {
				n && (n.code >= 200 && n.code < 400 ? e(n) : t(n))
			}).
			catch (function(e) {
				t(e)
			})
		})
	};
	t.
	default = f
}, , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	t.LOGIN_SUCCESS = "LOGIN_SUCCESS", t.LOGIN_FAILURE = "LOGIN_ERROR", t.LOGOUT_SUCCESS = "LOGOUT_SUCCESS", t.LOGOUT_FAILURE = "LOGOUT_ERROR", t.SET_HEADER = "SET_HEADER", t.SET_ERROR = "SET_ERROR", t.CLEAR_ERROR = "CLEAR_ERROR", t.SET_HOMEPAGE = "SET_HOMEPAGE", t.GET_REPO_REQUEST = "GET_REPO_REQUEST", t.GET_REPO_FAILURE = "GET_REPO_FAILURE", t.GET_REPO_SUCCESS = "GET_REPO_SUCCESS", t.CHANGE_REPO_COMMENTS = "CHANGE_REPO_COMMENTS", t.GET_NOTE_REQUEST = "GET_NOTE_REQUEST", t.GET_NOTE_FAILURE = "GET_NOTE_FAILURE", t.GET_NOTE_SUCCESS = "GET_NOTE_SUCCESS", t.CHANGE_NOTE_COMMENTS = "CHANGE_NOTE_COMMENTS", t.GET_BRAND_REQUEST = "GET_BRAND_REQUEST", t.GET_BRAND_FAILURE = "GET_BRAND_FAILURE", t.GET_BRAND_SUCCESS = "GET_BRAND_SUCCESS", t.GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST", t.GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE", t.GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS", t.GET_VIDEO_REQUEST = "GET_VIDEO_REQUEST", t.GET_VIDEO_FAILURE = "GET_VIDEO_FAILURE", t.GET_VIDEO_SUCCESS = "GET_VIDEO_SUCCESS", t.SET_VIDEO_DATA = "SET_VIDEO_DATA", t.SET_VIDEO_AUTHOR = "SET_VIDEO_AUTHOR", t.CHANGE_VIDEO_COMMENTS = "CHANGE_VIDEO_COMMENTS", t.SET_TAG_REPO = "SET_TAG_REPO", t.SET_TAG_NOTE = "SET_TAG_NOTE", t.SET_TAG_VIDEO = "SET_TAG_VIDEO", t.SET_TAG_PRODUCT = "SET_TAG_PRODUCT", t.SET_TAG_DETAIL = "SET_TAG_DETAIL", t.SET_SEARCH_REPO = "SET_SEARCH_REPO", t.SET_SEARCH_NOTE = "SET_SEARCH_NOTE", t.SET_SEARCH_PRODUCT = "SET_SEARCH_PRODUCT", t.SET_SEARCH_USER = "SET_SEARCH_USER", t.SET_BEAUTY_VIDEO = "SET_BEAUTY_VIDEO", t.SET_BEAUTY_VIDEO_TAGS = "SET_BEAUTY_VIDEO_TAGS", t.SET_EVALUATION_REPO = "SET_EVALUATION_REPO", t.SET_EVALUATION_TABS = "SET_EVALUATION_TABS", t.SET_CENTER_USER = "GET_CENTER_USER", t.SET_CENTER_REPO = "SET_CENTER_REPO", t.SET_CENTER_NOTE = "SET_CENTER_NOTE", t.SET_CENTER_VIDEO = "SET_CENTER_VIDEO", t.GET_SITEMAP_SUCCESS = "GET_SITEMAP_REQUEST", t.GET_SITEMAP_FAILURE = "GET_SITEMAP_FAILURE", t.GET_SITEMAP_REPO_REQUEST = "GET_SITEMAP_REPO_REQUEST", t.GET_SITEMAP_REPO_SUCCESS = "GET_SITEMAP_REPO_SUCCESS", t.GET_SITEMAP_NOTE_REQUEST = "GET_SITEMAP_NOTE_REQUEST", t.GET_SITEMAP_NOTE_SUCCESS = "GET_SITEMAP_NOTE_SUCCESS", t.GET_SITEMAP_BRAND_REQUEST = "GET_SITEMAP_BRAND_REQUEST", t.GET_SITEMAP_BRAND_SUCCESS = "GET_SITEMAP_BRAND_SUCCESS", t.GET_SITEMAP_PRODUCT_REQUEST = "GET_SITEMAP_PRODUCT_REQUEST", t.GET_SITEMAP_PRODUCT_SUCCESS = "GET_SITEMAP_PRODUCT_SUCCESS", t.SET_TRIAL = "SET_TRIAL", t.SET_TRIAL_APPLYSTATUS = "SET_TRIAL_APPLYSTATUS", t.SET_TRIAL_NOTE = "SET_TRIAL_NOTE", t.SET_ALLTRIAL = "SET_ALLTRIAL"
}, , , , , , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(2),
		p = a(d),
		h = n(3),
		m = n(135),
		v = a(m),
		y = n(1),
		b = a(y),
		g = n(4),
		E = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(g),
		w = n(22),
		_ = a(w),
		N = n(249),
		C = a(N),
		O = n(250),
		T = a(O);
	n(147);
	var k = {
		GET_USER: "/newApi/ms/user/current",
		LOGOUT: "/newApi/logout",
		NAVIGATION: "/newApi/navigation"
	}, P = function(e) {
		return b.
		default.nosUrl(e, "80y80")
	}, S = function() {
		return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
	}, j = ["彩妆", "护肤", "品牌", "美学精选"],
		L = (u = i = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.state = {
					menuData: null,
					showQR: !1,
					showSearch: !e.triggerHideSearchHeight
				}, n.data = [], n.handleShowSubmenu = n.handleShowSubmenu.bind(n), n.handleHideSubmenu = n.handleHideSubmenu.bind(n), n.handlePageScroll = n.handlePageScroll.bind(n), n
			}
			return l(t, e), c(t, [{
				key: "handleShowSubmenu",
				value: function(e) {
					var t = this.data;
					t.length < e + 1 || this.setState({
						menuData: t[e]
					})
				}
			}, {
				key: "handlePageScroll",
				value: function() {
					var e = this.props.triggerHideSearchHeight;
					S() > e ? this.setState({
						showSearch: !0
					}) : this.setState({
						showSearch: !1
					})
				}
			}, {
				key: "handleHideSubmenu",
				value: function() {
					this.setState({
						menuData: null
					})
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.props.triggerHideSearchHeight && window.removeEventListener("scroll", this.handlePageScroll)
				}
			}, {
				key: "componentDidMount",
				value: function() {
					var e = this;
					this.props.triggerHideSearchHeight && window.addEventListener("scroll", this.handlePageScroll), (0, p.
					default)(k.NAVIGATION).then(function(t) {
						e.data = t.result
					}).
					catch (function(e) {})
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = this.props,
						n = t.isLogin,
						a = t.avatar,
						r = t.signupPage,
						o = t.loginPage,
						l = t.showLoginModal,
						i = t.notFixed,
						u = t.id,
						c = t.logout,
						s = this.state,
						d = s.menuData,
						p = s.showQR,
						h = s.showSearch,
						m = P(a),
						y = [{
							href: "/repoEdit",
							name: "合辑",
							targetBlank: !0
						}, {
							href: "/noteEdit",
							name: "心得",
							targetBlank: !0
						}, {
							href: "/videoEdit",
							name: "视频",
							targetBlank: !0
						}],
						b = [{
							href: "/user/" + u,
							name: "我的"
						}, {
							href: "/account",
							name: "个人信息"
						}, {
							click: c,
							name: "退出登录"
						}],
						g = f.
					default.createElement("div", {
						className: "wrap-img"
					}, f.
					default.createElement("img", {
						alt: "",
						src: m
					})), E = j.map(function(t, n) {
						return f.
						default.createElement("li", {
							key: "level2_" + n,
							onMouseEnter: function() {
								e.handleShowSubmenu(n)
							},
							className: d && d.id === n.toString() ? "active" : ""
						}, t)
					});
					return f.
					default.createElement("header", {
						className: i ? "not-fixed" : ""
					}, f.
					default.createElement("div", {
						className: "header-placeholder"
					}), f.
					default.createElement("div", {
						className: "page-nav"
					}, f.
					default.createElement("div", {
						className: "container"
					}, f.
					default.createElement("nav", {
						className: "clearfix"
					}, f.
					default.createElement("a", {
						href: "/",
						title: "首页"
					}, f.
					default.createElement("span", {
						className: "icon-meixue"
					})), r || o ? null : f.
					default.createElement("div", null, f.
					default.createElement("a", {
						href: "/",
						title: "首页"
					}, "首页"), f.
					default.createElement("div", {
						onMouseLeave: this.handleHideSubmenu
					}, f.
					default.createElement("ul", {
						className: "navmenu left-menu"
					}, E), !! d && f.
					default.createElement(T.
					default, {
						menuData: d
					}))), r || o ? null : f.
					default.createElement("ul", {
						className: "navmenu right-menu"
					}, h && f.
					default.createElement("li", null, f.
					default.createElement(v.
					default, {
						topBar: !0
					})), f.
					default.createElement("li", {
						className: "qrcode",
						onMouseLeave: function() {
							e.setState({
								showQR: !1
							})
						},
						onMouseEnter: function() {
							e.setState({
								showQR: !0
							})
						}
					}, f.
					default.createElement("span", {
						className: "icon icon-phone"
					}), f.
					default.createElement("span", null, "下载APP"), p ? f.
					default.createElement("div", {
						className: "qr-container"
					}) : null), n && f.
					default.createElement("li", {
						className: "publish"
					}, f.
					default.createElement(C.
					default, {
						showData: f.
						default.createElement("span", {
							className: "publish-btn"
						}, "创建"),
						listData: y
					})), n && f.
					default.createElement("li", {
						className: "avatar"
					}, f.
					default.createElement(C.
					default, {
						showData: f.
						default.createElement("span", null, g),
						listData: b
					})), !n && f.
					default.createElement("li", {
						className: "not-login"
					}, f.
					default.createElement("a", {
						onClick: l
					}, "登录"), f.
					default.createElement("span", {
						className: "separator"
					}), f.
					default.createElement("a", {
						href: "/signup"
					}, "注册"))), o && f.
					default.createElement("ul", {
						className: "navmenu right-menu"
					}, f.
					default.createElement("li", {
						className: "login-signup"
					}, "没有帐号？ ", f.
					default.createElement("a", {
						href: "/signup"
					}, "注册"))), r && f.
					default.createElement("ul", {
						className: "navmenu right-menu"
					}, f.
					default.createElement("li", {
						className: "login-signup"
					}, "已有帐号？ ", f.
					default.createElement("a", {
						href: "/login"
					}, "登录")))))))
				}
			}]), t
		}(f.
		default.Component), i.propTypes = {
			loginPage: f.
			default.PropTypes.bool,
			signupPage: f.
			default.PropTypes.bool,
			notFixed: f.
			default.PropTypes.bool,
			triggerHideSearchHeight: f.
			default.PropTypes.number
		}, i.defaultProps = {
			loginPage: !1,
			signupPage: !1,
			notFixed: !1,
			triggerHideSearchHeight: 0
		}, u),
		x = function(e) {
			var t = e.user,
				n = t.isLogin,
				a = t.info;
			return {
				isLogin: n,
				id: a.userId,
				nickname: a.nickname || "",
				avatar: a.avatar && a.avatar.url || "",
				meixueAccounts: a.meixueAccounts || ""
			}
		}, I = function(e) {
			return {
				showLoginModal: function() {
					_.
					default.show({
						onLoginSucceed: function(t) {
							e({
								type: E.LOGIN_SUCCESS,
								info: t.userInfo
							})
						}
					})
				},
				logout: function() {
					(0, p.
					default)(k.LOGOUT, {
						method: "POST"
					}).then(function(t) {
						200 !== t.code && 301 !== t.code || (localStorage.removeItem("hasShow"), e({
							type: E.LOGOUT_SUCCESS
						}))
					})
				}
			}
		};
	t.
	default = (0, h.connect)(x, I)(L)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(23),
		f = a(s);
	n(426);
	var d = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = {};
				if (this.props.target) {
					var t = this.props.target.getBoundingClientRect().left,
						n = this.props.target.offsetWidth;
					e.left = t + n / 2
				}
				return c.
				default.createElement("div", {
					className: "toast",
					style: e
				}, this.props.children)
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = d;
	var p = "",
		h = void 0,
		m = function(e) {
			e && (f.
			default.unmountComponentAtNode(e), document.body.removeChild(e), window.clearTimeout(h))
		};
	d.show = function(e, t, n, a) {
		m(p), p = "";
		var r = t || 2e3,
			o = function() {
				m(p), p = "", a && a()
			};
		p = document.createElement("div"), document.body.appendChild(p), f.
		default.render(c.
		default.createElement(d, {
			target: n
		}, e), p), h = setTimeout(o, r)
	}
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(1),
		p = a(d),
		h = n(5),
		m = a(h);
	n(415);
	var v = (u = i = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.onScroll = function() {
				n.scroll()
			}, n.state = {
				currentPage: e.startPage || 2,
				loadingVisible: !0
			}, n.onScroll = m.
			default.throttle(n.onScroll.bind(n), 1500), n
		}
		return l(t, e), c(t, [{
			key: "componentDidMount",
			value: function() {
				p.
				default.EventUtil.addHandler(window, "scroll", this.onScroll), this.scroll(!0)
			}
		}, {
			key: "scroll",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = this.state.currentPage,
					n = this.props,
					a = n.totalPage,
					r = n.bufferHeight,
					o = n.hasNext,
					l = n.paginationType,
					i = Math.max(document.body.scrollTop, document.documentElement.scrollTop),
					u = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
					c = "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight,
					s = "hasNext" === l ? o : t <= a;
				i + c + r >= u && s && (!e && this.props.dotInfo && window.$eventTrace(this.props.dotInfo), this.setState(function(e) {
					return {
						loadingVisible: !0,
						currentPage: e.currentPage + 1
					}
				}), this.props.getList())
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				p.
				default.EventUtil.removeHandler(window, "scroll", this.onScroll)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.state,
					t = e.currentPage,
					n = e.loadingVisible,
					a = this.props,
					r = a.totalPage,
					o = a.endText,
					l = a.hasNext,
					i = a.paginationType,
					u = "hasNext" === i ? l : t <= r,
					c = u ? "努力加载中..." : o,
					s = {
						display: n ? "block" : "none"
					};
				return f.
				default.createElement("div", {
					className: "loading-more",
					style: s
				}, c)
			}
		}]), t
	}(f.
	default.Component), i.propTypes = {
		paginationType: f.
		default.PropTypes.oneOf(["hasNext", "total"]),
		totalPage: f.
		default.PropTypes.number,
		startPage: f.
		default.PropTypes.number,
		hasNext: f.
		default.PropTypes.bool,
		bufferHeight: f.
		default.PropTypes.number.isRequired,
		getList: f.
		default.PropTypes.func.isRequired,
		endText: f.
		default.PropTypes.string.isRequired,
		dotInfo: f.
		default.PropTypes.object.isRequired
	}, i.defaultProps = {
		paginationType: "hasNext",
		totalPage: 0,
		startPage: 0,
		hasNext: !1
	}, u);
	t.
	default = v
}, , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = {};
	a.resType = {
		user: 1,
		note: 2,
		repo: 3,
		product: 4,
		brand: 5,
		tag: 6,
		myFollow: 7,
		rank: 8,
		active: 9,
		txt: 10,
		urlScheme: 11,
		comment: 12,
		sku: 13,
		qiyu: 14,
		photo: 15,
		app: 99,
		video: 20,
		trial: 40
	}, a.skinTypes = [{
		value: "0",
		txt: "我不知道"
	}, {
		value: "1",
		txt: "干性"
	}, {
		value: "2",
		txt: "混干"
	}, {
		value: "3",
		txt: "中性"
	}, {
		value: "4",
		txt: "混油"
	}, {
		value: "5",
		txt: "油性"
	}], t.
	default = a
}, , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(23),
		f = a(s);
	n(420);
	var d = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.onClickOK = n.onClickOK.bind(n), n.onClickCancel = n.onClickCancel.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "onClickOK",
			value: function() {
				this.props.onClickOK && this.props.onClickOK()
			}
		}, {
			key: "onClickCancel",
			value: function() {
				this.props.onClickCancel && this.props.onClickCancel()
			}
		}, {
			key: "render",
			value: function() {
				return c.
				default.createElement("div", {
					className: "web2-popup-msg-layer"
				}, c.
				default.createElement("div", {
					className: "web2-popup-msg-wrapper"
				}, c.
				default.createElement("div", {
					className: "web2-popup-msg-dialogue"
				}, c.
				default.createElement("div", {
					className: "web2-popup-msg-body"
				}, this.props.content), c.
				default.createElement("div", {
					className: "web2-popup-msg-footer"
				}, this.props.showCancel && c.
				default.createElement("button", {
					className: "web2-popup-msg-cancel-btn",
					onClick: this.onClickCancel
				}, this.props.cancelContent), c.
				default.createElement("button", {
					className: "web2-popup-msg-ok-btn",
					onClick: this.onClickOK
				}, this.props.okContent)))))
			}
		}]), t
	}(c.
	default.Component);
	d.defaultProps = {
		showCancel: !1,
		okContent: "确 认",
		cancelContent: "取 消",
		onClickOK: null,
		onClickCancel: null
	}, d.propTypes = {
		content: c.
		default.PropTypes.string.isRequired,
		showCancel: c.
		default.PropTypes.bool,
		onClickOK: c.
		default.PropTypes.func,
		onClickCancel: c.
		default.PropTypes.func,
		okContent: c.
		default.PropTypes.string,
		cancelContent: c.
		default.PropTypes.string
	}, t.
	default = d, d.alert = function(e) {
		var t = void 0,
			n = "",
			a = void 0,
			r = function() {
				f.
				default.unmountComponentAtNode(t), document.body.removeChild(t)
			};
		a = function() {
			r()
		}, "string" == typeof e ? n = e : (n = e.content || "", e.onClickOK && (a = function() {
			e.onClickOK(), r()
		})), t = document.createElement("div"), document.body.appendChild(t), f.
		default.render(c.
		default.createElement(d, {
			content: n,
			onClickOK: a
		}), t)
	}, d.confirm = function(e) {
		var t = void 0,
			n = "",
			a = void 0,
			r = void 0,
			o = void 0,
			l = void 0,
			i = function() {
				f.
				default.unmountComponentAtNode(t), document.body.removeChild(t)
			};
		a = function() {
			i()
		}, r = function() {
			i()
		}, "string" == typeof e ? n = e : (n = e.content || "", e.onClickOK && (a = function() {
			e.onClickOK(), i()
		}), e.onClickCancel && (r = function() {
			e.onClickCancel(), i()
		}), o = e.okContent || "确 认", l = e.cancelContent || "取 消"), t = document.createElement("div"), document.body.appendChild(t), f.
		default.render(c.
		default.createElement(d, {
			showCancel: !0,
			content: n,
			onClickOK: a,
			onClickCancel: r,
			okContent: o,
			cancelContent: l
		}), t)
	}
}, , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(23),
		f = a(s),
		d = n(134),
		p = a(d);
	n(416);
	var h = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.onClickCancel = n.onClickCancel.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "onClickCancel",
			value: function() {
				this.props.onClickCancel && this.props.onClickCancel()
			}
		}, {
			key: "render",
			value: function() {
				return c.
				default.createElement("div", {
					className: "m-login-modal-layer"
				}, c.
				default.createElement("div", {
					className: "m-login-modal-wrapper"
				}, c.
				default.createElement("div", null, c.
				default.createElement(p.
				default, {
					loginCb: this.props.onLoginSucceed,
					onCancel: this.onClickCancel
				}))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = h, h.show = function(e) {
		var t = void 0,
			n = void 0,
			a = function() {
				f.
				default.unmountComponentAtNode(t), document.body.removeChild(t)
			}, r = function() {
				a()
			};
		n = function() {
			a()
		}, e.onLoginSucceed && (n = function(t) {
			e.onLoginSucceed(t), a()
		}), t = document.createElement("div"), document.body.appendChild(t), f.
		default.render(c.
		default.createElement(h, {
			onClickCancel: r,
			onLoginSucceed: n
		}), t)
	}
}, , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(2),
		f = a(s),
		d = n(9),
		p = a(d),
		h = n(5),
		m = a(h),
		v = n(17),
		y = a(v),
		b = n(22),
		g = a(b),
		E = n(12),
		w = a(E),
		_ = n(3),
		N = n(4),
		C = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(N);
	n(408);
	var O = {
		getFollowType: "/newApi/follow"
	}, T = function(e) {
		var t = "";
		return Object.keys(y.
		default.resType).some(function(n) {
			return y.
			default.resType[n] === e && (t = n, !0)
		}), t
	}, k = function(e) {
		var t = e.resType,
			n = e.eventAction,
			a = void 0 === n ? "add" : n,
			r = T(t);
		if ("user" === r) {
			var o = window.location.pathname.split("/")[1] || "home";
			return void window.$eventTrace({
				category: "FollowUser",
				action: a,
				eventLabel: o
			})
		}
		"user" !== r && window.$eventTrace({
			category: "Follow",
			action: a,
			eventLabel: r
		})
	}, P = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleClick = m.
			default.throttle(n.handleClick.bind(n), 500), n.str = {
				"-1": "关注",
				0: "关注",
				1: "已关注",
				2: "自己",
				3: "互相关注"
			}, n
		}
		return l(t, e), i(t, [{
			key: "getFollowType",
			value: function() {
				var e = this.props,
					t = e.type,
					n = e.id,
					a = e.followCallback;
				return (0, f.
				default)(O.getFollowType, {
					body: {
						type: t,
						id: n
					}
				}).then(function(e) {
					a(e.result.followType, n, !0)
				})
			}
		}, {
			key: "changeFollow",
			value: function(e) {
				var t = this,
					n = this.props,
					a = n.isLogin,
					r = n.login,
					o = n.disableCancel,
					l = n.disableGetFollowAfterLogin,
					i = n.followCallback,
					u = n.initialFollowType;
				if (!a) return r().then(function() {
					!l && t.changeFollow(!0)
				});
				var c = this.props,
					s = c.type,
					d = c.id,
					p = void 0;
				if (0 === u) p = "/newApi/follow";
				else {
					if (2 === u || o || 0 !== u && e) return;
					p = "/newApi/follow/delete"
				}(0, f.
				default)(p, {
					method: "POST",
					body: {
						type: s,
						id: d
					}
				}).then(function(e) {
					var t = u ? 0 : e.result.followType;
					k({
						resType: s,
						eventAction: u ? "remove" : "add"
					}), i(t, d)
				}, function(e) {
					w.
					default.show("操作失败", 2e3)
				})
			}
		}, {
			key: "handleClick",
			value: function() {
				this.changeFollow()
			}
		}, {
			key: "componentDidMount",
			value: function() {
				var e = this.props,
					t = e.isLogin,
					n = e.initialFollowType;
				t && -1 === n && this.getFollowType()
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				var t = this.props,
					n = t.isLogin,
					a = t.disableGetFollowAfterLogin;
				!n && e.isLogin && !a && this.getFollowType()
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.className,
					n = e.isLogin,
					a = e.disableCancel,
					r = e.initialFollowType,
					o = e.closeDownload,
					l = e.showFollowTip,
					i = (0, p.
					default)({
						"to-follow": !n || 0 === r || -1 === r,
						self: n && 2 === r,
						followed: n && (1 === r || 3 === r),
						"disable-cancel": a
					});
				return c.
				default.createElement("div", {
					className: t
				}, c.
				default.createElement("span", {
					className: i,
					onClick: this.handleClick
				}, this.str[n ? r : "-1"]), l ? c.
				default.createElement("div", {
					className: "download"
				}, c.
				default.createElement("div", {
					className: "icon-picture"
				}), c.
				default.createElement("div", {
					className: "icon-close",
					onClick: o
				})) : null)
			}
		}]), t
	}(c.
	default.Component);
	P.PropTypes = {
		className: c.
		default.PropTypes.string,
		type: c.
		default.PropTypes.number.isRequired,
		id: c.
		default.PropTypes.string.isRequired,
		disableCancel: c.
		default.PropTypes.bool,
		initialFollowType: c.
		default.PropTypes.number,
		disableGetFollowAfterLogin: c.
		default.PropTypes.bool,
		closeDownload: c.
		default.PropTypes.func,
		showFollowTip: c.
		default.PropTypes.bool,
		followCallback: c.
		default.PropTypes.func.isRequired
	}, P.defaultProps = {
		initialFollowType: -1,
		className: "follow-btn"
	};
	var S = function(e) {
		return {
			isLogin: e.user.isLogin
		}
	}, j = function(e) {
		return {
			login: function(t) {
				return new Promise(function(n) {
					g.
					default.show({
						onLoginSucceed: function(a) {
							e({
								type: C.LOGIN_SUCCESS,
								info: a.userInfo
							}), t && t(), n()
						}
					})
				})
			}
		}
	};
	t.
	default = (0, _.connect)(S, j)(P)
}, , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(62),
		f = a(s);
	n(421);
	var d = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				return c.
				default.createElement("aside", {
					className: "right-bar-wrapper"
				}, c.
				default.createElement("div", {
					className: "right-bar"
				}, c.
				default.createElement("div", {
					id: "qr"
				}), c.
				default.createElement("div", {
					id: "back-top"
				}, c.
				default.createElement(f.
				default, {
					className: "top-btn",
					bottom: 30
				}))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = d
}, , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = n(0),
		r = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(a),
		o = function(e) {
			var t = e.content;
			return r.
			default.createElement("div", {
				className: "empty"
			}, r.
			default.createElement("p", null, t))
		};
	t.
	default = o
}, , , , , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(5),
		f = a(s),
		d = n(85),
		p = a(d),
		h = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.updatePosition = f.
				default.throttle(n.updatePosition.bind(n), 5), n.state = {
					affixStyle: null,
					placeholderStyle: null
				}, n.timeoutHandle = [], n.fixedActive = !1, n.absoluteActive = !1, n
			}
			return l(t, e), i(t, [{
				key: "updatePosition",
				value: function() {
					if (this.refs.placeholderNode) {
						var e = this.refs.placeholderNode.getBoundingClientRect().top,
							t = this.refs.fixedNode.getBoundingClientRect().top,
							n = this.refs.fixedNode.offsetHeight,
							a = this.props.bottomTarget && this.props.bottomTarget.getBoundingClientRect().bottom || 99999999;
						if (e > this.props.top) {
							if (!this.fixedActive) return;
							var r = {
								position: "relative",
								top: 0
							};
							this.setState({
								affixStyle: r
							}), this.fixedActive = !1, this.absoluteActive = !1
						} else if (a > n || t > this.props.top) {
							if (this.fixedActive) return;
							var o = {
								position: "fixed",
								top: this.props.top,
								zIndex: this.props.zIndex
							};
							this.setState({
								affixStyle: o
							}), this.fixedActive = !0, this.absoluteActive = !1
						} else {
							if (this.absoluteActive) return;
							var l = {
								position: "absolute",
								bottom: 0,
								zIndex: this.props.zIndex
							};
							this.setState({
								affixStyle: l
							}), this.fixedActive = !1, this.absoluteActive = !0
						}
					}
				}
			}, {
				key: "setEventListener",
				value: function() {
					var e = this;
					this.clearScrollEventListeners(), this.scrollEvent = window.addEventListener("scroll", this.updatePosition), p.
					default.on(this, "page-size-change", function() {
						e.updatePosition()
					})
				}
			}, {
				key: "clearScrollEventListeners",
				value: function() {
					window.removeEventListener("scroll", this.updatePosition)
				}
			}, {
				key: "componentDidMount",
				value: function() {
					var e = this,
						t = this.refs.fixedNode.offsetWidth,
						n = this.refs.fixedNode.offsetHeight,
						a = {
							width: t,
							height: n
						};
					this.setState({
						placeholderStyle: a
					}), this.setEventListener(), this.timeoutHandle.push(setTimeout(function() {
						e.updatePosition()
					}, 500))
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.clearScrollEventListeners(), this.timeoutHandle.forEach(function(e) {
						clearTimeout(e)
					}), this.timeoutHandle = []
				}
			}, {
				key: "render",
				value: function() {
					return c.
					default.createElement("div", {
						style: this.state.placeholderStyle,
						ref: "placeholderNode"
					}, c.
					default.createElement("div", {
						style: this.state.affixStyle,
						ref: "fixedNode"
					}, this.props.children))
				}
			}]), t
		}(c.
		default.Component);
	h.Prototypes = {
		top: c.
		default.PropTypes.number,
		bottomTarget: c.
		default.PropTypes.object,
		zIndex: c.
		default.PropTypes.number
	}, h.defaultProps = {
		top: 62,
		zIndex: 999
	}, t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(2),
		f = a(s),
		d = n(61),
		p = n(3),
		h = n(4),
		m = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(h),
		v = {
			getUser: "/newApi/ms/user/current"
		}, y = function(e) {
			var t = /^\/(repo|note|video)Edit\/(\w+)/g,
				n = t.exec(e);
			return n ? "/" + n[1] + "/" + n[2] : "/"
		}, b = function(e) {
			return function(t) {
				function n(e) {
					return r(this, n), o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e))
				}
				return l(n, t), i(n, [{
					key: "componentDidMount",
					value: function() {
						var e = this.props,
							t = e.loginSuccess,
							n = e.loginFailure,
							a = e.pathname;
						(0, f.
						default)(v.getUser).then(function(e) {
							if (200 !== e.code) throw new Error("login failure");
							t(e.result)
						}).
						catch (function(e) {
							n();
							var t = y(a);
							window.location.href = t
						})
					}
				}, {
					key: "componentWillReceiveProps",
					value: function(e) {
						var t = this.props.pathname;
						e.isLogin || (window.location.href = y(t))
					}
				}, {
					key: "render",
					value: function() {
						return c.
						default.createElement("div", null, c.
						default.createElement(e, this.props))
					}
				}]), n
			}(c.
			default.Component)
		}, g = function(e, t) {
			var n = e.user,
				a = n.info;
			return {
				isLogin: n.isLogin,
				userInfo: a,
				pathname: t.location.pathname
			}
		}, E = function(e) {
			return {
				loginSuccess: function(t) {
					e({
						type: m.LOGIN_SUCCESS,
						info: t
					})
				},
				loginFailure: function() {
					e({
						type: m.LOGIN_FAILURE
					})
				}
			}
		};
	t.
	default = (0, d.compose)((0, p.connect)(g, E), b)
}, , , , , , , , , , , , , , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(9),
		p = a(d),
		h = n(2),
		m = a(h),
		v = n(87),
		y = a(v),
		b = n(1),
		g = a(b),
		E = n(17),
		w = a(E),
		_ = n(96),
		N = a(_);
	n(423);
	var C = {
		share: "/newApi/share"
	}, O = (u = i = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleMouseOverWechat = n.handleMouseOverWechat.bind(n), n.handleMouseOutWechat = n.handleMouseOutWechat.bind(n), n.state = {
				isHoverWechat: !1,
				weiboUrl: "",
				qzoneUrl: "",
				url: "",
				direction: e.direction || "horizontal"
			}, n
		}
		return l(t, e), c(t, [{
			key: "handleMouseOverWechat",
			value: function() {
				this.setState({
					isHoverWechat: !0
				})
			}
		}, {
			key: "handleMouseOutWechat",
			value: function() {
				this.setState({
					isHoverWechat: !1
				})
			}
		}, {
			key: "handleShare",
			value: function(e) {
				var t = this.props.type;
				window.$eventTrace({
					category: e,
					action: "share",
					eventLabel: t
				})
			}
		}, {
			key: "getShareInfo",
			value: function(e, t) {
				var n = this,
					a = t.type,
					r = t.id;
				(0, m.
				default)(C.share, {
					body: {
						type: w.
						default.resType[a],
						id: r,
						field: e
					}
				}).then(function(t) {
					var r = t.result.img,
						o = t.result.text;
					switch (a) {
						case "note":
							r = g.
						default.nosUrl(r, "600y600");
						break;
						case "repo":
							r = g.
						default.nosUrl(r, "900y600")
					}
					2 === e ? n.setState({
						weiboUrl: (0, y.
						default)("weibo", r, o)
					}) : n.setState({
						qzoneUrl: (0, y.
						default)("qzone", r, o)
					})
				})
			}
		}, {
			key: "componentDidMount",
			value: function() {
				this.init(this.props)
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				this.props.id !== e.id && this.init(e)
			}
		}, {
			key: "init",
			value: function(e) {
				this.setState({
					url: window.location.href
				});
				var t = e.coverUrl,
					n = e.text;
				t ? this.setState({
					weiboUrl: (0, y.
					default)("weibo", t, n),
					qzoneUrl: (0, y.
					default)("qzone", t, n)
				}) : (this.getShareInfo(2, e), this.getShareInfo(3, e))
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.state,
					n = t.weiboUrl,
					a = t.qzoneUrl,
					r = t.isHoverWechat,
					o = t.direction,
					l = t.url,
					i = (0, p.
					default)({
						"qr-show": r,
						"qr-hide": !r,
						qr: !0
					}),
					u = {
						value: l,
						bgColor: "#FFFFFF",
						fgColor: "#000000",
						level: "L"
					};
				return f.
				default.createElement("div", null, "horizontal" === o ? f.
				default.createElement("div", {
					className: "share-bar"
				}, f.
				default.createElement("span", null, "分享到："), f.
				default.createElement("a", {
					href: n,
					target: "_blank"
				}, f.
				default.createElement("span", {
					className: "icon icon-weibo"
				})), f.
				default.createElement("span", {
					className: "icon icon-wechat",
					onMouseOver: this.handleMouseOverWechat,
					onMouseOut: this.handleMouseOutWechat
				}, f.
				default.createElement("span", {
					className: i
				}, f.
				default.createElement(N.
				default, u))), f.
				default.createElement("a", {
					href: a,
					target: "_blank"
				}, f.
				default.createElement("span", {
					className: "icon icon-qq"
				}))) : f.
				default.createElement("div", {
					className: "vertical-share-bar"
				}, f.
				default.createElement("p", null, "分享到"), f.
				default.createElement("div", null, f.
				default.createElement("ul", null, f.
				default.createElement("li", null, f.
				default.createElement("a", {
					href: n,
					target: "_blank",
					onClick: function() {
						e.handleShare("WeiboShare")
					}
				}, f.
				default.createElement("div", {
					className: "icon-weibo"
				}), f.
				default.createElement("div", null, "微博"))), f.
				default.createElement("li", {
					onMouseOver: this.handleMouseOverWechat,
					onMouseOut: this.handleMouseOutWechat
				}, f.
				default.createElement("div", {
					className: "icon-wechat"
				}), f.
				default.createElement("div", null, "微信"), f.
				default.createElement("div", {
					className: i
				}, f.
				default.createElement(N.
				default, u))), f.
				default.createElement("li", null, f.
				default.createElement("a", {
					href: a,
					target: "_blank",
					onClick: function() {
						e.handleShare("QzoneShare")
					}
				}, f.
				default.createElement("div", {
					className: "icon-qq"
				}), f.
				default.createElement("div", null, "空间")))))))
			}
		}]), t
	}(f.
	default.Component), i.propTypes = {
		text: f.
		default.PropTypes.string,
		coverUrl: f.
		default.PropTypes.string,
		type: f.
		default.PropTypes.string,
		id: f.
		default.PropTypes.string,
		direction: f.
		default.PropTypes.string
	}, i.defaultProps = {
		text: "",
		coverUrl: "",
		type: "repo",
		id: "",
		direction: "horizontal"
	}, u);
	t.
	default = O
}, , , , , , , , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(23),
		d = a(f),
		p = n(86),
		h = a(p),
		m = n(84),
		v = a(m);
	n(402);
	var y = (0, h.
	default)(),
		b = function() {
			return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
		}, g = function() {
			return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
		}, E = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.handleScroll = n.handleScroll.bind(n), n.handleClick = n.handleClick.bind(n), n.state = {
					style: {
						display: "none"
					}
				}, n
			}
			return l(t, e), u(t, [{
				key: "handleClick",
				value: function() {
					var e = this,
						t = b(),
						n = Date.now();
					y(function a() {
						var r = Date.now(),
							o = r - n;
						e.scrollToTop((0, v.
						default)(o, t, -t, 450)), o < 450 && y(a)
					})
				}
			}, {
				key: "scrollToTop",
				value: function(e) {
					document.body.scrollTop = e, document.documentElement.scrollTop = e
				}
			}, {
				key: "handleScroll",
				value: function() {
					var e = this.props.bottom,
						t = g(),
						n = b(),
						a = d.
					default.findDOMNode(this).getBoundingClientRect().top, r = document.getElementById("footer").getBoundingClientRect().top, o = void 0;
					o = n > t && (a + 36 < r || void 0 !== e) ? {
						visibility: "visible"
					} : {
						visibility: "hidden"
					}, this.setState({
						style: o
					})
				}
			}, {
				key: "componentDidMount",
				value: function() {
					this.handleScroll(), window.addEventListener("scroll", this.handleScroll)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					window.removeEventListener("scroll", this.handleScroll)
				}
			}, {
				key: "render",
				value: function() {
					var e = this.state.style,
						t = this.props,
						n = t.top,
						a = t.bottom,
						r = void 0 !== a ? i({}, e, {
							bottom: a
						}) : i({}, e, {
							top: n
						});
					return s.
					default.createElement("button", {
						className: "top-btn",
						style: r,
						onClick: this.handleClick
					})
				}
			}]), t
		}(s.
		default.Component);
	E.PropTypes = {
		top: s.
		default.PropTypes.number,
		bottom: s.
		default.PropTypes.number
	}, E.defaultProps = {
		top: 605
	}, t.
	default = E
}, function(e, t, n) {
	"use strict";

	function a(e) {
		var t = [];
		return Object.keys(l).forEach(function(n) {
			l[n][e] && t.push(n)
		}), t
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getKeysByStyleName = a;
	var r = n(5),
		o = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(r),
		l = {
			SIZE_36: {
				fontSize: "36px"
			},
			SIZE_30: {
				fontSize: "30px"
			},
			SIZE_24: {
				fontSize: "24px"
			},
			SIZE_18: {
				fontSize: "18px"
			},
			COLOR_178_54_66: {
				color: "#B23642"
			},
			COLOR_237_181_175: {
				color: "#EDB5AF"
			},
			COLOR_224_114_71: {
				color: "#E07247"
			},
			COLOR_241_215_112: {
				color: "#F1D770"
			},
			COLOR_239_51_64: {
				color: "#EF3340"
			},
			COLOR_40_89_67: {
				color: "#285943"
			},
			COLOR_189_205_165: {
				color: "#BDCDA5"
			},
			COLOR_00_84_121: {
				color: "#005479"
			},
			COLOR_166_207_225: {
				color: "#A6CFE1"
			},
			COLOR_193_193_193: {
				color: "#C1C1C1"
			},
			COLOR_255_255_255: {
				color: "#FFFFFF"
			},
			COLOR_0_0_0: {
				color: "#000000"
			}
		};
	o.
	default.keys(l).filter(function(e) {
		return null !== e.match(/COLOR_/)
	}).map(function(e) {
		return l[e].color
	}).forEach(function(e) {
		l["BGC_" + e] = {
			backgroundColor: e
		}
	}), t.
	default = l
}, function(e, t) {}, , , , , , , , , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(12),
		d = a(f),
		p = n(22),
		h = a(p),
		m = n(4),
		v = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(m),
		y = n(2),
		b = a(y),
		g = n(5),
		E = a(g);
	n(405);
	var w = {
		COLLECT: "/newApi/collect",
		DOCOLLECT: "/newApi/collect",
		DELETECOLLECT: "/newApi/collect/delete"
	}, _ = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleClick = E.
			default.throttle(n.handleClick.bind(n), 500), n
		}
		return l(t, e), i(t, [{
			key: "handleClick",
			value: function(e) {
				e.preventDefault();
				var t = this.props,
					n = t.isLogin,
					a = t.login;
				if (!n) return a();
				var r = this.props,
					o = r.id,
					l = r.type,
					i = r.followType,
					u = r.collected,
					c = r.collectedChange;
				if (window.$eventTrace({
					category: "Collect",
					action: u ? "remove" : "add",
					eventLabel: "repo"
				}), !u && i && 2 === i) return void d.
				default.show("不能收藏自己的合辑哦");
				var s = void 0;
				s = !0 === u ? w.DELETECOLLECT : w.DOCOLLECT, (0, b.
				default)(s, {
					method: "POST",
					body: {
						type: l,
						id: o
					}
				}).then(function() {
					c()
				}, function() {
					d.
					default.show("操作失败", 2e3)
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.className,
					n = e.collected,
					a = t + " collect";
				return c.
				default.createElement("div", {
					className: a,
					onClick: this.handleClick,
					ref: "button"
				}, n ? c.
				default.createElement("span", {
					className: "content"
				}, c.
				default.createElement("span", {
					className: "icon icon-collectd"
				}), "已收藏") : c.
				default.createElement("span", {
					className: "content"
				}, c.
				default.createElement("span", {
					className: "icon icon-none-collectd"
				}), "收藏"))
			}
		}]), t
	}(c.
	default.Component);
	_.PropTypes = {
		className: c.
		default.PropTypes.string,
		id: c.
		default.PropTypes.string.isRequired,
		type: c.
		default.PropTypes.number.isRequired,
		collectedChange: c.
		default.PropTypes.func.isReqired
	};
	var N = function(e) {
		return {
			isLogin: e.user.isLogin
		}
	}, C = function(e) {
		return {
			login: function() {
				return new Promise(function(t) {
					h.
					default.show({
						onLoginSucceed: function(n) {
							e({
								type: v.LOGIN_SUCCESS,
								info: n.userInfo
							}), t()
						}
					})
				})
			}
		}
	};
	t.
	default = (0, s.connect)(N, C)(_)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(8),
		f = n(3),
		d = n(4),
		p = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(d),
		h = n(2),
		m = a(h),
		v = n(86),
		y = a(v),
		b = n(84),
		g = a(b),
		E = n(17),
		w = a(E),
		_ = n(12),
		N = a(_),
		C = n(130),
		O = a(C),
		T = n(246),
		k = a(T),
		P = n(255),
		S = a(P),
		j = n(20),
		L = a(j),
		x = n(128),
		I = a(x),
		R = n(22),
		M = a(R);
	n(406);
	var U = (0, y.
	default)(),
		A = function() {
			return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
		}, D = function(e) {
			for (var t = e.offsetTop, n = e.offsetParent; n;) t += n.clientTop, t += n.offsetTop, n = n.offsetParent;
			return t
		}, F = {
			deletePrefix: "/newApi/comment/",
			getList: "/newApi/comment/list"
		}, G = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.handleAddComment = n.handleAddComment.bind(n), n.handleDeleteComment = n.handleDeleteComment.bind(n), n.handleChangePagi = n.handleChangePagi.bind(n), n.handleScrollToTop = n.handleScrollToTop.bind(n), n.handleLogin = n.handleLogin.bind(n), n.state = {
					currentPage: 1
				}, n
			}
			return l(t, e), i(t, [{
				key: "handleLogin",
				value: function(e) {
					var t = this.props,
						n = t.isLogin,
						a = t.login;
					n || a().then(function() {
						e && e()
					})
				}
			}, {
				key: "handleAddComment",
				value: function(e) {
					var t = this.props,
						n = t.onChangeComments,
						a = t.comments,
						r = a.list,
						o = a.total;
					n({
						list: [e].concat(r),
						total: o + 1
					}), this.handleScrollToTop()
				}
			}, {
				key: "handleDeleteComment",
				value: function(e) {
					var t = this;
					L.
					default.confirm({
						content: "确定删除此条评论？",
						onClickOK: function() {
							(0, m.
							default)(F.deletePrefix + e + "/delete", {
								method: "POST"
							}).then(function() {
								if (t.state.total % t.props.limit == 1 && 1 !== t.state.currentPage) {
									var e = t.state.currentPage - 1;
									t.getList(e), t.setState(function() {
										return {
											currentPage: e
										}
									})
								} else t.getList(t.state.currentPage)
							}, function(e) {
								N.
								default.show("评论删除失败")
							})
						}
					})
				}
			}, {
				key: "scroll",
				value: function(e) {
					document.body.scrollTop = e, document.documentElement.scrollTop = e
				}
			}, {
				key: "handleChangePagi",
				value: function(e) {
					window.$eventTrace({
						category: "Comment",
						action: "paginate",
						eventLabel: this.props.type
					}), this.getList(e), this.setState({
						currentPage: e
					}), this.handleScrollToTop()
				}
			}, {
				key: "handleScrollToTop",
				value: function() {
					var e = this,
						t = D(this.commentBox),
						n = A(),
						a = t - n - 162,
						r = Date.now();
					U(function t() {
						var o = Date.now(),
							l = o - r;
						e.scroll((0, g.
						default)(l, n, a, 300)), l < 300 && U(t)
					})
				}
			}, {
				key: "getList",
				value: function(e) {
					var t = this.props,
						n = t.type,
						a = t.id,
						r = t.onChangeComments;
					return (0, m.
					default)(F.getList, {
						method: "GET",
						body: {
							type: w.
							default.resType[n],
							id: a,
							offset: this.props.limit * (e - 1),
							limit: this.props.limit
						}
					}).then(function(e) {
						var t = e.result,
							n = t.list,
							a = t.total;
						r({
							total: a,
							list: n || []
						})
					})
				}
			}, {
				key: "componentDidMount",
				value: function() {
					this.setState({
						toastRoot: this.commentBox
					})
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = this.state,
						n = t.currentPage,
						a = t.toastRoot,
						r = this.props,
						o = r.type,
						l = r.id,
						i = r.isLogin,
						u = r.comments,
						f = r.userId,
						d = r.userAvatar,
						p = r.userVip,
						h = u.list,
						m = u.total,
						v = m ? c.
					default.createElement("h2", null, m, "条评论") : null;
					return c.
					default.createElement("div", null, c.
					default.createElement("div", {
						className: "comment-box",
						ref: function(t) {
							return e.commentBox = t
						}
					}, v, c.
					default.createElement("div", {
						className: "top-form-container"
					}, c.
					default.createElement("div", {
						className: "image-container"
					}, f ? c.
					default.createElement(s.Link, {
						to: "/user/" + f
					}, c.
					default.createElement("img", {
						src: d,
						alt: "用户头像"
					})) : c.
					default.createElement("img", {
						src: d,
						alt: "用户头像"
					}), p && c.
					default.createElement("span", {
						className: "comment-icon comment-icon-vip"
					})), c.
					default.createElement(O.
					default, {
						needLogin: !0,
						show: !0,
						isLogin: i,
						onLogin: function(t) {
							return e.handleLogin(t)
						},
						type: o,
						id: l,
						toastRoot: a,
						onAddComment: this.handleAddComment
					})), c.
					default.createElement(k.
					default, {
						data: h,
						onAddComment: this.handleAddComment,
						userId: f,
						isLogin: i,
						toastRoot: a,
						onLogin: function(t) {
							return e.handleLogin(t)
						},
						type: o,
						id: l,
						onDeleteComment: this.handleDeleteComment
					})), c.
					default.createElement(S.
					default, {
						current: n,
						onChange: this.handleChangePagi,
						pageSize: this.props.limit,
						total: m
					}), c.
					default.createElement(I.
					default, {
						type: 0,
						show: !m
					}))
				}
			}]), t
		}(c.
		default.Component);
	G.PropTypes = {
		limit: c.
		default.PropTypes.number,
		type: c.
		default.PropTypes.string.isRequired,
		id: c.
		default.PropTypes.string.isRequired
	};
	var H = function(e, t) {
		var n = e.user,
			a = t.type,
			r = n.isLogin,
			o = n.info;
		return {
			isLogin: r,
			comments: e[a].comments,
			userId: o.userId || "",
			userAvatar: o.avatar && o.avatar.url || "https://beauty.nosdn.127.net/beauty/img/74769ce5-6e65-49da-b231-9840474781d6.png",
			userVip: o.vip
		}
	}, B = function(e, t) {
		return {
			login: function() {
				return new Promise(function(t) {
					M.
					default.show({
						onLoginSucceed: function(n) {
							e({
								type: p.LOGIN_SUCCESS,
								info: n.userInfo
							}), t()
						}
					})
				})
			},
			onChangeComments: function(n) {
				var a = t.type;
				e({
					type: p["CHANGE_" + a.toLocaleUpperCase() + "_COMMENTS"],
					comments: n
				})
			}
		}
	};
	t.
	default = (0, f.connect)(H, B)(G)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(397),
		f = a(s);
	n(399), n(410);
	var d = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.cropper = null, n.handleClickOK = n.handleClickOK.bind(n), n.handleClickClose = n.handleClickClose.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "handleClickOK",
			value: function() {
				var e = this.cropper.getData(),
					t = e.x,
					n = e.y,
					a = e.width,
					r = e.height,
					o = this.props,
					l = o.initialHeight,
					i = o.initialWidth;
				(a <= 0 || r <= 0 || t < 0 || n < 0) && (a = i, r = l, t = 0, n = 0);
				var u = [Math.floor(t), Math.floor(n), Math.ceil(a), Math.ceil(r)].join("_");
				this.props.onClickOK(u)
			}
		}, {
			key: "handleClickClose",
			value: function() {
				this.props.onClickClose()
			}
		}, {
			key: "componentDidMount",
			value: function() {
				var e = this,
					t = this.props,
					n = t.minWidth,
					a = t.aspectRatio,
					r = t.initialHeight,
					o = t.initialWidth;
				this.cropper = new f.
				default (this.refs.avatar, {
					viewMode: 1,
					aspectRatio: a,
					dragMode: "none",
					background: !1,
					data: {
						x: 0,
						y: 0,
						width: o,
						height: r,
						scaleX: 1,
						scaleY: 1
					},
					rotatable: !1,
					zoomable: !1,
					crop: function(t) {
						if (n) {
							t.detail.width < n && e.cropper.setData({
								width: n,
								height: parseInt(n / a, 10)
							})
						}
					}
				})
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.cropper.destroy()
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.url,
					n = e.title;
				return c.
				default.createElement("div", {
					className: "cropper-layer"
				}, c.
				default.createElement("div", {
					className: "cropper-wrapper"
				}, c.
				default.createElement("div", {
					className: "crop-dialogue"
				}, c.
				default.createElement("div", {
					className: "crop-dialogue-header"
				}, c.
				default.createElement("h3", null, n || "裁剪")), c.
				default.createElement("div", {
					className: "crop-dialogue-body"
				}, c.
				default.createElement("img", {
					className: "crop-raw-image",
					src: t,
					alt: "",
					ref: "avatar"
				})), c.
				default.createElement("div", {
					className: "crop-dialogue-footer"
				}, c.
				default.createElement("button", {
					className: "crop-ok-btn",
					onClick: this.handleClickOK
				}, "确 认")), c.
				default.createElement("div", {
					className: "crop-dialogue-close-btn",
					onClick: this.handleClickClose
				}))))
			}
		}]), t
	}(c.
	default.Component);
	d.propTypes = {
		minWidth: c.
		default.PropTypes.number,
		aspectRatio: c.
		default.PropTypes.number.isRequired,
		initialHeight: c.
		default.PropTypes.number.isRequired,
		initialWidth: c.
		default.PropTypes.number.isRequired,
		url: c.
		default.PropTypes.string.isRequired,
		onClickOK: c.
		default.PropTypes.func.isRequired,
		onClickClose: c.
		default.PropTypes.func.isRequired
	}, d.defaultProps = {
		minWidth: 0
	}, t.
	default = d
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(9),
		d = a(f),
		p = n(1),
		h = a(p),
		m = n(5),
		v = a(m),
		y = n(132),
		b = a(y);
	n(412);
	var g = function(e, t, n, a) {
		var r = e.length > 2 ? n + "y" + n : a + "y" + a,
			o = e.map(function(e) {
				return {
					url: h.
					default.nosUrl(e, r, !0),
					isGif: !! ~e.indexOf(".gif")
				}
			}),
			l = t && (t > e.length ? e.length : t);
		return o.slice(0, l)
	}, E = {
		small: {
			size1: 116,
			size2: 302
		},
		large: {
			size1: 156,
			size2: 300
		},
		medium: {
			size1: 140,
			size2: 140
		}
	}, w = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleClick = n.handleClick.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "handleClick",
			value: function(e) {
				var t = this.props,
					n = t.imagesUrl,
					a = t.meixueAccounts,
					r = v.
				default.concat(v.
				default.slice(n, e), v.
				default.slice(n, 0, e));
				b.
				default.show({
					images: r,
					currentNum: e,
					meixueAccounts: a
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = t.imagesUrl,
					a = t.maxRow,
					r = t.imageSize,
					o = t.meixueAccounts,
					l = t.rowLength,
					i = E[r],
					u = i.size1,
					s = i.size2,
					f = 1 === a ? g(n, l, u, s) : g(n, 2 * l, u, s),
					p = (0, d.
					default)({
						"images-wrapper": !0,
						"one-image": 1 === n.length,
						"two-image": 2 === n.length,
						"more-image": n.length > 2,
						small: "small" === r,
						large: "large" === r,
						medium: "medium" === r
					}),
					h = 1 === a && n.length > l ? c.
				default.createElement("span", {
					className: "total"
				}, "共", n.length, "张") : null;
				return c.
				default.createElement("div", {
					className: p
				}, c.
				default.createElement("div", {
					ref: "carouselNode"
				}), f.length > l && 2 === a ? c.
				default.createElement("div", null, c.
				default.createElement("div", {
					className: "row clearfix"
				}, f.slice(0, l).map(function(t, n) {
					return c.
					default.createElement("div", {
						key: "1-" + n
					}, c.
					default.createElement("img", {
						src: t.url,
						alt: "图片",
						onClick: function() {
							e.handleClick(n)
						},
						onContextMenu: function(e) {
							!o && e.preventDefault()
						}
					}), t.isGif ? c.
					default.createElement("span", {
						className: "icon icon-gif"
					}) : null)
				})), c.
				default.createElement("div", {
					className: "row clearfix"
				}, f.slice(l).map(function(t, n) {
					return c.
					default.createElement("div", {
						key: "2-" + n
					}, c.
					default.createElement("img", {
						src: t.url,
						alt: "图片",
						onClick: function() {
							e.handleClick(n + l)
						},
						onContextMenu: function(e) {
							!o && e.preventDefault()
						}
					}), t.isGif ? c.
					default.createElement("span", {
						className: "icon icon-gif"
					}) : null)
				}))) : c.
				default.createElement("div", null, c.
				default.createElement("div", {
					className: "row clearfix"
				}, f.map(function(t, n) {
					return c.
					default.createElement("div", {
						key: n
					}, c.
					default.createElement("img", {
						src: t.url,
						alt: "图片",
						onClick: function() {
							e.handleClick(n)
						},
						onContextMenu: function(e) {
							!o && e.preventDefault()
						}
					}), t.isGif ? c.
					default.createElement("span", {
						className: "icon icon-gif"
					}) : null)
				}))), h)
			}
		}]), t
	}(c.
	default.Component);
	w.ProtoTypes = {
		imagesUrl: c.
		default.PropTypes.array.isRequired,
		maxRow: c.
		default.PropTypes.oneOf([1, 2]),
		imageSize: c.
		default.PropTypes.oneOf(["small", "large", "medium"]),
		rowLength: c.
		default.PropTypes.number
	}, w.defaultProps = {
		maxRow: 2,
		imageSize: "small",
		rowLength: 5
	};
	var _ = function(e) {
		return {
			meixueAccounts: !! e.user.info.meixueAccounts
		}
	};
	t.
	default = (0, s.connect)(_)(w)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(23),
		f = a(s);
	n(459);
	var d = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {}, n.onClickOk = n.onClickOk.bind(n), n.onClickCancel = n.onClickCancel.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "onClickCancel",
			value: function() {
				this.props.onClickCancel && this.props.onClickCancel()
			}
		}, {
			key: "onClickOk",
			value: function() {
				this.props.onClickOk && this.props.onClickOk()
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.hintText,
					n = e.okBtnStyle,
					a = e.cancelBtnStyle;
				return c.
				default.createElement("div", {
					className: "m-notice-modal"
				}, c.
				default.createElement("div", {
					className: "m-modal-layer"
				}, c.
				default.createElement("div", {
					className: "m-modal-wrapper"
				}, c.
				default.createElement("div", {
					className: "m-modal-dialogue"
				}, c.
				default.createElement("div", {
					className: "m-modal-body"
				}, c.
				default.createElement("div", {
					className: "icon close-btn",
					onClick: this.onClickCancel
				}), c.
				default.createElement("div", {
					className: "icon icon-remind"
				}), c.
				default.createElement("p", {
					className: "hint"
				}, t), c.
				default.createElement("div", {
					className: "buttons"
				}, c.
				default.createElement("button", {
					className: "button-ok",
					style: n,
					onClick: this.onClickOk
				}, "确定"), c.
				default.createElement("button", {
					className: "button-cancel",
					style: a,
					onClick: this.onClickCancel
				}, "取消")))))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = d, d.show = function(e) {
		var t = void 0,
			n = void 0,
			a = function() {
				f.
				default.unmountComponentAtNode(t), document.body.removeChild(t)
			}, r = function() {
				a()
			};
		n = function() {
			a()
		}, e.onClickOk && (n = function(t) {
			e.onClickOk(t), a()
		}), t = document.createElement("div"), document.body.appendChild(t), f.
		default.render(c.
		default.createElement(d, {
			onClickCancel: r,
			onClickOk: n,
			hintText: e.hintText,
			okBtnStyle: e.okBtnStyle,
			cancelBtnStyle: e.cancelBtnStyle
		}), t)
	}
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function r(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	function l(e) {
		var t = "",
			n = !1;
		e.brandZhName && !e.brandEnName ? t = e.brandZhName : !e.brandZhName && e.brandEnName ? (t = e.brandEnName, n = !0) : 0 === e.brandMainName ? t = e.brandZhName : (t = e.brandEnName, n = !0);
		var a = "";
		e.zhName && !e.name ? a = e.zhName : !e.zhName && e.name ? (n && (a += " "), a += e.name) : 0 === e.mainName ? a = e.zhName : (n && (a += " "), a += e.name);
		var r = "";
		return t && (r += t), a && (r += a), r
	}
	function i(e, t) {
		var n = "请选择 " + l(e);
		return t && t.length && (1e3 === t[0].propType ? n += " 的色号" : 1001 === t[0].propType && (n += " 的型号")), n
	}
	function u(e) {
		var t = "",
			n = !1;
		e.brand && (e.brand.zhName && !e.brand.enName ? t = e.brand.zhName : !e.brand.zhName && e.brand.enName ? (t = e.brand.enName, n = !0) : 0 === e.brand.mainName ? t = e.brand.zhName : (t = e.brand.enName, n = !0));
		var a = "",
			r = "",
			o = "";
		e.sku && (o = 1e3 === e.sku.inputType ? "色号：" : "型号："), e.zhName && !e.enName ? e.sku && e.sku.id ? e.sku.zhName ? a = e.sku.zhName : (a = e.zhName, r = o + e.sku.mixName) : a = e.zhName : !e.zhName && e.enName ? (n && (a += " "), e.sku && e.sku.id ? e.sku.enName ? a += e.sku.enName : (a += e.enName, r = o + e.sku.mixName) : a += e.enName) : 0 === e.mainName ? e.sku && e.sku.id ? e.sku.zhName ? a = e.sku.zhName : (a = e.zhName, r = o + e.sku.mixName) : a = e.zhName : (n && (a += " "), e.sku && e.sku.id ? e.sku.enName ? a += e.sku.enName : (a += e.enName, r = o + e.sku.mixName) : a += e.enName);
		var l = "";
		return t && (l += t), a && (l += a), {
			brandAndProductName: l,
			skuName: r
		}
	}
	function c(e) {
		var t = "",
			n = !1;
		e.brandZhName && !e.brandEnName ? t = e.brandZhName : !e.brandZhName && e.brandEnName ? (t = e.brandEnName, n = !0) : 0 === e.brandMainName ? t = e.brandZhName : (t = e.brandEnName, n = !0);
		var a = "",
			r = "",
			o = 1e3 === e.sku.propType ? "色号：" : "型号：";
		e.zhName && !e.enName ? e.sku.zhName ? a = e.sku.zhName : (a = e.zhName, r = o + e.sku.mixName) : !e.zhName && e.enName ? (n && (a += " "), e.sku.enName ? a += e.sku.enName : (a += e.enName, r = o + e.sku.mixName)) : 0 === e.mainName ? e.sku.zhName ? a = e.sku.zhName : (a = e.zhName, r = o + e.sku.mixName) : (n && (a += " "), e.sku.enName ? a += e.sku.enName : (a += e.enName, r = o + e.sku.mixName));
		var l = "";
		return t && (l += t), a && (l += a), {
			brandAndProductName: l,
			skuName: r
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}();
	t.getBrandAndProductName = l, t.getSkuResultsTitle = i, t.getMainNameObject = u, t.getSkuFullName = c;
	var f = n(0),
		d = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(f),
		p = n(81);
	n(473);
	var h = function(e) {
		function t(e) {
			a(this, t);
			var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.onClick = n.onClick.bind(n), n
		}
		return o(t, e), s(t, [{
			key: "getProductImage",
			value: function(e) {
				return e.id && e.coverImg ? e.coverImg + "?imageView&thumbnail=60y60" : p.DEFAULT_PRODUCT_ITEM_URL + "?imageView&thumbnail=60y60"
			}
		}, {
			key: "getDropdownItemMainName",
			value: function(e) {
				if (e.id) {
					var t = "";
					return e.brandZhName && (t += e.brandZhName), e.zhName && (t += " " + e.zhName), e.aliasName && (t += "（" + e.aliasName + "）"), t
				}
				return e.name
			}
		}, {
			key: "getDropdownItemSubName",
			value: function(e) {
				if (e.id) {
					var t = "";
					return e.brandEnName && (t += e.brandEnName), e.enName && (t += " " + e.enName), t
				}
				return e.name
			}
		}, {
			key: "getSkuFullName",
			value: function(e) {
				var t = "",
					n = !1;
				e.brandZhName && !e.brandEnName ? t = e.brandZhName : !e.brandZhName && e.brandEnName ? (t = e.brandEnName, n = !0) : 0 === e.brandMainName ? t = e.brandZhName : (t = e.brandEnName, n = !0);
				var a = "",
					r = "",
					o = 1e3 === e.sku.propType ? "色号：" : "型号：";
				e.zhName && !e.enName ? e.sku.zhName ? a = e.sku.zhName : (a = e.zhName, r = o + e.sku.mixName) : !e.zhName && e.enName ? (n && (a += " "), e.sku.enName ? a += e.sku.enName : (a += e.enName, r = o + e.sku.mixName)) : 0 === e.mainName ? e.sku.zhName ? a = e.sku.zhName : (a = e.zhName, r = o + e.sku.mixName) : (n && (a += " "), e.sku.enName ? a += e.sku.enName : (a += e.enName, r = o + e.sku.mixName));
				var l = "";
				return t && (l += t), a && (l += a), {
					brandAndProductName: l,
					skuName: r
				}
			}
		}, {
			key: "onClick",
			value: function() {
				var e = this.props.product;
				this.props.onClick(e)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.product;
				return e.id ? d.
				default.createElement("li", {
					className: "web2-product-item",
					onClick: this.onClick
				}, d.
				default.createElement("div", {
					className: "web2-product-item-wrapper"
				}, d.
				default.createElement("div", {
					className: "web2-product-item-info"
				}, d.
				default.createElement("p", {
					className: "web2-product-item-main-name"
				}, this.getDropdownItemMainName(e)), d.
				default.createElement("p", {
					className: "web2-product-item-sub-name"
				}, this.getDropdownItemSubName(e)))), d.
				default.createElement("div", {
					className: "web2-product-item-image-wrapper"
				}, d.
				default.createElement("img", {
					className: "web2-product-item-image",
					src: this.getProductImage(e),
					alt: ""
				}))) : d.
				default.createElement("li", {
					className: "web2-product-item",
					onClick: this.onClick
				}, d.
				default.createElement("p", {
					className: "web2-product-item-cannotfind"
				}, this.getDropdownItemMainName(e)))
			}
		}]), t
	}(d.
	default.Component);
	h.propTypes = {
		product: d.
		default.PropTypes.object,
		onClick: d.
		default.PropTypes.func.isRequired
	}, h.defaultProps = {
		product: {}
	}, t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(23),
		f = a(s);
	n(474);
	var d = void 0,
		p = function(e) {
			function t(e) {
				return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return l(t, e), i(t, [{
				key: "render",
				value: function() {
					return c.
					default.createElement("div", {
						className: "web2-loading-layer"
					}, c.
					default.createElement("div", {
						className: "web2-loading-scale-layer"
					}, c.
					default.createElement("div", {
						className: "web2-loading-loader"
					})))
				}
			}], [{
				key: "show",
				value: function() {
					d = document.createElement("div"), document.body.appendChild(d), f.
					default.render(c.
					default.createElement(t, null), d)
				}
			}, {
				key: "close",
				value: function() {
					f.
					default.unmountComponentAtNode(d), document.body.removeChild(d)
				}
			}]), t
		}(c.
		default.Component);
	t.
	default = p
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	t.DEFAULT_PRODUCT_URL = "http://beauty.nosdn.127.net/b133cd23-b854-4ed8-8d7b-221217a01d18.jpg", t.DEFAULT_PRODUCT_ITEM_URL = "http://beauty.nos.netease.com/beauty/img/cef9f07f-d66d-4321-8a5a-af70e068d496.png"
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		o = function() {
			function e() {
				a(this, e), this.observers = []
			}
			return r(e, [{
				key: "on",
				value: function(e, t, n) {
					var a = {
						target: e,
						callback: n,
						eventName: t
					};
					this.observers.push(a)
				}
			}, {
				key: "off",
				value: function(e, t) {
					this.observers = this.observers.filter(function(n) {
						return !(e === n.target && t === n.eventName)
					})
				}
			}, {
				key: "trigger",
				value: function(e, t) {
					this.observers.forEach(function(n) {
						n.eventName === e && n.callback(t, n.target)
					})
				}
			}]), e
		}(),
		l = new o;
	t.
	default = l
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return new Promise(function(t, n) {
			var a = e.url,
				r = e.method,
				o = e.headers,
				l = e.dataType,
				u = e.dataObj,
				c = e.data,
				s = {
					url: a,
					type: r || "GET",
					headers: o || {
						"Content-Type": "application/json"
					},
					dataType: l || "json",
					data: c || JSON.stringify(u || ""),
					timeout: 1e4,
					success: function(e) {
						t(e)
					},
					error: function(e) {
						n(e)
					}
				};
			"GET" === s.type && delete s.data, i.
			default.ajax(s)
		})
	}
	function r(e, t) {
		var n = void 0,
			a = void 0;
		return t || (t = 250),
		function() {
			for (var r = arguments.length, o = Array(r), l = 0; l < r; l++) o[l] = arguments[l];
			var i = this,
				u = +new Date;
			n && u < n + t ? (clearTimeout(a), a = setTimeout(function() {
				e.apply(i, o)
			}, t)) : e.apply(i, o), n = u
		}
	}
	function o(e) {
		try {
			return e || (e = ""), ("" + e).replace(/[^\x00-\xff]/g, "xx").length
		} catch (e) {}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.request = a, t.throttle = r, t.getLength = o;
	var l = n(39),
		i = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(l)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = function(e, t, n, a) {
		return e /= a / 2, e < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
	};
	t.
	default = a
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		o = function() {
			function e() {
				a(this, e), this.observers = []
			}
			return r(e, [{
				key: "on",
				value: function(e, t, n) {
					var a = {
						target: e,
						callback: n,
						eventName: t
					};
					this.observers.push(a)
				}
			}, {
				key: "off",
				value: function(e, t) {
					this.observers = this.observers.filter(function(n) {
						return !(e === n.target && t === n.eventName)
					})
				}
			}, {
				key: "trigger",
				value: function(e, t) {
					this.observers.forEach(function(n) {
						n.eventName === e && n.callback(t, n.target)
					})
				}
			}]), e
		}(),
		l = new o;
	t.
	default = l
}, function(e, t, n) {
	"use strict";

	function a() {
		var e = 0;
		return function(t) {
			var n = (new Date).getTime(),
				a = Math.max(0, 16 - (n - e)),
				r = window.setTimeout(function() {
					t(n + a)
				}, a);
			return e = n + a, r
		}
	}
	function r() {
		if ("undefined" == typeof window) return function() {};
		if (window.requestAnimationFrame) return window.requestAnimationFrame;
		var e = l.filter(function(e) {
			return e + "RequestAnimationFrame" in window
		})[0];
		return e ? window[e + "RequestAnimationFrame"] : a()
	}
	function o(e) {
		if ("undefined" == typeof window) return null;
		if (window.cancelAnimationFrame) return window.cancelAnimationFrame(e);
		var t = l.filter(function(e) {
			return e + "CancelAnimationFrame" in window || e + "CancelRequestAnimationFrame" in window
		})[0];
		return t ? (window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]).call(this, e) : clearTimeout(e)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = r, t.cancelRequestAnimationFrame = o;
	var l = ["moz", "ms", "webkit"]
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = function(e, t, n) {
		var a = encodeURIComponent(n || document.title),
			r = encodeURIComponent(window.location.href),
			o = encodeURIComponent(t);
		return {
			qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + r + "&title=" + a + "&pics=" + o,
			weibo: "http://service.weibo.com/share/share.php?appkey=&url=" + r + "&title=" + a + "&pic=" + o
		}[e]
	};
	t.
	default = a
}, function(e, t) {}, function(e, t) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, o = n(0),
		l = a(o),
		i = n(23),
		u = a(i),
		c = n(8),
		s = n(3),
		f = n(114),
		d = n(390),
		p = a(d),
		h = n(372),
		m = a(h),
		v = n(373),
		y = a(v),
		b = n(1),
		g = a(b),
		E = g.
	default.traversalObject(window.__INITIAL_STATE__, g.
	default.escape2Html), w = (0, m.
	default)(E || y.
	default, c.browserHistory), _ = (0, f.syncHistoryWithStore)(c.browserHistory, w);
	t.
	default = w,
	function(e, t) {
		u.
		default.render(l.
		default.createElement(s.Provider, {
			store: w
		}, l.
		default.createElement(c.Router, {
			history: _,
			routes: r({}, p.
			default),
			onUpdate: function() {
				return e.scrollTo(0, 0)
			}
		})), t.getElementById("app"))
	}(window, document)
}, , , , , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(1),
		f = a(s),
		d = n(8),
		p = n(25),
		h = a(p);
	n(401);
	var m = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				fanCnt: e.info.fanCnt,
				showFollowTip: !1,
				followType: -1
			}, n.handleFollowChange = n.handleFollowChange.bind(n), n.handleCloseDownload = n.handleCloseDownload.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "handleFollowChange",
			value: function(e, t, n) {
				var a = localStorage.getItem("hasShow"),
					r = !1;
				a || 0 === e || n || (r = !0, localStorage.setItem("hasShow", !0));
				var o = this.state.fanCnt,
					l = o;
				n || (l = 0 === e ? o - 1 : o + 1), this.setState(function() {
					return {
						followType: e,
						showFollowTip: r,
						fanCnt: l
					}
				})
			}
		}, {
			key: "handleCloseDownload",
			value: function() {
				this.setState({
					showFollowTip: !1
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this.state,
					t = e.fanCnt,
					n = e.followType,
					a = e.showFollowTip,
					r = this.props.info,
					o = r.id,
					l = r.vip,
					i = r.nickname,
					u = r.avatarUrl,
					s = r.age,
					p = r.skinType,
					m = r.authType,
					v = r.repoCnt,
					y = r.noteCnt,
					b = r.followerCnt;
				return c.
				default.createElement("div", {
					className: "author-panel"
				}, c.
				default.createElement("div", {
					className: "author-info"
				}, c.
				default.createElement("div", {
					className: "image-container"
				}, c.
				default.createElement(d.Link, {
					to: "/user/" + o
				}, c.
				default.createElement("img", {
					src: f.
					default.nosUrl(u, "120x120"),
					alt: "头像"
				})), l ? c.
				default.createElement("span", {
					className: "icon icon-vip-large"
				}) : null), c.
				default.createElement("p", {
					className: "name"
				}, c.
				default.createElement(d.Link, {
					to: "/user/" + o
				}, i)), c.
				default.createElement("p", {
					className: "info"
				}, s, s && p && p.name ? " | " : null, p && p.name), c.
				default.createElement(h.
				default, {
					className: "follow-btn",
					type: 1,
					disableCancel: !0,
					showFollowTip: a,
					id: o.toString(),
					closeDownload: this.handleCloseDownload,
					followCallback: this.handleFollowChange,
					initialFollowType: n
				})), c.
				default.createElement("ul", {
					className: "clearfix social"
				}, c.
				default.createElement("li", null, c.
				default.createElement(d.Link, {
					to: "/user/" + o + "?page=repo"
				}, c.
				default.createElement("span", {
					className: "bold"
				}, f.
				default.handleCountTo999(v)), c.
				default.createElement("br", null), "合辑", c.
				default.createElement("hr", null))), c.
				default.createElement("li", null, c.
				default.createElement(d.Link, {
					to: "/user/" + o + "?page=note"
				}, c.
				default.createElement("span", {
					className: "bold"
				}, f.
				default.handleCountTo999(y)), c.
				default.createElement("br", null), "心得", c.
				default.createElement("hr", null))), c.
				default.createElement("li", null, c.
				default.createElement("span", {
					className: "bold"
				}, f.
				default.toW(b)), c.
				default.createElement("br", null), "关注", c.
				default.createElement("hr", null)), c.
				default.createElement("li", null, c.
				default.createElement("span", {
					id: "fan-count",
					className: "bold"
				}, 4 === m ? "999+" : f.
				default.toW(t)), c.
				default.createElement("br", null), "粉丝")))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = m
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function r(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		i = n(0),
		u = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(i);
	n(403);
	var c = function(e) {
		function t(e) {
			return a(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return o(t, e), l(t, [{
			key: "render",
			value: function() {
				var e = {
					display: this.props.show ? "block" : "none"
				}, t = this.props.type ? "blank-private" : "blank-no-comments";
				return u.
				default.createElement("div", {
					className: t,
					style: e
				}, u.
				default.createElement("div", null))
			}
		}]), t
	}(u.
	default.Component);
	c.PropTypes = {
		type: u.
		default.PropTypes.number,
		show: u.
		default.PropTypes.bool
	}, c.defaultProps = {
		type: 0,
		show: !1
	}, t.
	default = c
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(3),
		d = n(8),
		p = n(4),
		h = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(p),
		m = n(1),
		v = a(m),
		y = n(25),
		b = a(y);
	n(404);
	var g = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleFollowChange = n.handleFollowChange.bind(n), n.handleCloseDownload = n.handleCloseDownload.bind(n), n
		}
		return l(t, e), u(t, [{
			key: "handleFollowChange",
			value: function(e, t, n) {
				var a = this.props,
					r = a.setCenterUser,
					o = a.centerUser,
					l = o.fanCnt,
					u = localStorage.getItem("hasShow"),
					c = !1;
				u || 0 === e || n || (c = !0, localStorage.setItem("hasShow", !0));
				var s = l;
				n || (s = 0 === e ? l - 1 : l + 1), r(i({}, o, {
					fanCnt: s,
					followType: e,
					showFollowTip: c
				}))
			}
		}, {
			key: "handleCloseDownload",
			value: function() {
				var e = this.props,
					t = e.setCenterUser,
					n = e.centerUser;
				t(i({}, n, {
					showFollowTip: !1
				}))
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.isLogin,
					n = e.user,
					a = e.centerUser,
					r = e.page,
					o = a.id,
					l = a.avatarUrl,
					i = a.vip,
					u = a.age,
					c = a.gender,
					f = a.skinType,
					p = a.description,
					h = a.followType,
					m = a.nickname,
					y = a.repoCnt,
					g = a.noteCnt,
					E = a.videoCnt,
					w = a.followerCnt,
					_ = a.fanCnt,
					N = a.collectCnt,
					C = a.praiseCnt,
					O = a.authType,
					T = a.authDescription,
					k = a.showFollowTip,
					P = t && a.id && n.userId.toString() === a.id.toString();
				return s.
				default.createElement("div", {
					className: "center-header"
				}, s.
				default.createElement("div", {
					className: "head-wrapper"
				}, s.
				default.createElement("div", {
					className: "avatar",
					style: {
						backgroundImage: "url(" + v.
						default.nosUrl(l, "100x100") + ")"
					}
				}, i ? s.
				default.createElement("span", {
					className: "icon icon-vip-large"
				}) : null), s.
				default.createElement("div", {
					className: "info"
				}, s.
				default.createElement("div", {
					className: "name clearfix"
				}, s.
				default.createElement("span", {
					className: "nickname"
				}, m), c && 1 === c.id ? s.
				default.createElement("span", {
					className: "icon icon-male"
				}) : null, c && 2 === c.id ? s.
				default.createElement("span", {
					className: "icon icon-female"
				}) : null, P ? s.
				default.createElement("span", {
					className: "account"
				}, s.
				default.createElement(d.Link, {
					to: "/account"
				}, "编辑个人资料")) : o && s.
				default.createElement(b.
				default, {
					className: "center-follow-btn",
					type: 1,
					id: o.toString(),
					showFollowTip: k,
					disableGetFollowAfterLogin: !0,
					initialFollowType: void 0 === h ? -1 : h,
					closeDownload: this.handleCloseDownload,
					followCallback: this.handleFollowChange
				})), s.
				default.createElement("p", {
					className: "cnt"
				}, s.
				default.createElement("span", null, "关注  ", v.
				default.toW(w)), s.
				default.createElement("span", null, "粉丝  ", 4 === O ? "999+" : v.
				default.toW(_)), s.
				default.createElement("span", null, "被赞  ", v.
				default.toW(C)), s.
				default.createElement("span", null, "被收藏  ", v.
				default.toW(N))), s.
				default.createElement("p", {
					className: "description"
				}, u && s.
				default.createElement("span", null, u), f && f.name && s.
				default.createElement("span", null, f.name), (u || f && f.name) && (T || p) ? s.
				default.createElement("span", null, "|") : null, T && s.
				default.createElement("span", null, T), p))), s.
				default.createElement("div", {
					className: "tabs"
				}, s.
				default.createElement("ul", null, s.
				default.createElement("li", {
					className: "repo" === r ? "active" : ""
				}, s.
				default.createElement(d.Link, {
					to: "/user/" + o + "?page=repo"
				}, "合辑 ", y)), s.
				default.createElement("li", {
					className: "note" === r ? "active" : ""
				}, s.
				default.createElement(d.Link, {
					to: "/user/" + o + "?page=note"
				}, "心得 ", g)), E ? s.
				default.createElement("li", {
					className: "video" === r ? "active" : ""
				}, s.
				default.createElement(d.Link, {
					to: "/user/" + o + "?page=video"
				}, "视频 ", E)) : null), P ? s.
				default.createElement("span", {
					className: "collection"
				}, s.
				default.createElement(d.Link, {
					to: "/collection",
					activeClassName: "active"
				}, s.
				default.createElement("span", {
					className: "icon"
				}), s.
				default.createElement("span", null, "我的收藏"))) : null))
			}
		}]), t
	}(s.
	default.Component),
		E = function(e) {
			return {
				centerUser: e.centerUser,
				isLogin: e.user.isLogin,
				user: e.user.info
			}
		}, w = function(e) {
			return {
				setCenterUser: function(t) {
					e({
						type: h.SET_CENTER_USER,
						info: t
					})
				}
			}
		};
	t.
	default = (0, f.connect)(E, w)(g)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(23),
		f = a(s),
		d = n(9),
		p = a(d),
		h = n(2),
		m = a(h),
		v = n(85),
		y = a(v),
		b = n(12),
		g = a(b),
		E = n(5),
		w = a(E),
		_ = n(86),
		N = a(_),
		C = n(84),
		O = a(C),
		T = n(17),
		k = a(T),
		P = (0, N.
		default)(),
		S = function() {
			return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
		}, j = function(e) {
			for (var t = e.offsetTop, n = e.offsetParent; n;) t += n.clientTop, t += n.offsetTop, n = n.offsetParent;
			return t
		}, L = {
			add: "/newApi/comment/add"
		}, x = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.handleFocus = n.handleFocus.bind(n), n.handleChange = n.handleChange.bind(n), n.handleSubmit = n.handleSubmit.bind(n), n.handleLogin = n.handleLogin.bind(n), n.lineHeight = 30, n.state = {
					value: "",
					valueLength: 0,
					preValue: ""
				}, n
			}
			return l(t, e), i(t, [{
				key: "checkLogin",
				value: function() {
					var e = this,
						t = this.props,
						n = t.isLogin,
						a = t.onLogin;
					return !!n || (a(function() {
						return e.simulateFocus()
					}), !1)
				}
			}, {
				key: "handleFocus",
				value: function() {
					this.checkLogin()
				}
			}, {
				key: "getLength",
				value: function(e) {
					return e.length
				}
			}, {
				key: "setValue",
				value: function(e) {
					var t = w.
					default.endsWith(e, "\n") ? e + "A" : e;
					this.setState({
						value: e,
						valueLength: e.length,
						preValue: t
					})
				}
			}, {
				key: "handleChange",
				value: function(e) {
					this.setValue(e.target.value)
				}
			}, {
				key: "handleLogin",
				value: function() {
					this.checkLogin()
				}
			}, {
				key: "handleSubmit",
				value: function(e) {
					var t = this,
						n = this.props,
						a = n.type,
						r = n.id,
						o = n.toastRoot;
					window.$eventTrace({
						category: "Comment",
						action: "add",
						eventLabel: a
					});
					var l = {
						type: k.
						default.resType[a],
						id: r,
						content: this.state.value
					};
					this.props.originId && (l.originId = this.props.originId), (0, m.
					default)(L.add, {
						method: "POST",
						body: l
					}).then(function(e) {
						t.setState({
							value: "",
							valueLength: 0,
							preValue: ""
						}), t.props.onHideForm && t.props.onHideForm(), t.props.onAddComment(e.result), g.
						default.show("发布成功", 2e3, o)
					}).
					catch (function(e) {
						g.
						default.show("发布失败", 2e3, o)
					}), e.preventDefault()
				}
			}, {
				key: "scroll",
				value: function(e) {
					document.body.scrollTop = e, document.documentElement.scrollTop = e
				}
			}, {
				key: "scrollToForm",
				value: function() {
					var e = this,
						t = j(f.
						default.findDOMNode(this)),
						n = S(),
						a = t - n - 262,
						r = Date.now();
					P(function t() {
						var o = Date.now(),
							l = o - r;
						e.scroll((0, O.
						default)(l, n, a, 300)), l < 300 && P(t)
					})
				}
			}, {
				key: "simulateFocus",
				value: function() {
					this.refs.textNode.focus()
				}
			}, {
				key: "componentDidMount",
				value: function() {
					var e = this;
					this.props.inside || y.
					default.on(this, "edit-comment", function() {
						e.scrollToForm(), e.simulateFocus()
					})
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.props.inside || y.
					default.off(this, "edit-comment")
				}
			}, {
				key: "componentDidUpdate",
				value: function() {
					y.
					default.trigger("page-size-change")
				}
			}, {
				key: "render",
				value: function() {
					var e = this.props.isLogin,
						t = (0, p.
						default)({
							"new-comment": !0,
							"show-form": this.props.show,
							"hide-form": !this.props.show,
							"outside-form": !this.props.inside,
							"inside-form": this.props.inside
						}),
						n = (0, p.
						default)({
							btn: !0,
							right: !0,
							"btn-small": this.props.inside,
							"btn-medium": !this.props.inside
						}),
						a = (0, p.
						default)({
							counts: !0,
							"counts-alert": this.state.valueLength > 140,
							"counts-small": this.props.inside,
							"counts-large": !this.props.inside
						}),
						r = !e || !this.state.valueLength || this.state.valueLength > 140,
						o = this.props.needLogin && !e ? c.
					default.createElement("span", {
						className: "login"
					}, c.
					default.createElement("span", {
						onClick: this.handleLogin
					}, "登录"), "后参与讨论") : null, l = this.props.inside ? "回复" + this.props.targetName + "：" : "谢谢你这么好看还来给我评论~", i = this.props.needLogin && !e ? null : c.
					default.createElement("span", {
						className: a
					}, c.
					default.createElement("span", null, this.state.valueLength), "/", 140);
					return c.
					default.createElement("form", {
						className: t,
						onSubmit: this.handleSubmit
					}, c.
					default.createElement("div", {
						className: "textarea-wrap"
					}, c.
					default.createElement("pre", null, this.state.preValue), c.
					default.createElement("textarea", {
						value: this.state.value,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						rows: "4",
						ref: "textNode",
						placeholder: l
					})), c.
					default.createElement("div", {
						className: "button-group clearfix"
					}, o, c.
					default.createElement("input", {
						type: "submit",
						className: n,
						value: this.props.inside ? "回复" : "发表评论",
						disabled: r
					}), i))
				}
			}]), t
		}(c.
		default.Component);
	x.PropTypes = {
		originId: c.
		default.PropTypes.string,
		onHideForm: c.
		default.PropTypes.func,
		onAddComment: c.
		default.PropTypes.func,
		inside: c.
		default.PropTypes.bool,
		needLogin: c.
		default.PropTypes.bool,
		targetName: c.
		default.PropTypes.string
	}, t.
	default = x
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(2),
		p = a(d);
	n(407);
	var h = {
		countries: "/newApi/ms/countries"
	}, m = (u = i = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				hideOpts: !0,
				showValue: e.showCountry ? "中国+86" : "+86",
				options: {}
			}, n.toggleShowOpts = n.toggleShowOpts.bind(n), n.select = n.select.bind(n), n
		}
		return l(t, e), c(t, [{
			key: "componentDidMount",
			value: function() {
				this.getCountries()
			}
		}, {
			key: "getCountries",
			value: function() {
				var e = this;
				(0, p.
				default)(h.countries).then(function(t) {
					e.setState({
						options: t.result
					})
				}).
				catch (function(e) {})
			}
		}, {
			key: "toggleShowOpts",
			value: function(e) {
				"boolean" != typeof e ? this.setState({
					hideOpts: !this.state.hideOpts
				}) : this.setState({
					hideOpts: e
				})
			}
		}, {
			key: "select",
			value: function(e) {
				var t = this.props.showCountry;
				e && e.id && this.setState({
					showValue: t ? e.name + e.id : e.id
				}), this.toggleShowOpts(!0), this.props.onCountryChange(e.id)
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.state,
					n = "m-options";
				return n += t.hideOpts ? " hide" : "", f.
				default.createElement("div", {
					className: "u-login-select"
				}, f.
				default.createElement("div", {
					className: "m-select-wrapper",
					onClick: this.toggleShowOpts
				}, f.
				default.createElement("div", {
					className: "input-basic input-area",
					id: "numberArea"
				}, t.showValue), f.
				default.createElement("div", {
					className: "arrow-down"
				}, f.
				default.createElement("div", {
					className: "icon-down"
				}))), f.
				default.createElement("div", {
					className: n,
					id: "countryList"
				}, f.
				default.createElement("ul", {
					className: "m-countryList"
				}, t.options.countryCode && t.options.countryCode.map(function(t, n) {
					return f.
					default.createElement("li", {
						className: "m-country",
						onClick: function() {
							return e.select(t)
						},
						key: "item-" + t.id + "-" + n
					}, f.
					default.createElement("span", {
						className: "m-country-name"
					}, t.name), f.
					default.createElement("span", {
						className: "m-country-code"
					}, t.id))
				}), t.options.allCountryCode && t.options.allCountryCode.map(function(t, n) {
					return f.
					default.createElement("li", {
						className: "m-country",
						onClick: function() {
							return e.select(t)
						},
						key: "item-" + t.id + "-" + n
					}, f.
					default.createElement("span", {
						className: "m-country-name"
					}, t.name), f.
					default.createElement("span", {
						className: "m-country-code"
					}, t.id))
				}))))
			}
		}]), t
	}(f.
	default.Component), i.propTypes = {
		isLogin: f.
		default.PropTypes.bool,
		showCountry: f.
		default.PropTypes.bool,
		onCountryChange: f.
		default.PropTypes.func.isRequired
	}, i.defaultProps = {
		isLogin: !1,
		showCountry: !0
	}, u);
	t.
	default = m
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(23),
		f = a(s),
		d = n(1),
		p = a(d),
		h = n(5),
		m = a(h);
	n(413);
	var v = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
				a = e.images,
				l = e.currentNum;
			return n.state = {
				images: a.map(function(e) {
					return p.
					default.nosUrl(e, "840x730")
				}),
				currentNum: l
			}, n.handlePrev = n.handlePrev.bind(n), n.handleNext = n.handleNext.bind(n), n.handleClose = n.handleClose.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "handlePrev",
			value: function(e) {
				t.trace("moveCarousel");
				var n = this.state,
					a = n.images,
					r = n.currentNum,
					o = 0 === r ? a.length - 1 : r - 1;
				this.setState({
					currentNum: o,
					images: m.
					default.concat(m.
					default.last(a), m.
					default.slice(a, 0, a.length - 1))
				}), e.stopPropagation()
			}
		}, {
			key: "handleNext",
			value: function(e) {
				t.trace("moveCarousel");
				var n = this.state,
					a = n.images,
					r = n.currentNum,
					o = r === a.length - 1 ? 0 : r + 1;
				this.setState({
					currentNum: o,
					images: m.
					default.concat(m.
					default.tail(a), m.
					default.head(a))
				}), e.stopPropagation()
			}
		}, {
			key: "handleClose",
			value: function() {
				t.trace("hideCarousel"), this.props.onClose()
			}
		}, {
			key: "render",
			value: function() {
				var e = this.state,
					t = e.images,
					n = e.currentNum,
					a = this.props.meixueAccounts;
				return c.
				default.createElement("div", {
					className: "carousel-outer-layer",
					onClick: this.handleClose
				}, c.
				default.createElement("div", {
					className: "carousel-body"
				}, c.
				default.createElement("div", {
					className: "carousel-inner"
				}, c.
				default.createElement("img", {
					src: t[0],
					alt: "图片",
					onClick: function(e) {
						e.stopPropagation()
					},
					onContextMenu: function(e) {
						!a && e.preventDefault()
					}
				})), c.
				default.createElement("div", {
					className: "counts"
				}, n + 1, "/", t.length), c.
				default.createElement("div", {
					className: "prev",
					onClick: this.handlePrev
				}, c.
				default.createElement("span", {
					className: "icon icon-prev"
				})), c.
				default.createElement("div", {
					className: "next",
					onClick: this.handleNext
				}, c.
				default.createElement("span", {
					className: "icon icon-prev"
				})), c.
				default.createElement("div", {
					className: "close"
				}, c.
				default.createElement("span", {
					className: "icon icon-close"
				}))))
			}
		}], [{
			key: "trace",
			value: function(e) {
				var t = void 0,
					n = void 0,
					a = window.location.pathname;
				if (-1 !== a.indexOf("note")) t = "Note", n = "note";
				else if (-1 !== a.indexOf("product")) t = "Product", n = "note";
				else {
					if (-1 === a.indexOf("trial")) return;
					t = "Trial", n = "note"
				}
				window.$eventTrace({
					category: t,
					action: e,
					eventLabel: n
				})
			}
		}]), t
	}(c.
	default.Component);
	v.PropTypes = {
		images: c.
		default.PropTypes.array.isRequired,
		currentNum: c.
		default.PropTypes.number,
		onClose: c.
		default.PropTypes.func.isRequired
	}, v.defaultProps = {
		currentNum: 0
	}, v.show = function(e) {
		v.trace("showCarousel");
		var t = e.currentNum,
			n = e.images,
			a = e.meixueAccounts,
			r = void 0,
			o = function() {
				f.
				default.unmountComponentAtNode(r), document.body.removeChild(r), r = null
			}, l = function() {
				o()
			};
		r = document.createElement("div"), document.body.appendChild(r), f.
		default.render(c.
		default.createElement(v, {
			currentNum: t,
			images: n,
			onClose: l,
			meixueAccounts: a
		}), r)
	}, t.
	default = v
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(5),
		f = a(s),
		d = n(9),
		p = a(d),
		h = n(8),
		m = n(37),
		v = a(m),
		y = n(12),
		b = a(y),
		g = n(22),
		E = a(g),
		w = n(2),
		_ = a(w),
		N = n(85),
		C = a(N),
		O = n(17),
		T = a(O),
		k = n(3),
		P = n(4),
		S = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(P),
		j = n(251),
		L = a(j),
		x = n(252),
		I = a(x);
	n(414);
	var R = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleClickEdit = n.handleClickEdit.bind(n), n.handleClickPraise = f.
			default.throttle(n.handleClickPraise.bind(n), 500), n.handleClickCollection = f.
			default.throttle(n.handleClickCollection.bind(n), 500), n.handleClickComment = n.handleClickComment.bind(n), n.getSocial = n.getSocial.bind(n), n.state = {
				isAuthor: !1
			}, n
		}
		return l(t, e), i(t, [{
			key: "handleClickEdit",
			value: function() {
				var e = this.props,
					t = e.type,
					n = e.id,
					a = void 0;
				switch (t) {
					case "repo":
						a = "/repoEdit/" + n;
						break;
					case "note":
						a = "/noteEdit/" + n
				} !! a && h.browserHistory.push(a)
			}
		}, {
			key: "handleClickPraise",
			value: function() {
				var e = this,
					t = this.props,
					n = t.id,
					a = t.type,
					r = t.isLogin,
					o = t.login,
					l = t.toastRoot;
				if (window.$eventTrace({
					category: "Praise",
					action: this.state.praised ? "remove" : "add",
					eventLabel: a
				}), !r) return void o().then(function() {
					return e.getSocial(a, n)
				}).then(function(t) {
					t.praised || e.handleClickPraise()
				});
				var i = this.state.praised,
					u = i ? "/newApi/praise/delete" : "/newApi/praise";
				(0, _.
				default)(u, {
					method: "POST",
					body: {
						type: T.
						default.resType[a],
						id: n
					}
				}).then(function(t) {
					200 === t.code && e.setState(function(e) {
						return {
							praiseCnt: i ? --e.praiseCnt : ++e.praiseCnt,
							praised: !i
						}
					})
				}).
				catch (function() {
					b.
					default.show(i ? "取消失败" : "点赞失败", 2e3, l)
				})
			}
		}, {
			key: "handleClickCollection",
			value: function() {
				var e = this,
					t = this.state.isAuthor,
					n = this.props,
					a = n.id,
					r = n.type,
					o = n.isLogin,
					l = n.login,
					i = n.toastRoot;
				if (window.$eventTrace({
					category: "Collect",
					action: this.state.collected ? "remove" : "add",
					eventLabel: r
				}), !o) return void l().then(function() {
					return e.getSocial(r, a)
				}).then(function(t) {
					t.collected || e.handleClickCollection()
				});
				if (t) return void b.
				default.show("不能收藏自己的" + ("repo" === r ? "合辑" : "心得") + "哦", 2e3, i);
				var u = this.state.collected,
					c = u ? "/newApi/collect/delete" : "/newApi/collect";
				(0, _.
				default)(c, {
					method: "POST",
					body: {
						id: a,
						type: T.
						default.resType[r]
					}
				}).then(function(t) {
					200 === t.code && e.setState(function(e) {
						return {
							collectCnt: u ? --e.collectCnt : ++e.collectCnt,
							collected: !u
						}
					}, function() {
						var t = document.getElementById("praise-cnt"); !! t && (t.innerHTML = e.state.collectCnt > 999 ? "999+" : e.state.collectCnt)
					})
				}, function(t) {
					b.
					default.show(u ? "取消失败" : "收藏失败", 2e3, e.toastRoot)
				})
			}
		}, {
			key: "handleClickComment",
			value: function() {
				var e = this,
					t = this.props,
					n = t.isLogin,
					a = t.login,
					r = t.type,
					o = t.id;
				if (!n) return void a().then(function() {
					return e.getSocial(r, o)
				}).then(function() {
					e.handleClickComment()
				});
				C.
				default.trigger("edit-comment")
			}
		}, {
			key: "getSocial",
			value: function(e, t) {
				var n = this;
				return (0, _.
				default)("/newApi/" + e + "/" + t + "/social").then(function(e) {
					var t = e.result,
						a = t.author,
						r = t.praiseCnt,
						o = t.collectCnt,
						l = t.praised,
						i = t.collected,
						u = t.privacy;
					return n.setState({
						isAuthor: a,
						collectCnt: o,
						praiseCnt: r,
						praised: l,
						collected: i,
						privacy: !! u
					}), e.result
				}, function(e) {})
			}
		}, {
			key: "componentDidMount",
			value: function() {
				var e = this.props,
					t = e.type,
					n = e.id;
				this.getSocial(t, n)
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				if (this.props.isLogin !== e.isLogin || this.props.id !== e.id) {
					var t = e.type,
						n = e.id;
					this.getSocial(t, n)
				}
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.type,
					n = e.id,
					a = e.commentCnt,
					r = e.bottomTarget,
					o = this.state,
					l = o.isAuthor,
					i = o.collectCnt,
					u = o.praiseCnt,
					s = o.praised,
					f = o.collected,
					d = o.privacy,
					h = (0, p.
					default)({
						"icon-thumbs-up": !s,
						"icon-thumbs-up-fill": s
					}),
					m = (0, p.
					default)({
						"icon-heart": !f,
						"icon-heart-fill": f
					}),
					y = l ? c.
				default.createElement(L.
				default, {
					className: "icon-edit",
					tip: "编辑",
					clickButton: this.handleClickEdit,
					value: "编辑"
				}) : null, b = d ? null : [c.
				default.createElement(L.
				default, {
					className: h,
					tip: "点赞",
					clickButton: this.handleClickPraise,
					value: u,
					key: 0
				}), c.
				default.createElement(L.
				default, {
					className: m,
					tip: "收藏",
					clickButton: this.handleClickCollection,
					value: i,
					key: 1
				}), c.
				default.createElement(L.
				default, {
					className: "icon-comment",
					tip: "评论",
					clickButton: this.handleClickComment,
					value: a,
					key: 2
				})];
				return c.
				default.createElement("div", {
					className: "left-bar-wrapper"
				}, c.
				default.createElement(v.
				default, {
					top: 72,
					bottomTarget: r,
					zIndex: 1e3
				}, c.
				default.createElement("ul", {
					className: "left-bar"
				}, y, b, d ? null : c.
				default.createElement(I.
				default, {
					className: "icon-external-link",
					type: t,
					id: n
				}, "分享"))))
			}
		}]), t
	}(c.
	default.Component);
	R.PropTypes = {
		type: c.
		default.PropTypes.string.isRequired,
		id: c.
		default.PropTypes.string.isRequired,
		bottomTarget: c.
		default.PropTypes.node,
		toastRoot: c.
		default.PropTypes.node
	};
	var M = function(e, t) {
		var n = e.user,
			a = t.type;
		return {
			isLogin: n.isLogin,
			commentCnt: e[a].comments.total
		}
	}, U = function(e) {
		return {
			login: function() {
				return new Promise(function(t) {
					E.
					default.show({
						onLoginSucceed: function(n) {
							e({
								type: S.LOGIN_SUCCESS,
								info: n.userInfo
							}), t()
						}
					})
				})
			}
		}
	};
	t.
	default = (0, k.connect)(M, U)(R)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(391),
		f = a(s),
		d = n(2),
		p = a(d),
		h = n(9),
		m = a(h),
		v = n(253),
		y = a(v);
	n(417);
	var b = {
		USER: "/newApi/ms/user/current"
	}, g = function(e) {
		return function() {
			(0, p.
			default)(b.USER).then(function(t) {
				if (!t.result.nickname) return window.location.href = "/account";
				e({
					userInfo: t.result
				})
			})
		}
	}, E = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				phoneActive: !0
			}, n
		}
		return l(t, e), i(t, [{
			key: "componentDidMount",
			value: function() {
				var e = this.props.loginCb;
				(0, f.
				default)("email-login-box", g(e))
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.state.phoneActive,
					n = (0, m.
					default)({
						hide: t,
						"email-container": !0
					});
				return c.
				default.createElement("div", {
					className: "login-panel"
				}, c.
				default.createElement("div", {
					className: "login-body"
				}, this.props.onCancel ? c.
				default.createElement("span", {
					className: "cancel-btn",
					onClick: this.props.onCancel
				}) : null, c.
				default.createElement("ul", {
					className: "tabs"
				}, c.
				default.createElement("li", {
					onClick: function() {
						e.setState({
							phoneActive: !0
						})
					},
					className: t ? "active" : ""
				}, "手机号登录"), c.
				default.createElement("li", {
					onClick: function() {
						e.setState({
							phoneActive: !1
						})
					},
					className: t ? "" : "active"
				}, "网易邮箱登录")), c.
				default.createElement("div", {
					className: t ? "" : "hide"
				}, c.
				default.createElement(y.
				default, {
					loginCb: this.props.loginCb
				})), c.
				default.createElement("div", {
					className: n
				}, c.
				default.createElement("div", {
					id: "email-login-box"
				}))))
			}
		}]), t
	}(c.
	default.Component);
	E.propTypes = {
		loginCb: c.
		default.PropTypes.func,
		onCancel: c.
		default.PropTypes.func
	}, E.defaultProps = {
		loginCb: function() {
			window.location.href = "/"
		},
		onCancel: null
	}, t.
	default = E
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(9),
		p = a(d),
		h = n(5),
		m = a(h),
		v = n(8),
		y = n(2),
		b = a(y),
		g = n(1),
		E = a(g);
	n(422);
	var w = {
		SUGGEST: "/newApi/suggest"
	}, _ = (u = i = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				suggest: [],
				value: e.defaultQuery || ""
			}, n.handleInputChange = n.handleInputChange.bind(n), n.handleJumpToSearch = n.handleJumpToSearch.bind(n), n.handleClickBtn = n.handleClickBtn.bind(n), n.handleKeyPress = n.handleKeyPress.bind(n), n.handleClickSuggest = n.handleClickSuggest.bind(n), n.fetchSuggest = m.
			default.throttle(n.fetchSuggest, 500), n.handleHideSuggest = n.handleHideSuggest.bind(n), n
		}
		return l(t, e), c(t, [{
			key: "fetchSuggest",
			value: function(e) {
				var t = this;
				(0, b.
				default)(w.SUGGEST, {
					method: "GET",
					body: {
						query: e,
						limit: 6,
						offset: 0
					}
				}).then(function(e) {
					t.setState(function(t) {
						var n = t.preValue;
						return m.
						default.trim(n).length ? {
							suggest: e.result.list
						} : {
							suggest: []
						}
					})
				})
			}
		}, {
			key: "handleKeyPress",
			value: function(e) {
				if ("Enter" === e.key) {
					var t = this.state.value;
					if (!m.
					default.trim(t)) return;
					this.setState({
						suggest: []
					}), window.$eventTrace({
						category: "Search",
						action: "enter",
						eventLabel: this.props.topBar ? "all" : "searchPage",
						queryString: t
					}), this.handleJumpToSearch(t)
				}
			}
		}, {
			key: "handleClickBtn",
			value: function() {
				var e = this.state.value;
				m.
				default.trim(e) && (this.setState({
					suggest: []
				}), window.$eventTrace({
					category: "Search",
					action: "click",
					eventLabel: this.props.topBar ? "all" : "searchPage",
					queryString: e
				}), this.handleJumpToSearch(e))
			}
		}, {
			key: "handleClickSuggest",
			value: function(e) {
				this.setState({
					suggest: []
				}), window.$eventTrace({
					category: "Search",
					action: "suggest",
					eventLabel: this.props.topBar ? "all" : "searchPage",
					queryString: e
				}), this.handleJumpToSearch(e)
			}
		}, {
			key: "handleJumpToSearch",
			value: function(e) {
				this.props.topBar ? window.location.href = "/search?query=" + encodeURIComponent(e) : v.browserHistory.push("/search?query=" + encodeURIComponent(e))
			}
		}, {
			key: "handleInputChange",
			value: function(e) {
				var t = e.target.value;
				if (this.setState({
					value: t
				}), !m.
				default.trim(t)) return this.setState({
					suggest: []
				});
				this.fetchSuggest(t)
			}
		}, {
			key: "handleHideSuggest",
			value: function() {
				this.state.suggest.length && this.setState({
					suggest: []
				})
			}
		}, {
			key: "componentDidMount",
			value: function() {
				window.addEventListener("click", this.handleHideSuggest)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				window.removeEventListener("click", this.handleHideSuggest)
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				var t = e.defaultQuery;
				t && this.setState({
					value: t,
					suggest: []
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.topBar,
					n = this.state,
					a = n.suggest,
					r = n.value,
					o = (0, p.
					default)({
						"not-top-bar": !t,
						"top-bar": t,
						"search-bar": !0
					});
				return f.
				default.createElement("div", {
					className: o,
					onClick: function(e) {
						e.stopPropagation()
					}
				}, t && f.
				default.createElement("button", {
					className: "search-btn",
					onClick: this.handleClickBtn
				}), f.
				default.createElement("input", {
					placeholder: "搜索产品、内容、用户",
					onKeyPress: this.handleKeyPress,
					value: r,
					onChange: this.handleInputChange
				}), !! a.length && f.
				default.createElement("ul", {
					className: "search-suggest"
				}, a.map(function(t) {
					return f.
					default.createElement("li", {
						key: E.
						default.getKey(),
						onClick: function() {
							e.handleClickSuggest(t)
						}
					}, t)
				})), !t && f.
				default.createElement("button", {
					className: "search-btn",
					onClick: this.handleClickBtn
				}))
			}
		}]), t
	}(f.
	default.Component), i.propTypes = {
		topBar: f.
		default.PropTypes.bool
	}, i.defaultProps = {
		topBar: !1
	}, u);
	t.
	default = _
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(2),
		f = a(s),
		d = n(13),
		p = a(d),
		h = n(27),
		m = a(h),
		v = n(3),
		y = n(263),
		b = a(y);
	n(151);
	var g = {
		TAG_PREFIX: "/newApi/tag",
		VIDEO_PREFIX: "/newApi/beautyVideo/tag",
		CURRENT: "/newApi/ms/user/current"
	}, E = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.current = 1, n.canGet = !0, n.getList = n.getList.bind(n), n.handleFollowChange = n.handleFollowChange.bind(n), n.handleCloseDownload = n.handleCloseDownload.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "getList",
			value: function(e) {
				var t = this,
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
				if (this.canGet) {
					this.canGet = !1;
					var a = this.props,
						r = a.query,
						o = a.changeList,
						l = a.type,
						i = void 0,
						u = this.current,
						c = 12 * u;
					i = "beautyVideo" === l ? (0, f.
					default)(g.VIDEO_PREFIX + "/" + r, {
						method: "GET",
						body: {
							offset: c,
							limit: n
						}
					}) : (0, f.
					default)(g.TAG_PREFIX + "/" + r + "/videos", {
						method: "GET",
						body: {
							offset: c,
							limit: n
						}
					}), i.then(function(n) {
						t.canGet = !0;
						var a = e.concat(n.result.list || []);
						o(a, n.result.hasNext), t.current = ++u
					})
				}
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				e.isLogin && !this.props.isLogin && (this.current = 0, this.getList([]))
			}
		}, {
			key: "handleCloseDownload",
			value: function(e) {
				var t = this.props,
					n = t.list,
					a = t.changeList,
					r = t.hasNext;
				a((0, m.
				default)(n, {
					$apply: function(t) {
						return t.map(function(t) {
							return t.id === e ? (0, m.
							default)(t, {
								showFollowTip: {
									$set: !1
								}
							}) : t
						})
					}
				}), r)
			}
		}, {
			key: "handleFollowChange",
			value: function(e, t, n) {
				var a = this.props,
					r = a.list,
					o = a.changeList,
					l = a.hasNext,
					i = localStorage.getItem("hasShow"),
					u = !1;
				i || 0 === e || (u = !0, localStorage.setItem("hasShow", !0)), o((0, m.
				default)(r, {
					$apply: function(a) {
						return a.map(function(a) {
							return a.author.id === t ? a.id === n ? (0, m.
							default)(a, {
								author: {
									followType: {
										$set: e
									}
								},
								showFollowTip: {
									$set: u
								}
							}) : (0, m.
							default)(a, {
								author: {
									followType: {
										$set: e
									}
								}
							}) : a
						})
					}
				}), l)
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = t.list,
					a = t.hasNext,
					r = n.map(function(t, n) {
						return c.
						default.createElement(b.
						default, {
							id: t.id,
							title: t.title,
							duration: t.duration,
							tags: t.tags,
							coverUrl: t.coverUrl,
							browseCnt: t.browseCnt,
							collected: t.collected,
							showFollowTip: t.showFollowTip,
							closeDownload: e.handleCloseDownload,
							followChange: e.handleFollowChange,
							author: t.author,
							key: "video_" + n
						})
					});
				return c.
				default.createElement("div", null, c.
				default.createElement("ul", {
					className: "col-video-list clearfix",
					style: {
						minHeight: "550px"
					}
				}, r), c.
				default.createElement("div", {
					className: "tab-loading-more"
				}, n.length > 0 && c.
				default.createElement(p.
				default, {
					paginationType: "hasNext",
					hasNext: a,
					bufferHeight: 400,
					dotInfo: this.props.dotInfo,
					getList: function() {
						e.getList(n)
					},
					endText: "没有更多视频啦~"
				})))
			}
		}]), t
	}(c.
	default.Component),
		w = function(e, t) {
			var n = t.type,
				a = "tagVideo";
			return "beautyVideo" === n && (a = "beautyVideo"), {
				isLogin: e.user.isLogin,
				list: e[a].list || [],
				hasNext: e[a].hasNext
			}
		}, _ = function(e, t) {
			var n = t.type;
			return {
				changeList: function(t, a) {
					e("beautyVideo" === n ? {
						type: "SET_BEAUTY_VIDEO",
						list: t,
						hasNext: a
					} : {
						type: "SET_TAG_VIDEO",
						list: t,
						hasNext: a
					})
				}
			}
		};
	t.
	default = (0, v.connect)(w, _)(E)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(11),
		f = a(s);
	n(433);
	var d = ["眼部打底前上一层腮红，更遮黑眼圈哦", "洁面后用爽肤水做二次清洁，减少水质对皮肤的影响", "阴天紫外线更强，千万要涂防晒霜"],
		p = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.state = {
					txt: ""
				}, n
			}
			return l(t, e), i(t, [{
				key: "componentDidMount",
				value: function() {
					this.setState({
						txt: d[Math.floor(Math.random() * d.length)]
					})
				}
			}, {
				key: "render",
				value: function() {
					return c.
					default.createElement("div", null, c.
					default.createElement(f.
					default, null), c.
					default.createElement("div", {
						className: "error-wrapper"
					}, c.
					default.createElement("div", {
						className: "info"
					}, c.
					default.createElement("h1", null, "出错啦！"), c.
					default.createElement("div", null, this.state.txt))))
				}
			}]), t
		}(c.
		default.Component);
	t.
	default = p
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(8),
		d = n(5),
		p = a(d),
		h = n(11),
		m = a(h),
		v = n(131),
		y = a(v),
		b = n(144),
		g = a(b),
		E = n(2),
		w = a(E);
	n(448), n(449);
	var _ = {
		CHECK_PHONE: "/newApi/ms/check/phone",
		SEND_CAPTCHA: "/newApi/ms/sms/send",
		REGISTER: "/newApi/register/v2",
		FORGET: "/newApi/user/password/v2",
		USER: "/newApi/ms/user/current",
		SESSION: "/newApi/session/v2"
	}, N = function(e) {
		for (var t = e + "=", n = document.cookie.split(";"), a = 0; a < n.length; a += 1) {
			var r = p.
			default.trim(n[a]);
			if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
		}
		return ""
	}, C = 60,
		O = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.state = {
					phone: "",
					area: "+86",
					captcha: "",
					password: "",
					phoneErr: "",
					passwordErr: "",
					captchaErr: "",
					secondLeft: C,
					captchaValid: !1,
					yidunCaptchaValid: !1,
					showYidunCaptcha: !1
				}, n.mode = e.route.path, n.yidunCaptchaNode = null, n.NECaptchaValidate = null, ["handlePhoneChange", "handlePasswordChange", "handleCaptchaChange", "handlePhoneBlur", "handleGetCaptcha", "handlePasswordBlur", "handleSubmit", "handleCaptchaBlur", "register"].forEach(function(e) {
					n[e] = n[e].bind(n)
				}), n
			}
			return l(t, e), u(t, [{
				key: "handlePhoneChange",
				value: function(e) {
					this.setState({
						phone: e.target.value
					})
				}
			}, {
				key: "handlePasswordChange",
				value: function(e) {
					this.setState({
						password: e.target.value
					})
				}
			}, {
				key: "handleCaptchaChange",
				value: function(e) {
					this.setState({
						captcha: e.target.value
					})
				}
			}, {
				key: "handleGetCaptcha",
				value: function(e) {
					var t = this,
						n = this.state,
						a = n.phoneErr,
						r = n.phone,
						o = n.area;
					e.preventDefault(), this.setState({
						captchaValid: !1
					}), (0, w.
					default)(_.SEND_CAPTCHA, {
						method: "POST",
						norest: !0,
						body: {
							phone: r,
							area: o,
							deviceId: this.did
						}
					}).then(function() {
						var e = C;
						t.countDown = !0;
						var n = setInterval(function() {
							e <= 0 ? (clearInterval(n), t.countDown = !1, t.setState({
								secondLeft: C
							}), t.checkPhone()) : t.setState({
								secondLeft: e
							}), e -= 1
						}, 1e3)
					}).
					catch (function(e) {
						t.setState({
							captchaValid: !a,
							captchaErr: e.msg,
							secondLeft: C
						})
					})
				}
			}, {
				key: "checkPhone",
				value: function() {
					var e = this,
						t = this.state,
						n = t.area,
						a = t.phone,
						r = "";
					if ("+86" === n ? /^1\d{10}$/.test(a) || (r = "请输入11位的手机号码") : /^[0-9]+$/.test(a) || (r = "请输入正确的手机号码"), r) return void this.setState({
						phoneErr: r,
						captchaValid: !r && !this.countDown
					});
					var o = this.mode;
					(0, w.
					default)(_.CHECK_PHONE, {
						method: "GET",
						body: {
							area: n,
							phone: a
						}
					}).then(function() {
						"forget" !== o ? e.setState({
							captchaValid: !e.countDown,
							phoneErr: ""
						}) : e.setState({
							phoneErr: "当前号码未注册",
							captchaValid: !1
						})
					}).
					catch (function(t) {
						"forget" === o ? e.setState({
							captchaValid: !e.countDown,
							phoneErr: ""
						}) : e.setState({
							phoneErr: t.msg,
							captchaValid: !1
						})
					})
				}
			}, {
				key: "handlePhoneBlur",
				value: function() {
					this.checkPhone()
				}
			}, {
				key: "handleCaptchaBlur",
				value: function() {
					this.checkCaptcha()
				}
			}, {
				key: "handlePasswordBlur",
				value: function() {
					this.checkPassword()
				}
			}, {
				key: "register",
				value: function(e) {
					var t = this,
						n = watchman.getToken(),
						a = this.NECaptchaValidate,
						r = a ? {
							NECaptchaValidate: a,
							antiRegisterToken: n
						} : {
							antiRegisterToken: n
						};
					(0, w.
					default)(_.REGISTER, {
						method: "POST",
						body: i({}, e, r)
					}).then(function(e) {
						if (200 !== e.code) throw e;
						f.browserHistory.push("/account")
					}).
					catch (function(e) {
						if (561 === e.code) {
							if (t.state.yidunCaptchaValid && t.setState({
								yidunCaptchaValid: !1
							}), t.yidunCaptchaInstance) return t.yidunCaptchaInstance.refresh();
							t.setState({
								showYidunCaptcha: !0
							}), (0, g.
							default)("register", t.yidunCaptchaNode, function(e, n) {
								t.NECaptchaValidate = n, t.setState({
									yidunCaptchaValid: !0
								})
							}, function(e) {
								t.yidunCaptchaInstance = e
							})
						} else t.yidunCaptchaInstance && t.yidunCaptchaInstance.destroy(), t.yidunCaptchaInstance = null, t.setState({
							passwordErr: e.msg
						})
					}), watchman.reset()
				}
			}, {
				key: "forget",
				value: function(e) {
					var t = this;
					(0, w.
					default)(_.FORGET, {
						method: "PUT",
						body: e
					}).then(function(t) {
						if (200 !== t.code) throw t.msg || "重置密码失败";
						var n = e.phone,
							a = e.area,
							r = e.password;
						return (0, w.
						default)(_.SESSION, {
							body: {
								area: a,
								phone: n,
								password: r,
								type: 1
							},
							method: "POST"
						})
					}).then(function(e) {
						if (200 === e.code) {
							var t = e.result.userId;
							f.browserHistory.push("/user/" + t)
						}
					}).
					catch (function(e) {
						t.setState({
							passwordErr: e.msg
						})
					})
				}
			}, {
				key: "handleSubmit",
				value: function(e) {
					var t = this;
					e.preventDefault();
					var n = this.state,
						a = n.phoneErr,
						r = n.yidunCaptchaValid,
						o = n.showYidunCaptcha,
						l = !this.checkCaptcha(),
						i = !this.checkPassword();
					if (!(a || l || i)) {
						var u = this.state,
							c = u.phone,
							s = u.area,
							f = u.captcha,
							d = u.password,
							p = this.did,
							h = this.mode,
							m = {
								deviceId: p,
								phone: c,
								area: s,
								password: d,
								captcha: f
							};
						if ("forget" === h) return this.forget(m);
						!r && o || watchman.flush(function() {
							t.register(m)
						})
					}
				}
			}, {
				key: "checkCaptcha",
				value: function() {
					var e = this.state.captcha,
						t = "";
					return e.length || (t = "验证码不能为空"), this.setState({
						captchaErr: t
					}), !t
				}
			}, {
				key: "checkPassword",
				value: function() {
					var e = this.state.password,
						t = "";
					return e.length < 6 || e.length > 16 ? t = "请输入6~16位的密码" : /^[\u0020-\u007f]{6,16}$/.test(e) || (t = "密码包含非法字符"), this.setState({
						passwordErr: t
					}), !t
				}
			}, {
				key: "componentDidMount",
				value: function() {
					(0, w.
					default)(_.USER).then(function(e) {
						200 === e.code && (window.location.href = "/")
					}), this.phoneInputNode.focus(), this.did = N("_did")
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = this.state,
						n = t.phone,
						a = t.password,
						r = t.captcha,
						o = t.phoneErr,
						l = t.passwordErr,
						i = t.secondLeft,
						u = t.captchaErr,
						c = t.captchaValid,
						f = t.yidunCaptchaValid,
						d = t.showYidunCaptcha,
						p = this.mode;
					return s.
					default.createElement("div", null, s.
					default.createElement(m.
					default, {
						signupPage: !0
					}), s.
					default.createElement("div", {
						className: "signup-wrapper"
					}, s.
					default.createElement("div", {
						className: "head"
					}, s.
					default.createElement("div", {
						className: "title"
					}, "forget" === p ? "重置密码" : "请使用手机号注册")), s.
					default.createElement("form", {
						className: "form-signup"
					}, s.
					default.createElement("div", {
						className: "form-item"
					}, s.
					default.createElement(y.
					default, {
						isLogin: !1,
						showCountry: !0,
						onCountryChange: function(t) {
							e.setState({
								area: t
							})
						}
					})), s.
					default.createElement("div", {
						className: "form-item phone"
					}, s.
					default.createElement("input", {
						value: n,
						className: o ? "input-error" : "",
						placeholder: "请输入手机号码",
						onBlur: this.handlePhoneBlur,
						ref: function(t) {
							e.phoneInputNode = t
						},
						onChange: this.handlePhoneChange
					}), o ? s.
					default.createElement("p", {
						className: "error"
					}, " ", s.
					default.createElement("i", {
						className: "icon-error"
					}), o) : null), s.
					default.createElement("div", {
						className: "form-item captcha"
					}, s.
					default.createElement("input", {
						value: r,
						className: u ? "input-error" : "",
						onChange: this.handleCaptchaChange,
						onBlur: this.handleCaptchaBlur,
						placeholder: "验证码"
					}), s.
					default.createElement("button", {
						className: "btn captcha",
						disabled: !c,
						onClick: this.handleGetCaptcha
					}, i !== C ? i + " 秒后重新获取" : "获取验证码"), u ? s.
					default.createElement("p", {
						className: "error"
					}, s.
					default.createElement("i", {
						className: "icon-error"
					}), " ", u) : null), s.
					default.createElement("div", {
						className: "form-item password"
					}, s.
					default.createElement("input", {
						value: a,
						className: l ? "input-error" : "",
						placeholder: "请输入6-16位密码，注意区分大小写",
						type: "password",
						onBlur: this.handlePasswordBlur,
						onChange: this.handlePasswordChange
					}), l ? s.
					default.createElement("p", {
						className: "error"
					}, " ", s.
					default.createElement("i", {
						className: "icon-error"
					}), " ", l) : null), s.
					default.createElement("div", {
						className: "yidun-captcha"
					}, s.
					default.createElement("div", {
						ref: function(t) {
							e.yidunCaptchaNode = t
						}
					}), !f && d ? s.
					default.createElement("p", {
						className: "error"
					}, s.
					default.createElement("span", {
						className: "icon-error"
					}), s.
					default.createElement("span", null, "请拖动滑块完成验证")) : null), s.
					default.createElement("div", {
						className: "form-item"
					}, s.
					default.createElement("button", {
						className: "submit",
						onClick: this.handleSubmit
					}, "下 一 步")), s.
					default.createElement("p", {
						className: "license"
					}, "用户注册即代表同意", s.
					default.createElement("a", {
						href: "/eula",
						target: "_blank"
					}, "《网易美学服务条款》")))))
				}
			}]), t
		}(s.
		default.Component);
	t.
	default = O
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(61),
		d = n(3),
		p = n(4),
		h = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(p),
		m = n(22),
		v = a(m),
		y = function(e) {
			return function(t) {
				function n(e) {
					r(this, n);
					var t = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
					return t.checkLogin = function() {
						var e = t.props,
							n = e.isLogin,
							a = e.onLogin;
						return !!n || (a(), !1)
					}, t
				}
				return l(n, t), u(n, [{
					key: "render",
					value: function() {
						return s.
						default.createElement(e, i({}, this.props, {
							checkLogin: this.checkLogin
						}))
					}
				}]), n
			}(s.
			default.Component)
		}, b = function(e) {
			return {
				isLogin: e.user.isLogin
			}
		}, g = function(e) {
			return {
				onLogin: function() {
					return new Promise(function(t) {
						v.
						default.show({
							onLoginSucceed: function(n) {
								e({
									type: h.LOGIN_SUCCESS,
									info: n.userInfo
								}), t()
							}
						})
					})
				}
			}
		};
	t.
	default = (0, f.compose)((0, d.connect)(b, g), y)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getShareInfo = t.insertNep = void 0;
	var r = n(2),
		o = a(r),
		l = n(87),
		i = a(l),
		u = n(17),
		c = a(u),
		s = {
			SHARE: "/newApi/share"
		}, f = function(e) {
			var t = document.getElementsByTagName("head")[0] || document.body || document.documentElement;
			if (!document.getElementById("nep-css")) {
				var n = document.createElement("link");
				n.id = "nep-css", n.rel = "stylesheet", n.type = "text/css", n.href = "//nos.netease.com/vod163/nep.min.css", t.appendChild(n)
			}
			if (document.getElementById("nep-script")) e();
			else {
				var a = document.createElement("script");
				e && a.addEventListener("load", e, !1), a.id = "nep-script", a.type = "text/javascript", a.src = "//nos.netease.com/vod163/nep.min.js", t.appendChild(a)
			}
		}, d = function(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "video";
			return (0, o.
			default)(s.SHARE, {
				body: {
					type: c.
					default.resType[n],
					id: e,
					field: t
				}
			}).then(function(e) {
				var n = e.result,
					a = n.text,
					r = n.img;
				return 2 === t ? (0, i.
				default)("weibo", r, a) : (0, i.
				default)("qzone", r, a)
			})
		};
	t.insertNep = f, t.getShareInfo = d
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(39),
		f = a(s),
		d = n(83),
		p = n(81),
		h = n(20),
		m = a(h);
	n(472);
	var v = n(79),
		y = a(v),
		b = {
			SEARCH_PRODUCT: "/newApi/ms/note/searchproductbyname",
			SEARCH_SKU: "/newApi/ms/note/searchproductskulist"
		}, g = !1,
		E = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.onMouseDown = n.onMouseDown.bind(n), n.onMouseMove = n.onMouseMove.bind(n), n.onMouseUp = n.onMouseUp.bind(n), n.onClickClose = n.onClickClose.bind(n), n.handleComposition = n.handleComposition.bind(n), n.onSearchInputChange = n.onSearchInputChange.bind(n), n.getProductsThrottle = (0, d.throttle)(n.getProducts, 600), n.selectProduct = n.selectProduct.bind(n), n.selectSku = n.selectSku.bind(n), n.addNewProduct = n.addNewProduct.bind(n), n.state = {
					products: [],
					selectedProduct: null,
					skus: [],
					isChoosingProduct: !0,
					isAddingNewColorOrType: !1,
					newProduct: null
				}, n
			}
			return l(t, e), i(t, [{
				key: "getProducts",
				value: function(e) {
					var t = this,
						n = b.SEARCH_PRODUCT + "?prdName=" + e + "&offset=0&limit=50",
						a = [];
					(0, d.request)({
						url: n
					}).then(function(e) {
						if (200 !== e.code) throw new Error(e.msg);
						a = e.result.list, a && a.length ? a.push({
							name: "没找到？点击输入产品名"
						}) : a = [{
							name: "搜索结果为空，可点击输入产品名"
						}], t.setState({
							products: a || []
						}, function() {})
					}).
					catch (function(e) {})
				}
			}, {
				key: "selectProduct",
				value: function(e) {
					var t = this;
					if (e.id) {
						var n = b.SEARCH_SKU + "?productId=" + e.id,
							a = e,
							r = !0,
							o = [];
						(0, d.request)({
							url: n
						}).then(function(e) {
							if (200 !== e.code) throw new Error(e.msg);
							o = e.result, o.length ? (o = o.concat({
								mixName: "没找到？点击输入"
							}), r = !1, t.setState({
								selectedProduct: a,
								skus: o,
								isChoosingProduct: r
							})) : (a.calculatedName = (0, v.getBrandAndProductName)(a), t.onClickClose(a))
						}).
						catch (function(e) {})
					} else this.setState({
						newProduct: {
							brandName: "",
							productName: "",
							colorOrTypeName: ""
						}
					})
				}
			}, {
				key: "selectSku",
				value: function(e) {
					var t = this.state.selectedProduct,
						n = !1,
						a = null;
					if (e) if (e.skuNoteId) {
						e.id = e.skuNoteId, t.sku = e, t.coverImg = e.coverUrl && e.coverUrl !== p.DEFAULT_PRODUCT_ITEM_URL ? e.coverUrl : t.coverImg;
						var r = (0, v.getSkuFullName)(t);
						t.calculatedName = r.brandAndProductName, t.calculatedSkuName = r.skuName, this.onClickClose(t)
					} else n = !0, a = {
						brandName: t.brandMainName ? t.brandEnName : t.brandZhName,
						productName: t.mainName ? t.enName : t.zhName,
						colorOrTypeName: ""
					}, this.setState({
						isAddingNewColorOrType: n,
						newProduct: a
					});
					else t.calculatedName = (0, v.getBrandAndProductName)(t), this.onClickClose(t)
				}
			}, {
				key: "addNewProduct",
				value: function() {
					var e = f.
					default.extend({}, this.state.newProduct), t = this.refs, n = t.brandName, a = t.productName, r = t.colorOrTypeName;
					if (n && (e.brandName = n.value, e.productName = a.value), !e.brandName || !e.productName) return void m.
					default.alert("品牌名和产品名为必填项！");
					e.colorOrTypeName = r.value;
					var o = this.state.selectedProduct;
					o = {
						calculatedName: e.brandName + " " + e.productName,
						brandName: e.brandName,
						productName: e.productName
					}, e.colorOrTypeName && (o.calculatedSkuName = "型号/色号: " + e.colorOrTypeName, o.colorOrTypeName = e.colorOrTypeName), this.props.onClickClose(o)
				}
			}, {
				key: "handleComposition",
				value: function(e) {
					"compositionend" === e.type ? (g = !1, this.onSearchInputChange(e)) : g = !0
				}
			}, {
				key: "onSearchInputChange",
				value: function(e) {
					var t = e.target.value,
						n = (0, f.
						default)(this.refs.resultList);
					g || (t.length > 0 ? (n.removeClass("web2-sp-result-list-hide"), this.getProductsThrottle(t)) : n.addClass("web2-sp-result-list-hide"))
				}
			}, {
				key: "onClickClose",
				value: function(e) {
					this.props.onClickClose(e)
				}
			}, {
				key: "onMouseDown",
				value: function(e) {
					this.move = !0;
					var t = this.refs.wrapper;
					this.initialPos = {
						x: parseFloat(window.getComputedStyle(t).getPropertyValue("left")),
						y: parseFloat(window.getComputedStyle(t).getPropertyValue("top"))
					}, this.startPos = {
						x: e.pageX,
						y: e.pageY
					}
				}
			}, {
				key: "onMouseMove",
				value: function(e) {
					if (this.move) {
						this.currentPos = {
							x: e.pageX,
							y: e.pageY
						};
						var t = this.refs.wrapper,
							n = this.currentPos.y - this.startPos.y + this.initialPos.y,
							a = this.currentPos.x - this.startPos.x + this.initialPos.x,
							r = -t.offsetWidth / 2,
							o = window.innerWidth - t.offsetWidth / 2,
							l = -t.offsetHeight / 2,
							i = window.innerHeight - t.offsetHeight / 2;
						n < l && (n = l), n >= i && (n = i), a < r && (a = r), a >= o && (a = o), t.style.top = n + "px", t.style.left = a + "px"
					}
				}
			}, {
				key: "onMouseUp",
				value: function() {
					this.move = !1
				}
			}, {
				key: "componentDidMount",
				value: function() {
					var e = this.props,
						t = e.hideProductModal,
						n = e.product;
					if (!t) {
						var a = this.refs.wrapper,
							r = (window.innerWidth - a.offsetWidth) / 2,
							o = (window.innerHeight - a.offsetHeight) / 2;
						a.style.top = o + "px", a.style.left = r + "px"
					} !! n && this.selectProduct(n)
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = this.state,
						n = t.selectedProduct,
						a = t.skus,
						r = t.isChoosingProduct,
						o = t.isAddingNewColorOrType,
						l = t.newProduct;
					return this.props.hideProductModal ? null : c.
					default.createElement("div", {
						className: "web2-ip-layer"
					}, c.
					default.createElement("div", {
						className: "web2-ip-wrapper",
						ref: "wrapper",
						onMouseDown: this.onMouseDown,
						onMouseMove: this.onMouseMove,
						onMouseOut: this.onMouseUp,
						onMouseUp: this.onMouseUp
					}, function() {
						return l ? c.
						default.createElement("div", {
							className: "web2-add-product-dialogue"
						}, c.
						default.createElement("h3", {
							className: "web2-ap-header"
						}, o ? "输入色号/型号" : "输入产品名"), c.
						default.createElement("div", {
							className: "web2-new-product-info"
						}, c.
						default.createElement("div", {
							className: "web2-info-item"
						}, c.
						default.createElement("div", {
							className: "info-item-content-wrapper"
						}, c.
						default.createElement("div", {
							className: "info-item-content"
						}, o ? c.
						default.createElement("div", {
							className: "info-item-value"
						}, l.brandName) : c.
						default.createElement("input", {
							type: "text",
							className: "info-item-value-input",
							placeholder: "必填项",
							ref: "brandName"
						}))), c.
						default.createElement("span", {
							className: "info-item-label"
						}, "品牌名")), c.
						default.createElement("div", {
							className: "web2-info-item"
						}, c.
						default.createElement("div", {
							className: "info-item-content-wrapper"
						}, c.
						default.createElement("div", {
							className: "info-item-content"
						}, o ? c.
						default.createElement("div", {
							className: "info-item-value"
						}, l.productName) : c.
						default.createElement("input", {
							type: "text",
							className: "info-item-value-input",
							placeholder: "必填项",
							ref: "productName"
						}))), c.
						default.createElement("span", {
							className: "info-item-label"
						}, "产品名")), c.
						default.createElement("div", {
							className: "web2-info-item"
						}, c.
						default.createElement("div", {
							className: "info-item-content-wrapper"
						}, c.
						default.createElement("div", {
							className: "info-item-content"
						}, c.
						default.createElement("input", {
							type: "text",
							className: "info-item-value-input",
							ref: "colorOrTypeName"
						}))), c.
						default.createElement("span", {
							className: "info-item-label"
						}, "型号/色号")), c.
						default.createElement("div", {
							className: "hint-info"
						}, c.
						default.createElement("span", null, "小编会根据您的信息完善产品库")), c.
						default.createElement("div", {
							className: "confirm-button-wrapper"
						}, c.
						default.createElement("button", {
							className: "btn confirm-button",
							onClick: e.addNewProduct
						}, "确 定"))), c.
						default.createElement("div", {
							className: "btn web2-ap-dialogue-close-btn",
							onClick: e.onClickClose
						})) : r ? c.
						default.createElement("div", {
							className: "web2-search-product-dialogue"
						}, c.
						default.createElement("div", {
							className: "web2-sp-input-wrapper"
						}, c.
						default.createElement("span", {
							className: "web2-sp-search-icon"
						}), c.
						default.createElement("input", {
							className: "web2-sp-input",
							placeholder: "搜索产品",
							onCompositionStart: e.handleComposition,
							onCompositionUpdate: e.handleComposition,
							onCompositionEnd: e.handleComposition,
							onChange: e.onSearchInputChange
						})), c.
						default.createElement("ul", {
							className: "web2-sp-result-list web2-sp-result-list-hide",
							ref: "resultList"
						}, e.state.products.map(function(t, n) {
							return c.
							default.createElement(y.
							default, {
								key: n,
								product: t,
								onClick: e.selectProduct
							})
						})), c.
						default.createElement("div", {
							className: "web2-sp-dialogue-close-btn",
							onClick: e.onClickClose
						})) : c.
						default.createElement("div", {
							className: "web2-choose-sku-dialogue"
						}, c.
						default.createElement("div", {
							className: "web2-cs-dialogue-header"
						}, c.
						default.createElement("h3", null, (0, v.getSkuResultsTitle)(n, a))), c.
						default.createElement("div", {
							className: "web2-cs-dialogue-body"
						}, c.
						default.createElement("ul", null, a.map(function(t, n) {
							return c.
							default.createElement("li", {
								key: n
							}, c.
							default.createElement("a", {
								onClick: function() {
									e.selectSku(t)
								}
							}, t.mixName, "1111"))
						}))), c.
						default.createElement("div", {
							className: "web2-cs-dialogue-footer"
						}, c.
						default.createElement("button", {
							className: "web2-cs-ok-btn",
							onClick: function() {
								e.selectSku()
							}
						}, "我不想选")), c.
						default.createElement("div", {
							className: "btn web2-cs-dialogue-close-btn",
							onClick: e.onClickClose
						}))
					}()))
				}
			}]), t
		}(c.
		default.Component);
	E.propTypes = {
		onClickClose: c.
		default.PropTypes.func.isRequired,
		product: c.
		default.PropTypes.object,
		hideProductModal: c.
		default.PropTypes.bool
	}, E.defaultProps = {
		product: null,
		hideProductModal: !1
	}, t.
	default = E
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(361),
		f = a(s);
	n(476);
	var d = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.toggleStyle = n.toggleStyle.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "toggleStyle",
			value: function(e) {
				this.props.toggleStyle(e)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.type,
					n = e.isShowPrivacy;
				return c.
				default.createElement("div", {
					className: "publish-bar"
				}, this.props.richText && c.
				default.createElement(f.
				default, {
					onToggle: this.toggleStyle
				}), "note" === t || !1 === n ? null : c.
				default.createElement("div", {
					className: "pvc"
				}, c.
				default.createElement("div", {
					className: "privacy-bar-img"
				}), c.
				default.createElement("div", {
					className: "privacy-bar-btn",
					onClick: this.props.onClickPravicy
				}, "保存为草稿")), c.
				default.createElement("div", {
					className: "publish-bar-btn",
					onClick: this.props.onClick
				}, "发布"))
			}
		}]), t
	}(c.
	default.Component);
	d.propTypes = {
		onClickPravicy: c.
		default.PropTypes.func,
		onClick: c.
		default.PropTypes.func.isRequired,
		richText: c.
		default.PropTypes.bool,
		type: c.
		default.PropTypes.oneOf(["repo", "note"]),
		isShowPrivacy: c.
		default.PropTypes.bool
	}, d.defaultProps = {
		onClickPravicy: function() {},
		richText: !1,
		type: "repo",
		isShowPrivacy: !1
	}, t.
	default = d
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(218),
		f = a(s);
	n(477);
	var d = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleChange = n.handleChange.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "handleChange",
			value: function(e) {
				this.props.onChange(e)
			}
		}, {
			key: "render",
			value: function() {
				return c.
				default.createElement("div", null, c.
				default.createElement(f.
				default, {
					value: this.props.value,
					onChange: this.handleChange,
					addOnBlur: !0,
					onlyUnique: !0,
					maxTags: 10,
					inputProps: {
						className: "react-tagsinput-input",
						placeholder: "最多添加10个标签，用回车隔开"
					}
				}))
			}
		}]), t
	}(c.
	default.Component);
	d.propTypes = {
		onChange: c.
		default.PropTypes.func.isRequired,
		value: c.
		default.PropTypes.array
	}, d.defaultProps = {
		value: []
	}, t.
	default = d
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = function(e, t, n, a) {
		var r = "login" === e ? "78e815c15f034b8ab4f9aee451e42c02" : "7142c3ddc7bb498b9fe24728d1e3e2e7";
		initNECaptcha({
			captchaId: r,
			element: t,
			mode: "float",
			width: 360,
			onReady: function() {},
			onVerify: function(e, t) {
				e || n(r, t.validate)
			}
		}, function(e) {
			a(e)
		}, function(e) {})
	};
	t.
	default = a
}, , , function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {}, , , , , , , , , , , , , , , , , , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(8),
		f = n(1),
		d = a(f),
		p = n(247),
		h = a(p),
		m = n(130),
		v = a(m),
		y = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.handleComment = n.handleComment.bind(n), n.handleHideForm = n.handleHideForm.bind(n), n.handleDelete = n.handleDelete.bind(n), n.form = null, n.state = {
					showForm: !1
				}, n
			}
			return l(t, e), i(t, [{
				key: "checkLogin",
				value: function(e) {
					var t = this.props,
						n = t.isLogin,
						a = t.onLogin;
					return !!n || (a(e), !1)
				}
			}, {
				key: "handleComment",
				value: function() {
					window.$eventTrace({
						category: "Comment",
						action: "replay",
						eventLabel: this.props.type
					}), this.checkLogin(this.handleComment) && this.setState(function(e) {
						return {
							showForm: !e.showForm
						}
					})
				}
			}, {
				key: "handleDelete",
				value: function() {
					window.$eventTrace({
						category: "Comment",
						action: "remove",
						eventLabel: this.props.type
					}), this.props.onDeleteComment(this.props.data.id)
				}
			}, {
				key: "handleHideForm",
				value: function() {
					this.setState({
						showForm: !1
					})
				}
			}, {
				key: "render",
				value: function() {
					var e = this.props,
						t = e.isLogin,
						n = e.onLogin,
						a = e.onAddComment,
						r = e.id,
						o = e.type,
						l = e.data,
						i = e.userId,
						u = e.toastRoot,
						f = l.target,
						p = l.author,
						m = l.displayCreateTime,
						y = l.content,
						b = l.images,
						g = t && p.id === i,
						E = p.vip ? c.
					default.createElement("span", {
						className: "comment-icon-vip comment-icon"
					}) : null, w = g ? c.
					default.createElement("span", {
						className: "operate"
					}, c.
					default.createElement("span", {
						className: "show-hover",
						onClick: this.handleDelete
					}, "删除  "), "|", c.
					default.createElement("span", {
						className: "show-hover",
						onClick: this.handleComment
					}, "  回复")) : c.
					default.createElement("span", {
						className: "operate"
					}, c.
					default.createElement("span", {
						className: "show-hover",
						onClick: this.handleComment
					}, "回复")), _ = d.
					default.nosUrl(p.avatarUrl, "96x96");
					return c.
					default.createElement("li", {
						className: "clearfix"
					}, c.
					default.createElement("div", {
						className: "clearfix"
					}, c.
					default.createElement("div", {
						className: "comment-info"
					}, c.
					default.createElement(s.Link, {
						to: "/user/" + p.id
					}, c.
					default.createElement("div", {
						className: "avatar-wrapper"
					}, c.
					default.createElement("img", {
						className: "avatar",
						src: _,
						alt: "头像"
					}), E)), c.
					default.createElement("h6", null, c.
					default.createElement(s.Link, {
						to: "/user/" + p.id
					}, p.name)), c.
					default.createElement("h6", {
						className: "time"
					}, m), w), c.
					default.createElement("div", {
						className: "comment-content"
					}, c.
					default.createElement("p", {
						className: "content"
					}, y), b && b.length > 0 ? c.
					default.createElement(h.
					default, {
						images: b
					}) : null, f ? c.
					default.createElement("div", {
						className: "target"
					}, 0 !== f.status ? c.
					default.createElement("p", {
						className: "cnt empty"
					}, "该评论已删除") : c.
					default.createElement("div", {
						className: "cnt"
					}, c.
					default.createElement("p", null, c.
					default.createElement(s.Link, {
						to: "/user/" + p.id,
						className: "name"
					}, f.name, ": "), f.content), f.images && f.images.length > 0 ? c.
					default.createElement(h.
					default, {
						images: f.images
					}) : null)) : null, c.
					default.createElement(v.
					default, {
						inside: !0,
						show: this.state.showForm,
						id: r,
						type: o,
						toastRoot: u,
						isLogin: t,
						onLogin: n,
						originId: l.id,
						targetName: p.name,
						onAddComment: a,
						onHideForm: this.handleHideForm
					}))))
				}
			}]), t
		}(c.
		default.Component);
	t.
	default = y
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(245),
		d = a(f),
		p = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.state = {}, n
			}
			return l(t, e), u(t, [{
				key: "render",
				value: function() {
					var e = this,
						t = this.props.data.map(function(t) {
							return s.
							default.createElement(d.
							default, i({}, e.props, {
								data: t,
								key: t.id
							}))
						});
					return s.
					default.createElement("ul", {
						className: "comment-list"
					}, t)
				}
			}]), t
		}(s.
		default.Component);
	t.
	default = p
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(1),
		d = a(f),
		p = n(5),
		h = a(p),
		m = n(132),
		v = a(m),
		y = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.handleClick = n.handleClick.bind(n), n
			}
			return l(t, e), i(t, [{
				key: "handleClick",
				value: function(e) {
					var t = this.props,
						n = t.images,
						a = t.meixueAccounts,
						r = h.
					default.concat(h.
					default.slice(n, e), h.
					default.slice(n, 0, e));
					v.
					default.show({
						images: r,
						currentNum: e,
						meixueAccounts: a
					})
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = this.props,
						n = t.images,
						a = t.meixueAccounts,
						r = n.map(function(e) {
							return e ? d.
							default.nosUrl(e, "160y160", 1) : ""
						});
					return c.
					default.createElement("ul", {
						className: "images clearfix"
					}, r.map(function(t, n) {
						return c.
						default.createElement("li", {
							key: n
						}, c.
						default.createElement("img", {
							src: t,
							alt: "图片",
							onClick: function() {
								e.handleClick(n)
							},
							onContextMenu: function(e) {
								!a && e.preventDefault()
							}
						}))
					}))
				}
			}]), t
		}(c.
		default.Component);
	y.ProtoTypes = {
		images: c.
		default.PropTypes.array.isRequired
	};
	var b = function(e) {
		return {
			meixueAccounts: !! e.user.info.meixueAccounts
		}
	};
	t.
	default = (0, s.connect)(b)(y)
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function r(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		i = n(0),
		u = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(i);
	n(409);
	var c = function(e) {
		function t(e) {
			return a(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return o(t, e), l(t, [{
			key: "handleClick",
			value: function() {
				window.$eventTrace({
					category: "FollowWeibo",
					action: "jump",
					eventLabel: "weibo"
				})
			}
		}, {
			key: "render",
			value: function() {
				return u.
				default.createElement("div", {
					className: "footer-wrapper",
					style: {
						position: "static"
					},
					id: "footer"
				}, u.
				default.createElement("div", {
					className: "infos"
				}, u.
				default.createElement("div", {
					className: "cnt cnt-1"
				}, u.
				default.createElement("div", {
					className: "wb"
				}, u.
				default.createElement("div", {
					className: "logo"
				}), u.
				default.createElement("div", {
					className: "ctx"
				}, u.
				default.createElement("div", {
					className: "tt"
				}, "@网易美学"), u.
				default.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "http://weibo.com/neteasebeauty",
					className: "btn",
					onClick: this.handleClick
				}, "关注")))), u.
				default.createElement("div", {
					className: "cnt cnt-2"
				}, u.
				default.createElement("div", {
					className: "wx"
				}, u.
				default.createElement("div", {
					className: "logo"
				}), u.
				default.createElement("div", {
					className: "ctx"
				}, u.
				default.createElement("div", {
					className: "tt"
				}, "扫码关注", u.
				default.createElement("br", null), "微信公众号")))), u.
				default.createElement("div", {
					className: "cnt cnt-3"
				}, u.
				default.createElement("div", {
					className: "ct"
				}, "商务合作：meixue@vip.126.com", u.
				default.createElement("br", null), "加入我们：", u.
				default.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "http://163.lu/lfnSc0"
				}, "http://163.lu/lfnSc0")))), u.
				default.createElement("div", {
					className: "cprt"
				}, u.
				default.createElement("ul", {
					className: "line"
				}, u.
				default.createElement("li", null, u.
				default.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "http://www.163.com/"
				}, "网易首页")), u.
				default.createElement("li", null, u.
				default.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "http://gb.corp.163.com/gb/about/overview.html"
				}, "公司简介")), u.
				default.createElement("li", null, u.
				default.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "/sitemap"
				}, "网站地图")), u.
				default.createElement("li", null, u.
				default.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://m.mei.163.com/"
				}, "访问手机版")), u.
				default.createElement("li", null, u.
				default.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "http://www.kaola.com/"
				}, "网易考拉海购")), u.
				default.createElement("li", null, u.
				default.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "http://you.163.com/?from=web_in_yl"
				}, "网易严选")), u.
				default.createElement("li", null, u.
				default.createElement("a", {
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://manhua.163.com/"
				}, "网易漫画"))), u.
				default.createElement("div", {
					className: "line"
				}, "网易公司版权所有 © 1997-2017 增值电信业务经营许可证 B1.B2-20090185 ICP备 浙B2-20090185")))
			}
		}]), t
	}(u.
	default.Component);
	t.
	default = c
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(9),
		f = a(s);
	n(147);
	var d = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				show: !1
			}, n
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this,
					t = (0, f.
					default)({
						"dropdown-menu": !0,
						show: this.state.show,
						"triangle-up": !0,
						hide: !this.state.show
					}),
					n = this.props.listData.map(function(e, t) {
						var n = e.icon ? c.
						default.createElement("i", {
							className: e.icon
						}) : null, a = +new Date;
						return c.
						default.createElement("li", {
							key: a + t
						}, e.href ? e.targetBlank ? c.
						default.createElement("a", {
							href: e.href,
							target: "_blank",
							rel: "noopener noreferrer"
						}, n, e.name) : c.
						default.createElement("a", {
							href: e.href
						}, n, e.name) : c.
						default.createElement("a", {
							onClick: e.click
						}, n, e.name))
					});
				return c.
				default.createElement("div", {
					className: "dropdown",
					onMouseLeave: function() {
						e.setState({
							show: !1
						})
					},
					onMouseEnter: function() {
						e.setState({
							show: !0
						})
					}
				}, this.props.showData, c.
				default.createElement("ul", {
					className: t
				}, n))
			}
		}]), t
	}(c.
	default.Component);
	d.PropTypes = {
		showData: c.
		default.PropTypes.element,
		listData: c.
		default.PropTypes.array
	}, t.
	default = d
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(1),
		i = a(l),
		u = n(17),
		c = a(u),
		s = function(e, t) {
			var n = "";
			return Object.keys(c.
			default.resType).forEach(function(t) {
				c.
				default.resType[t] === e && (n = t)
			}), "urlScheme" === n ? t : "/" + n + "/" + t
		}, f = function(e) {
			var t = e.menuData,
				n = t.hasLevel2,
				a = t.children,
				r = n ? a.map(function(e) {
					return o.
					default.createElement("div", {
						className: "level2-menu",
						key: i.
						default.getKey()
					}, o.
					default.createElement("h1", {
						className: "level2-name"
					}, e.name), o.
					default.createElement("div", {
						className: "level3-tags"
					}, e.children && e.children.map(function(e, t) {
						return o.
						default.createElement("a", {
							className: "level3-tag",
							href: s(e.type, e.resId),
							key: "level3_" + t
						}, e.name, e.hot && o.
						default.createElement("span", {
							className: "icon icon-hot"
						}))
					})))
				}) : null;
			return o.
			default.createElement("div", {
				className: "submenu"
			}, n ? o.
			default.createElement("div", null, r, o.
			default.createElement("div", {
				className: "seperator"
			})) : o.
			default.createElement("div", null, o.
			default.createElement("div", {
				className: "level3-menu"
			}, a && a.map(function(e, t) {
				return o.
				default.createElement("a", {
					className: "level3-tag",
					href: s(e.type, e.resId),
					key: "level3_" + t
				}, e.name, e.hot && o.
				default.createElement("span", {
					className: "icon icon-hot"
				}))
			}))))
		};
	t.
	default = f
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(5),
		f = a(s),
		d = n(9),
		p = a(d),
		h = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.handleMouseOver = n.handleMouseOver.bind(n), n.handleMouseOut = n.handleMouseOut.bind(n), n.handleClick = n.handleClick.bind(n), n.state = {
					isHovered: !1
				}, n
			}
			return l(t, e), i(t, [{
				key: "check999",
				value: function(e) {
					return 0 === e ? this.props.tip : e > 999 ? "999+" : e
				}
			}, {
				key: "handleMouseOver",
				value: function() {
					this.setState({
						isHovered: !0
					})
				}
			}, {
				key: "handleMouseOut",
				value: function() {
					this.setState({
						isHovered: !1
					})
				}
			}, {
				key: "handleClick",
				value: function() {
					this.props.clickButton()
				}
			}, {
				key: "componentDidMount",
				value: function() {}
			}, {
				key: "render",
				value: function() {
					var e = this.check999(this.props.value),
						t = (0, p.
						default)({
							tip: !0,
							"tip-show": this.state.isHovered,
							"tip-hide": !this.state.isHovered
						}),
						n = f.
					default.endsWith(this.props.className, "fill") ? "red" : null;
					return c.
					default.createElement("li", {
						onMouseOver: this.handleMouseOver,
						onMouseOut: this.handleMouseOut,
						onClick: this.handleClick
					}, c.
					default.createElement("span", {
						className: "icon " + this.props.className
					}), c.
					default.createElement("span", {
						className: n
					}, e), c.
					default.createElement("div", {
						className: t
					}, this.props.tip))
				}
			}]), t
		}(c.
		default.Component);
	h.propsType = {
		value: c.
		default.PropTypes.number,
		tip: c.
		default.PropTypes.string,
		className: c.
		default.PropTypes.string
	}, t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(9),
		f = a(s),
		d = n(2),
		p = a(d),
		h = n(17),
		m = a(h),
		v = n(87),
		y = a(v),
		b = n(1),
		g = a(b),
		E = n(96),
		w = a(E),
		_ = {
			share: "/newApi/share"
		}, N = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.handleMouseOver = n.handleMouseOver.bind(n), n.handleMouseOut = n.handleMouseOut.bind(n), n.handleMouseOverWechat = n.handleMouseOverWechat.bind(n), n.handleMouseOutWechat = n.handleMouseOutWechat.bind(n), n.state = {
					isHovered: !1,
					isHoverWechat: !1,
					weiboUrl: "",
					qzoneUrl: "",
					url: ""
				}, n
			}
			return l(t, e), i(t, [{
				key: "handleMouseOver",
				value: function() {
					this.setState({
						isHovered: !0
					})
				}
			}, {
				key: "handleMouseOut",
				value: function() {
					this.setState({
						isHovered: !1
					})
				}
			}, {
				key: "handleMouseOverWechat",
				value: function() {
					this.setState({
						isHoverWechat: !0
					})
				}
			}, {
				key: "handleMouseOutWechat",
				value: function() {
					this.setState({
						isHoverWechat: !1
					})
				}
			}, {
				key: "handleShare",
				value: function(e) {
					window.$eventTrace({
						category: e,
						action: "share",
						eventLabel: this.props.type
					})
				}
			}, {
				key: "init",
				value: function(e) {
					this.setState({
						url: window.location.href
					});
					var t = e.coverUrl,
						n = e.text;
					t ? this.setState({
						weiboUrl: (0, y.
						default)("weibo", t, n),
						qzoneUrl: (0, y.
						default)("qzone", t, n)
					}) : (this.getShareInfo(2, e), this.getShareInfo(3, e))
				}
			}, {
				key: "getShareInfo",
				value: function(e, t) {
					var n = this,
						a = t.type,
						r = t.id;
					(0, p.
					default)(_.share, {
						body: {
							type: m.
							default.resType[a],
							id: r,
							field: e
						}
					}).then(function(t) {
						var r = t.result.img,
							o = t.result.text;
						switch (a) {
							case "note":
								r = g.
							default.nosUrl(r, "600y600");
							break;
							case "repo":
								r = g.
							default.nosUrl(r, "900y600")
						}
						2 === e ? n.setState({
							weiboUrl: (0, y.
							default)("weibo", r, o)
						}) : n.setState({
							qzoneUrl: (0, y.
							default)("qzone", r, o)
						})
					})
				}
			}, {
				key: "componentDidMount",
				value: function() {
					this.init(this.props)
				}
			}, {
				key: "componentWillReceiveProps",
				value: function(e) {
					this.props.id !== e.id && this.init(e)
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = this.state,
						n = t.weiboUrl,
						a = t.qzoneUrl,
						r = t.url,
						o = (0, f.
						default)({
							relay: !0,
							"relay-show": this.state.isHovered,
							"relay-hide": !this.state.isHovered
						}),
						l = (0, f.
						default)({
							"qr-show": this.state.isHoverWechat,
							"qr-hide": !this.state.isHoverWechat,
							qr: !0
						}),
						i = {
							value: r,
							bgColor: "#FFFFFF",
							fgColor: "#000000",
							level: "L"
						};
					return c.
					default.createElement("li", {
						onMouseOver: this.handleMouseOver,
						onMouseOut: this.handleMouseOut
					}, c.
					default.createElement("span", {
						className: "icon " + this.props.className
					}), c.
					default.createElement("span", null, this.props.children), c.
					default.createElement("div", {
						className: o
					}, c.
					default.createElement("ul", null, c.
					default.createElement("li", null, c.
					default.createElement("a", {
						href: n,
						target: "_blank",
						className: "share-str",
						onClick: function() {
							e.handleShare("weiboShare")
						}
					}, "分享到微博")), c.
					default.createElement("li", {
						onMouseOver: this.handleMouseOverWechat,
						onMouseOut: this.handleMouseOutWechat
					}, c.
					default.createElement("span", {
						className: "share-str"
					}, "分享到微信"), c.
					default.createElement("div", {
						className: l
					}, c.
					default.createElement(w.
					default, i))), c.
					default.createElement("li", null, c.
					default.createElement("a", {
						href: a,
						target: "_blank",
						className: "share-str",
						onClick: function() {
							e.handleShare("QzoneShare")
						}
					}, "分享到空间")))))
				}
			}]), t
		}(c.
		default.Component);
	N.propsType = {
		className: c.
		default.PropTypes.string,
		text: c.
		default.PropTypes.string,
		coverUrl: c.
		default.PropTypes.string,
		type: c.
		default.PropTypes.string,
		id: c.
		default.PropTypes.string
	}, t.
	default = N
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(2),
		d = a(f),
		p = n(9),
		h = a(p),
		m = n(131),
		v = a(m),
		y = n(144),
		b = a(y),
		g = {
			session: "/newApi/session/v2",
			getUser: "/newApi/ms/user/current"
		}, E = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.state = {
					area: "+86",
					phone: "",
					password: "",
					type: "1",
					errorMsg: "",
					yidunCaptchaValid: !1,
					showYidunCaptcha: !1
				}, n.yidunCaptchaInstance = null, n.submit = n.submit.bind(n), n.handleLogin = n.handleLogin.bind(n), n.checkPhone = n.checkPhone.bind(n), n.checkPwd = n.checkPwd.bind(n), n
			}
			return l(t, e), u(t, [{
				key: "fetchLogin",
				value: function(e, t, n) {
					var a = this;
					return (0, d.
					default)(g.session, {
						body: e,
						method: "POST"
					}).then(function(e) {
						t(e.result)
					}).
					catch (function(e) {
						561 === e.code ? (a.state.yidunCaptchaValid && a.setState({
							yidunCaptchaValid: !1
						}), n()) : (a.yidunCaptchaInstance && a.yidunCaptchaInstance.destroy(), a.yidunCaptchaInstance = null, a.setState({
							errorMsg: e.msg
						}))
					})
				}
			}, {
				key: "submit",
				value: function() {
					var e = this,
						t = watchman.getToken(),
						n = this.NECaptchaValidate,
						a = this.state,
						r = a.area,
						o = a.phone,
						l = a.password,
						u = a.type,
						c = this.props.loginCb,
						s = n ? {
							NECaptchaValidate: n,
							antiLoginToken: t
						} : {
							antiLoginToken: t
						};
					this.fetchLogin(i({
						area: r,
						phone: o,
						password: l,
						type: u
					}, s), c, function() {
						if (e.yidunCaptchaInstance) return e.yidunCaptchaInstance.refresh();
						e.setState({
							showYidunCaptcha: !0
						}), (0, b.
						default)("login", e.yidunCaptchaNode, function(t, n) {
							e.NECaptchaValidate = n, e.setState({
								yidunCaptchaValid: !0
							})
						}, function(t) {
							e.yidunCaptchaInstance = t
						})
					}), watchman.reset()
				}
			}, {
				key: "checkPhone",
				value: function(e) {
					var t = this.state.area,
						n = "";
					return n = e && "+86" === t && !/^1\d{10}$/.test(e) ? "请输入11位数字的手机号" : "", this.setState({
						errorMsg: n
					}), !n
				}
			}, {
				key: "checkPwd",
				value: function(e) {
					var t = "";
					return t = e ? "" : "请输入密码", this.setState({
						errorMsg: t
					}), !t
				}
			}, {
				key: "handlePhoneChanged",
				value: function(e) {
					this.setState({
						phone: e.target.value
					}), this.checkPhone(e.target.value)
				}
			}, {
				key: "handlePwdChanged",
				value: function(e) {
					this.setState({
						password: e.target.value
					})
				}
			}, {
				key: "componentDidMount",
				value: function() {
					(0, d.
					default)(g.getUser).then(function(e) {
						200 === e.code && (window.location.href = "/")
					})
				}
			}, {
				key: "handleLogin",
				value: function(e) {
					var t = this;
					e.preventDefault();
					var n = this.state,
						a = n.phone,
						r = n.password,
						o = n.yidunCaptchaValid,
						l = n.showYidunCaptcha,
						i = "";
					if (!a) return i = "请输入手机号", void this.setState({
						errorMsg: i
					});
					this.checkPhone(a) && this.checkPwd(r) && (!o && l || watchman.flush(function() {
						t.submit()
					}))
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = this.state,
						n = {
							display: t.errorMsg.length > 0 ? "inline-block" : "none"
						}, a = (0, h.
						default)({
							"confirm-btn": !0,
							"hide-captcha": !t.showYidunCaptcha
						});
					return s.
					default.createElement("div", {
						className: "phone-login"
					}, s.
					default.createElement("form", null, s.
					default.createElement("div", {
						className: "ipt phone"
					}, s.
					default.createElement(v.
					default, {
						isLogin: !1,
						showCountry: !1,
						onCountryChange: function(t) {
							e.setState({
								area: t
							})
						}
					}), s.
					default.createElement("div", {
						className: "seperate-bar"
					}), s.
					default.createElement("input", {
						value: t.phone,
						onChange: function(t) {
							e.handlePhoneChanged(t)
						},
						type: "text",
						className: "ipt-phone",
						placeholder: "请输入手机号码",
						autoFocus: !0
					})), s.
					default.createElement("input", {
						value: t.password,
						onChange: function(t) {
							e.handlePwdChanged(t)
						},
						type: "password",
						className: "ipt password",
						placeholder: "请输入密码"
					}), s.
					default.createElement("div", {
						className: "error-msg"
					}, s.
					default.createElement("i", {
						className: "icon-error",
						style: n
					}), t.errorMsg), s.
					default.createElement("div", {
						className: "yidun-captcha"
					}, s.
					default.createElement("div", {
						ref: function(t) {
							e.yidunCaptchaNode = t
						}
					}), !t.yidunCaptchaValid && t.showYidunCaptcha ? s.
					default.createElement("div", {
						className: "yidun-captcha-error"
					}, s.
					default.createElement("i", {
						className: "icon-error"
					}), "请拖动滑块完成验证") : null), s.
					default.createElement("div", null, s.
					default.createElement("button", {
						className: a,
						onClick: this.handleLogin
					}, "登 录"))), s.
					default.createElement("div", {
						className: "operations clearfix"
					}, s.
					default.createElement("a", {
						href: "/forget",
						className: "p-forget"
					}, "忘记密码？"), s.
					default.createElement("a", {
						href: "/signup",
						className: "p-signup"
					}, "注册")))
				}
			}]), t
		}(s.
		default.Component);
	t.
	default = E
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e) {
		if (Array.isArray(e)) {
			for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}
	function o(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function l(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function i(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var u, c, s = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		f = n(0),
		d = a(f),
		p = n(9),
		h = a(p),
		m = n(2),
		v = a(m),
		y = n(1),
		b = a(y),
		g = n(12),
		E = a(g);
	n(418);
	var w = {
		UPLOAD: "/newApi/ms/upload/img/detail?width=750&height=0&size=20480&ext=JPG,JPEG,PNG,BMP"
	}, _ = (c = u = function(e) {
		function t(e) {
			o(this, t);
			var n = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				images: []
			}, n.handleDelete = n.handleDelete.bind(n), n.handleUploadImage = n.handleUploadImage.bind(n), n
		}
		return i(t, e), s(t, [{
			key: "handleDelete",
			value: function(e) {
				window.$eventTrace({
					category: "NoteEdit",
					action: "remove",
					eventLabel: "image"
				});
				var t = this.state.images;
				t.splice(e, 1), this.props.onChange(t)
			}
		}, {
			key: "handleUploadImage",
			value: function() {
				var e = this;
				window.$eventTrace({
					category: "NoteEdit",
					action: "add",
					eventLabel: "image"
				});
				var t = this.refs.image.files[0],
					n = this.state.images;
				(0, v.
				default)(w.UPLOAD, {
					method: "POST",
					body: {
						file: t
					},
					formData: !0
				}).then(function(t) {
					e.refs.image.value = "", e.props.onChange([].concat(r(n), [t.result]))
				}).
				catch (function(t) {
					e.refs.image.value = "", E.
					default.show(t.msg || "上传图片失败", 2e3)
				})
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				this.setState({
					images: e.images
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.state.images,
					n = this.props,
					a = n.max,
					r = n.disabled,
					o = t.map(function(t, n) {
						return d.
						default.createElement("li", {
							key: b.
							default.getKey(),
							className: "image-wrapper"
						}, d.
						default.createElement("img", {
							src: b.
							default.nosUrl(t.url, "150y150"),
							alt: ""
						}), d.
						default.createElement("button", {
							type: "button",
							className: "delete-btn",
							onClick: function() {
								e.handleDelete(n)
							}
						}, "×"))
					}),
					l = (0, h.
					default)({
						"upload-btn": !0,
						disabled: r
					});
				return d.
				default.createElement("ul", {
					className: "muti-image-uploader-wrapper clearfix"
				}, o, t.length < a ? d.
				default.createElement("li", {
					className: "image-wrapper"
				}, d.
				default.createElement("div", {
					className: l
				}, r ? null : d.
				default.createElement("input", {
					type: "file",
					accept: "image/png, image/jpeg, image/gif, image/bmp",
					onChange: this.handleUploadImage,
					ref: "image"
				}), d.
				default.createElement("div", {
					className: "img-file-btn"
				}, d.
				default.createElement("div", {
					className: "vertical"
				}, d.
				default.createElement("div", {
					className: "line"
				})), d.
				default.createElement("div", {
					className: "horizon"
				}, d.
				default.createElement("div", {
					className: "line"
				}))))) : null)
			}
		}]), t
	}(d.
	default.Component), u.propTypes = {
		disabled: d.
		default.PropTypes.bool,
		images: d.
		default.PropTypes.array,
		onChange: d.
		default.PropTypes.func.isRequired
	}, u.defaultProps = {
		disabled: !1,
		images: []
	}, c);
	t.
	default = _
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(9),
		f = a(s),
		d = n(522),
		p = a(d);
	n(419);
	var h = function() {}, m = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.onChange = n.onChange.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "onChange",
			value: function(e) {
				this.props.onChange(e)
			}
		}, {
			key: "render",
			value: function() {
				var e = (0, f.
				default)({
					"pagination-wrap": !0,
					clearfix: !0,
					"show-pagi": !! this.props.total,
					"hide-pagi": !this.props.total
				});
				return c.
				default.createElement("div", {
					className: e
				}, c.
				default.createElement(p.
				default, {
					onChange: this.onChange,
					current: this.props.current,
					prefixCls: "xinmei",
					defaultPageSize: this.props.pageSize,
					total: this.props.total
				}))
			}
		}]), t
	}(c.
	default.Component);
	m.PropTypes = {
		onChange: c.
		default.PropTypes.func,
		total: c.
		default.PropTypes.number,
		current: c.
		default.PropTypes.number,
		pageSize: c.
		default.PropTypes.number,
		prefixCls: c.
		default.PropTypes.string
	}, m.defaultProps = {
		onChange: h,
		total: 0,
		current: 1,
		pageSize: 1,
		prefixCls: "xinmei"
	}, t.
	default = m
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u, c = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, s = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		f = n(0),
		d = a(f),
		p = n(9),
		h = a(p),
		m = n(2),
		v = a(m),
		y = n(1),
		b = a(y),
		g = n(5),
		E = a(g);
	n(424);
	var w = {
		SCORE: "/newApi/ms/notescore/list"
	}, _ = (u = i = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				score: 0,
				scoreMap: null
			}, n.handleClick = n.handleClick.bind(n), n
		}
		return l(t, e), s(t, [{
			key: "handleClick",
			value: function(e) {
				var t = this,
					n = this.state.scoreMap;
				Object.keys(n).some(function(a) {
					return n[a].star === e && (t.props.setScore(parseInt(a, 10)), !0)
				})
			}
		}, {
			key: "componentDidMount",
			value: function() {
				var e = this;
				(0, v.
				default)(w.SCORE).then(function(t) {
					var n = t.result || [],
						a = {
							0: {
								star: 0,
								text: "未评价"
							}
						}, r = n.reduce(function(e, t) {
							var n = {};
							return n[t.id] = {
								star: 6 - parseInt(t.id, 10),
								text: t.name
							}, c({}, n, e)
						}, a);
					e.setState({
						scoreMap: r
					})
				}).
				catch (function(e) {})
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				var t = this.state.score;
				e.score !== t && this.setState({
					score: e.score
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.state,
					n = t.score,
					a = t.scoreMap,
					r = this.props.disabled,
					o = a && a[n] || {}, l = o.star,
					i = o.text;
				return d.
				default.createElement("div", {
					className: "score-" + n + " star-bar clearfix"
				}, d.
				default.createElement("span", null, "评价"), d.
				default.createElement("div", {
					className: "star-wrapper"
				}, a ? E.
				default.range(5).map(function(t) {
					var n = (0, h.
					default)({
						icon: !0,
						"icon-star": t >= l,
						"icon-star-fill": t < l,
						disabled: r
					});
					return d.
					default.createElement("span", {
						className: n,
						onClick: function() {
							!r && e.handleClick(t + 1)
						},
						key: b.
						default.getKey()
					})
				}) : null), d.
				default.createElement("span", {
					style: {
						marginLeft: 10
					}
				}, i))
			}
		}]), t
	}(d.
	default.Component), i.propTypes = {
		disabled: d.
		default.PropTypes.bool,
		score: d.
		default.PropTypes.number,
		setScore: d.
		default.PropTypes.func.isRequired
	}, i.defaultProps = {
		disabled: !1,
		score: 0
	}, u);
	t.
	default = _
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(8),
		f = n(1),
		d = a(f);
	n(148);
	var p = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.clickPraise = n.clickPraise.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "clickPraise",
			value: function(e) {
				this.props.clickPraise(e)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.title,
					a = e.emotion,
					r = e.content,
					o = e.praised,
					l = e.praiseCnt,
					i = e.coverUrl,
					u = e.author,
					f = e.clickPraise,
					p = u.avatarUrl,
					h = u.nickname,
					m = u.vip,
					v = {
						id: t,
						title: n,
						emotion: a,
						content: r,
						praised: o,
						praiseCnt: l,
						coverUrl: i,
						author: u
					}, y = void 0;
				switch (a) {
					case 1:
						y = "5星";
						break;
					case 2:
						y = "4星";
						break;
					case 3:
						y = "3星";
						break;
					case 4:
						y = "2星";
						break;
					case 5:
						y = "1星";
						break;
					default:
						y = "1星"
				}
				return c.
				default.createElement("li", {
					className: "note-tag-item"
				}, c.
				default.createElement("a", {
					href: "/note/" + t,
					target: "_blank",
					className: "img-wrapper"
				}, c.
				default.createElement("div", null, c.
				default.createElement("img", {
					src: d.
					default.nosUrl(i, "320y320", !0, "1"),
					alt: "心得封面",
					className: "note-cover"
				}))), c.
				default.createElement("div", {
					className: "content"
				}, c.
				default.createElement("a", {
					className: "title",
					href: "/note/" + t,
					target: "_blank"
				}, n), c.
				default.createElement("div", {
					className: "score"
				}, Number(a) <= 3 ? c.
				default.createElement("span", {
					className: "score-red"
				}, y) : c.
				default.createElement("span", {
					className: "score-grey"
				}, y), r ? c.
				default.createElement("span", {
					className: "text"
				}, " | ", r) : null), c.
				default.createElement("div", {
					className: "author clearfix"
				}, c.
				default.createElement(s.Link, {
					to: "/user/" + u.id
				}, c.
				default.createElement("div", {
					className: "img-wrapper"
				}, c.
				default.createElement("img", {
					src: d.
					default.nosUrl(p, "48y48"),
					alt: "头像"
				}), m ? c.
				default.createElement("span", {
					className: "icon icon-vip-small"
				}) : null)), c.
				default.createElement(s.Link, {
					to: "/user/" + u.id
				}, c.
				default.createElement("span", {
					className: "nickname"
				}, d.
				default.truncate(h, 10, "..."))), c.
				default.createElement("div", {
					className: "praise-cnt"
				}, o ? c.
				default.createElement("span", {
					className: "icon icon-thumbs-up-fill",
					onClick: function() {
						f(v)
					}
				}) : c.
				default.createElement("span", {
					className: "icon icon-thumbs-up",
					onClick: function() {
						f(v)
					}
				}), l > 0 ? c.
				default.createElement("span", {
					className: "praise"
				}, d.
				default.handleCountTo999(l)) : c.
				default.createElement("span", {
					className: "praise"
				}, "赞")))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = p
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(2),
		d = a(f),
		p = n(13),
		h = a(p),
		m = n(1),
		v = a(m),
		y = n(3),
		b = n(27),
		g = a(b),
		E = n(22),
		w = a(E),
		_ = n(4),
		N = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(_),
		C = n(17),
		O = a(C),
		T = n(12),
		k = a(T),
		P = n(5),
		S = a(P),
		j = n(257),
		L = a(j);
	n(148), n(152);
	var x = {
		USER_INFO_PREFIX: "/newApi/userInfo",
		USER_PREFIX: "/newApi/user",
		NOTE_PREFIX: "/newApi/note",
		PRAISE: "/newApi/praise",
		TAG_PREFIX: "/newApi/tag",
		SEARCH: "newApi/search",
		CURRENT: "/newApi/ms/user/current"
	}, I = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.current = 1, n.canGet = !0, n.getList = n.getList.bind(n), n.clickPraise = n.clickPraise.bind(n), n
		}
		return l(t, e), u(t, [{
			key: "getList",
			value: function(e) {
				var t = this,
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
				if (this.canGet) {
					this.canGet = !1;
					var a = this.props,
						r = a.query,
						o = a.changeList,
						l = a.type,
						i = void 0,
						u = this.current,
						c = 10 * u;
					i = "search" === l ? (0, d.
					default)("" + x.SEARCH, {
						method: "GET",
						body: {
							type: O.
							default.resType.note,
							offset: c,
							limit: n,
							query: r
						}
					}) : (0, d.
					default)(x.TAG_PREFIX + "/" + r + "/notes", {
						method: "GET",
						body: {
							offset: c,
							limit: n
						}
					}), i.then(function(n) {
						t.canGet = !0;
						var a = e.concat(n.result.list || []);
						o(a, n.result.hasNext), t.current = ++u
					})
				}
			}
		}, {
			key: "clickPraise",
			value: function(e) {
				var t = this.props,
					n = t.isLogin,
					a = t.login,
					r = t.list,
					o = t.hasNext,
					l = t.changeList,
					u = e.id,
					c = e.praised,
					s = e.praiseCnt,
					f = c ? x.PRAISE + "/delete" : "" + x.PRAISE;
				if (window.$eventTrace({
					category: "Praise",
					action: c ? "remove" : "add",
					eventLabel: "note"
				}), !n) return a();
				(0, d.
				default)(f, {
					method: "POST",
					body: {
						type: 2,
						id: u
					}
				}).then(function(t) {
					if (200 === t.code) {
						var n = S.
						default.findIndex(r, function(e) {
							return e.id === u
						});
						if (~n) {
							var a = i({}, e, {
								praised: !c,
								praiseCnt: c ? s - 1 : s + 1
							});
							l((0, g.
							default)(r, {
								$splice: [
									[n, 1, a]
								]
							}), o)
						}
					}
				}).
				catch (function() {
					k.
					default.show(c ? "取消失败" : "点赞失败", 2e3)
				})
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				if (!e.isLogin && this.props.isLogin) {
					var t = this.props,
						n = t.list,
						a = t.changeList,
						r = t.hasNext;
					a(n.map(function(e) {
						return i({}, e, {
							praised: !1
						})
					}), r)
				} else e.isLogin && !this.props.isLogin && (this.current = 0, this.getList([]))
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = t.list,
					a = t.hasNext,
					r = n.map(function(t) {
						return s.
						default.createElement(L.
						default, {
							id: t.id,
							title: t.title,
							emotion: t.emotion,
							coverUrl: t.coverUrl,
							content: t.content,
							praised: t.praised,
							praiseCnt: t.praiseCnt,
							author: t.author,
							clickPraise: e.clickPraise,
							key: v.
							default.getKey()
						})
					});
				return s.
				default.createElement("div", null, s.
				default.createElement("ul", {
					className: "col-note-list clearfix",
					style: {
						minHeight: "550px"
					}
				}, r), s.
				default.createElement("div", {
					className: "tab-loading-more"
				}, n.length > 0 && s.
				default.createElement(h.
				default, {
					paginationType: "hasNext",
					hasNext: a,
					bufferHeight: 400,
					dotInfo: this.props.dotInfo,
					getList: function() {
						e.getList(n)
					},
					endText: "没有更多心得啦~"
				})))
			}
		}]), t
	}(s.
	default.Component),
		R = function(e, t) {
			var n = t.type,
				a = "tagNote";
			return "search" === n && (a = "searchNote"), {
				list: e[a].list || [],
				hasNext: e[a].hasNext,
				isLogin: e.user.isLogin
			}
		}, M = function(e, t) {
			var n = t.type;
			return {
				changeList: function(t, a) {
					e("search" === n ? {
						type: "SET_SEARCH_NOTE",
						list: t,
						hasNext: a
					} : {
						type: "SET_TAG_NOTE",
						list: t,
						hasNext: a
					})
				},
				login: function() {
					return new Promise(function(t) {
						w.
						default.show({
							onLoginSucceed: function(n) {
								e({
									type: N.LOGIN_SUCCESS,
									info: n.userInfo
								}), t()
							}
						})
					})
				}
			}
		};
	t.
	default = (0, y.connect)(R, M)(I)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(1),
		f = a(s);
	n(149);
	var d = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.coverUrl,
					a = e.display,
					r = e.noteCnt;
				return c.
				default.createElement("li", {
					className: "product-tag-item"
				}, c.
				default.createElement("a", {
					href: "/product/" + t,
					target: "_blank"
				}, c.
				default.createElement("div", {
					className: "img-wrapper"
				}, c.
				default.createElement("img", {
					src: f.
					default.nosUrl(n, "280y280", !0, "1"),
					alt: "产品封面"
				})), c.
				default.createElement("div", {
					className: "content"
				}, c.
				default.createElement("div", {
					className: "name1",
					href: "/product/" + t,
					target: "_blank"
				}, a.name1), c.
				default.createElement("div", {
					className: "name2",
					href: "/product/" + t,
					target: "_blank"
				}, a.name2), c.
				default.createElement("span", {
					className: "category"
				}, a.categoryNames), r > 0 ? c.
				default.createElement("span", {
					className: "noteCnt"
				}, f.
				default.handleCountTo999(r), "篇心得") : null)))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = d
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(2),
		f = a(s),
		d = n(1),
		p = a(d),
		h = n(3),
		m = n(17),
		v = a(m),
		y = n(13),
		b = a(y),
		g = n(259),
		E = a(g);
	n(149), n(152);
	var w = {
		TAG_PREFIX: "/newApi/tag",
		SEARCH: "newApi/search"
	}, _ = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.current = 1, n.canGet = !0, n.getList = n.getList.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "getList",
			value: function() {
				var e = this,
					t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
				if (this.canGet) {
					this.canGet = !1;
					var n = this.props,
						a = n.list,
						r = n.query,
						o = n.changeList,
						l = n.type,
						i = void 0,
						u = this.current,
						c = 10 * u;
					i = "search" === l ? (0, f.
					default)("" + w.SEARCH, {
						method: "GET",
						body: {
							type: v.
							default.resType.product,
							offset: c,
							limit: t,
							query: r
						}
					}) : (0, f.
					default)(w.TAG_PREFIX + "/" + r + "/products", {
						method: "GET",
						body: {
							offset: c,
							limit: t
						}
					}), i.then(function(t) {
						e.canGet = !0;
						var n = a.concat(t.result.list || []);
						o(n, t.result.hasNext), e.current = ++u
					})
				}
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.list,
					n = e.hasNext,
					a = t.map(function(e) {
						return c.
						default.createElement(E.
						default, {
							id: e.id,
							coverUrl: e.coverUrl,
							display: e.display,
							noteCnt: e.noteCnt,
							key: p.
							default.getKey()
						})
					});
				return c.
				default.createElement("div", null, c.
				default.createElement("ul", {
					className: "col-product-list clearfix",
					style: {
						minHeight: "550px"
					}
				}, a), c.
				default.createElement("div", {
					className: "tab-loading-more"
				}, t.length > 0 && c.
				default.createElement(b.
				default, {
					paginationType: "hasNext",
					hasNext: n,
					bufferHeight: 400,
					getList: this.getList,
					dotInfo: this.props.dotInfo,
					endText: "没有更多产品啦~"
				})))
			}
		}]), t
	}(c.
	default.Component),
		N = function(e, t) {
			var n = t.type,
				a = "tagProduct";
			return "search" === n && (a = "searchProduct"), {
				list: e[a].list || [],
				hasNext: e[a].hasNext,
				isLogin: e.user.isLogin
			}
		}, C = function(e, t) {
			var n = t.type;
			return {
				changeList: function(t, a) {
					e("search" === n ? {
						type: "SET_SEARCH_PRODUCT",
						list: t,
						hasNext: a
					} : {
						type: "SET_TAG_PRODUCT",
						list: t,
						hasNext: a
					})
				}
			}
		};
	t.
	default = (0, h.connect)(N, C)(_)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(8),
		f = n(25),
		d = a(f),
		p = n(74),
		h = a(p),
		m = n(1),
		v = a(m);
	n(150);
	var y = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleMouseEnter = n.handleMouseEnter.bind(n), n.handleMouseLeave = n.handleMouseLeave.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "handleMouseEnter",
			value: function() {
				var e = this.props;
				(0, e.showCollect)(e.id)
			}
		}, {
			key: "handleMouseLeave",
			value: function() {
				var e = this.props;
				(0, e.hideCollect)(e.id)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.title,
					a = e.tags,
					r = e.coverUrl,
					o = e.browseCnt,
					l = e.collected,
					i = e.author,
					u = e.followChange,
					f = e.showbg,
					p = e.showFollowTip,
					m = e.closeDownload,
					y = e.collectedChange,
					b = i.avatarUrl,
					g = i.nickname,
					E = i.vip,
					w = i.followType,
					_ = "hidden",
					N = "";
				return f && (_ = "visible", N = "#f4f4f4"), c.
				default.createElement("li", {
					className: "repo-tag-item",
					style: {
						backgroundColor: N
					}
				}, c.
				default.createElement("div", {
					className: "item-hover",
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave
				}, c.
				default.createElement("a", {
					href: "/repo/" + t,
					target: "_blank",
					className: "avatar"
				}, c.
				default.createElement("img", {
					className: "repo-cover",
					src: v.
					default.nosUrl(r, "470y312", !0, "1"),
					alt: "合辑封面"
				})), c.
				default.createElement("a", {
					href: "/repo/" + t,
					target: "_blank",
					className: "repo-hover",
					style: {
						visibility: _
					}
				}, c.
				default.createElement(h.
				default, {
					id: t,
					type: 3,
					className: "collect-button",
					followType: w,
					collected: l,
					collectedChange: function() {
						y(t, !l)
					}
				})), c.
				default.createElement("div", {
					className: "info"
				}, c.
				default.createElement("a", {
					className: "title",
					href: "/repo/" + t,
					target: "_blank"
				}, n), c.
				default.createElement("div", {
					className: "data clearfix"
				}, c.
				default.createElement("span", {
					className: "tags"
				}, (a || []).slice(0, 3).map(function(e) {
					return " #" + e.name
				}).join(" ")), c.
				default.createElement("span", {
					className: "browse"
				}, c.
				default.createElement("span", {
					className: "icon icon-eye"
				}), v.
				default.toW(o))))), c.
				default.createElement("div", {
					className: "author"
				}, c.
				default.createElement(s.Link, {
					to: "/user/" + i.id
				}, c.
				default.createElement("div", {
					className: "img-wrapper"
				}, c.
				default.createElement("img", {
					src: v.
					default.nosUrl(b, "48y48"),
					alt: "头像"
				}), E ? c.
				default.createElement("span", {
					className: "icon icon-vip-small"
				}) : null)), c.
				default.createElement(s.Link, {
					to: "/user/" + i.id
				}, c.
				default.createElement("span", {
					className: "nickname"
				}, g)), c.
				default.createElement(d.
				default, {
					className: "follow",
					id: i.id,
					type: 1,
					disableCancel: !0,
					initialFollowType: w,
					followCallback: function() {
						for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
						u.apply(void 0, n.concat([t]))
					},
					showFollowTip: p,
					closeDownload: function() {
						m(t)
					},
					disableGetFollowAfterLogin: !0
				})))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = y
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(2),
		f = a(s),
		d = n(13),
		p = a(d),
		h = n(27),
		m = a(h),
		v = n(3),
		y = n(17),
		b = a(y),
		g = n(261),
		E = a(g);
	n(150);
	var w = {
		TAG_PREFIX: "/newApi/tag",
		SEARCH: "/newApi/search",
		CURRENT: "/newApi/ms/user/current"
	}, _ = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.current = 1, n.canGet = !0, n.getList = n.getList.bind(n), n.handleFollowChange = n.handleFollowChange.bind(n), n.handleShowCollect = n.handleShowCollect.bind(n), n.handleHideCollect = n.handleHideCollect.bind(n), n.handleCloseDownload = n.handleCloseDownload.bind(n), n.handleCollectChange = n.handleCollectChange.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "getList",
			value: function(e) {
				var t = this,
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
				if (this.canGet) {
					this.canGet = !1;
					var a = this.props,
						r = a.query,
						o = a.changeList,
						l = a.type,
						i = void 0,
						u = this.current,
						c = 12 * u;
					i = "search" === l ? (0, f.
					default)("" + w.SEARCH, {
						method: "GET",
						body: {
							type: b.
							default.resType.repo,
							offset: c,
							limit: n,
							query: r
						}
					}) : (0, f.
					default)(w.TAG_PREFIX + "/" + r + "/repos", {
						method: "GET",
						body: {
							offset: c,
							limit: n
						}
					}), i.then(function(n) {
						t.canGet = !0;
						var a = e.concat(n.result.list || []);
						o(a, n.result.hasNext), t.current = ++u
					})
				}
			}
		}, {
			key: "handleShowCollect",
			value: function(e) {
				var t = this.props,
					n = t.list,
					a = t.changeList,
					r = t.hasNext;
				a((0, m.
				default)(n, {
					$apply: function(t) {
						return t.map(function(t) {
							return t.id === e ? (0, m.
							default)(t, {
								showbg: {
									$set: !0
								}
							}) : (0, m.
							default)(t, {
								showbg: {
									$set: !1
								}
							})
						})
					}
				}), r)
			}
		}, {
			key: "handleHideCollect",
			value: function() {
				var e = this.props,
					t = e.list,
					n = e.changeList,
					a = e.hasNext;
				n((0, m.
				default)(t, {
					$apply: function(e) {
						return e.map(function(e) {
							return (0, m.
							default)(e, {
								showbg: {
									$set: !1
								}
							})
						})
					}
				}), a)
			}
		}, {
			key: "handleCollectChange",
			value: function(e, t) {
				var n = this.props,
					a = n.list,
					r = n.changeList,
					o = n.hasNext;
				r((0, m.
				default)(a, {
					$apply: function(n) {
						return n.map(function(n) {
							return n.id === e ? (0, m.
							default)(n, {
								collected: {
									$set: t
								}
							}) : n
						})
					}
				}), o)
			}
		}, {
			key: "handleCloseDownload",
			value: function(e) {
				var t = this.props,
					n = t.list,
					a = t.changeList,
					r = t.hasNext;
				a((0, m.
				default)(n, {
					$apply: function(t) {
						return t.map(function(t) {
							return t.id === e ? (0, m.
							default)(t, {
								showFollowTip: {
									$set: !1
								}
							}) : t
						})
					}
				}), r)
			}
		}, {
			key: "handleFollowChange",
			value: function(e, t, n) {
				var a = this.props,
					r = a.list,
					o = a.changeList,
					l = a.hasNext,
					i = localStorage.getItem("hasShow"),
					u = !1;
				i || 0 === e || (u = !0, localStorage.setItem("hasShow", !0)), o((0, m.
				default)(r, {
					$apply: function(a) {
						return a.map(function(a) {
							return a.author.id === t ? a.id === n ? (0, m.
							default)(a, {
								author: {
									followType: {
										$set: e
									}
								},
								showFollowTip: {
									$set: u
								}
							}) : (0, m.
							default)(a, {
								author: {
									followType: {
										$set: e
									}
								}
							}) : a
						})
					}
				}), l)
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				if (e.isLogin && !this.props.isLogin && (this.current = 0, this.getList([])), this.props.isLogin && !e.isLogin) {
					var t = this.props,
						n = t.list,
						a = t.changeList,
						r = t.hasNext;
					a((0, m.
					default)(n, {
						$apply: function(e) {
							return e.map(function(e) {
								return (0, m.
								default)(e, {
									collected: {
										$set: !1
									},
									followType: {
										$set: 0
									}
								})
							})
						}
					}), r)
				}
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = t.list,
					a = t.hasNext,
					r = n.map(function(t, n) {
						return c.
						default.createElement(E.
						default, {
							id: t.id,
							title: t.title,
							tags: t.tags,
							coverUrl: t.coverUrl,
							browseCnt: t.browseCnt,
							collected: t.collected,
							followChange: e.handleFollowChange,
							author: t.author,
							showbg: t.showbg,
							showFollowTip: t.showFollowTip,
							showCollect: e.handleShowCollect,
							hideCollect: e.handleHideCollect,
							closeDownload: e.handleCloseDownload,
							collectedChange: e.handleCollectChange,
							key: "repo_" + n
						})
					});
				return c.
				default.createElement("div", null, c.
				default.createElement("ul", {
					className: "col-repo-list clearfix",
					style: {
						minHeight: "550px"
					}
				}, r), c.
				default.createElement("div", {
					className: "tab-loading-more"
				}, n.length > 0 && c.
				default.createElement(p.
				default, {
					paginationType: "hasNext",
					hasNext: a,
					bufferHeight: 400,
					dotInfo: this.props.dotInfo,
					getList: function() {
						e.getList(n)
					},
					endText: "没有更多合辑啦~"
				})))
			}
		}]), t
	}(c.
	default.Component),
		N = function(e, t) {
			var n = t.type,
				a = "tagRepo";
			return "search" === n && (a = "searchRepo"), {
				list: e[a].list || [],
				hasNext: e[a].hasNext,
				isLogin: e.user.isLogin
			}
		}, C = function(e, t) {
			var n = t.type;
			return {
				changeList: function(t, a) {
					e("search" === n ? {
						type: "SET_SEARCH_REPO",
						list: t,
						hasNext: a
					} : {
						type: "SET_TAG_REPO",
						list: t,
						hasNext: a
					})
				}
			}
		};
	t.
	default = (0, v.connect)(N, C)(_)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(8),
		f = n(25),
		d = a(f),
		p = n(1),
		h = a(p);
	n(151);
	var m = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.duration,
					a = e.title,
					r = e.coverUrl,
					o = e.browseCnt,
					l = e.author,
					i = e.followChange,
					u = e.closeDownload,
					f = e.showFollowTip,
					p = l.avatarUrl,
					m = l.nickname,
					v = l.vip,
					y = l.followType,
					b = h.
				default.getDisplayTime2(n);
				return c.
				default.createElement("li", {
					className: "video-tag-item"
				}, c.
				default.createElement("a", {
					href: "/video/" + t,
					target: "_blank"
				}, c.
				default.createElement("span", {
					className: "icon icon-play"
				})), c.
				default.createElement("a", {
					href: "/video/" + t,
					target: "_blank",
					style: {
						position: "relative"
					},
					className: "avatar"
				}, c.
				default.createElement("img", {
					className: "video-cover",
					src: h.
					default.nosUrl(r, "470y312", !0, "1"),
					alt: "合辑封面"
				})), c.
				default.createElement("div", {
					className: "info"
				}, c.
				default.createElement("a", {
					className: "title",
					href: "/video/" + t,
					target: "_blank"
				}, a), c.
				default.createElement("div", {
					className: "data clearfix"
				}, c.
				default.createElement("span", {
					className: "duration"
				}, c.
				default.createElement("span", {
					className: "icon icon-time"
				}), c.
				default.createElement("span", null, b)), c.
				default.createElement("span", {
					className: "browse"
				}, c.
				default.createElement("span", {
					className: "icon icon-eye"
				}), c.
				default.createElement("span", null, h.
				default.toW(o)))), c.
				default.createElement("div", {
					className: "author clearfix"
				}, c.
				default.createElement(s.Link, {
					to: "/user/" + l.id
				}, c.
				default.createElement("div", {
					className: "img-wrapper"
				}, c.
				default.createElement("img", {
					src: h.
					default.nosUrl(p, "48y48"),
					alt: "头像"
				}), v ? c.
				default.createElement("span", {
					className: "icon icon-vip-small"
				}) : null)), c.
				default.createElement(s.Link, {
					to: "/user/" + l.id
				}, c.
				default.createElement("span", {
					className: "nickname"
				}, m)), c.
				default.createElement(d.
				default, {
					className: "follow",
					id: l.id,
					type: 1,
					disableCancel: !0,
					initialFollowType: y,
					followCallback: function() {
						for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
						i.apply(void 0, n.concat([t]))
					},
					disableGetFollowAfterLogin: !0,
					closeDownload: function() {
						u(t)
					},
					showFollowTip: f
				}))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = m
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(218),
		f = a(s);
	n(425);
	var d = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleChange = n.handleChange.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "handleChange",
			value: function(e) {
				this.props.onChange(e)
			}
		}, {
			key: "render",
			value: function() {
				return c.
				default.createElement("div", null, c.
				default.createElement(f.
				default, {
					value: this.props.value,
					onChange: this.handleChange,
					addOnBlur: !0,
					onlyUnique: !0,
					maxTags: 10,
					inputProps: {
						className: "react-tagsinput-input",
						placeholder: "最多添加10个标签，用回车隔开"
					}
				}))
			}
		}]), t
	}(c.
	default.Component);
	d.propTypes = {
		onChange: c.
		default.PropTypes.func.isRequired,
		value: c.
		default.PropTypes.array
	}, d.defaultProps = {
		value: []
	}, t.
	default = d
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		c = n(0),
		s = a(c),
		f = n(9),
		d = a(f),
		p = n(59),
		h = a(p),
		m = n(5),
		v = a(m),
		y = n(38),
		b = a(y),
		g = n(76),
		E = a(g),
		w = n(12),
		_ = a(w),
		N = n(11),
		C = a(N),
		O = n(1),
		T = a(O),
		k = n(17),
		P = a(k),
		S = n(2),
		j = a(S),
		L = n(266);
	n(427);
	var x = {
		AREA: "/newApi/ms/area",
		USER: "/newApi/user/current/v2",
		NICKNAME: "/newApi/ms/check/nickname",
		UPLOAD: "/newApi/ms/upload/img/detail?width=180&height=180&size=20480&ext=JPG,JPEG,PNG,BMP"
	}, I = (0, b.
	default)(i = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			n.state = {
				avatar: null,
				gender: null,
				skinType: null,
				year: 0,
				month: 0,
				date: 0,
				province: null,
				city: null,
				description: "",
				nickname: "",
				cityOptions: [],
				nicknameErr: "",
				descriptionErr: "",
				showCropperModal: !1,
				didMount: !1,
				modified: !1,
				uploadImage: {}
			};
			var a = ["handleChangeNickname", "handleGenderChange", "handleYearChange", "handleMonthChange", "handleDateChange", "handleProvinceChange", "handleCityChange", "handleDescriptionChange", "handleFinish", "handleUploadAvatar", "handleClickOK", "handleNickNameBlur"];
			return n.image = {
				url: "",
				noskey: "",
				crop: ""
			}, a.forEach(function(e) {
				n[e] = n[e].bind(n)
			}), n
		}
		return l(t, e), u(t, [{
			key: "handleChangeNickname",
			value: function(e) {
				var t = e.target.value;
				this.setState({
					nickname: t,
					modified: !0
				})
			}
		}, {
			key: "handleNickNameBlur",
			value: function() {
				var e = this,
					t = v.
				default.trim(this.state.nickname), n = this.props.userInfo, a = (0, L.checkNickname)(t);
				if (a) return void this.setState({
					nicknameErr: a
				});
				t !== n.nickname && (0, j.
				default)(x.NICKNAME, {
					body: {
						nickname: t
					}
				}).then(function() {
					e.setState({
						nicknameErr: ""
					})
				}).
				catch (function(t) {
					e.setState({
						nicknameErr: t.msg
					})
				})
			}
		}, {
			key: "handleGenderChange",
			value: function(e) {
				var t = e.target.value;
				this.setState({
					gender: t,
					modified: !0
				})
			}
		}, {
			key: "handleYearChange",
			value: function(e) {
				this.setState({
					year: e.value,
					modified: !0
				})
			}
		}, {
			key: "handleMonthChange",
			value: function(e) {
				var t = this.state,
					n = t.year,
					a = t.date,
					r = e.value,
					o = !0;
				a > L.monthDay[r] && (o = !1), (0, L.isLeafYear)(n) && 2 === r && 29 === a && (o = !0), this.setState({
					month: r,
					date: o ? a : 0,
					modified: !0
				})
			}
		}, {
			key: "handleDateChange",
			value: function(e) {
				this.setState({
					date: e.value,
					modified: !0
				})
			}
		}, {
			key: "handleProvinceChange",
			value: function(e) {
				this.setState({
					province: e.value,
					modified: !0
				}), this.getCities(e.value)
			}
		}, {
			key: "handleCityChange",
			value: function(e) {
				this.setState({
					city: e.value,
					modified: !0
				})
			}
		}, {
			key: "handleDescriptionChange",
			value: function(e) {
				var t = e.target.value;
				this.setState({
					description: t,
					descriptionErr: T.
					default.length(t) > 280 ? "最多为140个汉字哦~" : "",
					modified: !0
				})
			}
		}, {
			key: "getCities",
			value: function(e) {
				var t = this;
				e && (0, j.
				default)(x.AREA + "/" + e).then(function(e) {
					var n = e.result || [],
						a = n.map(function(e) {
							return {
								value: e.cCode,
								label: e.child
							}
						});
					t.setState({
						cityOptions: a
					})
				})
			}
		}, {
			key: "handleFinish",
			value: function(e) {
				window.$eventTrace({
					category: "Account",
					action: "click",
					eventLabel: "submitButton"
				}), e.preventDefault();
				var t = this.state,
					n = t.year,
					a = t.month,
					r = t.date,
					o = t.gender,
					l = t.nickname,
					i = t.skinType,
					u = t.description,
					c = t.province,
					s = t.city,
					f = this.props.userInfo.userId,
					d = this.image,
					p = d.noskey,
					h = d.crop,
					m = (0, L.getTimestamp)(n, a, r),
					y = {
						avatarImgId: p,
						nickname: v.
						default.trim(l),
						gender: o || "",
						crop: h,
						skinType: i,
						birthday: m,
						province: c || "",
						city: s || "",
						description: v.
						default.trim(u).replace(/\n+/g, "\n").replace(/ +/g, " ")
					};
				(0, j.
				default)(x.USER, {
					method: "POST",
					body: y
				}).then(function() {
					window.location.href = "/user/" + f
				}).
				catch (function(e) {
					_.
					default.show(e.msg || "保存出错，请联系客服", 2e3)
				})
			}
		}, {
			key: "handleUploadAvatar",
			value: function() {
				var e = this;
				window.$eventTrace({
					category: "Account",
					action: "click",
					eventLabel: "avatarUpload"
				});
				var t = this.refs.avatar.files[0];
				(0, j.
				default)(x.UPLOAD, {
					method: "POST",
					body: {
						file: t
					},
					formData: !0
				}).then(function(t) {
					e.refs.avatar.value = "", e.setState({
						showCropperModal: !0,
						uploadImage: {
							url: t.result.url,
							noskey: t.result.url
						}
					})
				}).
				catch (function(t) {
					e.refs.avatar.value = "", _.
					default.show(t.msg || "上传图片失败", 2e3)
				})
			}
		}, {
			key: "handleClickOK",
			value: function(e) {
				var t = this.state.uploadImage,
					n = t.url,
					a = t.noskey;
				this.image = {
					url: n + "?imageView&crop=" + e,
					noskey: a + "?imageView&crop=" + e,
					crop: e
				}, this.setState({
					showCropperModal: !1,
					uploadImage: {},
					avatar: this.image.url,
					modified: !0
				})
			}
		}, {
			key: "initial",
			value: function(e) {
				var t = e.userInfo,
					n = t.avatar,
					a = t.birthday,
					r = t.gender,
					o = t.nickname,
					l = t.skinType,
					i = t.description,
					u = t.province,
					c = t.city,
					s = T.
				default.getDate(a), f = s.year, d = s.month, p = s.date, h = n.url, m = n.id;
				this.image = {
					url: h || "",
					noskey: m || "",
					crop: ""
				}, this.setState({
					avatar: this.image.url,
					city: c && c.id.toString(),
					gender: r && r.id,
					skinType: l && l.id,
					province: u && u.id.toString(),
					year: f,
					month: d,
					date: p,
					nickname: o,
					description: i
				}), u && this.getCities(u.id)
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				!this.props.isLogin && e.isLogin && this.initial(e)
			}
		}, {
			key: "componentDidMount",
			value: function() {
				this.setState({
					didMount: !0
				}), this.props.isLogin && this.initial(this.props)
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.state,
					n = t.avatar,
					a = t.year,
					r = t.month,
					o = t.date,
					l = t.gender,
					i = t.nickname,
					u = t.skinType,
					c = t.description,
					f = t.province,
					p = t.cityOptions,
					m = t.nicknameErr,
					v = t.descriptionErr,
					y = t.showCropperModal,
					b = t.didMount,
					g = t.uploadImage,
					w = t.modified,
					_ = t.city,
					N = (0, L.getOptions)(a, r),
					O = N.yearOptions,
					k = N.monthOptions,
					S = N.dateOptions;
				return s.
				default.createElement("div", null, s.
				default.createElement(C.
				default, null), s.
				default.createElement("div", {
					className: "m-userinfo"
				}, y && s.
				default.createElement(E.
				default, {
					title: "头像裁切",
					url: g.url,
					minWidth: 180,
					aspectRatio: 1,
					initialWidth: 180,
					initialHeight: 180,
					onClickOK: this.handleClickOK,
					onClickClose: function() {
						e.setState({
							showCropperModal: !1,
							uploadImage: {}
						})
					}
				}), s.
				default.createElement("div", {
					className: "header"
				}, s.
				default.createElement("div", {
					className: "title"
				}, "编辑个人资料")), s.
				default.createElement("div", {
					className: "avatar"
				}, s.
				default.createElement("div", {
					className: "icon"
				}, s.
				default.createElement("img", {
					className: "avatar-big",
					alt: "",
					src: n
				})), s.
				default.createElement("div", {
					className: "text"
				}, "上传头像", s.
				default.createElement("input", {
					type: "file",
					ref: "avatar",
					onChange: this.handleUploadAvatar,
					accept: "image/png, image/jpg, image/jpeg, image/bmp"
				}))), s.
				default.createElement("form", {
					name: "userInfo",
					className: "form-horizontal"
				}, s.
				default.createElement("div", {
					className: "content"
				}, s.
				default.createElement("div", {
					className: "form-group clearfix"
				}, s.
				default.createElement("label", {
					className: "f-fl control-label required"
				}, "昵称"), s.
				default.createElement("div", {
					className: "f-fl"
				}, s.
				default.createElement("input", {
					type: "text",
					value: i,
					onChange: this.handleChangeNickname,
					onBlur: this.handleNickNameBlur,
					autoComplete: "on",
					placeholder: "请输入您的昵称，不超过15个字"
				})), m ? s.
				default.createElement("div", {
					className: "f-fl"
				}, s.
				default.createElement("span", {
					className: "label error-style"
				}, "*" + m)) : null), s.
				default.createElement("div", {
					className: "form-group clearfix"
				}, s.
				default.createElement("label", {
					className: "f-fl control-label"
				}, "性别"), s.
				default.createElement("div", {
					className: "f-fl value gender"
				}, s.
				default.createElement("label", {
					className: "radio-inline"
				}, s.
				default.createElement("input", {
					type: "radio",
					checked: 1 === l,
					onClick: function() {
						e.setState({
							gender: 1,
							modified: !0
						})
					}
				}), "男", s.
				default.createElement("input", {
					type: "radio",
					checked: 2 === l,
					style: {
						marginLeft: 40
					},
					onClick: function() {
						e.setState({
							gender: 2,
							modified: !0
						})
					}
				}), "女"))), s.
				default.createElement("div", {
					className: "form-group skintype clearfix"
				}, s.
				default.createElement("label", {
					className: "f-fl control-label"
				}, "肤质"), s.
				default.createElement("div", {
					className: "f-fl value",
					id: "skin"
				}, P.
				default.skinTypes.map(function(t) {
					var n = (0, d.
					default)({
						option: !0,
						active: t.value === u
					});
					return s.
					default.createElement("label", {
						className: n,
						onClick: function() {
							e.setState({
								skinType: t.value,
								modified: !0
							})
						},
						key: T.
						default.getKey()
					}, t.txt)
				}))), s.
				default.createElement("div", {
					className: "form-group birthwrap clearfix"
				}, s.
				default.createElement("label", {
					className: "f-fl control-label"
				}, "生日"), b ? s.
				default.createElement("div", {
					className: "f-fl clearfix"
				}, s.
				default.createElement(h.
				default, {
					className: "form-control year",
					options: O,
					searchable: !1,
					value: a,
					clearable: !1,
					onChange: this.handleYearChange
				}), s.
				default.createElement(h.
				default, {
					className: "form-control month",
					options: k,
					searchable: !1,
					value: r,
					clearable: !1,
					onChange: this.handleMonthChange
				}), s.
				default.createElement(h.
				default, {
					className: "form-control day",
					options: S,
					searchable: !1,
					value: o,
					clearable: !1,
					onChange: this.handleDateChange
				})) : null), s.
				default.createElement("div", {
					className: "form-group area clearfix"
				}, s.
				default.createElement("label", {
					className: "f-fl control-label"
				}, "地区"), b ? s.
				default.createElement("div", {
					className: "f-fl"
				}, s.
				default.createElement(h.
				default.Async, {
					className: "form-control province",
					loadOptions: L.getProvinces,
					searchable: !1,
					placeholder: "选择省份",
					value: f,
					clearable: !1,
					onChange: this.handleProvinceChange
				}), s.
				default.createElement(h.
				default, {
					className: "form-control city",
					options: p,
					placeholder: "选择城市",
					noResultsText: "请先选择省份",
					searchable: !1,
					value: _,
					clearable: !1,
					onChange: this.handleCityChange
				})) : null), s.
				default.createElement("div", {
					className: "form-group clearfix"
				}, s.
				default.createElement("label", {
					className: "f-fl control-label"
				}, "简介"), s.
				default.createElement("div", {
					className: "f-fl intro"
				}, s.
				default.createElement("textarea", {
					className: "form-control",
					rows: "5",
					onChange: this.handleDescriptionChange,
					value: c
				}), s.
				default.createElement("span", {
					className: "text-count"
				}, Math.floor(T.
				default.length(c) / 2), "/140")), v ? s.
				default.createElement("div", {
					className: "f-fl"
				}, s.
				default.createElement("span", {
					className: "label error-style"
				}, "*" + v)) : null), s.
				default.createElement("div", {
					className: "form-group save"
				}, s.
				default.createElement("button", {
					disabled: !w,
					className: "btn btn-primary form-control",
					onClick: this.handleFinish
				}, "保存"))))))
			}
		}]), t
	}(s.
	default.Component)) || i;
	t.
	default = I
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e) {
		if (Array.isArray(e)) {
			for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getOptions = t.isLeafYear = t.monthDay = t.checkNickname = t.getTimestamp = t.getProvinces = void 0;
	var o = n(2),
		l = a(o),
		i = n(1),
		u = a(i),
		c = n(5),
		s = a(c),
		f = {
			AREA: "/newApi/ms/area"
		}, d = (t.getProvinces = function() {
			return (0, l.
			default)(f.AREA).then(function(e) {
				return {
					options: (e.result || []).map(function(e) {
						return {
							value: e.pCode,
							label: e.parent
						}
					})
				}
			})
		}, t.getTimestamp = function(e, t, n) {
			if (!(e && t && n)) return -22090176e5;
			try {
				return +new Date(e, t - 1, n)
			} catch (e) {
				return -22090176e5
			}
		}, t.checkNickname = function(e) {
			e = s.
			default.trim(e);
			var t = u.
			default.length(e), n = "";
			return e ? t < 4 ? n = "昵称过短，4~30个字符哦" : t > 30 ? n = "昵称过长，4~30个字符哦" : /^[\u4E00-\u9FA5_\-0-9a-z]+$/i.test(e) || (n = "不支持除-和_外的其他特殊字符") : n = "必填项", n
		}, t.monthDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]),
		p = t.isLeafYear = function(e) {
			return e && e % 400 == 0 || e % 100 != 0 && e % 4 == 0
		};
	t.getOptions = function(e, t) {
		var n = (new Date).getFullYear(),
			a = s.
		default.rangeRight(n - 80 - 1, n + 1).map(function(e) {
			return {
				value: e,
				label: e
			}
		}), o = s.
		default.range(1, 13).map(function(e) {
			return {
				value: e,
				label: e
			}
		}), l = void 0;
		l = p(e) && 2 === t ? 29 : t ? d[t] : 0;
		var i = s.
		default.range(1, l + 1).map(function(e) {
			return {
				value: e,
				label: e
			}
		});
		return {
			yearOptions: [{
				value: 0,
				label: "年"
			}].concat(r(a)),
			monthOptions: [{
				value: 0,
				label: "月"
			}].concat(r(o)),
			dateOptions: [{
				value: 0,
				label: "日"
			}].concat(r(i))
		}
	}
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(1),
		i = a(l),
		u = n(9),
		c = a(u);
	n(428);
	var s = {
		0: {
			text: "未开始",
			className: "toStart"
		},
		1: {
			text: "美学试用",
			className: "new"
		},
		2: {
			text: "美学试用",
			className: "new"
		},
		3: {
			text: "已结束",
			className: "over"
		},
		4: {
			text: "新品试用",
			className: "new"
		}
	}, f = function(e) {
		var t = e.applyStatus;
		return !e.newProduct || 1 !== t && 2 !== t ? 2 === t ? 1 : t : 4
	}, d = function(e) {
		var t = e.applyStatus,
			n = e.startTime,
			a = e.endTime;
		switch (t) {
			case 0:
				return n + "开始";
			case 1:
			case 2:
				return a + "截止";
			case 3:
				return a + "结束";
			default:
				return n + "开始"
		}
	}, p = function(e) {
		var t = e.applyStatus,
			n = e.countingDown;
		switch (t) {
			case 0:
				return {
					text: n || "即将开始",
					className: "hover-toStart"
				};
			case 1:
				return {
					text: "立即申请",
					className: "hover-apply"
				};
			case 2:
				return {
					text: "已申请",
					className: "hover-applied"
				};
			case 3:
				return {
					text: "查看心得",
					className: "hover-over"
				};
			default:
				return {
					text: "立即申请",
					className: "hover-apply"
				}
		}
	}, h = function(e) {
		var t = e.id,
			n = e.image,
			a = e.zhName,
			r = e.quantity,
			l = e.spec,
			u = e.price,
			h = e.applyNumber,
			m = f(e),
			v = d(e),
			y = i.
		default.toW(u), b = i.
		default.toW(r), g = i.
		default.toW(h), E = p(e), w = (0, c.
		default)({
			quantity: !0,
			"float-right": 0 === h
		});
		return o.
		default.createElement("li", {
			className: "trial-all-item"
		}, o.
		default.createElement("a", {
			href: "trial/" + t,
			target: "_blank"
		}, o.
		default.createElement("div", {
			className: "cover"
		}, o.
		default.createElement("img", {
			className: "image",
			src: i.
			default.nosUrl(n, "636y340", !0, "1"),
			alt: "封面"
		}), o.
		default.createElement("div", {
			className: s[m].className + " status"
		}, s[m].text), o.
		default.createElement("div", {
			className: "time"
		}, o.
		default.createElement("span", {
			className: "icon icon-time-white"
		}), v)), o.
		default.createElement("div", {
			className: "title"
		}, o.
		default.createElement("span", {
			className: "title-zh"
		}, a), o.
		default.createElement("span", {
			className: "title-spec"
		}, l)), o.
		default.createElement("div", {
			className: "data"
		}, o.
		default.createElement("div", {
			className: "price"
		}, "价值 ", o.
		default.createElement("span", null, "¥" + y)), o.
		default.createElement("div", {
			className: w
		}, "限量", o.
		default.createElement("span", null, b), "份"), h > 0 ? o.
		default.createElement("div", {
			className: "number"
		}, "共", g, "人已申请") : null), o.
		default.createElement("div", {
			className: "item-hover"
		}, o.
		default.createElement("div", {
			className: "hover " + E.className
		}, E.text))))
	};
	t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(3),
		d = n(2),
		p = a(d),
		h = n(4),
		m = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(h),
		v = n(28),
		y = a(v),
		b = n(11),
		g = a(b),
		E = n(13),
		w = a(E),
		_ = n(267),
		N = a(_);
	n(429);
	var C = {
		LIST: "/newApi/trial/list",
		USER: "/newApi/ms/user/current"
	}, O = 10,
		T = {
			category: "TrialList",
			action: "loadMore",
			eventLabel: "trial"
		}, k = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.getList = function() {
					var e = n.props,
						t = e.list,
						a = e.changeList,
						r = t.length > 0 ? t[t.length - 1].id : "0";
					(0, p.
					default)("" + C.LIST, {
						body: {
							pageEndId: r,
							count: O
						}
					}).then(function(e) {
						var n = t.concat(e.result.list);
						a(n, e.result.hasNext)
					})
				}, n
			}
			return l(t, e), u(t, [{
				key: "componentWillReceiveProps",
				value: function(e) {
					this.props.isLogin !== e.isLogin && window.location.reload()
				}
			}, {
				key: "render",
				value: function() {
					var e = this.props,
						t = e.list,
						n = e.hasNext,
						a = t.map(function(e, t) {
							return s.
							default.createElement(N.
							default, i({}, e, {
								key: t
							}))
						});
					return s.
					default.createElement("div", {
						className: "all-trial"
					}, s.
					default.createElement(g.
					default, null), s.
					default.createElement("h1", null, "大牌试用"), s.
					default.createElement("ul", null, a), s.
					default.createElement("div", {
						className: "trial-loading-more"
					}, t.length > 0 && s.
					default.createElement(w.
					default, {
						paginationType: "hasNext",
						hasNext: n,
						bufferHeight: 400,
						getList: this.getList,
						dotInfo: T,
						endText: "没有更多试用啦~"
					})), s.
					default.createElement("div", {
						className: "right-bar"
					}, s.
					default.createElement(y.
					default, null)))
				}
			}], [{
				key: "fetchData",
				value: function(e) {
					var t = e.dispatch,
						n = e.getState(),
						a = n.headerInfo,
						r = (0, p.
						default)("" + C.LIST, {
							headerInfo: a
						}),
						o = (0, p.
						default)("" + C.USER, {
							headerInfo: a
						});
					return Promise.all([r, o]).then(function(e) {
						t({
							type: m.SET_ALLTRIAL,
							list: e[0].result.list,
							hasNext: e[0].result.hasNext
						}), t(200 === e[1].code ? {
							type: m.LOGIN_SUCCESS,
							info: e[1].result
						} : {
							type: m.LOGIN_FAILURE
						})
					}).
					catch (function(e) {
						throw e
					})
				}
			}]), t
		}(s.
		default.Component),
		P = function(e) {
			return {
				isLogin: e.user.isLogin,
				list: e.allTrial.list,
				hasNext: e.allTrial.hasNext
			}
		}, S = function(e) {
			return {
				changeList: function(t, n) {
					e({
						type: "SET_ALLTRIAL",
						list: t,
						hasNext: n
					})
				}
			}
		};
	t.
	default = (0, f.connect)(P, S)(k)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(8),
		i = n(1),
		u = a(i);
	n(430);
	var c = function(e) {
		var t = e.tags,
			n = e.tagId;
		return o.
		default.createElement("div", {
			className: "beauty-video-header-wrapper"
		}, o.
		default.createElement("h1", null, "变美视频"), o.
		default.createElement("ul", {
			className: "tabs"
		}, o.
		default.createElement("li", {
			className: "-1000" === n ? "active" : ""
		}, o.
		default.createElement(l.Link, {
			to: "/beautyVideo?tagId=-1000"
		}, "全部")), t.map(function(e) {
			return o.
			default.createElement("li", {
				className: e.id === n ? "active" : "",
				key: u.
				default.getKey()
			}, o.
			default.createElement(l.Link, {
				to: "/beautyVideo?tagId=" + e.id
			}, e.name))
		})))
	};
	t.
	default = c
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(2),
		f = a(s),
		d = n(3),
		p = n(4),
		h = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(p),
		m = n(136),
		v = a(m),
		y = n(11),
		b = a(y),
		g = n(28),
		E = a(g),
		w = n(269),
		_ = a(w);
	n(431);
	var N = {
		TAGS: "/newApi/beautyVideo/tags",
		TAG_PREFIX: "/newApi/beautyVideo/tag",
		CURRENT_USER: "/newApi/ms/user/current"
	}, C = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "componentWillReceiveProps",
			value: function(e) {
				this.props.tagId !== e.tagId && this.props.getList(e.tagId)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.tagId,
					n = e.tags;
				return c.
				default.createElement("div", null, c.
				default.createElement(b.
				default, null), c.
				default.createElement("div", {
					className: "beauty-video-wrapper"
				}, c.
				default.createElement(_.
				default, {
					tagId: t,
					tags: n
				}), c.
				default.createElement(v.
				default, {
					type: "beautyVideo",
					query: t,
					dotInfo: {
						category: "BeautyVideo",
						eventLabel: "video",
						action: "loadMore"
					}
				}), c.
				default.createElement(E.
				default, null)))
			}
		}], [{
			key: "fetchData",
			value: function(e, t, n) {
				var a = e.dispatch,
					r = e.getState,
					o = r(),
					l = o.headerInfo,
					i = n.query.tagId || -1e3,
					u = (0, f.
					default)(N.CURRENT_USER, {
						headerInfo: l
					}),
					c = (0, f.
					default)(N.TAGS, {
						headerInfo: l
					}),
					s = (0, f.
					default)(N.TAG_PREFIX + "/" + i, {
						method: "GET",
						body: {
							limit: 12,
							offset: 0
						},
						headerInfo: l
					});
				return Promise.all([u, c, s]).then(function(e) {
					a(200 === e[0].code ? {
						type: h.LOGIN_SUCCESS,
						info: e[0].result
					} : {
						type: h.LOGIN_FAILURE
					});
					var t = e[2].result,
						n = t.list,
						r = t.hasNext,
						o = e[1].result;
					a({
						type: h.SET_BEAUTY_VIDEO,
						list: n,
						hasNext: r
					}), a({
						type: h.SET_BEAUTY_VIDEO_TAGS,
						tags: o
					})
				}).
				catch (function(e) {
					throw e
				})
			}
		}]), t
	}(c.
	default.Component),
		O = function(e, t) {
			return {
				tagId: t.location.query.tagId || "-1000",
				tags: e.beautyVideoTags
			}
		}, T = function(e) {
			return {
				getList: function(t) {
					(0, f.
					default)(N.TAG_PREFIX + "/" + t).then(function(t) {
						var n = t.result,
							a = n.list,
							r = n.hasNext;
						e({
							type: h.SET_BEAUTY_VIDEO,
							list: a || [],
							hasNext: r
						})
					}).
					catch (function(e) {})
				}
			}
		};
	t.
	default = (0, d.connect)(O, T)(C)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(1),
		p = a(d),
		h = n(9),
		m = a(h),
		v = n(25),
		y = a(v),
		b = (u = i = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.handleExpand = function() {
					window.$eventTrace({
						category: "Brand",
						action: "show",
						eventLabel: "description"
					}), n.setState({
						isExpanded: !0
					})
				}, n.handleCollapse = function() {
					window.$eventTrace({
						category: "Brand",
						action: "hide",
						eventLabel: "description"
					}), n.setState({
						isExpanded: !1
					})
				}, n.handleCloseDownload = function() {
					n.setState({
						showFollowTip: !1
					})
				}, n.handleFollowChange = function(e, t, a) {
					var r = localStorage.getItem("hasShow"),
						o = !1;
					r || 0 === e || a || (o = !0, localStorage.setItem("hasShow", !0)), n.setState({
						followType: e,
						showFollowTip: o
					})
				}, n.state = {
					isExpanded: !1,
					followType: e.isFollowed,
					showFollowTip: !1
				}, n
			}
			return l(t, e), c(t, [{
				key: "componentDidMount",
				value: function() {
					var e = this.refs.descContent;
					e.clientHeight > 36 && this.setState({
						showBtn: !0
					})
				}
			}, {
				key: "render",
				value: function() {
					var e = this.props.brand,
						t = e.id,
						n = e.zhName,
						a = e.enName,
						r = e.mainName,
						o = e.address,
						l = e.vendor,
						i = e.createTime,
						u = e.description,
						c = this.state,
						s = c.isExpanded,
						d = c.followType,
						h = c.showFollowTip,
						v = (0, m.
						default)({
							info: !0,
							expanded: s
						}),
						b = (0, m.
						default)({
							"description-content": !s
						}),
						g = (0, m.
						default)({
							"description-btn": !0,
							hidden: s
						}),
						E = (0, m.
						default)({
							"description-btn": !0,
							hidden: !s
						}),
						w = !! e.countryLogo && p.
					default.nosUrl(e.countryLogo, "48y40"), _ = (0, m.
					default)({
						cnt: !0,
						"no-address": !(w || o || l || i)
					}), N = p.
					default.nosUrl(e.logoUrl, "300y300"), C = u && u.replace(/<p>(&nbsp;)*(<br>)*<\/p>/g, "");
					return f.
					default.createElement("div", {
						id: "info",
						className: v
					}, f.
					default.createElement("img", {
						src: N,
						className: "logo",
						alt: "图标"
					}), f.
					default.createElement("div", {
						className: _
					}, f.
					default.createElement("div", {
						className: "cnt-name"
					}, r ? a : n, " ", r ? n : a), f.
					default.createElement("div", {
						className: "cnt-address"
					}, w ? f.
					default.createElement("img", {
						className: "country-logo",
						src: w,
						alt: "国家"
					}) : null, o ? f.
					default.createElement("span", null, o, "   ") : null, l && l.id ? f.
					default.createElement("span", null, l.mainName ? l.enName : l.zhName, "   ") : null, i ? f.
					default.createElement("span", null, i, "年") : null)), f.
					default.createElement("div", {
						id: "follow-btn"
					}, f.
					default.createElement(y.
					default, {
						type: 5,
						id: t,
						initialFollowType: d,
						showFollowTip: h,
						closeDownload: this.handleCloseDownload,
						followCallback: this.handleFollowChange
					})), f.
					default.createElement("div", {
						id: "description",
						className: "description"
					}, f.
					default.createElement("div", {
						id: "description-content",
						dangerouslySetInnerHTML: {
							__html: C
						},
						className: b,
						ref: "descContent"
					}), C && C.length > 0 ? f.
					default.createElement("div", null, f.
					default.createElement("div", {
						id: "expand-btn",
						className: g,
						onClick: this.handleExpand
					}, "展开", f.
					default.createElement("span", {
						className: "icon icon-arrow-down"
					})), f.
					default.createElement("div", {
						id: "collapse-btn",
						className: E,
						onClick: this.handleCollapse
					}, "收起", f.
					default.createElement("span", {
						className: "icon icon-arrow-up"
					}))) : null))
				}
			}]), t
		}(f.
		default.Component), i.propTypes = {
			brand: f.
			default.PropTypes.object.isRequired
		}, u);
	t.
	default = b
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(1),
		p = a(d),
		h = n(2),
		m = a(h),
		v = n(51),
		y = a(v),
		b = n(13),
		g = a(b),
		E = n(5),
		w = a(E),
		_ = 12,
		N = (u = i = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.getMoreProduct = function() {
					window.$eventTrace({
						category: "Brand",
						action: "loadMore",
						eventLabel: "product"
					});
					var e = n.state;
					e.currentPage <= n.totalPage && (0, m.
					default)("/newApi/brand/" + n.props.brandId + "/products", {
						body: {
							limit: _,
							offset: (e.currentPage - 1) * _
						}
					}).then(function(t) {
						var a = t.result;
						n.setState((0, y.
						default)(n.state, {
							list: {
								$push: a.list
							},
							currentPage: {
								$set: e.currentPage + 1
							}
						}))
					}).
					catch (function(e) {})
				}, n.state = {
					list: e.products.list || [],
					currentPage: 2
				}, n.totalPage = Math.ceil(e.products.total / _), n.onScroll = w.
				default.throttle(n.onScroll.bind(n), 500), n
			}
			return l(t, e), c(t, [{
				key: "onScroll",
				value: function() {
					var e = this.state,
						t = Math.max(document.body.scrollTop, document.documentElement.scrollTop),
						n = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
					t + ("CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight) + 300 >= n && e.currentPage > 1 && e.currentPage <= this.totalPage && this.getMoreProduct()
				}
			}, {
				key: "render",
				value: function() {
					var e = this.state.list,
						t = this,
						n = [];
					return e.length > 0 && (n = e.map(function(e) {
						var t = w.
						default.cloneDeep(e);
						return t.link = t.id ? "/product/" + t.id : "", t.blankNosKey = t.blankNosKey ? p.
						default.nosUrl(t.blankNosKey, "400x0", "", 0) : "", t
					})), f.
					default.createElement("div", null, f.
					default.createElement("ul", {
						className: "products-list clearfix"
					}, n.length > 0 && n.map(function(e, t) {
						return f.
						default.createElement("li", {
							className: "product",
							key: t
						}, f.
						default.createElement("a", {
							className: "product-img",
							href: e.link,
							target: "_blank"
						}, f.
						default.createElement("img", {
							src: e.blankNosKey,
							alt: "产品图片"
						})), f.
						default.createElement("div", {
							className: "product-detail"
						}, f.
						default.createElement("a", {
							className: "product-name",
							href: e.link,
							target: "_blank"
						}, e.display.name1), e.display.name2 ? f.
						default.createElement("a", {
							className: "product-name",
							href: e.link,
							target: "_blank"
						}, e.display.name2) : null, e.noteCount > 0 ? f.
						default.createElement("a", {
							className: "product-note",
							href: e.link,
							target: "_blank"
						}, e.noteCount, "篇心得  >") : null))
					})), t.totalPage > 1 ? f.
					default.createElement(g.
					default, {
						paginationType: "total",
						startPage: 2,
						totalPage: t.totalPage,
						bufferHeight: 400,
						getList: this.getMoreProduct,
						dotInfo: {
							category: "Brand",
							action: "loadMore",
							eventLabel: "product"
						},
						endText: "没有更多产品啦~"
					}) : null)
				}
			}]), t
		}(f.
		default.Component), i.propTypes = {
			brandId: f.
			default.PropTypes.string.isRequired,
			products: f.
			default.PropTypes.object.isRequired
		}, u);
	t.
	default = N
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(2),
		f = a(s),
		d = n(3),
		p = n(4),
		h = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(p),
		m = n(1),
		v = a(m),
		y = n(11),
		b = a(y),
		g = n(37),
		E = a(g),
		w = n(53),
		_ = a(w),
		N = n(28),
		C = a(N),
		O = n(272),
		T = a(O),
		k = n(271),
		P = a(k);
	n(432);
	var S = {
		BRAND: "/newApi/brand",
		USER: "/newApi/ms/user/current"
	}, j = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props,
					t = e.brand,
					n = e.products,
					a = t.id,
					r = !! t.webCoverUrl && v.
				default.nosUrl(t.webCoverUrl, "1920y400", 1, 1), o = document.querySelector("#main"), l = r ? "" : "no-cover";
				return c.
				default.createElement("div", null, c.
				default.createElement(b.
				default, null), c.
				default.createElement("div", {
					className: "brand-wrapper"
				}, r ? c.
				default.createElement("div", {
					className: "web-cover-wrapper"
				}, c.
				default.createElement("img", {
					src: r,
					className: "web-cover",
					alt: "封面"
				})) : null, c.
				default.createElement("div", {
					className: "wrapper"
				}, c.
				default.createElement("div", {
					id: "share-bar"
				}, c.
				default.createElement(E.
				default, {
					top: 62,
					bottomTarget: o
				}, c.
				default.createElement(_.
				default, {
					type: "brand",
					id: a,
					direction: "vertical"
				}))), c.
				default.createElement("div", {
					id: "main",
					className: l
				}, c.
				default.createElement(P.
				default, {
					brand: t
				}), c.
				default.createElement("div", {
					className: "brand-products"
				}, c.
				default.createElement("p", null, "热门产品（", n.total, "）"), n.total > 0 ? c.
				default.createElement("div", {
					id: "products-list"
				}, c.
				default.createElement(T.
				default, {
					brandId: a,
					products: n
				})) : c.
				default.createElement("div", {
					className: "no-products"
				}))), c.
				default.createElement("div", {
					id: "right-bar"
				}, c.
				default.createElement(C.
				default, null)))))
			}
		}], [{
			key: "fetchData",
			value: function(e, t) {
				var n = e.dispatch,
					a = e.getState,
					r = a(),
					o = r.headerInfo;
				n({
					type: h.GET_BRAND_REQUEST
				});
				var l = t.id,
					i = (0, f.
					default)(S.BRAND + "/" + l, {
						headerInfo: o
					}),
					u = (0, f.
					default)("" + S.USER, {
						headerInfo: o
					}),
					c = (0, f.
					default)(S.BRAND + "/" + l + "/products", {
						method: "GET",
						body: {
							offset: 0,
							limit: 12
						},
						headerInfo: o
					});
				return Promise.all([i, u, c]).then(function(e) {
					var t = e[2].result,
						a = t.list,
						r = void 0 === a ? [] : a,
						o = t.total,
						l = void 0 === o ? 0 : o;
					n({
						type: h.GET_BRAND_SUCCESS,
						brand: e[0].result,
						products: {
							list: r,
							total: l
						}
					}), n(200 === e[1].code ? {
						type: h.LOGIN_SUCCESS,
						info: e[1].result
					} : {
						type: h.LOGIN_FAILURE
					})
				}).
				catch (function(e) {
					throw n({
						type: h.GET_BRAND_FAILURE
					}), e
				})
			}
		}]), t
	}(c.
	default.Component),
		L = function(e) {
			return {
				brand: e.brand && e.brand.brand || {},
				products: e.brand && e.brand.products || {}
			}
		};
	t.
	default = (0, d.connect)(L)(j)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, c = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		s = n(0),
		f = a(s),
		d = n(2),
		p = a(d),
		h = n(3),
		m = n(27),
		v = a(m),
		y = n(5),
		b = a(y),
		g = n(4),
		E = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(g),
		w = n(1),
		_ = a(w),
		N = n(38),
		C = a(N),
		O = n(20),
		T = a(O),
		k = n(12),
		P = a(k),
		S = n(13),
		j = a(S),
		L = n(31),
		x = a(L),
		I = n(275),
		R = a(I);
	n(64);
	var M = {
		NOTE: "/newApi/collection/notes",
		USER_INFO_PREFIX: "/newApi/userInfo",
		DELETE_PREFIX: "/newApi/collection/note",
		PRAISE: "/newApi/praise"
	}, U = (0, C.
	default)(i = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				list: [],
				hasNext: !1,
				inEdit: !1
			}, ["handleDelete", "getList", "handleManage", "handleCancel"].forEach(function(e) {
				n[e] = n[e].bind(n)
			}), n.handleClickPraise = b.
			default.throttle(n.handleClickPraise.bind(n), 500), n
		}
		return l(t, e), c(t, [{
			key: "getUser",
			value: function(e) {
				var t = this.props.setCenterUser;
				(0, p.
				default)(M.USER_INFO_PREFIX + "/" + e).then(function(e) {
					t(e.result)
				}).
				catch (function(e) {})
			}
		}, {
			key: "getList",
			value: function() {
				var e = this,
					t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8,
					n = this.state.list,
					a = n.length > 0 ? n[n.length - 1].id : "0";
				(0, p.
				default)("" + M.NOTE, {
					method: "GET",
					body: {
						pageEndId: a,
						count: t
					}
				}).then(function(t) {
					var a = n.concat(t.result.list || []);
					e.setState({
						list: a,
						hasNext: t.result.hasNext
					})
				})
			}
		}, {
			key: "componentDidMount",
			value: function() {
				if (this.props.isLogin) {
					var e = this.props.userInfo.userId;
					this.getUser(e), this.getList()
				}
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				if (!this.props.isLogin && e.isLogin) {
					var t = e.userInfo.userId;
					this.getUser(t), this.getList()
				}
			}
		}, {
			key: "handleDelete",
			value: function(e) {
				var t = this;
				window.$eventTrace({
					category: "Collection",
					action: "remove",
					eventLabel: "note"
				}), T.
				default.confirm({
					content: "确定删除此收藏？",
					onClickOK: function() {
						var n = t.props,
							a = n.centerUser,
							r = n.setCenterUser,
							o = t.state,
							l = o.list,
							i = o.hasNext;
						(0, p.
						default)(M.DELETE_PREFIX + "/" + e + "/delete", {
							method: "POST"
						}).then(function() {
							b.
							default.remove(l, function(t) {
								return t.id === e
							}), t.setState({
								list: l
							}, function() {
								r(u({}, a, {
									collectedNoteCnt: a.collectedNoteCnt - 1
								})), i && t.getList(1)
							})
						})
					}
				})
			}
		}, {
			key: "handleClickPraise",
			value: function(e) {
				var t = this,
					n = e.id,
					a = e.praised,
					r = e.praiseCnt,
					o = this.state.list,
					l = a ? M.PRAISE + "/delete" : "" + M.PRAISE;
				window.$eventTrace({
					category: "Praise",
					action: a ? "remove" : "add",
					eventLabel: "note"
				}), (0, p.
				default)(l, {
					method: "POST",
					body: {
						type: 2,
						id: n
					}
				}).then(function(l) {
					if (200 === l.code) {
						var i = o.findIndex(function(e) {
							return e.id === n
						});
						if (~i) {
							var c = u({}, e, {
								praised: !a,
								praiseCnt: a ? r - 1 : r + 1
							});
							t.setState({
								list: (0, v.
								default)(o, {
									$splice: [
										[i, 1, c]
									]
								})
							})
						}
					}
				}, function(e) {
					P.
					default.show(a ? "取消失败" : "点赞失败", 2e3)
				})
			}
		}, {
			key: "handleManage",
			value: function() {
				window.$eventTrace({
					category: "Collection",
					action: "manage",
					eventLabel: "note"
				}), this.setState({
					inEdit: !0
				})
			}
		}, {
			key: "handleCancel",
			value: function() {
				window.$eventTrace({
					category: "Collection",
					action: "cancelManage",
					eventLabel: "note"
				}), this.setState({
					inEdit: !1
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.state,
					n = t.list,
					a = t.hasNext,
					r = t.inEdit,
					o = n.map(function(t) {
						return f.
						default.createElement(R.
						default, {
							info: t,
							key: _.
							default.getKey(),
							inEdit: r,
							onClickPraise: e.handleClickPraise,
							onDelete: function() {
								e.handleDelete(t.id)
							}
						})
					});
				return f.
				default.createElement("div", null, n.length ? f.
				default.createElement("div", {
					className: "col-note"
				}, f.
				default.createElement("div", {
					className: "oper"
				}, r ? f.
				default.createElement("span", {
					onClick: this.handleCancel
				}, "取消") : f.
				default.createElement("span", {
					onClick: this.handleManage
				}, "管理")), f.
				default.createElement("ul", {
					className: "col-note-list clearfix"
				}, o), f.
				default.createElement(j.
				default, {
					paginationType: "hasNext",
					hasNext: a,
					bufferHeight: 400,
					dotInfo: {
						category: "Collection",
						action: "loadMore",
						eventLabel: "note"
					},
					getList: this.getList,
					endText: "没有更多心得啦~"
				})) : f.
				default.createElement(x.
				default, {
					content: "还没有收藏过心得"
				}))
			}
		}]), t
	}(f.
	default.Component)) || i,
		A = function(e) {
			return {
				centerUser: e.centerUser
			}
		}, D = function(e) {
			return {
				setCenterUser: function(t) {
					e({
						type: E.SET_CENTER_USER,
						info: t
					})
				}
			}
		};
	t.
	default = (0, h.connect)(A, D)(U)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(8),
		i = n(1),
		u = a(i),
		c = n(5),
		s = a(c),
		f = function(e) {
			var t = e.info,
				n = e.onDelete,
				a = e.inEdit,
				r = e.onClickPraise,
				i = t.id,
				c = t.title1,
				f = t.title2,
				d = t.emotion,
				p = t.emotionText,
				h = t.praised,
				m = t.praiseCnt,
				v = t.coverUrl,
				y = t.author,
				b = t.deleted,
				g = y.avatarUrl,
				E = y.nickname,
				w = y.vip;
			return o.
			default.createElement("li", {
				className: "note-item"
			}, b && !a ? o.
			default.createElement("div", {
				className: "deleted-layer"
			}, o.
			default.createElement("span", {
				className: "deleted-alert"
			}, "心得已被删除")) : null, a ? o.
			default.createElement("div", {
				className: "remove-layer"
			}, o.
			default.createElement("button", {
				className: "remove-btn",
				onClick: n
			}, "删除")) : null, o.
			default.createElement("a", {
				href: "/note/" + i,
				target: "_blank",
				className: "img-wrapper"
			}, o.
			default.createElement("div", null, o.
			default.createElement("img", {
				src: u.
				default.nosUrl(v, "138x138", !0, "1"),
				alt: "心得封面"
			}))), o.
			default.createElement("div", {
				className: "content"
			}, o.
			default.createElement("a", {
				className: "title",
				href: "/note/" + i,
				target: "_blank"
			}, c + f), o.
			default.createElement("div", {
				className: "score"
			}, s.
			default.range(0, 6 - d).map(function() {
				return o.
				default.createElement("span", {
					className: "icon-star-fill icon",
					key: u.
					default.getKey()
				})
			}), s.
			default.range(1, d).map(function() {
				return o.
				default.createElement("span", {
					className: "icon-star icon",
					key: u.
					default.getKey()
				})
			}), o.
			default.createElement("span", {
				className: "text"
			}, p || "未评价")), o.
			default.createElement("div", {
				className: "author clearfix"
			}, o.
			default.createElement(l.Link, {
				to: "/user/" + y.id
			}, o.
			default.createElement("div", {
				className: "img-wrapper"
			}, o.
			default.createElement("img", {
				src: u.
				default.nosUrl(g, "56x56"),
				alt: "头像"
			}), w ? o.
			default.createElement("span", {
				className: "icon icon-vip-small"
			}) : null)), o.
			default.createElement(l.Link, {
				to: "/user/" + y.id
			}, o.
			default.createElement("span", {
				className: "nickname"
			}, u.
			default.truncate(E, 10, "..."))), o.
			default.createElement("div", {
				className: "praise-cnt"
			}, h ? o.
			default.createElement("span", {
				className: "icon icon-thumbs-up-fill",
				onClick: function() {
					r(t)
				}
			}) : o.
			default.createElement("span", {
				className: "icon icon-thumbs-up",
				onClick: function() {
					r(t)
				}
			}), o.
			default.createElement("span", null, u.
			default.handleCountTo999(m))))))
		};
	t.
	default = f
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, c = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		s = n(0),
		f = a(s),
		d = n(2),
		p = a(d),
		h = n(3),
		m = n(5),
		v = a(m),
		y = n(4),
		b = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(y),
		g = n(1),
		E = a(g),
		w = n(38),
		_ = a(w),
		N = n(13),
		C = a(N),
		O = n(20),
		T = a(O),
		k = n(31),
		P = a(k),
		S = n(277),
		j = a(S);
	n(64);
	var L = {
		REPO: "/newApi/collection/repos",
		USER_INFO_PREFIX: "/newApi/userInfo",
		DELETE_PREFIX: "/newApi/collection/repo"
	}, x = (0, _.
	default)(i = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				list: [],
				hasNext: !1,
				inEdit: !1
			}, ["handleDelete", "getList", "handleManage", "handleCancel"].forEach(function(e) {
				n[e] = n[e].bind(n)
			}), n
		}
		return l(t, e), c(t, [{
			key: "getUser",
			value: function(e) {
				var t = this.props.setCenterUser;
				(0, p.
				default)(L.USER_INFO_PREFIX + "/" + e).then(function(e) {
					t(e.result)
				}).
				catch (function(e) {})
			}
		}, {
			key: "getList",
			value: function() {
				var e = this,
					t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12,
					n = this.state.list,
					a = n.length > 0 ? n[n.length - 1].id : "0";
				(0, p.
				default)("" + L.REPO, {
					method: "GET",
					body: {
						pageEndId: a,
						count: t
					}
				}).then(function(t) {
					var a = n.concat(t.result.list || []);
					e.setState({
						list: a,
						hasNext: t.result.hasNext
					})
				})
			}
		}, {
			key: "componentDidMount",
			value: function() {
				if (this.props.isLogin) {
					var e = this.props.userInfo.userId;
					this.getUser(e), this.getList()
				}
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				if (!this.props.isLogin && e.isLogin) {
					var t = e.userInfo.userId;
					this.getUser(t), this.getList()
				}
			}
		}, {
			key: "handleDelete",
			value: function(e) {
				var t = this;
				window.$eventTrace({
					category: "Collection",
					action: "remove",
					eventLabel: "repo"
				}), T.
				default.confirm({
					content: "确定删除此收藏？",
					onClickOK: function() {
						var n = t.props,
							a = n.centerUser,
							r = n.setCenterUser,
							o = t.state,
							l = o.list,
							i = o.hasNext;
						(0, p.
						default)(L.DELETE_PREFIX + "/" + e + "/delete", {
							method: "POST"
						}).then(function() {
							v.
							default.remove(l, function(t) {
								return t.id === e
							}), t.setState({
								list: l
							}, function() {
								r(u({}, a, {
									collectedRepoCnt: a.collectedRepoCnt - 1
								})), i && t.getList(1)
							})
						})
					}
				})
			}
		}, {
			key: "handleManage",
			value: function() {
				window.$eventTrace({
					category: "Collection",
					action: "manage",
					eventLabel: "repo"
				}), this.setState({
					inEdit: !0
				})
			}
		}, {
			key: "handleCancel",
			value: function() {
				window.$eventTrace({
					category: "Collection",
					action: "cancelManage",
					eventLabel: "repo"
				}), this.setState({
					inEdit: !1
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.state,
					n = t.list,
					a = t.hasNext,
					r = t.inEdit,
					o = n.map(function(t) {
						return f.
						default.createElement(j.
						default, {
							info: t,
							key: E.
							default.getKey(),
							inEdit: r,
							onDelete: function() {
								e.handleDelete(t.id)
							}
						})
					});
				return f.
				default.createElement("div", null, n.length ? f.
				default.createElement("div", {
					className: "col-repo"
				}, f.
				default.createElement("div", {
					className: "oper"
				}, r ? f.
				default.createElement("span", {
					onClick: this.handleCancel
				}, "取消") : f.
				default.createElement("span", {
					onClick: this.handleManage
				}, "管理")), f.
				default.createElement("ul", {
					className: "col-repo-list clearfix"
				}, o), f.
				default.createElement(C.
				default, {
					paginationType: "hasNext",
					hasNext: a,
					bufferHeight: 400,
					getList: this.getList,
					dotInfo: {
						category: "Collection",
						action: "loadMore",
						eventLabel: "repo"
					},
					endText: "没有更多合辑啦~"
				})) : f.
				default.createElement(P.
				default, {
					content: "还没有收藏过合辑"
				}))
			}
		}]), t
	}(f.
	default.Component)) || i,
		I = function(e) {
			return {
				centerUser: e.centerUser
			}
		}, R = function(e) {
			return {
				setCenterUser: function(t) {
					e({
						type: b.SET_CENTER_USER,
						info: t
					})
				}
			}
		};
	t.
	default = (0, h.connect)(I, R)(x)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(8),
		i = n(1),
		u = a(i),
		c = function(e) {
			var t = e.info,
				n = e.onDelete,
				a = e.inEdit,
				r = t.id,
				i = t.title,
				c = t.tags,
				s = t.coverUrl,
				f = t.browseCnt,
				d = t.author,
				p = t.deleted,
				h = d.avatarUrl,
				m = d.nickname,
				v = d.vip;
			return o.
			default.createElement("li", {
				className: "repo-item"
			}, p && !a ? o.
			default.createElement("div", {
				className: "deleted-layer"
			}, o.
			default.createElement("span", {
				className: "deleted-alert"
			}, "合辑已被删除")) : null, a ? o.
			default.createElement("div", {
				className: "remove-layer"
			}, o.
			default.createElement("button", {
				className: "remove-btn",
				onClick: n
			}, "删除")) : null, o.
			default.createElement("a", {
				href: "/repo/" + r,
				target: "_blank"
			}, o.
			default.createElement("img", {
				className: "repo-cover",
				src: u.
				default.nosUrl(s, "580y384", !0, "1"),
				alt: "合辑封面"
			})), o.
			default.createElement("div", {
				className: "info"
			}, o.
			default.createElement("a", {
				className: "title",
				href: "/repo/" + r,
				target: "_blank"
			}, i), o.
			default.createElement("div", {
				className: "data clearfix"
			}, o.
			default.createElement("span", {
				className: "tags"
			}, (c || []).slice(0, 3).map(function(e) {
				return "#" + e.name
			}).join(" ")), o.
			default.createElement("span", {
				className: "browse"
			}, o.
			default.createElement("span", {
				className: "icon icon-eye"
			}), " ", u.
			default.toW(f))), o.
			default.createElement("div", {
				className: "author clearfix"
			}, o.
			default.createElement(l.Link, {
				to: "/user/" + d.id
			}, o.
			default.createElement("div", {
				className: "img-wrapper"
			}, o.
			default.createElement("img", {
				src: u.
				default.nosUrl(h, "56x56"),
				alt: "头像"
			}), v ? o.
			default.createElement("span", {
				className: "icon icon-vip-small"
			}) : null)), o.
			default.createElement(l.Link, {
				to: "/user/" + d.id
			}, o.
			default.createElement("span", {
				className: "nickname"
			}, m)))))
		};
	t.
	default = c
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, c = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		s = n(0),
		f = a(s),
		d = n(38),
		p = a(d),
		h = n(3),
		m = n(4),
		v = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(m),
		y = n(2),
		b = a(y),
		g = n(5),
		E = a(g),
		w = n(31),
		_ = a(w),
		N = n(13),
		C = a(N),
		O = n(20),
		T = a(O),
		k = n(279),
		P = a(k),
		S = {
			VIDEO: "/newApi/collection/videos",
			USER_INFO_PREFIX: "/newApi/userInfo",
			DELETE_PREFIX: "/newApi/collection/video"
		}, j = (0, p.
		default)(i = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.state = {
					list: [],
					hasNext: !1,
					inEdit: !1
				}, ["handleDelete", "getList", "handleManage", "handleCancel"].forEach(function(e) {
					n[e] = n[e].bind(n)
				}), n
			}
			return l(t, e), c(t, [{
				key: "getUser",
				value: function(e) {
					var t = this.props.setCenterUser;
					(0, b.
					default)(S.USER_INFO_PREFIX + "/" + e).then(function(e) {
						t(e.result)
					}).
					catch (function(e) {})
				}
			}, {
				key: "getList",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12,
						n = this.state.list,
						a = n.length > 0 ? n[n.length - 1].id : "0";
					(0, b.
					default)("" + S.VIDEO, {
						method: "GET",
						body: {
							pageEndId: a,
							count: t
						}
					}).then(function(t) {
						var a = n.concat(t.result.list || []);
						e.setState({
							list: a,
							hasNext: t.result.hasNext
						})
					})
				}
			}, {
				key: "componentDidMount",
				value: function() {
					if (this.props.isLogin) {
						var e = this.props.userInfo.userId;
						this.getUser(e), this.getList()
					}
				}
			}, {
				key: "componentWillReceiveProps",
				value: function(e) {
					if (!this.props.isLogin && e.isLogin) {
						var t = e.userInfo.userId;
						this.getUser(t), this.getList()
					}
				}
			}, {
				key: "handleDelete",
				value: function(e) {
					var t = this;
					window.$eventTrace({
						category: "Collection",
						action: "remove",
						eventLabel: "video"
					}), T.
					default.confirm({
						content: "确定删除此收藏？",
						onClickOK: function() {
							var n = t.props,
								a = n.centerUser,
								r = n.setCenterUser,
								o = t.state,
								l = o.list,
								i = o.hasNext;
							(0, b.
							default)(S.DELETE_PREFIX + "/" + e + "/delete", {
								method: "POST"
							}).then(function() {
								E.
								default.remove(l, function(t) {
									return t.id === e
								}), t.setState({
									list: l
								}, function() {
									r(u({}, a, {
										collectedVideoCnt: a.collectedVideoCnt - 1
									})), i && t.getList(1)
								})
							})
						}
					})
				}
			}, {
				key: "handleManage",
				value: function() {
					window.$eventTrace({
						category: "Collection",
						action: "manage",
						eventLabel: "video"
					}), this.setState({
						inEdit: !0
					})
				}
			}, {
				key: "handleCancel",
				value: function() {
					window.$eventTrace({
						category: "Collection",
						action: "cancelManage",
						eventLabel: "video"
					}), this.setState({
						inEdit: !1
					})
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = this.state,
						n = t.list,
						a = t.hasNext,
						r = t.inEdit,
						o = n.map(function(t, n) {
							return f.
							default.createElement(P.
							default, {
								id: t.id,
								title: t.title,
								duration: t.duration,
								tags: t.tags,
								coverUrl: t.coverUrl,
								browserCnt: t.browserCnt,
								author: t.author,
								inEdit: r,
								onDelete: function() {
									e.handleDelete(t.id)
								},
								key: "video_" + n
							})
						});
					return n.length ? f.
					default.createElement("div", {
						className: "col-video"
					}, f.
					default.createElement("div", {
						className: "oper"
					}, r ? f.
					default.createElement("span", {
						onClick: this.handleCancel
					}, "取消") : f.
					default.createElement("span", {
						onClick: this.handleManage
					}, "管理")), f.
					default.createElement("ul", {
						className: "col-video-list clearfix"
					}, o), f.
					default.createElement(C.
					default, {
						paginationType: "hasNext",
						hasNext: a,
						bufferHeight: 400,
						getList: this.getList,
						dotInfo: {
							category: "Collection",
							action: "loadMore",
							eventLabel: "video"
						},
						endText: "没有更多视频啦~"
					})) : f.
					default.createElement(_.
					default, {
						content: "还没有收藏过视频"
					})
				}
			}]), t
		}(f.
		default.Component)) || i,
		L = function(e) {
			return {
				centerUser: e.centerUser
			}
		}, x = function(e) {
			return {
				setCenterUser: function(t) {
					e({
						type: v.SET_CENTER_USER,
						info: t
					})
				}
			}
		};
	t.
	default = (0, h.connect)(L, x)(j)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(8),
		i = n(1),
		u = a(i);
	n(64);
	var c = function(e) {
		var t = e.id,
			n = e.duration,
			a = e.title,
			r = e.coverUrl,
			i = e.browserCnt,
			c = e.author,
			s = e.inEdit,
			f = e.onDelete,
			d = c.avatarUrl,
			p = c.nickname,
			h = c.vip,
			m = u.
		default.getDisplayTime2(n);
		return o.
		default.createElement("li", {
			className: "video-item"
		}, s ? o.
		default.createElement("div", {
			className: "remove-layer"
		}, o.
		default.createElement("button", {
			className: "remove-btn",
			onClick: f
		}, "删除")) : null, o.
		default.createElement("a", {
			href: "/video/" + t,
			target: "_blank"
		}, o.
		default.createElement("span", {
			className: "icon icon-play"
		})), o.
		default.createElement("a", {
			href: "/video/" + t,
			target: "_blank",
			style: {
				position: "relative"
			},
			className: "avatar"
		}, o.
		default.createElement("img", {
			className: "video-cover",
			src: u.
			default.nosUrl(r, "580y388", !0, "1"),
			alt: "合辑封面"
		})), o.
		default.createElement("div", {
			className: "info"
		}, o.
		default.createElement("a", {
			className: "title",
			href: "/video/" + t,
			target: "_blank"
		}, a), o.
		default.createElement("div", {
			className: "data clearfix"
		}, o.
		default.createElement("span", {
			className: "duration"
		}, o.
		default.createElement("span", {
			className: "icon icon-time"
		}), o.
		default.createElement("span", null, m)), o.
		default.createElement("span", {
			className: "browse"
		}, o.
		default.createElement("span", {
			className: "icon icon-eye"
		}), o.
		default.createElement("span", null, u.
		default.toW(i)))), o.
		default.createElement("div", {
			className: "author clearfix"
		}, o.
		default.createElement(l.Link, {
			to: "/user/" + c.id
		}, o.
		default.createElement("div", {
			className: "img-wrapper"
		}, o.
		default.createElement("img", {
			src: u.
			default.nosUrl(d, "48y48"),
			alt: "头像"
		}), h ? o.
		default.createElement("span", {
			className: "icon icon-vip-small"
		}) : null)), o.
		default.createElement(l.Link, {
			to: "/user/" + c.id
		}, o.
		default.createElement("span", {
			className: "nickname"
		}, p)))))
	};
	t.
	default = c
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(8),
		d = n(11),
		p = a(d),
		h = n(129),
		m = a(h),
		v = n(28),
		y = a(v);
	n(64), n(164);
	var b = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props.centerUser,
					t = e.collectedRepoCnt,
					n = e.collectedNoteCnt,
					a = e.collectedVideoCnt;
				return c.
				default.createElement("div", null, c.
				default.createElement(p.
				default, null), c.
				default.createElement("div", {
					className: "center-wrapper"
				}, c.
				default.createElement(m.
				default, null), c.
				default.createElement("div", {
					className: "collection-wrapper"
				}, c.
				default.createElement("ul", {
					className: "tabs clearfix"
				}, c.
				default.createElement("li", null, c.
				default.createElement(f.Link, {
					to: "/collection/repo",
					activeClassName: "active"
				}, "我收藏的合辑 ", t)), c.
				default.createElement("li", null, c.
				default.createElement(f.Link, {
					to: "/collection/note",
					activeClassName: "active"
				}, "我收藏的心得 ", n)), c.
				default.createElement("li", null, c.
				default.createElement(f.Link, {
					to: "/collection/video",
					activeClassName: "active"
				}, "我收藏的视频 ", a))), this.props.children), c.
				default.createElement(y.
				default, null)))
			}
		}]), t
	}(c.
	default.Component),
		g = function(e) {
			return {
				centerUser: e.centerUser
			}
		};
	t.
	default = (0, s.connect)(g)(b)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(8),
		i = n(1),
		u = a(i);
	n(434);
	var c = function(e) {
		var t = e.tabs,
			n = e.tabId;
		return o.
		default.createElement("div", {
			className: "evaluation-header-wrapper"
		}, o.
		default.createElement("h1", null, "联合测评"), o.
		default.createElement("p", {
			className: "description"
		}, "专业公正的美妆测评，保证零广告、零软文！"), o.
		default.createElement("ul", {
			className: "tabs"
		}, o.
		default.createElement("li", {
			className: "-1" === n ? "active" : ""
		}, o.
		default.createElement(l.Link, {
			to: "/evaluation?tabId=-1"
		}, "全部")), t.map(function(e) {
			return o.
			default.createElement("li", {
				className: e.id === n ? "active" : "",
				key: u.
				default.getKey()
			}, o.
			default.createElement(l.Link, {
				to: "/evaluation?tabId=" + e.id
			}, e.name))
		})))
	};
	t.
	default = c
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(74),
		f = a(s),
		d = n(1),
		p = a(d);
	n(153);
	var h = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleMouseEnter = n.handleMouseEnter.bind(n), n.handleMouseLeave = n.handleMouseLeave.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "handleMouseEnter",
			value: function() {
				var e = this.props;
				(0, e.showCollect)(e.id)
			}
		}, {
			key: "handleMouseLeave",
			value: function() {
				var e = this.props;
				(0, e.hideCollect)(e.id)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.title,
					a = e.tags,
					r = e.vol,
					o = e.evaluationTag,
					l = e.coverUrl,
					i = e.browseCnt,
					u = e.collected,
					s = e.showbg,
					d = e.collectedChange,
					h = "hidden";
				return s && (h = "visible"), c.
				default.createElement("li", {
					className: "evaluation-tag-item",
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave
				}, c.
				default.createElement("a", {
					href: "/repo/" + t,
					target: "_blank",
					className: "avatar"
				}, c.
				default.createElement("img", {
					className: "evaluation-cover",
					src: p.
					default.nosUrl(l, "470y312", !0, "1"),
					alt: "合辑封面"
				})), c.
				default.createElement("a", {
					href: "/repo/" + t,
					target: "_blank",
					className: "evaluation-hover",
					style: {
						visibility: h
					}
				}, c.
				default.createElement(f.
				default, {
					id: t,
					type: 3,
					className: "collect-button",
					collected: u,
					collectedChange: function() {
						d(t, !u)
					}
				})), c.
				default.createElement("div", {
					className: "info"
				}, c.
				default.createElement("a", {
					className: "title",
					href: "/repo/" + t,
					target: "_blank"
				}, c.
				default.createElement("span", {
					className: "title-tag"
				}, o), c.
				default.createElement("span", {
					className: "title-vol"
				}, "VOL.", r), n), c.
				default.createElement("div", {
					className: "data clearfix"
				}, c.
				default.createElement("span", {
					className: "tags"
				}, (a || []).slice(0, 3).map(function(e) {
					return "#" + e.name
				}).join(" ")), c.
				default.createElement("span", {
					className: "browse"
				}, c.
				default.createElement("span", {
					className: "icon icon-eye"
				}), p.
				default.toW(i)))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(2),
		d = a(f),
		p = n(13),
		h = a(p),
		m = n(27),
		v = a(m),
		y = n(282),
		b = a(y);
	n(153);
	var g = {
		EVALUATION_PREFIX: "/newApi/evaluation/",
		CURRENT: "/newApi/ms/user/current"
	}, E = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.getList = n.getList.bind(n), n.handleShowCollect = n.handleShowCollect.bind(n), n.handleHideCollect = n.handleHideCollect.bind(n), n.handleCollectChange = n.handleCollectChange.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "getList",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
					n = this.props,
					a = n.query,
					r = n.changeList,
					o = e.length > 0 ? e[e.length - 1].id : "0";
				(0, d.
				default)(g.EVALUATION_PREFIX + "/" + a, {
					method: "GET",
					body: {
						pageEndId: o,
						count: t
					}
				}).then(function(t) {
					var n = e.concat(t.result.list || []);
					r(n, t.result.hasNext)
				})
			}
		}, {
			key: "handleShowCollect",
			value: function(e) {
				var t = this.props,
					n = t.list,
					a = t.changeList,
					r = t.hasNext;
				a((0, v.
				default)(n, {
					$apply: function(t) {
						return t.map(function(t) {
							return t.id === e ? (0, v.
							default)(t, {
								showbg: {
									$set: !0
								}
							}) : (0, v.
							default)(t, {
								showbg: {
									$set: !1
								}
							})
						})
					}
				}), r)
			}
		}, {
			key: "handleHideCollect",
			value: function() {
				var e = this.props,
					t = e.list,
					n = e.changeList,
					a = e.hasNext;
				n((0, v.
				default)(t, {
					$apply: function(e) {
						return e.map(function(e) {
							return (0, v.
							default)(e, {
								showbg: {
									$set: !1
								}
							})
						})
					}
				}), a)
			}
		}, {
			key: "handleCollectChange",
			value: function(e, t) {
				var n = this.props,
					a = n.list,
					r = n.changeList,
					o = n.hasNext;
				r((0, v.
				default)(a, {
					$apply: function(n) {
						return n.map(function(n) {
							return n.id === e ? (0, v.
							default)(n, {
								collected: {
									$set: t
								}
							}) : n
						})
					}
				}), o)
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				if (e.isLogin && !this.props.isLogin && (this.current = 0, this.getList([])), this.props.isLogin && !e.isLogin) {
					var t = this.props,
						n = t.list,
						a = t.changeList,
						r = t.hasNext;
					a((0, v.
					default)(n, {
						$apply: function(e) {
							return e.map(function(e) {
								return (0, v.
								default)(e, {
									collected: {
										$set: !1
									}
								})
							})
						}
					}), r)
				}
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = t.list,
					a = t.hasNext,
					r = n.map(function(t, n) {
						return c.
						default.createElement(b.
						default, {
							id: t.id,
							title: t.title,
							tags: t.tags,
							coverUrl: t.coverUrl,
							browseCnt: t.browseCnt,
							collected: t.collected,
							vol: t.vol,
							evaluationTag: t.evaluationTag,
							showbg: t.showbg,
							showCollect: e.handleShowCollect,
							hideCollect: e.handleHideCollect,
							collectedChange: e.handleCollectChange,
							key: "evaluation_" + n
						})
					});
				return c.
				default.createElement("div", null, c.
				default.createElement("ul", {
					className: "col-evaluation-list clearfix",
					style: {
						minHeight: "550px"
					}
				}, r), c.
				default.createElement("div", {
					className: "eval-loading-more"
				}, n.length > 0 ? c.
				default.createElement(h.
				default, {
					paginationType: "hasNext",
					hasNext: a,
					bufferHeight: 400,
					getList: function() {
						e.getList(n)
					},
					dotInfo: this.props.dotInfo,
					endText: "没有更多测评啦~"
				}) : null))
			}
		}]), t
	}(c.
	default.Component),
		w = function(e) {
			return {
				isLogin: e.user.isLogin,
				list: e.evaluationRepo.list || [],
				hasNext: e.evaluationRepo.hasNext
			}
		}, _ = function(e) {
			return {
				changeList: function(t, n) {
					e({
						type: "SET_EVALUATION_REPO",
						list: t,
						hasNext: n
					})
				}
			}
		};
	t.
	default = (0, s.connect)(w, _)(E)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(2),
		f = a(s),
		d = n(3),
		p = n(4),
		h = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(p),
		m = n(11),
		v = a(m),
		y = n(28),
		b = a(y),
		g = n(281),
		E = a(g),
		w = n(283),
		_ = a(w);
	n(435);
	var N = {
		TABS: "/newApi/evaluation/fixed",
		TAB_PREFIX: "/newApi/evaluation",
		CURRENT_USER: "/newApi/ms/user/current"
	}, C = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "componentWillReceiveProps",
			value: function(e) {
				this.props.tabId !== e.tabId && this.props.getList(e.tabId)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.tabId,
					n = e.tabs;
				return c.
				default.createElement("div", null, c.
				default.createElement(v.
				default, null), c.
				default.createElement("div", {
					className: "evaluation-wrapper"
				}, c.
				default.createElement(E.
				default, {
					tabId: t,
					tabs: n
				}), c.
				default.createElement(_.
				default, {
					query: t,
					dotInfo: {
						category: "Evaluation",
						eventLabel: "repo",
						action: "loadMore"
					}
				}), c.
				default.createElement(b.
				default, null)))
			}
		}], [{
			key: "fetchData",
			value: function(e, t, n) {
				var a = e.dispatch,
					r = e.getState,
					o = r(),
					l = o.headerInfo,
					i = n.query.tabId || -1,
					u = (0, f.
					default)(N.CURRENT_USER, {
						headerInfo: l
					}),
					c = (0, f.
					default)(N.TABS, {
						headerInfo: l
					}),
					s = (0, f.
					default)(N.TAB_PREFIX + "/" + i, {
						method: "GET",
						body: {
							count: 12,
							pageEndId: "0"
						},
						headerInfo: l
					});
				return Promise.all([u, c, s]).then(function(e) {
					a(200 === e[0].code ? {
						type: h.LOGIN_SUCCESS,
						info: e[0].result
					} : {
						type: h.LOGIN_FAILURE
					});
					var t = e[2].result,
						n = t.list,
						r = t.hasNext,
						o = e[1].result;
					a({
						type: h.SET_EVALUATION_REPO,
						list: n,
						hasNext: r
					}), a({
						type: h.SET_EVALUATION_TABS,
						tabs: o
					})
				}).
				catch (function(e) {
					throw e
				})
			}
		}]), t
	}(c.
	default.Component),
		O = function(e, t) {
			return {
				tabId: t.location.query.tabId || "-1",
				tabs: e.evaluationTabs
			}
		}, T = function(e) {
			return {
				getList: function(t) {
					(0, f.
					default)(N.TAB_PREFIX + "/" + t).then(function(t) {
						var n = t.result,
							a = n.list,
							r = n.hasNext;
						e({
							type: h.SET_EVALUATION_REPO,
							list: a || [],
							hasNext: r
						})
					}).
					catch (function(e) {})
				}
			}
		};
	t.
	default = (0, d.connect)(O, T)(C)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(1),
		f = a(s);
	n(154);
	var d = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.title,
					a = e.vol,
					r = e.evaluationTag,
					o = e.coverUrl;
				return c.
				default.createElement("li", {
					className: "evaluation-home-item"
				}, c.
				default.createElement("div", {
					className: "info"
				}, c.
				default.createElement("a", {
					href: "/repo/" + t,
					target: "_blank"
				}, c.
				default.createElement("img", {
					className: "evaluation-cover",
					src: f.
					default.nosUrl(o, "640y324", !0, "1"),
					alt: "封面"
				})), c.
				default.createElement("a", {
					className: "title",
					href: "/repo/" + t,
					target: "_blank"
				}, c.
				default.createElement("span", {
					className: "title-tag"
				}, r), c.
				default.createElement("span", {
					className: "title-vol"
				}, "VOL.", a), n), c.
				default.createElement("a", {
					href: "/repo/" + t,
					target: "_blank",
					className: "img-hover"
				})))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = d
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(285),
		d = a(f);
	n(154);
	var p = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props.list,
					t = e.map(function(e, t) {
						return c.
						default.createElement(d.
						default, {
							id: e.id,
							title: e.title,
							tags: e.tags,
							coverUrl: e.coverUrl,
							browseCnt: e.browseCnt,
							vol: e.vol,
							evaluationTag: e.evaluationTag,
							key: t.toString()
						})
					});
				return c.
				default.createElement("div", null, c.
				default.createElement("ul", {
					className: "col-evaluation-list clearfix",
					style: {
						display: "inline-block"
					}
				}, t))
			}
		}]), t
	}(c.
	default.Component),
		h = function(e) {
			return {
				list: e.homePage.evaluationList.slice(0, 3)
			}
		};
	t.
	default = (0, s.connect)(h)(p)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(1),
		f = a(s),
		d = n(5),
		p = a(d);
	n(155);
	var h = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.title,
					a = e.emotion,
					r = e.coverUrl,
					o = e.categoryName;
				return c.
				default.createElement("li", {
					className: "note-home-item"
				}, c.
				default.createElement("div", {
					className: "info"
				}, c.
				default.createElement("a", {
					href: "/note/" + t,
					target: "_blank",
					className: "img-wrapper"
				}, c.
				default.createElement("div", null, c.
				default.createElement("img", {
					src: f.
					default.nosUrl(r, "300y300", !0, "1"),
					alt: "心得封面"
				}))), c.
				default.createElement("a", {
					className: "title",
					href: "/note/" + t,
					target: "_blank"
				}, n), c.
				default.createElement("a", {
					href: "/note/" + t,
					target: "_blank",
					className: "img-hover"
				})), c.
				default.createElement("div", {
					className: "content"
				}, c.
				default.createElement("div", {
					className: "score"
				}, p.
				default.range(0, 6 - a).map(function() {
					return c.
					default.createElement("span", {
						className: "icon-star-fill icon",
						key: f.
						default.getKey()
					})
				}), p.
				default.range(1, a).map(function() {
					return c.
					default.createElement("span", {
						className: "icon-star icon",
						key: f.
						default.getKey()
					})
				})), c.
				default.createElement("div", {
					className: "category"
				}, o)))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(287),
		d = a(f);
	n(155), n(159);
	var p = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props.list,
					t = e.map(function(e, t) {
						return c.
						default.createElement(d.
						default, {
							id: e.id,
							title: e.title,
							emotion: e.emotion,
							coverUrl: e.coverUrl,
							categoryName: e.categoryName,
							key: t.toString()
						})
					});
				return c.
				default.createElement("div", null, c.
				default.createElement("ul", {
					className: "col-note-list clearfix"
				}, t))
			}
		}]), t
	}(c.
	default.Component),
		h = function(e) {
			return {
				list: e.homePage.noteList.slice(0, 7) || []
			}
		};
	t.
	default = (0, s.connect)(h)(p)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(8),
		f = n(25),
		d = a(f),
		p = n(1),
		h = a(p);
	n(156);
	var m = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.title,
					a = e.tags,
					r = e.coverUrl,
					o = e.browseCnt,
					l = e.author,
					i = e.followChange,
					u = e.showFollowTip,
					f = e.closeDownload,
					p = l.avatarUrl,
					m = l.nickname,
					v = l.vip,
					y = l.followType;
				return c.
				default.createElement("li", {
					className: "repo-home-item"
				}, c.
				default.createElement("div", {
					className: "info"
				}, c.
				default.createElement("a", {
					href: "/repo/" + t,
					target: "_blank"
				}, c.
				default.createElement("img", {
					className: "repo-cover",
					src: h.
					default.nosUrl(r, "470y312", !0, "1"),
					alt: "合辑封面"
				})), c.
				default.createElement("a", {
					href: "/repo/" + t,
					target: "_blank",
					className: "img-hover"
				}), c.
				default.createElement("a", {
					className: "title",
					href: "/repo/" + t,
					target: "_blank"
				}, n)), c.
				default.createElement("div", null, c.
				default.createElement("div", {
					className: "data clearfix"
				}, c.
				default.createElement("span", {
					className: "tags"
				}, (a || []).slice(0, 3).map(function(e) {
					return " #" + e.name
				}).join(" ")), c.
				default.createElement("span", {
					className: "browse"
				}, c.
				default.createElement("span", {
					className: "icon icon-eye"
				}), h.
				default.toW(o))), c.
				default.createElement("div", {
					className: "author clearfix"
				}, c.
				default.createElement(s.Link, {
					to: "/user/" + l.id
				}, c.
				default.createElement("div", {
					className: "img-wrapper"
				}, c.
				default.createElement("img", {
					src: h.
					default.nosUrl(p, "48y48"),
					alt: "头像"
				}), v ? c.
				default.createElement("span", {
					className: "icon icon-vip-small"
				}) : null)), c.
				default.createElement(s.Link, {
					to: "/user/" + l.id,
					target: "_blank"
				}, c.
				default.createElement("span", {
					className: "nickname"
				}, m)), c.
				default.createElement(d.
				default, {
					className: "follow",
					id: l.id,
					type: 1,
					disableCancel: !0,
					initialFollowType: y,
					disableGetFollowAfterLogin: !0,
					followCallback: function() {
						for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
						i.apply(void 0, n.concat([t]))
					},
					showFollowTip: u,
					closeDownload: function() {
						f(t)
					}
				}))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = m
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(289),
		d = a(f);
	n(156);
	var p = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "componentWillReceiveProps",
			value: function(e) {
				e.isLogin && !this.props.isLogin && (window.location.href = "/")
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.list,
					n = t.map(function(t, n) {
						return c.
						default.createElement(d.
						default, {
							id: t.id,
							title: t.title,
							tags: t.tags,
							coverUrl: t.coverUrl,
							browseCnt: t.browseCnt,
							author: t.author,
							showFollowTip: t.showFollowTip,
							closeDownload: e.props.closeDownload,
							followChange: e.props.followChange,
							key: n.toString()
						})
					});
				return c.
				default.createElement("div", null, c.
				default.createElement("ul", {
					className: "col-repo-list clearfix"
				}, n))
			}
		}]), t
	}(c.
	default.Component),
		h = function(e) {
			return {
				list: e.homePage.repoList.slice(0, 9) || [],
				isLogin: e.user.isLogin
			}
		};
	t.
	default = (0, s.connect)(h)(p)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(1),
		i = a(l),
		u = n(9),
		c = a(u);
	n(436);
	var s = {
		0: {
			text: "未开始",
			className: "toStart"
		},
		1: {
			text: "美学试用",
			className: "new"
		},
		2: {
			text: "美学试用",
			className: "new"
		},
		3: {
			text: "已结束",
			className: "over"
		},
		4: {
			text: "新品试用",
			className: "new"
		}
	}, f = function(e) {
		var t = e.applyStatus;
		return !e.newProduct || 1 !== t && 2 !== t ? 2 === t ? 1 : t : 4
	}, d = function(e) {
		var t = e.applyStatus,
			n = e.startTime,
			a = e.endTime;
		switch (t) {
			case 0:
				return n + "开始";
			case 1:
			case 2:
				return a + "截止";
			case 3:
				return a + "结束";
			default:
				return n + "开始"
		}
	}, p = function(e) {
		var t = e.id,
			n = e.image,
			a = e.zhName,
			r = e.quantity,
			l = e.spec,
			u = e.price,
			p = e.applyNumber,
			h = f(e),
			m = d(e),
			v = i.
		default.toW(u), y = i.
		default.toW(r), b = i.
		default.toW(p), g = (0, c.
		default)({
			quantity: !0,
			"float-right": 0 === p
		});
		return o.
		default.createElement("li", {
			className: "trial-home-item",
			target: "_blank"
		}, o.
		default.createElement("a", {
			href: "trial/" + t,
			target: "_blank"
		}, o.
		default.createElement("div", {
			className: "cover"
		}, o.
		default.createElement("img", {
			className: "image",
			src: i.
			default.nosUrl(n, "640y340", !0, "1"),
			alt: "封面"
		}), o.
		default.createElement("div", {
			className: s[h].className + " status"
		}, s[h].text), o.
		default.createElement("div", {
			className: "time"
		}, o.
		default.createElement("span", {
			className: "icon-new icon-time-new"
		}), m)), o.
		default.createElement("div", {
			className: "title"
		}, o.
		default.createElement("span", {
			className: "title-zh"
		}, a), o.
		default.createElement("span", {
			className: "title-spec"
		}, l)), o.
		default.createElement("div", {
			className: "data"
		}, o.
		default.createElement("div", {
			className: "price"
		}, "价值 ", o.
		default.createElement("span", null, "¥" + v)), o.
		default.createElement("div", {
			className: g
		}, "限量", o.
		default.createElement("span", null, y), "份"), p > 0 ? o.
		default.createElement("div", {
			className: "number"
		}, "共", b, "人已申请") : null), o.
		default.createElement("div", {
			className: "item-hover"
		})))
	};
	t.
	default = p
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(3),
		d = n(291),
		p = a(d),
		h = function(e) {
			function t(e) {
				return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return l(t, e), u(t, [{
				key: "render",
				value: function() {
					var e = this.props.list,
						t = e.map(function(e, t) {
							return s.
							default.createElement(p.
							default, i({}, e, {
								key: t
							}))
						});
					return s.
					default.createElement("div", null, s.
					default.createElement("ul", {
						className: "col-trial-list clearfix"
					}, t))
				}
			}]), t
		}(s.
		default.Component),
		m = function(e) {
			return {
				list: e.homePage.trialList.slice(0, 3)
			}
		};
	t.
	default = (0, f.connect)(m)(h)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(1),
		f = a(s),
		d = n(25),
		p = a(d);
	n(157);
	var h = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.avatarUrl,
					a = e.nickname,
					r = e.vip,
					o = e.followType,
					l = e.description,
					i = e.followChange,
					u = e.showFollowTip,
					s = e.closeDownload;
				return c.
				default.createElement("li", {
					className: "user-home-item"
				}, c.
				default.createElement("div", {
					className: "avatar"
				}, c.
				default.createElement("a", {
					href: "/user/" + t,
					target: "_blank"
				}, c.
				default.createElement("img", {
					src: f.
					default.nosUrl(n, "120y120", !0, "1"),
					alt: "头像"
				}), r ? c.
				default.createElement("span", {
					className: "icon icon-vip-large"
				}) : null), c.
				default.createElement("a", {
					className: "nickname",
					href: "/user/" + t,
					target: "_blank"
				}, f.
				default.truncate(a, 10, "...")), c.
				default.createElement("div", null, c.
				default.createElement("a", {
					href: "/user/" + t,
					target: "_blank",
					className: "img-hover"
				}))), c.
				default.createElement("div", {
					className: "content"
				}, c.
				default.createElement("span", {
					className: "content-description"
				}, l), c.
				default.createElement("div", {
					className: "content-follow"
				}, c.
				default.createElement(p.
				default, {
					className: "follow-btn",
					type: 1,
					id: t,
					initialFollowType: o,
					disableCancel: !0,
					disableGetFollowAfterLogin: !0,
					followCallback: function() {
						for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
						i.apply(void 0, n.concat([t]))
					},
					showFollowTip: u,
					closeDownload: function() {
						s(t)
					}
				}))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(293),
		d = a(f);
	n(157), n(159);
	var p = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				order: 0,
				left: 0,
				canLeft: !1,
				canRight: !0
			}, n.handleLeft = n.handleLeft.bind(n), n.handleRight = n.handleRight.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "handleLeft",
			value: function() {
				var e = this.state.order;
				--e >= 0 && (this.setState({
					order: e,
					left: -1075 * e
				}), window.$eventTrace({
					category: "Home",
					action: "moveCarousel",
					eventLabel: "user"
				}), 0 === e ? this.setState({
					canLeft: !1,
					canRight: !0
				}) : this.setState({
					canLeft: !0,
					canRight: !0
				}))
			}
		}, {
			key: "handleRight",
			value: function() {
				var e = this.state.order;
				++e <= 4 && (this.setState({
					order: e,
					left: -1075 * e
				}), window.$eventTrace({
					category: "Home",
					action: "moveCarousel",
					eventLabel: "user"
				}), 4 === e ? this.setState({
					canRight: !1,
					canLeft: !0
				}) : this.setState({
					canRight: !0,
					canLeft: !0
				}))
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.list,
					n = this.state,
					a = n.left,
					r = n.canLeft,
					o = n.canRight,
					l = t.map(function(t, n) {
						return c.
						default.createElement(d.
						default, {
							id: t.id,
							nickname: t.nickname,
							avatarUrl: t.avatarUrl,
							vip: t.vip,
							description: t.description,
							followType: t.followType,
							showFollowTip: t.showFollowTip,
							closeDownload: e.props.closeDownload,
							followChange: e.props.followChange,
							key: n.toString()
						})
					});
				return c.
				default.createElement("div", {
					className: "user-list"
				}, r ? c.
				default.createElement("div", {
					className: "left icon icon-left-arrow",
					onClick: this.handleLeft
				}) : c.
				default.createElement("div", {
					className: "left icon icon-left-arrow2",
					onClick: this.handleLeft
				}), o ? c.
				default.createElement("div", {
					className: "right icon icon-right-arrow",
					onClick: this.handleRight
				}) : c.
				default.createElement("div", {
					className: "right icon icon-right-arrow2",
					onClick: this.handleRight
				}), c.
				default.createElement("div", {
					className: "left-modal"
				}), c.
				default.createElement("div", {
					className: "right-modal"
				}), c.
				default.createElement("div", {
					className: "list-wrapper clearfix"
				}, c.
				default.createElement("ul", {
					className: "col-user-list",
					ref: "user",
					style: {
						left: a
					}
				}, l)))
			}
		}]), t
	}(c.
	default.Component),
		h = function(e) {
			return {
				list: e.homePage.authUserList.slice(0, 31) || []
			}
		};
	t.
	default = (0, s.connect)(h)(p)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(8),
		f = n(25),
		d = a(f),
		p = n(1),
		h = a(p);
	n(158);
	var m = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.duration,
					a = e.title,
					r = e.coverUrl,
					o = e.browseCnt,
					l = e.author,
					i = e.followChange,
					u = e.showFollowTip,
					f = e.closeDownload,
					p = l.avatarUrl,
					m = l.nickname,
					v = l.vip,
					y = l.followType,
					b = h.
				default.getDisplayTime2(n);
				return c.
				default.createElement("li", {
					className: "video-home-item"
				}, c.
				default.createElement("a", {
					href: "/video/" + t,
					target: "_blank"
				}, c.
				default.createElement("span", {
					className: "icon icon-play"
				})), c.
				default.createElement("div", {
					className: "info"
				}, c.
				default.createElement("a", {
					href: "/video/" + t,
					target: "_blank",
					style: {
						position: "relative"
					}
				}, c.
				default.createElement("img", {
					className: "video-cover",
					src: h.
					default.nosUrl(r, "470y312", !0, "1"),
					alt: "视频封面"
				})), c.
				default.createElement("a", {
					className: "title",
					href: "/video/" + t,
					target: "_blank"
				}, a), c.
				default.createElement("a", {
					href: "/video/" + t,
					target: "_blank",
					className: "img-hover"
				})), c.
				default.createElement("div", null, c.
				default.createElement("div", {
					className: "data clearfix"
				}, c.
				default.createElement("span", {
					className: "duration"
				}, c.
				default.createElement("span", {
					className: "icon icon-time"
				}), c.
				default.createElement("span", null, b)), c.
				default.createElement("span", {
					className: "browse"
				}, c.
				default.createElement("span", {
					className: "icon icon-eye"
				}), c.
				default.createElement("span", null, h.
				default.toW(o)))), c.
				default.createElement("div", {
					className: "author clearfix"
				}, c.
				default.createElement(s.Link, {
					to: "/user/" + l.id
				}, c.
				default.createElement("div", {
					className: "img-wrapper"
				}, c.
				default.createElement("img", {
					src: h.
					default.nosUrl(p, "48y48"),
					alt: "头像"
				}), v ? c.
				default.createElement("span", {
					className: "icon icon-vip-small"
				}) : null)), c.
				default.createElement(s.Link, {
					to: "/user/" + l.id,
					target: "_blank"
				}, c.
				default.createElement("span", {
					className: "nickname"
				}, m)), c.
				default.createElement(d.
				default, {
					className: "follow",
					id: l.id,
					type: 1,
					disableCancel: !0,
					initialFollowType: y,
					disableGetFollowAfterLogin: !0,
					followCallback: function() {
						for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
						i.apply(void 0, n.concat([t]))
					},
					showFollowTip: u,
					closeDownload: function() {
						f(t)
					}
				}))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = m
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(295),
		d = a(f);
	n(158);
	var p = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this,
					t = this.props.list,
					n = t.map(function(t, n) {
						return c.
						default.createElement(d.
						default, {
							id: t.id,
							title: t.title,
							duration: t.duration,
							tags: t.tags,
							coverUrl: t.coverUrl,
							browseCnt: t.browseCnt,
							author: t.author,
							showFollowTip: t.showFollowTip,
							closeDownload: e.props.closeDownload,
							followChange: e.props.followChange,
							key: n.toString()
						})
					});
				return c.
				default.createElement("div", null, c.
				default.createElement("ul", {
					className: "col-video-list clearfix"
				}, n))
			}
		}]), t
	}(c.
	default.Component),
		h = function(e) {
			return {
				list: e.homePage.videoList.slice(0, 9) || []
			}
		};
	t.
	default = (0, s.connect)(h)(p)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(11),
		d = a(f),
		p = n(2),
		h = a(p),
		m = n(4),
		v = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(m),
		y = n(28),
		b = a(y),
		g = n(286),
		E = a(g),
		w = n(288),
		_ = a(w),
		N = n(290),
		C = a(N),
		O = n(294),
		T = a(O),
		k = n(296),
		P = a(k),
		S = n(292),
		j = a(S);
	n(437);
	var L = {
		HOMEPAGE: "/newApi/homePage",
		USER: "/newApi/ms/user/current"
	}, x = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleFollowChange = n.handleFollowChange.bind(n), n.handleCloseDownload = n.handleCloseDownload.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "handleCloseDownload",
			value: function(e) {
				var t = this.props,
					n = t.homeList,
					a = t.changeList,
					r = this.getHome(n);
				Object.keys(r).forEach(function(t) {
					if ("repoList" === t || "videoList" === t || "authUserList" === t) for (var n = 0; n < r[t].length; n++) r[t][n].id === e && (r[t][n].showFollowTip = !1)
				}), a(r)
			}
		}, {
			key: "handleFollowChange",
			value: function(e, t, n) {
				var a = this.props,
					r = a.homeList,
					o = a.changeList,
					l = this.getHome(r),
					i = localStorage.getItem("hasShow"),
					u = !1;
				i || 0 === e || (u = !0, localStorage.setItem("hasShow", !0)), Object.keys(l).forEach(function(a) {
					if ("repoList" === a || "videoList" === a) for (var r = 0; r < l[a].length; r++) l[a][r].id === n && (l[a][r].showFollowTip = u), l[a][r].author.id === t && (l[a][r].author.followType = e);
					if ("authUserList" === a) for (var o = 0; o < l[a].length; o++) l[a][o].id === t && (l[a][o].showFollowTip = u, l[a][o].followType = e)
				}), o(l)
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				this.props.isLogin !== e.isLogin && window.location.reload()
			}
		}, {
			key: "getHome",
			value: function(e) {
				var t = {};
				return Object.keys(e).forEach(function(n) {
					t[n] = e[n]
				}), t
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.tagList,
					t = e[0].name,
					n = e[0].id,
					a = e[1].name,
					r = e[1].id,
					o = e[2].name,
					l = e[2].id;
				return c.
				default.createElement("div", null, c.
				default.createElement(d.
				default, null), c.
				default.createElement("article", {
					className: "home"
				}, c.
				default.createElement("section", {
					className: "home-header"
				}, c.
				default.createElement("div", {
					className: "icon-header"
				}, c.
				default.createElement("h1", {
					id: "content"
				}, "发现适合你的美"), c.
				default.createElement("a", {
					href: "/more",
					target: "_blank"
				}, "进一步了解美学", c.
				default.createElement("span", {
					className: "icon icon-arrow"
				})))), c.
				default.createElement("section", {
					className: "home-evaluation"
				}, c.
				default.createElement("div", {
					className: "subnav"
				}, c.
				default.createElement("span", {
					className: "icon icon-evaluation"
				}), c.
				default.createElement("span", {
					className: "title"
				}, "美学联合测评"), c.
				default.createElement("a", {
					href: "/evaluation",
					className: "more",
					target: "_self"
				}, "更多")), c.
				default.createElement(E.
				default, null)), c.
				default.createElement("section", {
					className: "home-trial"
				}, c.
				default.createElement("div", {
					className: "subnav"
				}, c.
				default.createElement("span", {
					className: "icon-new icon-trial-new"
				}), c.
				default.createElement("span", {
					className: "title"
				}, "大牌试用"), c.
				default.createElement("a", {
					href: "/trial",
					className: "more",
					target: "_self"
				}, "更多")), c.
				default.createElement(j.
				default, null)), c.
				default.createElement("section", {
					className: "home-note"
				}, c.
				default.createElement("div", {
					className: "subnav"
				}, c.
				default.createElement("span", {
					className: "icon-new icon-note-new"
				}), c.
				default.createElement("span", {
					className: "title"
				}, t), c.
				default.createElement("a", {
					href: "/tag/" + n,
					className: "more",
					target: "_self"
				}, "更多")), c.
				default.createElement(_.
				default, null)), c.
				default.createElement("section", {
					className: "home-repo"
				}, c.
				default.createElement("div", {
					className: "subnav"
				}, c.
				default.createElement("span", {
					className: "icon-new icon-repo-new"
				}), c.
				default.createElement("span", {
					className: "title"
				}, a), c.
				default.createElement("a", {
					href: "/tag/" + r,
					className: "more",
					target: "_self"
				}, "更多")), c.
				default.createElement(C.
				default, {
					followChange: this.handleFollowChange,
					closeDownload: this.handleCloseDownload
				})), c.
				default.createElement("section", {
					className: "home-user"
				}, c.
				default.createElement("div", {
					className: "subnav"
				}, c.
				default.createElement("span", {
					className: "icon icon-user"
				}), c.
				default.createElement("span", {
					className: "title"
				}, "用户认证榜单")), c.
				default.createElement(T.
				default, {
					followChange: this.handleFollowChange,
					closeDownload: this.handleCloseDownload
				})), c.
				default.createElement("section", {
					className: "home-video"
				}, c.
				default.createElement("div", {
					className: "subnav"
				}, c.
				default.createElement("span", {
					className: "icon-new icon-video-new"
				}), c.
				default.createElement("span", {
					className: "title"
				}, o), c.
				default.createElement("a", {
					href: "/tag/" + l,
					className: "more",
					target: "_self"
				}, "更多")), c.
				default.createElement(P.
				default, {
					followChange: this.handleFollowChange,
					closeDownload: this.handleCloseDownload
				})), c.
				default.createElement("div", {
					className: "home-right"
				}, c.
				default.createElement(b.
				default, null))))
			}
		}], [{
			key: "fetchData",
			value: function(e) {
				var t = e.dispatch,
					n = e.getState,
					a = n(),
					r = a.headerInfo,
					o = (0, h.
					default)("" + L.HOMEPAGE, {
						headerInfo: r
					}),
					l = (0, h.
					default)("" + L.USER, {
						headerInfo: r
					});
				return Promise.all([o, l]).then(function(e) {
					t({
						type: v.SET_HOMEPAGE,
						info: e[0].result
					}), t(200 === e[1].code ? {
						type: v.LOGIN_SUCCESS,
						info: e[1].result
					} : {
						type: v.LOGIN_FAILURE
					})
				}).
				catch (function(e) {
					throw t({
						type: v.GET_REPO_FAILURE
					}), e
				})
			}
		}]), t
	}(c.
	default.Component),
		I = function(e) {
			return {
				homeList: e.homePage,
				tagList: e.homePage.tagList,
				isLogin: e.user.isLogin
			}
		}, R = function(e) {
			return {
				changeList: function(t) {
					e({
						type: "SET_HOMEPAGE",
						list: t
					})
				}
			}
		};
	t.
	default = (0, s.connect)(I, R)(x)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(11),
		f = a(s),
		d = n(134),
		p = a(d);
	n(438);
	var h = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				return c.
				default.createElement("div", null, c.
				default.createElement(f.
				default, {
					loginPage: !0
				}), c.
				default.createElement("div", {
					className: "login-wrapper"
				}, c.
				default.createElement("div", null, c.
				default.createElement(p.
				default, null))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(11),
		f = a(s);
	n(439);
	var d = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				return c.
				default.createElement("div", null, c.
				default.createElement(f.
				default, null), c.
				default.createElement("div", {
					className: "more-wrapper"
				}, c.
				default.createElement("ul", {
					className: "cards"
				}, c.
				default.createElement("li", {
					className: "card-wrapper"
				}, c.
				default.createElement("div", {
					className: "card card-1"
				}, c.
				default.createElement("div", {
					className: "img"
				}), c.
				default.createElement("div", {
					className: "desc"
				}, c.
				default.createElement("div", {
					className: "desc__title"
				}, "让美变得更简单"), c.
				default.createElement("div", {
					className: "desc__sub-title"
				}, "网易首个高品质美妆社区", c.
				default.createElement("br", null), "连续三次获得App store首页推荐，每天三分钟", c.
				default.createElement("br", null), "帮你解决关于美的问题"), c.
				default.createElement("div", {
					className: "icon icon-qrcode"
				}), c.
				default.createElement("div", {
					className: "desc__qrcode"
				}, "扫码下载App")))), c.
				default.createElement("li", {
					className: "card card-2"
				}, c.
				default.createElement("div", {
					className: "img"
				}), c.
				default.createElement("div", {
					className: "desc"
				}, c.
				default.createElement("div", {
					className: "desc__title"
				}, c.
				default.createElement("span", {
					className: "icon icon-repo"
				}), c.
				default.createElement("span", null, "专业公正的美妆测评")), c.
				default.createElement("div", {
					className: "desc__sub-title"
				}, "保证零广告、零软文，汇聚最真实的体验", c.
				default.createElement("br", null), "长草有依据，轻松做决策，看完再买，避免踩雷"))), c.
				default.createElement("li", {
					className: "card card-3"
				}, c.
				default.createElement("div", {
					className: "img"
				}), c.
				default.createElement("div", {
					className: "desc"
				}, c.
				default.createElement("div", {
					className: "desc__title"
				}, c.
				default.createElement("span", {
					className: "icon icon-video"
				}), c.
				default.createElement("span", null, "变美视频")), c.
				default.createElement("div", {
					className: "desc__sub-title"
				}, "图文不过瘾，化妆总是学不会？3分钟技巧一看就会", c.
				default.createElement("br", null), "进阶内容应有尽有", c.
				default.createElement("br", null), "还可以一键订阅海外博主、官方教程等优质视频"))), c.
				default.createElement("li", {
					className: "card card-4"
				}, c.
				default.createElement("div", {
					className: "img"
				}), c.
				default.createElement("div", {
					className: "desc"
				}, c.
				default.createElement("div", {
					className: "desc__title"
				}, c.
				default.createElement("span", {
					className: "icon icon-qa"
				}), c.
				default.createElement("span", null, "精彩有料问答")), c.
				default.createElement("div", {
					className: "desc__sub-title"
				}, "和各地小姐妹，小哥哥搜索变美新鲜事", c.
				default.createElement("br", null), "在线美妆问答，抱团变美，颜值进阶"))), c.
				default.createElement("li", {
					className: "card card-5"
				}, c.
				default.createElement("div", {
					className: "img"
				}), c.
				default.createElement("div", {
					className: "desc"
				}, c.
				default.createElement("div", {
					className: "desc__title"
				}, c.
				default.createElement("span", {
					className: "icon icon-trial"
				}), c.
				default.createElement("span", null, "大牌新品试用")), c.
				default.createElement("div", {
					className: "desc__sub-title"
				}, "30万海量产品库，每天都有大牌产品免费试用", c.
				default.createElement("br", null), "新品美妆抢先得，别处看不到的这里都有"))))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = d
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(8),
		i = n(1),
		u = a(i),
		c = n(5),
		s = a(c),
		f = n(37),
		d = a(f),
		p = n(62),
		h = a(p),
		m = n(127),
		v = a(m),
		y = function(e) {
			var t = e.notes,
				n = e.bottomTarget,
				a = t.map(function(e) {
					var t = e.id,
						n = e.coverUrl,
						a = e.title,
						r = e.author,
						i = e.praiseCnt,
						c = e.emotion,
						f = e.emotionText;
					return o.
					default.createElement("li", {
						key: u.
						default.getKey()
					}, o.
					default.createElement("div", {
						className: "clearfix",
						style: {
							display: "block"
						}
					}, o.
					default.createElement("a", {
						href: "/note/" + t,
						target: "_blank"
					}, o.
					default.createElement("div", {
						className: "img-wrapper"
					}, o.
					default.createElement("div", null, o.
					default.createElement("img", {
						src: u.
						default.nosUrl(n, "100y100", !0, "1"),
						alt: "心得封面"
					})))), o.
					default.createElement("div", {
						className: "content"
					}, o.
					default.createElement("div", {
						className: "title"
					}, o.
					default.createElement("a", {
						href: "/note/" + t,
						target: "_blank"
					}, a)), o.
					default.createElement("div", {
						className: "score"
					}, s.
					default.range(0, 6 - c).map(function() {
						return o.
						default.createElement("span", {
							className: "icon-star-fill icon",
							key: u.
							default.getKey()
						})
					}), s.
					default.range(1, c).map(function() {
						return o.
						default.createElement("span", {
							className: "icon-star icon",
							key: u.
							default.getKey()
						})
					}), o.
					default.createElement("span", {
						className: "text"
					}, f || "未评价")), o.
					default.createElement("div", {
						className: "author-info"
					}, o.
					default.createElement(l.Link, {
						to: "/user/" + r.id
					}, o.
					default.createElement("div", {
						className: "avatar-wrapper"
					}, o.
					default.createElement("img", {
						src: u.
						default.nosUrl(r.avatarUrl, "48x48"),
						alt: "头像"
					}), r.vip ? o.
					default.createElement("span", {
						className: "icon vip icon-vip-small"
					}) : null)), o.
					default.createElement(l.Link, {
						to: "/user/" + r.id
					}, u.
					default.truncate(r.nickname, 7, "...")), o.
					default.createElement("div", {
						className: "praise-cnt"
					}, o.
					default.createElement("span", null, u.
					default.handleCountTo999(i)), o.
					default.createElement("span", {
						className: "icon icon-thumbs-up-small"
					}))))))
				});
			return o.
			default.createElement("aside", null, o.
			default.createElement(v.
			default, {
				info: e.author
			}), o.
			default.createElement("div", {
				className: "qr-banner"
			}), o.
			default.createElement(d.
			default, {
				top: 62,
				bottomTarget: n
			}, o.
			default.createElement("div", {
				className: "recommend-wrapper"
			}, t.length ? o.
			default.createElement("div", {
				className: "recommend"
			}, o.
			default.createElement("h4", null, "相关推荐"), o.
			default.createElement("ul", null, a)) : null)), o.
			default.createElement(h.
			default, {
				top: 670
			}))
		};
	t.
	default = y
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(1),
		i = a(l),
		u = function(e) {
			var t = e.product,
				n = e.type,
				a = t.id,
				r = t.noteCnt,
				l = t.display,
				u = l.name1,
				c = l.name2,
				s = l.colorOrModelName,
				f = l.categoryNames,
				d = "product-display display" + Object.keys(t.display).length.toString();
			return o.
			default.createElement("div", {
				className: "product-card clearfix"
			}, 8 === n ? o.
			default.createElement("div", null, o.
			default.createElement("img", {
				src: i.
				default.nosUrl(t.imageUrl, "100x100"),
				alt: ""
			}), o.
			default.createElement("div", {
				className: d
			}, o.
			default.createElement("h4", {
				className: "name1"
			}, u), c ? o.
			default.createElement("h4", {
				className: "name2"
			}, c) : null, s ? o.
			default.createElement("h4", {
				className: "colorOrModelName"
			}, s) : null, f ? o.
			default.createElement("h4", {
				className: "categoryNames"
			}, f) : null)) : o.
			default.createElement("a", {
				target: "_blank",
				href: "/product/" + a
			}, o.
			default.createElement("img", {
				src: i.
				default.nosUrl(t.imageUrl, "100x100"),
				alt: ""
			}), o.
			default.createElement("div", {
				className: d
			}, o.
			default.createElement("h4", {
				className: "name1"
			}, u), c ? o.
			default.createElement("h4", {
				className: "name2"
			}, c) : null, s ? o.
			default.createElement("h4", {
				className: "colorOrModelName"
			}, s) : null, f ? o.
			default.createElement("h4", {
				className: "categoryNames"
			}, f) : null), o.
			default.createElement("span", {
				className: "readmore"
			}, o.
			default.createElement("span", {
				className: "show-hover"
			}, o.
			default.createElement("span", null, "共" + r + "篇心得"), o.
			default.createElement("span", {
				className: "icon icon-right"
			})))))
		};
	t.
	default = u
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(3),
		d = n(9),
		p = a(d),
		h = n(75),
		m = a(h),
		v = n(133),
		y = a(v),
		b = n(53),
		g = a(b),
		E = n(77),
		w = a(E),
		_ = n(11),
		N = a(_),
		C = n(4),
		O = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(C),
		T = n(1),
		k = a(T),
		P = n(2),
		S = a(P),
		j = n(5),
		L = a(j),
		x = n(301),
		I = a(x),
		R = n(300),
		M = a(R);
	n(440);
	var U = {
		NOTE: "/newApi/note",
		PREVIEW: "/newApi/note/preview",
		COMMENTS: "/newApi/comment/list",
		USER: "/newApi/ms/user/current"
	}, A = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				commentsCnt: e.comments.total,
				bottomTarget: null,
				toastRoot: null
			}, n
		}
		return l(t, e), u(t, [{
			key: "componentDidMount",
			value: function() {
				this.setState({
					bottomTarget: this.bottomTarget,
					toastRoot: this.toastRoot
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.meixueAccounts,
					n = this.state,
					a = n.commentsCnt,
					r = n.bottomTarget,
					o = n.toastRoot,
					l = this.props.note,
					i = l.id,
					u = l.emotion,
					c = l.emotionText,
					f = l.content,
					d = l.price,
					h = l.tags,
					v = l.notes,
					b = l.product,
					E = l.images,
					_ = l.author,
					C = l.productType,
					O = l.displayCreateTime,
					T = (0, p.
					default)({
						content: !0,
						"no-select": !t
					});
				return s.
				default.createElement("div", null, s.
				default.createElement(N.
				default, null), s.
				default.createElement("div", {
					className: "note-wrapper",
					ref: function(t) {
						e.bottomTarget = t
					}
				}, s.
				default.createElement(y.
				default, {
					type: "note",
					id: i,
					bottomTarget: r,
					toastRoot: o
				}), s.
				default.createElement("article", {
					ref: function(t) {
						e.toastRoot = t
					}
				}, s.
				default.createElement("div", {
					style: {
						padding: "0 24px"
					}
				}, s.
				default.createElement(I.
				default, {
					product: b || {},
					type: C
				}), s.
				default.createElement("div", {
					className: "score-bar"
				}, s.
				default.createElement("h4", null, _ && _.nickname, "的评分"), s.
				default.createElement("div", {
					className: "clearfix"
				}, L.
				default.range(0, 6 - u).map(function() {
					return s.
					default.createElement("span", {
						className: "icon-star-fill icon",
						key: k.
						default.getKey()
					})
				}), L.
				default.range(1, u).map(function() {
					return s.
					default.createElement("span", {
						className: "icon-star icon",
						key: k.
						default.getKey()
					})
				}), s.
				default.createElement("span", {
					className: "text"
				}, c || "未评价"))), s.
				default.createElement(w.
				default, {
					imagesUrl: E,
					maxRow: 2,
					imageSize: "small"
				}), s.
				default.createElement("div", {
					className: T
				}, f && L.
				default.trim(f)), d ? s.
				default.createElement("div", {
					className: "price"
				}, "购买价格： ", d) : null, h && h.length ? s.
				default.createElement("div", {
					className: "tag-bar clearfix"
				}, h.slice(0, 10).map(function(e) {
					return s.
					default.createElement("span", {
						key: k.
						default.getKey()
					}, k.
					default.truncate(e.name, 10, "..."))
				})) : null, s.
				default.createElement("div", {
					className: "update-time"
				}, "最后编辑于", O), s.
				default.createElement("div", {
					className: "dashed-border"
				}), s.
				default.createElement("div", {
					id: "share-bar"
				}, s.
				default.createElement(g.
				default, {
					type: "note",
					id: i,
					commentsCnt: a
				})), s.
				default.createElement(m.
				default, {
					limit: 20,
					type: "note",
					id: i
				}))), s.
				default.createElement(M.
				default, {
					notes: v,
					bottomTarget: r,
					author: _
				})))
			}
		}], [{
			key: "fetchData",
			value: function(e, t) {
				var n = e.dispatch,
					a = e.getState,
					r = a(),
					o = r.headerInfo;
				n({
					type: O.GET_NOTE_REQUEST
				});
				var l = t.id,
					u = t.preview,
					c = u ? (0, S.
					default)("" + U.PREVIEW, {
						headerInfo: o,
						body: {
							id: l
						},
						method: "POST"
					}) : (0, S.
					default)(U.NOTE + "/" + l, {
						headerInfo: o
					}),
					s = (0, S.
					default)("" + U.USER, {
						headerInfo: o
					}),
					f = (0, S.
					default)("" + U.COMMENTS, {
						method: "GET",
						body: {
							type: 2,
							id: l,
							offset: 0,
							limit: 20
						},
						headerInfo: o
					});
				return Promise.all([c, f, s]).then(function(e) {
					n({
						type: O.GET_NOTE_SUCCESS,
						note: e[0].result,
						comments: i({
							list: []
						}, e[1].result)
					}), n(200 === e[2].code ? {
						type: O.LOGIN_SUCCESS,
						info: e[2].result
					} : {
						type: O.LOGIN_FAILURE
					})
				}).
				catch (function(e) {
					throw n({
						type: O.GET_NOTE_FAILURE
					}), e
				})
			}
		}]), t
	}(s.
	default.Component),
		D = function(e) {
			return {
				meixueAccounts: !! e.user.info.meixueAccounts,
				note: e.note && e.note.note || {},
				comments: e.note && e.note.comments || {}
			}
		};
	t.
	default = (0, f.connect)(D)(A)
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function r(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		i = n(0),
		u = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(i);
	n(441);
	var c = function(e) {
		function t(e) {
			a(this, t);
			var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.ue = null, n
		}
		return o(t, e), l(t, [{
			key: "getInstance",
			value: function() {
				return this.ue
			}
		}, {
			key: "componentDidMount",
			value: function() {
				this.ue = UE.getEditor("note-editor", {
					toolbars: [],
					elementPathEnabled: !1,
					wordCount: !1,
					imageScaleEnabled: !1,
					contextMenu: [],
					pasteplain: !0
				})
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.ue.destroy()
			}
		}, {
			key: "render",
			value: function() {
				return u.
				default.createElement("div", {
					className: "editor-wrapper"
				}, u.
				default.createElement("div", {
					id: "note-editor",
					ref: "editor"
				}))
			}
		}]), t
	}(u.
	default.Component);
	t.
	default = c
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, c = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		s = n(0),
		f = a(s),
		d = n(59),
		p = a(d),
		h = n(2),
		m = a(h),
		v = n(8),
		y = n(1),
		b = a(y),
		g = n(142),
		E = a(g),
		w = n(143),
		_ = a(w),
		N = n(80),
		C = a(N),
		O = n(79),
		T = n(141),
		k = a(T),
		P = n(256),
		S = a(P),
		j = n(254),
		L = a(j),
		x = n(12),
		I = a(x),
		R = n(11),
		M = a(R),
		U = n(37),
		A = a(U),
		D = n(20),
		F = a(D),
		G = n(38),
		H = a(G),
		B = n(5),
		V = a(B);
	n(400);
	var z = n(303),
		q = a(z);
	n(442);
	var W = {
		CURRENCY: "/newApi/ms/currency/list",
		ADD_NOTE: "/newApi/ms/note/add",
		UPDATE_NOTE: "/newApi/ms/note/update",
		NOTE: "/newApi/ms/note/getnotebyid",
		PRODUCT: "/newApi/product/search/",
		SKU: "/newApi/ms/note/searchproductskulist?productId="
	}, K = function() {
		return (0, m.
		default)(W.CURRENCY).then(function(e) {
			return {
				options: (e.result || []).map(function(e) {
					return {
						value: e.id,
						label: e.currencyName
					}
				})
			}
		})
	}, $ = (0, H.
	default)(i = (0, v.withRouter)(i = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				showInsertProductModal: !1,
				calculatedName: "",
				calculatedSkuName: "",
				coverImg: "",
				score: 0,
				images: [],
				currency: "RMB",
				price: "",
				tags: [],
				fromProduct: null,
				didMount: !1,
				hideProductModal: !1
			}, n.product = null, n.userProduct = null, n.editor = null, n.initialContent = "", n.modified = !1, n.mode = n.props.params.id ? "EDIT" : "ADD", ["handleInsertProduct", "handleCloseProductModal", "handleCurrencyChange", "handlePriceChange", "handleTagsChange"].forEach(function(e) {
				n[e] = n[e].bind(n)
			}), n.handlePublish = V.
			default.throttle(n.handlePublish.bind(n), 1e3), n
		}
		return l(t, e), c(t, [{
			key: "initial",
			value: function(e) {
				var t = this,
					n = e.params,
					a = e.location,
					r = n.id,
					o = a.query.productId;
				r && this.getNoteInfo(r), o && Promise.all([(0, m.
				default)(W.PRODUCT + "/" + o), (0, m.
				default)("" + W.SKU + o)]).then(function(e) {
					var n = e[0].result && e[0].result.list[0],
						a = e[1].result && e[1].result.length;
					n && t.setState({
						fromProduct: n,
						showInsertProductModal: !0,
						hideProductModal: !a
					})
				}).
				catch (function(e) {})
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				!this.props.isLogin && e.isLogin && this.initial(e)
			}
		}, {
			key: "componentDidMount",
			value: function() {
				this.setState({
					didMount: !0
				}), this.props.isLogin && this.initial(this.props)
			}
		}, {
			key: "checkContent",
			value: function() {
				var e = this.editor.getInstance().getPlainTxt();
				return !(b.
				default.length(V.
				default.trim(e)) > 2e4) || (I.
				default.show("亲，你好厉害，都写了1万字了！不过太多会不会不好？"), !1)
			}
		}, {
			key: "addNote",
			value: function() {
				var e = this.product,
					t = this.userProduct,
					n = this.props.userInfo.userId,
					a = this.state,
					r = a.score,
					o = a.price,
					l = a.currency,
					i = a.images,
					c = a.calculatedName,
					s = a.tags;
				if (!c) return void I.
				default.show("还没有选择产品哦~");
				if (!r) return void I.
				default.show("还没有评价哦~");
				if (this.checkContent()) {
					var f = e ? {} : {
						type: 8
					}, d = this.editor.getInstance().getPlainTxt();
					C.
					default.show(), (0, m.
					default)(W.ADD_NOTE, {
						method: "POST",
						body: u({
							product: e,
							userProduct: t,
							content: V.
							default.trim(d),
							score: r.toString(),
							price: o,
							currency: l,
							images: i,
							tags: s
						}, f, {
							author: {
								id: n
							}
						})
					}).then(function(e) {
						C.
						default.close();
						var t = e.result.noteId;
						window.location.href = "/note/" + t
					}).
					catch (function(e) {
						C.
						default.close(), I.
						default.show(e.msg || "发布失败，请联系管理员")
					})
				}
			}
		}, {
			key: "editNote",
			value: function() {
				var e = this;
				if (this.checkContent()) {
					var t = this.product,
						n = this.props.userInfo.userId,
						a = this.state,
						r = a.score,
						o = a.price,
						l = a.currency,
						i = a.images,
						u = a.tags,
						c = a.type,
						s = this.editor.getInstance().getPlainTxt();
					C.
					default.show(), (0, m.
					default)(W.UPDATE_NOTE, {
						method: "POST",
						body: {
							id: this.props.params.id,
							product: t,
							content: V.
							default.trim(s),
							score: r.toString(),
							price: o,
							currency: l,
							images: i,
							tags: u,
							type: c,
							author: {
								id: n
							}
						}
					}).then(function() {
						C.
						default.close();
						var t = e.props.params.id;
						window.location.href = "/note/" + t
					}).
					catch (function(e) {
						C.
						default.close(), I.
						default.show("发布失败，请联系管理员")
					})
				}
			}
		}, {
			key: "handlePublish",
			value: function() {
				window.$eventTrace({
					category: "NoteEdit",
					action: "click",
					eventLabel: "submitButton"
				}), "ADD" === this.mode ? this.addNote() : this.editNote()
			}
		}, {
			key: "handleInsertProduct",
			value: function() {
				this.setState({
					showInsertProductModal: !0
				})
			}
		}, {
			key: "handleCurrencyChange",
			value: function(e) {
				this.setState({
					currency: e.value
				})
			}
		}, {
			key: "handlePriceChange",
			value: function(e) {
				var t = b.
				default.checkNumber(e.target.value, 999999999.99);
				this.setState({
					price: t
				})
			}
		}, {
			key: "handleTagsChange",
			value: function(e) {
				if (e.some(function(e) {
					return b.
					default.length(e) > 40
				})) return void I.
				default.show("标签每个长度不能超过20个汉字哦");
				var t = this.state.tags,
					n = e.map(function(e) {
						var n = V.
						default.find(t, function(t) {
							return e === t.name
						});
						return {
							id: n ? n.id : 0,
							name: e
						}
					});
				this.setState({
					tags: n
				})
			}
		}, {
			key: "handleCloseProductModal",
			value: function(e) {
				var t = e.id,
					n = e.coverImg,
					a = e.coverUrl,
					r = e.sku,
					o = e.brandName,
					l = e.productName,
					i = e.colorOrTypeName,
					u = e.calculatedName,
					c = e.calculatedSkuName;
				t ? (this.product = {
					id: t
				}, r && r.id && (this.product.sku = {
					id: r.id
				})) : this.userProduct = {
					brandName: o,
					modelName: "型号/色号",
					modelValue: i,
					productName: l
				}, this.setState({
					coverImg: n || a || "http://beauty.nos.netease.com/beauty/img/cef9f07f-d66d-4321-8a5a-af70e068d496.png",
					calculatedName: u,
					calculatedSkuName: c,
					showInsertProductModal: !1
				})
			}
		}, {
			key: "getNoteInfo",
			value: function(e) {
				var t = this;
				(0, m.
				default)(W.NOTE + "?id=" + e + "&isEdit=true").then(function(e) {
					var n = e.result,
						a = {};
					if (n.product) {
						var r = (0, O.getMainNameObject)(n.product);
						a = {
							coverImg: n.product.coverUrl,
							calculatedName: r.brandAndProductName,
							calculatedSkuName: r.skuName
						}
					}
					t.setState(u({
						images: n.images,
						type: n.type,
						price: n.price,
						score: parseInt(n.score, 10),
						tags: n.tags || [],
						currency: n.currency
					}, a));
					var o = t.editor.getInstance(),
						l = n.product.id,
						i = !! n.product.sku && n.product.sku.id,
						c = i ? {
							id: i
						} : {};
					t.product = {
						id: l,
						sku: c
					}, t.initialContent = n.content, o.ready(function() {
						o.setContent(b.
						default.html2Escape(n.content))
					})
				}).
				catch (function(t) {
					F.
					default.alert({
						content: t || "获取心得信息失败，请联系管理员",
						onClickOK: function() {
							window.location.href = "/note/" + e
						}
					})
				})
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				window.onscroll = null
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.state,
					n = t.showInsertProductModal,
					a = t.coverImg,
					r = t.calculatedName,
					o = t.calculatedSkuName,
					l = t.images,
					i = t.score,
					u = t.currency,
					c = t.price,
					s = t.tags,
					d = t.fromProduct,
					h = t.didMount,
					m = t.hideProductModal;
				return f.
				default.createElement("div", null, f.
				default.createElement(M.
				default, {
					notFixed: !0
				}), f.
				default.createElement("div", {
					className: "note-edit-wrapper",
					ref: "content"
				}, f.
				default.createElement(A.
				default, {
					zIndex: 1e3,
					top: 0
				}, f.
				default.createElement(E.
				default, {
					onClick: this.handlePublish,
					type: "note"
				})), f.
				default.createElement("div", {
					className: "note-edit"
				}, r ? f.
				default.createElement("div", {
					className: "product-card"
				}, f.
				default.createElement("div", {
					className: "img-wrapper"
				}, f.
				default.createElement("img", {
					src: b.
					default.nosUrl(a, "110y110"),
					alt: ""
				})), f.
				default.createElement("div", {
					className: "text-wrapper"
				}, f.
				default.createElement("p", {
					className: "name"
				}, r), f.
				default.createElement("p", {
					className: "sku-name"
				}, o))) : f.
				default.createElement("div", {
					className: "select-product",
					onClick: this.handleInsertProduct
				}, f.
				default.createElement("p", null, "+ 选择要写心得的产品")), f.
				default.createElement(S.
				default, {
					score: i,
					setScore: function(t) {
						e.setState({
							score: t
						})
					}
				}), f.
				default.createElement(q.
				default, {
					ref: function(t) {
						e.editor = t
					}
				}), f.
				default.createElement(L.
				default, {
					images: l,
					max: 9,
					onChange: function(t) {
						e.setState({
							images: t
						})
					}
				}), f.
				default.createElement("div", {
					className: "bottom-bar"
				}, f.
				default.createElement("div", {
					className: "price-wrapper"
				}, f.
				default.createElement("span", {
					className: "label"
				}, "购买价格"), h ? f.
				default.createElement(p.
				default.Async, {
					className: "currency-select",
					name: "currency",
					loadOptions: K,
					searchable: !1,
					placeholder: "选择货币",
					value: u,
					clearable: !1,
					onChange: this.handleCurrencyChange
				}) : null, f.
				default.createElement("input", {
					type: "text",
					value: c,
					onChange: this.handlePriceChange
				})), f.
				default.createElement("div", {
					className: "tags-wrapper"
				}, f.
				default.createElement("span", {
					className: "label"
				}, "添加标签"), f.
				default.createElement(_.
				default, {
					value: s.map(function(e) {
						return e.name
					}),
					onChange: this.handleTagsChange
				})))), n && f.
				default.createElement(k.
				default, {
					product: d,
					hideProductModal: m,
					onClickClose: this.handleCloseProductModal
				})))
			}
		}]), t
	}(f.
	default.Component)) || i) || i;
	t.
	default = $
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(370),
		f = a(s),
		d = n(1),
		p = a(d),
		h = function(e) {
			function t(e) {
				return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return l(t, e), i(t, [{
				key: "render",
				value: function() {
					var e = this.props,
						t = e.imgs.length < 4 ? "disable-transform" : "",
						n = e.imgs.map(function(e) {
							return {
								original: p.
								default.nosUrl(e, "680x680", 0, 1, "680_680_#FFF"),
								thumbnail: p.
								default.nosUrl(e, "150x150", 0, 1, "150_150_#FFF"),
								thumbnailClass: t
							}
						}),
						a = {
							showFullscreenButton: !1,
							showPlayButton: !1,
							items: n
						};
					return c.
					default.createElement(f.
					default, a)
				}
			}]), t
		}(c.
		default.Component);
	t.
	default = h, h.propTypes = {
		imgs: c.
		default.PropTypes.array.isRequired
	}
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(1),
		p = a(d),
		h = (u = i = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.getSkuValues = function() {
					var e = n.props.skuProperty,
						t = "";
					e.skuModel.length > 0 && (e.skuModel.forEach(function(e, n) {
						t += 0 === n ? e.value : "，" + e.value
					}), n.setState({
						skuValues: t
					}))
				}, n.handleMouseEnter = function() {
					window.$eventTrace({
						category: "Product",
						action: "hover",
						eventLabel: "color"
					}), n.setState({
						isHovered: !0
					})
				}, n.handleMouseLeave = function() {
					var e = n;
					setTimeout(function() {
						e.setState({
							isHovered: !1
						})
					}, 300)
				}, n.state = {
					isHovered: !1,
					skuValues: ""
				}, n
			}
			return l(t, e), c(t, [{
				key: "componentDidMount",
				value: function() {
					this.getSkuValues(), p.
					default.scrollUnique("skuModal")
				}
			}, {
				key: "render",
				value: function() {
					var e = this.props.skuProperty,
						t = this.state,
						n = t.isHovered,
						a = t.skuValues,
						r = {
							display: n ? "block" : "none"
						};
					return f.
					default.createElement("div", null, f.
					default.createElement("div", {
						className: "sku-value"
					}, e.skuModel.map(function(e, t) {
						return (t > 0 ? "，" : "") + e.value
					})), f.
					default.createElement("div", {
						className: "sku-more",
						onMouseEnter: this.handleMouseEnter
					}, "全部", e.skuModel.length, "个", e.name, f.
					default.createElement("span", {
						className: "icon icon-arrow-right-small"
					})), f.
					default.createElement("div", {
						id: "skuModal",
						className: "sku-modal",
						style: r,
						onMouseLeave: this.handleMouseLeave
					}, f.
					default.createElement("div", null, a)))
				}
			}]), t
		}(f.
		default.Component), i.propTypes = {
			skuProperty: f.
			default.PropTypes.object.isRequired
		}, u);
	t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(305),
		p = a(d),
		h = n(306),
		m = a(h),
		v = (u = i = function(e) {
			function t() {
				return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return l(t, e), c(t, [{
				key: "render",
				value: function() {
					var e = this.props.product,
						t = e.images,
						n = e.nameMap,
						a = e.brand,
						r = e.categories,
						o = e.vendor,
						l = e.price,
						i = e.skuProperty,
						u = "/brand/" + a.id;
					return f.
					default.createElement("div", {
						className: "product-detail"
					}, t.length > 1 ? f.
					default.createElement("div", {
						id: "image-slider"
					}, f.
					default.createElement(p.
					default, {
						imgs: t
					})) : f.
					default.createElement("img", {
						src: t[0],
						className: "image-header",
						alt: ""
					}), f.
					default.createElement("div", {
						className: "info"
					}, f.
					default.createElement("p", {
						className: "zhName"
					}, n.productNameList[0]), f.
					default.createElement("p", {
						className: "enName"
					}, n.productNameList[1] ? n.productNameList[1] : ""), f.
					default.createElement("div", {
						className: "seperator"
					}), f.
					default.createElement("div", {
						className: "info-details"
					}, a && a.id ? f.
					default.createElement("p", {
						className: "cnt"
					}, f.
					default.createElement("span", {
						className: "cnt-label"
					}, "品牌"), f.
					default.createElement("a", {
						href: u,
						className: "cnt-text",
						target: "_blank"
					}, a.zhName, a.zhName && a.enName ? f.
					default.createElement("span", null, " | ") : null, a.enName)) : null, r && r.length > 0 ? f.
					default.createElement("p", {
						className: "cnt"
					}, f.
					default.createElement("span", {
						className: "cnt-label"
					}, "分类"), f.
					default.createElement("span", {
						className: "cnt-text"
					}, r.map(function(e) {
						return e.displayName
					}))) : null, a && a.address ? f.
					default.createElement("p", {
						className: "cnt"
					}, f.
					default.createElement("span", {
						className: "cnt-label"
					}, "地区"), f.
					default.createElement("span", {
						className: "cnt-text"
					}, a.address)) : null, o && o.id ? f.
					default.createElement("p", {
						className: "cnt"
					}, f.
					default.createElement("span", {
						className: "cnt-label"
					}, "公司"), f.
					default.createElement("span", {
						className: "cnt-text"
					}, o.zhName ? o.zhName : o.enName)) : null, l ? f.
					default.createElement("p", {
						className: "cnt"
					}, f.
					default.createElement("span", {
						className: "cnt-label"
					}, "参考价格"), f.
					default.createElement("span", {
						className: "cnt-text"
					}, l)) : null, i && i.id ? f.
					default.createElement("div", {
						className: "cnt"
					}, f.
					default.createElement("span", {
						className: "cnt-label"
					}, i.name), f.
					default.createElement("div", {
						id: "sku",
						className: "cnt-text"
					}, f.
					default.createElement(m.
					default, {
						skuProperty: i
					}))) : null)))
				}
			}]), t
		}(f.
		default.Component), i.propTypes = {
			product: f.
			default.PropTypes.object.isRequired
		}, u);
	t.
	default = v
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(5),
		f = a(s),
		d = function(e) {
			function t(e) {
				return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return l(t, e), i(t, [{
				key: "render",
				value: function() {
					var e = this.props.details,
						t = f.
					default.cloneDeep(e), n = /<p>(&nbsp;)*(<br>)*<\/p>/g;
					return t.introduction = t.introduction.replace(n, ""), t.usage = t.usage.replace(n, ""), c.
					default.createElement("div", {
						className: "tab-details"
					}, e.properties && e.properties.length > 0 ? c.
					default.createElement("div", {
						className: "product-block"
					}, c.
					default.createElement("div", {
						className: "product-title"
					}, "产品属性"), c.
					default.createElement("div", {
						className: "cnt"
					}, e.properties && e.properties.map(function(e, t) {
						return c.
						default.createElement("p", {
							key: t
						}, e.name, "：", e.values && e.values.map(function(e) {
							return c.
							default.createElement("span", {
								key: t
							}, e.value, " ")
						}))
					}))) : null, e.introduction ? c.
					default.createElement("div", {
						className: "product-block"
					}, c.
					default.createElement("div", {
						className: "product-title"
					}, "产品简介"), c.
					default.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: t.introduction
						},
						className: "cnt"
					})) : null, e.usage ? c.
					default.createElement("div", {
						className: "product-block"
					}, c.
					default.createElement("div", {
						className: "product-title"
					}, "使用用法"), c.
					default.createElement("div", {
						dangerouslySetInnerHTML: {
							__html: t.usage
						},
						className: "cnt"
					})) : null)
				}
			}]), t
		}(c.
		default.Component);
	t.
	default = d
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u, c = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, s = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		f = n(0),
		d = a(f),
		p = n(2),
		h = a(p),
		m = n(3),
		v = n(13),
		y = a(v),
		b = n(22),
		g = a(b),
		E = n(51),
		w = a(E),
		_ = n(4),
		N = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(_),
		C = n(310),
		O = a(C),
		T = 10,
		k = (u = i = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.checkLogin = function() {
					var e = n.props,
						t = e.isLogin,
						a = e.onLogin;
					return !!t || (a(), !1)
				}, n.getList = function() {
					var e = n.props.id,
						t = n.state,
						a = t.list.length > 0 ? t.list[t.list.length - 1].id : "0";
					(0, h.
					default)("/newApi/product/" + e + "/notes", {
						body: {
							pageEndId: a,
							count: T
						}
					}).then(function(e) {
						var t = e.result;
						n.setState((0, w.
						default)(n.state, {
							list: {
								$push: t.list
							},
							total: {
								$set: t.total
							},
							hasNext: {
								$set: t.hasNext
							}
						}))
					})
				}, n.handleWriteNote = function() {
					n.checkLogin()
				}, n.state = {
					list: e.relatedNotes.list || [],
					total: e.relatedNotes.total || 0,
					hasNext: e.relatedNotes.hasNext || !1
				}, n
			}
			return l(t, e), s(t, [{
				key: "componentDidMount",
				value: function() {}
			}, {
				key: "render",
				value: function() {
					var e = this.props,
						t = e.id,
						n = e.isLogin,
						a = this.state,
						r = a.list,
						o = a.total,
						l = a.hasNext,
						i = {
							checkLogin: this.checkLogin,
							isLogin: n
						}, u = "";
					if (r.length > 0) u = d.
					default.createElement("div", null, r.map(function(e, t) {
						return d.
						default.createElement(O.
						default, c({}, i, {
							key: t,
							note: e
						}))
					}), d.
					default.createElement(y.
					default, {
						paginationType: "hasNext",
						hasNext: l,
						bufferHeight: 400,
						getList: this.getList,
						dotInfo: {
							category: "Product",
							action: "loadMore",
							eventLabel: "note"
						},
						endText: "没有更多心得啦~"
					}));
					else if (0 === o) {
						var s = "noteEdit?productId=" + t;
						u = d.
						default.createElement("div", null, d.
						default.createElement("div", {
							className: "no-note"
						}), n ? d.
						default.createElement("a", {
							className: "btn-note",
							href: s,
							target: "_blank"
						}, d.
						default.createElement("span", {
							className: "icon icon-write"
						}), "写心得") : d.
						default.createElement("div", {
							className: "btn-note",
							onClick: this.handleWriteNote
						}, d.
						default.createElement("span", {
							className: "icon icon-write"
						}), "写心得"))
					}
					return d.
					default.createElement("div", {
						className: "tab-note"
					}, u)
				}
			}]), t
		}(d.
		default.Component), i.propTypes = {
			id: d.
			default.PropTypes.string.isRequired,
			relatedNotes: d.
			default.PropTypes.object.isRequired
		}, u),
		P = function(e) {
			return {
				isLogin: e.user.isLogin
			}
		}, S = function(e) {
			return {
				onLogin: function() {
					return new Promise(function(t) {
						g.
						default.show({
							onLoginSucceed: function(n) {
								e({
									type: N.LOGIN_SUCCESS,
									info: n.userInfo
								}), t()
							}
						})
					})
				}
			}
		};
	t.
	default = (0, m.connect)(P, S)(k)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(8),
		p = n(1),
		h = a(p),
		m = n(17),
		v = a(m),
		y = n(2),
		b = a(y),
		g = n(77),
		E = a(g),
		w = n(51),
		_ = a(w),
		N = n(12),
		C = a(N),
		O = n(5),
		T = a(O),
		k = {
			0: {
				star: 0,
				text: "未评价"
			},
			5: {
				star: 1,
				text: "慢走不送"
			},
			4: {
				star: 2,
				text: "不太好用"
			},
			3: {
				star: 3,
				text: "一般般啦"
			},
			2: {
				star: 4,
				text: "还不错哟"
			},
			1: {
				star: 5,
				text: "好用到哭"
			}
		}, P = (u = i = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.handleComment = function() {
					var e = n.state.note;
					n.props.checkLogin() && window.open("/note/" + e.id + "#share-bar", "_blank")
				}, n.handlePraise = function() {
					var e = n.state.note,
						t = v.
					default.resType.note, a = e.id, r = e.hasPraised, o = r ? "/newApi/praise/delete" : "/newApi/praise";
					window.$eventTrace({
						category: "Praise",
						action: r ? "remove" : "add",
						eventLabel: "note"
					}), n.props.checkLogin() && (0, b.
					default)(o, {
						method: "POST",
						body: {
							type: t,
							id: a
						}
					}).then(function() {
						n.setState(function(t) {
							return (0, _.
							default)(t, {
								note: {
									praiseCnt: {
										$set: r ? e.praiseCnt - 1 : e.praiseCnt + 1
									},
									hasPraised: {
										$set: !r
									}
								}
							})
						})
					}, function() {
						C.
						default.show(r ? "取消失败" : "点赞失败", 2e3, n.toastRoot)
					})
				}, n.state = {
					note: e.note
				}, n
			}
			return l(t, e), c(t, [{
				key: "componentWillMount",
				value: function() {}
			}, {
				key: "render",
				value: function() {
					var e = this.props.isLogin,
						t = this.state.note,
						n = t.author,
						a = n && n.avatar ? h.
					default.nosUrl(n.avatar, "100y100") : "", r = n && n.id ? "/user/" + n.id : "", o = t.emotionText ? t.emotionText : k[t.emotion].text, l = e && t.hasPraised ? "icon icon-praise-1" : "icon icon-praise", i = t.commentCnt > 0 ? h.
					default.handleCountTo999(t.commentCnt) : "评论", u = t.praiseCnt > 0 ? h.
					default.handleCountTo999(t.praiseCnt) : "点赞", c = t.id ? "/note/" + t.id : "";
					return f.
					default.createElement("div", {
						className: "note"
					}, f.
					default.createElement("a", {
						href: c,
						target: "_blank"
					}, f.
					default.createElement("div", {
						className: "to-detail"
					}, "详情", f.
					default.createElement("span", {
						className: "icon icon-arrow-right"
					}))), f.
					default.createElement("div", {
						className: "note-author"
					}, f.
					default.createElement(d.Link, {
						to: r,
						className: "avatar-wrapper"
					}, n && n.avatar ? f.
					default.createElement("img", {
						src: a,
						className: "avatar",
						alt: ""
					}) : null, n && n.vip ? f.
					default.createElement("span", {
						className: "icon icon-vip"
					}) : null), f.
					default.createElement("div", {
						className: "detail"
					}, n ? f.
					default.createElement("div", {
						className: "brief"
					}, f.
					default.createElement(d.Link, {
						to: r,
						className: "nickname"
					}, n.nickname), f.
					default.createElement("span", {
						className: "age"
					}, n.age, " "), n.skinType.id ? f.
					default.createElement("span", {
						className: "skinType"
					}, n.skinType.name) : null) : null, T.
					default.times(5, function(e) {
						var n = e < k[t.emotion].star ? "icon icon-star-1" : "icon icon-star";
						return f.
						default.createElement("span", {
							key: e,
							className: n
						})
					}), f.
					default.createElement("span", {
						className: "rankText"
					}, o))), f.
					default.createElement("a", {
						href: c,
						target: "_blank"
					}, f.
					default.createElement("div", {
						className: "note-content"
					}, f.
					default.createElement("p", {
						className: "note-sku"
					}, t.skuText), f.
					default.createElement("div", {
						className: "note-text"
					}, t.content))), t.images.length > 0 ? f.
					default.createElement(E.
					default, {
						imagesUrl: t.images,
						maxRow: 1,
						imageSize: "large"
					}) : null, f.
					default.createElement("div", {
						className: "note-price"
					}, t.price ? f.
					default.createElement("div", {
						className: "price"
					}, "购买价格：", t.price) : null, f.
					default.createElement("div", {
						className: "note-data"
					}, f.
					default.createElement("div", {
						className: "data-block",
						onClick: this.handleComment
					}, f.
					default.createElement("span", {
						className: "icon icon-comment"
					}), f.
					default.createElement("span", {
						className: "cnt"
					}, i)), f.
					default.createElement("div", {
						className: "data-block",
						onClick: this.handlePraise
					}, f.
					default.createElement("span", {
						className: l
					}), f.
					default.createElement("span", {
						className: "cnt"
					}, u)))))
				}
			}]), t
		}(f.
		default.Component), i.propTypes = {
			note: f.
			default.PropTypes.object.isRequired
		}, u);
	t.
	default = P
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(51),
		p = a(d),
		h = n(8),
		m = n(1),
		v = a(m),
		y = n(2),
		b = a(y),
		g = n(13),
		E = a(g),
		w = n(5),
		_ = a(w),
		N = 12,
		C = (u = i = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.getList = function() {
					var e = n.props.id;
					(0, b.
					default)("/newApi/product/" + e + "/v2/repos", {
						body: {
							limit: N,
							offset: (n.currentPage - 1) * N
						}
					}).then(function(e) {
						var t = e.result;
						n.setState((0, p.
						default)(n.state, {
							list: {
								$push: t.list
							},
							hasNext: {
								$set: t.hasNext
							},
							currentPage: {
								$set: n.currentPage + 1
							}
						}))
					})
				}, n.state = {
					list: e.relatedRepos.list,
					hasNext: e.relatedRepos.hasNext
				}, n.currentPage = 2, n
			}
			return l(t, e), c(t, [{
				key: "componentDidMount",
				value: function() {}
			}, {
				key: "render",
				value: function() {
					var e = this.state,
						t = e.list,
						n = e.hasNext,
						a = t.length > 0 && t.map(function(e) {
							var t = _.
							default.cloneDeep(e);
							return t.coverUrl = e.coverUrl ? v.
							default.nosUrl(e.coverUrl, "600y400", !0) : "", t.author.avatar = e.author && e.author.avatar ? v.
							default.nosUrl(e.author.avatar, "60y60") : "", t.authorHref = e.author && e.author.id ? "/user/" + e.author.id : "", t.browseCnt = e.browseCnt > 1e5 ? Math.floor(e.browseCnt / 1e4) + "万" : e.browseCnt, t.link = "/repo/" + e.id, t.tags = e.tags && e.tags.length > 2 ? e.tags.slice(0, 2) : e.tags, t
						});
					return f.
					default.createElement("div", {
						className: "tab-repo"
					}, f.
					default.createElement("ul", {
						className: "repo-list clearfix"
					}, a.length > 0 && a.map(function(e, t) {
						return f.
						default.createElement("li", {
							className: "repo",
							key: t
						}, f.
						default.createElement("a", {
							href: e.link,
							target: "_blank"
						}, f.
						default.createElement("img", {
							src: e.coverUrl,
							alt: ""
						})), f.
						default.createElement("div", {
							className: "repo-detail"
						}, f.
						default.createElement("a", {
							className: "repo-title",
							href: e.link,
							target: "_blank"
						}, e.title), f.
						default.createElement("div", {
							className: "repo-data"
						}, e.tags && e.tags.length > 0 ? f.
						default.createElement("p", {
							className: "tags"
						}, e.tags.map(function(e) {
							return t < 2 ? f.
							default.createElement("span", {
								key: t
							}, "#", e.name) : null
						})) : null, e.browseCnt ? f.
						default.createElement("div", {
							className: "data"
						}, f.
						default.createElement("span", {
							className: "icon icon-scan"
						}), " ", e.browseCnt) : null), f.
						default.createElement(h.Link, {
							to: e.authorHref,
							className: "author"
						}, e.author ? f.
						default.createElement("div", {
							className: "avatar-wrapper"
						}, f.
						default.createElement("img", {
							className: "avatar",
							src: e.author.avatar,
							alt: ""
						}), e.author.vip ? f.
						default.createElement("span", {
							className: "icon icon-vip"
						}) : null) : null, f.
						default.createElement("span", {
							className: "nickname"
						}, e.author.nickname))))
					})), f.
					default.createElement(E.
					default, {
						paginationType: "hasNext",
						hasNext: n,
						bufferHeight: 400,
						dotInfo: {
							category: "Product",
							action: "loadMore",
							eventLabel: "repo"
						},
						getList: this.getList,
						endText: "没有更多合辑啦~"
					}))
				}
			}]), t
		}(f.
		default.Component), i.propTypes = {
			id: f.
			default.PropTypes.string.isRequired,
			relatedRepos: f.
			default.PropTypes.object.isRequired
		}, u);
	t.
	default = C
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(309),
		p = a(d),
		h = n(311),
		m = a(h),
		v = n(308),
		y = a(v),
		b = (u = i = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.getDefaultTab = function() {
					var e = n.hasDetails,
						t = n.repoTotal,
						a = n.noteTotal,
						r = 0;
					return (t > 0 || e) && 0 === a && (r = 1), r
				}, n.getTabs = function() {
					var e = n.repoTotal,
						t = n.noteTotal,
						a = {
							name: "相关合辑",
							total: e > 999 ? "999+" : e
						}, r = {
							name: "使用心得",
							total: t > 0 ? t > 999 ? "999+" : t : ""
						}, o = {
							name: "产品详情",
							total: ""
						}, l = [];
					return l.push(r), e > 0 && l.push(a), n.hasDetails && l.push(o), l
				}, n.tabs = [], n.hasDetails = e.details.properties || e.details.usage || e.details.introduction, n.repoTotal = e.relatedRepos.total || 0, n.noteTotal = e.relatedNotes.total || 0, n.state = {
					currentIndex: n.getDefaultTab()
				}, n.handleChangeTab = n.handleChangeTab.bind(n), n
			}
			return l(t, e), c(t, [{
				key: "componentWillMount",
				value: function() {
					this.tabs = this.getTabs()
				}
			}, {
				key: "trace",
				value: function(e) {
					var t = void 0;
					switch (this.tabs[e].name) {
						case "相关合辑":
							t = "repo";
							break;
						case "使用心得":
							t = "note";
							break;
						case "产品详情":
							t = "productDetial";
							break;
						default:
							return
					}
					window.$eventTrace({
						category: "Product",
						action: "switchTab",
						eventLabel: t
					})
				}
			}, {
				key: "handleChangeTab",
				value: function(e) {
					this.trace(e), this.setState({
						currentIndex: e
					})
				}
			}, {
				key: "render",
				value: function() {
					function e(e) {
						return {
							display: e === i.currentIndex ? "block" : "none"
						}
					}
					var t = this,
						n = this.props,
						a = n.id,
						r = n.details,
						o = n.relatedRepos,
						l = n.relatedNotes,
						i = this.state,
						u = this.repoTotal,
						c = this.tabs.map(function(e, n) {
							var a = n === i.currentIndex ? "tab-item active" : "tab-item";
							return f.
							default.createElement("li", {
								key: n,
								onClick: function() {
									t.handleChangeTab(n)
								},
								className: a
							}, e.name, " ", e.total)
						});
					return f.
					default.createElement("div", {
						className: "related-tabs"
					}, f.
					default.createElement("ul", {
						className: "tab clearfix"
					}, c), f.
					default.createElement("div", {
						className: "tab-content"
					}, f.
					default.createElement("div", {
						style: e(0)
					}, f.
					default.createElement(p.
					default, {
						id: a,
						relatedNotes: l
					})), u > 0 ? f.
					default.createElement("div", {
						style: e(1)
					}, f.
					default.createElement(m.
					default, {
						id: a,
						relatedRepos: o
					})) : null, this.hasDetails ? f.
					default.createElement("div", {
						style: e(u > 0 ? 2 : 1)
					}, f.
					default.createElement(y.
					default, {
						details: r
					})) : null))
				}
			}]), t
		}(f.
		default.Component), i.propTypes = {
			id: f.
			default.PropTypes.string.isRequired,
			details: f.
			default.PropTypes.object.isRequired,
			relatedRepos: f.
			default.PropTypes.object.isRequired,
			relatedNotes: f.
			default.PropTypes.object.isRequired
		}, u);
	t.
	default = b
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(2),
		f = a(s),
		d = n(3),
		p = n(4),
		h = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(p),
		m = n(11),
		v = a(m),
		y = n(37),
		b = a(y),
		g = n(53),
		E = a(g),
		w = n(28),
		_ = a(w),
		N = n(307),
		C = a(N),
		O = n(312),
		T = a(O);
	n(443);
	var k = {
		PRODUCT: "/newApi/product",
		USER: "/newApi/ms/user/current"
	}, P = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props,
					t = e.product,
					n = e.relatedRepos,
					a = e.relatedNotes,
					r = t.id,
					o = t.details,
					l = {
						id: r,
						details: o || {},
						relatedRepos: n,
						relatedNotes: a
					}, i = document.querySelector("#main");
				return c.
				default.createElement("div", null, c.
				default.createElement(v.
				default, null), c.
				default.createElement("div", {
					className: "product-wrapper"
				}, c.
				default.createElement("div", {
					className: "wrapper"
				}, c.
				default.createElement("div", {
					id: "share-bar"
				}, c.
				default.createElement(b.
				default, {
					top: 62,
					bottomTarget: i
				}, c.
				default.createElement(E.
				default, {
					type: "product",
					id: r,
					direction: "vertical"
				}))), c.
				default.createElement("div", {
					id: "main"
				}, c.
				default.createElement("div", {
					className: "product-info-wrapper"
				}, c.
				default.createElement(C.
				default, {
					product: t
				}), c.
				default.createElement(T.
				default, l))), c.
				default.createElement("div", {
					id: "right-bar"
				}, c.
				default.createElement(_.
				default, null)))))
			}
		}], [{
			key: "fetchData",
			value: function(e, t) {
				var n = e.dispatch,
					a = e.getState,
					r = a(),
					o = r.headerInfo;
				n({
					type: h.GET_PRODUCT_REQUEST
				});
				var l = t.id,
					i = (0, f.
					default)(k.PRODUCT + "/" + l, {
						headerInfo: o
					}),
					u = (0, f.
					default)("" + k.USER, {
						headerInfo: o
					}),
					c = (0, f.
					default)(k.PRODUCT + "/" + l + "/v2/repos", {
						method: "GET",
						body: {
							offset: 0,
							limit: 12
						},
						headerInfo: o
					}),
					s = (0, f.
					default)(k.PRODUCT + "/" + l + "/notes", {
						method: "GET",
						body: {
							pageEndId: "",
							count: 10
						},
						headerInfo: o
					});
				return Promise.all([i, u, c, s]).then(function(e) {
					var t = e[2].result,
						a = e[3].result;
					n({
						type: h.GET_PRODUCT_SUCCESS,
						product: e[0].result,
						relatedRepos: {
							list: t.list || [],
							total: t.total || 0,
							hasNext: t.hasNext || !1
						},
						relatedNotes: {
							list: a.list || [],
							total: a.total || 0,
							hasNext: a.hasNext || !1
						}
					}), n(200 === e[1].code ? {
						type: h.LOGIN_SUCCESS,
						info: e[1].result
					} : {
						type: h.LOGIN_FAILURE
					})
				}).
				catch (function(e) {
					throw n({
						type: h.GET_PRODUCT_FAILURE
					}), e
				})
			}
		}]), t
	}(c.
	default.Component),
		S = function(e) {
			return {
				product: e.product && e.product.product || {},
				relatedRepos: e.product && e.product.relatedRepos || {},
				relatedNotes: e.product && e.product.relatedNotes || {}
			}
		};
	t.
	default = (0, d.connect)(S)(P)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(8),
		i = n(37),
		u = a(i),
		c = n(1),
		s = a(c),
		f = n(62),
		d = a(f),
		p = n(127),
		h = a(p);
	n(444);
	var m = function(e) {
		var t = e.repos,
			n = e.bottomTarget,
			a = t.map(function(e) {
				var t = e.id,
					n = e.coverUrl,
					a = e.title,
					r = e.tags,
					i = e.author,
					u = e.browseCnt;
				return o.
				default.createElement("li", {
					key: s.
					default.getKey()
				}, o.
				default.createElement("a", {
					href: "/repo/" + t,
					target: "_blank"
				}, o.
				default.createElement("img", {
					src: s.
					default.nosUrl(n, "280y186", !0, "1"),
					alt: "合辑封面"
				})), o.
				default.createElement("div", {
					className: "content"
				}, o.
				default.createElement("div", {
					className: "title"
				}, o.
				default.createElement("a", {
					href: "/repo/" + t,
					target: "_blank"
				}, a)), o.
				default.createElement("div", {
					className: "tabs"
				}, (r || []).slice(0, 2).map(function(e) {
					return "#" + e.name
				}).join(" ")), o.
				default.createElement("div", {
					className: "author-info"
				}, o.
				default.createElement(l.Link, {
					to: "/user/" + i.id
				}, o.
				default.createElement("div", {
					className: "avatar-wrapper"
				}, o.
				default.createElement("img", {
					src: s.
					default.nosUrl(i.avatarUrl, "48x48"),
					alt: "头像"
				}), i.vip ? o.
				default.createElement("span", {
					className: "icon vip icon-vip-small"
				}) : null)), o.
				default.createElement(l.Link, {
					to: "/user/" + i.id
				}, o.
				default.createElement("span", {
					className: "nickname"
				}, i.nickname))), o.
				default.createElement("span", {
					className: "browse-cnt clearfix"
				}, o.
				default.createElement("span", {
					className: "icon icon-eye"
				}), o.
				default.createElement("span", null, s.
				default.toW(u)))))
			});
		return o.
		default.createElement("aside", {
			className: "repo-aside"
		}, o.
		default.createElement(h.
		default, {
			info: e.author
		}), o.
		default.createElement("div", {
			className: "qr-banner"
		}), o.
		default.createElement(u.
		default, {
			top: 62,
			bottomTarget: n
		}, o.
		default.createElement("div", {
			className: "repos-wrapper"
		}, t.length ? o.
		default.createElement("div", {
			className: "repos"
		}, o.
		default.createElement("h4", null, "相关推荐"), o.
		default.createElement("ul", null, a)) : null)), o.
		default.createElement(d.
		default, null))
	};
	t.
	default = m
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(1),
		f = a(s),
		d = n(9),
		p = a(d),
		h = function(e) {
			function t(e) {
				return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return l(t, e), i(t, [{
				key: "render",
				value: function() {
					var e = this.props,
						t = e.media,
						n = e.meixueAccounts,
						a = void 0,
						r = !1,
						o = [];
					return t.forEach(function(e, l) {
						if (l && (a = t[l - 1], r = ~ [1, 8, 7].indexOf(a.type)), ~ [1, 8, 7].indexOf(e.type)) {
							var i = (0, p.
							default)({
								media: !0,
								prd: !0,
								clearfix: !0,
								"prd-1": r
							}),
								u = e.content,
								s = "product-display display" + Object.keys(u.display).length.toString(),
								d = u.display,
								h = u.productId,
								m = 8 === e.type,
								v = d.name1,
								y = d.name2,
								b = d.colorOrModelName,
								g = d.categoryNames;
							o.push(c.
							default.createElement("div", {
								className: i,
								key: f.
								default.getKey()
							}, c.
							default.createElement("div", {
								className: "wrap"
							}, m ? c.
							default.createElement("div", null, c.
							default.createElement("img", {
								src: f.
								default.nosUrl(u.coverUrl, "180x180"),
								alt: ""
							}), c.
							default.createElement("div", {
								className: s
							}, c.
							default.createElement("h4", {
								className: "name1"
							}, v), y ? c.
							default.createElement("h4", {
								className: "name2"
							}, y) : null, b ? c.
							default.createElement("h4", {
								className: "colorOrModelName"
							}, b) : null, g ? c.
							default.createElement("h4", {
								className: "categoryNames"
							}, g) : null)) : c.
							default.createElement("a", {
								target: "_blank",
								href: "/product/" + h
							}, c.
							default.createElement("img", {
								src: f.
								default.nosUrl(u.coverUrl, "180x180"),
								alt: ""
							}), c.
							default.createElement("div", {
								className: s
							}, c.
							default.createElement("h4", {
								className: "name1"
							}, v), y ? c.
							default.createElement("h4", {
								className: "name2"
							}, y) : null, b ? c.
							default.createElement("h4", {
								className: "colorOrModelName"
							}, b) : null, g ? c.
							default.createElement("h4", {
								className: "categoryNames"
							}, g) : null), c.
							default.createElement("span", {
								className: "readmore"
							}, c.
							default.createElement("span", {
								className: "show-hover"
							}, "查看", c.
							default.createElement("span", {
								className: "icon icon-right"
							})))))))
						}
						if (3 === e.type && o.push(c.
						default.createElement("div", {
							className: "media pic",
							key: f.
							default.getKey()
						}, c.
						default.createElement("img", {
							src: f.
							default.nosUrl(e.content.url, "612x0", !1, 0),
							alt: "",
							onContextMenu: function(e) {
								!n && e.preventDefault()
							}
						}))), 6 === e.type && e.content.length) {
							var E = (0, p.
							default)({
								media: !0,
								txt: !0,
								"prev-is-txt": a && 6 === a.type
							}),
								w = e.html ? c.
							default.createElement("div", {
								className: E,
								key: f.
								default.getKey(),
								dangerouslySetInnerHTML: {
									__html: e.html
								}
							}) : c.
							default.createElement("div", {
								className: E,
								key: f.
								default.getKey()
							}, e.content);
							o.push(w)
						}
					}), c.
					default.createElement("div", null, o)
				}
			}]), t
		}(c.
		default.Component);
	t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(9),
		d = a(f),
		p = n(2),
		h = a(p),
		m = n(3),
		v = n(4),
		y = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(v),
		b = n(1),
		g = a(b),
		E = n(5),
		w = a(E),
		_ = n(128),
		N = a(_),
		C = n(75),
		O = a(C),
		T = n(133),
		k = a(T),
		P = n(53),
		S = a(P),
		j = n(11),
		L = a(j),
		x = n(12),
		I = a(x),
		R = n(314),
		M = a(R),
		U = n(315),
		A = a(U);
	n(445);
	var D = {
		REPO: "/newApi/repo",
		PREVIEW: "/newApi/repo/preview",
		COMMENTS: "/newApi/comment/list",
		USER: "/newApi/ms/user/current",
		getDraftCnt: "/newApi/repo/draftCnt"
	}, F = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				commentsCnt: e.comments.total,
				bottomTarget: null,
				toastRoot: null
			}, n
		}
		return l(t, e), u(t, [{
			key: "componentDidMount",
			value: function() {
				(0, h.
				default)(D.getDraftCnt).then(function(e) {
					200 === e.code && e.result && 47 === e.result.repoDraftCnt && "#toast" === window.location.hash && I.
					default.show("还剩3篇草稿空间")
				}), this.setState({
					bottomTarget: this.bottomTarget,
					toastRoot: this.toastRoot
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = t.repo,
					a = t.meixueAccounts,
					r = this.state,
					o = r.commentsCnt,
					l = r.bottomTarget,
					i = r.toastRoot,
					u = n.id,
					c = n.privacy,
					f = n.coverUrl,
					p = n.title,
					h = n.tags,
					m = n.media,
					v = n.displayUpdateTime,
					y = n.author,
					b = n.repos,
					E = n.social,
					_ = h && h.length ? s.
				default.createElement("div", {
					className: "tab-bar clearfix"
				}, h.slice(0, 10).map(function(e) {
					return s.
					default.createElement("span", {
						key: g.
						default.getKey()
					}, g.
					default.truncate(e.name, 10, "..."))
				})) : null, C = (0, d.
				default)({
					"repo-content": !0,
					"no-select": !a
				});
				return s.
				default.createElement("div", null, s.
				default.createElement(L.
				default, null), s.
				default.createElement("div", {
					className: "repo-wrapper",
					ref: function(t) {
						e.bottomTarget = t
					}
				}, s.
				default.createElement(k.
				default, {
					type: "repo",
					id: u,
					bottomTarget: l,
					toastRoot: i
				}), s.
				default.createElement("article", {
					ref: function(t) {
						e.toastRoot = t
					}
				}, s.
				default.createElement("div", {
					className: "head-wrapper"
				}, s.
				default.createElement("img", {
					className: "head-img",
					src: g.
					default.nosUrl(f, "660y270", !0),
					alt: "合辑封面"
				})), s.
				default.createElement("div", {
					style: {
						padding: "0 24px"
					}
				}, c ? null : s.
				default.createElement("div", {
					className: "comment-bar"
				}, s.
				default.createElement("span", {
					className: "icon icon-eye"
				}), s.
				default.createElement("span", null, g.
				default.toW(E.browseCnt)), s.
				default.createElement("span", {
					className: "icon icon-heart-small"
				}), s.
				default.createElement("span", {
					id: "praise-cnt"
				}, g.
				default.toW(E.collectCnt))), s.
				default.createElement("h1", {
					className: "repo-title"
				}, w.
				default.trim(p)), _, s.
				default.createElement("div", {
					className: C
				}, s.
				default.createElement(A.
				default, {
					media: m,
					meixueAccounts: a
				}), s.
				default.createElement("div", {
					className: "update-time"
				}, "最后编辑于  ", v), s.
				default.createElement("div", {
					className: "dashed-border"
				})), c ? null : s.
				default.createElement(S.
				default, {
					type: "repo",
					id: u,
					commentsCnt: o
				}), c ? s.
				default.createElement(N.
				default, {
					type: 1,
					show: !0
				}) : s.
				default.createElement(O.
				default, {
					limit: 20,
					type: "repo",
					id: u
				}))), s.
				default.createElement(M.
				default, {
					repos: b,
					author: y,
					bottomTarget: l
				})))
			}
		}], [{
			key: "fetchData",
			value: function(e, t) {
				var n = e.dispatch,
					a = e.getState,
					r = a(),
					o = r.headerInfo;
				n({
					type: y.GET_REPO_REQUEST
				});
				var l = t.id,
					u = t.preview,
					c = u ? (0, h.
					default)("" + D.PREVIEW, {
						headerInfo: o,
						body: {
							id: l
						},
						method: "POST"
					}) : (0, h.
					default)(D.REPO + "/" + l, {
						headerInfo: o
					}),
					s = (0, h.
					default)("" + D.USER, {
						headerInfo: o
					}),
					f = (0, h.
					default)("" + D.COMMENTS, {
						method: "GET",
						body: {
							type: 3,
							id: l,
							offset: 0,
							limit: 20
						},
						headerInfo: o
					});
				return Promise.all([c, f, s]).then(function(e) {
					n({
						type: y.GET_REPO_SUCCESS,
						repo: e[0].result,
						comments: i({
							list: []
						}, e[1].result)
					}), n(200 === e[2].code ? {
						type: y.LOGIN_SUCCESS,
						info: e[2].result
					} : {
						type: y.LOGIN_FAILURE
					})
				}).
				catch (function(e) {
					throw n({
						type: y.GET_REPO_FAILURE
					}), e
				})
			}
		}]), t
	}(s.
	default.Component),
		G = function(e) {
			return {
				meixueAccounts: !! e.user.info.meixueAccounts,
				repo: e.repo && e.repo.repo || {},
				comments: e.repo && e.repo.comments || {}
			}
		};
	t.
	default = (0, m.connect)(G)(F)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(8),
		f = n(1),
		d = a(f);
	n(160);
	var p = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.clickPraise = n.clickPraise.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "clickPraise",
			value: function(e) {
				this.props.clickPraise(e)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.title,
					a = e.emotion,
					r = e.content,
					o = e.praised,
					l = e.praiseCnt,
					i = e.coverUrl,
					u = e.author,
					f = e.clickPraise,
					p = u.avatarUrl,
					h = u.nickname,
					m = u.vip,
					v = {
						id: t,
						title: n,
						emotion: a,
						content: r,
						praised: o,
						praiseCnt: l,
						coverUrl: i,
						author: u
					}, y = void 0;
				switch (a) {
					case 1:
						y = "5星";
						break;
					case 2:
						y = "4星";
						break;
					case 3:
						y = "3星";
						break;
					case 4:
						y = "2星";
						break;
					case 5:
						y = "1星";
						break;
					default:
						y = "1星"
				}
				return c.
				default.createElement("li", {
					className: "note-tag-item"
				}, c.
				default.createElement("a", {
					href: "/note/" + t,
					target: "_blank",
					className: "img-wrapper"
				}, c.
				default.createElement("div", null, c.
				default.createElement("img", {
					src: d.
					default.nosUrl(i, "320y320", !0, "1"),
					alt: "心得封面",
					className: "note-cover"
				}))), c.
				default.createElement("div", {
					className: "content"
				}, c.
				default.createElement("a", {
					className: "title",
					href: "/note/" + t,
					target: "_blank"
				}, n), c.
				default.createElement("div", {
					className: "score"
				}, Number(a) <= 3 ? c.
				default.createElement("span", {
					className: "score-red"
				}, y) : c.
				default.createElement("span", {
					className: "score-grey"
				}, y), r ? c.
				default.createElement("span", {
					className: "text"
				}, " | ", r) : null), c.
				default.createElement("div", {
					className: "author clearfix"
				}, c.
				default.createElement(s.Link, {
					to: "/user/" + u.id
				}, c.
				default.createElement("div", {
					className: "img-wrapper"
				}, c.
				default.createElement("img", {
					src: d.
					default.nosUrl(p, "48y48"),
					alt: "头像"
				}), m ? c.
				default.createElement("span", {
					className: "icon icon-vip-small"
				}) : null)), c.
				default.createElement(s.Link, {
					to: "/user/" + u.id
				}, c.
				default.createElement("span", {
					className: "nickname"
				}, h && d.
				default.truncate(h, 10, "..."))), c.
				default.createElement("div", {
					className: "praise-cnt"
				}, o ? c.
				default.createElement("span", {
					className: "icon icon-thumbs-up-fill",
					onClick: function() {
						f(v)
					}
				}) : c.
				default.createElement("span", {
					className: "icon icon-thumbs-up",
					onClick: function() {
						f(v)
					}
				}), l > 0 ? c.
				default.createElement("span", {
					className: "praise"
				}, d.
				default.handleCountTo999(l)) : c.
				default.createElement("span", {
					className: "praise"
				}, "赞")))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = p
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(2),
		d = a(f),
		p = n(13),
		h = a(p),
		m = n(27),
		v = a(m),
		y = n(12),
		b = a(y),
		g = n(317),
		E = a(g);
	n(160), n(88);
	var w = {
		PRAISE: "/newApi/praise"
	}, _ = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.current = 1, n.canGet = !0, n.getList = n.getList.bind(n), n.clickPraise = n.clickPraise.bind(n), n
		}
		return l(t, e), u(t, [{
			key: "getList",
			value: function() {
				var e = this;
				this.canGet && (this.canGet = !1, this.props.getList(10 * this.current).then(function() {
					e.current++, e.canGet = !0
				}).
				catch (function(e) {}))
			}
		}, {
			key: "clickPraise",
			value: function(e, t) {
				var n = this.props,
					a = n.isLogin,
					r = n.info,
					o = n.login,
					l = n.setList,
					i = r.list,
					u = r.recommendList,
					c = t.id,
					s = t.praised,
					f = t.praiseCnt,
					p = s ? w.PRAISE + "/delete" : "" + w.PRAISE;
				if (!a) return o();
				(0, d.
				default)(p, {
					method: "POST",
					body: {
						type: 2,
						id: c
					}
				}).then(function(t) {
					if (200 === t.code) {
						var n = (0, v.
						default)(e ? u : i, {
							$apply: function(e) {
								return e.map(function(e) {
									return e.id === c ? (0, v.
									default)(e, {
										praised: {
											$set: !s
										},
										praiseCnt: {
											$set: s ? f - 1 : f + 1
										}
									}) : e
								})
							}
						});
						l(e ? {
							recommendList: n
						} : {
							list: n
						})
					}
				}).
				catch (function() {
					b.
					default.show(s ? "取消失败" : "点赞失败", 2e3)
				})
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				if (!e.isLogin && this.props.isLogin) {
					var t = this.props,
						n = t.list,
						a = t.changeList,
						r = t.hasNext;
					a(n.map(function(e) {
						return i({}, e, {
							praised: !1
						})
					}), r)
				} else e.isLogin && !this.props.isLogin && (this.current = 0, this.getList([]))
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.info,
					n = t.list,
					a = t.hasNext,
					r = t.recommendList,
					o = t.recommendHasNext,
					l = n.map(function(t, n) {
						return s.
						default.createElement(E.
						default, {
							id: t.id,
							title: t.title,
							emotion: t.emotion,
							coverUrl: t.coverUrl,
							content: t.content,
							praised: t.praised,
							praiseCnt: t.praiseCnt,
							author: t.author,
							clickPraise: function() {
								for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
								e.clickPraise.apply(e, [!1].concat(n))
							},
							key: "note_" + n
						})
					}),
					i = r.map(function(t, n) {
						return s.
						default.createElement(E.
						default, {
							id: t.id,
							title: t.title,
							emotion: t.emotion,
							coverUrl: t.coverUrl,
							content: t.content,
							praised: t.praised,
							praiseCnt: t.praiseCnt,
							author: t.author,
							clickPraise: function() {
								for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
								e.clickPraise.apply(e, [!0].concat(n))
							},
							key: "note_reco_" + n
						})
					});
				return s.
				default.createElement("div", null, s.
				default.createElement("ul", {
					className: "col-note-list clearfix"
				}, l), n.length > 0 && !r.length ? s.
				default.createElement("div", {
					className: "tab-loading-more"
				}, s.
				default.createElement(h.
				default, {
					paginationType: "hasNext",
					hasNext: a,
					bufferHeight: 400,
					dotInfo: this.props.dotInfo,
					getList: this.getList,
					endText: "没有更多心得啦~"
				})) : null, r.length ? s.
				default.createElement("p", {
					className: "reco-title"
				}, "为您推荐相似的", s.
				default.createElement("span", null, "热门"), "心得") : null, r.length ? s.
				default.createElement("ul", {
					className: "col-note-list clearfix"
				}, i) : null, r.length ? s.
				default.createElement("div", {
					className: "tab-loading-more"
				}, s.
				default.createElement(h.
				default, {
					paginationType: "hasNext",
					hasNext: o,
					bufferHeight: 400,
					dotInfo: this.props.dotInfo,
					getList: this.getList,
					endText: "没有更多心得啦~"
				})) : null)
			}
		}]), t
	}(s.
	default.Component);
	t.
	default = _
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(1),
		f = a(s);
	n(161);
	var d = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.coverUrl,
					a = e.display,
					r = e.noteCnt;
				return c.
				default.createElement("li", {
					className: "product-tag-item"
				}, c.
				default.createElement("a", {
					href: "/product/" + t,
					target: "_blank"
				}, c.
				default.createElement("div", {
					className: "img-wrapper"
				}, c.
				default.createElement("img", {
					src: f.
					default.nosUrl(n, "280y280", !0, "1"),
					alt: "产品封面"
				})), c.
				default.createElement("div", {
					className: "content"
				}, c.
				default.createElement("div", {
					className: "name1",
					href: "/product/" + t,
					target: "_blank"
				}, a.name1), c.
				default.createElement("div", {
					className: "name2",
					href: "/product/" + t,
					target: "_blank"
				}, a.name2), c.
				default.createElement("span", {
					className: "category"
				}, a.categoryNames), r > 0 ? c.
				default.createElement("span", {
					className: "noteCnt"
				}, f.
				default.handleCountTo999(r), "篇心得") : null)))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = d
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(13),
		f = a(s),
		d = n(319),
		p = a(d);
	n(161), n(88);
	var h = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.current = 1, n.canGet = !0, n.getList = n.getList.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "getList",
			value: function() {
				var e = this;
				this.canGet && (this.canGet = !1, this.props.getList(10 * this.current).then(function() {
					e.current++, e.canGet = !0
				}).
				catch (function(e) {}))
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.info,
					t = e.list,
					n = e.hasNext,
					a = e.recommendList,
					r = e.recommendHasNext,
					o = t.map(function(e, t) {
						return c.
						default.createElement(p.
						default, {
							id: e.id,
							coverUrl: e.coverUrl,
							display: e.display,
							noteCnt: e.noteCnt,
							key: "product_" + t
						})
					}),
					l = a.map(function(e, t) {
						return c.
						default.createElement(p.
						default, {
							id: e.id,
							coverUrl: e.coverUrl,
							display: e.display,
							noteCnt: e.noteCnt,
							key: "product_reco_" + t
						})
					});
				return c.
				default.createElement("div", null, c.
				default.createElement("ul", {
					className: "col-product-list clearfix"
				}, o), t.length && !a ? c.
				default.createElement("div", {
					className: "tab-loading-more"
				}, c.
				default.createElement(f.
				default, {
					paginationType: "hasNext",
					hasNext: n,
					bufferHeight: 400,
					getList: this.getList,
					dotInfo: this.props.dotInfo,
					endText: "没有更多产品啦~"
				})) : null, a.length ? c.
				default.createElement("p", {
					className: "reco-title"
				}, "为您推荐相似的", c.
				default.createElement("span", null, "热门"), "产品") : null, a.length ? c.
				default.createElement("ul", {
					className: "col-note-list clearfix"
				}, l) : null, a.length ? c.
				default.createElement("div", {
					className: "tab-loading-more"
				}, c.
				default.createElement(f.
				default, {
					paginationType: "hasNext",
					hasNext: r,
					bufferHeight: 400,
					getList: this.getList,
					dotInfo: this.props.dotInfo,
					endText: "没有更多产品啦~"
				})) : null)
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(8),
		f = n(25),
		d = a(f),
		p = n(74),
		h = a(p),
		m = n(1),
		v = a(m);
	n(162);
	var y = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleMouseEnter = n.handleMouseEnter.bind(n), n.handleMouseLeave = n.handleMouseLeave.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "handleMouseEnter",
			value: function() {
				var e = this.props;
				(0, e.showCollect)(e.id)
			}
		}, {
			key: "handleMouseLeave",
			value: function() {
				var e = this.props;
				(0, e.hideCollect)(e.id)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.title,
					a = e.tags,
					r = e.coverUrl,
					o = e.browseCnt,
					l = e.collected,
					i = e.author,
					u = e.followChange,
					f = e.showbg,
					p = e.showFollowTip,
					m = e.closeDownload,
					y = e.collectedChange,
					b = i.avatarUrl,
					g = i.nickname,
					E = i.vip,
					w = i.followType,
					_ = "hidden",
					N = "";
				return f && (_ = "visible", N = "#f4f4f4"), c.
				default.createElement("li", {
					className: "repo-tag-item",
					style: {
						backgroundColor: N
					}
				}, c.
				default.createElement("div", {
					className: "item-hover",
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave
				}, c.
				default.createElement("a", {
					href: "/repo/" + t,
					target: "_blank",
					className: "avatar"
				}, c.
				default.createElement("img", {
					className: "repo-cover",
					src: v.
					default.nosUrl(r, "470y312", !0, "1"),
					alt: "合辑封面"
				})), c.
				default.createElement("a", {
					href: "/repo/" + t,
					target: "_blank",
					className: "repo-hover",
					style: {
						visibility: _
					}
				}, c.
				default.createElement(h.
				default, {
					id: t,
					type: 3,
					className: "collect-button",
					followType: w,
					collected: l,
					collectedChange: function() {
						y(t, !l)
					}
				})), c.
				default.createElement("div", {
					className: "info"
				}, c.
				default.createElement("a", {
					className: "title",
					href: "/repo/" + t,
					target: "_blank"
				}, n), c.
				default.createElement("div", {
					className: "data clearfix"
				}, c.
				default.createElement("span", {
					className: "tags"
				}, (a || []).slice(0, 3).map(function(e) {
					return " #" + e.name
				}).join(" ")), c.
				default.createElement("span", {
					className: "browse"
				}, c.
				default.createElement("span", {
					className: "icon icon-eye"
				}), v.
				default.toW(o))))), c.
				default.createElement("div", {
					className: "author"
				}, c.
				default.createElement(s.Link, {
					to: "/user/" + i.id
				}, c.
				default.createElement("div", {
					className: "img-wrapper"
				}, c.
				default.createElement("img", {
					src: v.
					default.nosUrl(b, "48y48"),
					alt: "头像"
				}), E ? c.
				default.createElement("span", {
					className: "icon icon-vip-small"
				}) : null)), c.
				default.createElement(s.Link, {
					to: "/user/" + i.id
				}, c.
				default.createElement("span", {
					className: "nickname"
				}, g)), c.
				default.createElement(d.
				default, {
					className: "follow",
					id: i.id,
					type: 1,
					disableCancel: !0,
					initialFollowType: w,
					followCallback: function() {
						for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
						u.apply(void 0, n.concat([t]))
					},
					showFollowTip: p,
					closeDownload: function() {
						m(t)
					},
					disableGetFollowAfterLogin: !0
				})))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = y
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(13),
		f = a(s),
		d = n(27),
		p = a(d),
		h = n(321),
		m = a(h);
	n(162);
	var v = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.current = 1, n.canGet = !0, n.getList = n.getList.bind(n), n.handleFollowChange = n.handleFollowChange.bind(n), n.handleShowCollect = n.handleShowCollect.bind(n), n.handleHideCollect = n.handleHideCollect.bind(n), n.handleCloseDownload = n.handleCloseDownload.bind(n), n.handleCollectChange = n.handleCollectChange.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "getList",
			value: function() {
				var e = this;
				this.canGet && (this.canGet = !1, this.props.getList(12 * this.current).then(function() {
					e.current++, e.canGet = !0
				}).
				catch (function(e) {}))
			}
		}, {
			key: "handleShowCollect",
			value: function(e, t) {
				var n = this.props,
					a = n.setList,
					r = n.info,
					o = r.list,
					l = r.recommendList,
					i = (0, p.
					default)(e ? l : o, {
						$apply: function(e) {
							return e.map(function(e) {
								return e.id === t ? (0, p.
								default)(e, {
									showbg: {
										$set: !0
									}
								}) : (0, p.
								default)(e, {
									showbg: {
										$set: !1
									}
								})
							})
						}
					});
				a(e ? {
					recommendList: i
				} : {
					list: i
				})
			}
		}, {
			key: "handleHideCollect",
			value: function(e) {
				var t = this.props,
					n = t.setList,
					a = t.info,
					r = a.list,
					o = a.recommendList,
					l = (0, p.
					default)(e ? o : r, {
						$apply: function(e) {
							return e.map(function(e) {
								return (0, p.
								default)(e, {
									showbg: {
										$set: !1
									}
								})
							})
						}
					});
				n(e ? {
					recommendList: l
				} : {
					list: l
				})
			}
		}, {
			key: "handleCollectChange",
			value: function(e, t, n) {
				var a = this.props,
					r = a.setList,
					o = a.info,
					l = o.list,
					i = o.recommendList,
					u = (0, p.
					default)(e ? i : l, {
						$apply: function(e) {
							return e.map(function(e) {
								return e.id === t ? (0, p.
								default)(e, {
									collected: {
										$set: n
									}
								}) : e
							})
						}
					});
				r(e ? {
					recommendList: u
				} : {
					list: u
				})
			}
		}, {
			key: "handleCloseDownload",
			value: function(e, t) {
				var n = this.props,
					a = n.setList,
					r = n.info,
					o = r.list,
					l = r.recommendList,
					i = (0, p.
					default)(e ? l : o, {
						$apply: function(e) {
							return e.map(function(e) {
								return e.id === t ? (0, p.
								default)(e, {
									showFollowTip: {
										$set: !1
									}
								}) : e
							})
						}
					});
				a(e ? {
					recommendList: i
				} : {
					list: i
				})
			}
		}, {
			key: "handleFollowChange",
			value: function(e, t, n) {
				var a = this.props,
					r = a.info,
					o = a.setList,
					l = r.list,
					i = r.recommendList,
					u = localStorage.getItem("hasShow"),
					c = !1;
				u || 0 === e || (c = !0, localStorage.setItem("hasShow", !0)), o({
					list: (0, p.
					default)(l, {
						$apply: function(a) {
							return a.map(function(a) {
								return a.author.id === t ? a.id === n ? (0, p.
								default)(a, {
									author: {
										followType: {
											$set: e
										}
									},
									showFollowTip: {
										$set: c
									}
								}) : (0, p.
								default)(a, {
									author: {
										followType: {
											$set: e
										}
									}
								}) : a
							})
						}
					}),
					recommendList: (0, p.
					default)(i, {
						$apply: function(a) {
							return a.map(function(a) {
								return a.author.id === t ? a.id === n ? (0, p.
								default)(a, {
									author: {
										followType: {
											$set: e
										}
									},
									showFollowTip: {
										$set: c
									}
								}) : (0, p.
								default)(a, {
									author: {
										followType: {
											$set: e
										}
									}
								}) : a
							})
						}
					})
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.info,
					n = t.list,
					a = t.hasNext,
					r = t.recommendList,
					o = t.recommendHasNext,
					l = n.map(function(t, n) {
						return c.
						default.createElement(m.
						default, {
							id: t.id,
							title: t.title,
							tags: t.tags,
							coverUrl: t.coverUrl,
							browseCnt: t.browseCnt,
							collected: t.collected,
							followChange: e.handleFollowChange,
							author: t.author,
							showbg: t.showbg,
							showFollowTip: t.showFollowTip,
							showCollect: function() {
								for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
								e.handleShowCollect.apply(e, [!1].concat(n))
							},
							hideCollect: function() {
								for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
								e.handleHideCollect.apply(e, [!1].concat(n))
							},
							closeDownload: function() {
								for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
								e.handleCloseDownload.apply(e, [!1].concat(n))
							},
							collectedChange: function() {
								for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
								e.handleCollectChange.apply(e, [!1].concat(n))
							},
							key: "repo_" + n
						})
					}),
					i = r.map(function(t, n) {
						return c.
						default.createElement(m.
						default, {
							id: t.id,
							title: t.title,
							tags: t.tags,
							coverUrl: t.coverUrl,
							browseCnt: t.browseCnt,
							collected: t.collected,
							followChange: e.handleFollowChange,
							author: t.author,
							showbg: t.showbg,
							showFollowTip: t.showFollowTip,
							showCollect: function() {
								for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
								e.handleShowCollect.apply(e, [!0].concat(n))
							},
							hideCollect: function() {
								for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
								e.handleHideCollect.apply(e, [!0].concat(n))
							},
							closeDownload: function() {
								for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
								e.handleCloseDownload.apply(e, [!0].concat(n))
							},
							collectedChange: function() {
								for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
								e.handleCollectChange.apply(e, [!0].concat(n))
							},
							key: "repo_reco_" + n
						})
					});
				return c.
				default.createElement("div", null, c.
				default.createElement("ul", {
					className: "col-repo-list clearfix"
				}, l), n.length > 0 && !r.length ? c.
				default.createElement("div", {
					className: "tab-loading-more"
				}, c.
				default.createElement(f.
				default, {
					paginationType: "hasNext",
					hasNext: a,
					bufferHeight: 400,
					getList: this.getList,
					dotInfo: this.props.dotInfo,
					endText: "没有更多合辑啦~"
				})) : null, i.length ? c.
				default.createElement("p", {
					className: "reco-title"
				}, "为您推荐相似的", c.
				default.createElement("span", null, "热门"), "合辑") : null, i.length ? c.
				default.createElement("ul", {
					className: "col-repo-list clearfix"
				}, i) : null, i.length ? c.
				default.createElement("div", {
					className: "tab-loading-more"
				}, c.
				default.createElement(f.
				default, {
					paginationType: "hasNext",
					hasNext: o,
					bufferHeight: 400,
					getList: this.getList,
					dotInfo: this.props.dotInfo,
					endText: "没有更多合辑啦~"
				})) : null)
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = v
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(31),
		i = a(l),
		u = n(135),
		c = a(u);
	n(446);
	var s = function(e) {
		var t = e.query,
			n = e.tabs,
			a = e.page,
			r = e.changePage,
			l = n.repo,
			u = n.note,
			s = n.user,
			f = n.product,
			d = Object.keys(n).reduce(function(e, t) {
				return e + (n[t] ? 1 : 0)
			}, 0);
		return o.
		default.createElement("div", {
			className: "search-header-wrapper"
		}, o.
		default.createElement(c.
		default, {
			defaultQuery: t
		}), !d && Object.keys(n).length ? o.
		default.createElement("div", null, o.
		default.createElement(i.
		default, {
			content: "还没有内容"
		})) : null, d > 1 ? o.
		default.createElement("ul", {
			className: "tabs"
		}, l ? o.
		default.createElement("li", {
			className: "repo" === a ? "active" : "",
			onClick: function() {
				r("repo")
			}
		}, o.
		default.createElement("span", null, o.
		default.createElement("span", {
			className: "icon icon-repo"
		}), " 合辑")) : null, u ? o.
		default.createElement("li", {
			className: "note" === a ? "active" : "",
			onClick: function() {
				r("note")
			}
		}, o.
		default.createElement("span", null, o.
		default.createElement("span", {
			className: "icon icon-note"
		}), " 心得")) : null, f ? o.
		default.createElement("li", {
			className: "product" === a ? "active" : "",
			onClick: function() {
				r("product")
			}
		}, o.
		default.createElement("span", null, o.
		default.createElement("span", {
			className: "icon icon-product"
		}), " 产品")) : null, s ? o.
		default.createElement("li", {
			className: "user" === a ? "active" : "",
			onClick: function() {
				r("user")
			}
		}, o.
		default.createElement("span", null, o.
		default.createElement("span", {
			className: "icon icon-user"
		}), " 用户")) : null) : null)
	};
	t.
	default = s
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(1),
		f = a(s),
		d = n(25),
		p = a(d);
	n(163);
	var h = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.authType,
					a = e.avatarUrl,
					r = e.nickname,
					o = e.vip,
					l = e.fanCnt,
					i = e.age,
					u = e.skinType,
					s = e.followType,
					d = e.followChange,
					h = e.showFollowTip,
					m = e.closeDownload,
					v = i || "";
				return u && u.id && u.text && (v += i ? " | " + u.text : u.text), c.
				default.createElement("li", {
					className: "user-search-item"
				}, c.
				default.createElement("div", {
					className: "avatar"
				}, c.
				default.createElement("a", {
					href: "/user/" + t,
					target: "_blank"
				}, c.
				default.createElement("img", {
					src: f.
					default.nosUrl(a, "120y120", !0, "1"),
					alt: "头像"
				}), o ? c.
				default.createElement("span", {
					className: "icon icon-vip-large"
				}) : null)), c.
				default.createElement("div", {
					className: "content"
				}, c.
				default.createElement("span", {
					className: "content-info"
				}, c.
				default.createElement("a", {
					className: "nickname",
					href: "/user/" + t,
					target: "_blank"
				}, f.
				default.truncate(r, 10, "...")), c.
				default.createElement("span", {
					className: "other"
				}, " ", v, " ")), c.
				default.createElement("span", {
					className: "content-fans"
				}, 4 === n ? "999+" : f.
				default.toW(l), "粉丝"), c.
				default.createElement("div", {
					className: "content-follow"
				}, c.
				default.createElement(p.
				default, {
					className: "follow-btn",
					type: 1,
					id: t,
					initialFollowType: s,
					followCallback: d,
					showFollowTip: h,
					disableGetFollowAfterLogin: !0,
					closeDownload: function() {
						m(t)
					},
					disableCancel: !0
				}))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e) {
		if (Array.isArray(e)) {
			for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}
	function o(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function l(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function i(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var u = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		c = n(0),
		s = a(c),
		f = n(13),
		d = a(f),
		p = n(27),
		h = a(p);
	n(163), n(88);
	var m = n(324),
		v = a(m),
		y = function(e) {
			function t(e) {
				o(this, t);
				var n = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.current = 1, n.canGet = !0, n.getList = n.getList.bind(n), n.handleFollowChange = n.handleFollowChange.bind(n), n.handleCloseDownload = n.handleCloseDownload.bind(n), n
			}
			return i(t, e), u(t, [{
				key: "getList",
				value: function() {
					var e = this;
					this.canGet && (this.canGet = !1, this.props.getList(10 * this.current).then(function() {
						e.current++, e.canGet = !0
					}).
					catch (function(e) {}))
				}
			}, {
				key: "handleCloseDownload",
				value: function(e, t) {
					var n = this.props,
						a = n.setList,
						r = n.info,
						o = r.list,
						l = r.recommendList,
						i = (0, h.
						default)(e ? l : o, {
							$apply: function(e) {
								return e.map(function(e) {
									return e.id === t ? (0, h.
									default)(e, {
										showFollowTip: {
											$set: !1
										}
									}) : e
								})
							}
						});
					a(e ? {
						recommendList: i
					} : {
						list: i
					})
				}
			}, {
				key: "handleFollowChange",
				value: function(e, t) {
					var n = this.props,
						a = n.info,
						r = n.setList,
						o = a.list,
						l = a.recommendList,
						i = localStorage.getItem("hasShow"),
						u = !1;
					i || 0 === e || (u = !0, localStorage.setItem("hasShow", !0)), r({
						list: (0, h.
						default)(o, {
							$apply: function(n) {
								return n.map(function(n) {
									return n.id === t ? (0, h.
									default)(n, {
										followType: {
											$set: e
										},
										showFollowTip: {
											$set: u
										}
									}) : n
								})
							}
						}),
						recommendList: (0, h.
						default)(l, {
							$apply: function(n) {
								return n.map(function(n) {
									return n.id === t ? (0, h.
									default)(n, {
										followType: {
											$set: e
										},
										showFollowTip: {
											$set: u
										}
									}) : n
								})
							}
						})
					})
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = this.props.info,
						n = t.list,
						a = t.hasNext,
						o = t.recommendList,
						l = t.recommendHasNext,
						i = n.map(function(t, n) {
							return s.
							default.createElement(v.
							default, {
								id: t.id,
								authType: t.authType,
								nickname: t.nickname,
								avatarUrl: t.avatarUrl,
								vip: t.vip,
								fanCnt: t.fanCnt,
								skinType: t.skinType,
								age: t.age,
								followType: t.followType,
								followChange: e.handleFollowChange,
								showFollowTip: t.showFollowTip,
								closeDownload: function(t) {
									e.handleCloseDownload.apply(e, [!1].concat(r(t)))
								},
								key: "user_" + n
							})
						}),
						u = o.map(function(t, n) {
							return s.
							default.createElement(v.
							default, {
								id: t.id,
								authType: t.authType,
								nickname: t.nickname,
								avatarUrl: t.avatarUrl,
								vip: t.vip,
								fanCnt: t.fanCnt,
								skinType: t.skinType,
								age: t.age,
								followType: t.followType,
								followChange: e.handleFollowChange,
								showFollowTip: t.showFollowTip,
								closeDownload: function(t) {
									e.handleCloseDownload.apply(e, [!0].concat(r(t)))
								},
								key: "user_reco_" + n
							})
						});
					return s.
					default.createElement("div", null, s.
					default.createElement("ul", {
						className: "col-user-list clearfix"
					}, i), n.length && !o.length ? s.
					default.createElement("div", {
						className: "tab-loading-more"
					}, s.
					default.createElement(d.
					default, {
						paginationType: "hasNext",
						hasNext: a,
						bufferHeight: 400,
						dotInfo: this.props.dotInfo,
						getList: this.getList,
						endText: "没有更多用户啦~"
					})) : null, o.length ? s.
					default.createElement("p", {
						className: "reco-title"
					}, "为您推荐相似的", s.
					default.createElement("span", null, "热门"), "用户") : null, o.length ? s.
					default.createElement("ul", {
						className: "col-repo-list clearfix"
					}, u) : null, o.length ? s.
					default.createElement("div", {
						className: "tab-loading-more"
					}, s.
					default.createElement(d.
					default, {
						paginationType: "hasNext",
						hasNext: l,
						bufferHeight: 400,
						dotInfo: this.props.dotInfo,
						getList: this.getList,
						endText: "没有更多用户啦~"
					})) : null)
				}
			}]), t
		}(s.
		default.Component);
	t.
	default = y
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(2),
		d = a(f),
		p = n(3),
		h = n(4),
		m = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(h),
		v = n(17),
		y = a(v),
		b = n(5),
		g = a(b),
		E = n(11),
		w = a(E),
		_ = n(28),
		N = a(_),
		C = n(22),
		O = a(C),
		T = n(322),
		k = a(T),
		P = n(318),
		S = a(P),
		j = n(320),
		L = a(j),
		x = n(325),
		I = a(x),
		R = n(323),
		M = a(R);
	n(447);
	var U = {
		SEARCH: "/newApi/search",
		SEARCH_CNT: "/newApi/searchCnt",
		USER: "/newApi/ms/user/current"
	}, A = {
		repo: 12,
		note: 10,
		video: 10,
		product: 10
	}, D = function(e) {
		var t = "repo";
		return ["repo", "note", "product", "user"].some(function(n) {
			return !!e[n] && (t = n, !0)
		}), t
	}, F = {
		category: "SearchPage",
		action: "loadMore"
	}, G = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				tabs: {},
				page: null
			}, n.handleChangePage = n.handleChangePage.bind(n), n.getList = n.getList.bind(n), n
		}
		return l(t, e), u(t, [{
			key: "componentDidMount",
			value: function() {
				var e = this.props.query;
				this.initialQuery(e)
			}
		}, {
			key: "initialQuery",
			value: function(e) {
				var t = this;
				g.
				default.trim(e) && (0, d.
				default)(U.SEARCH_CNT, {
					method: "GET",
					body: {
						query: e
					}
				}).then(function(e) {
					var n = e.result.tabs,
						a = D(n);
					return t.setState({
						tabs: n,
						page: a
					}), a
				}).then(function(e) { !! e && t.getList(e)
				}).
				catch (function(e) {})
			}
		}, {
			key: "getList",
			value: function(e) {
				var t = this,
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					a = this.props,
					r = a.query,
					o = a.setList;
				return (0, d.
				default)(U.SEARCH, {
					method: "GET",
					body: {
						type: y.
						default.resType[e],
						limit: A[e],
						offset: n,
						query: r
					}
				}).then(function(a) {
					var r = a.result,
						l = r.list,
						i = r.hasNext,
						u = r.recommendList,
						c = r.recommendHasNext;
					if (n) {
						var s = t.props["search" + g.
						default.capitalize(e)];
						o(e, {
							list: s.list.concat(l),
							hasNext: i,
							recommendList: s.recommendList.concat(u),
							recommendHasNext: c
						})
					} else o(e, {
						list: l,
						hasNext: i,
						recommendList: u,
						recommendHasNext: c
					})
				})
			}
		}, {
			key: "handleChangePage",
			value: function(e) {
				window.$eventTrace({
					category: "SearchPage",
					action: "switchTab",
					eventLabel: e
				}), (0, this.props.setList)(this.state.page, {
					list: [],
					hasNext: !1,
					recommendList: [],
					recommendHasNext: !1
				}), this.setState({
					page: e
				}), this.getList(e)
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				var t = e.query,
					n = e.isLogin;
				if (this.props.query !== t) return this.initialQuery(t);
				this.props.isLogin !== n && this.getList(this.state.page)
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = t.query,
					a = t.searchRepo,
					r = t.searchNote,
					o = t.searchProduct,
					l = t.searchUser,
					u = t.setList,
					c = t.isLogin,
					f = t.login,
					d = this.state,
					p = d.tabs,
					h = d.page;
				return s.
				default.createElement("div", null, s.
				default.createElement(w.
				default, {
					triggerHideSearchHeight: 80
				}), s.
				default.createElement("div", {
					className: "search-wrapper"
				}, s.
				default.createElement(M.
				default, {
					query: n,
					tabs: p,
					page: h,
					changePage: this.handleChangePage
				}), s.
				default.createElement("div", null, "repo" === h ? s.
				default.createElement(k.
				default, {
					info: a,
					dotInfo: i({}, F, {
						eventLabel: "repo"
					}),
					setList: function(e) {
						u("repo", e)
					},
					getList: function(t) {
						return e.getList("repo", t)
					}
				}) : null, "note" === h ? s.
				default.createElement(S.
				default, {
					info: r,
					dotInfo: i({}, F, {
						eventLabel: "note"
					}),
					isLogin: c,
					login: f,
					setList: function(e) {
						u("note", e)
					},
					getList: function(t) {
						return e.getList("note", t)
					}
				}) : null, "product" === h ? s.
				default.createElement(L.
				default, {
					info: o,
					dotInfo: i({}, F, {
						eventLabel: "product"
					}),
					setList: function(e) {
						u("product", e)
					},
					getList: function(t) {
						return e.getList("product", t)
					}
				}) : null, "user" === h ? s.
				default.createElement(I.
				default, {
					info: l,
					dotInfo: i({}, F, {
						eventLabel: "user"
					}),
					setList: function(e) {
						u("user", e)
					},
					getList: function(t) {
						return e.getList("user", t)
					}
				}) : null), s.
				default.createElement(N.
				default, null)))
			}
		}], [{
			key: "fetchData",
			value: function(e) {
				var t = e.dispatch,
					n = e.getState,
					a = n(),
					r = a.headerInfo;
				return (0, d.
				default)("" + U.USER, {
					headerInfo: r
				}).then(function(e) {
					t(200 === e.code ? {
						type: m.LOGIN_SUCCESS,
						info: e.result
					} : {
						type: m.LOGIN_FAILURE
					})
				})
			}
		}]), t
	}(s.
	default.Component),
		H = function(e, t) {
			var n = t.location.query,
				a = e.searchRepo,
				r = e.searchNote,
				o = e.searchUser,
				l = e.searchProduct;
			return {
				query: n.query,
				isLogin: e.user.isLogin,
				searchRepo: a,
				searchNote: r,
				searchUser: o,
				searchProduct: l
			}
		}, B = function(e) {
			return {
				setList: function(t, n) {
					e(i({
						type: m["SET_SEARCH_" + t.toUpperCase()]
					}, n)), ["repo", "note", "user", "product"].forEach(function(n) {
						n !== t && e({
							type: m["SET_SEARCH_" + n.toUpperCase()],
							recommendHasNext: !1,
							recommendList: [],
							list: [],
							hasNext: !1
						})
					})
				},
				login: function() {
					return new Promise(function(t) {
						O.
						default.show({
							onLoginSucceed: function(n) {
								e({
									type: m.LOGIN_SUCCESS,
									info: n.userInfo
								}), t()
							}
						})
					})
				}
			}
		};
	t.
	default = (0, p.connect)(H, B)(G)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(2),
		f = a(s),
		d = n(3),
		p = n(4),
		h = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(p),
		m = n(8),
		v = n(11),
		y = a(v);
	n(450);
	var b = {
		USER: "/newApi/ms/user/current",
		SITEMAP: "/newApi/sitemap"
	}, g = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), i(t, [{
			key: "render",
			value: function() {
				return c.
				default.createElement("div", null, c.
				default.createElement(y.
				default, null), c.
				default.createElement("div", {
					className: "p-bd"
				}, c.
				default.createElement("div", {
					className: "tt"
				}, "网站地图"), c.
				default.createElement("ul", {
					className: "p-tabs",
					id: "tabs"
				}, c.
				default.createElement("li", {
					className: "tab",
					key: "repo"
				}, c.
				default.createElement(m.Link, {
					to: "/sitemap/repo",
					className: "link",
					activeClassName: "link-active"
				}, "合辑")), c.
				default.createElement("li", {
					className: "tab",
					key: "note"
				}, c.
				default.createElement(m.Link, {
					to: "/sitemap/note",
					className: "link",
					activeClassName: "link-active"
				}, "心得")), c.
				default.createElement("li", {
					className: "tab",
					key: "brand"
				}, c.
				default.createElement(m.Link, {
					to: "/sitemap/brand",
					className: "link",
					activeClassName: "link-active"
				}, "品牌")), c.
				default.createElement("li", {
					className: "tab",
					key: "product"
				}, c.
				default.createElement(m.Link, {
					to: "/sitemap/product",
					className: "link",
					activeClassName: "link-active"
				}, "商品"))), c.
				default.createElement("div", {
					className: "p-conts",
					id: "contents"
				}, this.props.children)))
			}
		}], [{
			key: "fetchData",
			value: function(e) {
				var t = e.dispatch,
					n = e.getState,
					a = n(),
					r = a.headerInfo,
					o = (0, f.
					default)(b.SITEMAP, {
						headerInfo: r
					}),
					l = (0, f.
					default)(b.USER, {
						headerInfo: r
					});
				return Promise.all([o, l]).then(function(e) {
					var n = e[0].result,
						a = n.repos,
						r = void 0 === a ? [] : a,
						o = n.notes,
						l = void 0 === o ? [] : o,
						i = n.products,
						u = void 0 === i ? [] : i,
						c = n.brands,
						s = void 0 === c ? [] : c;
					t({
						type: h.GET_SITEMAP_SUCCESS,
						repos: r,
						notes: l,
						products: u,
						brands: s
					}), t(200 === e[1].code ? {
						type: h.LOGIN_SUCCESS,
						info: e[1].result
					} : {
						type: h.LOGIN_FAILURE
					})
				}).
				catch (function(e) {
					throw t({
						type: h.GET_SITEMAP_FAILURE
					}), e
				})
			}
		}]), t
	}(c.
	default.Component),
		E = function() {
			return {}
		};
	t.
	default = (0, d.connect)(E)(g)
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function r(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		i = n(0),
		u = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(i),
		c = n(3),
		s = function(e) {
			function t(e) {
				return a(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return o(t, e), l(t, [{
				key: "render",
				value: function() {
					var e = this.props.brandList,
						t = e.map(function(e) {
							var t = "/brand/" + e.id;
							return u.
							default.createElement("li", {
								className: "item",
								key: e.id
							}, u.
							default.createElement("a", {
								href: t,
								className: "name",
								target: "_blank"
							}, e.name))
						});
					return u.
					default.createElement("div", {
						className: "p-conts",
						id: "contents"
					}, u.
					default.createElement("ul", {
						className: "cont"
					}, t))
				}
			}]), t
		}(u.
		default.Component),
		f = function(e) {
			return {
				brandList: e.sitemap && e.sitemap.brands || []
			}
		};
	t.
	default = (0, c.connect)(f)(s)
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function r(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		i = n(0),
		u = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(i),
		c = n(3),
		s = function(e) {
			function t(e) {
				return a(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return o(t, e), l(t, [{
				key: "render",
				value: function() {
					var e = this.props.noteList,
						t = e.map(function(e) {
							var t = "/note/" + e.id;
							return u.
							default.createElement("li", {
								className: "item",
								key: e.id
							}, u.
							default.createElement("a", {
								href: t,
								target: "_blank",
								className: "name note"
							}, u.
							default.createElement("span", {
								className: "note-name"
							}, e.productBrandName), u.
							default.createElement("span", null, " | "), u.
							default.createElement("span", {
								className: "emotion"
							}, 6 - parseInt(e.emotion, 10), "星")))
						});
					return u.
					default.createElement("div", {
						className: "p-conts",
						id: "contents"
					}, u.
					default.createElement("ul", {
						className: "cont"
					}, t))
				}
			}]), t
		}(u.
		default.Component),
		f = function(e) {
			return {
				noteList: e.sitemap && e.sitemap.notes || []
			}
		};
	t.
	default = (0, c.connect)(f)(s)
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function r(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		i = n(0),
		u = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(i),
		c = n(3),
		s = function(e) {
			function t(e) {
				return a(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return o(t, e), l(t, [{
				key: "render",
				value: function() {
					var e = this.props.productList,
						t = e.map(function(e) {
							var t = "/product/" + e.id;
							return u.
							default.createElement("li", {
								className: "item",
								key: e.id
							}, u.
							default.createElement("a", {
								href: t,
								target: "_blank",
								className: "name"
							}, e.productBrandName))
						});
					return u.
					default.createElement("div", {
						className: "p-conts",
						id: "contents"
					}, u.
					default.createElement("ul", {
						className: "cont"
					}, t))
				}
			}]), t
		}(u.
		default.Component),
		f = function(e) {
			return {
				productList: e.sitemap && e.sitemap.products || []
			}
		};
	t.
	default = (0, c.connect)(f)(s)
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function r(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		i = n(0),
		u = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(i),
		c = n(3),
		s = function(e) {
			function t(e) {
				return a(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return o(t, e), l(t, [{
				key: "render",
				value: function() {
					var e = this.props.repoList,
						t = e.map(function(e) {
							var t = "/repo/" + e.id;
							return u.
							default.createElement("li", {
								className: "item",
								key: e.id
							}, u.
							default.createElement("a", {
								href: t,
								target: "_blank",
								className: "name"
							}, e.title), u.
							default.createElement("span", {
								className: "update"
							}, e.updateTime))
						});
					return u.
					default.createElement("div", {
						className: "p-conts",
						id: "contents"
					}, u.
					default.createElement("ul", {
						className: "cont"
					}, t))
				}
			}]), t
		}(u.
		default.Component),
		f = function(e) {
			return {
				repoList: e.sitemap && e.sitemap.repos || []
			}
		};
	t.
	default = (0, c.connect)(f)(s)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(8),
		i = n(31),
		u = a(i),
		c = n(25),
		s = a(c);
	n(451);
	var f = function(e) {
		var t = e.page,
			n = e.tagDetail,
			a = e.followChange,
			r = e.closeDownload,
			i = n.name,
			c = n.followType,
			f = n.tabs,
			d = n.description,
			p = n.id,
			h = n.showFollowTip,
			m = f.repo,
			v = f.note,
			y = f.video,
			b = f.product,
			g = Object.keys(f).reduce(function(e, t) {
				return e + (f[t] ? 1 : 0)
			}, 0);
		return o.
		default.createElement("div", {
			className: "tag-header-wrapper"
		}, o.
		default.createElement("h1", null, o.
		default.createElement("span", {
			className: "name"
		}, i, " "), o.
		default.createElement(s.
		default, {
			id: p,
			type: 6,
			showFollowTip: h,
			closeDownload: r,
			initialFollowType: c,
			followCallback: a
		})), o.
		default.createElement("p", {
			className: "description"
		}, d), !g && o.
		default.createElement(u.
		default, {
			content: "还没有内容"
		}), g > 1 ? o.
		default.createElement("ul", {
			className: "tabs"
		}, m && o.
		default.createElement("li", {
			className: "repo" === t ? "active" : ""
		}, o.
		default.createElement(l.Link, {
			to: "/tag/" + p + "?page=repo"
		}, o.
		default.createElement("span", {
			className: "icon icon-repo"
		}), " 合辑")), v && o.
		default.createElement("li", {
			className: "note" === t ? "active" : ""
		}, o.
		default.createElement(l.Link, {
			to: "/tag/" + p + "?page=note"
		}, o.
		default.createElement("span", {
			className: "icon icon-note"
		}), " 心得")), y && o.
		default.createElement("li", {
			className: "video" === t ? "active" : ""
		}, o.
		default.createElement(l.Link, {
			to: "/tag/" + p + "?page=video"
		}, o.
		default.createElement("span", {
			className: "icon icon-video"
		}), " 视频")), b && o.
		default.createElement("li", {
			className: "product" === t ? "active" : ""
		}, o.
		default.createElement(l.Link, {
			to: "/tag/" + p + "?page=product"
		}, o.
		default.createElement("span", {
			className: "icon icon-product"
		}), " 产品"))) : null)
	};
	t.
	default = f
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(2),
		d = a(f),
		p = n(3),
		h = n(4),
		m = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(h),
		v = n(11),
		y = a(v),
		b = n(28),
		g = a(b),
		E = n(262),
		w = a(E),
		_ = n(258),
		N = a(_),
		C = n(136),
		O = a(C),
		T = n(260),
		k = a(T),
		P = n(332),
		S = a(P);
	n(452);
	var j = {
		TAG_PREFIX: "/newApi/tag",
		CURRENT_USER: "/newApi/ms/user/current"
	}, L = {
		repo: 12,
		note: 10,
		video: 12,
		product: 10
	}, x = function(e) {
		var t = null;
		return ["repo", "note", "video", "product"].some(function(n) {
			return !!e[n] && (t = n, !0)
		}), t
	}, I = {
		category: "Tag",
		action: "loadMore"
	}, R = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleFollowChange = n.handleFollowChange.bind(n), n.handleCloseDownload = n.handleCloseDownload.bind(n), n
		}
		return l(t, e), u(t, [{
			key: "handleFollowChange",
			value: function(e, t, n) {
				var a = this.props,
					r = a.tagDetail,
					o = a.setDetail,
					l = localStorage.getItem("hasShow"),
					u = !1;
				l || 0 === e || n || (u = !0, localStorage.setItem("hasShow", !0)), o(i({}, r, {
					followType: e,
					showFollowTip: u
				}))
			}
		}, {
			key: "handleCloseDownload",
			value: function() {
				var e = this.props,
					t = e.tagDetail;
				(0, e.setDetail)(i({}, t, {
					showFollowTip: !1
				}))
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				var t = this.props,
					n = t.setPage,
					a = t.tagDetail,
					r = a.tabs;
				this.props.page && e.page && this.props.page !== e.page && n(e.page), !this.props.page && e.page && x(r) !== e.page && n(e.page)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.page,
					t = this.props.tagDetail;
				return e = e || x(t.tabs), s.
				default.createElement("div", null, s.
				default.createElement(y.
				default, null), s.
				default.createElement("div", {
					className: "tag-wrapper"
				}, s.
				default.createElement(S.
				default, {
					page: e,
					tagDetail: t,
					closeDownload: this.handleCloseDownload,
					followChange: this.handleFollowChange
				}), s.
				default.createElement("div", null, "repo" === e ? s.
				default.createElement(w.
				default, {
					type: "tag",
					query: t.id,
					dotInfo: i({}, I, {
						eventLabel: "repo"
					})
				}) : null, "note" === e ? s.
				default.createElement(N.
				default, {
					type: "tag",
					query: t.id,
					dotInfo: i({}, I, {
						eventLabel: "note"
					})
				}) : null, "video" === e ? s.
				default.createElement(O.
				default, {
					type: "tag",
					query: t.id,
					dotInfo: i({}, I, {
						eventLabel: "video"
					})
				}) : null, "product" === e ? s.
				default.createElement(k.
				default, {
					type: "tag",
					query: t.id,
					dotInfo: i({}, I, {
						eventLabel: "product"
					})
				}) : null), s.
				default.createElement(g.
				default, null)))
			}
		}], [{
			key: "fetchData",
			value: function(e, t, n) {
				var a = t.id,
					r = n.query.page,
					o = e.dispatch,
					l = e.getState,
					i = l(),
					u = i.headerInfo,
					c = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							n = (0, d.
							default)("" + j.CURRENT_USER, {
								headerInfo: u
							}),
							r = [n].concat(e ? [function() {
								return (0, d.
								default)(j.TAG_PREFIX + "/" + a + "/" + e + "s", {
									method: "GET",
									body: {
										offset: 0,
										limit: L[e]
									},
									headerInfo: u
								})
							}()] : []).concat(t ? [] : [function() {
								return (0, d.
								default)(j.TAG_PREFIX + "/" + a, {
									headerInfo: u
								})
							}()]);
						return Promise.all(r).then(function(n) {
							o(200 === n[0].code ? {
								type: m.LOGIN_SUCCESS,
								info: n[0].result
							} : {
								type: m.LOGIN_FAILURE
							}), !! e && o({
								type: m["SET_TAG_" + e.toUpperCase()],
								list: n[1].result.list || [],
								hasNext: n[1].result.hasNext
							}), !t && o({
								type: m.SET_TAG_DETAIL,
								info: n[2].result
							})
						}).
						catch (function(e) {
							throw e
						})
					};
				return~ ["repo", "note", "video", "product"].indexOf(r) ? c(r) : (0, d.
				default)(j.TAG_PREFIX + "/" + a, {
					headerInfo: u
				}).then(function(e) {
					var t = x(e.result.tabs);
					return o({
						type: m.SET_TAG_DETAIL,
						info: e.result
					}), c(t, !0)
				})
			}
		}]), t
	}(s.
	default.Component),
		M = function(e, t) {
			return {
				page: t.location.query.page,
				tagDetail: e.tagDetail
			}
		}, U = function(e, t) {
			var n = t.params.id;
			return {
				setDetail: function(t) {
					e({
						type: m.SET_TAG_DETAIL,
						info: t
					})
				},
				setPage: function(t) {
					(0, d.
					default)(j.TAG_PREFIX + "/" + n + "/" + t + "s", {
						method: "GET",
						body: {
							offset: 0,
							limit: L[t]
						}
					}).then(function(n) {
						var a = n.result,
							r = a.list,
							o = a.hasNext;
						e({
							type: m["SET_TAG_" + t.toUpperCase()],
							list: r || [],
							hasNext: o
						})
					}).
					catch (function(e) {})
				}
			}
		};
	t.
	default = (0, p.connect)(M, U)(R)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = n(0),
		r = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(a),
		o = function(e) {
			var t = e.desImage,
				n = t && t.map(function(e, t) {
					return r.
					default.createElement("img", {
						src: e,
						alt: "",
						className: "detial-img",
						key: t
					})
				});
			return r.
			default.createElement("div", {
				className: "trial-detail"
			}, r.
			default.createElement("div", {
				className: "detail-wrap"
			}, n))
		};
	t.
	default = o
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(27),
		d = a(f),
		p = n(2),
		h = a(p),
		m = n(13),
		v = a(m),
		y = n(31),
		b = a(y),
		g = n(336),
		E = a(g),
		w = {
			PRODUCT_PREFIX: "/newApi/product"
		}, _ = 10,
		N = {
			category: "Trial",
			action: "loadMore",
			eventLabel: "trial"
		}, C = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.getList = function() {
					var e = n.props,
						t = e.productId,
						a = e.list,
						r = e.changeList,
						o = a.length > 0 ? a[a.length - 1].id : "0";
					(0, h.
					default)(w.PRODUCT_PREFIX + "/" + t + "/notes", {
						body: {
							pageEndId: o,
							count: _
						}
					}).then(function(e) {
						var t = a.concat(e.result.list);
						r(t, e.result.hasNext, e.result.total)
					})
				}, n.changePraise = function(e) {
					var t = n.props,
						a = t.list,
						r = t.hasNext,
						o = t.changeList,
						l = t.total;
					o((0, d.
					default)(a, {
						$apply: function(t) {
							return t.map(function(t) {
								if (t.id === e) {
									var n = t.hasPraised;
									return (0, d.
									default)(t, {
										hasPraised: {
											$set: !n
										},
										praiseCnt: {
											$set: n ? t.praiseCnt - 1 : t.praiseCnt + 1
										}
									})
								}
								return t
							})
						}
					}), r, l)
				}, n
			}
			return l(t, e), i(t, [{
				key: "render",
				value: function() {
					var e = this,
						t = this.props,
						n = t.list,
						a = t.hasNext,
						r = n.map(function(t, n) {
							return c.
							default.createElement(E.
							default, {
								note: t,
								handleChangePraise: e.changePraise,
								key: n
							})
						});
					return c.
					default.createElement("div", {
						className: "trial-note"
					}, n.length > 0 ? c.
					default.createElement("div", null, r, c.
					default.createElement("div", {
						className: "trial-loading-more"
					}, c.
					default.createElement(v.
					default, {
						paginationType: "hasNext",
						hasNext: a,
						bufferHeight: 400,
						getList: this.getList,
						dotInfo: N,
						endText: "没有更多心得啦~"
					}))) : c.
					default.createElement(b.
					default, {
						content: "还没有心得"
					}))
				}
			}]), t
		}(c.
		default.Component),
		O = function(e) {
			return {
				productId: e.trial.productId,
				list: e.trial.note.list,
				hasNext: e.trial.note.hasNext,
				total: e.trial.note.total
			}
		}, T = function(e) {
			return {
				changeList: function(t, n, a) {
					e({
						type: "SET_TRIAL_NOTE",
						note: {
							list: t,
							hasNext: n,
							total: a
						}
					})
				}
			}
		};
	t.
	default = (0, s.connect)(O, T)(C)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		c = n(0),
		s = a(c),
		f = n(8),
		d = n(1),
		p = a(d),
		h = n(17),
		m = a(h),
		v = n(2),
		y = a(v),
		b = n(77),
		g = a(b),
		E = n(12),
		w = a(E),
		_ = n(5),
		N = a(_),
		C = n(139),
		O = a(C),
		T = {
			0: {
				star: 0,
				text: "未评价"
			},
			5: {
				star: 1,
				text: "慢走不送"
			},
			4: {
				star: 2,
				text: "不太好用"
			},
			3: {
				star: 3,
				text: "一般般啦"
			},
			2: {
				star: 4,
				text: "还不错哟"
			},
			1: {
				star: 5,
				text: "好用到哭"
			}
		}, k = (0, O.
		default)(i = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.handleComment = function() {
					var e = n.props.note;
					n.props.checkLogin() && window.open("/note/" + e.id + "#share-bar", "_blank")
				}, n.handlePraise = function() {
					var e = n.props,
						t = e.note,
						a = e.handleChangePraise,
						r = m.
					default.resType.note, o = t.id, l = t.hasPraised, i = l ? "/newApi/praise/delete" : "/newApi/praise";
					window.$eventTrace({
						category: "Praise",
						action: l ? "remove" : "add",
						eventLabel: "note"
					}), n.props.checkLogin() && (0, y.
					default)(i, {
						method: "POST",
						body: {
							type: r,
							id: o
						}
					}).then(function() {
						a(t.id)
					}).
					catch (function() {
						w.
						default.show(l ? "取消失败" : "点赞失败")
					})
				}, n
			}
			return l(t, e), u(t, [{
				key: "render",
				value: function() {
					var e = this.props.note,
						t = e.author,
						n = t && t.id ? "/user/" + t.id : "",
						a = e.emotionText ? e.emotionText : T[e.emotion].text,
						r = e.hasPraised ? "icon icon-praise-1" : "icon icon-praise",
						o = e.commentCnt > 0 ? p.
					default.handleCountTo999(e.commentCnt) : "评论", l = e.praiseCnt > 0 ? p.
					default.handleCountTo999(e.praiseCnt) : "点赞", i = e.id ? "/note/" + e.id : "", u = e.skuText, c = void 0, d = void 0;
					return u && (c = u.split("：")[0] + "：", d = u.split("：")[1]), s.
					default.createElement("div", {
						className: "note"
					}, s.
					default.createElement("div", {
						className: "note-data"
					}, s.
					default.createElement("div", {
						className: "data-block",
						onClick: this.handleComment
					}, s.
					default.createElement("span", {
						className: "icon icon-comment"
					}), s.
					default.createElement("span", {
						className: "cnt"
					}, o)), s.
					default.createElement("div", {
						className: "data-block",
						onClick: this.handlePraise
					}, s.
					default.createElement("span", {
						className: r
					}), s.
					default.createElement("span", {
						className: "cnt"
					}, l))), s.
					default.createElement("div", {
						className: "note-author"
					}, s.
					default.createElement(f.Link, {
						to: n,
						className: "avatar-wrapper"
					}, t && t.avatar ? s.
					default.createElement("img", {
						src: p.
						default.nosUrl(t.avatar, "100y100"),
						className: "avatar",
						alt: ""
					}) : null, t && t.vip ? s.
					default.createElement("span", {
						className: "icon icon-vip"
					}) : null), s.
					default.createElement("div", {
						className: "detail"
					}, t ? s.
					default.createElement("div", {
						className: "brief"
					}, s.
					default.createElement(f.Link, {
						to: n,
						className: "nickname"
					}, t.nickname), s.
					default.createElement("span", {
						className: "age"
					}, t.age, " "), t.skinType && t.skinType.id ? s.
					default.createElement("span", {
						className: "skinType"
					}, t.skinType.name) : null) : null, N.
					default.times(5, function(t) {
						var n = t < T[e.emotion].star ? "icon icon-star-1" : "icon icon-star";
						return s.
						default.createElement("span", {
							key: t,
							className: n
						})
					}), s.
					default.createElement("span", {
						className: "rankText"
					}, a))), s.
					default.createElement("a", {
						href: i,
						target: "_blank"
					}, s.
					default.createElement("div", {
						className: "note-content"
					}, s.
					default.createElement("div", {
						className: "note-text"
					}, e.content))), e.images.length > 0 ? s.
					default.createElement(g.
					default, {
						imagesUrl: e.images,
						maxRow: 1,
						imageSize: "medium",
						rowLength: 6
					}) : null, s.
					default.createElement("div", {
						className: "note-sku-price"
					}, e.skuText ? s.
					default.createElement("div", {
						className: "sku"
					}, c, s.
					default.createElement("span", null, d)) : null, e.price ? s.
					default.createElement("div", {
						className: "price"
					}, "购买价格：", s.
					default.createElement("span", null, e.price)) : null))
				}
			}]), t
		}(s.
		default.Component)) || i;
	t.
	default = k
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(1),
		f = a(s),
		d = n(334),
		p = a(d),
		h = n(335),
		m = a(h);
	n(453);
	var v = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.getTabs = function() {
				var e = n.noteTotal;
				return [{
					name: "试用详情",
					total: ""
				}, {
					name: "使用心得",
					total: e > 0 ? f.
					default.handleCountTo999(e) : ""
				}]
			}, n.getCardStyle = function(e) {
				return {
					display: e === n.state.currentIndex ? "block" : "none"
				}
			}, n.trace = function(e) {
				var t = void 0;
				switch (n.tabs[e].name) {
					case "使用心得":
						t = "note";
						break;
					case "试用详情":
						t = "trialDetial";
						break;
					default:
						return
				}
				window.$eventTrace({
					category: "Trial",
					action: "switchTab",
					eventLabel: t
				})
			}, n.handleChangeTab = function(e) {
				n.trace(e), n.setState({
					currentIndex: e
				})
			}, n.tabs = [], n.noteTotal = e.noteTotal || 0, n.state = {
				currentIndex: 0
			}, n
		}
		return l(t, e), i(t, [{
			key: "componentWillMount",
			value: function() {
				this.tabs = this.getTabs()
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.state.currentIndex,
					n = this.tabs.map(function(n, a) {
						var r = a === t ? "tab-item active" : "tab-item";
						return c.
						default.createElement("li", {
							key: a,
							onClick: function() {
								e.handleChangeTab(a)
							},
							className: r
						}, n.name, " ", n.total, c.
						default.createElement("span", {
							className: "top-border-" + a
						}), c.
						default.createElement("span", {
							className: "bottom-border-" + a
						}))
					});
				return c.
				default.createElement("div", {
					className: "trial-tabs"
				}, c.
				default.createElement("ul", {
					className: "tab clearfix"
				}, n), c.
				default.createElement("div", {
					className: "tab-content"
				}, c.
				default.createElement("div", {
					style: this.getCardStyle(0)
				}, c.
				default.createElement(p.
				default, {
					desImage: this.props.desImage
				})), c.
				default.createElement("div", {
					style: this.getCardStyle(1)
				}, c.
				default.createElement(m.
				default, null))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = v
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = n(0),
		r = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(a);
	n(89);
	var o = function(e) {
		return e.showRule ? r.
		default.createElement("div", {
			className: "trial-apply-rule"
		}, r.
		default.createElement("div", {
			className: "modal"
		}, r.
		default.createElement("div", {
			className: "main"
		}, r.
		default.createElement("div", {
			className: "title"
		}, "申请规则"), r.
		default.createElement("div", {
			className: "text"
		}, r.
		default.createElement("p", null, "1. 点击免费试用，完成试用条件的任务即可免费申领，试用过程您无需支付任何费用；"), r.
		default.createElement("p", null, "2. 查看申领结果需下载网易美学App；"), r.
		default.createElement("p", null, "3. 申领成功名单通常将于结束3天内在美学App通知，系统通过美学系统消息通知申领成功的用户；"), r.
		default.createElement("p", null, "4. 申领成功用户请按提示填写收货地址，如3天内未填写则视为放弃试用资格；"), r.
		default.createElement("p", null, "5. 试用品发货后，您需在10天内提交真实试用报告，逾期未提交将被限制申领，试用后试用品无需返还；"), r.
		default.createElement("p", null, "6. 试用报告需用图文表达真实个人感受，不过分夸大赞美，也不随意诋毁。图片实拍、清晰，严禁盗图。优质试用报告可提升您下次申领成功几率，劣质试用报告将导致您被限制失去申领资格；"), r.
		default.createElement("p", null, "7. 网易美学将采用系统自动审核方式审核申领名单。")), r.
		default.createElement("div", {
			className: "close icon icon-close",
			onClick: e.handleChangeRule
		})))) : null
	};
	t.
	default = o
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = n(0),
		r = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(a);
	n(89);
	var o = function(e) {
		return e.showApplySuccess ? r.
		default.createElement("div", {
			className: "trial-apply-success"
		}, r.
		default.createElement("div", {
			className: "modal"
		}, r.
		default.createElement("div", {
			className: "main"
		}, r.
		default.createElement("div", {
			className: "title"
		}, "申领结果在", r.
		default.createElement("span", null, "App"), "上查看哦~"), r.
		default.createElement("div", {
			className: "image"
		}, r.
		default.createElement("span", {
			className: "icon icon-download-large"
		})), r.
		default.createElement("div", {
			className: "foot"
		}, "扫码下载App"), r.
		default.createElement("div", {
			className: "close icon icon-close",
			onClick: e.handleChangeSuccess
		})))) : null
	};
	t.
	default = o
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		c = n(0),
		s = a(c),
		f = n(1),
		d = a(f),
		p = n(139),
		h = a(p),
		m = n(338),
		v = a(m),
		y = n(339),
		b = a(y);
	n(89);
	var g = (0, h.
	default)(i = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleApply = function() {
				window.$eventTrace({
					category: "Trial",
					action: "click",
					eventLabel: "trial"
				});
				var e = n.props.applyStatus;
				n.props.checkLogin() && 1 === e && n.props.handleApply(e)
			}, n.handleChangeRule = function() {
				var e = n.state.showRule;
				e || window.$eventTrace({
					category: "Trial",
					action: "click",
					eventLabel: "rule"
				}), n.setState({
					showRule: !e
				})
			}, n.handleChangeSuccess = function() {
				var e = n.state.showApplySuccess;
				n.setState({
					showApplySuccess: !e
				})
			}, n.handleShowDownload = function() {
				window.$eventTrace({
					category: "Trial",
					action: "hover",
					eventLabel: "phone"
				}), n.setState({
					showDownload: !0
				})
			}, n.handleHideDownload = function() {
				n.setState({
					showDownload: !1
				})
			}, n.getCoverText = function() {
				var e = n.props,
					t = e.applyStatus,
					a = e.endTime;
				switch (t) {
					case 1:
					case 2:
						return a + "截止";
					case 5:
						return "试用申请已结束";
					default:
						return ""
				}
			}, n.getAvatarList = function() {
				var e = n.props,
					t = e.headUrls,
					a = e.applyNumber;
				if (t) {
					var r = t.slice(0, 5).map(function(e, t) {
						return s.
						default.createElement("li", {
							className: "avatar-applied",
							style: {
								zIndex: 5 - t
							},
							key: t
						}, s.
						default.createElement("img", {
							src: d.
							default.nosUrl(e, "72y72", !0, "1"),
							alt: ""
						}))
					});
					if (a > 5) {
						var o = s.
						default.createElement("li", {
							className: "avatar-applied avatar-applied-default",
							key: 4
						}, s.
						default.createElement("div", {
							className: "wrapper"
						}, s.
						default.createElement("span", null), s.
						default.createElement("span", null), s.
						default.createElement("span", null)));
						r.splice(4, 1, o)
					}
					return r
				}
			}, n.getApplyStatusElement = function() {
				var e = n.props,
					t = e.applyStatus,
					a = e.appOnly,
					r = e.productId,
					o = e.countingDown,
					l = n.state.showDownload;
				if (1 === t && a) return s.
				default.createElement("div", {
					className: "apply-element app-only"
				}, s.
				default.createElement("div", {
					className: "text"
				}, s.
				default.createElement("span", null), "此产品仅限于App用户申领，下载网易美学，查看更多大牌试用"), s.
				default.createElement("span", {
					className: "icon icon-download-small"
				}));
				switch (t) {
					case 0:
						return s.
					default.createElement("div", {
						className: "apply-element status0"
					}, o, s.
					default.createElement("div", {
						className: "phone"
					}, s.
					default.createElement("span", {
						className: "icon icon-phone",
						onMouseEnter: n.handleShowDownload,
						onMouseLeave: n.handleHideDownload
					}), l ? s.
					default.createElement("span", {
						className: "icon icon-download-medium"
					}) : null));
					case 1:
						return s.
					default.createElement("div", {
						className: "apply-element status1",
						onClick: n.handleApply
					}, "立即申请", s.
					default.createElement("div", {
						className: "phone"
					}, s.
					default.createElement("span", {
						className: "icon icon-phone",
						onMouseEnter: n.handleShowDownload,
						onMouseLeave: n.handleHideDownload
					}), l ? s.
					default.createElement("span", {
						className: "icon icon-download-medium"
					}) : null));
					case 2:
						return s.
					default.createElement("div", {
						className: "apply-element status2"
					}, "已申请");
					case 5:
						return s.
					default.createElement("div", {
						className: "apply-element status5"
					}, s.
					default.createElement("a", {
						href: "product/" + r,
						target: "_blank"
					}, "查看产品"));
					default:
						return 0
				}
			}, n.state = {
				showRule: !1,
				showApplySuccess: !1,
				showDownload: !1
			}, n
		}
		return l(t, e), u(t, [{
			key: "componentWillReceiveProps",
			value: function(e) {
				2 === e.applyStatus && 1 === this.props.applyStatus && this.setState({
					showApplySuccess: !0
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.zhName,
					n = e.enName,
					a = e.image,
					r = e.productId,
					o = e.price,
					l = e.quantity,
					i = e.applyNumber,
					u = e.headUrls,
					c = e.applyStatus,
					f = this.state,
					p = f.showRule,
					h = f.showApplySuccess,
					m = this.getCoverText(),
					y = d.
				default.toW(o), g = d.
				default.toW(l), E = d.
				default.toW(i), w = this.getAvatarList(), _ = this.getApplyStatusElement();
				return s.
				default.createElement("div", {
					className: "trial-item"
				}, s.
				default.createElement("div", {
					className: "cover"
				}, s.
				default.createElement("a", {
					href: "/product/" + r,
					className: "cover-image",
					target: "_blank"
				}, s.
				default.createElement("img", {
					src: d.
					default.nosUrl(a, "680y680", !0, "1"),
					alt: "产品图片"
				})), 0 !== c ? s.
				default.createElement("div", {
					className: "cover-text"
				}, s.
				default.createElement("span", {
					className: "icon icon-time-white"
				}), m) : null), s.
				default.createElement("div", {
					className: "info"
				}, s.
				default.createElement("div", {
					className: "zh-title"
				}, t), s.
				default.createElement("div", {
					className: "en-title"
				}, n), s.
				default.createElement("div", {
					className: "data"
				}, s.
				default.createElement("div", {
					className: "price"
				}, "价值 ", s.
				default.createElement("span", null, "¥" + y)), s.
				default.createElement("div", {
					className: "quantity"
				}, "限量 ", s.
				default.createElement("span", null, g), "份")), u && u.length > 0 ? s.
				default.createElement("div", {
					className: "avatars"
				}, s.
				default.createElement("ul", {
					className: "avatar-list"
				}, w), s.
				default.createElement("span", {
					className: "number"
				}, "共", E, "人已申请")) : null, _, s.
				default.createElement("div", {
					className: "rule",
					onClick: this.handleChangeRule
				}, "申请规则")), s.
				default.createElement(v.
				default, {
					handleChangeRule: this.handleChangeRule,
					showRule: p
				}), s.
				default.createElement(b.
				default, {
					handleChangeSuccess: this.handleChangeSuccess,
					showApplySuccess: h
				}))
			}
		}]), t
	}(s.
	default.Component)) || i;
	t.
	default = g
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(2),
		d = a(f),
		p = n(4),
		h = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(p),
		m = n(11),
		v = a(m),
		y = n(12),
		b = a(y),
		g = n(37),
		E = a(g),
		w = n(53),
		_ = a(w),
		N = n(28),
		C = a(N),
		O = n(340),
		T = a(O),
		k = n(337),
		P = a(k);
	n(454);
	var S = {
		USER: "/newApi/ms/user/current",
		TRIAL_PREFIX: "/newApi/trial",
		PRODUCT_PREFIX: "/newApi/product"
	}, j = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleApply = function() {
				var e = n.props.trial;
				(0, d.
				default)(S.TRIAL_PREFIX + "/" + e.id + "/apply", {
					method: "POST"
				}).then(function() {
					n.getTrial()
				}).
				catch (function(e) {
					b.
					default.show(e.msg || "申请失败，请稍后再试哦~")
				})
			}, n.getTrial = function() {
				var e = n.props,
					t = e.trial,
					a = e.changeTrial;
				(0, d.
				default)(S.TRIAL_PREFIX + "/" + t.id).then(function(e) {
					a(e.result)
				}).
				catch (function(e) {
					b.
					default.show(e.msg || "申请失败，请稍后再试哦~")
				})
			}, n
		}
		return l(t, e), i(t, [{
			key: "componentWillReceiveProps",
			value: function(e) {
				this.props.isLogin !== e.isLogin && window.location.reload()
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.trial;
				return c.
				default.createElement("div", {
					className: "trial"
				}, c.
				default.createElement(v.
				default, null), c.
				default.createElement("div", {
					id: "share-bar"
				}, c.
				default.createElement(E.
				default, {
					top: 62
				}, c.
				default.createElement(_.
				default, {
					type: "trial",
					id: e.id,
					direction: "vertical"
				}))), c.
				default.createElement("div", {
					id: "right-bar"
				}, c.
				default.createElement(C.
				default, null)), c.
				default.createElement("div", {
					className: "trial-info"
				}, c.
				default.createElement(T.
				default, {
					id: e.id,
					zhName: e.zhName,
					enName: e.enName,
					image: e.image,
					productId: e.productId,
					price: e.price,
					quantity: e.quantity,
					applyNumber: e.applyNumber,
					headUrls: e.headUrls,
					applyStatus: e.applyStatus,
					appOnly: e.appOnly,
					startTime: e.startTime,
					endTime: e.endTime,
					countingDown: e.countingDown,
					handleApply: this.handleApply
				}), c.
				default.createElement(P.
				default, {
					desImage: e.desImage,
					noteTotal: e.note.total
				})))
			}
		}], [{
			key: "fetchData",
			value: function(e, t) {
				var n = t.id,
					a = e.dispatch,
					r = e.getState,
					o = r(),
					l = o.headerInfo,
					i = (0, d.
					default)(S.TRIAL_PREFIX + "/" + n, {
						headerInfo: l
					}),
					u = (0, d.
					default)("" + S.USER, {
						headerInfo: l
					});
				return Promise.all([i, u]).then(function(e) {
					return a({
						type: h.SET_TRIAL,
						info: e[0].result
					}), a(200 === e[1].code ? {
						type: h.LOGIN_SUCCESS,
						info: e[1].result
					} : {
						type: h.LOGIN_FAILURE
					}), (0, d.
					default)(S.PRODUCT_PREFIX + "/" + e[0].result.productId + "/notes", {
						method: "GET",
						body: {
							pageEndId: "",
							count: 10
						},
						headerInfo: l
					})
				}).then(function(e) {
					var t = {};
					t.list = e.result.list, t.hasNext = e.result.hasNext, t.total = e.result.total, a({
						type: h.SET_TRIAL_NOTE,
						note: t
					})
				}).
				catch (function(e) {
					throw e
				})
			}
		}]), t
	}(c.
	default.Component),
		L = function(e) {
			return {
				trial: e.trial,
				isLogin: e.user.isLogin
			}
		}, x = function(e) {
			return {
				changeTrial: function(t) {
					e({
						type: "SET_TRIAL",
						info: t
					})
				}
			}
		};
	t.
	default = (0, s.connect)(L, x)(j)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(1),
		i = a(l),
		u = n(5),
		c = a(u),
		s = function(e) {
			var t = e.info,
				n = e.onDelete,
				a = e.inEdit,
				r = e.onClickPraise,
				l = t.id,
				u = t.title1,
				s = t.title2,
				f = t.emotion,
				d = t.emotionText,
				p = t.praised,
				h = t.praiseCnt,
				m = t.coverUrl,
				v = function() {
					window.$eventTrace({
						category: "User",
						action: "edit",
						eventLabel: "note"
					})
				};
			return o.
			default.createElement("li", {
				className: "note-item"
			}, a ? o.
			default.createElement("div", {
				className: "remove-layer"
			}, o.
			default.createElement("a", {
				className: "edit-btn",
				href: "/noteEdit/" + l,
				target: "_blank",
				onClick: v
			}, "编辑"), o.
			default.createElement("button", {
				className: "remove-btn",
				onClick: n
			}, "删除")) : null, o.
			default.createElement("a", {
				href: "/note/" + l,
				target: "_blank",
				className: "img-wrapper"
			}, o.
			default.createElement("div", null, o.
			default.createElement("img", {
				src: i.
				default.nosUrl(m, "138x138", !0, "1"),
				alt: "合辑封面"
			}))), o.
			default.createElement("div", {
				className: "content"
			}, o.
			default.createElement("a", {
				className: "title1",
				href: "/note/" + l,
				target: "_blank"
			}, u), o.
			default.createElement("p", {
				className: "title2"
			}, s), o.
			default.createElement("div", {
				className: "score"
			}, c.
			default.range(0, 6 - f).map(function() {
				return o.
				default.createElement("span", {
					className: "icon-star-fill icon",
					key: i.
					default.getKey()
				})
			}), c.
			default.range(1, f).map(function() {
				return o.
				default.createElement("span", {
					className: "icon-star icon",
					key: i.
					default.getKey()
				})
			}), o.
			default.createElement("span", {
				className: "text"
			}, d || "未评价"), o.
			default.createElement("div", {
				className: "praise-cnt"
			}, p ? o.
			default.createElement("span", {
				className: "icon icon-thumbs-up-fill",
				onClick: function() {
					r(t)
				}
			}) : o.
			default.createElement("span", {
				className: "icon icon-thumbs-up",
				onClick: function() {
					r(t)
				}
			}), o.
			default.createElement("span", null, i.
			default.handleCountTo999(h))))))
		};
	t.
	default = s
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(2),
		d = a(f),
		p = n(3),
		h = n(5),
		m = a(h),
		v = n(27),
		y = a(v),
		b = n(12),
		g = a(b),
		E = n(4),
		w = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(E),
		_ = n(1),
		N = a(_),
		C = n(13),
		O = a(C),
		T = n(20),
		k = a(T),
		P = n(22),
		S = a(P),
		j = n(31),
		L = a(j),
		x = n(342),
		I = a(x);
	n(455);
	var R = {
		USER_INFO_PREFIX: "/newApi/userInfo",
		USER_PREFIX: "/newApi/user",
		CURRENT_USER: "/newApi/ms/user/current",
		NOTE_PREFIX: "/newApi/note",
		PRAISE: "/newApi/praise"
	}, M = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				inEdit: !1
			}, ["handleDelete", "getList", "handleManage", "handleCancel"].forEach(function(e) {
				n[e] = n[e].bind(n)
			}), n.handleClickPraise = m.
			default.throttle(n.handleClickPraise.bind(n), 500), n
		}
		return l(t, e), u(t, [{
			key: "getList",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8,
					t = this.props,
					n = t.centerNote,
					a = t.changeList,
					r = t.centerUser,
					o = n.list,
					l = o.length > 0 ? o[o.length - 1].id : "0",
					i = r.id;
				(0, d.
				default)(R.USER_PREFIX + "/" + i + "/notes", {
					method: "GET",
					body: {
						pageEndId: l,
						count: e
					}
				}).then(function(e) {
					var t = o.concat(e.result.list || []);
					a(t, e.result.hasNext)
				})
			}
		}, {
			key: "handleDelete",
			value: function(e) {
				var t = this;
				window.$eventTrace({
					category: "User",
					action: "remove",
					eventLabel: "note"
				}), k.
				default.confirm({
					content: "确定删除此心得？",
					onClickOK: function() {
						var n = t.props,
							a = n.centerNote,
							r = n.changeList,
							o = n.centerUser,
							l = n.setCenterUser,
							u = a.list,
							c = a.hasNext;
						(0, d.
						default)(R.NOTE_PREFIX + "/" + e + "/delete", {
							method: "POST"
						}).then(function() {
							m.
							default.remove(u, function(t) {
								return t.id === e
							}), l(i({}, o, {
								noteCnt: o.noteCnt - 1
							})), r(u, c), c && t.getList(1)
						})
					}
				})
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				e.isLogin !== this.props.isLogin && window.location.reload()
			}
		}, {
			key: "handleClickPraise",
			value: function(e) {
				var t = e.id,
					n = e.praised,
					a = e.praiseCnt,
					r = n ? R.PRAISE + "/delete" : "" + R.PRAISE,
					o = this.props,
					l = o.isLogin,
					u = o.login,
					c = o.centerNote,
					s = o.changeList,
					f = c.list,
					p = c.hasNext;
				if (window.$eventTrace({
					category: "Praise",
					action: n ? "remove" : "add",
					eventLabel: "note"
				}), !l) return void u();
				(0, d.
				default)(r, {
					method: "POST",
					body: {
						type: 2,
						id: t
					}
				}).then(function(r) {
					if (200 === r.code) {
						var o = m.
						default.findIndex(f, function(e) {
							return e.id === t
						});
						if (~o) {
							var l = i({}, e, {
								praised: !n,
								praiseCnt: n ? a - 1 : a + 1
							});
							s((0, y.
							default)(f, {
								$splice: [
									[o, 1, l]
								]
							}), p)
						}
					}
				}).
				catch (function() {
					g.
					default.show(n ? "取消失败" : "点赞失败", 2e3)
				})
			}
		}, {
			key: "handleManage",
			value: function() {
				window.$eventTrace({
					category: "User",
					action: "manage",
					eventLabel: "note"
				}), this.setState({
					inEdit: !0
				})
			}
		}, {
			key: "handleCancel",
			value: function() {
				window.$eventTrace({
					category: "User",
					action: "cancelManage",
					eventLabel: "note"
				}), this.setState({
					inEdit: !1
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = t.centerUser,
					a = t.user,
					r = t.centerNote,
					o = t.isLogin,
					l = this.state.inEdit,
					i = o && a.userId.toString() === n.id.toString(),
					u = r.list,
					c = r.hasNext,
					f = u.map(function(t) {
						return s.
						default.createElement(I.
						default, {
							info: t,
							isSelf: i,
							inEdit: l,
							key: N.
							default.getKey(),
							onClickPraise: e.handleClickPraise,
							onDelete: function() {
								e.handleDelete(t.id)
							}
						})
					});
				return s.
				default.createElement("div", {
					className: "cNote-wrapper"
				}, s.
				default.createElement("div", {
					className: "oper"
				}, i ? "我" : "Ta", "创建的心得", i && l && !! f.length && s.
				default.createElement("span", {
					onClick: this.handleCancel
				}, "取消"), i && !l && !! f.length && s.
				default.createElement("span", {
					onClick: this.handleManage
				}, "管理")), f.length ? s.
				default.createElement("div", null, s.
				default.createElement("ul", {
					className: "note-list clearfix"
				}, f), s.
				default.createElement(O.
				default, {
					paginationType: "hasNext",
					hasNext: c,
					bufferHeight: 400,
					getList: this.getList,
					dotInfo: this.props.dotInfo,
					endText: "没有更多心得啦~"
				})) : s.
				default.createElement(L.
				default, {
					content: "还没有创建过心得"
				}))
			}
		}]), t
	}(s.
	default.Component),
		U = function(e) {
			return {
				centerUser: e.centerUser,
				centerNote: e.centerNote,
				isLogin: e.user.isLogin,
				user: e.user.info
			}
		}, A = function(e) {
			return {
				changeList: function(t, n) {
					e({
						type: "SET_CENTER_NOTE",
						list: t,
						hasNext: n
					})
				},
				login: function() {
					S.
					default.show({
						onLoginSucceed: function(t) {
							e({
								type: w.LOGIN_SUCCESS,
								info: t.userInfo
							})
						}
					})
				},
				setCenterUser: function(t) {
					e({
						type: w.SET_CENTER_USER,
						info: t
					})
				}
			}
		};
	t.
	default = (0, p.connect)(U, A)(M)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(1),
		i = a(l),
		u = function(e) {
			var t = e.isSelf,
				n = e.info,
				a = e.onDelete,
				r = e.inEdit,
				l = e.onClickPraise,
				u = n.id,
				c = n.title,
				s = n.tags,
				f = n.coverUrl,
				d = n.browseCnt,
				p = n.collectCnt,
				h = n.praiseCnt,
				m = n.praised,
				v = function() {
					window.$eventTrace({
						category: "User",
						action: "edit",
						eventLabel: "note"
					})
				};
			return o.
			default.createElement("li", {
				className: "repo-item"
			}, r ? o.
			default.createElement("div", {
				className: "remove-layer"
			}, o.
			default.createElement("a", {
				className: "edit-btn",
				href: "/repoEdit/" + u,
				target: "_blank",
				onClick: v
			}, "编辑"), o.
			default.createElement("button", {
				className: "remove-btn",
				onClick: a
			}, "删除")) : null, o.
			default.createElement("a", {
				href: "/repo/" + u,
				target: "_blank"
			}, o.
			default.createElement("img", {
				className: "repo-cover",
				src: i.
				default.nosUrl(f, "580y384", !0, "1"),
				alt: "合辑封面"
			})), o.
			default.createElement("div", {
				className: "info"
			}, o.
			default.createElement("a", {
				className: "title",
				href: "/repo/" + u,
				target: "_blank"
			}, c), o.
			default.createElement("div", {
				className: "data clearfix"
			}, t ? o.
			default.createElement("span", {
				className: "cnt"
			}, o.
			default.createElement("span", {
				className: "icon icon-heart-small"
			}), o.
			default.createElement("span", {
				className: "collect-cnt"
			}, i.
			default.handleCountTo999(p)), m ? o.
			default.createElement("span", {
				className: "icon icon-thumbs-up-fill",
				onClick: function() {
					l(n)
				}
			}) : o.
			default.createElement("span", {
				className: "icon icon-thumbs-up",
				onClick: function() {
					l(n)
				}
			}), o.
			default.createElement("span", null, i.
			default.handleCountTo999(h))) : o.
			default.createElement("span", {
				className: "tags"
			}, (s || []).slice(0, 3).map(function(e) {
				return "#" + e.name
			}).join(" ")), o.
			default.createElement("span", {
				className: "browse"
			}, o.
			default.createElement("span", {
				className: "icon icon-eye"
			}), i.
			default.toW(d)))))
		};
	t.
	default = u
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(2),
		d = a(f),
		p = n(3),
		h = n(5),
		m = a(h),
		v = n(27),
		y = a(v),
		b = n(4),
		g = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(b),
		E = n(1),
		w = a(E),
		_ = n(20),
		N = a(_),
		C = n(13),
		O = a(C),
		T = n(12),
		k = a(T),
		P = n(22),
		S = a(P),
		j = n(31),
		L = a(j),
		x = n(344),
		I = a(x);
	n(456);
	var R = {
		USER_INFO_PREFIX: "/newApi/userInfo",
		USER_PREFIX: "/newApi/user",
		CURRENT_USER: "/newApi/ms/user/current",
		REPO_PREFIX: "/newApi/repo",
		PRAISE: "/newApi/praise"
	}, M = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				inEdit: !1,
				type: "normal"
			}, ["handleDelete", "getList", "handleChangeType", "handleManage", "handleCancel"].forEach(function(e) {
				n[e] = n[e].bind(n)
			}), n.handleClickPraise = m.
			default.throttle(n.handleClickPraise.bind(n), 500), n
		}
		return l(t, e), u(t, [{
			key: "getList",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12,
					t = this.props,
					n = t.centerRepo,
					a = t.changeList,
					r = t.centerUser,
					o = n.list,
					l = o.length > 0 ? o[o.length - 1].id : "0",
					i = r.id,
					u = this.state.type;
				(0, d.
				default)(R.USER_PREFIX + "/" + i + "/repos", {
					method: "GET",
					body: {
						pageEndId: l,
						count: e,
						type: u
					}
				}).then(function(e) {
					var t = o.concat(e.result.list || []);
					a(t, e.result.hasNext)
				})
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				!this.props.isLogin && e.isLogin && window.location.reload()
			}
		}, {
			key: "handleClickPraise",
			value: function(e) {
				var t = e.id,
					n = e.praised,
					a = e.praiseCnt,
					r = n ? R.PRAISE + "/delete" : "" + R.PRAISE,
					o = this.props,
					l = o.isLogin,
					u = o.login,
					c = o.centerRepo,
					s = o.changeList,
					f = c.list,
					p = c.hasNext;
				if (window.$eventTrace({
					category: "Praise",
					action: n ? "remove" : "add",
					eventLabel: "repo"
				}), !l) return void u();
				(0, d.
				default)(r, {
					method: "POST",
					body: {
						type: 3,
						id: t
					}
				}).then(function(r) {
					if (200 === r.code) {
						var o = m.
						default.findIndex(f, function(e) {
							return e.id === t
						});
						if (~o) {
							var l = i({}, e, {
								praised: !n,
								praiseCnt: n ? a - 1 : a + 1
							});
							s((0, y.
							default)(f, {
								$splice: [
									[o, 1, l]
								]
							}), p)
						}
					}
				}).
				catch (function() {
					k.
					default.show(n ? "取消失败" : "点赞失败", 2e3)
				})
			}
		}, {
			key: "handleDelete",
			value: function(e) {
				var t = this;
				window.$eventTrace({
					category: "User",
					action: "remove",
					eventLabel: "repo"
				}), N.
				default.confirm({
					content: "确定删除此合辑？",
					onClickOK: function() {
						var n = t.props,
							a = n.centerRepo,
							r = n.changeList,
							o = n.setCenterUser,
							l = n.centerUser,
							u = a.list,
							c = a.hasNext,
							s = t.state.type;
						(0, d.
						default)(R.REPO_PREFIX + "/" + e + "/delete", {
							method: "POST"
						}).then(function() {
							m.
							default.remove(u, function(t) {
								return t.id === e
							}), r(u, c), o("normal" === s ? i({}, l, {
								repoCnt: l.repoCnt - 1,
								publicRepoCnt: l.publicRepoCnt - 1
							}) : i({}, l, {
								repoCnt: l.repoCnt - 1,
								draftRepoCnt: l.draftRepoCnt - 1
							})), c && t.getList(1)
						})
					}
				})
			}
		}, {
			key: "handleChangeType",
			value: function(e) {
				var t = this,
					n = this.props,
					a = n.changeList,
					r = n.setCenterUser;
				"normal" === e ? (window.$eventTrace({
					category: "User",
					action: "switchTab",
					eventLabel: "repo"
				}), this.refs.normal.className = "active", this.refs.draft.className = "") : (window.$eventTrace({
					category: "User",
					action: "switchTab",
					eventLabel: "draft"
				}), this.refs.normal.className = "", this.refs.draft.className = "active"), this.setState({
					type: e
				}, function() {
					var n = t.props.centerUser,
						o = n.id;
					(0, d.
					default)(R.USER_PREFIX + "/" + o + "/repos", {
						method: "GET",
						body: {
							pageEndId: 0,
							count: 12,
							type: e
						}
					}).then(function(e) {
						var t = e.result.list || [];
						a(t, e.result.hasNext)
					}), (0, d.
					default)(R.USER_INFO_PREFIX + "/" + o, {
						method: "GET"
					}).then(function(e) {
						var t = e.result;
						r(i({}, n, {
							repoCnt: t.repoCnt,
							publicRepoCnt: t.publicRepoCnt,
							draftRepoCnt: t.draftRepoCnt
						}))
					})
				})
			}
		}, {
			key: "handleManage",
			value: function() {
				window.$eventTrace({
					category: "User",
					action: "manage",
					eventLabel: "repo"
				}), this.setState({
					inEdit: !0
				})
			}
		}, {
			key: "handleCancel",
			value: function() {
				window.$eventTrace({
					category: "User",
					action: "cancelManage",
					eventLabel: "repo"
				}), this.setState({
					inEdit: !1
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = t.centerUser,
					a = t.user,
					r = t.centerRepo,
					o = t.isLogin,
					l = this.state,
					i = l.inEdit,
					u = l.type,
					c = o && a.userId.toString() === n.id.toString(),
					f = r.list,
					d = r.hasNext,
					p = f && f.map(function(t) {
						return s.
						default.createElement(I.
						default, {
							info: t,
							isSelf: c,
							inEdit: i,
							key: w.
							default.getKey(),
							onClickPraise: e.handleClickPraise,
							onDelete: function() {
								e.handleDelete(t.id)
							}
						})
					}),
					h = n.publicRepoCnt,
					m = n.draftRepoCnt;
				return s.
				default.createElement("div", {
					className: "cRepo-wrapper"
				}, c ? s.
				default.createElement("ul", {
					className: "tabs"
				}, s.
				default.createElement("li", null, s.
				default.createElement("a", {
					ref: "normal",
					onClick: function() {
						return e.handleChangeType("normal")
					},
					className: "active"
				}, "我发布的合辑 ", w.
				default.handleCountTo999(h) || 0)), s.
				default.createElement("li", null, s.
				default.createElement("a", {
					ref: "draft",
					onClick: function() {
						return e.handleChangeType("draft")
					}
				}, "草稿箱 ", w.
				default.handleCountTo999(m) || 0))) : s.
				default.createElement("div", {
					className: "other"
				}, "Ta创建的合辑"), s.
				default.createElement("div", {
					className: "oper"
				}, c && i && !! p.length && s.
				default.createElement("span", {
					onClick: this.handleCancel
				}, "取消"), c && !i && !! p.length && s.
				default.createElement("span", {
					onClick: this.handleManage
				}, "管理")), p.length ? s.
				default.createElement("div", null, s.
				default.createElement("ul", {
					className: "repo-list clearfix"
				}, p), s.
				default.createElement(O.
				default, {
					paginationType: "hasNext",
					hasNext: d,
					bufferHeight: 400,
					getList: this.getList,
					dotInfo: this.props.dotInfo,
					endText: "没有更多合辑啦~"
				})) : "normal" === u ? s.
				default.createElement(L.
				default, {
					content: "还没有创建过合辑"
				}) : s.
				default.createElement(L.
				default, {
					content: "还没有草稿"
				}))
			}
		}]), t
	}(s.
	default.Component),
		U = function(e) {
			return {
				centerUser: e.centerUser,
				centerRepo: e.centerRepo,
				isLogin: e.user.isLogin,
				user: e.user.info
			}
		}, A = function(e) {
			return {
				changeList: function(t, n) {
					e({
						type: "SET_CENTER_REPO",
						list: t,
						hasNext: n
					})
				},
				login: function() {
					S.
					default.show({
						onLoginSucceed: function(t) {
							e({
								type: g.LOGIN_SUCCESS,
								info: t.userInfo
							})
						}
					})
				},
				setCenterUser: function(t) {
					e({
						type: g.SET_CENTER_USER,
						info: t
					})
				}
			}
		};
	t.
	default = (0, p.connect)(U, A)(M)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(1),
		i = a(l),
		u = function(e) {
			switch (e) {
				case 0:
				case 6:
					return 1;
				case 5:
				case 7:
					return 2;
				case 11:
					return 0;
				default:
					return 3
			}
		}, c = function(e) {
			var t = e.info,
				n = e.onDelete,
				a = e.isSelf,
				r = e.onClickPraise,
				l = t.id,
				c = t.title,
				s = t.description,
				f = t.notice,
				d = t.ugc,
				p = t.status,
				h = t.coverUrl,
				m = t.publishTime,
				v = t.praiseCnt,
				y = t.browseCnt,
				b = t.praised,
				g = u(p),
				E = [o.
				default.createElement("span", {
					className: "status status-fail"
				}, "未通过"), o.
				default.createElement("span", {
					className: "status status-pass"
				}, "已通过"), o.
				default.createElement("span", {
					className: "status status-review"
				}, "审核中"), null],
				w = "/video/" + l,
				_ = function() {
					window.$eventTrace({
						category: "User",
						action: "edit",
						eventLabel: "note"
					})
				};
			return o.
			default.createElement("li", {
				className: "video-item"
			}, 1 === g || 5 === p ? o.
			default.createElement("a", {
				href: w,
				target: "_blank",
				className: "img-wrapper"
			}, o.
			default.createElement("img", {
				src: i.
				default.nosUrl(h, "476x264", !0, "1"),
				alt: "视频封面"
			}), o.
			default.createElement("span", {
				className: "icon icon-video"
			})) : o.
			default.createElement("div", {
				className: "img-wrapper"
			}, o.
			default.createElement("img", {
				src: i.
				default.nosUrl(h, "476x264", !0, "1"),
				alt: "视频封面"
			}), o.
			default.createElement("span", {
				className: "icon icon-video"
			})), o.
			default.createElement("div", {
				className: "info"
			}, o.
			default.createElement("p", {
				className: "title"
			}, a ? E[g] : null, 1 === g || 5 === p ? o.
			default.createElement("a", {
				href: w,
				target: "_blank"
			}, c) : c), o.
			default.createElement("p", {
				className: "content"
			}, a && 1 !== g && f ? f : null, a && 1 !== g && !f ? s : null, a && 1 === g ? s : null, a ? null : s), o.
			default.createElement("p", {
				className: "time"
			}, 1 === g ? "发布于 " + m : null, 1 !== g && 5 !== p ? "未发布" : null, a ? null : o.
			default.createElement("span", {
				className: "cnt"
			}, o.
			default.createElement("span", {
				className: "icon icon-eye"
			}), " ", i.
			default.toW(y), "    ", b ? o.
			default.createElement("span", {
				className: "icon icon-thumbs-up-fill",
				onClick: function() {
					r(t)
				}
			}) : o.
			default.createElement("span", {
				className: "icon icon-thumbs-up",
				onClick: function() {
					r(t)
				}
			}), " ", i.
			default.handleCountTo999(v))), a && d ? o.
			default.createElement("div", {
				className: "oper-bar"
			}, o.
			default.createElement("a", {
				className: "btn",
				href: "/videoEdit/" + l,
				target: "_blank",
				onClick: _
			}, "编辑"), o.
			default.createElement("button", {
				className: "btn",
				onClick: n
			}, "删除")) : null))
		};
	t.
	default = c
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(2),
		d = a(f),
		p = n(3),
		h = n(5),
		m = a(h),
		v = n(27),
		y = a(v),
		b = n(4),
		g = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(b),
		E = n(1),
		w = a(E),
		_ = n(20),
		N = a(_),
		C = n(13),
		O = a(C),
		T = n(12),
		k = a(T),
		P = n(22),
		S = a(P),
		j = n(31),
		L = a(j),
		x = n(346),
		I = a(x);
	n(457);
	var R = {
		USER_INFO_PREFIX: "/newApi/userInfo",
		USER_PREFIX: "/newApi/user",
		CURRENT_USER: "/newApi/ms/user/current",
		VIDEO_PREFIX: "/newApi/video",
		PRAISE: "/newApi/praise"
	}, M = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return ["handleDelete", "getList"].forEach(function(e) {
				n[e] = n[e].bind(n)
			}), n.handleClickPraise = m.
			default.throttle(n.handleClickPraise.bind(n), 500), n
		}
		return l(t, e), u(t, [{
			key: "getList",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4,
					t = this.props,
					n = t.centerVideo,
					a = t.changeList,
					r = t.centerUser,
					o = n.list,
					l = o.length > 0 ? o[o.length - 1].id : "0",
					i = r.id;
				(0, d.
				default)(R.USER_PREFIX + "/" + i + "/videos", {
					method: "GET",
					body: {
						pageEndId: l,
						count: e
					}
				}).then(function(e) {
					var t = o.concat(e.result.list || []);
					a(t, e.result.hasNext)
				})
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				e.isLogin !== this.props.isLogin && window.location.reload()
			}
		}, {
			key: "handleClickPraise",
			value: function(e) {
				var t = e.id,
					n = e.praised,
					a = e.praiseCnt,
					r = n ? R.PRAISE + "/delete" : "" + R.PRAISE,
					o = this.props,
					l = o.isLogin,
					u = o.login,
					c = o.centerVideo,
					s = o.changeList,
					f = c.list,
					p = c.hasNext;
				if (!l) return void u();
				(0, d.
				default)(r, {
					method: "POST",
					body: {
						type: 20,
						id: t
					}
				}).then(function(r) {
					if (200 === r.code) {
						var o = m.
						default.findIndex(f, function(e) {
							return e.id === t
						});
						if (~o) {
							var l = i({}, e, {
								praised: !n,
								praiseCnt: n ? a - 1 : a + 1
							});
							s((0, y.
							default)(f, {
								$splice: [
									[o, 1, l]
								]
							}), p)
						}
					}
				}).
				catch (function() {
					k.
					default.show(n ? "取消失败" : "点赞失败", 2e3)
				})
			}
		}, {
			key: "handleDelete",
			value: function(e) {
				var t = this;
				window.$eventTrace({
					category: "User",
					action: "remove",
					eventLabel: "video"
				}), N.
				default.confirm({
					content: "确定删除此视频？",
					onClickOK: function() {
						var n = t.props,
							a = n.centerVideo,
							r = n.changeList,
							o = n.centerUser,
							l = n.setCenterUser,
							u = a.list,
							c = a.hasNext;
						(0, d.
						default)(R.VIDEO_PREFIX + "/" + e + "/delete", {
							method: "POST"
						}).then(function() {
							m.
							default.remove(u, function(t) {
								return t.id === e
							}), l(i({}, o, {
								videoCnt: o.videoCnt - 1
							})), r(u, c), c && t.getList(1)
						})
					}
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = t.centerUser,
					a = t.user,
					r = t.centerVideo,
					o = t.isLogin,
					l = o && a.userId.toString() === n.id.toString(),
					i = r.list,
					u = r.hasNext,
					c = i.map(function(t) {
						return s.
						default.createElement(I.
						default, {
							info: t,
							isSelf: l,
							key: w.
							default.getKey(),
							onClickPraise: e.handleClickPraise,
							onDelete: function() {
								e.handleDelete(t.id)
							}
						})
					});
				return s.
				default.createElement("div", {
					className: "cVideo-wrapper"
				}, s.
				default.createElement("div", {
					className: "oper"
				}, l ? "我" : "Ta", "创建的视频"), c.length ? s.
				default.createElement("div", null, s.
				default.createElement("ul", {
					className: "video-list clearfix"
				}, c), s.
				default.createElement(O.
				default, {
					paginationType: "hasNext",
					dotInfo: this.props.dotInfo,
					hasNext: u,
					bufferHeight: 400,
					getList: this.getList,
					endText: "没有更多视频啦~"
				})) : s.
				default.createElement(L.
				default, {
					content: "还没创建过视频"
				}))
			}
		}]), t
	}(s.
	default.Component),
		U = function(e) {
			return {
				centerUser: e.centerUser,
				centerVideo: e.centerVideo,
				isLogin: e.user.isLogin,
				user: e.user.info
			}
		}, A = function(e) {
			return {
				changeList: function(t, n) {
					e({
						type: "SET_CENTER_VIDEO",
						list: t,
						hasNext: n
					})
				},
				login: function() {
					S.
					default.show({
						onLoginSucceed: function(t) {
							e({
								type: g.LOGIN_SUCCESS,
								info: t.userInfo
							})
						}
					})
				},
				setCenterUser: function(t) {
					e({
						type: g.SET_CENTER_USER,
						info: t
					})
				}
			}
		};
	t.
	default = (0, p.connect)(U, A)(M)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(2),
		d = a(f),
		p = n(3),
		h = n(4),
		m = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(h),
		v = n(11),
		y = a(v),
		b = n(28),
		g = a(b),
		E = n(129),
		w = a(E),
		_ = n(345),
		N = a(_),
		C = n(343),
		O = a(C),
		T = n(347),
		k = a(T);
	n(164);
	var P = {
		USER_INFO_PREFIX: "/newApi/userInfo",
		USER_PREFIX: "/newApi/user",
		CURRENT_USER: "/newApi/ms/user/current",
		PRAISE: "/newApi/praise"
	}, S = {
		repo: 12,
		note: 8,
		video: 4
	}, j = {
		category: "User",
		action: "loadMore"
	}, L = function(e) {
		var t = e.repoCnt,
			n = void 0 === t ? 1 : t,
			a = e.noteCnt,
			r = void 0 === a ? 0 : a,
			o = e.videoCnt,
			l = void 0 === o ? 0 : o,
			i = "repo";
		return !n && r && (i = "note"), n || r || !l || (i = "video"), i
	}, x = function(e) {
		function t(e) {
			return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
		}
		return l(t, e), u(t, [{
			key: "componentWillReceiveProps",
			value: function(e) {
				var t = this.props,
					n = t.setPage,
					a = t.centerUser;
				this.props.page && e.page && this.props.page !== e.page && n(e.page), !this.props.page && e.page && L(a) !== e.page && n(e.page)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.location,
					n = e.centerUser,
					a = t.query.page;
				return a || (a = L(n)), s.
				default.createElement("div", null, s.
				default.createElement(y.
				default, null), s.
				default.createElement("div", {
					className: "center-wrapper"
				}, s.
				default.createElement("article", null, s.
				default.createElement(w.
				default, {
					page: a
				}), "repo" === a ? s.
				default.createElement(N.
				default, {
					dotInfo: i({}, j, {
						eventLabel: "repo"
					})
				}) : null, "note" === a ? s.
				default.createElement(O.
				default, {
					dotInfo: i({}, j, {
						eventLabel: "note"
					})
				}) : null, "video" === a ? s.
				default.createElement(k.
				default, {
					dotInfo: i({}, j, {
						eventLabel: "video"
					})
				}) : null, s.
				default.createElement(g.
				default, null))))
			}
		}], [{
			key: "fetchData",
			value: function(e, t, n) {
				var a = t.uid,
					r = n.query.page,
					o = e.dispatch,
					l = e.getState,
					i = l(),
					u = i.headerInfo,
					c = function(e) {
						var t = (0, d.
						default)(P.USER_PREFIX + "/" + a + "/" + e + "s", {
							method: "GET",
							body: {
								pageEndId: "0",
								count: S[e]
							},
							headerInfo: u
						}),
							n = (0, d.
							default)(P.USER_INFO_PREFIX + "/" + a, {
								headerInfo: u
							}),
							r = (0, d.
							default)("" + P.CURRENT_USER, {
								headerInfo: u
							});
						return Promise.all([t, r, n]).then(function(t) {
							o({
								type: m["SET_CENTER_" + e.toUpperCase()],
								list: t[0].result.list || [],
								hasNext: t[0].result.hasNext
							}), o(200 === t[1].code ? {
								type: m.LOGIN_SUCCESS,
								info: t[1].result
							} : {
								type: m.LOGIN_FAILURE
							}), o({
								type: m.SET_CENTER_USER,
								info: t[2].result
							})
						})
					};
				return~ ["repo", "note", "video"].indexOf(r) ? c(r) : (0, d.
				default)(P.USER_INFO_PREFIX + "/" + a, {
					headerInfo: u
				}).then(function(e) {
					var t = L(e.result);
					return c(t)
				})
			}
		}]), t
	}(s.
	default.Component),
		I = function(e, t) {
			var n = t.location.query;
			return {
				centerUser: e.centerUser,
				isLogin: e.user.isLogin,
				user: e.user.info,
				page: n.page
			}
		}, R = function(e, t) {
			var n = t.params.uid;
			return {
				setPage: function(t) {
					(0, d.
					default)(P.USER_PREFIX + "/" + n + "/" + t + "s", {
						method: "GET",
						body: {
							pageEndId: "0",
							count: S[t]
						}
					}).then(function(n) {
						var a = n.result,
							r = a.list,
							o = a.hasNext;
						e({
							type: m["SET_CENTER_" + t.toUpperCase()],
							list: r || [],
							hasNext: o
						})
					}).
					catch (function(e) {})
				}
			}
		};
	t.
	default = (0, p.connect)(I, R)(x)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(51),
		f = a(s),
		d = n(9),
		p = a(d),
		h = n(1),
		m = a(h),
		v = n(2),
		y = a(v),
		b = n(5),
		g = a(b),
		E = n(12),
		w = a(E),
		_ = n(264),
		N = a(_),
		C = n(76),
		O = a(C),
		T = n(78),
		k = a(T),
		P = n(350),
		S = a(P),
		j = {
			upload: "/newApi/ms/upload/img/detail",
			videoInfo: "/newApi/video"
		}, L = function(e) {
			return Math.floor(m.
			default.getLength(e) / 2)
		}, x = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.state = {
					video: e.video || {},
					showImageCropper: !1,
					rawCoverUrl: "",
					disableSave: !1,
					titleLength: e.video.title && m.
					default.getLength(e.video.title),
					descLength: e.video.description && m.
					default.getLength(e.video.description)
				}, n.handleChooseSnapshot = n.handleChooseSnapshot.bind(n), n.onChangeTags = n.onChangeTags.bind(n), n.onChangeTitle = n.onChangeTitle.bind(n), n.onChangeDesc = n.onChangeDesc.bind(n), n.onFileChange = n.onFileChange.bind(n), n.onConfirmCrop = n.onConfirmCrop.bind(n), n.onCloseImageCropper = n.onCloseImageCropper.bind(n), n.onSave = n.onSave.bind(n), n
			}
			return l(t, e), i(t, [{
				key: "componentWillReceiveProps",
				value: function(e) {
					this.setState({
						video: e.video,
						titleLength: e.video.title && L(e.video.title),
						descLength: e.video.description && L(e.video.description)
					})
				}
			}, {
				key: "handleChooseSnapshot",
				value: function() {
					window.$eventTrace({
						category: "VideoEdit",
						action: "click",
						eventLabel: "screenshot"
					});
					var e = this,
						t = this.state.video;
					t.snapshots && t.snapshots.length > 0 ? S.
					default.show({
						imgs: t.snapshots,
						onClickOk: function(t) {
							e.setState((0, f.
							default)(e.state, {
								video: {
									$merge: {
										coverUrl: t
									}
								}
							}))
						}
					}) : k.
					default.show({
						hintText: "正在获取视频截图，请稍候...",
						cancelBtnStyle: {
							display: "none"
						}
					})
				}
			}, {
				key: "onChangeTitle",
				value: function(e) {
					if (void 0 !== e.target.value) {
						var t = e.target.value || "";
						this.setState((0, f.
						default)(this.state, {
							video: {
								$merge: {
									title: t
								}
							},
							titleLength: {
								$set: L(t)
							}
						}))
					}
				}
			}, {
				key: "onChangeDesc",
				value: function(e) {
					if (void 0 !== e.target.value) {
						var t = e.target.value || "";
						this.setState((0, f.
						default)(this.state, {
							video: {
								$merge: {
									description: t
								}
							},
							descLength: {
								$set: L(t)
							}
						}))
					}
				}
			}, {
				key: "onChangeTags",
				value: function(e) {
					if (e.length > 10 || e.some(function(e) {
						return m.
						default.getLength(e) > 20
					})) return void k.
					default.show({
						hintText: "最多添加10个标签，标签每个长度不能超过20个汉字",
						cancelBtnStyle: {
							display: "none"
						}
					});
					var t = this.state.video,
						n = t.tags,
						a = [];
					a = e.map(function(e) {
						var t = {
							id: 0,
							name: e
						}, a = g.
						default.find(n, function(e) {
							return t.name === e.name
						});
						return a && (t.id = a.id), t
					}), this.setState((0, f.
					default)(this.state, {
						video: {
							$merge: {
								tags: a
							}
						}
					}))
				}
			}, {
				key: "onFileChange",
				value: function(e) {
					var t = this;
					if (window.$eventTrace({
						category: "VideoEdit",
						action: "click",
						eventLabel: "localImage"
					}), e.target.value) {
						var n = this,
							a = {
								minWidth: 960,
								minHeight: 540,
								maxSize: 5120,
								ext: "JPG,JPEG,PNG,GIF,BMP"
							}, r = this.refs.image.files[0],
							o = j.upload + "?width=" + a.minWidth + "&height=" + a.minHeight + "&size=" + a.maxSize + "&ext=" + a.ext;
						(0, y.
						default)(o, {
							method: "POST",
							body: {
								file: r
							},
							formData: !0
						}).then(function(e) {
							if (t.refs.image.value = "", "string" == typeof e) try {
								e = JSON.parse(e)
							} catch (e) {
								throw new Error(e)
							}
							200 === e.code && n.setState({
								showImageCropper: !0,
								rawCoverUrl: e.result.url || ""
							})
						}, function(e) {
							t.refs.image.value = "", k.
							default.show({
								hintText: e.msg || "不能上传小于" + a.minWidth + "px * " + a.minHeight + "px的图片",
								cancelBtnStyle: {
									display: "none"
								}
							})
						})
					}
				}
			}, {
				key: "onConfirmCrop",
				value: function(e) {
					var t = this.state.rawCoverUrl,
						n = t + "?imageView&crop=" + e;
					this.setState((0, f.
					default)(this.state, {
						showImageCropper: {
							$set: !1
						},
						video: {
							$merge: {
								coverUrl: n
							}
						}
					}))
				}
			}, {
				key: "onCloseImageCropper",
				value: function() {
					this.setState({
						showImageCropper: !1
					})
				}
			}, {
				key: "onSave",
				value: function() {
					var e = this;
					window.$eventTrace({
						category: "VideoEdit",
						action: "click",
						eventLabel: "submitButton"
					});
					var t = this.state,
						n = t.video,
						a = t.titleLength,
						r = t.descLength;
					return n.vid ? n.title ? a > 30 ? void k.
					default.show({
						hintText: "视频标题不能超过30个汉字",
						cancelBtnStyle: {
							display: "none"
						}
					}) : r > 140 ? void k.
					default.show({
						hintText: "视频描述不能超过140个汉字",
						cancelBtnStyle: {
							display: "none"
						}
					}) : n.coverUrl ? void(0, y.
					default)(j.videoInfo, {
						method: "POST",
						body: n
					}).then(function() {
						w.
						default.show("发布成功"), e.setState({
							disableSave: !0
						}, function() {
							setTimeout(function() {
								e.setState({
									disableSave: !1
								})
							}, 2e3)
						}), e.props.onSave && e.props.onSave()
					}, function(e) {
						w.
						default.show(e.msg || "保存失败，请稍后再试")
					}) : void k.
					default.show({
						hintText: "视频封面必须填写，请从视频截图中上传或者本地上传",
						cancelBtnStyle: {
							display: "none"
						}
					}) : void k.
					default.show({
						hintText: "视频标题必须填写哦～",
						cancelBtnStyle: {
							display: "none"
						}
					}) : void k.
					default.show({
						hintText: "未找到匹配的视频信息",
						cancelBtnStyle: {
							display: "none"
						}
					})
				}
			}, {
				key: "render",
				value: function() {
					var e = this.props.disabledClass,
						t = this.state,
						n = t.video,
						a = t.showImageCropper,
						r = t.rawCoverUrl,
						o = t.disableSave,
						l = t.titleLength,
						i = t.descLength,
						u = {
							opacity: n.coverUrl ? 1 : 0
						}, s = (0, p.
						default)({
							length: !0,
							"length-alert": l > 30
						}),
						f = (0, p.
						default)({
							length: !0,
							"length-alert": i > 140
						}),
						d = (o ? "disabled " : "") + e,
						h = n.coverUrl ? m.
					default.nosUrl(n.coverUrl, "480y270") : "";
					return c.
					default.createElement("div", {
						className: "edit-wrapper"
					}, c.
					default.createElement("div", {
						className: "edit-mask",
						style: {
							display: e ? "block" : "none"
						}
					}), c.
					default.createElement("div", {
						className: "cont"
					}, c.
					default.createElement("label", null, "视频标题", c.
					default.createElement("span", {
						style: {
							color: "#FF6666"
						}
					}, "*")), c.
					default.createElement("input", {
						value: n.title || "",
						onChange: this.onChangeTitle
					}), c.
					default.createElement("div", {
						className: s
					}, l && l > 0 ? c.
					default.createElement("span", null, l, "/") : null, 30)), c.
					default.createElement("div", {
						className: "cont"
					}, c.
					default.createElement("label", null, "视频简介"), c.
					default.createElement("textarea", {
						value: n.description || "",
						placeholder: "讲讲这个视频内容，让更多人了解",
						onChange: this.onChangeDesc
					}), c.
					default.createElement("div", {
						className: f
					}, i && i > 0 ? c.
					default.createElement("span", null, i, "/") : null, 140)), c.
					default.createElement("div", {
						className: "cont"
					}, c.
					default.createElement("label", null, "视频标签"), c.
					default.createElement("div", {
						style: {
							display: "inline-block"
						}
					}, c.
					default.createElement(N.
					default, {
						value: n.tags.map(function(e) {
							return e.name
						}),
						onChange: this.onChangeTags
					}))), c.
					default.createElement("div", {
						className: "cont"
					}, c.
					default.createElement("label", null, "视频封面", c.
					default.createElement("span", {
						style: {
							color: "#FF6666"
						}
					}, "*")), c.
					default.createElement("div", {
						className: "cover-btns"
					}, c.
					default.createElement("button", {
						className: e,
						onClick: this.handleChooseSnapshot,
						disabled: e
					}, "选择视频截图"), c.
					default.createElement("div", {
						className: "local-image-btn " + e
					}, e ? null : c.
					default.createElement("input", {
						type: "file",
						accept: "image/png, image/jpeg, image/gif, image/bmp",
						ref: "image",
						onChange: this.onFileChange
					}), c.
					default.createElement("p", null, "选择本地图片")), c.
					default.createElement("span", {
						className: "note"
					}, "封面尺寸比例为16:9,建议尺寸为960*540px,大小5M以内"), a && r ? c.
					default.createElement(O.
					default, {
						title: "封面裁切",
						url: r,
						minWidth: 960,
						aspectRatio: 960 / 540,
						initialWidth: 960,
						initialHeight: 540,
						onClickOK: this.onConfirmCrop,
						onClickClose: this.onCloseImageCropper
					}) : null, c.
					default.createElement("div", {
						className: "cover",
						style: u
					}, c.
					default.createElement("img", {
						src: h,
						alt: ""
					})))), c.
					default.createElement("button", {
						className: d,
						disabled: o,
						onClick: this.onSave
					}, "发表视频"))
				}
			}]), t
		}(c.
		default.Component);
	x.propTypes = {
		video: c.
		default.PropTypes.object.isRequired,
		disabledClass: c.
		default.PropTypes.string.isRequired
	}, t.
	default = x
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(23),
		f = a(s),
		d = n(1),
		p = a(d);
	n(458);
	var h = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				currentIndex: 0,
				translateX: 80
			}, n.onClickOk = n.onClickOk.bind(n), n.onClickCancel = n.onClickCancel.bind(n), n.onScrollToLeft = n.onScrollToLeft.bind(n), n.onScrollToRight = n.onScrollToRight.bind(n), n.getTranslateWidth = n.getTranslateWidth.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "onClickCancel",
			value: function() {
				this.props.onClickCancel && this.props.onClickCancel()
			}
		}, {
			key: "onClickOk",
			value: function() {
				var e = this.props.imgs,
					t = this.state.currentIndex;
				this.props.onClickOk && this.props.onClickOk(e[t])
			}
		}, {
			key: "onScrollToLeft",
			value: function() {
				var e = this.state.currentIndex;
				if (0 !== e) {
					var t = this.getTranslateWidth(e - 1);
					this.setState({
						currentIndex: e - 1,
						translateX: t
					})
				}
			}
		}, {
			key: "onScrollToRight",
			value: function() {
				var e = this.state.currentIndex;
				if (3 !== e) {
					var t = this.getTranslateWidth(e + 1);
					this.setState({
						currentIndex: e + 1,
						translateX: t
					})
				}
			}
		}, {
			key: "getTranslateWidth",
			value: function(e) {
				var t = this.state,
					n = t.currentIndex,
					a = t.translateX;
				return e > n ? a - 252 : a + 252
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.imgs,
					t = this.state,
					n = t.currentIndex,
					a = t.translateX,
					r = e.map(function(e) {
						return p.
						default.nosUrl(e, "480y270")
					}),
					o = {
						transform: "translate(" + a + "px, 0)",
						transition: "all .45s ease-out"
					};
				return c.
				default.createElement("div", {
					className: "m-snapshot-modal"
				}, c.
				default.createElement("div", {
					className: "m-modal-layer"
				}, c.
				default.createElement("div", {
					className: "m-modal-wrapper"
				}, c.
				default.createElement("div", {
					className: "m-modal-dialogue"
				}, c.
				default.createElement("div", {
					className: "m-modal-body"
				}, c.
				default.createElement("div", {
					className: "icon close-btn",
					onClick: this.onClickCancel
				}), c.
				default.createElement("div", {
					className: "image-gallery"
				}, c.
				default.createElement("button", {
					className: "scroll-btn left" + (0 === n ? " disable" : ""),
					onClick: this.onScrollToLeft
				}, c.
				default.createElement("i", {
					className: "icon icon-left"
				})), c.
				default.createElement("button", {
					className: "scroll-btn right" + (3 === n ? " disable" : ""),
					onClick: this.onScrollToRight
				}, c.
				default.createElement("i", {
					className: "icon icon-right"
				})), c.
				default.createElement("div", {
					className: "items",
					style: o
				}, r.map(function(e, t) {
					return c.
					default.createElement("img", {
						key: t,
						src: e,
						alt: "",
						className: "item" + (n === t ? " active" : "")
					})
				}))), c.
				default.createElement("div", {
					className: "buttons"
				}, c.
				default.createElement("button", {
					className: "button-ok",
					onClick: this.onClickOk
				}, "确定"), c.
				default.createElement("button", {
					className: "button-cancel",
					onClick: this.onClickCancel
				}, "取消")))))))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = h, h.show = function(e) {
		var t = void 0,
			n = void 0,
			a = function() {
				f.
				default.unmountComponentAtNode(t), document.body.removeChild(t)
			}, r = function() {
				a()
			};
		n = function() {
			a()
		}, e.onClickOk && (n = function(t) {
			e.onClickOk(t), a()
		}), t = document.createElement("div"), document.body.appendChild(t), f.
		default.render(c.
		default.createElement(h, {
			onClickCancel: r,
			onClickOk: n,
			imgs: e.imgs
		}), t)
	}
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(1),
		f = a(s),
		d = n(78),
		p = a(d),
		h = {
			TRANSCODE_FAIL: 20,
			TRANSCODING: 30,
			TRANSCODE_SUCCESS: 40
		}, m = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.getLeftSeconds = n.getLeftSeconds.bind(n), n.getBarTextEleByTranscode = n.getBarTextEleByTranscode.bind(n), n.onStartTranscode = n.onStartTranscode.bind(n), n.onCancelUpload = n.onCancelUpload.bind(n), n
			}
			return l(t, e), i(t, [{
				key: "getLeftSeconds",
				value: function() {
					var e = this.props,
						t = e.file,
						n = e.speed;
					if (t && n > 0) {
						var a = (100 - parseFloat(t.progress)) * parseFloat(t.fileSizeMb) / 100,
							r = Math.ceil(a / n);
						return f.
						default.getDisplayTime(r)
					}
					return ""
				}
			}, {
				key: "getBarTextEleByTranscode",
				value: function() {
					var e = this.props.file,
						t = "";
					switch (e.transcode) {
						case h.TRANSCODE_SUCCESS:
							t = c.
						default.createElement("span", null, "视频上传成功，接下来对视频进行描述添加吧！");
						break;
						case h.TRANSCODE_FAIL:
							t = c.
						default.createElement("div", null, "转码失败，请", c.
						default.createElement("a", {
							onClick: this.onStartTranscode
						}, "重新转码"));
						break;
						default:
							t = c.
						default.createElement("span", null, "上传完成，正在转码，请稍等...")
					}
					return t
				}
			}, {
				key: "onStartTranscode",
				value: function() {
					this.props.onStartTranscode && this.props.onStartTranscode()
				}
			}, {
				key: "onCancelUpload",
				value: function() {
					var e = this;
					p.
					default.show({
						hintText: "确认取消上传的视频么？",
						onClickOk: function() {
							e.props.onCancelUpload && e.props.onCancelUpload()
						}
					})
				}
			}, {
				key: "render",
				value: function() {
					var e = this.props,
						t = e.file,
						n = e.speed,
						a = t.progress ? parseInt(t.progress, 10) : 0,
						r = a > 0 ? (a * parseFloat(t.fileSizeMb) / 100).toFixed(2) : 0,
						o = t.transcode === h.TRANSCODE_SUCCESS ? 810 : 640 * a / 100,
						l = n < 1 ? (1024 * n).toFixed(1) + "KB/s" : n + "M/s",
						i = t.transcode === h.TRANSCODE_SUCCESS ? "完成" : "上传",
						u = "";
					t.fileKey && n > 0 && (u = this.getLeftSeconds());
					var s = "";
					return 1 === t.status ? s = c.
					default.createElement("span", null, "已上传", r, "MB/", t.fileSizeMb, "MB", c.
					default.createElement("span", {
						style: {
							marginLeft: "24px"
						}
					}, "当前速度:", l)) : 2 === t.status ? s = this.getBarTextEleByTranscode() : 3 === t.status && (s = c.
					default.createElement("span", null, "上传失败，请稍后重试")), c.
					default.createElement("div", {
						className: "upload-wrapper"
					}, c.
					default.createElement("p", {
						className: "name"
					}, t.fileName), c.
					default.createElement("div", {
						className: "upload-bar"
					}, c.
					default.createElement("div", {
						className: "upload-bar-bg",
						style: {
							width: o
						}
					}), c.
					default.createElement("div", {
						className: "upload-bar-text"
					}, "已", i, a, "%"), c.
					default.createElement("div", {
						className: "icon icon-cancel",
						onClick: this.onCancelUpload
					}), 1 === t.status && u ? c.
					default.createElement("div", {
						className: "left-time"
					}, "剩余时间", u) : null), c.
					default.createElement("div", {
						className: "upload-info"
					}, s))
				}
			}]), t
		}(c.
		default.Component);
	t.
	default = m
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		c = n(0),
		s = a(c),
		f = n(51),
		d = a(f),
		p = n(2),
		h = a(p),
		m = n(8),
		v = n(5),
		y = a(v),
		b = n(38),
		g = a(b),
		E = n(11),
		w = a(E),
		_ = n(12),
		N = a(_),
		C = n(371),
		O = a(C),
		T = n(20),
		k = a(T),
		P = n(351),
		S = a(P),
		j = n(349),
		L = a(j),
		x = n(78),
		I = a(x);
	n(460);
	var R = {
		init: "https://vcloud.163.com/app/vod/upload/init",
		query: "https://vcloud.163.com/app/vod/video/query",
		info: "https://vcloud.163.com/app/vod/video/get",
		videoInfo: "/newApi/video",
		auth: "/newApi/video/auth",
		transcode: "/newApi/video/transcode",
		snapshots: "newApi/video/snapshots"
	}, M = ["MP4", "MOV", "MPEG", "AVI", "FLV", "RMVB", "M4V", "MPG", "MKV", "3GP"],
		U = {
			TRANSCODE_FAIL: 20,
			TRANSCODING: 30,
			TRANSCODE_SUCCESS: 40
		}, A = function(e, t) {
			if (e.fileKey === t.fileKey) {
				return (10 * ((parseFloat(t.progress) - parseFloat(e.progress)) * parseFloat(t.fileSizeMb)) / (t.timestamp - e.timestamp)).toFixed(1)
			}
		}, D = (0, g.
		default)(i = (0, m.withRouter)(i = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.initUploader = function() {
					var e = n.state.authInfo,
						t = n,
						a = {
							fileInputId: "file",
							fileUploadId: "ConfirmBtn",
							fileExts: M,
							getInitInfo: function(t, n) {
								localStorage.getItem(t.fileKey + "_context") ? n({
									bucketName: localStorage.getItem(t.fileKey + "_bucket"),
									objectName: localStorage.getItem(t.fileKey + "_object"),
									nosToken: localStorage.getItem(t.fileKey + "_xNosToken")
								}) : (0, h.
								default)(R.init, {
									method: "POST",
									headers: e,
									body: {
										originFileName: t.file.name,
										userFileName: t.file.name,
										typeId: null,
										presetId: null,
										callbackUrl: null,
										description: null
									}
								}).then(function(e) {
									200 === e.code ? (localStorage.setItem(t.fileKey + "_bucket", e.ret.bucket), localStorage.setItem(t.fileKey + "_object", e.ret.object), localStorage.setItem(t.fileKey + "_xNosToken", e.ret.xNosToken), n({
										bucketName: e.ret.bucket,
										objectName: e.ret.object,
										nosToken: e.ret.xNosToken
									})) : a.onError({
										errCode: e.code,
										errMsg: e.msg
									})
								}, function(e) {
									N.
									default.show(e.msg || "网络原因无法正常上传")
								})
							},
							onError: function(e) {
								t.onUploadError(e)
							},
							onProgress: function(e) {
								var n = t.state.file,
									a = y.
								default.cloneDeep(e);
								if (a.timestamp = (new Date).getTime(), n.fileKey !== a.fileKey || n.progress !== a.progress) {
									var r = A(n, a);
									t.setState({
										file: a,
										speed: r
									})
								}
							},
							onUploaded: function(e) {
								t.onUploaded(e)
							},
							onAllUploaded: function() {},
							onAdd: function(e) {
								if (window.$eventTrace({
									category: "VideoEdit",
									action: "click",
									eventLabel: "uploadButton"
								}), Math.ceil(e.fileSizeMb) > 2048) return void I.
								default.show({
									hintText: "视频超过2G啦，记得压缩后再上传哦~",
									cancelBtnStyle: {
										display: "none"
									}
								});
								var n = t.refs.confirmBtn;
								if (n) {
									var a = y.
									default.cloneDeep(e);
									a.timestamp = (new Date).getTime(), t.setState({
										file: a
									}), n.click()
								}
							},
							noUploadFn: function() {
								I.
								default.show({
									hintText: "请选择需要上传的视频",
									cancelBtnStyle: {
										display: "none"
									}
								})
							},
							existFn: function() {
								I.
								default.show({
									hintText: "视频已存在上传列表中",
									cancelBtnStyle: {
										display: "none"
									}
								})
							},
							mismatchFn: function() {
								I.
								default.show({
									hintText: "文件格式错误",
									cancelBtnStyle: {
										display: "none"
									}
								})
							}
						}, r = (0, O.
						default)(a);
					r.init(), n.setState({
						videoUploader: r
					})
				}, n.state = {
					authInfo: {},
					isEdit: !! e.params.id,
					file: {},
					speed: 0,
					video: {
						id: -1,
						vid: 0,
						tags: []
					}
				}, n.onStartTranscode = n.onStartTranscode.bind(n), n.getVcontent = n.getVcontent.bind(n), n.getSnapshots = n.getSnapshots.bind(n), n.onCancelUpload = n.onCancelUpload.bind(n), n.onSave = n.onSave.bind(n), n
			}
			return l(t, e), u(t, [{
				key: "componentDidMount",
				value: function() {
					this.props.isLogin && this.initial()
				}
			}, {
				key: "componentWillReceiveProps",
				value: function(e) {
					!this.props.isLogin && e.isLogin && this.initial(e)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					var e = this.state,
						t = e.file,
						n = e.videoUploader;
					1 === t.status && n.removeFile(t)
				}
			}, {
				key: "initial",
				value: function(e) {
					var t = e.params,
						n = t.id;
					n ? this.getMXVideoInfo(n) : this.getAuthInfo(this.initUploader)
				}
			}, {
				key: "getMXVideoInfo",
				value: function(e) {
					var t = this;
					(0, h.
					default)(R.videoInfo + "/" + e).then(function(e) {
						e.result.id && t.setState({
							video: e.result
						})
					}, function(t) {
						k.
						default.alert({
							content: t.msg || "无法获取视频数据，请稍后再试",
							onClickOK: function() {
								window.location.href = "/video/" + e
							}
						})
					})
				}
			}, {
				key: "getAuthInfo",
				value: function(e) {
					var t = this;
					(0, h.
					default)(R.auth).then(function(n) {
						t.setState({
							authInfo: n.result
						}, e)
					}, function(e) {
						N.
						default.show(e.msg || "无法获取服务器上传认证")
					})
				}
			}, {
				key: "onUploaded",
				value: function(e) {
					var t = this;
					t.getVideoVid(e, function(e, n) {
						t.setState((0, d.
						default)(t.state, {
							file: {
								$merge: e
							},
							video: {
								$merge: {
									vid: n
								}
							}
						}), t.onStartTranscode.bind(t, n))
					}, t.onUploadError.bind(t))
				}
			}, {
				key: "getVideoVid",
				value: function(e, t, n) {
					var a = this.state.authInfo,
						r = e.objectName;
					(0, h.
					default)(R.query, {
						method: "POST",
						headers: a,
						body: {
							objectNames: [r]
						}
					}).then(function(a) {
						200 === a.code && a.ret.list[0].vid ? t && t(e, a.ret.list[0].vid) : (I.
						default.show({
							hintText: "无法获取视频信息，请稍后再试",
							cancelBtnStyle: {
								display: "none"
							}
						}), n && n())
					}, function(e) {
						I.
						default.show({
							hintText: "无法获取视频信息，请稍后再试",
							cancelBtnStyle: {
								display: "none"
							}
						}), n && n(e.msg)
					})
				}
			}, {
				key: "onStartTranscode",
				value: function() {
					var e = this.state.video.vid,
						t = this;
					(0, h.
					default)(R.transcode, {
						method: "POST",
						body: {
							vid: e
						}
					}).then(function() {
						t.setState((0, d.
						default)(t.state, {
							file: {
								$merge: {
									transcode: U.TRANSCODING
								}
							}
						})), t.getVcontent()
					}, function(e) {
						t.setState((0, d.
						default)(t.state, {
							file: {
								$merge: {
									transcode: U.TRANSCODE_FAIL
								}
							}
						})), N.
						default.show(e.msg || "无法正常进行转码")
					})
				}
			}, {
				key: "getVcontent",
				value: function() {
					var e = this,
						t = this.state,
						n = t.video,
						a = t.authInfo;
					n.vid && (0, h.
					default)(R.info, {
						method: "POST",
						headers: a,
						body: {
							vid: n.vid
						}
					}).then(function(t) {
						if (200 === t.code) switch (t.ret.status) {
							case U.TRANSCODE_SUCCESS:
								e.setState((0, d.
								default)(e.state, {
									file: {
										$merge: {
											transcode: U.TRANSCODE_SUCCESS
										}
									},
									video: {
										$merge: {
											vcontent: t.ret
										}
									}
								})), clearTimeout(e.getVcontent, 3e4), e.getSnapshots();
								break;
							case U.TRANSCODE_FAIL:
								e.setState((0, d.
								default)(e.state, {
									file: {
										$merge: {
											transcode: U.TRANSCODE_FAIL
										}
									}
								})), clearTimeout(e.getVcontent, 1e4);
								break;
							default:
								setTimeout(e.getVcontent, 1e4)
						} else e.setState((0, d.
						default)(e.state, {
							file: {
								$merge: {
									transcode: U.TRANSCODE_FAIL
								}
							}
						})), clearTimeout(e.getVcontent, 1e4)
					})
				}
			}, {
				key: "getSnapshots",
				value: function() {
					var e = this.state.video,
						t = e.vid,
						n = this;
					t && (0, h.
					default)(R.snapshots, {
						body: {
							vid: t,
							size: 5,
							offsetList: "[0,1,2,9]"
						}
					}).then(function(e) {
						var t = e.result || [];
						t.length > 0 && n.setState((0, d.
						default)(n.state, {
							video: {
								$merge: {
									snapshots: t
								}
							}
						}))
					}, function(e) {
						N.
						default.show(e.msg || "无法获取视频截图")
					})
				}
			}, {
				key: "onUploadError",
				value: function() {
					this.setState((0, d.
					default)(this.state, {
						file: {
							$merge: {
								status: 3,
								progress: "0.00"
							}
						}
					}))
				}
			}, {
				key: "onCancelUpload",
				value: function() {
					var e = this.state,
						t = e.file;
					e.videoUploader.removeFile(t), this.setState({
						file: {},
						video: {
							id: -1,
							vid: 0,
							tags: []
						}
					}), this.getAuthInfo(this.initUploader)
				}
			}, {
				key: "onSave",
				value: function() {
					var e = this.props.userInfo;
					e.userId && setTimeout(function() {
						m.browserHistory.push("/user/" + e.userId + "?page=video")
					}, 1e3)
				}
			}, {
				key: "render",
				value: function() {
					var e = this.state,
						t = e.file,
						n = e.isEdit,
						a = e.speed,
						r = e.video,
						o = n || t && t.transcode === U.TRANSCODE_SUCCESS ? "" : "disabled";
					return s.
					default.createElement("div", null, s.
					default.createElement(w.
					default, null), s.
					default.createElement("div", {
						className: "video-edit-wrapper"
					}, t.fileKey || n ? s.
					default.createElement("div", {
						className: "video"
					}, n ? null : s.
					default.createElement(S.
					default, {
						file: t,
						speed: a,
						onStartTranscode: this.onStartTranscode,
						onCancelUpload: this.onCancelUpload
					}), s.
					default.createElement(L.
					default, {
						video: r,
						disabledClass: o,
						onSave: this.onSave
					})) : s.
					default.createElement("div", {
						className: "upload"
					}, s.
					default.createElement("div", {
						className: "upload-img"
					}), s.
					default.createElement("div", {
						className: "upload-btn"
					}, "上传视频", s.
					default.createElement("input", {
						id: "file",
						type: "file"
					})), s.
					default.createElement("p", {
						className: "upload-hint"
					}, "建议上传720p(1280*720)或更高分辨率的视频，大小不超过2G，时长建议不超过30min"), s.
					default.createElement("button", {
						ref: "confirmBtn",
						style: {
							visibility: "hidden"
						},
						id: "ConfirmBtn"
					}))))
				}
			}]), t
		}(s.
		default.Component)) || i) || i;
	t.
	default = D
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(3),
		d = n(5),
		p = a(d),
		h = n(9),
		m = a(h),
		v = n(96),
		y = a(v),
		b = n(22),
		g = a(b),
		E = n(12),
		w = a(E),
		_ = n(4),
		N = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(_),
		C = n(17),
		O = a(C),
		T = n(1),
		k = a(T),
		P = n(2),
		S = a(P),
		j = n(140);
	n(461);
	var L = {
		PRAISE: "/newApi/praise",
		COLLECT: "/newApi/collect"
	}, x = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.handleClickPraise = p.
			default.throttle(n.handleClickPraise.bind(n), 500), n.handleClickCollect = p.
			default.throttle(n.handleClickCollect.bind(n), 500), n.handleTriggerDescription = n.handleTriggerDescription.bind(n), n.handleClickWeixin = n.handleClickWeixin.bind(n), n.actionBar = null, n.state = {
				qzoneUrl: "",
				weiboUrl: "",
				url: "",
				showDescription: !1,
				showQrcode: !1
			}, n
		}
		return l(t, e), u(t, [{
			key: "getPraise",
			value: function(e) {
				var t = this,
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.
				default.resType.video;
				return (0, S.
				default)(L.PRAISE, {
					body: {
						id: e,
						type: n
					}
				}).then(function(e) {
					var n = e.result,
						a = n.praiseCnt,
						r = n.praised;
					return (0, t.props.setSocial)({
						praiseCnt: a,
						praised: r
					}), {
						praiseCnt: a,
						praised: r
					}
				})
			}
		}, {
			key: "getCollect",
			value: function(e) {
				var t = this,
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.
				default.resType.video;
				return (0, S.
				default)(L.COLLECT, {
					body: {
						id: e,
						type: n
					}
				}).then(function(e) {
					var n = e.result,
						a = n.collectCnt,
						r = n.collected;
					return (0, t.props.setSocial)({
						collectCnt: a,
						collected: r
					}), {
						collectCnt: a,
						collected: r
					}
				})
			}
		}, {
			key: "handleTriggerDescription",
			value: function() {
				this.state.showDescription ? window.$eventTrace({
					category: "Video",
					action: "hide",
					eventLabel: "description"
				}) : window.$eventTrace({
					category: "Video",
					action: "show",
					eventLabel: "description"
				}), this.setState(function(e) {
					return {
						showDescription: !e.showDescription
					}
				})
			}
		}, {
			key: "handleClickWeixin",
			value: function() {
				this.setState(function(e) {
					return {
						showQrcode: !e.showQrcode
					}
				})
			}
		}, {
			key: "handleClickPraise",
			value: function() {
				var e = this,
					t = this.props,
					n = t.id,
					a = t.isLogin,
					r = t.login,
					o = t.praised,
					l = t.praiseCnt,
					u = t.author;
				if (window.$eventTrace({
					category: "Praise",
					action: o ? "remove" : "add",
					eventLabel: "video"
				}), !a) return void r().then(function() {
					return e.getPraise(n)
				}).then(function(t) {
					t.praised || e.handleClickPraise()
				});
				var c = o ? "/newApi/praise/delete" : "/newApi/praise";
				(0, S.
				default)(c, {
					method: "POST",
					body: {
						type: O.
						default.resType.video,
						id: n
					}
				}).then(function(t) {
					if (200 === t.code) {
						var n = e.props,
							a = n.setSocial,
							r = n.setVideoAuthor;
						a({
							praised: !o,
							praiseCnt: o ? l - 1 : l + 1
						}), r(i({}, u, {
							praiseCnt: o ? u.praiseCnt - 1 : u.praiseCnt + 1
						}))
					}
				}).
				catch (function(t) {
					w.
					default.show(o ? "取消失败" : "点赞失败", 2e3, e.actionBar)
				})
			}
		}, {
			key: "handleClickCollect",
			value: function() {
				var e = this,
					t = this.props,
					n = t.id,
					a = t.isLogin,
					r = t.login,
					o = t.collected,
					l = t.collectCnt,
					u = t.isAuthor,
					c = t.author;
				if (window.$eventTrace({
					category: "Collect",
					action: o ? "remove" : "add",
					eventLabel: "video"
				}), u) return void w.
				default.show("不能收藏自己的视频哦", 2e3, this.actionBar);
				if (!a) return void r().then(function() {
					return e.getCollect(n)
				}).then(function(t) {
					t.collected || e.handleClickCollect()
				});
				var s = o ? "/newApi/collect/delete" : "/newApi/collect";
				(0, S.
				default)(s, {
					method: "POST",
					body: {
						type: O.
						default.resType.video,
						id: n
					}
				}).then(function(t) {
					if (200 === t.code) {
						var n = e.props,
							a = n.setSocial,
							r = n.setVideoAuthor;
						a({
							collected: !o,
							collectCnt: o ? l - 1 : l + 1
						}), r(i({}, c, {
							collectCnt: o ? c.collectCnt - 1 : c.collectCnt + 1
						}))
					}
				}).
				catch (function() {
					w.
					default.show(o ? "取消失败" : "收藏失败", 2e3, e.actionBar)
				})
			}
		}, {
			key: "handleShare",
			value: function(e) {
				window.$eventTrace({
					category: e,
					action: "share",
					eventLabel: "video"
				})
			}
		}, {
			key: "componentDidMount",
			value: function() {
				var e = this;
				this.setState({
					url: window.location.href
				});
				var t = this.props.id;
				Promise.all([(0, j.getShareInfo)(t, 2), (0, j.getShareInfo)(t, 3)]).then(function(t) {
					e.setState({
						weiboUrl: t[0],
						qzoneUrl: t[1]
					})
				})
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				if (this.props.isLogin !== e.isLogin || this.props.id !== e.id) {
					var t = e.id;
					this.getPraise(t), this.getCollect(t)
				}
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = t.praiseCnt,
					a = t.praised,
					r = t.collectCnt,
					o = t.collected,
					l = t.browseCnt,
					i = t.description,
					u = this.state,
					c = u.qzoneUrl,
					f = u.weiboUrl,
					d = u.showDescription,
					p = u.showQrcode,
					h = u.url,
					v = (0, m.
					default)({
						icon: !0,
						"icon-thumbs-up": !a,
						"icon-thumbs-up-fill": a
					}),
					b = (0, m.
					default)({
						icon: !0,
						"icon-heart": !o,
						"icon-heart-fill": o
					}),
					g = (0, m.
					default)({
						icon: !0,
						"icon-triangle-down": !0,
						reverse: d
					}),
					E = (0, m.
					default)({
						icon: !0,
						"icon-down": !0,
						reverse: p
					}),
					w = {
						value: h,
						bgColor: "#FFFFFF",
						fgColor: "#000000",
						level: "L",
						size: 100
					};
				return s.
				default.createElement("div", {
					className: "action-bar",
					ref: function(t) {
						e.actionBar = t
					}
				}, s.
				default.createElement("div", {
					className: "clearfix"
				}, s.
				default.createElement("ul", {
					className: "left"
				}, s.
				default.createElement("li", null, s.
				default.createElement("span", {
					className: v,
					onClick: this.handleClickPraise
				}), s.
				default.createElement("span", null, "点赞 ", k.
				default.handleCountTo999(n))), s.
				default.createElement("li", null, s.
				default.createElement("span", {
					className: b,
					onClick: this.handleClickCollect
				}), s.
				default.createElement("span", null, "收藏 ", k.
				default.handleCountTo999(r))), s.
				default.createElement("li", null, s.
				default.createElement("span", null, "分享："), s.
				default.createElement("a", {
					href: f,
					target: "_blank",
					onClick: function() {
						e.handleShare("WeiboShare")
					}
				}, s.
				default.createElement("span", {
					className: "icon icon-weibo"
				})), s.
				default.createElement("a", {
					href: c,
					target: "_blank",
					onClick: function() {
						e.handleShare("QzoneShare")
					}
				}, s.
				default.createElement("span", {
					className: "icon icon-qzone"
				})), s.
				default.createElement("span", {
					className: "weixin-share",
					onClick: this.handleClickWeixin
				}, s.
				default.createElement("span", {
					className: "icon icon-weixin"
				}), s.
				default.createElement("span", {
					className: E
				}), p && s.
				default.createElement("span", {
					className: "qr-code"
				}, s.
				default.createElement(y.
				default, w))))), s.
				default.createElement("ul", {
					className: "right"
				}, s.
				default.createElement("li", null, k.
				default.toW(l || 1), "次播放"), s.
				default.createElement("li", {
					className: "description-trigger",
					onClick: this.handleTriggerDescription
				}, "简介 ", s.
				default.createElement("span", {
					className: g
				})))), d && s.
				default.createElement("p", {
					className: "description"
				}, i || "暂无内容"))
			}
		}]), t
	}(s.
	default.Component),
		I = function(e) {
			var t = e.user,
				n = e.video,
				a = t.isLogin,
				r = n.video,
				o = r.id,
				l = r.browseCnt,
				i = r.collectCnt,
				u = r.collected,
				c = r.praised,
				s = r.praiseCnt,
				f = r.description,
				d = r.author;
			return {
				id: o,
				isLogin: a,
				browseCnt: l,
				collectCnt: i,
				collected: u,
				praised: c,
				praiseCnt: s,
				description: f,
				isAuthor: t.info.userId && t.info.userId.toString() === d.id.toString(),
				author: d
			}
		}, R = function(e) {
			return {
				login: function() {
					return new Promise(function(t) {
						g.
						default.show({
							onLoginSucceed: function(n) {
								e({
									type: N.LOGIN_SUCCESS,
									info: n.userInfo
								}), t()
							}
						})
					})
				},
				setSocial: function(t) {
					e({
						type: N.SET_VIDEO_DATA,
						data: t
					})
				},
				setVideoAuthor: function(t) {
					e({
						type: N.SET_VIDEO_AUTHOR,
						author: t
					})
				}
			}
		};
	t.
	default = (0, f.connect)(I, R)(x)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, o = n(0),
		l = a(o),
		i = n(3),
		u = n(8),
		c = n(1),
		s = a(c),
		f = n(25),
		d = a(f),
		p = n(4),
		h = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(p);
	n(462);
	var m = function(e) {
		var t = e.author,
			n = e.followChange,
			a = e.closeDownload,
			r = t.id,
			o = t.nickname,
			i = t.age,
			c = t.skinType,
			f = t.fanCnt,
			p = t.praiseCnt,
			h = t.collectCnt,
			m = t.avatar,
			v = t.vip,
			y = t.followType,
			b = t.authType,
			g = t.showFollowTip;
		return l.
		default.createElement("div", {
			className: "video-author-panel"
		}, l.
		default.createElement("div", {
			className: "image-container"
		}, l.
		default.createElement(u.Link, {
			to: "/user/" + r
		}, l.
		default.createElement("img", {
			src: s.
			default.nosUrl(m, "120x120"),
			alt: "头像"
		})), v ? l.
		default.createElement("span", {
			className: "icon icon-vip"
		}) : null), l.
		default.createElement("div", {
			className: "author-info"
		}, l.
		default.createElement("p", {
			className: "name"
		}, l.
		default.createElement(u.Link, {
			to: "/user/" + r
		}, o)), l.
		default.createElement("p", {
			className: "info"
		}, i, i && c && c.name ? " | " : null, c && c.name)), l.
		default.createElement("div", {
			className: "social"
		}, l.
		default.createElement("span", null, 4 === b ? "999+" : s.
		default.toW(f), " 粉丝"), l.
		default.createElement("span", null, s.
		default.toW(p), " 被赞"), l.
		default.createElement("span", null, s.
		default.toW(h), " 被收藏"), l.
		default.createElement(d.
		default, {
			className: "follow-btn",
			type: 1,
			id: r.toString(),
			disableCancel: !0,
			showFollowTip: g,
			closeDownload: a,
			followCallback: n,
			initialFollowType: void 0 === y ? -1 : y
		})))
	}, v = function(e) {
		return {
			author: e.video.video.author
		}
	}, y = function(e, t) {
		return {
			followChange: function(n, a, o) {
				var l = localStorage.getItem("hasShow"),
					i = !1;
				l || 0 === n || o || (i = !0, localStorage.setItem("hasShow", !0));
				var u = t.author,
					c = u.fanCnt,
					s = c;
				o || (s = 0 === n ? c - 1 : c + 1), e({
					type: h.SET_VIDEO_AUTHOR,
					author: r({}, u, {
						followType: n,
						fanCnt: s,
						showFollowTip: i
					})
				})
			},
			closeDownload: function() {
				var n = t.author;
				e({
					type: h.SET_VIDEO_AUTHOR,
					author: r({}, n, {
						showFollowTip: !1
					})
				})
			}
		}
	};
	t.
	default = (0, i.connect)(v, y)(m)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(1),
		i = a(l);
	n(463);
	var u = function(e) {
		var t = e.products,
			n = t.map(function(e) {
				var t = e.id,
					n = e.name1,
					a = e.name2,
					r = e.noteCnt,
					l = e.coverUrl,
					u = e.type;
				return o.
				default.createElement("li", {
					key: i.
					default.getKey()
				}, 8 === u ? o.
				default.createElement("div", {
					className: "video-product clearfix"
				}, o.
				default.createElement("img", {
					src: i.
					default.nosUrl(l, "160x160"),
					alt: "产品"
				}), o.
				default.createElement("div", {
					className: "product-info"
				}, o.
				default.createElement("h4", {
					className: "name1"
				}, n), a ? o.
				default.createElement("h4", {
					className: "name2"
				}, a) : null, r ? o.
				default.createElement("p", null, "共", r, "篇心得") : null)) : o.
				default.createElement("a", {
					className: "video-product clearfix",
					href: "/product/" + t,
					target: "_blank"
				}, o.
				default.createElement("img", {
					src: i.
					default.nosUrl(e.coverUrl, "160x160"),
					alt: "产品"
				}), o.
				default.createElement("div", {
					className: "product-info"
				}, o.
				default.createElement("h4", {
					className: "name1"
				}, n), a ? o.
				default.createElement("h4", {
					className: "name2"
				}, a) : null, r ? o.
				default.createElement("p", null, "共", r, "篇心得") : null), o.
				default.createElement("span", {
					className: "icon icon-right"
				})))
			});
		return o.
		default.createElement("div", {
			className: "video-products"
		}, o.
		default.createElement("h1", null, "视频中提到的产品(", t.length, ")"), o.
		default.createElement("div", {
			className: t.length > 4 ? "scroll" : ""
		}, o.
		default.createElement("ul", {
			className: "product-list"
		}, n)))
	};
	t.
	default = u
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(2),
		f = a(s);
	a(n(393)).
	default.typedarray();
	var d = {
		COUNTS: "/newApi/videoDisplay"
	}, p = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.played = !1, n.player = null, n.state = {
				hasError: !1
			}, n
		}
		return l(t, e), i(t, [{
			key: "initPlayer",
			value: function(e, t) {
				var n = this;
				window.neplayer.__cache = {}, this.player = window.neplayer(this.refs.videoNode), this.player.onPlayState(1, function() {
					n.played || (n.played = !0, (0, f.
					default)(d.COUNTS + "/" + e, {
						method: "POST"
					}).then(function() {
						t()
					}).
					catch (function(e) {}))
				}), this.player.onError(function() {
					var e = document.getElementsByClassName("vjs-error-display")[0],
						t = null;
					if (e) {
						n.setState({
							hasError: !0
						}), t = e.getElementsByClassName("vjs-modal-dialog-content")[0], t.innerHTML = '<div class="load-error"><span>网络太不给力，视频加载失败</span><span id="refresh-btn" class="icon icon-refresh"></span></div>';
						document.getElementById("refresh-btn").addEventListener("click", function() {
							window.location.reload()
						})
					}
				})
			}
		}, {
			key: "componentDidMount",
			value: function() {
				var e = this.props,
					t = e.id,
					n = e.onPlayVideo;
				this.initPlayer(t, n)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.player.release(), this.player = null
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props,
					t = e.url,
					n = e.coverUrl,
					a = this.state.hasError;
				return c.
				default.createElement("div", {
					className: a ? "error" : ""
				}, c.
				default.createElement("video", {
					ref: "videoNode",
					controls: !0,
					preload: "metadata",
					poster: n,
					className: "video-js vjs-big-play-centered vjs-fluid"
				}, c.
				default.createElement("source", {
					src: t,
					type: "video/mp4"
				})))
			}
		}]), t
	}(c.
	default.Component);
	t.
	default = p
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(0),
		o = a(r),
		l = n(1),
		i = a(l);
	n(464);
	var u = function(e) {
		var t = e.videos,
			n = t.map(function(e) {
				var t = e.title,
					n = e.browseCnt,
					a = e.duration,
					r = e.coverUrl,
					l = e.id,
					u = i.
				default.getDisplayTime2(a);
				return o.
				default.createElement("li", {
					key: i.
					default.getKey()
				}, o.
				default.createElement("a", {
					href: "/video/" + l,
					target: "_blank"
				}, o.
				default.createElement("div", {
					className: "image-container"
				}, o.
				default.createElement("img", {
					src: i.
					default.nosUrl(r, "320y180"),
					alt: "视频封面"
				}), o.
				default.createElement("span", {
					className: "time"
				}, u)), o.
				default.createElement("h4", {
					className: "title"
				}, t), o.
				default.createElement("p", {
					className: "play-cnt"
				}, i.
				default.toW(n || 1), "次播放")))
			});
		return o.
		default.createElement("div", {
			className: "recommended-videos"
		}, o.
		default.createElement("h1", null, "相关推荐"), o.
		default.createElement("ul", {
			className: "videos-list"
		}, n))
	};
	t.
	default = u
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, u = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		c = n(0),
		s = a(c),
		f = n(23),
		d = a(f),
		p = n(3),
		h = n(9),
		m = a(h),
		v = n(20),
		y = a(v),
		b = n(11),
		g = a(b),
		E = n(75),
		w = a(E),
		_ = n(62),
		N = a(_),
		C = n(4),
		O = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(C),
		T = n(1),
		k = a(T),
		P = n(2),
		S = a(P),
		j = n(356),
		L = a(j),
		x = n(353),
		I = a(x),
		R = n(354),
		M = a(R),
		U = n(355),
		A = a(U),
		D = n(357),
		F = a(D),
		G = n(140);
	n(465);
	var H = {
		VIDEO: "/newApi/video/detail",
		COMMENTS: "/newApi/comment/list",
		USER: "/newApi/ms/user/current"
	}, B = function() {
		return new Promise(function(e) {
			(0, G.insertNep)(function() {
				e()
			})
		})
	}, V = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.videoContainer = null, n.handlePlayVideo = n.handlePlayVideo.bind(n), n
		}
		return l(t, e), u(t, [{
			key: "initVideo",
			value: function(e, t, n) {
				d.
				default.unmountComponentAtNode(this.videoContainer), d.
				default.render(s.
				default.createElement(L.
				default, {
					url: t,
					onPlayVideo: this.handlePlayVideo,
					coverUrl: k.
					default.nosUrl(n, "1312x738"),
					id: e
				}), this.videoContainer)
			}
		}, {
			key: "handlePlayVideo",
			value: function() {
				var e = this.props;
				(0, e.setSocial)({
					playCnt: e.video.playCnt + 1
				})
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				if (e.video.id !== this.props.video.id) {
					var t = e.video,
						n = t.coverUrl,
						a = t.vcontent,
						r = t.id;
					this.initVideo(r, a.hdMp4Url || "", n)
				}
			}
		}, {
			key: "componentDidMount",
			value: function() {
				var e = this;
				B().then(function() {
					var t = e.props.video,
						n = t.vcontent,
						a = t.coverUrl,
						r = t.id;
					e.initVideo(r, n.hdMp4Url || "", a)
				}).
				catch (function(e) {
					y.
					default.alert({
						content: "资源加载失败，点击确定刷新页面",
						onClickOK: function() {
							window.location.reload()
						}
					})
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props.video,
					n = t.id,
					a = t.title,
					r = t.author,
					o = t.products,
					l = t.videos,
					i = t.tags,
					u = t.mode,
					c = (0, m.
					default)({
						"video-container": !0,
						horizontal: 0 === u,
						vertical: 1 === u
					});
				return s.
				default.createElement("div", null, s.
				default.createElement(g.
				default, null), s.
				default.createElement("div", {
					className: "video-wrapper clearfix"
				}, s.
				default.createElement("artical", null, s.
				default.createElement("div", {
					ref: function(t) {
						e.videoContainer = t
					},
					className: c
				}), s.
				default.createElement("h1", {
					className: "title"
				}, a), (i || []).length ? s.
				default.createElement("div", {
					className: "tags"
				}, i.slice(0, 10).map(function(e) {
					return s.
					default.createElement("span", {
						key: k.
						default.getKey()
					}, k.
					default.truncate(e.name, 10, "..."))
				})) : null, s.
				default.createElement(I.
				default, null), s.
				default.createElement(M.
				default, {
					author: r
				}), s.
				default.createElement(w.
				default, {
					limit: 20,
					type: "video",
					id: n
				})), s.
				default.createElement("aside", null, !! o.length && s.
				default.createElement(A.
				default, {
					products: o
				}), !! l.length && s.
				default.createElement(F.
				default, {
					videos: l
				}), s.
				default.createElement("div", {
					className: "qr-banner"
				}), s.
				default.createElement(N.
				default, null))))
			}
		}], [{
			key: "fetchData",
			value: function(e, t) {
				var n = e.dispatch,
					a = e.getState,
					r = a(),
					o = r.headerInfo;
				n({
					type: O.GET_VIDEO_REQUEST
				});
				var l = t.id,
					u = (0, S.
					default)(H.VIDEO + "/" + l, {
						headerInfo: o
					}),
					c = (0, S.
					default)("" + H.USER, {
						headerInfo: o
					}),
					s = (0, S.
					default)("" + H.COMMENTS, {
						method: "GET",
						body: {
							type: 20,
							id: l,
							offset: 0,
							limit: 20
						},
						headerInfo: o
					});
				return Promise.all([u, s, c]).then(function(e) {
					n({
						type: O.GET_VIDEO_SUCCESS,
						video: e[0].result,
						comments: i({
							list: []
						}, e[1].result)
					}), n(200 === e[2].code ? {
						type: O.LOGIN_SUCCESS,
						info: e[2].result
					} : {
						type: O.LOGIN_FAILURE
					})
				}).
				catch (function(e) {
					throw n({
						type: O.GET_VIDEO_FAILURE
					}), e
				})
			}
		}]), t
	}(s.
	default.Component),
		z = function(e) {
			return {
				video: e.video && e.video.video || {},
				comments: e.video && e.video.comments || {}
			}
		}, q = function(e) {
			return {
				setSocial: function(t) {
					e({
						type: O.SET_VIDEO_DATA,
						data: t
					})
				}
			}
		};
	t.
	default = (0, p.connect)(z, q)(V)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i, u = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, c = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function(t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		s = n(0),
		f = a(s),
		d = n(39),
		p = a(d),
		h = n(9),
		m = a(h),
		v = n(5),
		y = a(v);
	n(497);
	var b = n(83),
		g = n(11),
		E = a(g),
		w = n(80),
		_ = a(w),
		N = n(76),
		C = a(N),
		O = n(38),
		T = a(O),
		k = n(12),
		P = a(k),
		S = n(146),
		j = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(S),
		L = n(20),
		x = a(L);
	n(466);
	var I = n(63),
		R = a(I),
		M = n(366),
		U = a(M),
		A = n(142),
		D = a(A),
		F = n(143),
		G = a(F),
		H = n(367),
		B = a(H),
		V = n(141),
		z = a(V),
		q = n(79);
	j.polyfill();
	var W = {
		currentUser: "/newApi/ms/user/current",
		getRepo: "/newApi/ms/repo/getrepobyid",
		addRepo: "/newApi/ms/repo/add",
		updateRepo: "/newApi/ms/repo/update",
		getDraftCnt: "/newApi/repo/draftCnt"
	}, K = (0, T.
	default)(i = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.editor = null, n.onClickPublish = n.onClickPublish.bind(n), n.onClickPravicy = n.onClickPravicy.bind(n), n.toggleStyle = n.toggleStyle.bind(n), n.onChangeTitle = n.onChangeTitle.bind(n), n.onChangeTags = n.onChangeTags.bind(n), n.onConfirmCrop = n.onConfirmCrop.bind(n), n.onCloseImageCropper = n.onCloseImageCropper.bind(n), n.onCloseInsertProductModal = n.onCloseInsertProductModal.bind(n), n.insertProduct = n.insertProduct.bind(n), n.onUploadCover = n.onUploadCover.bind(n), n.insertImage = n.insertImage.bind(n), n.onClickInsertProduct = n.onClickInsertProduct.bind(n), n.checkTop = (0, b.throttle)(n.checkTop.bind(n), 10), n.checkResize = (0, b.throttle)(n.checkResize.bind(n), 10), n.onTitleFocus = function() {
				return n.setState({
					titleFocused: !0
				})
			}, n.onTitleBlur = function() {
				return n.setState({
					titleFocused: !1
				})
			}, n.currentUserInfo = null, n.editMode = !1, n.state = {
				collection: {
					coverUrl: "",
					title: "",
					tags: [],
					privacy: !1
				},
				showImageCropper: !1,
				showInsertProductModal: !1,
				rawCoverImageInfo: {},
				titleFocused: !1,
				repoDraftCnt: 0
			}, n.content = "", n
		}
		return l(t, e), c(t, [{
			key: "convertMediaToState",
			value: function(e) {
				function t(e) {
					if (6 !== e.type) throw new Error("not a text content, type = " + e.type);
					var t = r.editor.generateTextHTML(e.content);
					return r.hasRichText() && e.html && (t = e.html), t
				}
				function n(e) {
					if (3 !== e.type) throw new Error("not an image media, type = " + e.type);
					return r.editor.generateImageHTML({
						url: e.content
					})
				}
				function a(e) {
					if (1 !== e.type && 7 !== e.type && 8 !== e.type) throw new Error("not a product media, media = ", e);
					if (e.content.id = e.content.productId, 8 === e.type) e.content.calculatedName = e.content.brandName + " " + e.content.productName, e.content.skuName && (e.content.calculatedSkuName = "型号/色号: " + e.content.skuName, e.content.colorOrTypeName = e.content.skuName);
					else {
						var t = (0, q.getMainNameObject)(e.content);
						e.content.calculatedName = t.brandAndProductName, e.content.calculatedSkuName = t.skuName
					}
					e.content.skuId && (e.content.sku = {
						id: e.content.skuId
					});
					var n = e.content;
					return r.editor.generateProductHTML(n)
				}
				var r = this,
					o = [];
				return y.
				default.each(e, function(e) {
					6 === e.type && o.push(t(e)), 3 === e.type && o.push(n(e)), 1 !== e.type && 7 !== e.type && 8 !== e.type || o.push(a(e))
				}), o.join("")
			}
		}, {
			key: "getCurrentUser",
			value: function() {
				var e = this,
					t = W.currentUser;
				return (0, b.request)({
					url: t
				}).then(function(t) {
					if (200 !== t.code) throw new Error(t);
					e.currentUserInfo = t.result
				}).
				catch (function() {
					return window.location.href = "/login?goto=" + encodeURIComponent(window.location.href), Promise.reject()
				})
			}
		}, {
			key: "hasRichText",
			value: function() {
				return this.currentUserInfo.meixueAccounts || window.location.href.indexOf("openrt") > -1
			}
		}, {
			key: "checkEditMode",
			value: function() {
				var e = this,
					t = void 0,
					n = this.props.params;
				if (n && (t = n.id), t) {
					this.editMode = !0, _.
					default.show();
					var a = W.getRepo + "?id=" + t + "&isEdit=true";
					(0, b.request)({
						url: a
					}).then(function(n) {
						if (200 === n.code) {
							n.result.media = e.splitTextContentInMedia(n.result.media), e.setState({
								collection: n.result
							});
							var a = e.editor.getInstance(),
								r = e.convertMediaToState(n.result.media);
							a.ready(function() {
								a.setContent(r), _.
								default.close(), setTimeout(function() {
									e.editor.autoHeighten()
								}, 0)
							})
						} else x.
						default.alert({
							content: n.msg,
							onClickOK: function() {
								window.location.href = "/repo/" + t
							}
						})
					}).
					catch (function(e) {})
				} else this.checkDraftCnt(), this.editMode = !1, this.restoreFromDraft(), this.cacheDraft();
				this.setState({
					richTextFlag: this.hasRichText()
				})
			}
		}, {
			key: "checkDraftCnt",
			value: function() {
				var e = this;
				(0, b.request)({
					url: W.getDraftCnt,
					method: "GET"
				}).then(function(t) {
					200 === t.code && (t.result && t.result.repoDraftCnt >= 50 && P.
					default.show("草稿箱已达上限，不能保存草稿了哦~"), e.setState({
						repoDraftCnt: t.result.repoDraftCnt
					}))
				})
			}
		}, {
			key: "splitTextContentInMedia",
			value: function(e) {
				var t = [];
				return y.
				default.each(e, function(e) {
					if (6 === e.type && e.content.match(/\n/)) {
						var n = e.content.split(/\n/);
						y.
						default.each(n, function(n) {
							var a = p.
							default.extend({}, e);
							a.html = "", a.content = n, t.push(a)
						})
					} else t.push(e)
				}), t
			}
		}, {
			key: "adjustNav",
			value: function() {
				(0, p.
				default)(".placeholder").css("display", "none"), (0, p.
				default)(".page-nav").addClass("not-fix")
			}
		}, {
			key: "checkTop",
			value: function() {
				var e = (0, p.
				default)(document).scrollTop(),
					t = this.refs,
					n = t.toolBarList,
					a = t.content,
					r = (0, p.
					default)(".publish-bar")[0];
				if (e >= 100 && !(0, p.
				default)(n).hasClass("fix-tools-bar") && ((0, p.
				default)(n).addClass("fix-tools-bar"), this.checkResize()), e < 100 && (0, p.
				default)(n).hasClass("fix-tools-bar") && (0, p.
				default)(n).removeClass("fix-tools-bar"), e >= 102) {
					(0, p.
					default)(r).hasClass("publish-bar-fixed") || (0, p.
					default)(r).addClass("publish-bar-fixed");
					var o = window.getComputedStyle(a).getPropertyValue("margin-left");
					"0px" === o && (o = a.offsetLeft + "px"), (0, p.
					default)(r).css("left", o)
				} else(0, p.
				default)(r).removeClass("publish-bar-fixed"), (0, p.
				default)(r).css("left", "0px")
			}
		}, {
			key: "checkResize",
			value: function() {
				var e = this.refs,
					t = e.content,
					n = e.toolBarList,
					a = (0, p.
					default)(".publish-bar")[0];
				if (n.className.match(/fix-tools-bar/)) {
					var r = ((0, p.
					default)(window).width() - t.offsetWidth) / 2 + 30;
					r <= 0 && (r = 0), n.style.right = r + "px"
				}
				if (a.className.match(/publish-bar-fixed/)) {
					var o = window.getComputedStyle(t).getPropertyValue("margin-left");
					"0px" === o && (o = t.offsetLeft + "px"), (0, p.
					default)(a).css("left", o)
				}
			}
		}, {
			key: "componentDidMount",
			value: function() {
				this.adjustNav(), (0, p.
				default)(window).on("scroll", this.checkTop), (0, p.
				default)(window).on("resize", this.checkResize), this.checkTop(), this.checkResize(), this.props.isLogin && (this.currentUserInfo = this.props.userInfo, this.checkEditMode())
			}
		}, {
			key: "componentWillReceiveProps",
			value: function(e) {
				!this.props.isLogin && e.isLogin && (this.currentUserInfo = e.userInfo, this.checkEditMode())
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				(0, p.
				default)(window).off("scroll", this.checkTop), (0, p.
				default)(window).off("resize", this.checkResize), this.cleanDraft()
			}
		}, {
			key: "onChangeTitle",
			value: function(e) {
				var t = e.target.value,
					n = y.
				default.assign({}, this.state.collection);
				n.title = t, this.setState({
					collection: n
				})
			}
		}, {
			key: "onChangeTags",
			value: function(e) {
				if (e.length > 10 || e.filter(function(e) {
					return (0, b.getLength)(e) > 40
				}).length > 0) {
					var t = this;
					return t.popup || (x.
					default.alert({
						content: "标签最多10个，且每个长度不能超过20个汉字哦",
						onClickOK: function() {
							t.popup = !1
						}
					}), t.popup = !0), void document.getElementsByClassName("react-tagsinput-input")[0].blur()
				}
				var n = this.state.collection.tags,
					a = [];
				a = e.map(function(e) {
					var t = {
						id: 0,
						name: e
					}, a = y.
					default.find(n, function(e) {
						return t.name === e.name
					});
					return a && (t.id = a.id), t
				});
				var r = y.
				default.assign({}, this.state.collection);
				r.tags = a, this.setState({
					collection: r
				})
			}
		}, {
			key: "onUploadCover",
			value: function(e) {
				this.setState({
					rawCoverImageInfo: e,
					showImageCropper: !0
				})
			}
		}, {
			key: "insertImage",
			value: function(e) {
				window.$eventTrace({
					category: "RepoEdit",
					action: "add",
					eventLabel: "image"
				}), this.editor.insertImage(e)
			}
		}, {
			key: "insertProduct",
			value: function(e) {
				var t = this.editor.getInstance();
				if (this.editor.isProductIframeExists(t, e)) return x.
				default.alert("不能插入重复的商品");
				this.editor.insertProduct(e)
			}
		}, {
			key: "onClickInsertProduct",
			value: function(e) {
				window.$eventTrace({
					category: "RepoEdit",
					action: "add",
					eventLabel: "product"
				}), e.preventDefault(), this.setState({
					showInsertProductModal: !0
				})
			}
		}, {
			key: "onClickPublish",
			value: function() {
				var e = this;
				window.$eventTrace({
					category: "RepoEdit",
					action: "click",
					eventLabel: "submitButton"
				}), _.
				default.show();
				var t = this.composeCollectionData();
				if (!t) return void _.
				default.close();
				t.privacy = !1;
				var n = W.addRepo;
				this.editMode && (n = W.updateRepo), (0, b.request)({
					url: n,
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
					},
					dataType: "",
					data: "repo=" + encodeURIComponent(JSON.stringify(t))
				}).then(function(t) {
					if (200 === t.code) {
						e.removeDraft();
						var n = void 0;
						n = e.editMode ? e.props.params.id : t.result.id;
						var a = "/repo/" + n;
						window.location.href = a
					} else _.
					default.close(), x.
					default.alert("发布失败, data.code : " + t)
				}).
				catch (function() {
					_.
					default.close(), x.
					default.alert("发布失败")
				})
			}
		}, {
			key: "onClickPravicy",
			value: function() {
				if (window.$eventTrace({
					category: "RepoEdit",
					action: "click",
					eventLabel: "draftButton"
				}), this.state.repoDraftCnt >= 50) {
					var e = this;
					x.
					default.confirm({
						content: "草稿箱数量已达上限，不能存草稿啦",
						okContent: "去发布",
						cancelContent: "放弃编辑",
						onClickOK: function() {
							e.onClickPublish()
						}
					})
				} else {
					var t = y.
					default.assign({}, this.state.collection);
					t.privacy = !0, this.setState({
						collection: t
					}, this.handlePravicy)
				}
			}
		}, {
			key: "handlePravicy",
			value: function() {
				var e = this;
				_.
				default.show();
				var t = this.composeCollectionData();
				if (!t) return void _.
				default.close();
				var n = W.addRepo;
				this.editMode && (n = W.updateRepo), (0, b.request)({
					url: n,
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
					},
					dataType: "",
					data: "repo=" + encodeURIComponent(JSON.stringify(t))
				}).then(function(t) {
					if (200 === t.code) {
						e.removeDraft();
						var n = void 0;
						n = e.editMode ? e.props.params.id : t.result.id;
						var a = "/repo/" + n + "#toast";
						window.location.href = a
					} else _.
					default.close(), P.
					default.show("保存失败," + t.msg)
				}).
				catch (function() {
					_.
					default.close(), P.
					default.show("保存失败,网络状况不好")
				})
			}
		}, {
			key: "onConfirmCrop",
			value: function(e) {
				var t = this.state,
					n = t.rawCoverImageInfo,
					a = t.collection,
					r = n.url,
					o = n.noskey,
					l = r + "?imageView&crop=" + e,
					i = o + "?imageView&crop=" + e;
				this.setState({
					showImageCropper: !1,
					collection: u({}, a, {
						coverUrl: l,
						coverNosKey: i
					})
				})
			}
		}, {
			key: "onCloseImageCropper",
			value: function() {
				this.setState({
					showImageCropper: !1
				})
			}
		}, {
			key: "onCloseInsertProductModal",
			value: function(e) {
				(e.id || e.productName) && this.insertProduct(e), this.setState({
					showInsertProductModal: !1
				})
			}
		}, {
			key: "cacheDraft",
			value: function() {
				var e = this;
				this.draftId || (this.draftId = setInterval(function() {
					var t = e.currentUserInfo.userId;
					localStorage.setItem("web2_title_" + t, e.state.collection.title), localStorage.setItem("web2_cover_" + t, e.state.collection.coverUrl), localStorage.setItem("web2_tags_" + t, JSON.stringify(e.state.collection.tags)), localStorage.setItem("web2_content_" + t, e.editor.getInstance().getContent())
				}, 1e4))
			}
		}, {
			key: "cleanDraft",
			value: function() {
				clearInterval(this.draftId)
			}
		}, {
			key: "removeDraft",
			value: function() {
				var e = this.currentUserInfo.userId;
				localStorage.removeItem("web2_title_" + e), localStorage.removeItem("web2_cover_" + e), localStorage.removeItem("web2_tags_" + e), localStorage.removeItem("web2_content_" + e)
			}
		}, {
			key: "restoreFromDraft",
			value: function() {
				var e = this,
					t = this.currentUserInfo.userId,
					n = {
						coverUrl: localStorage.getItem("web2_cover_" + t) || "",
						title: localStorage.getItem("web2_title_" + t) || "",
						tags: JSON.parse(localStorage.getItem("web2_tags_" + t)) || []
					};
				this.setState({
					collection: n
				});
				var a = localStorage.getItem("web2_content_" + t) || "",
					r = this.editor.getInstance();
				r.ready(function() {
					r.setContent(a), setTimeout(function() {
						e.editor.autoHeighten()
					}, 0)
				})
			}
		}, {
			key: "getProductMediaByIframe",
			value: function(e) {
				var t = void 0,
					n = {}, a = e.getAttribute("product-json");
				if (a = JSON.parse(decodeURIComponent(a)), a.id) n = {
					productId: a.id,
					noteList: []
				}, a.sku && a.sku.id ? (t = 7, n.skuId = a.sku.id) : t = 1;
				else {
					t = 8;
					var r = {
						productName: a.productName,
						brandName: a.brandName
					};
					a.colorOrTypeName && (r.modelName = "型号/色号", r.modelValue = a.colorOrTypeName), n = r
				}
				return {
					type: t,
					content: n
				}
			}
		}, {
			key: "getBlockHTMLCollection",
			value: function() {
				var e = this,
					t = this.editor.getInstance(),
					n = [],
					a = (0, p.
					default)("<div>" + t.getContent() + "</div>")[0];
				return this.hasRichText() ? y.
				default.each(a.childNodes, function(t) {
					var a = void 0;
					if (t.querySelector("img")) {
						var r = t.innerHTML.match(/(.*?)(<img.*>)(.*)/).slice(1);
						y.
						default.each(r, function(e) {
							if (e.trim() && !y.
							default.startsWith(e, "<img")) a = {
								type: 6,
								content: (0, p.
								default)("<p>" + e + "</p>")[0].textContent,
								html: "<p>" + e + "</p>"
							};
							else {
								if (!(0, p.
								default)(e)[0] || "IMG" !== (0, p.
								default)(e)[0].nodeName) return;
								var t = (0, p.
								default)(e)[0].src;
								if (-1 === t.indexOf("127.net")) return;
								a = {
									type: 3,
									content: t
								}
							}
							n.push(a)
						})
					} else if (t.querySelector("iframe")) {
						var o = t.innerHTML.match(/(.*?)(<iframe.*\/iframe>)(.*)/).slice(1);
						y.
						default.each(o, function(t) {
							if (t.trim() && !y.
							default.startsWith(t, "<iframe")) a = {
								type: 6,
								content: (0, p.
								default)("<p>" + t + "</p>")[0].textContent,
								html: "<p>" + t + "</p>"
							}, n.push(a);
							else {
								if (!(0, p.
								default)(t)[0] || "IFRAME" !== (0, p.
								default)(t)[0].nodeName) return;
								var r = (0, p.
								default)(t)[0],
									o = e.getProductMediaByIframe(r);
								a = {
									type: o.type,
									content: o.content
								}
							}
							n.push(a)
						})
					} else a = {
						type: 6,
						content: e.editor.generateTextHTML(t.textContent),
						html: e.transformSpaceInText(t.outerHTML)
					}, n.push(a)
				}) : y.
				default.each(a.childNodes, function(t, a) {
					var r = void 0;
					t.childNodes.length > 0 ? y.
					default.each(t.childNodes, function(t) {
						if ("#text" === t.nodeName) r = {
							type: 6,
							content: t.textContent.replace(/ /g, "&nbsp;")
						};
						else if ("IMG" === t.nodeName) r = {
							type: 3,
							content: t.src
						};
						else if ("IFRAME" === t.nodeName) r = e.getProductMediaByIframe(t);
						else {
							if ("BR" === t.nodeName) return;
							if ("SPAN" === t.nodeName) {
								var o = y.
								default.last(n);
								if (0 !== a && o && 6 === o.type) return void(o.content += t.textContent.replace(/ /g, "&nbsp;"));
								r = {
									type: 6,
									content: t.textContent.replace(/ /g, "&nbsp;")
								}
							} else r = {
								type: 6,
								content: t.textContent.replace(/ /g, "&nbsp;")
							}
						}
						n.push(r)
					}) : (r = "#text" === t.nodeName ? {
						type: 6,
						content: t.textContent.replace(/ /g, "&nbsp;")
					} : {
						type: 6,
						content: ""
					}, n.push(r))
				}), n
			}
		}, {
			key: "transformSpaceInText",
			value: function(e) {
				function t(e) {
					(0, p.
					default)(e).each(function(e, n) {
						"#text" === n.nodeName && (n.nodeValue = n.nodeValue.replace(/ /g, "&nbsp;")), n.childNodes.length > 0 && t(n.childNodes)
					})
				}
				var n = (0, p.
				default)(e);
				return t(n[0]), n[0].outerHTML.replace(/&amp;/g, "&")
			}
		}, {
			key: "getMediaTextLength",
			value: function(e) {
				var t = 0;
				return y.
				default.each(e, function(e) {
					6 === e.type && (t += (0, b.getLength)(e.content))
				}), t
			}
		}, {
			key: "composeCollectionData",
			value: function() {
				var e = {};
				if (this.editMode && (e.id = this.props.params.id), e.author = {
					id: this.currentUserInfo.userId
				}, e.coverNosKey = this.state.collection.coverNosKey, e.title = this.state.collection.title, e.privacy = this.state.collection.privacy, !e.title) return void x.
				default.alert("标题不能为空");
				if ((0, b.getLength)(e.title) > 60) return void x.
				default.alert("标题最多30个字哦");
				e.tags = this.state.collection.tags;
				var t = function(e) {
					var t = 0,
						n = e.length,
						a = [],
						r = null;
					for (t = 0; t < n; t++) r = e[t], 8 === r.type && (a.push(r.content), delete r.content);
					return {
						media: e,
						userProducts: a
					}
				}(this.getBlockHTMLCollection(this.editor));
				return e.media = t.media, this.getMediaTextLength(e.media) > 2e4 ? void x.
				default.alert("正文都超过10000字啦") : (e.userProducts = t.userProducts, e)
			}
		}, {
			key: "toggleStyle",
			value: function(e) {
				var t = this.editor.getInstance();
				if (e.match(/COLOR/)) t.execCommand("forecolor", R.
				default [e].color);
				else if (e.match(/SIZE/)) t.execCommand("fontsize", R.
				default [e].fontSize);
				else if (e.match(/BGC/)) t.execCommand("backcolor", R.
				default [e].backgroundColor);
				else if (e.match(/align-/)) {
					var n = e.match(/-.+/)[0].substr(1);
					t.execCommand("justify", n)
				} else t.execCommand(e)
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = "";
				this.state.collection.coverUrl && (t = this.state.collection.coverUrl.indexOf("?") > -1 ? this.state.collection.coverUrl + "&thumbnail=789z528" : this.state.collection.coverUrl + "?imageView&thumbnail=789z528", ~t.indexOf(".gif") && (t += "&type=png"));
				var n = Math.floor((0, b.getLength)(this.state.collection.title) / 2),
					a = (0, m.
					default)({
						"collection-cover-area": !0,
						"heighten-collection-cover-area": !! t
					}),
					r = !0;
				return this.state.collection.id && !1 === this.state.collection.privacy && (r = !1), f.
				default.createElement("div", null, f.
				default.createElement(E.
				default, {
					notFixed: !0
				}), f.
				default.createElement("div", {
					className: "collection-content",
					ref: "content"
				}, f.
				default.createElement(D.
				default, {
					ref: "publishBar",
					onClick: this.onClickPublish,
					onClickPravicy: this.onClickPravicy,
					richText: this.state.richTextFlag,
					toggleStyle: this.toggleStyle,
					isPrivateRepo: this.state.collection.privacy,
					isShowPrivacy: r
				}), this.state.showImageCropper && f.
				default.createElement(C.
				default, {
					title: "封面裁切",
					url: this.state.rawCoverImageInfo.url,
					minWidth: 900,
					aspectRatio: 1.5,
					initialWidth: 900,
					initialHeight: 600,
					onClickOK: this.onConfirmCrop,
					onClickClose: this.onCloseImageCropper
				}), this.state.showInsertProductModal && f.
				default.createElement(z.
				default, {
					onClickClose: this.onCloseInsertProductModal
				}), f.
				default.createElement("div", {
					className: "two-columns"
				}, f.
				default.createElement("div", {
					className: "content-area"
				}, f.
				default.createElement("div", {
					className: a
				}, f.
				default.createElement("div", {
					className: "collection-cover-cropped-image",
					style: {
						backgroundImage: "url(" + t + ")"
					}
				}), t ? f.
				default.createElement("div", {
					className: "change-cover-btn"
				}, f.
				default.createElement("span", {
					className: "change-cover-btn-text"
				}, "更换"), f.
				default.createElement(B.
				default, {
					onChange: this.onUploadCover,
					options: {
						minWidth: 900,
						minHeight: 600
					}
				})) : f.
				default.createElement(B.
				default, {
					onChange: this.onUploadCover,
					options: {
						minWidth: 900,
						minHeight: 600
					}
				}), !t && f.
				default.createElement("p", {
					className: "collection-cover-area-intro"
				}, "请添加封面图，支持10M以内的JPG、PNG图片，建议尺寸900*600px")), f.
				default.createElement("div", {
					className: "collection-title-wrapper"
				}, f.
				default.createElement("input", {
					className: "collection-title-input",
					placeholder: "请输入标题（必填）",
					value: this.state.collection.title,
					onChange: this.onChangeTitle,
					onFocus: this.onTitleFocus,
					onBlur: this.onTitleBlur
				}), this.state.titleFocused && f.
				default.createElement("div", {
					className: n > 30 ? "collection-title-counter collection-title-counter-red" : "collection-title-counter"
				}, n, "/30")), f.
				default.createElement(U.
				default, {
					ref: function(t) {
						e.editor = t
					},
					richText: this.state.richTextFlag,
					content: this.state.content
				}), f.
				default.createElement(G.
				default, {
					value: this.state.collection.tags.map(function(e) {
						return e.name
					}),
					onChange: this.onChangeTags
				})), f.
				default.createElement("div", {
					className: "collection-tools-bar"
				}, f.
				default.createElement("ul", {
					className: "tools-bar-list",
					ref: "toolBarList"
				}, f.
				default.createElement("li", {
					className: "insert-product-btn",
					onClick: this.onClickInsertProduct
				}, f.
				default.createElement("span", null, "插入产品")), f.
				default.createElement("li", {
					className: "insert-image-btn"
				}, f.
				default.createElement(B.
				default, {
					onChange: this.insertImage
				}), f.
				default.createElement("span", null, "插入图片")))))))
			}
		}]), t
	}(s.Component)) || i;
	t.
	default = K
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(20),
		f = a(s),
		d = n(82),
		p = a(d),
		h = function(e) {
			function t() {
				r(this, t);
				var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return e.onClick = e.onClick.bind(e), e.submitLink = e.submitLink.bind(e), e.state = {
					showDialogue: !1,
					styles: {
						btn: {
							position: "relative"
						},
						inputWrapper: {
							marginTop: 10,
							marginLeft: "auto",
							marginRight: "auto",
							width: 218
						},
						inputName: {
							display: "inline-block",
							width: "20%"
						},
						input: {
							outline: "none",
							width: "79.999%",
							padding: 2
						},
						submitBtn: {
							textAlign: "center",
							width: 52,
							margin: "0 auto 0 auto",
							backgroundColor: "#f66",
							color: "#fff",
							fontSize: 14,
							lineHeight: "24px",
							borderRadius: "2px"
						},
						dialogue: {
							paddingTop: 7,
							position: "absolute",
							top: 28,
							left: 18,
							zIndex: 2,
							borderRadius: "2px",
							width: 260,
							paddingBottom: 15,
							backgroundColor: "#fff",
							border: "1px solid #e5e5e5"
						}
					}
				}, e
			}
			return l(t, e), i(t, [{
				key: "submitLink",
				value: function() {
					var e = this.refs.inputText.value,
						t = this.refs.inputUrl.value;
					if (!t || !e) return f.
					default.alert("请填写需要插入的文字和其对应的链接");
					p.
					default.trigger("insert-link", {
						text: e,
						href: t
					}), this.onClick()
				}
			}, {
				key: "onClick",
				value: function() {
					this.state.showDialogue ? this.state.showDialogue = !1 : this.state.showDialogue = !0, this.setState({
						showDialogue: this.state.showDialogue
					})
				}
			}, {
				key: "componentDidMount",
				value: function() {}
			}, {
				key: "render",
				value: function() {
					var e = this.state,
						t = e.styles,
						n = e.showDialogue;
					return c.
					default.createElement("span", {
						className: "RichEditor-styleButton",
						style: t.btn,
						ref: "btn"
					}, c.
					default.createElement("span", {
						onClick: this.onClick
					}, c.
					default.createElement("i", {
						className: "icon beauty-iconfont beauty-ic_insert_link_px"
					})), n ? c.
					default.createElement("div", {
						style: t.dialogue
					}, c.
					default.createElement("div", {
						style: t.inputWrapper
					}, c.
					default.createElement("span", {
						style: t.inputName
					}, "文字"), c.
					default.createElement("input", {
						placeholder: "文字",
						style: t.input,
						ref: "inputText"
					})), c.
					default.createElement("div", {
						style: t.inputWrapper
					}, c.
					default.createElement("span", {
						style: t.inputName
					}, "地址"), c.
					default.createElement("input", {
						placeholder: "此处填写完整链接",
						style: t.input,
						ref: "inputUrl"
					})), c.
					default.createElement("div", {
						style: t.inputWrapper
					}, c.
					default.createElement("div", {
						style: t.submitBtn,
						onClick: this.submitLink
					}, "确 定"))) : null)
				}
			}]), t
		}(c.
		default.Component);
	h.propTypes = {
		editorState: c.
		default.PropTypes.object
	}, h.defaultProps = {
		editorState: {}
	}, t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(5),
		f = a(s),
		d = n(82),
		p = a(d),
		h = n(365),
		m = a(h),
		v = n(360),
		y = a(v),
		b = n(363),
		g = a(b),
		E = n(362),
		w = a(E),
		_ = n(364),
		N = a(_),
		C = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.state = {}, n
			}
			return l(t, e), i(t, [{
				key: "componentDidMount",
				value: function() {
					var e = this;
					p.
					default.on(this, "range-state-change", function(t) {
						e.setState({
							cmdStates: t
						})
					})
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					p.
					default.off(this, "range-state-change")
				}
			}, {
				key: "isStyleActivated",
				value: function(e) {
					if (!f.
					default.isArray(this.state.cmdStates)) return !1;
					var t = f.
					default.find(this.state.cmdStates, {
						cmd: e
					});
					return 1 === t.value || !0 === t.value
				}
			}, {
				key: "getActivatedStyleValue",
				value: function(e) {
					return f.
					default.isArray(this.state.cmdStates) ? f.
					default.find(this.state.cmdStates, {
						cmd: e
					}).value : ""
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = this.props,
						n = [{
							iconFontClass: "beauty-ic_format_bold_px",
							style: "bold"
						}, {
							iconFontClass: "beauty-ic_format_italic_px",
							style: "italic"
						}, {
							iconFontClass: "beauty-ic_format_underline_px",
							style: "underline"
						}],
						a = [{
							iconFontClass: "beauty-ic_format_align_left_px",
							style: "align-left"
						}, {
							iconFontClass: "beauty-ic_format_align_center_px",
							style: "align-center"
						}, {
							iconFontClass: "beauty-ic_format_align_right_px",
							style: "align-right"
						}],
						r = n.map(function(n, a) {
							return c.
							default.createElement(m.
							default, {
								key: a,
								active: e.isStyleActivated(n.style),
								iconFontClass: n.iconFontClass,
								onToggle: t.onToggle,
								style: n.style
							})
						});
					return r.push(c.
					default.createElement(g.
					default, {
						activatedValue: this.getActivatedStyleValue("forecolor"),
						key: "FontColorBtn",
						onToggle: t.onToggle
					})), r.push(c.
					default.createElement(N.
					default, {
						activatedValue: this.getActivatedStyleValue("fontsize"),
						key: "FontSizeBtn",
						onToggle: t.onToggle
					})), r.push(c.
					default.createElement(w.
					default, {
						activatedValue: this.getActivatedStyleValue("backcolor"),
						key: "FontBgColorBtn",
						onToggle: t.onToggle
					})), r.push(c.
					default.createElement(y.
					default, {
						key: "AddLinkButton"
					})), f.
					default.each(a, function(n) {
						var a = "align-" + e.getActivatedStyleValue("justify"),
							o = c.
						default.createElement(m.
						default, {
							key: n.iconFontClass,
							active: n.style === a,
							iconFontClass: n.iconFontClass,
							onToggle: t.onToggle,
							style: n.style
						});
						r.push(o)
					}), c.
					default.createElement("div", {
						className: "RichEditor-controls"
					}, r)
				}
			}]), t
		}(c.
		default.Component);
	C.propTypes = {
		onToggle: c.
		default.PropTypes.func
	}, C.defaultProps = {
		onToggle: function() {}
	}, t.
	default = C
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(63),
		f = a(s);
	n(468);
	var d = (0, s.getKeysByStyleName)("backgroundColor").map(function(e) {
		return {
			style: e
		}
	}),
		p = function(e) {
			function t() {
				r(this, t);
				var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return e.onClick = e.onClick.bind(e), e
			}
			return l(t, e), i(t, [{
				key: "getColorValue",
				value: function(e) {
					return f.
					default [e].backgroundColor
				}
			}, {
				key: "onClick",
				value: function(e) {
					this.props.onToggle(e.target.getAttribute("data-styleKey"))
				}
			}, {
				key: "render",
				value: function() {
					var e = this;
					return c.
					default.createElement("span", {
						className: "RichEditor-styleButton font-bg-color-btn"
					}, c.
					default.createElement("span", {
						onClick: this.openSetSize
					}, c.
					default.createElement("i", {
						className: "icon beauty-iconfont beauty-ic_format_color_fill_px"
					})), c.
					default.createElement("ul", {
						onClick: this.onClick
					}, d.map(function(t, n) {
						var a = "",
							r = e.getColorValue(t.style);
						return e.props.activatedValue === r && (a = "font-bg-color-btn-item-actived"), c.
						default.createElement("li", {
							key: n,
							className: a,
							"data-styleKey": t.style,
							style: {
								backgroundColor: r
							}
						})
					})))
				}
			}]), t
		}(c.
		default.Component);
	p.propTypes = {
		onToggle: c.
		default.PropTypes.func,
		activatedValue: c.
		default.PropTypes.string
	}, p.defaultProps = {
		onToggle: function() {},
		activatedValue: ""
	}, t.
	default = p
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(63),
		f = a(s);
	n(469);
	var d = (0, s.getKeysByStyleName)("color").map(function(e) {
		return {
			style: e
		}
	}),
		p = function(e) {
			function t() {
				r(this, t);
				var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return e.onClick = e.onClick.bind(e), e
			}
			return l(t, e), i(t, [{
				key: "getColorValue",
				value: function(e) {
					return f.
					default [e].color
				}
			}, {
				key: "onClick",
				value: function(e) {
					this.props.onToggle(e.target.getAttribute("data-styleKey"))
				}
			}, {
				key: "render",
				value: function() {
					var e = this;
					return c.
					default.createElement("span", {
						className: "RichEditor-styleButton font-color-btn"
					}, c.
					default.createElement("span", null, c.
					default.createElement("i", {
						className: "icon beauty-iconfont beauty-ic_format_color_text_px"
					})), c.
					default.createElement("ul", {
						onClick: this.onClick
					}, d.map(function(t, n) {
						var a = "",
							r = e.getColorValue(t.style);
						return e.props.activatedValue === r && (a = "font-color-btn-item-actived"), c.
						default.createElement("li", {
							key: n,
							className: a,
							"data-styleKey": t.style,
							style: {
								backgroundColor: r
							}
						})
					})))
				}
			}]), t
		}(c.
		default.Component);
	p.propTypes = {
		onToggle: c.
		default.PropTypes.func,
		activatedValue: c.
		default.PropTypes.string
	}, p.defaultProps = {
		onToggle: function() {},
		activatedValue: ""
	}, t.
	default = p
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(63),
		f = a(s);
	n(470);
	var d = (0, s.getKeysByStyleName)("fontSize").map(function(e) {
		return {
			style: e
		}
	}),
		p = function(e) {
			function t() {
				r(this, t);
				var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return e.onClick = e.onClick.bind(e), e
			}
			return l(t, e), i(t, [{
				key: "getSizeValue",
				value: function(e) {
					return f.
					default [e].fontSize
				}
			}, {
				key: "onClick",
				value: function(e) {
					this.props.onToggle(e.target.getAttribute("data-styleKey"))
				}
			}, {
				key: "render",
				value: function() {
					var e = this;
					return c.
					default.createElement("span", {
						className: "RichEditor-styleButton font-size-btn",
						ref: "btn"
					}, c.
					default.createElement("span", {
						onClick: this.openSetSize
					}, c.
					default.createElement("i", {
						className: "icon beauty-iconfont beauty-ic_format_size_px"
					})), c.
					default.createElement("ul", {
						onClick: this.onClick
					}, d.map(function(t, n) {
						var a = "",
							r = e.getSizeValue(t.style);
						return e.props.activatedValue === r && (a = "font-size-btn-item-actived"), c.
						default.createElement("li", {
							key: n,
							className: a,
							"data-styleKey": t.style
						}, r)
					})))
				}
			}]), t
		}(c.
		default.Component);
	p.propTypes = {
		onToggle: c.
		default.PropTypes.func,
		activatedValue: c.
		default.PropTypes.string
	}, p.defaultProps = {
		onToggle: function() {},
		activatedValue: ""
	}, t.
	default = p
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function r(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		i = n(0),
		u = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(i),
		c = function(e) {
			function t() {
				a(this, t);
				var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return e.onToggle = function(t) {
					t.preventDefault(), e.props.onToggle(e.props.style)
				}, e
			}
			return o(t, e), l(t, [{
				key: "render",
				value: function() {
					var e = "RichEditor-styleButton";
					return this.props.active && (e += " RichEditor-activeButton"), u.
					default.createElement("span", {
						className: e,
						onClick: this.onToggle
					}, u.
					default.createElement("i", {
						className: "icon beauty-iconfont " + this.props.iconFontClass
					}))
				}
			}]), t
		}(u.
		default.Component);
	c.propTypes = {
		onToggle: u.
		default.PropTypes.func,
		iconFontClass: u.
		default.PropTypes.string,
		style: u.
		default.PropTypes.string
	}, c.defaultProps = {
		onToggle: function() {},
		iconFontClass: "",
		style: ""
	}, t.
	default = c
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	function i(e) {
		return !!window.getComputedStyle(e).getPropertyValue("display").match(/^block|list|row/)
	}
	function u(e) {
		var t = [];
		return function e(n) {
			v.
			default.each(n, function(n) {
				n.childNodes.length > 0 ? e(n.childNodes) : t.push(n)
			})
		}(e), t
	}
	function c(e) {
		return i(e.parentNode) ? e.parentNode : c(e.parentNode)
	}
	function s(e) {
		v.
		default.each(e, function(e) {
			return e.nearestBlockAncestor = c(e)
		});
		for (var t = function(e, t) {
			return e && t && "#text" === e.nodeName && "#text" === t.nodeName && e.nearestBlockAncestor && e.nearestBlockAncestor === t.nearestBlockAncestor ? (e.textContent += t.textContent, e) : null
		}, n = 0, a = void 0, r = void 0, o = void 0, l = void 0, i = [], u = e.length; n < u;) {
			if (a = e[n], l = n + 1, !1 == !! (r = e[l])) {
				i.push(a);
				break
			}
			for (o = t(a, r); null !== o;) l++, n = l - 1, a = o, r = e[l], o = t(a, r);
			i.push(a), n++
		}
		return i
	}
	function f(e) {
		var t = [],
			n = !1,
			a = void 0;
		return v.
		default.each(e, function(e) {
			"BR" === e.nodeName && !n && a && "BR" !== a.nodeName ? n = !0 : (t.push(e), n = !1), a = e
		}), t
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var d = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		p = n(0),
		h = a(p),
		m = n(5),
		v = a(m),
		y = n(39),
		b = a(y);
	n(478);
	var g = n(81),
		E = n(83),
		w = n(82),
		_ = a(w),
		N = n(80),
		C = a(N),
		O = n(368),
		T = a(O);
	n(467);
	var k = function() {
		var e = 0;
		return function() {
			return "iframeId-" + e++
		}
	}(),
		P = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.ue = null, n.onChangeCallback = n.onChangeCallback.bind(n), n.dropEventHandler = n.dropEventHandler.bind(n), n.afterPasteCallback = n.afterPasteCallback.bind(n), n.pasteImage = n.pasteImage.bind(n), n
			}
			return l(t, e), d(t, [{
				key: "getInstance",
				value: function() {
					return this.ue
				}
			}, {
				key: "generateTextHTML",
				value: function(e) {
					return '<p class="text-block">' + (0, b.
					default)("<div>").text(e).html() + "</p>"
				}
			}, {
				key: "generateImageHTML",
				value: function(e) {
					return '<p class="image-block" style="padding-bottom: 14px"><img style="max-width: 640px; display: block; margin: 0 auto;" src="' + e.url + '" ></p>'
				}
			}, {
				key: "generateProductHTML",
				value: function(e) {
					var t = "/iframes/product-iframe.html?",
						n = k();
					t += "iframeId=" + n + "&", e.id && (t += "productid=" + e.id), e.sku && e.sku.id && (t += "&productskuid=" + e.sku.id);
					var a = e.coverImg || e.coverUrl;
					a || (a = g.DEFAULT_PRODUCT_URL), a += "?imageView&thumbnail=110y110", t += "&cover=" + a, (e.calculatedName || e.name) && (t += "&productname=" + encodeURIComponent(e.calculatedName || e.name)), e.calculatedSkuName && (t += "&skuname=" + encodeURIComponent(e.calculatedSkuName));
					var r = '<iframe class="product-iframe" scrolling="no" frameborder="0" unselectable="on" id="' + n + '" src="' + t + '"';
					return e.id ? r += ' product-id="' + e.id + '"' + (e.sku && e.sku.id ? ' sku-id="' + e.sku.id + '"' : "") : (r += ' brand-name="' + encodeURIComponent(e.brandName.replace(/"/g, '\\"')) + '" product-name="' + encodeURIComponent(e.productName.replace(/"/g, '\\"')) + '"', e.colorOrTypeName && (r += ' color-or-type-name="' + encodeURIComponent(e.colorOrTypeName.replace(/"/g, '\\"')) + '"')), r += ' product-json="' + encodeURIComponent(JSON.stringify(e)) + '"', '<p class="product-block">' + (r += " ></iframe>") + "</p>"
				}
			}, {
				key: "insertImage",
				value: function(e) {
					var t = this.generateImageHTML(e);
					this.ue.execCommand("inserthtml", t), this.cleanZeroWidthSpace()
				}
			}, {
				key: "insertProduct",
				value: function(e) {
					var t = this.generateProductHTML(e);
					this.ue.execCommand("inserthtml", t), this.cleanZeroWidthSpace()
				}
			}, {
				key: "insertLink",
				value: function(e) {
					this.ue.execCommand("inserthtml", '<a target="_blank" href="' + e.href + '">' + e.text + "</a>")
				}
			}, {
				key: "cleanZeroWidthSpace",
				value: function() {
					var e = this.editorIframe.contentDocument.body,
						t = [].slice.call(e.getElementsByClassName("image-block")).concat([].slice.call(e.getElementsByClassName("product-block")));
					v.
					default.each(t, function(e) {
						v.
						default.each(e.childNodes, function(e) {
							"#text" === e.nodeName && (e.textContent = e.textContent.replace(/\u200B/g, ""))
						})
					})
				}
			}, {
				key: "isProductIframeExists",
				value: function(e, t) {
					function n(e, t) {
						if (!v.
						default.isObject(e) || !v.
						default.isObject(t)) return !1;
						var n = {
							id: e.id,
							calculatedName: e.calculatedName || "",
							calculatedSkuName: e.calculatedSkuName || ""
						}, a = {
							id: t.id,
							calculatedName: t.calculatedName || "",
							calculatedSkuName: t.calculatedSkuName || ""
						};
						return n.id + n.calculatedName + n.calculatedSkuName === a.id + a.calculatedName + a.calculatedSkuName
					}
					var a = (0, b.
					default)("<div>" + e.getContent() + "</div>")[0],
						r = u(a.childNodes);
					return v.
					default.some(r, function(e) {
						if ("IFRAME" === e.tagName) {
							var a = decodeURIComponent(e.getAttribute("product-json")),
								r = void 0;
							try {
								r = JSON.parse(a)
							} catch (e) {}
							return n(r, t)
						}
						return !1
					})
				}
			}, {
				key: "onChangeCallback",
				value: function() {
					var e = this,
						t = [{
							cmd: "bold",
							queryMethod: "queryCommandState",
							value: 0
						}, {
							cmd: "italic",
							queryMethod: "queryCommandState",
							value: 0
						}, {
							cmd: "underline",
							queryMethod: "queryCommandState",
							value: 0
						}, {
							cmd: "forecolor",
							queryMethod: "queryCommandValue",
							value: ""
						}, {
							cmd: "fontsize",
							queryMethod: "queryCommandValue",
							value: ""
						}, {
							cmd: "backcolor",
							queryMethod: "queryCommandValue",
							value: ""
						}, {
							cmd: "justify",
							queryMethod: "queryCommandValue",
							value: ""
						}];
					this.ue && (v.
					default.each(t, function(t) {
						t.value = e.ue[t.queryMethod](t.cmd)
					}), _.
					default.trigger("range-state-change", t)), this.props.onChange && this.props.onChange(this.ue)
				}
			}, {
				key: "afterPasteCallback",
				value: function(e, t) {
					var n = this;
					C.
					default.show(), this.ue.execCommand("undo");
					var a = [],
						r = (0, b.
						default)('<div style="display:none;">' + t.html + "</div>")[0];
					document.body.appendChild(r), v.
					default.each(r.childNodes, function(e) {
						if ("#text" === e.nodeName) return void a.push(n.generateTextHTML(e.textContent));
						var t = u(e.childNodes);
						t = s(t), t = f(t), v.
						default.each(t, function(e) {
							if ("NOSCRIPT" !== e.parentNode.nodeName) if ("#text" === e.nodeName) a.push(n.generateTextHTML(e.textContent));
							else if ("IMG" === e.nodeName) a.push(n.generateImageHTML({
								url: e.src
							}));
							else if ("IFRAME" === e.nodeName) {
								var t = e.getAttribute("product-json");
								t = JSON.parse(decodeURIComponent(t)), n.isProductIframeExists(n.ue, t) || a.push('<p class="product-block">' + e.outerHTML + "</p>")
							} else a.push('<p class="unhandled-block">' + e.outerHTML + "</p>")
						})
					}), document.body.removeChild(r), a = a.join(""), this.grabImageUrl(a).then(function(e) {
						e.fail && T.
						default.alert("有" + e.fail + "张图片上传失败，请检查后重新上传"), n.ue.execCommand("inserthtml", e.html), n.autoHeighten(), C.
						default.close()
					}).
					catch (function(e) {
						T.
						default.alert("操作失败，请重新复制图文"), C.
						default.close()
					})
				}
			}, {
				key: "grabImageUrl",
				value: function(e) {
					var t = (0, b.
					default)("<div>" + e + "</div>")[0],
						n = v.
					default.filter([].slice.call(t.querySelectorAll("img")), function(e) {
						var t = ["127.net"];
						return v.
						default.every(t, function(t) {
							e.src.indexOf(t)
						})
					}), a = [];
					return v.
					default.each(n, function(e) {
						var t = (0, E.request)({
							url: "/newApi/ms/uploadimage?src=" + encodeURIComponent(e.src)
						}).then(function(t) {
							return t && 200 === t.code ? (t.result.img = e, t.result) : {
								img: e
							}
						}).
						catch (function() {
							return {
								img: e
							}
						});
						a.push(t)
					}), Promise.all(a).then(function(e) {
						var n = 0;
						return v.
						default.each(e, function(e) {
							e && e.newSrc ? e.img.src = e.newSrc : e && e.img && ((0, b.
							default)(e.img).remove(), n++)
						}), {
							fail: n,
							html: t.innerHTML
						}
					}).
					catch (function(e) {
						throw e
					})
				}
			}, {
				key: "dropEventHandler",
				value: function(e) {
					var t = this,
						n = void 0,
						a = void 0,
						r = void 0,
						o = void 0;
					if ("drop" === e.type) {
						n = new FormData, r = e.dataTransfer.files;
						var l = 0,
							i = r.length;
						if (0 === i) return;
						for (; l < i;) n.append("file" + l, r[l]), l++;
						a = new XMLHttpRequest;
						a.open("post", "/newApi/ms/upload/img/detail?size=20480&ext=JPG,JPEG,PNG,GIF,BMP", !0), a.onreadystatechange = function() {
							if (4 === a.readyState) if (a.status >= 200 && a.status < 300 || 304 === a.status) {
								try {
									o = JSON.parse(a.responseText)
								} catch (e) {
									o = {}
								}
								200 === o.code ? t.insertImage({
									url: o.result.url
								}) : T.
								default.alert("上传图片失败")
							} else T.
							default.alert("上传图片失败")
						}, a.send(n)
					}
				}
			}, {
				key: "pasteImage",
				value: function(e) {
					var t = this;
					e && e.clipboardData && v.
					default.each(e.clipboardData.items, function(e, n) {
						if (e.type.match(/image/)) {
							var a = new FormData,
								r = e.getAsFile(),
								o = e.type.match(/image\/(.*)/)[1];
							a.append("blob", r, "file" + n + "." + o);
							var l = void 0,
								i = new XMLHttpRequest;
							i.open("post", "/newApi/ms/upload/img/detail?size=20480&ext=JPG,JPEG,PNG,GIF,BMP", !0), i.onreadystatechange = function() {
								if (4 === i.readyState) if (i.status >= 200 && i.status < 300 || 304 === i.status) {
									try {
										l = JSON.parse(i.responseText)
									} catch (e) {
										l = {}
									}
									200 === l.code ? t.insertImage({
										url: l.result.url
									}) : T.
									default.alert("拷贝图片失败")
								} else T.
								default.alert("拷贝图片失败")
							}, i.send(a)
						}
					})
				}
			}, {
				key: "autoHeighten",
				value: function() {
					var e = document.getElementById("edui1_iframeholder"),
						t = this.editorIframe.contentDocument;
					v.
					default.each([].slice.call(t.images), function(n) {
						n.onload = function() {
							var n = t.body.scrollHeight;
							e.style.height = n + "px", t.body.style.height = n + "px"
						}
					})
				}
			}, {
				key: "componentDidMount",
				value: function() {
					var e = this;
					this.ue = UE.getEditor("editor-container", {
						toolbars: [],
						elementPathEnabled: !1,
						wordCount: !1,
						catchRemoteImageEnable: !1,
						initialFrameHeight: 483,
						enableContextMenu: !1,
						imageScaleEnabled: !1,
						autoHeightEnabled: !0,
						autoFloatEnabled: !1
					}), this.ue.addListener("selectionchange", this.onChangeCallback), this.ue.addListener("afterpaste", this.afterPasteCallback), _.
					default.on(this, "insert-link", function(t) {
						e.insertLink(t)
					}), this.ue.ready(function() {
						e.editorIframe = document.getElementById("editor-container").querySelector("iframe");
						var t = e.editorIframe.contentWindow;
						t.addEventListener("dragenter", e.dropEventHandler), t.addEventListener("dragover", e.dropEventHandler), t.addEventListener("drop", e.dropEventHandler), t.addEventListener("paste", e.pasteImage)
					})
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.ue.removeListener("selectionchange", this.onChangeCallback), this.ue.removeListener("afterpaste", this.afterPasteCallback), _.
					default.off(this, "insert-link")
				}
			}, {
				key: "render",
				value: function() {
					return h.
					default.createElement("div", {
						className: "RichEditor-root"
					}, h.
					default.createElement("div", {
						id: "editor-container",
						className: "RichEditor-editor",
						ref: "editor"
					}))
				}
			}]), t
		}(h.
		default.Component);
	P.propTypes = {
		onChange: h.
		default.PropTypes.func,
		content: h.
		default.PropTypes.string,
		richText: h.
		default.PropTypes.bool
	}, P.defaultProps = {
		onChange: function() {},
		content: "",
		richText: !1
	}, t.
	default = P
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(39),
		f = a(s),
		d = n(20),
		p = a(d);
	n(471);
	var h = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.fileChange = n.fileChange.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "fileChange",
			value: function(e) {
				if (e.target.value) {
					var t = this,
						n = this.props.options || {}, a = (0, f.
						default)(this.refs.form),
						r = n.minWidth || 0,
						o = n.minHeight || 0,
						l = n.maxSize || 20480;
					a.ajaxSubmit({
						type: "post",
						name: "file",
						url: "/newApi/ms/upload/img/detail?width=" + r + "&height=" + o + "&size=" + l + "&ext=JPG,JPEG,PNG,GIF,BMP",
						success: function(e) {
							if ("string" == typeof e) try {
								e = JSON.parse(e)
							} catch (e) {
								throw new Error(e)
							}
							a[0].reset(), 200 === e.code ? t.props.onChange(e.result) : p.
							default.alert(e.msg)
						},
						error: function(e) {
							if (a[0].reset(), 413 === e.status) return p.
							default.alert("上传图片最多20M哦~");
							p.
							default.alert("上传失败，请检查图片文件是否过大及文件格式")
						}
					})
				}
			}
		}, {
			key: "componentDidMount",
			value: function() {}
		}, {
			key: "render",
			value: function() {
				return c.
				default.createElement("div", {
					className: "web2-image-uploader"
				}, c.
				default.createElement("form", {
					ref: "form",
					method: "post",
					encType: "multipart/form-data"
				}, c.
				default.createElement("input", {
					type: "file",
					accept: "image/png, image/jpeg, image/gif, image/bmp",
					name: "image",
					onChange: this.fileChange
				})))
			}
		}]), t
	}(c.
	default.Component);
	h.propTypes = {
		options: c.
		default.PropTypes.object,
		onChange: c.
		default.PropTypes.func.isRequired
	}, h.defaultProps = {
		options: {
			minWidth: 0,
			minHeight: 0
		}
	}, t.
	default = h
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(23),
		f = a(s);
	n(475);
	var d = function(e) {
		function t(e) {
			r(this, t);
			var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.onClickOK = n.onClickOK.bind(n), n.onClickCancel = n.onClickCancel.bind(n), n
		}
		return l(t, e), i(t, [{
			key: "onClickOK",
			value: function() {
				this.props.onClickOK && this.props.onClickOK()
			}
		}, {
			key: "onClickCancel",
			value: function() {
				this.props.onClickCancel && this.props.onClickCancel()
			}
		}, {
			key: "render",
			value: function() {
				return c.
				default.createElement("div", {
					className: "web2-popup-msg-layer"
				}, c.
				default.createElement("div", {
					className: "web2-popup-msg-wrapper"
				}, c.
				default.createElement("div", {
					className: "web2-popup-msg-dialogue"
				}, c.
				default.createElement("div", {
					className: "web2-popup-msg-body"
				}, this.props.content), c.
				default.createElement("div", {
					className: "web2-popup-msg-footer"
				}, this.props.showCancel && c.
				default.createElement("button", {
					className: "web2-popup-msg-cancel-btn",
					onClick: this.onClickCancel
				}, "取 消"), c.
				default.createElement("button", {
					className: "web2-popup-msg-ok-btn",
					onClick: this.onClickOK
				}, "确 认")))))
			}
		}]), t
	}(c.
	default.Component);
	d.propTypes = {
		content: c.
		default.PropTypes.string.isRequired,
		showCancel: c.
		default.PropTypes.bool,
		onClickOK: c.
		default.PropTypes.func,
		onClickCancel: c.
		default.PropTypes.func
	}, d.defaultProps = {
		showCancel: !1,
		onClickOK: function() {},
		onClickCancel: function() {}
	}, t.
	default = d, d.alert = function(e) {
		var t = void 0,
			n = "",
			a = void 0,
			r = function() {
				f.
				default.unmountComponentAtNode(t), document.body.removeChild(t)
			};
		a = function() {
			r()
		}, "string" == typeof e ? n = e : (n = e.content || "", e.onClickOK && (a = function() {
			e.onClickOK(), r()
		})), t = document.createElement("div"), document.body.appendChild(t), f.
		default.render(c.
		default.createElement(d, {
			content: n,
			onClickOK: a
		}), t)
	}, d.confirm = function(e) {
		var t = void 0,
			n = "",
			a = void 0,
			r = void 0,
			o = function() {
				f.
				default.unmountComponentAtNode(t), document.body.removeChild(t)
			};
		a = function() {
			o()
		}, r = function() {
			o()
		}, "string" == typeof e ? n = e : (n = e.content || "", e.onClickOK && (a = function() {
			e.onClickOK(), o()
		}), e.onClickCancel && (r = function() {
			e.onClickCancel(), o()
		})), t = document.createElement("div"), document.body.appendChild(t), f.
		default.render(c.
		default.createElement(d, {
			showCancel: !0,
			content: n,
			onClickOK: a,
			onClickCancel: r
		}), t)
	}
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		u = n(0),
		c = a(u),
		s = n(3),
		f = n(248),
		d = a(f),
		p = n(137),
		h = a(p),
		m = n(394),
		v = function(e) {
			function t(e) {
				return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return l(t, e), i(t, [{
				key: "componentDidMount",
				value: function() {
					(0, m.initTracker)(this.props.user)
				}
			}, {
				key: "render",
				value: function() {
					var e = this.props.hasError;
					return c.
					default.createElement("div", null, e ? c.
					default.createElement(h.
					default, null) : this.props.children, c.
					default.createElement(d.
					default, null))
				}
			}]), t
		}(c.
		default.Component),
		y = function(e) {
			return {
				hasError: e.hasError,
				user: e.user.info
			}
		};
	t.
	default = (0, s.connect)(y)(v)
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function o(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function l(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.
	default = void 0;
	var i, u, c = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}(),
		s = n(0),
		f = a(s),
		d = n(622),
		p = a(d),
		h = n(507),
		m = a(h),
		v = n(506),
		y = a(v);
	n(411);
	var b = ["fullscreenchange", "msfullscreenchange", "mozfullscreenchange", "webkitfullscreenchange"],
		g = (u = i = function(e) {
			function t(e) {
				r(this, t);
				var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
				return n.state = {
					currentIndex: e.startIndex,
					thumbsTranslate: 0,
					offsetPercentage: 0,
					galleryWidth: 0,
					thumbnailsWrapperWidth: 0,
					thumbnailsWrapperHeight: 0,
					isFullscreen: !1,
					isPlaying: !1
				}, e.lazyLoad && (n._lazyLoaded = []), n
			}
			return l(t, e), c(t, [{
				key: "componentWillReceiveProps",
				value: function(e) {
					this.props.disableArrowKeys !== e.disableArrowKeys && (e.disableArrowKeys ? window.removeEventListener("keydown", this._handleKeyDown) : window.addEventListener("keydown", this._handleKeyDown)), !e.lazyLoad || this.props.lazyLoad && this.props.items === e.items || (this._lazyLoaded = [])
				}
			}, {
				key: "componentDidUpdate",
				value: function(e, t) {
					e.thumbnailPosition === this.props.thumbnailPosition && e.showThumbnails === this.props.showThumbnails && t.thumbnailsWrapperHeight === this.state.thumbnailsWrapperHeight && t.thumbnailsWrapperWidth === this.state.thumbnailsWrapperWidth || this._handleResize(), t.currentIndex !== this.state.currentIndex && (this.props.onSlide && this.props.onSlide(this.state.currentIndex), this._updateThumbnailTranslate(t)), e.slideDuration !== this.props.slideDuration && (this.slideToIndex = (0, m.
					default)(this._unthrottledSlideToIndex, this.props.slideDuration, {
						trailing: !1
					}))
				}
			}, {
				key: "componentWillMount",
				value: function() {
					this._unthrottledSlideToIndex = this.slideToIndex.bind(this), this.slideToIndex = (0, m.
					default)(this._unthrottledSlideToIndex, this.props.slideDuration, {
						trailing: !1
					}), this._handleResize = this._handleResize.bind(this), this._debounceResize = (0, y.
					default)(this._handleResize, 500), this._handleScreenChange = this._handleScreenChange.bind(this), this._handleKeyDown = this._handleKeyDown.bind(this), this._thumbnailDelay = 300
				}
			}, {
				key: "componentDidMount",
				value: function() {
					this._handleResize(), this.props.autoPlay && this.play(), this.props.disableArrowKeys || window.addEventListener("keydown", this._handleKeyDown), window.addEventListener("resize", this._debounceResize), this._onScreenChangeEvent()
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.props.disableArrowKeys || window.removeEventListener("keydown", this._handleKeyDown), this._debounceResize && window.removeEventListener("resize", this._debounceResize), this._offScreenChangeEvent(), this._intervalId && (window.clearInterval(this._intervalId), this._intervalId = null), this._resizeTimer && window.clearTimeout(this._resizeTimer)
				}
			}, {
				key: "play",
				value: function() {
					var e = this,
						t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					if (!this._intervalId) {
						var n = this.props,
							a = n.slideInterval,
							r = n.slideDuration;
						this.setState({
							isPlaying: !0
						}), this._intervalId = window.setInterval(function() {
							e.state.hovering || (e.props.infinite || e._canSlideRight() ? e.slideToIndex(e.state.currentIndex + 1) : e.pause())
						}, Math.max(a, r)), this.props.onPlay && t && this.props.onPlay(this.state.currentIndex)
					}
				}
			}, {
				key: "pause",
				value: function() {
					var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					this._intervalId && (window.clearInterval(this._intervalId), this._intervalId = null, this.setState({
						isPlaying: !1
					}), this.props.onPause && e && this.props.onPause(this.state.currentIndex))
				}
			}, {
				key: "setModalFullscreen",
				value: function(e) {
					this.setState({
						modalFullscreen: e
					}), this.props.onScreenChange && this.props.onScreenChange(e)
				}
			}, {
				key: "fullScreen",
				value: function() {
					var e = this._imageGallery;
					this.props.useBrowserFullscreen ? e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : this.setModalFullscreen(!0) : this.setModalFullscreen(!0), this.setState({
						isFullscreen: !0
					})
				}
			}, {
				key: "exitFullScreen",
				value: function() {
					this.state.isFullscreen && (this.props.useBrowserFullscreen ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : this.setModalFullscreen(!1) : this.setModalFullscreen(!1), this.setState({
						isFullscreen: !1
					}))
				}
			}, {
				key: "slideToIndex",
				value: function(e, t) {
					var n = this.state.currentIndex;
					t && this._intervalId && (this.pause(!1), this.play(!1));
					var a = this.props.items.length - 1,
						r = e;
					e < 0 ? r = a : e > a && (r = 0), this.setState({
						previousIndex: n,
						currentIndex: r,
						offsetPercentage: 0,
						style: {
							transition: "all " + this.props.slideDuration + "ms ease-out"
						}
					})
				}
			}, {
				key: "getCurrentIndex",
				value: function() {
					return this.state.currentIndex
				}
			}, {
				key: "_handleScreenChange",
				value: function() {
					var e = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
					this.props.onScreenChange && this.props.onScreenChange(e), this.setState({
						isFullscreen: !! e
					})
				}
			}, {
				key: "_onScreenChangeEvent",
				value: function() {
					var e = this;
					b.map(function(t) {
						document.addEventListener(t, e._handleScreenChange)
					})
				}
			}, {
				key: "_offScreenChangeEvent",
				value: function() {
					var e = this;
					b.map(function(t) {
						document.removeEventListener(t, e._handleScreenChange)
					})
				}
			}, {
				key: "_toggleFullScreen",
				value: function() {
					this.state.isFullscreen ? this.exitFullScreen() : this.fullScreen()
				}
			}, {
				key: "_togglePlay",
				value: function() {
					this._intervalId ? this.pause() : this.play()
				}
			}, {
				key: "_handleResize",
				value: function() {
					var e = this;
					this._resizeTimer = window.setTimeout(function() {
						e._imageGallery && e.setState({
							galleryWidth: e._imageGallery.offsetWidth
						}), e._setThumbsTranslate(-e._getThumbsTranslate(e.state.currentIndex > 0 ? 1 : 0) * e.state.currentIndex), e._imageGallerySlideWrapper && e.setState({
							gallerySlideWrapperHeight: e._imageGallerySlideWrapper.offsetHeight
						}), e._thumbnailsWrapper && (e._isThumbnailHorizontal() ? e.setState({
							thumbnailsWrapperHeight: e._thumbnailsWrapper.offsetHeight
						}) : e.setState({
							thumbnailsWrapperWidth: e._thumbnailsWrapper.offsetWidth
						}))
					}, 500)
				}
			}, {
				key: "_isThumbnailHorizontal",
				value: function() {
					var e = this.props.thumbnailPosition;
					return "left" === e || "right" === e
				}
			}, {
				key: "_handleKeyDown",
				value: function(e) {
					switch (parseInt(e.keyCode || e.which || 0)) {
						case 37:
							this._canSlideLeft() && !this._intervalId && this._slideLeft();
							break;
						case 39:
							this._canSlideRight() && !this._intervalId && this._slideRight()
					}
				}
			}, {
				key: "_handleMouseOverThumbnails",
				value: function(e) {
					var t = this;
					this.props.slideOnThumbnailHover && (this.setState({
						hovering: !0
					}), this._thumbnailTimer && (window.clearTimeout(this._thumbnailTimer), this._thumbnailTimer = null), this._thumbnailTimer = window.setTimeout(function() {
						t.slideToIndex(e)
					}, this._thumbnailDelay))
				}
			}, {
				key: "_handleMouseLeaveThumbnails",
				value: function() {
					this._thumbnailTimer && (window.clearTimeout(this._thumbnailTimer), this._thumbnailTimer = null, !0 === this.props.autoPlay && this.play(!1)), this.setState({
						hovering: !1
					})
				}
			}, {
				key: "_handleImageError",
				value: function(e) {
					this.props.defaultImage && -1 === e.target.src.indexOf(this.props.defaultImage) && (e.target.src = this.props.defaultImage)
				}
			}, {
				key: "_handleOnSwiped",
				value: function(e, t, n, a) {
					this.setState({
						isFlick: a
					})
				}
			}, {
				key: "_shouldSlideOnSwipe",
				value: function() {
					var e = Math.abs(this.state.offsetPercentage) > 30 || this.state.isFlick;
					return e && this.setState({
						isFlick: !1
					}), e
				}
			}, {
				key: "_handleOnSwipedTo",
				value: function(e) {
					var t = this.state.currentIndex;
					this._shouldSlideOnSwipe() && (t += e), e < 0 ? this._canSlideLeft() || (t = this.state.currentIndex) : this._canSlideRight() || (t = this.state.currentIndex), this._unthrottledSlideToIndex(t)
				}
			}, {
				key: "_handleSwiping",
				value: function(e, t, n) {
					var a = this.props.swipingTransitionDuration,
						r = this.state.galleryWidth,
						o = e * (n / r * 100);
					Math.abs(o) >= 100 && (o = 100 * e);
					var l = {
						transition: "transform " + a + "ms ease-out"
					};
					this.setState({
						offsetPercentage: o,
						style: l
					})
				}
			}, {
				key: "_canNavigate",
				value: function() {
					return this.props.items.length >= 2
				}
			}, {
				key: "_canSlideLeft",
				value: function() {
					return this.props.infinite || this.state.currentIndex > 0
				}
			}, {
				key: "_canSlideRight",
				value: function() {
					return this.props.infinite || this.state.currentIndex < this.props.items.length - 1
				}
			}, {
				key: "_updateThumbnailTranslate",
				value: function(e) {
					if (0 === this.state.currentIndex) this._setThumbsTranslate(0);
					else {
						var t = Math.abs(e.currentIndex - this.state.currentIndex),
							n = this._getThumbsTranslate(t);
						n > 0 && (e.currentIndex < this.state.currentIndex ? this._setThumbsTranslate(this.state.thumbsTranslate - n) : e.currentIndex > this.state.currentIndex && this._setThumbsTranslate(this.state.thumbsTranslate + n))
					}
				}
			}, {
				key: "_setThumbsTranslate",
				value: function(e) {
					this.setState({
						thumbsTranslate: e
					})
				}
			}, {
				key: "_getThumbsTranslate",
				value: function(e) {
					if (this.props.disableThumbnailScroll) return 0;
					var t = this.state,
						n = t.thumbnailsWrapperWidth,
						a = t.thumbnailsWrapperHeight,
						r = void 0;
					if (this._thumbnails) {
						if (this._isThumbnailHorizontal()) {
							if (this._thumbnails.scrollHeight <= a) return 0;
							r = this._thumbnails.scrollHeight - a
						} else {
							if (this._thumbnails.scrollWidth <= n) return 0;
							r = this._thumbnails.scrollWidth - n
						}
						return e * (r / (this._thumbnails.children.length - 1))
					}
				}
			}, {
				key: "_getAlignmentClassName",
				value: function(e) {
					var t = this.state.currentIndex,
						n = "";
					switch (e) {
						case t - 1:
							n = " left";
							break;
						case t:
							n = " center";
							break;
						case t + 1:
							n = " right"
					}
					return this.props.items.length >= 3 && this.props.infinite && (0 === e && t === this.props.items.length - 1 ? n = " right" : e === this.props.items.length - 1 && 0 === t && (n = " left")), n
				}
			}, {
				key: "_getTranslateXForTwoSlide",
				value: function(e) {
					var t = this.state,
						n = t.currentIndex,
						a = t.offsetPercentage,
						r = t.previousIndex,
						o = -100 * n,
						l = o + 100 * e + a;
					return a > 0 ? this.direction = "left" : a < 0 && (this.direction = "right"), 0 === n && 1 === e && a > 0 ? l = -100 + a : 1 === n && 0 === e && a < 0 && (l = 100 + a), n !== r ? 0 === r && 0 === e && 0 === a && "left" === this.direction ? l = 100 : 1 === r && 1 === e && 0 === a && "right" === this.direction && (l = -100) : 0 === n && 1 === e && 0 === a && "left" === this.direction ? l = -100 : 1 === n && 0 === e && 0 === a && "right" === this.direction && (l = 100), l
				}
			}, {
				key: "_getThumbnailBarHeight",
				value: function() {
					return this._isThumbnailHorizontal() ? {
						height: this.state.gallerySlideWrapperHeight
					} : {}
				}
			}, {
				key: "_getSlideStyle",
				value: function(e) {
					var t = this.state,
						n = t.currentIndex,
						a = t.offsetPercentage,
						r = this.props,
						o = r.infinite,
						l = r.items,
						i = l.length - 1,
						u = 1;
					e === n ? u = 3 : e === this.state.previousIndex ? u = 2 : 0 !== e && e !== i || (u = 0), o && l.length, o && 2 === l.length && this._getTranslateXForTwoSlide(e);
					return {
						zIndex: u
					}
				}
			}, {
				key: "_getThumbnailStyle",
				value: function() {
					var e = void 0,
						t = void 0;
					return this._isThumbnailHorizontal() ? (e = "translate3d(0, " + this.state.thumbsTranslate + "px, 0)", t = "translate(0, " + this.state.thumbsTranslate + "px)") : (e = "translate3d(" + this.state.thumbsTranslate + "px, 0, 0)", t = "translate(" + this.state.thumbsTranslate + "px, 0)"), {
						WebkitTransform: e,
						MozTransform: e,
						msTransform: t,
						OTransform: e,
						transform: e
					}
				}
			}, {
				key: "_slideLeft",
				value: function(e) {
					t.trace("moveCarousel"), this.slideToIndex(this.state.currentIndex - 1, e)
				}
			}, {
				key: "_slideRight",
				value: function(e) {
					t.trace("moveCarousel"), this.slideToIndex(this.state.currentIndex + 1, e)
				}
			}, {
				key: "_renderItem",
				value: function(e) {
					var t = this.props.onImageError || this._handleImageError;
					return f.
					default.createElement("div", {
						className: "image-gallery-image"
					}, f.
					default.createElement("img", {
						src: e.original,
						alt: e.originalAlt,
						srcSet: e.srcSet,
						sizes: e.sizes,
						onLoad: this.props.onImageLoad,
						onError: t.bind(this)
					}), e.description && f.
					default.createElement("span", {
						className: "image-gallery-description"
					}, e.description))
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = this.state,
						n = t.currentIndex,
						a = t.isFullscreen,
						r = t.modalFullscreen,
						o = t.isPlaying,
						l = this._getThumbnailStyle(),
						i = this.props.thumbnailPosition,
						u = this._slideLeft.bind(this),
						c = this._slideRight.bind(this),
						s = [],
						d = [],
						h = [];
					this.props.items.map(function(t, a) {
						var r = e._getAlignmentClassName(a),
							o = t.originalClass ? " " + t.originalClass : "",
							l = t.thumbnailClass ? " " + t.thumbnailClass : "",
							i = t.renderItem || e.props.renderItem || e._renderItem.bind(e),
							u = !e.props.lazyLoad || r || e._lazyLoaded[a];
						u && e.props.lazyLoad && (e._lazyLoaded[a] = !0);
						var c = f.
						default.createElement("div", {
							key: a,
							className: "image-gallery-slide" + r + o,
							style: e._getSlideStyle(a),
							onClick: e.props.onClick
						}, u ? i(t) : f.
						default.createElement("div", {
							style: {
								height: "100%"
							}
						}));
						s.push(c);
						var p = e._handleImageError;
						e.props.onThumbnailError && (p = e.props.onThumbnailError), e.props.showThumbnails && d.push(f.
						default.createElement("a", {
							onMouseOver: e._handleMouseOverThumbnails.bind(e, a),
							onMouseLeave: e._handleMouseLeaveThumbnails.bind(e, a),
							key: a,
							role: "button",
							"aria-pressed": n === a ? "true" : "false",
							"aria-label": "Go to Slide " + (a + 1),
							className: "image-gallery-thumbnail" + (n === a ? " active" : "") + l,
							onClick: function(t) {
								return e.slideToIndex.call(e, a, t)
							}
						}, f.
						default.createElement("img", {
							src: t.thumbnail,
							alt: t.thumbnailAlt,
							onError: p.bind(e)
						}), f.
						default.createElement("div", {
							className: "image-gallery-thumbnail-label"
						}, t.thumbnailLabel))), e.props.showBullets && h.push(f.
						default.createElement("button", {
							key: a,
							type: "button",
							className: "image-gallery-bullet " + (n === a ? "active" : ""),
							onClick: function(t) {
								return e.slideToIndex.call(e, a, t)
							},
							"aria-pressed": n === a ? "true" : "false",
							"aria-label": "Go to Slide " + (a + 1)
						}))
					});
					var m = f.
					default.createElement("div", {
						ref: function(t) {
							return e._imageGallerySlideWrapper = t
						},
						className: "image-gallery-slide-wrapper " + i
					}, this.props.renderCustomControls && this.props.renderCustomControls(), this.props.showFullscreenButton && this.props.renderFullscreenButton(this._toggleFullScreen.bind(this), a), this.props.showPlayButton && this.props.renderPlayPauseButton(this._togglePlay.bind(this), o), this._canNavigate() ? [this.props.showNav && f.
					default.createElement("span", {
						key: "navigation"
					}, this.props.renderLeftNav(u, !this._canSlideLeft()), this.props.renderRightNav(c, !this._canSlideRight())), this.props.disableSwipe ? f.
					default.createElement("div", {
						className: "image-gallery-slides",
						key: "slides"
					}, s) : f.
					default.createElement(p.
					default, {
						className: "image-gallery-swipe",
						key: "swipeable",
						delta: 1,
						onSwipingLeft: this._handleSwiping.bind(this, -1),
						onSwipingRight: this._handleSwiping.bind(this, 1),
						onSwiped: this._handleOnSwiped.bind(this),
						onSwipedLeft: this._handleOnSwipedTo.bind(this, 1),
						onSwipedRight: this._handleOnSwipedTo.bind(this, -1)
					}, f.
					default.createElement("div", {
						className: "image-gallery-slides"
					}, s))] : f.
					default.createElement("div", {
						className: "image-gallery-slides"
					}, s), this.props.showBullets && f.
					default.createElement("div", {
						className: "image-gallery-bullets"
					}, f.
					default.createElement("ul", {
						className: "image-gallery-bullets-container",
						role: "navigation",
						"aria-label": "Bullet Navigation"
					}, h)), this.props.showIndex && f.
					default.createElement("div", {
						className: "image-gallery-index"
					}, f.
					default.createElement("span", {
						className: "image-gallery-index-current"
					}, this.state.currentIndex + 1), f.
					default.createElement("span", {
						className: "image-gallery-index-separator"
					}, this.props.indexSeparator), f.
					default.createElement("span", {
						className: "image-gallery-index-total"
					}, this.props.items.length)));
					return f.
					default.createElement("section", {
						ref: function(t) {
							return e._imageGallery = t
						},
						className: "image-gallery" + (r ? " fullscreen-modal" : ""),
						"aria-live": "polite"
					}, f.
					default.createElement("div", {
						className: "image-gallery-content" + (a ? " fullscreen" : "")
					}, ("bottom" === i || "right" === i) && m, this.props.showThumbnails && f.
					default.createElement("div", {
						className: "image-gallery-thumbnails-wrapper " + i,
						style: this._getThumbnailBarHeight()
					}, f.
					default.createElement("div", {
						className: "image-gallery-thumbnails",
						ref: function(t) {
							return e._thumbnailsWrapper = t
						}
					}, f.
					default.createElement("div", {
						ref: function(t) {
							return e._thumbnails = t
						},
						className: "image-gallery-thumbnails-container",
						style: l,
						role: "navigation",
						"aria-label": "Thumbnail Navigation"
					}, d))), ("top" === i || "left" === i) && m))
				}
			}], [{
				key: "trace",
				value: function(e) {
					var t = void 0,
						n = void 0; - 1 !== window.location.pathname.indexOf("product") && (t = "Product", n = "product", window.$eventTrace({
						category: t,
						action: e,
						eventLabel: n
					}))
				}
			}]), t
		}(f.
		default.Component), i.propTypes = {
			items: f.
			default.PropTypes.array.isRequired,
			showNav: f.
			default.PropTypes.bool,
			autoPlay: f.
			default.PropTypes.bool,
			lazyLoad: f.
			default.PropTypes.bool,
			infinite: f.
			default.PropTypes.bool,
			showIndex: f.
			default.PropTypes.bool,
			showBullets: f.
			default.PropTypes.bool,
			showThumbnails: f.
			default.PropTypes.bool,
			showPlayButton: f.
			default.PropTypes.bool,
			showFullscreenButton: f.
			default.PropTypes.bool,
			slideOnThumbnailHover: f.
			default.PropTypes.bool,
			disableThumbnailScroll: f.
			default.PropTypes.bool,
			disableArrowKeys: f.
			default.PropTypes.bool,
			disableSwipe: f.
			default.PropTypes.bool,
			useBrowserFullscreen: f.
			default.PropTypes.bool,
			defaultImage: f.
			default.PropTypes.string,
			indexSeparator: f.
			default.PropTypes.string,
			thumbnailPosition: f.
			default.PropTypes.string,
			startIndex: f.
			default.PropTypes.number,
			slideDuration: f.
			default.PropTypes.number,
			slideInterval: f.
			default.PropTypes.number,
			swipingTransitionDuration: f.
			default.PropTypes.number,
			onSlide: f.
			default.PropTypes.func,
			onScreenChange: f.
			default.PropTypes.func,
			onPause: f.
			default.PropTypes.func,
			onPlay: f.
			default.PropTypes.func,
			onClick: f.
			default.PropTypes.func,
			onImageLoad: f.
			default.PropTypes.func,
			onImageError: f.
			default.PropTypes.func,
			onThumbnailError: f.
			default.PropTypes.func,
			renderCustomControls: f.
			default.PropTypes.func,
			renderLeftNav: f.
			default.PropTypes.func,
			renderRightNav: f.
			default.PropTypes.func,
			renderPlayPauseButton: f.
			default.PropTypes.func,
			renderFullscreenButton: f.
			default.PropTypes.func,
			renderItem: f.
			default.PropTypes.func
		}, i.defaultProps = {
			items: [],
			showNav: !0,
			autoPlay: !1,
			lazyLoad: !1,
			infinite: !0,
			showIndex: !1,
			showBullets: !1,
			showThumbnails: !0,
			showPlayButton: !0,
			showFullscreenButton: !0,
			slideOnThumbnailHover: !1,
			disableThumbnailScroll: !1,
			disableArrowKeys: !1,
			disableSwipe: !1,
			useBrowserFullscreen: !0,
			indexSeparator: " / ",
			thumbnailPosition: "bottom",
			startIndex: 0,
			slideDuration: 450,
			swipingTransitionDuration: 0,
			slideInterval: 3e3,
			renderLeftNav: function(e, t) {
				return f.
				default.createElement("button", {
					type: "button",
					className: "image-gallery-left-nav",
					disabled: t,
					onClick: e,
					"aria-label": "Previous Slide"
				})
			},
			renderRightNav: function(e, t) {
				return f.
				default.createElement("button", {
					type: "button",
					className: "image-gallery-right-nav",
					disabled: t,
					onClick: e,
					"aria-label": "Next Slide"
				})
			},
			renderPlayPauseButton: function(e, t) {
				return f.
				default.createElement("button", {
					type: "button",
					className: "image-gallery-play-button" + (t ? " active" : ""),
					onClick: e,
					"aria-label": "Play or Pause Slideshow"
				})
			},
			renderFullscreenButton: function(e, t) {
				return f.
				default.createElement("button", {
					type: "button",
					className: "image-gallery-fullscreen-button" + (t ? " active" : ""),
					onClick: e,
					"aria-label": "Open Fullscreen"
				})
			}
		}, u);
	t.
	default = g
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e) {
		var t, n, a = {
			trunkSize: 4194304,
			urlDns: "http://wanproxy.127.net/lbs",
			fileInputId: "fileInput",
			fileUploadId: "fileUpload",
			fileExts: ["JPG", "PNG", "WMV", "ASF", "AVI", "3GP", "MKV", "MP4", "DVD", "OGM", "MOV", "MPG", "MPEG", "MPE", "FLV", "F4V", "SWF", "M4V", "QT", "DAT", "VOB", "RMVB", "RM", "OGM", "M2TS", "MTS", "TS", "TP", "WEBM"],
			getInitInfo: function(e, n) {
				var a;
				a = localStorage.getItem(e.fileKey + "_context"), a ? n({
					bucketName: localStorage.getItem(e.fileKey + "_bucket"),
					objectName: localStorage.getItem(e.fileKey + "_object"),
					nosToken: localStorage.getItem(e.fileKey + "_xNosToken")
				}) : l.
				default.ajax({
					type: "post",
					url: "https://vcloud.163.com/app/vod/upload/init",
					data: JSON.stringify({
						originFileName: e.file.name,
						userFileName: e.file.name,
						typeId: null,
						presetId: null,
						callbackUrl: null,
						description: null
					}),
					headers: {
						AppKey: "",
						Nonce: "",
						CurTime: "",
						CheckSum: ""
					},
					dataType: "json",
					contentType: "application/json",
					success: function(a, r, o) {
						200 === a.code ? (localStorage.setItem(e.fileKey + "_bucket", a.ret.bucket), localStorage.setItem(e.fileKey + "_object", a.ret.object), localStorage.setItem(e.fileKey + "_xNosToken", a.ret.xNosToken), n({
							bucketName: a.ret.bucket,
							objectName: a.ret.object,
							nosToken: a.ret.xNosToken
						})) : t.onError({
							errCode: a.Code,
							errMsg: a.msg
						})
					},
					error: function(e, n, a) {
						t.onError(a)
					}
				})
			},
			onError: function(e) {},
			onProgress: function(e) {},
			onUploaded: function(e) {
				n.successList.push(e), l.
				default.ajax({
					type: "post",
					url: "https://vcloud.163.com/app/vod/video/query",
					data: JSON.stringify({
						objectNames: [e.objectName]
					}),
					dataType: "json",
					contentType: "application/json",
					headers: {
						AppKey: "",
						Nonce: "",
						CurTime: "",
						CheckSum: ""
					},
					success: function(e, n, a) {
						200 === e.code || t.onError({
							errCode: e.Code,
							errMsg: e.msg
						})
					},
					error: function(e, n, a) {
						t.onError(a)
					}
				})
			},
			onAllUploaded: function() {},
			onAdd: function(e) {},
			noUploadFn: function() {},
			existFn: function() {},
			mismatchFn: function() {
				(0, l.
				default)("#progressInfo").html("不是有效的视频或图片格式")
			}
		};
		return t = l.
		default.extend({}, a, e), n = {
			fileList: [],
			successList: [],
			dnsList: null,
			getDNS: function(e, t) {
				return t(["https://nosup-hz1.127.net"])
			},
			removeFile: function(e) {
				l.
				default.each(n.fileList, function(t, a) {
					if (a.fileKey === e.fileKey) return a.xhr && (a.xhr.upload.onprogress = l.
					default.noop, a.xhr.onreadystatechange = l.
					default.noop, a.xhr.abort(), a.xhr = null), n.fileList.splice(t, 1), 1 === a.status && n.upload(t), !1
				})
			},
			getFile: function(e) {
				var t;
				return l.
				default.each(n.fileList, function(n, a) {
					if (a.fileKey === e) return t = a, !1
				}), t
			},
			uploadTrunk: function(e, a, r) {
				var o, i, u, c = "";
				i = n.getFile(a.fileKey), u = localStorage.getItem(a.fileKey + "_context"), i.xhr ? o = i.xhr : (o = new XMLHttpRequest, i.xhr = o), o.upload.onprogress = function(e) {
					var n = 0;
					e.lengthComputable ? (n = (a.offset + e.loaded) / a.file.size, i.progress = (100 * n).toFixed(2), n > 0 && n < 1 ? i.status = 1 : 1 === n && (i.status = 2), localStorage.setItem(a.fileKey + "_progress", i.progress), t.onProgress(i)) : t.onError({
						errCode: 501,
						errMsg: "浏览器不支持进度事件"
					})
				}, o.onreadystatechange = function() {
					if (4 === o.readyState) {
						var i;
						try {
							i = JSON.parse(o.responseText)
						} catch (e) {
							i = {
								errCode: 500,
								errMsg: "未知错误"
							}
						}
						200 === o.status ? i.errCode ? (n.clearStorage(a.fileKey), t.onError({
							errCode: i.errCode,
							errMsg: i.errMsg
						})) : (localStorage.setItem(a.fileKey + "_context", i.context), i.offset < a.file.size ? n.uploadTrunk(e, l.
						default.extend({}, a, {
							offset: i.offset,
							trunkEnd: i.offset + a.trunkSize,
							context: u || i.context
						}), r) : r(a)) : (o.status && n.clearStorage(a.fileKey), t.onError(o.responseText))
					}
				}, c = "?offset=" + a.offset + "&complete=" + (a.trunkEnd >= a.file.size) + "&context=" + (u || a.context) + "&version=1.0", o.open("post", e.serveIp + "/" + e.bucketName + "/" + e.objectName + c), o.setRequestHeader("x-nos-token", e.nosToken), o.send(a.file.slice(a.offset, a.trunkEnd))
			},
			getOffset: function(e, n) {
				var a;
				if (!(a = localStorage.getItem(e.fileKey + "_context"))) return n(0);
				l.
				default.ajax({
					type: "get",
					url: e.serveIp + "/" + e.bucketName + "/" + e.objectName + "?uploadContext",
					data: {
						version: "1.0",
						context: a
					},
					dataType: "json",
					beforeSend: function(t) {
						t.setRequestHeader("x-nos-token", e.nosToken)
					},
					success: function(e, a, r) {
						e.errCode ? t.onError({
							errCode: e.errCode,
							errMsg: e.errMsg
						}) : n(e.offset)
					},
					error: function(e, n, a) {
						t.onError(a)
					}
				})
			},
			clearStorage: function(e) {
				localStorage.removeItem(e + "_progress"), localStorage.removeItem(e + "_context"), localStorage.removeItem(e + "_created"), localStorage.removeItem(e + "_bucket"), localStorage.removeItem(e + "_object"), localStorage.removeItem(e + "_xNosToken")
			},
			upload: function(e) {
				if (e < n.fileList.length) {
					if (2 === n.fileList[e].status || !n.fileList[e].checked) return n.upload(e + 1);
					t.getInitInfo(n.fileList[e], function(a) {
						var r = n.fileList[e];
						r.objectName = a.objectName, r.bucketName = a.bucketName, n.getDNS(a, function(r) {
							var o = n.fileList[e];
							n.getOffset({
								serveIp: r[0],
								bucketName: a.bucketName,
								objectName: a.objectName,
								nosToken: a.nosToken,
								fileKey: n.fileList[e].fileKey
							}, function(l) {
								n.uploadTrunk({
									serveIp: r[0],
									bucketName: a.bucketName,
									objectName: a.objectName,
									nosToken: a.nosToken
								}, {
									file: n.fileList[e].file,
									fileKey: n.fileList[e].fileKey,
									fileIdx: e,
									offset: l || 0,
									trunkSize: t.trunkSize,
									trunkEnd: (l || 0) + t.trunkSize,
									context: ""
								}, function(a) {
									n.clearStorage(a.fileKey), t.onUploaded(o), n.upload(e + 1)
								})
							})
						})
					})
				} else t.onAllUploaded()
			},
			addFile: function(e, t) {
				var a, r = e.files[0],
					o = (0, u.
					default)(r.name + ":" + r.size);
				a = {
					fileKey: o,
					file: r,
					fileName: r.name,
					fileSizeMb: (r.size / 1024 / 1024).toFixed(2),
					format: r.name.split(".").pop(),
					status: 0,
					checked: !0,
					progress: localStorage.getItem(o + "_progress") || 0
				}, n.fileList.push(a), localStorage.setItem(o + "_created", +new Date), t(e, a)
			},
			checkExist: function(e) {
				var t = !1,
					a = (0, u.
					default)(e.name + ":" + e.size);
				return l.
				default.each(n.fileList, function(e, n) {
					if (a === n.fileKey) return t = !0, !1
				}), t
			},
			checkedPending: function() {
				var e = !1;
				return l.
				default.each(n.fileList, function(t, n) {
					if (n.checked && 0 === n.status) return e = !0, !1
				}), e
			},
			initEvent: function() {
				(0, l.
				default)("#" + t.fileInputId).on("change", function(e) {
					var a = "";
					if (e.target.files && e.target.files.length > 0) if (n.checkExist(e.target.files[0])) this.value = "", t.existFn();
					else {
						if (a = e.target.files[0].name.split(".").pop(), a = a.toUpperCase(), l.
						default.inArray(a, t.fileExts) < 0) return t.mismatchFn();
						n.addFile(e.target, function(e, n) {
							t.onAdd(n), e.value = ""
						})
					}
				}), (0, l.
				default)("#" + t.fileUploadId).on("click", function() {
					return n.checkedPending() ? (n.upload(0), !1) : (t.noUploadFn(), !1)
				})
			},
			init: function() {
				n.initEvent()
			}
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = n(39),
		l = a(o),
		i = n(508),
		u = a(i);
	t.
	default = r
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e, t) {
		var n = [c.
		default, (0, i.routerMiddleware)(t)];
		return (0, l.createStore)(f.
		default, e, (0, l.compose)(l.applyMiddleware.apply(void 0, n), "object" === ("undefined" == typeof window ? "undefined" : o(window)) && void 0 !== window.devToolsExtension ? window.devToolsExtension() : function(e) {
			return e
		}))
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
	t.
	default = r;
	var l = n(61),
		i = n(114),
		u = n(636),
		c = a(u),
		s = n(381),
		f = a(s)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = {
		hasError: !1,
		headerInfo: {},
		user: {
			isLogin: !1,
			info: {}
		},
		repo: {
			isFetching: !1,
			repo: {},
			comments: {
				total: 0,
				list: []
			}
		},
		note: {
			isFetching: !1,
			note: {},
			comments: {
				total: 0,
				list: []
			}
		},
		brand: {
			isFetching: !1,
			brand: {},
			products: {
				list: [],
				total: 0
			}
		},
		video: {
			isFetching: !1,
			video: {},
			comments: {
				list: [],
				total: 0
			}
		},
		product: {
			isFetching: !1,
			product: {},
			relatedRepos: {
				list: [],
				total: 0,
				hasNext: !1
			},
			relatedNotes: {
				list: [],
				total: 0,
				hasNext: !1
			}
		},
		centerRepo: {
			list: [],
			hasNext: !1
		},
		centerNote: {
			list: [],
			hasNext: !1
		},
		centerVideo: {
			list: [],
			hasNext: !1
		},
		centerUser: {},
		tagRepo: {
			list: [],
			hasNext: !1
		},
		tagNote: {
			list: [],
			hasNext: !1
		},
		tagVideo: {
			list: [],
			hasNext: !1
		},
		tagProduct: {
			list: [],
			hasNext: !1
		},
		searchRepo: {
			list: [],
			recommendHasNext: !1,
			recommendList: [],
			hasNext: !1
		},
		searchNote: {
			recommendHasNext: !1,
			recommendList: [],
			list: [],
			hasNext: !1
		},
		searchUser: {
			recommendHasNext: !1,
			recommendList: [],
			list: [],
			hasNext: !1
		},
		searchProduct: {
			recommendHasNext: !1,
			recommendList: [],
			list: [],
			hasNext: !1
		},
		beautyVideo: {
			list: [],
			hasNext: !1
		},
		beautyVideoTags: [],
		evaluationRepo: {
			list: [],
			hasNext: !1
		},
		evaluationTabs: [],
		sitemap: {
			repos: [],
			notes: [],
			brands: [],
			products: []
		},
		sitemapRepo: {
			isFetching: !1,
			list: []
		},
		sitemapNote: {
			isFetching: !1,
			list: []
		},
		sitemapBrand: {
			isFetching: !1,
			list: []
		},
		sitemapProduct: {
			isFetching: !1,
			list: []
		},
		allTrial: {
			list: [],
			hasNext: !1
		},
		trial: {
			desImage: [],
			headUrls: [],
			note: {}
		}
	};
	t.
	default = a
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.onEnter = t.conf = void 0;
	var a = n(392),
		r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r),
		l = function(e, t, r) {
			if (window.__INITIAL_STATE__) return window.__INITIAL_STATE__ = null, void r();
			var l = n(121).
			default, i = e.routes, u = e.params, c = e.location, s = function() {
				return Promise.resolve()
			}, f = i[i.length - 1];
			(f.component && f.component.fetchData || s)(l, u, c).then(function() {
				var e = (0, a.getInfo)(c.pathname, l),
					t = e.title,
					n = document.getElementsByTagName("title");
				n && n.length && (n[0].innerHTML = t || "网易美学_发现适合你的美"), r(), l.dispatch({
					type: o.CLEAR_ERROR
				})
			}).
			catch (function(e) {
				l.dispatch({
					type: o.SET_ERROR
				}), r()
			})
		}, i = [{
			path: "login",
			component: n(298).
			default,
			onEnter: l
		}, {
			path: "forget",
			component: n(138).
			default,
			onEnter: l
		}, {
			path: "signup",
			component: n(138).
			default,
			onEnter: l
		}, {
			path: "repo/:id",
			component: n(316).
			default,
			onEnter: l
		}, {
			path: "note/:id",
			component: n(302).
			default,
			onEnter: l
		}, {
			path: "brand/:id",
			component: n(273).
			default,
			onEnter: l
		}, {
			path: "product/:id",
			component: n(313).
			default,
			onEnter: l
		}, {
			path: "video/:id",
			component: n(358).
			default,
			onEnter: l
		}, {
			path: "repoEdit(/:id)",
			component: n(359).
			default,
			onEnter: l
		}, {
			path: "noteEdit(/:id)(?productId=:productId)",
			component: n(304).
			default,
			onEnter: l
		}, {
			path: "account",
			component: n(265).
			default,
			onEnter: l
		}, {
			path: "user/:uid",
			component: n(348).
			default,
			onEnter: l
		}, {
			path: "tag/:id",
			component: n(333).
			default,
			onEnter: l
		}, {
			path: "beautyVideo",
			component: n(270).
			default,
			onEnter: l
		}, {
			path: "evaluation",
			component: n(284).
			default,
			onEnter: l
		}, {
			path: "search",
			component: n(326).
			default,
			onEnter: l
		}, {
			path: "collection",
			component: n(280).
			default,
			indexRoute: {
				onEnter: function(e, t) {
					return t("/collection/repo")
				}
			},
			childRoutes: [{
				path: "repo",
				component: n(276).
				default,
				onEnter: l
			}, {
				path: "note",
				component: n(274).
				default,
				onEnter: l
			}, {
				path: "video",
				component: n(278).
				default,
				onEnter: l
			}]
		}, {
			path: "videoEdit(/:id)",
			component: n(352).
			default,
			onEnter: l
		}, {
			path: "sitemap",
			component: n(327).
			default,
			indexRoute: {
				onEnter: function(e, t) {
					return t("/sitemap/repo")
				}
			},
			childRoutes: [{
				path: "repo",
				component: n(331).
				default,
				onEnter: l
			}, {
				path: "note",
				component: n(329).
				default,
				onEnter: l
			}, {
				path: "brand",
				component: n(328).
				default,
				onEnter: l
			}, {
				path: "product",
				component: n(330).
				default,
				onEnter: l
			}]
		}, {
			path: "more",
			component: n(299).
			default,
			onEnter: l
		}, {
			path: "trial/:id",
			component: n(341).
			default,
			onEnter: l
		}, {
			path: "trial",
			component: n(268).
			default,
			onEnter: l
		}, {
			path: "*",
			component: n(137).
			default,
			onEnter: l
		}];
	t.conf = i, t.onEnter = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r),
		l = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
				list: [],
				hasNext: !1
			};
			switch (t.type) {
				case o.SET_ALLTRIAL:
					return a({}, e, {
						list: t.list,
						hasNext: t.hasNext
					});
				default:
					return e
			}
		};
	t.
	default = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.beautyVideoTags = t.beautyVideo = void 0;
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r);
	t.beautyVideo = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
		switch (t.type) {
			case o.SET_BEAUTY_VIDEO:
				return a({}, e, {
					list: t.list,
					hasNext: t.hasNext
				});
			default:
				return e
		}
	}, t.beautyVideoTags = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
		switch (t.type) {
			case o.SET_BEAUTY_VIDEO_TAGS:
				return t.tags;
			default:
				return e
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r),
		l = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			switch (t.type) {
				case o.GET_BRAND_REQUEST:
					return a({}, e, {
						isFetching: !0
					});
				case o.GET_BRAND_SUCCESS:
					return a({}, e, {
						isFetching: !1,
						brand: t.brand,
						products: t.products
					});
				case o.GET_BRAND_FAILURE:
					return a({}, e, {
						isFetching: !1
					});
				default:
					return e
			}
		};
	t.
	default = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.centerVideo = t.centerNote = t.centerRepo = t.centerUser = void 0;
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r);
	t.centerUser = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			info: {}
		};
		switch (t.type) {
			case o.SET_CENTER_USER:
				return t.info;
			default:
				return e
		}
	}, t.centerRepo = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			list: [],
			hasNext: !1
		};
		switch (t.type) {
			case o.SET_CENTER_REPO:
				return a({}, e, {
					list: t.list,
					hasNext: t.hasNext
				});
			default:
				return e
		}
	}, t.centerNote = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			list: [],
			hasNext: !1
		};
		switch (t.type) {
			case o.SET_CENTER_NOTE:
				return a({}, e, {
					list: t.list,
					hasNext: t.hasNext
				});
			default:
				return e
		}
	}, t.centerVideo = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			list: [],
			hasNext: !1
		};
		switch (t.type) {
			case o.SET_CENTER_VIDEO:
				return a({}, e, {
					list: t.list,
					hasNext: t.hasNext
				});
			default:
				return e
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.evaluationTabs = t.evaluationRepo = void 0;
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r);
	t.evaluationRepo = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
		switch (t.type) {
			case o.SET_EVALUATION_REPO:
				return a({}, e, {
					list: t.list,
					hasNext: t.hasNext
				});
			default:
				return e
		}
	}, t.evaluationTabs = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
		switch (t.type) {
			case o.SET_EVALUATION_TABS:
				return t.tabs;
			default:
				return e
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r),
		l = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			return t.type === o.SET_HOMEPAGE ? a({}, e, t.info) : e
		};
	t.
	default = l
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	function r(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
		return t.
		default = e, t
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, l = n(61),
		i = n(114),
		u = n(4),
		c = r(u),
		s = n(380),
		f = a(s),
		d = n(384),
		p = a(d),
		h = n(382),
		m = a(h),
		v = n(377),
		y = a(v),
		b = n(383),
		g = a(b),
		E = n(389),
		w = a(E),
		_ = n(388),
		N = a(_),
		C = n(375),
		O = a(C),
		T = n(378),
		k = r(T),
		P = n(386),
		S = r(P),
		j = n(387),
		L = r(j),
		x = n(385),
		I = r(x),
		R = n(376),
		M = r(R),
		U = n(379),
		A = r(U),
		D = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
				isLogin: !1,
				info: {}
			}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			switch (t.type) {
				case c.LOGIN_SUCCESS:
					return {
						isLogin: !0,
						info: t.info
					};
				case c.LOGIN_FAILURE:
				case c.LOGOUT_SUCCESS:
					return {
						isLogin: !1,
						info: {}
					};
				case c.LOGOUT_FAILURE:
				default:
					return e
			}
		}, F = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
			switch ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).type) {
				case c.SET_ERROR:
					return !0;
				case c.CLEAR_ERROR:
					return !1;
				default:
					return e
			}
		}, G = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			switch (t.type) {
				case c.SET_HEADER:
					return t.info;
				default:
					return e
			}
		}, H = (0, l.combineReducers)(o({
			user: D,
			hasError: F,
			headerInfo: G,
			homePage: f.
			default,
			repo: p.
			default,
			note: m.
			default,
			brand: y.
			default,
			product: g.
			default,
			video: w.
			default,
			trial: N.
			default,
			allTrial: O.
			default
		}, M, k, S, L, I, A, {
			routing: i.routerReducer
		}));
	t.
	default = H
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r),
		l = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			switch (t.type) {
				case o.GET_NOTE_REQUEST:
					return a({}, e, {
						isFetching: !0
					});
				case o.GET_NOTE_SUCCESS:
					return a({}, e, {
						isFetching: !1,
						note: t.note,
						comments: t.comments
					});
				case o.GET_NOTE_FAILURE:
					return a({}, e, {
						isFetching: !1
					});
				case o.CHANGE_NOTE_COMMENTS:
					return a({}, e, {
						comments: t.comments
					});
				default:
					return e
			}
		};
	t.
	default = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r),
		l = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			switch (t.type) {
				case o.GET_PRODUCT_REQUEST:
					return a({}, e, {
						isFetching: !0
					});
				case o.GET_PRODUCT_SUCCESS:
					return a({}, e, {
						isFetching: !1,
						product: t.product,
						relatedRepos: t.relatedRepos,
						relatedNotes: t.relatedNotes
					});
				case o.GET_PRODUCT_FAILURE:
					return a({}, e, {
						isFetching: !1
					});
				default:
					return e
			}
		};
	t.
	default = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r),
		l = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			switch (t.type) {
				case o.GET_REPO_REQUEST:
					return a({}, e, {
						isFetching: !0
					});
				case o.GET_REPO_SUCCESS:
					return a({}, e, {
						isFetching: !1,
						repo: t.repo,
						comments: t.comments
					});
				case o.GET_REPO_FAILURE:
					return a({}, e, {
						isFetching: !1
					});
				case o.CHANGE_REPO_COMMENTS:
					return a({}, e, {
						comments: t.comments
					});
				default:
					return e
			}
		};
	t.
	default = l
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		var n = {};
		for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
		return n
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.searchUser = t.searchProduct = t.searchNote = t.searchRepo = void 0;
	var r = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, o = n(4),
		l = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(o),
		i = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.type,
				o = a(t, ["type"]);
			switch (n) {
				case l.SET_SEARCH_REPO:
					return r({}, e, o);
				default:
					return e
			}
		};
	t.searchRepo = i;
	var u = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = (t.type, a(t, ["type"]));
		switch (t.type) {
			case l.SET_SEARCH_NOTE:
				return r({}, e, n);
			default:
				return e
		}
	};
	t.searchNote = u;
	var c = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = (t.type, a(t, ["type"]));
		switch (t.type) {
			case l.SET_SEARCH_PRODUCT:
				return r({}, e, n);
			default:
				return e
		}
	};
	t.searchProduct = c;
	var s = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = (t.type, a(t, ["type"]));
		switch (t.type) {
			case l.SET_SEARCH_USER:
				return r({}, e, n);
			default:
				return e
		}
	};
	t.searchUser = s
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.sitemapProduct = t.sitemapBrand = t.sitemapNote = t.sitemapRepo = t.sitemap = void 0;
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r);
	t.sitemap = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			repos: [],
			notes: [],
			products: [],
			brands: []
		};
		switch (t.type) {
			case o.GET_SITEMAP_SUCCESS:
				return a({}, e, {
					repos: t.repos,
					notes: t.notes,
					products: t.products,
					brands: t.brands
				});
			case o.GET_SITEMAP_FAILURE:
			default:
				return e
		}
	}, t.sitemapRepo = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			list: []
		};
		switch (t.type) {
			case o.GET_SITEMAP_REPO_REQUEST:
				return a({}, e, {
					isFetching: !0
				});
			case o.GET_SITEMAP_REPO_SUCCESS:
				return a({}, e, {
					isFetching: !1,
					list: t.list
				});
			case o.GET_SITEMAP_REPO_FAILURE:
				return a({}, e, {
					isFetching: !1
				});
			default:
				return e
		}
	}, t.sitemapNote = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			list: []
		};
		switch (t.type) {
			case o.GET_SITEMAP_NOTE_REQUEST:
				return a({}, e, {
					isFetching: !0
				});
			case o.GET_SITEMAP_NOTE_SUCCESS:
				return a({}, e, {
					isFetching: !1,
					list: t.list
				});
			case o.GET_SITEMAP_NOTE_FAILURE:
				return a({}, e, {
					isFetching: !1
				});
			default:
				return e
		}
	}, t.sitemapBrand = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			list: []
		};
		switch (t.type) {
			case o.GET_SITEMAP_BRAND_REQUEST:
				return a({}, e, {
					isFetching: !0
				});
			case o.GET_SITEMAP_BRAND_SUCCESS:
				return a({}, e, {
					isFetching: !1,
					list: t.list
				});
			case o.GET_SITEMAP_BRAND_FAILURE:
				return a({}, e, {
					isFetching: !1
				});
			default:
				return e
		}
	}, t.sitemapProduct = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			list: []
		};
		switch (t.type) {
			case o.GET_SITEMAP_PRODUCT_REQUEST:
				return a({}, e, {
					isFetching: !0
				});
			case o.GET_SITEMAP_PRODUCT_SUCCESS:
				return a({}, e, {
					isFetching: !1,
					list: t.list
				});
			case o.GET_SITEMAP_PRODUCT_FAILURE:
				return a({}, e, {
					isFetching: !1
				});
			default:
				return e
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.tagProduct = t.tagVideo = t.tagNote = t.tagRepo = t.tagDetail = void 0;
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r);
	t.tagDetail = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			info: {}
		};
		switch (t.type) {
			case o.SET_TAG_DETAIL:
				return t.info;
			default:
				return e
		}
	}, t.tagRepo = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			list: [],
			hasNext: !1
		};
		switch (t.type) {
			case o.SET_TAG_REPO:
				return a({}, e, {
					list: t.list,
					hasNext: t.hasNext
				});
			default:
				return e
		}
	}, t.tagNote = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			list: [],
			hasNext: !1
		};
		switch (t.type) {
			case o.SET_TAG_NOTE:
				return a({}, e, {
					list: t.list,
					hasNext: t.hasNext
				});
			default:
				return e
		}
	}, t.tagVideo = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			list: [],
			hasNext: !1
		};
		switch (t.type) {
			case o.SET_TAG_VIDEO:
				return a({}, e, {
					list: t.list,
					hasNext: t.hasNext
				});
			default:
				return e
		}
	}, t.tagProduct = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
			list: [],
			hasNext: !1
		};
		switch (t.type) {
			case o.SET_TAG_PRODUCT:
				return a({}, e, {
					list: t.list,
					hasNext: t.hasNext
				});
			default:
				return e
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r),
		l = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			switch (t.type) {
				case o.SET_TRIAL:
					return a({}, e, t.info);
				case o.SET_TRIAL_NOTE:
					return a({}, e, {
						note: t.note
					});
				default:
					return e
			}
		};
	t.
	default = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
			}
			return e
		}, r = n(4),
		o = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.
			default = e, t
		}(r),
		l = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			switch (t.type) {
				case o.GET_VIDEO_REQUEST:
					return a({}, e, {
						isFetching: !0
					});
				case o.GET_VIDEO_SUCCESS:
					return a({}, e, {
						isFetching: !1,
						video: t.video,
						comments: t.comments
					});
				case o.GET_VIDEO_FAILURE:
					return a({}, e, {
						isFetching: !1
					});
				case o.CHANGE_VIDEO_COMMENTS:
					return a({}, e, {
						comments: t.comments
					});
				case o.SET_VIDEO_DATA:
					var n = a({}, e.video, t.data);
					return a({}, e, {
						video: n
					});
				case o.SET_VIDEO_AUTHOR:
					return n = a({}, e.video, {
						author: t.author
					}), a({}, e, {
						video: n
					});
				case o.CHANGE_VIDEO_COMMENTS:
					return a({}, e, {
						comments: t.comments
					});
				default:
					return e
			}
		};
	t.
	default = l
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = n(374),
		r = {
			path: "/",
			component: n(369).
			default,
			indexRoute: {
				component: n(297).
				default,
				onEnter: a.onEnter
			},
			getChildRoutes: function(e, t) {
				t(null, a.conf)
			}
		};
	t.
	default = r
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = function(e, t) {
		var n = {
			includeBox: e,
			version: 2,
			eventType: "click",
			swidth: 358,
			isHttps: 0 === window.location.protocol.indexOf("https") ? 1 : 0,
			productkey: "613f7860cba829794c92de4b0a3cf5a5",
			product: "mei",
			promark: "goKdPLw",
			host: "mei.163.com",
			single: 1,
			page: "login",
			cssDomain: "https://mei.163.com",
			cssFiles: "/css/urs.css",
			regUrl: "https://zc.reg.163.com/regInitialized?pd=mei&pkid=eYDnENt&pkht=mei.163.com",
			placeholder: {
				account: "请输入网易邮箱帐号",
				pwd: "请输入密码"
			},
			needPrepare: 0,
			coverBackground: "background:-webkit-radial-gradient(center,rgba(0,0,0,0.3),#000 75%);",
			iframeShowAnimation: "showAnimation .5s",
			errMode: 1,
			loginText: "登录",
			gotoRegText: "注册",
			hintTxt: "向右滑动滑块填充拼图",
			logincb: function() {
				t()
			},
			closecb: function() {}
		};
		new URS(n)
	};
	t.
	default = a
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getHead = t.getInfo = void 0;
	var a = n(5),
		r = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(a),
		o = "网易美学，发现适合你的美。网易美学是一个专注于发现与分享的美妆社区。用户可以在这里发现美妆界最新最热资讯，关注资深的美学达人，还可以与大家分享心水好物、使用心得，找到适合自己的变美方法。",
		l = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "网易美学_发现适合你的美",
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o,
				a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "网易美学，护肤 ，彩妆，化妆教程，口红，美白 ，祛痘 ，祛斑",
				r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "/",
				l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
				i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
				u = l ? '<link rel="alternate" media="only screen and (max-width: 640px)"\n    href="https://m.mei.163.com' + (i || r) + '">' : "",
				c = i ? '<link rel="canonical" href="https://mei.163.com' + i + '"/>' : "",
				s = "\n  <title>" + t + "</title>\n  " + u + "\n  " + c + '\n  <base href=\'/\' />\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <meta name="renderer" content="webkit" />\n  <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />\n  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n  <meta name="robots" content="index,follow" />\n  <meta name="baidu-site-verification" content="WLzKUlB2ew" />\n  <meta name="description" content="' + n + '" />\n  <meta name="keywords" content="' + a + '" />\n  <meta property="og:title" content="' + t + '" />\n  <meta property="og:type" content="website" />\n  <meta property="og:url" content="' + r + '" />\n  <meta property="og:locale" content="zh_CN" />\n  <meta property="og:description" content="' + n + '" />\n  ';
			return e.replace(/<head>/, "<head>" + s)
		}, i = function() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
				t = [1],
				n = [4, 9],
				a = [],
				r = [];
			return e.forEach(function(e) {
				if (~t.indexOf(e.types[0])) return a.push(e.name);~n.indexOf(e.types[1]) && r.push(e.name)
			}), a.concat(r).reduce(function(e, t) {
				return e + (t + "，")
			}, "")
		}, u = function(e, t) {
			var n = r.
			default.trimStart(e, "/").split("/")[0], a = t.getState(), l = {
				title: "网易美学_发现适合你的美",
				description: o,
				keywords: "网易美学，护肤 ，彩妆，化妆教程，口红，美白 ，祛痘 ，祛斑",
				url: e
			};
			try {
				switch (n) {
					case "repo":
						var u = a.repo.repo,
							c = u.title,
							s = u.author,
							f = u.tags;
						return {
							title: c + "_" + s.nickname + "_网易美学",
							keywords: "网易美学，" + i(f) + "化妆教程，美白，护肤，测评，" + s.nickname,
							alternate: !0,
							canonicalInfo: "/repo/" + u.id
						};
					case "note":
						var d = a.note.note,
							p = d.product.display,
							h = p.name1,
							m = p.name2,
							v = m ? h + "-" + m : h,
							y = m ? h + "，" + m : h;
						return {
							title: v + "_" + d.author.nickname + "_网易美学",
							keywords: "网易美学，" + y + "，" + i(d.tags) + "试色，" + d.author.nickname,
							alternate: !0,
							canonicalInfo: "/note/" + d.id
						};
					case "brand":
						var b = a.brand.brand,
							g = b.mainName ? b.enName : b.zhName;
						return {
							title: g + "_网易美学",
							keywords: g + "，" + (b.mainName ? b.zhName : b.enName) + "，网易美学，护肤，化妆品，美白，祛斑，祛痘，口红，香水，防晒",
							alternate: !0,
							canonicalInfo: "/brand/" + b.id
						};
					case "video":
						var E = a.video.video;
						return {
							title: E.title + "_" + E.author.nickname + "_网易美学",
							keywords: "网易美学，" + i(E.tags) + "彩妆，视频，化妆教程，" + E.author.nickname,
							alternate: !0,
							canonicalInfo: "/video/" + E.id
						};
					case "product":
						var w = a.product.product,
							_ = w.brand,
							N = _.mainName ? _.enName : _.zhName,
							C = w.mainName ? w.enName : w.zhName;
						return {
							title: C + "_" + N + "_网易美学",
							keywords: "网易美学，" + C + "，" + N + "，" + (w.categories && w.categories.length ? w.categories[0].displayName + "，" : "") + "化妆品，护肤",
							alternate: !0,
							canonicalInfo: "/product/" + w.id
						};
					case "tag":
						var O = a.tagDetail;
						if (!O.name || !O.id) throw new Error("invalid tag");
						return {
							title: O.name + "_网易美学",
							keywords: "网易美学，" + O.name + "，彩妆，护肤，祛斑，口红，美白，祛痘，化妆教程",
							alternate: !0,
							canonicalInfo: "/tag/" + O.id
						};
					case "beautyVideo":
						return {
							title: "变美视频_网易美学|美妆技巧|化妆教程",
							keywords: "网易美学，化妆教程，变美技巧，画眉毛，眼线，眼影，视频"
						};
					case "evaluation":
						return {
							title: "美学联合测评_网易美学|专业测评|调查对比",
							keywords: "网易美学，彩妆，护肤，美发美体，美容工具，测评，美学联合测评"
						};
					case "user":
						return {
							alternate: !0
						};
					default:
						return l
				}
			} catch (e) {
				return l
			}
		}, c = function(e, t, n) {
			var a = u(t, n),
				r = a.title,
				o = a.description,
				i = a.keywords,
				c = a.alternate,
				s = a.canonicalInfo;
			return l(e, r, o, i, t, c, s)
		};
	t.getInfo = u, t.getHead = c
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}, r = function(e) {
			function t(e) {
				switch (void 0 === e ? "undefined" : a(e)) {
					case "undefined":
						return "undefined";
					case "boolean":
						return "boolean";
					case "number":
						return "number";
					case "string":
						return "string";
					default:
						return null === e ? "null" : "object"
				}
			}
			function n(e) {
				return Object.prototype.toString.call(e).replace(/^\[object *|\]$/g, "")
			}
			function r(e) {
				return "function" == typeof e
			}
			function o(e) {
				if (null === e || e === j) throw TypeError();
				return Object(e)
			}
			function l(e) {
				return e >> 0
			}
			function i(e) {
				return e >>> 0
			}
			function u(t) {
				if (!("TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS" in e)) {
					if (t.length > L) throw RangeError("Array too large for polyfill");
					var n;
					for (n = 0; n < t.length; n += 1)! function(e) {
						Object.defineProperty(t, e, {
							get: function() {
								return t._getter(e)
							},
							set: function(n) {
								t._setter(e, n)
							},
							enumerable: !0,
							configurable: !1
						})
					}(n)
				}
			}
			function c(e, t) {
				var n = 32 - t;
				return e << n >> n
			}
			function s(e, t) {
				var n = 32 - t;
				return e << n >>> n
			}
			function f(e) {
				return [255 & e]
			}
			function d(e) {
				return c(e[0], 8)
			}
			function p(e) {
				return [255 & e]
			}
			function h(e) {
				return s(e[0], 8)
			}
			function m(e) {
				return e = F(Number(e)), [e < 0 ? 0 : e > 255 ? 255 : 255 & e]
			}
			function v(e) {
				return [255 & e, e >> 8 & 255]
			}
			function y(e) {
				return c(e[1] << 8 | e[0], 16)
			}
			function b(e) {
				return [255 & e, e >> 8 & 255]
			}
			function g(e) {
				return s(e[1] << 8 | e[0], 16)
			}
			function E(e) {
				return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
			}
			function w(e) {
				return c(e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], 32)
			}
			function _(e) {
				return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
			}
			function N(e) {
				return s(e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], 32)
			}
			function C(e, t, n) {
				function a(e) {
					var t = R(e),
						n = e - t;
					return n < .5 ? t : n > .5 ? t + 1 : t % 2 ? t + 1 : t
				}
				var r, o, l, i = (1 << t - 1) - 1;
				if (e !== e) o = (1 << t) - 1, l = D(2, n - 1), r = 0;
				else if (e === 1 / 0 || e === -1 / 0) o = (1 << t) - 1, l = 0, r = e < 0 ? 1 : 0;
				else if (0 === e) o = 0, l = 0, r = 1 / e == -1 / 0 ? 1 : 0;
				else if (r = e < 0, (e = I(e)) >= D(2, 1 - i)) {
					o = A(R(M(e) / x), 1023);
					var u = e / D(2, o);
					u < 1 && (o -= 1, u *= 2), u >= 2 && (o += 1, u /= 2);
					var c = D(2, n);
					l = a(u * c) - c, o += i, l / c >= 1 && (o += 1, l = 0), o > 2 * i && (o = (1 << t) - 1, l = 0)
				} else o = 0, l = a(e / D(2, 1 - i - n));
				var s, f = [];
				for (s = n; s; s -= 1) f.push(l % 2 ? 1 : 0), l = R(l / 2);
				for (s = t; s; s -= 1) f.push(o % 2 ? 1 : 0), o = R(o / 2);
				f.push(r ? 1 : 0), f.reverse();
				for (var d = f.join(""), p = []; d.length;) p.unshift(parseInt(d.substring(0, 8), 2)), d = d.substring(8);
				return p
			}
			function O(e, t, n) {
				var a, r, o, l, i, u, c, s, f = [];
				for (a = 0; a < e.length; ++a) for (o = e[a], r = 8; r; r -= 1) f.push(o % 2 ? 1 : 0), o >>= 1;
				return f.reverse(), l = f.join(""), i = (1 << t - 1) - 1, u = parseInt(l.substring(0, 1), 2) ? -1 : 1, c = parseInt(l.substring(1, 1 + t), 2), s = parseInt(l.substring(1 + t), 2), c === (1 << t) - 1 ? 0 !== s ? NaN : u * (1 / 0) : c > 0 ? u * D(2, c - i) * (1 + s / D(2, n)) : 0 !== s ? u * D(2, -(i - 1)) * (s / D(2, n)) : u < 0 ? -0 : 0
			}
			function T(e) {
				return O(e, 11, 52)
			}
			function k(e) {
				return C(e, 11, 52)
			}
			function P(e) {
				return O(e, 8, 23)
			}
			function S(e) {
				return C(e, 8, 23)
			}
			var j = void 0,
				L = 1e5,
				x = Math.LN2,
				I = Math.abs,
				R = Math.floor,
				M = Math.log,
				U = Math.max,
				A = Math.min,
				D = Math.pow,
				F = Math.round;
			! function() {
				var e = Object.defineProperty,
					t = ! function() {
						try {
							return Object.defineProperty({}, "x", {})
						} catch (e) {
							return !1
						}
					}();
				e && !t || (Object.defineProperty = function(t, n, a) {
					if (e) try {
						return e(t, n, a)
					} catch (e) {}
					if (t !== Object(t)) throw TypeError("Object.defineProperty called on non-object");
					return Object.prototype.__defineGetter__ && "get" in a && Object.prototype.__defineGetter__.call(t, n, a.get), Object.prototype.__defineSetter__ && "set" in a && Object.prototype.__defineSetter__.call(t, n, a.set), "value" in a && (t[n] = a.value), t
				})
			}(),
			function() {
				function c(e) {
					if ((e = l(e)) < 0) throw RangeError("ArrayBuffer size is not a small enough positive integer.");
					Object.defineProperty(this, "byteLength", {
						value: e
					}), Object.defineProperty(this, "_bytes", {
						value: Array(e)
					});
					for (var t = 0; t < e; t += 1) this._bytes[t] = 0
				}
				function s() {
					if (!arguments.length || "object" !== a(arguments[0])) return function(e) {
						if ((e = l(e)) < 0) throw RangeError("length is not a small enough positive integer.");
						Object.defineProperty(this, "length", {
							value: e
						}), Object.defineProperty(this, "byteLength", {
							value: e * this.BYTES_PER_ELEMENT
						}), Object.defineProperty(this, "buffer", {
							value: new c(this.byteLength)
						}), Object.defineProperty(this, "byteOffset", {
							value: 0
						})
					}.apply(this, arguments);
					if (arguments.length >= 1 && "object" === t(arguments[0]) && arguments[0] instanceof s) return function(e) {
						if (this.constructor !== e.constructor) throw TypeError();
						var t = e.length * this.BYTES_PER_ELEMENT;
						Object.defineProperty(this, "buffer", {
							value: new c(t)
						}), Object.defineProperty(this, "byteLength", {
							value: t
						}), Object.defineProperty(this, "byteOffset", {
							value: 0
						}), Object.defineProperty(this, "length", {
							value: e.length
						});
						for (var n = 0; n < this.length; n += 1) this._setter(n, e._getter(n))
					}.apply(this, arguments);
					if (arguments.length >= 1 && "object" === t(arguments[0]) && !(arguments[0] instanceof s) && !(arguments[0] instanceof c || "ArrayBuffer" === n(arguments[0]))) return function(e) {
						var t = e.length * this.BYTES_PER_ELEMENT;
						Object.defineProperty(this, "buffer", {
							value: new c(t)
						}), Object.defineProperty(this, "byteLength", {
							value: t
						}), Object.defineProperty(this, "byteOffset", {
							value: 0
						}), Object.defineProperty(this, "length", {
							value: e.length
						});
						for (var n = 0; n < this.length; n += 1) {
							var a = e[n];
							this._setter(n, Number(a))
						}
					}.apply(this, arguments);
					if (arguments.length >= 1 && "object" === t(arguments[0]) && (arguments[0] instanceof c || "ArrayBuffer" === n(arguments[0]))) return function(e, t, n) {
						if ((t = i(t)) > e.byteLength) throw RangeError("byteOffset out of range");
						if (t % this.BYTES_PER_ELEMENT) throw RangeError("buffer length minus the byteOffset is not a multiple of the element size.");
						if (n === j) {
							var a = e.byteLength - t;
							if (a % this.BYTES_PER_ELEMENT) throw RangeError("length of buffer minus byteOffset not a multiple of the element size");
							n = a / this.BYTES_PER_ELEMENT
						} else n = i(n), a = n * this.BYTES_PER_ELEMENT;
						if (t + a > e.byteLength) throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
						Object.defineProperty(this, "buffer", {
							value: e
						}), Object.defineProperty(this, "byteLength", {
							value: a
						}), Object.defineProperty(this, "byteOffset", {
							value: t
						}), Object.defineProperty(this, "length", {
							value: n
						})
					}.apply(this, arguments);
					throw TypeError()
				}
				function C(e, t, n) {
					var a = function e() {
						Object.defineProperty(this, "constructor", {
							value: e
						}), s.apply(this, arguments), u(this)
					};
					"__proto__" in a ? a.__proto__ = s : (a.from = s.from, a.of = s.of), a.BYTES_PER_ELEMENT = e;
					var r = function() {};
					return r.prototype = O, a.prototype = new r, Object.defineProperty(a.prototype, "BYTES_PER_ELEMENT", {
						value: e
					}), Object.defineProperty(a.prototype, "_pack", {
						value: t
					}), Object.defineProperty(a.prototype, "_unpack", {
						value: n
					}), a
				}
				e.ArrayBuffer = e.ArrayBuffer || c, Object.defineProperty(s, "from", {
					value: function(e) {
						return new this(e)
					}
				}), Object.defineProperty(s, "of", {
					value: function() {
						return new this(arguments)
					}
				});
				var O = {};
				s.prototype = O, Object.defineProperty(s.prototype, "_getter", {
					value: function(e) {
						if (arguments.length < 1) throw SyntaxError("Not enough arguments");
						if ((e = i(e)) >= this.length) return j;
						var t, n, a = [];
						for (t = 0, n = this.byteOffset + e * this.BYTES_PER_ELEMENT; t < this.BYTES_PER_ELEMENT; t += 1, n += 1) a.push(this.buffer._bytes[n]);
						return this._unpack(a)
					}
				}), Object.defineProperty(s.prototype, "get", {
					value: s.prototype._getter
				}), Object.defineProperty(s.prototype, "_setter", {
					value: function(e, t) {
						if (arguments.length < 2) throw SyntaxError("Not enough arguments");
						if (!((e = i(e)) >= this.length)) {
							var n, a, r = this._pack(t);
							for (n = 0, a = this.byteOffset + e * this.BYTES_PER_ELEMENT; n < this.BYTES_PER_ELEMENT; n += 1, a += 1) this.buffer._bytes[a] = r[n]
						}
					}
				}), Object.defineProperty(s.prototype, "constructor", {
					value: s
				}), Object.defineProperty(s.prototype, "copyWithin", {
					value: function(e, t) {
						var n = arguments[2],
							a = o(this),
							r = a.length,
							u = i(r);
						u = U(u, 0);
						var c, s = l(e);
						c = s < 0 ? U(u + s, 0) : A(s, u);
						var f, d = l(t);
						f = d < 0 ? U(u + d, 0) : A(d, u);
						var p;
						p = n === j ? u : l(n);
						var h;
						h = p < 0 ? U(u + p, 0) : A(p, u);
						var m, v = A(h - f, u - c);
						for (f < c && c < f + v ? (m = -1, f = f + v - 1, c = c + v - 1) : m = 1; v > 0;) a._setter(c, a._getter(f)), f += m, c += m, v -= 1;
						return a
					}
				}), Object.defineProperty(s.prototype, "every", {
					value: function(e) {
						if (this === j || null === this) throw TypeError();
						var t = Object(this),
							n = i(t.length);
						if (!r(e)) throw TypeError();
						for (var a = arguments[1], o = 0; o < n; o++) if (!e.call(a, t._getter(o), o, t)) return !1;
						return !0
					}
				}), Object.defineProperty(s.prototype, "fill", {
					value: function(e) {
						var t = arguments[1],
							n = arguments[2],
							a = o(this),
							r = a.length,
							u = i(r);
						u = U(u, 0);
						var c, s = l(t);
						c = s < 0 ? U(u + s, 0) : A(s, u);
						var f;
						f = n === j ? u : l(n);
						var d;
						for (d = f < 0 ? U(u + f, 0) : A(f, u); c < d;) a._setter(c, e), c += 1;
						return a
					}
				}), Object.defineProperty(s.prototype, "filter", {
					value: function(e) {
						if (this === j || null === this) throw TypeError();
						var t = Object(this),
							n = i(t.length);
						if (!r(e)) throw TypeError();
						for (var a = [], o = arguments[1], l = 0; l < n; l++) {
							var u = t._getter(l);
							e.call(o, u, l, t) && a.push(u)
						}
						return new this.constructor(a)
					}
				}), Object.defineProperty(s.prototype, "find", {
					value: function(e) {
						var t = o(this),
							n = t.length,
							a = i(n);
						if (!r(e)) throw TypeError();
						for (var l = arguments.length > 1 ? arguments[1] : j, u = 0; u < a;) {
							var c = t._getter(u),
								s = e.call(l, c, u, t);
							if (Boolean(s)) return c;
							++u
						}
						return j
					}
				}), Object.defineProperty(s.prototype, "findIndex", {
					value: function(e) {
						var t = o(this),
							n = t.length,
							a = i(n);
						if (!r(e)) throw TypeError();
						for (var l = arguments.length > 1 ? arguments[1] : j, u = 0; u < a;) {
							var c = t._getter(u),
								s = e.call(l, c, u, t);
							if (Boolean(s)) return u;
							++u
						}
						return -1
					}
				}), Object.defineProperty(s.prototype, "forEach", {
					value: function(e) {
						if (this === j || null === this) throw TypeError();
						var t = Object(this),
							n = i(t.length);
						if (!r(e)) throw TypeError();
						for (var a = arguments[1], o = 0; o < n; o++) e.call(a, t._getter(o), o, t)
					}
				}), Object.defineProperty(s.prototype, "indexOf", {
					value: function(e) {
						if (this === j || null === this) throw TypeError();
						var t = Object(this),
							n = i(t.length);
						if (0 === n) return -1;
						var a = 0;
						if (arguments.length > 0 && (a = Number(arguments[1]), a !== a ? a = 0 : 0 !== a && a !== 1 / 0 && a !== -1 / 0 && (a = (a > 0 || -1) * R(I(a)))), a >= n) return -1;
						for (var r = a >= 0 ? a : U(n - I(a), 0); r < n; r++) if (t._getter(r) === e) return r;
						return -1
					}
				}), Object.defineProperty(s.prototype, "join", {
					value: function(e) {
						if (this === j || null === this) throw TypeError();
						for (var t = Object(this), n = i(t.length), a = Array(n), r = 0; r < n; ++r) a[r] = t._getter(r);
						return a.join(e === j ? "," : e)
					}
				}), Object.defineProperty(s.prototype, "lastIndexOf", {
					value: function(e) {
						if (this === j || null === this) throw TypeError();
						var t = Object(this),
							n = i(t.length);
						if (0 === n) return -1;
						var a = n;
						arguments.length > 1 && (a = Number(arguments[1]), a !== a ? a = 0 : 0 !== a && a !== 1 / 0 && a !== -1 / 0 && (a = (a > 0 || -1) * R(I(a))));
						for (var r = a >= 0 ? A(a, n - 1) : n - I(a); r >= 0; r--) if (t._getter(r) === e) return r;
						return -1
					}
				}), Object.defineProperty(s.prototype, "map", {
					value: function(e) {
						if (this === j || null === this) throw TypeError();
						var t = Object(this),
							n = i(t.length);
						if (!r(e)) throw TypeError();
						var a = [];
						a.length = n;
						for (var o = arguments[1], l = 0; l < n; l++) a[l] = e.call(o, t._getter(l), l, t);
						return new this.constructor(a)
					}
				}), Object.defineProperty(s.prototype, "reduce", {
					value: function(e) {
						if (this === j || null === this) throw TypeError();
						var t = Object(this),
							n = i(t.length);
						if (!r(e)) throw TypeError();
						if (0 === n && 1 === arguments.length) throw TypeError();
						var a, o = 0;
						for (a = arguments.length >= 2 ? arguments[1] : t._getter(o++); o < n;) a = e.call(j, a, t._getter(o), o, t), o++;
						return a
					}
				}), Object.defineProperty(s.prototype, "reduceRight", {
					value: function(e) {
						if (this === j || null === this) throw TypeError();
						var t = Object(this),
							n = i(t.length);
						if (!r(e)) throw TypeError();
						if (0 === n && 1 === arguments.length) throw TypeError();
						var a, o = n - 1;
						for (a = arguments.length >= 2 ? arguments[1] : t._getter(o--); o >= 0;) a = e.call(j, a, t._getter(o), o, t), o--;
						return a
					}
				}), Object.defineProperty(s.prototype, "reverse", {
					value: function() {
						if (this === j || null === this) throw TypeError();
						for (var e = Object(this), t = i(e.length), n = R(t / 2), a = 0, r = t - 1; a < n; ++a, --r) {
							var o = e._getter(a);
							e._setter(a, e._getter(r)), e._setter(r, o)
						}
						return e
					}
				}), Object.defineProperty(s.prototype, "set", {
					value: function(e, t) {
						if (arguments.length < 1) throw SyntaxError("Not enough arguments");
						var n, r, o, l, u, c, s, f, d, p;
						if ("object" === a(arguments[0]) && arguments[0].constructor === this.constructor) {
							if (n = arguments[0], (o = i(arguments[1])) + n.length > this.length) throw RangeError("Offset plus length of array is out of range");
							if (f = this.byteOffset + o * this.BYTES_PER_ELEMENT, d = n.length * this.BYTES_PER_ELEMENT, n.buffer === this.buffer) {
								for (p = [], u = 0, c = n.byteOffset; u < d; u += 1, c += 1) p[u] = n.buffer._bytes[c];
								for (u = 0, s = f; u < d; u += 1, s += 1) this.buffer._bytes[s] = p[u]
							} else for (u = 0, c = n.byteOffset, s = f; u < d; u += 1, c += 1, s += 1) this.buffer._bytes[s] = n.buffer._bytes[c]
						} else {
							if ("object" !== a(arguments[0]) || void 0 === arguments[0].length) throw TypeError("Unexpected argument type(s)");
							if (r = arguments[0], l = i(r.length), (o = i(arguments[1])) + l > this.length) throw RangeError("Offset plus length of array is out of range");
							for (u = 0; u < l; u += 1) c = r[u], this._setter(o + u, Number(c))
						}
					}
				}), Object.defineProperty(s.prototype, "slice", {
					value: function(e, t) {
						for (var n = o(this), a = n.length, r = i(a), u = l(e), c = u < 0 ? U(r + u, 0) : A(u, r), s = t === j ? r : l(t), f = s < 0 ? U(r + s, 0) : A(s, r), d = f - c, p = n.constructor, h = new p(d), m = 0; c < f;) {
							var v = n._getter(c);
							h._setter(m, v), ++c, ++m
						}
						return h
					}
				}), Object.defineProperty(s.prototype, "some", {
					value: function(e) {
						if (this === j || null === this) throw TypeError();
						var t = Object(this),
							n = i(t.length);
						if (!r(e)) throw TypeError();
						for (var a = arguments[1], o = 0; o < n; o++) if (e.call(a, t._getter(o), o, t)) return !0;
						return !1
					}
				}), Object.defineProperty(s.prototype, "sort", {
					value: function(e) {
						if (this === j || null === this) throw TypeError();
						for (var t = Object(this), n = i(t.length), a = Array(n), r = 0; r < n; ++r) a[r] = t._getter(r);
						for (e ? a.sort(e) : a.sort(), r = 0; r < n; ++r) t._setter(r, a[r]);
						return t
					}
				}), Object.defineProperty(s.prototype, "subarray", {
					value: function(e, t) {
						function n(e, t, n) {
							return e < t ? t : e > n ? n : e
						}
						e = l(e), t = l(t), arguments.length < 1 && (e = 0), arguments.length < 2 && (t = this.length), e < 0 && (e = this.length + e), t < 0 && (t = this.length + t), e = n(e, 0, this.length), t = n(t, 0, this.length);
						var a = t - e;
						return a < 0 && (a = 0), new this.constructor(this.buffer, this.byteOffset + e * this.BYTES_PER_ELEMENT, a)
					}
				});
				var L = C(1, f, d),
					x = C(1, p, h),
					M = C(1, m, h),
					D = C(2, v, y),
					F = C(2, b, g),
					G = C(4, E, w),
					H = C(4, _, N),
					B = C(4, S, P),
					V = C(8, k, T);
				e.Int8Array = e.Int8Array || L, e.Uint8Array = e.Uint8Array || x, e.Uint8ClampedArray = e.Uint8ClampedArray || M, e.Int16Array = e.Int16Array || D, e.Uint16Array = e.Uint16Array || F, e.Int32Array = e.Int32Array || G, e.Uint32Array = e.Uint32Array || H, e.Float32Array = e.Float32Array || B, e.Float64Array = e.Float64Array || V
			}(),
			function() {
				function t(e, t) {
					return r(e.get) ? e.get(t) : e[t]
				}
				function a(e, t, a) {
					if (!(e instanceof ArrayBuffer || "ArrayBuffer" === n(e))) throw TypeError();
					if ((t = i(t)) > e.byteLength) throw RangeError("byteOffset out of range");
					if (a = a === j ? e.byteLength - t : i(a), t + a > e.byteLength) throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
					Object.defineProperty(this, "buffer", {
						value: e
					}), Object.defineProperty(this, "byteLength", {
						value: a
					}), Object.defineProperty(this, "byteOffset", {
						value: t
					})
				}
				function o(e) {
					return function(n, a) {
						if ((n = i(n)) + e.BYTES_PER_ELEMENT > this.byteLength) throw RangeError("Array index out of range");
						n += this.byteOffset;
						for (var r = new Uint8Array(this.buffer, n, e.BYTES_PER_ELEMENT), o = [], l = 0; l < e.BYTES_PER_ELEMENT; l += 1) o.push(t(r, l));
						return Boolean(a) === Boolean(u) && o.reverse(), t(new e(new Uint8Array(o).buffer), 0)
					}
				}
				function l(e) {
					return function(n, a, r) {
						if ((n = i(n)) + e.BYTES_PER_ELEMENT > this.byteLength) throw RangeError("Array index out of range");
						var o, l, c = new e([a]),
							s = new Uint8Array(c.buffer),
							f = [];
						for (o = 0; o < e.BYTES_PER_ELEMENT; o += 1) f.push(t(s, o));
						Boolean(r) === Boolean(u) && f.reverse(), l = new Uint8Array(this.buffer, n, e.BYTES_PER_ELEMENT), l.set(f)
					}
				}
				var u = function() {
					var e = new Uint16Array([4660]);
					return 18 === t(new Uint8Array(e.buffer), 0)
				}();
				Object.defineProperty(a.prototype, "getUint8", {
					value: o(Uint8Array)
				}), Object.defineProperty(a.prototype, "getInt8", {
					value: o(Int8Array)
				}), Object.defineProperty(a.prototype, "getUint16", {
					value: o(Uint16Array)
				}), Object.defineProperty(a.prototype, "getInt16", {
					value: o(Int16Array)
				}), Object.defineProperty(a.prototype, "getUint32", {
					value: o(Uint32Array)
				}), Object.defineProperty(a.prototype, "getInt32", {
					value: o(Int32Array)
				}), Object.defineProperty(a.prototype, "getFloat32", {
					value: o(Float32Array)
				}), Object.defineProperty(a.prototype, "getFloat64", {
					value: o(Float64Array)
				}), Object.defineProperty(a.prototype, "setUint8", {
					value: l(Uint8Array)
				}), Object.defineProperty(a.prototype, "setInt8", {
					value: l(Int8Array)
				}), Object.defineProperty(a.prototype, "setUint16", {
					value: l(Uint16Array)
				}), Object.defineProperty(a.prototype, "setInt16", {
					value: l(Int16Array)
				}), Object.defineProperty(a.prototype, "setUint32", {
					value: l(Uint32Array)
				}), Object.defineProperty(a.prototype, "setInt32", {
					value: l(Int32Array)
				}), Object.defineProperty(a.prototype, "setFloat32", {
					value: l(Float32Array)
				}), Object.defineProperty(a.prototype, "setFloat64", {
					value: l(Float64Array)
				}), e.DataView = e.DataView || a
			}()
		}, o = {
			typedarray: function() {
				r(window)
			}
		};
	t.
	default = o
}, function(e, t, n) {
	"use strict";

	function a(e, t) {
		var n = {};
		for (var a in e) t.indexOf(a) >= 0 || Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
		return n
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function(e) {
		var t = e.id,
			n = e.category,
			r = e.action,
			o = void 0 === r ? "click" : r,
			l = a(e, ["id", "category", "action"]),
			i = {
				eventCategory: n,
				eventAction: o
			}, u = l.eventLabel,
			c = l.eventValue;
		u && "string" != typeof u && (l.eventLabel = u.toString()), c && "number" != typeof c && (l.eventValue = parseInt(c)), window.ga && window.ga("send", Object.assign({
			hitType: "event"
		}, i, l));
		var s = t || n + "_" + o + "_" + l.eventLabel;
		window.DATracker && window.DATracker.track(s, Object.assign(i, l))
	}, o = function(e) {
		window.ga = window.ga || function() {
			(window.ga.q = window.ga.q || []).push(arguments)
		}, window.ga.l = +new Date;
		var t = window.ga;
		t("create", "UA-88484603-2", "auto"), t("require", "urlChangeTracker");
		var n = e.userId;
		n && t("set", "userId", n), t("send", "pageview"), window.$eventTrace = r
	};
	t.initTracker = o
}, , , , , , , function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {}, function(e, t, n) {
	e.exports = n(121)
}], [645]);