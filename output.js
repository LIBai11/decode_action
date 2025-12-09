//Tue Dec 09 2025 02:12:06 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const path = require("path"),
  https = require("https"),
  axios = require("axios").default,
  CryptoJS = require("crypto-js"),
  querystring = require("querystring");
class Common {
  constructor() {
    this._Cookie = "";
    this._UserAgent = "";
    this._UserAgentMap = new Map();
    this._defaultUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/122.0.0.0";
    this._appSignConfig = null;
    this._requestDebugMode = false;
    this._requestAxiosProxyConfig = null;
    this._requestDynamicProxyConfig = null;
    this._requestNoProxyList = [];
    this._latestAppVersionData = {
      "build": "169159",
      "version": "12.4.3"
    };
    this._latestIOSVersion = "17.4";
    this._appHttpsTlsOptions = {
      "secureProtocol": "TLSv1_2_method",
      "ciphers": ["TLS_GREASE 0x7a 0x7a", "TLS_AES_128_GCM_SHA256", "TLS_AES_256_GCM_SHA384", "TLS_CHACHA20_POLY1305_SHA256", "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256", "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256", "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256", "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256", "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA", "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA", "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA", "TLS_RSA_WITH_AES_256_GCM_SHA384", "TLS_RSA_WITH_AES_128_GCM_SHA256", "TLS_RSA_WITH_AES_256_CBC_SHA", "TLS_RSA_WITH_AES_128_CBC_SHA", "TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA", "TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA", "TLS_RSA_WITH_3DES_EDE_CBC_SHA", "TLS_ECDHE_ECDSA_AES256_GCM_SHA384", "TLS_ECDHE_RSA_AES256_GCM_SHA384", "TLS_DHE_RSA_AES256_GCM_SHA384", "TLS_ECDHE_ECDSA_CHACHA20_POLY1305", "TLS_ECDHE_RSA_CHACHA20_POLY1305", "TLS_DHE_RSA_CHACHA20_POLY1305", "TLS_ECDHE_ECDSA_AES128_GCM_SHA256", "TLS_ECDHE_RSA_AES128_GCM_SHA256", "TLS_DHE_RSA_AES128_GCM_SHA256", "TLS_ECDHE_ECDSA_AES256_SHA384", "TLS_ECDHE_RSA_AES256_SHA384", "TLS_DHE_RSA_AES256_SHA256", "TLS_ECDHE_ECDSA_AES128_SHA256", "TLS_ECDHE_RSA_AES128_SHA256", "TLS_DHE_RSA_AES128_SHA256", "TLS_RSA_PSK_AES256_GCM_SHA384", "TLS_DHE_PSK_AES256_GCM_SHA384", "TLS_RSA_PSK_CHACHA20_POLY1305", "TLS_DHE_PSK_CHACHA20_POLY1305", "TLS_ECDHE_PSK_CHACHA20_POLY1305", "TLS_AES256_GCM_SHA384", "TLS_PSK_AES256_GCM_SHA384", "TLS_PSK_CHACHA20_POLY1305", "TLS_RSA_PSK_AES128_GCM_SHA256", "TLS_DHE_PSK_AES128_GCM_SHA256", "TLS_AES128_GCM_SHA256", "TLS_PSK_AES128_GCM_SHA256", "TLS_AES256_SHA256", "TLS_AES128_SHA256"].join(":")
    };
    this._H5st = null;
    this._Table = null;
    this._HttpsProxyAgent = null;
    this._genSignModelPath = __dirname + "/genSign";
    this._jdCryptoModelPath = __dirname + "/jdCrypto";
    this._hasInitAppSignConfig = false;
    this._initRequestConfig();
  }
  ["_initRequestConfig"]() {
    try {
      const IiI1I1i1 = require.main.filename,
        lI1IiiI1 = path.basename(IiI1I1i1, ".js");
      this._requestNoProxyList = (process.env[lI1IiiI1 + "_no_proxy"] || process.env.JD_COMMON_REQUEST_NO_PROXY || "").split(",").filter(iii1I11 => iii1I11 !== "");
      const liiIlllI = process.env[lI1IiiI1 + "_http_proxy"] || process.env.JD_COMMON_REQUEST_HTTP_PROXY || "";
      if (liiIlllI) {
        {
          const i1i = this._getProxyConfig(liiIlllI);
          i1i ? (this._requestAxiosProxyConfig = i1i, console.log("🌐 已启用全局静态代理")) : console.log("❌ 提供的代理地址无效，跳过启用全局静态代理");
        }
      } else {
        const il1ili1i = process.env[lI1IiiI1 + "_http_dynamic_proxy_api"] || process.env.JD_COMMON_REQUEST_HTTP_DYNAMIC_PROXY_API || "";
        if (il1ili1i) {
          {
            this._requestDynamicProxyConfig = {
              "api": null,
              "proxyConfig": null,
              "useLimit": null,
              "timeLimit": null,
              "fetchFailContinue": null,
              "extractTimestamp": null,
              "lastUseTimeStamp": null,
              "usedTimes": null
            };
            this._requestDynamicProxyConfig.api = il1ili1i;
            const Ili11lIl = process.env[lI1IiiI1 + "_http_dynamic_proxy_use_limit"] || process.env.JD_COMMON_REQUEST_HTTP_DYNAMIC_PROXY_USE_LIMIT || "1";
            try {
              this._requestDynamicProxyConfig.useLimit = parseInt(Ili11lIl);
            } catch {
              this._requestDynamicProxyConfig.useLimit = 1;
            }
            const iIl1I111 = process.env[lI1IiiI1 + "_http_dynamic_proxy_time_limit"] || process.env.JD_COMMON_REQUEST_HTTP_DYNAMIC_PROXY_TIME_LIMIT || "30000";
            try {
              this._requestDynamicProxyConfig.timeLimit = parseInt(iIl1I111);
            } catch {
              this._requestDynamicProxyConfig.timeLimit = 10000;
            }
            this._requestDynamicProxyConfig.fetchFailContinue = (process.env[lI1IiiI1 + "_http_dynamic_proxy_fetch_fail_continue"] || process.env.JD_COMMON_REQUEST_HTTP_DYNAMIC_PROXY_FETCH_FAIL_CONTINUE || "false") === "true";
            console.log("🌐 已启用全局动态代理");
          }
        }
      }
    } catch (iIIII1i) {
      console.log("❌ 初始化 HTTP 请求配置时遇到了错误\n" + iIIII1i);
    }
  }
  ["_initAppSignConfig"]() {
    this._appSignConfig = {
      "requestApi": process.env.JD_SIGN_API || "http://api.nolanstore.cc/sign",
      "bodyField": process.env.JD_SIGN_API_BODY_FIELD || "body",
      "functionIdField": process.env.JD_SIGN_API_FUNCTIONID_FIELD || "fn",
      "requestMethod": null,
      "requestContentType": null,
      "genSign": null
    };
    try {
      {
        const l1Ill1i = process.env.JD_SIGN_API_METHOD;
        l1Ill1i && l1Ill1i.toUpperCase() === "GET" ? this._appSignConfig.requestMethod = "GET" : this._appSignConfig.requestMethod = "POST";
      }
    } catch {}
    try {
      {
        const Ii1lli1l = process.env.JD_SIGN_API_CONTENT_TYPE;
        if (Ii1lli1l && Ii1lli1l.indexOf("application/x-www-form-urlencoded") !== -1) this._appSignConfig.requestContentType = Ii1lli1l;else {
          this._appSignConfig.requestContentType = "application/json; charset=utf-8";
        }
      }
    } catch {}
    try {
      this._appSignConfig.genSign = require(this._genSignModelPath);
    } catch {}
  }
  ["genRandomString"](lI1I1iIi = 32, iiii1ill = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const l1il1Iii = iiii1ill.length;
    let III1lll1 = "";
    for (let lil1IIli = 0; lil1IIli < lI1I1iIi; lil1IIli++) {
      III1lll1 += iiii1ill.charAt(Math.floor(Math.random() * l1il1Iii));
    }
    return III1lll1;
  }
  ["parseUrl"](I1Il1I) {
    try {
      const iIi11l11 = new URL(I1Il1I);
      return iIi11l11;
    } catch (liIill) {
      return {};
    }
  }
  ["parseUrlParameter"](illlI1iI) {
    try {
      {
        const I1I1ili = {},
          ililIl11 = this.parseUrl(illlI1iI),
          III1ll1I = new URLSearchParams(ililIl11?.["search"]);
        for (const [IIIIi1lI, IiIl1i] of III1ll1I) {
          I1I1ili[IIIIi1lI] = IiIl1i;
        }
        if (ililIl11?.["hash"] && ililIl11.hash.includes("#/")) {
          const iliil111 = ililIl11.hash.replace("#/", ""),
            liiIIIli = iliil111.includes("?") ? new URLSearchParams(iliil111.split("?").slice(1).join("?")) : new URLSearchParams();
          for (const [l1iIiI11, Iiili1l1] of liiIIIli) {
            I1I1ili[l1iIiI11] = Iiili1l1;
          }
        }
        return I1I1ili;
      }
    } catch {
      return {};
    }
  }
  ["getUrlParameter"](liiliii, Il11I11l) {
    try {
      const IIiiii1 = this.parseUrl(liiliii),
        li1liIIl = IIiiii1.searchParams.get(Il11I11l);
      return li1liIIl || "";
    } catch {
      return "";
    }
  }
  ["objectToQueryString"](lIi1l11I) {
    try {
      const i1IlIlll = [];
      for (const i1Illlil in lIi1l11I) {
        if (lIi1l11I.hasOwnProperty(i1Illlil)) {
          const iIiiii1 = lIi1l11I[i1Illlil],
            l11il1I1 = encodeURIComponent(i1Illlil),
            IIi1i = iIiiii1 === null || iIiiii1 === undefined ? "" : encodeURIComponent(iIiiii1);
          i1IlIlll.push(l11il1I1 + "=" + IIi1i);
        }
      }
      return i1IlIlll.join("&");
    } catch {
      return "";
    }
  }
  ["queryStringToObject"](IIiI1iIi) {
    try {
      {
        const l1illIII = {},
          IIIl1ilI = IIiI1iIi.split("&");
        for (const iiiilIIi of IIIl1ilI) {
          const [iiIilliI, Iil1liI1] = iiiilIIi.split("=");
          l1illIII[decodeURIComponent(iiIilliI)] = Iil1liI1 === undefined ? null : decodeURIComponent(Iil1liI1);
        }
        return l1illIII;
      }
    } catch {
      return {};
    }
  }
  ["getResponseCookie"](i1liIlll, iiilIiI = "") {
    let liI1i1il = "";
    if (i1liIlll?.["headers"]["set-cookie"]) {
      for (let ill1Ili1 of i1liIlll.headers["set-cookie"]) {
        const iIll1iii = ill1Ili1.split(";")[0].split("=");
        liI1i1il += iIll1iii[0] + "=" + iIll1iii[1] + "; ";
      }
    } else iiilIiI && (liI1i1il = iiilIiI);
    return liI1i1il;
  }
  ["getCookieValue"](iil11I1i, i1lli1il) {
    if (!iil11I1i || !i1lli1il) {
      return "";
    }
    const IlIl1iiI = new RegExp(i1lli1il + "=" + "([^;]*)" + ";"),
      IIilIiil = IlIl1iiI.exec(iil11I1i);
    return IIilIiil && IIilIiil[1] || "";
  }
  ["parseCookie"](i1lIiIi1) {
    const IlIiiIli = {},
      IlIIl11 = i1lIiIi1.split(";");
    for (const ii1lIl of IlIIl11) {
      const [lIi11IlI, iiliI1i] = ii1lIl.trim().split("=");
      IlIiiIli[lIi11IlI] = iiliI1i;
    }
    return IlIiiIli;
  }
  ["getLatestIOSVersion"]() {
    return this._iOSVersionLatest || "";
  }
  async ["request"](llii1ii1) {
    let Ii1IiI1i = {
        "success": false,
        "status": null,
        "data": null,
        "headers": null,
        "error": null,
        "connected": false
      },
      l111lll1 = this._requestDebugMode,
      iillllii = null;
    try {
      if (!llii1ii1 || !llii1ii1.url) return console.log("❌ 调用请求方法无效，缺少必要的参数！"), Ii1IiI1i.error = "缺少必要的请求参数", Ii1IiI1i;
      llii1ii1.hasOwnProperty("debug") && (l111lll1 = llii1ii1.debug, delete llii1ii1.debug);
      const IlIlllI1 = this._requestAxiosProxyConfig,
        iIl11ili = this._requestDynamicProxyConfig,
        iIIii11I = this._requestNoProxyList;
      Object.assign(axios.defaults, {
        "headers": {
          "common": {
            "User-Agent": this._defaultUserAgent
          }
        },
        "maxContentLength": Infinity,
        "maxBodyLength": Infinity,
        "maxRedirects": Infinity,
        "timeout": 60000,
        "transformResponse": [IllII1ii => {
          try {
            return JSON.parse(IllII1ii);
          } catch {}
          try {
            const lIlIlllI = /[\w$.]+\(\s*({[\s\S]*?})\s*\)\s*;?/;
            if (lIlIlllI.test(IllII1ii)) {
              const i1i111l1 = IllII1ii.match(lIlIlllI)[1];
              return JSON.parse(i1i111l1);
            }
          } catch {}
          return IllII1ii;
        }]
      });
      llii1ii1.body && (llii1ii1.data = llii1ii1.body, delete llii1ii1.body);
      for (const ll11iIl of ["data", "params"]) {
        !llii1ii1[ll11iIl] && delete llii1ii1[ll11iIl];
      }
      llii1ii1.method = (llii1ii1.method || "get").toLowerCase();
      if (llii1ii1.proxy && typeof llii1ii1.proxy === "string") {
        {
          const I1l111Ii = this._getProxyConfig(llii1ii1.proxy);
          if (I1l111Ii) {
            llii1ii1.proxy = I1l111Ii;
          } else console.log("❌ 代理配置无效，跳过使用代理"), delete llii1ii1.proxy;
        }
      }
      llii1ii1.data && typeof llii1ii1.data === "object" && (!llii1ii1.headers || !llii1ii1.headers["Content-Type"] || llii1ii1.headers["Content-Type"].includes("application/x-www-form-urlencoded")) && (llii1ii1.data = querystring.stringify(llii1ii1.data));
      if (llii1ii1.httpsTlsOptions && typeof llii1ii1.httpsTlsOptions === "object" && llii1ii1.url.includes("https://")) iillllii = llii1ii1.httpsTlsOptions, Object.assign(https.globalAgent.options, iillllii), delete llii1ii1.httpsTlsOptions;else llii1ii1.hasOwnProperty("httpsTlsOptions") && delete llii1ii1.httpsTlsOptions;
      let lil1lIII = false;
      if (!llii1ii1.hasOwnProperty("proxy") && !llii1ii1.hasOwnProperty("httpAgent") && !llii1ii1.hasOwnProperty("httpsAgent")) {
        if (IlIlllI1 || iIl11ili) {
          let llllllII = true;
          const l1III1il = this.parseUrl(llii1ii1.url).hostname || llii1ii1.url;
          for (const llI11iil of iIIii11I) {
            {
              const I11II1 = new RegExp("^" + llI11iil.split("*").join(".*") + "$");
              if (I11II1.test(l1III1il.hostname)) {
                {
                  llllllII = false;
                  l111lll1 && console.log("ℹ️ 该代理请求命中 NO_PROXY 规则 ➜ " + llI11iil);
                  break;
                }
              }
            }
          }
          if (llllllII) {
            {
              if (IlIlllI1) llii1ii1.proxy = IlIlllI1;else {
                if (iIl11ili) {
                  if (iIl11ili.proxyConfig) llii1ii1.proxy = iIl11ili.proxyConfig, lil1lIII = true;else {
                    {
                      const il1Il1ll = await this.getProxyAddressWithApi(iIl11ili.api),
                        IIii1li = this._getProxyConfig(il1Il1ll);
                      if (IIii1li) {
                        Object.assign(iIl11ili, {
                          "extractTimestamp": Date.now(),
                          "usedTimes": 0,
                          "proxyConfig": IIii1li
                        });
                        llii1ii1.proxy = IIii1li;
                        lil1lIII = true;
                      } else {
                        if (!iIl11ili.fetchFailContinue) return Ii1IiI1i.error = "获取动态代理地址失败，已设置跳过请求", Ii1IiI1i;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      for (const II1iliii of ["proxy", "httpAgent", "httpsAgent"]) {
        !llii1ii1[II1iliii] && delete llii1ii1[II1iliii];
      }
      llii1ii1.proxy && (this._loadModule("HttpsProxyAgent"), llii1ii1.httpsAgent = this._genHttpsAgentWithProxyConfig(llii1ii1.proxy), delete llii1ii1.proxy);
      await axios(llii1ii1).then(i11iIIli => {
        {
          if (lil1lIII) {
            iIl11ili.lastUseTimeStamp = Date.now();
            iIl11ili.usedTimes++;
            const IlilIli1 = iIl11ili.useLimit > 0 && iIl11ili.usedTimes >= iIl11ili.useLimit,
              iiiIill1 = iIl11ili.timeLimit > 0 && Date.now() - iIl11ili.extractTimestamp >= iIl11ili.timeLimit;
            (IlilIli1 || iiiIill1) && Object.assign(iIl11ili, {
              "proxyConfig": null,
              "lastUseTimeStamp": null,
              "extractTimestamp": null,
              "usedTimes": 0
            });
          }
          Ii1IiI1i.success = true;
          Ii1IiI1i.status = i11iIIli.status;
          Ii1IiI1i.data = i11iIIli.data;
          Ii1IiI1i.headers = i11iIIli.headers;
          Ii1IiI1i.connected = true;
          l111lll1 && this._handleRequestDebugPrint(i11iIIli, true);
        }
      }).catch(ilIIllll => {
        if (lil1lIII) {
          iIl11ili.lastUseTimeStamp = Date.now();
          iIl11ili.usedTimes++;
          const IiIlIll1 = iIl11ili.useLimit > 0 && iIl11ili.usedTimes >= iIl11ili.useLimit,
            I1l1i1Il = iIl11ili.timeLimit > 0 && Date.now() - iIl11ili.extractTimestamp >= iIl11ili.timeLimit;
          (IiIlIll1 || I1l1i1Il) && Object.assign(iIl11ili, {
            "proxyConfig": null,
            "lastUseTimeStamp": null,
            "extractTimestamp": null,
            "usedTimes": 0
          });
        }
        let i1iIiii1 = null;
        if (ilIIllll.response) {
          {
            Ii1IiI1i.connected = true;
            const lIililll = ilIIllll.response?.["status"],
              lI1IlIIl = {
                400: "400 请求错误 [Bad Request]",
                401: "401 未授权 [Unauthorized]",
                403: "403 禁止访问 [Forbidden]",
                493: "493 禁止访问 [Forbidden]",
                404: "404 资源未找到 [Not Found]",
                408: "408 请求超时 [Request Timeout]",
                429: "429 请求过多 [Too Many Requests]",
                500: "500 服务器内部错误 [Internal Server Error]",
                502: "502 网关错误 [Bad Gateway]",
                503: "503 服务不可用 [Service Unavailable]"
              };
            i1iIiii1 = lI1IlIIl[lIililll] || "请求失败 [Response code " + lIililll + "]";
          }
        } else {
          lil1lIII && Object.assign(iIl11ili, {
            "proxyConfig": null,
            "lastUseTimeStamp": null,
            "extractTimestamp": null,
            "usedTimes": 0
          });
          if (ilIIllll.request) {
            const iii1lill = {
              "ECONNABORTED": "请求被中断",
              "ECONNRESET": "连接被对方重置",
              "ECONNREFUSED": "服务器拒绝连接",
              "ETIMEDOUT": "网络请求超时",
              "ENOTFOUND": "无法解析的域名或地址",
              "EPROTO": "协议错误",
              "EHOSTUNREACH": "无法到达服务器主机",
              "ENETUNREACH": "无法到达网络",
              "EADDRINUSE": "网络地址已被使用",
              "EPIPE": "向已关闭的写入流进行写入",
              "ERR_BAD_OPTION_VALUE": "无效或不支持的配置选项值",
              "ERR_BAD_OPTION": "无效的配置选项",
              "ERR_NETWORK": "网络错误",
              "ERR_FR_TOO_MANY_REDIRECTS": "请求被重定向次数过多",
              "ERR_DEPRECATED": "使用了已弃用的特性或方法",
              "ERR_BAD_RESPONSE": "服务器响应无效或无法解析",
              "ERR_BAD_REQUEST": "请求无效或缺少必需参数",
              "ERR_CANCELED": "请求被用户取消",
              "ERR_NOT_SUPPORT": "当前环境不支持此特性或方法",
              "ERR_INVALID_URL": "请求的 URL 无效",
              "ERR_TLS_CERT_ALTNAME_INVALID": "TLS 证书的主机名无效",
              "ERR_TLS_CERT_REJECTED": "TLS 证书被拒绝",
              "ERR_HTTP2_STREAM_CANCEL": "HTTP2 流被取消",
              "ERR_HTTP2_SESSION_ERROR": "HTTP2 会话出错",
              "ERR_QUICSESSION_VERSION_NEGOTIATION": "QUIC 会话版本协商失败",
              "EAI_AGAIN": "DNS 查找超时"
            };
            i1iIiii1 = iii1lill[ilIIllll.code] || "未知网络连接错误类型 [" + ilIIllll.code + "]";
          } else {
            i1iIiii1 = ilIIllll.message || "未知错误状态";
          }
          if (ilIIllll.config?.["httpAgent"] || ilIIllll.config?.["httpsAgent"]) {
            i1iIiii1 += "（🌐该请求通过代理发出）";
          }
        }
        Ii1IiI1i.error = i1iIiii1;
        Ii1IiI1i.status = ilIIllll.response?.["status"] || null;
        l111lll1 && (this._handleRequestDebugPrint(ilIIllll, false), console.log("❌ 请求失败原因 ➜ " + Ii1IiI1i.error));
      });
      iillllii && Object.keys(iillllii).forEach(Ii1ill1 => {
        https.globalAgent.options[Ii1ill1] = null;
      });
    } catch (I1liI11I) {
      Ii1IiI1i.error = I1liI11I.message || I1liI11I;
      if (l111lll1) {
        console.log("❌ 在处理 HTTP 请求时遇到了错误 ➜ " + I1liI11I);
      }
    }
    return Ii1IiI1i;
  }
  async ["get"](iIllllII) {
    return await this.request(Object.assign({}, iIllllII, {
      "method": "get"
    }));
  }
  async ["post"](I1IlIl1i) {
    return await this.request(Object.assign({}, I1IlIl1i, {
      "method": "post"
    }));
  }
  async ["put"](IIli1iI) {
    return await this.request(Object.assign({}, IIli1iI, {
      "method": "put"
    }));
  }
  async ["delete"](l1Ii11l) {
    return await this.request(Object.assign({}, l1Ii11l, {
      "method": "delete"
    }));
  }
  ["_handleRequestDebugPrint"](IIiIlii, II11I11i = true) {
    this._loadModule("TablePrint");
    if (!this._Table) return;
    const lIIlllI1 = this._Table;
    console.log("------------------------ 🔧 REQUEST DEBUG ------------------------------");
    try {
      {
        let iIiIili1 = null,
          i1IIl1i = null;
        iIiIili1 = new lIIlllI1({
          "columns": [{
            "title": "类型",
            "name": "type",
            "alignment": "left"
          }, {
            "title": "说明",
            "name": "info",
            "alignment": "left"
          }],
          "charLength": {
            "🟢": 2,
            "🔴": 2,
            "❌": 2
          }
        });
        iIiIili1.addRow({
          "type": "请求结果",
          "info": "" + (II11I11i ? "🟢" : IIiIlii?.["response"] ? "🔴" : "❌") + (IIiIlii?.["status"] ? " " + IIiIlii.status : IIiIlii?.["response"] ? " " + IIiIlii.response?.["status"] : "") + " - " + "".concat(IIiIlii?.["config"]?.["method"] || "未知").toUpperCase()
        });
        if (IIiIlii?.["config"]?.["url"]) try {
          i1IIl1i = new URL(IIiIlii.config.url);
          iIiIili1.addRow({
            "type": "请求地址",
            "info": i1IIl1i.origin
          });
          iIiIili1.addRow({
            "type": "请求路径",
            "info": i1IIl1i.pathname
          });
        } catch {
          iIiIili1.addRow({
            "type": "请求地址",
            "info": IIiIlii.config.url
          });
        }
        iIiIili1.printTable();
        if (i1IIl1i && i1IIl1i?.["search"] || IIiIlii?.["config"]?.["params"]) {
          try {
            const l1i1Il = Object.assign({}, new URLSearchParams(i1IIl1i.search) || {}, IIiIlii?.["config"]?.["params"] || {});
            if (Object.keys(l1i1Il).length > 0) {
              {
                iIiIili1 = new lIIlllI1({
                  "columns": [{
                    "title": "名称",
                    "name": "label",
                    "alignment": "left"
                  }, {
                    "title": "值",
                    "name": "value",
                    "alignment": "left"
                  }]
                });
                for (let l1iIII in l1i1Il) {
                  iIiIili1.addRow({
                    "label": decodeURIComponent(l1iIII),
                    "value": decodeURIComponent(l1i1Il[l1iIII])
                  });
                }
                console.log("\n✧ 请求参数");
                iIiIili1.printTable();
              }
            }
          } catch {}
        }
        if (IIiIlii?.["config"]?.["httpAgent"] || IIiIlii?.["config"]?.["httpsAgent"]) {
          const l1lIiiII = (IIiIlii.config?.["httpAgent"] || IIiIlii.config?.["httpsAgent"])?.["proxy"],
            iIiIiilI = {
              "protocol": l1lIiiII.protocol.replace(":", ""),
              "hostname": l1lIiiII.hostname
            };
          l1lIiiII.port && (iIiIiilI.port = l1lIiiII.port);
          if (l1lIiiII instanceof URL) {
            {
              if (l1lIiiII.username || l1lIiiII.password) {
                iIiIiilI.username = l1lIiiII.username;
                iIiIiilI.password = l1lIiiII.password;
              }
            }
          } else {
            {
              if (l1lIiiII.auth) {
                const lllilliI = l1lIiiII.auth.split(":");
                iIiIiilI.username = lllilliI[0];
                iIiIiilI.password = lllilliI[1];
              }
            }
          }
          iIiIili1 = new lIIlllI1({
            "columns": [{
              "title": "名称",
              "name": "label",
              "alignment": "left"
            }, {
              "title": "值",
              "name": "value",
              "alignment": "left"
            }]
          });
          for (let I1Iil11 in iIiIiilI) {
            let l1i1IIi1 = iIiIiilI[I1Iil11];
            if (typeof l1i1IIi1 === "object") {
              l1i1IIi1 = JSON.stringify(l1i1IIi1);
            }
            iIiIili1.addRow({
              "label": I1Iil11,
              "value": l1i1IIi1
            });
          }
          console.log("\n✧ HTTP 代理配置");
          iIiIili1.printTable();
        }
        if (IIiIlii?.["config"]?.["headers"]) {
          const ili1111i = IIiIlii.config.headers;
          iIiIili1 = new lIIlllI1({
            "columns": [{
              "title": "名称",
              "name": "label",
              "alignment": "left"
            }, {
              "title": "值",
              "name": "value",
              "alignment": "left",
              "maxLen": 80
            }]
          });
          for (let II1lii1 in ili1111i) {
            let IliIillI = ili1111i[II1lii1];
            typeof IliIillI === "object" && (IliIillI = JSON.stringify(IliIillI));
            iIiIili1.addRow({
              "label": II1lii1,
              "value": IliIillI
            });
          }
          console.log("\n✧ 请求 Headers");
          iIiIili1.printTable();
        }
        if (IIiIlii?.["config"]?.["data"]) {
          let lii1iIii = IIiIlii.config.data;
          if (typeof lii1iIii === "object") lii1iIii = JSON.stringify(JSON.parse(lii1iIii));else {
            if (typeof lii1iIii === "string") try {
              {
                const ii111iii = JSON.parse(lii1iIii);
                lii1iIii = JSON.stringify(ii111iii);
              }
            } catch {
              lii1iIii = JSON.stringify(lii1iIii).slice(1, -1);
            }
          }
          console.log("\n✧ 请求 Body\n" + lii1iIii);
        }
        if (!II11I11i && !IIiIlii?.["response"]) {
          {
            console.log("\n------------------------------------------------------------------------");
            return;
          }
        }
        if (IIiIlii?.["headers"]) {
          {
            const i1ll1i1l = IIiIlii.headers;
            iIiIili1 = new lIIlllI1({
              "columns": [{
                "title": "名称",
                "name": "label",
                "alignment": "left"
              }, {
                "title": "值",
                "name": "value",
                "alignment": "left",
                "maxLen": 80
              }]
            });
            for (let Ii1I1il in i1ll1i1l) {
              {
                let I1iIIII1 = i1ll1i1l[Ii1I1il];
                typeof I1iIIII1 !== "string" && (I1iIIII1 = JSON.stringify(I1iIIII1));
                iIiIili1.addRow({
                  "label": Ii1I1il,
                  "value": I1iIIII1
                });
              }
            }
            console.log("\n✧ 响应 Headers");
            iIiIili1.printTable();
          }
        }
        if (IIiIlii?.["data"]) {
          let iiI1iIlI = IIiIlii.data;
          if (typeof iiI1iIlI === "object") iiI1iIlI = JSON.stringify(iiI1iIlI);else {
            if (typeof iiI1iIlI === "string") {
              try {
                {
                  const ii1IlI1I = JSON.parse(iiI1iIlI);
                  iiI1iIlI = JSON.stringify(ii1IlI1I);
                }
              } catch {
                iiI1iIlI = JSON.stringify(iiI1iIlI).slice(1, -1);
              }
            }
          }
          console.log("\n✧ 响应 Body\n" + iiI1iIlI);
        }
      }
    } catch (l1IIiI1) {
      console.log("❌ 处理 REQUEST DEBUG PRINT 时遇到了错误 ➜ " + (l1IIiI1.message || l1IIiI1));
    }
    console.log("\n------------------------------------------------------------------------");
  }
  async ["getProxyAddressWithApi"](III1Il1l) {
    let II11lllI = "";
    try {
      {
        const lillI1Ii = /\b(?:\d{1,3}\.){3}\d{1,3}:\d{1,5}\b/g,
          II11Ii1I = {
            "url": III1Il1l,
            "method": "post",
            "proxy": null,
            "timeout": 30000
          };
        let liIillii = 0,
          I1iiilli = null;
        const ililIIli = 1;
        while (liIillii < ililIIli) {
          const iI1l111i = await this.request(II11Ii1I);
          if (!iI1l111i.success) {
            {
              I1iiilli = iI1l111i.error;
              liIillii++;
              continue;
            }
          }
          if (!iI1l111i.data) {
            {
              I1iiilli = "无响应数据";
              liIillii++;
              continue;
            }
          }
          const Illiii1I = iI1l111i.data;
          if (typeof Illiii1I === "object") {
            {
              if (Illiii1I?.["data"]) {
                let lII1i11 = Illiii1I.data;
                if (Array.isArray(lII1i11) && lII1i11.length > 0) {
                  lII1i11 = lII1i11[0];
                  if (lII1i11?.["ip"] && lII1i11?.["port"]) II11lllI = lII1i11.ip + ":" + lII1i11.port;else lII1i11?.["IP"] && lII1i11?.["Port"] && (II11lllI = lII1i11.IP + ":" + lII1i11.Port);
                } else {
                  {
                    if (lII1i11?.["proxy_list"] && Array.isArray(lII1i11.proxy_list) && lII1i11.proxy_list.length > 0) {
                      {
                        const iI1ililI = lII1i11.proxy_list[0];
                        if (typeof iI1ililI === "object" && iI1ililI?.["ip"] && iI1ililI?.["port"]) II11lllI = iI1ililI.ip + ":" + iI1ililI.port;else {
                          II11lllI = iI1ililI;
                        }
                      }
                    }
                  }
                }
                II11lllI && !lillI1Ii.test(II11lllI) && (II11lllI = "");
              }
              !II11lllI && (I1iiilli = "接口响应数据异常：" + JSON.stringify(Illiii1I));
            }
          } else {
            const li1IiI11 = Illiii1I.match(lillI1Ii);
            li1IiI11 && (II11lllI = li1IiI11[0]);
            !II11lllI && (I1iiilli = "接口响应数据异常：" + Illiii1I);
          }
          if (II11lllI) return II11lllI;
          liIillii++;
        }
        liIillii >= ililIIli && console.log("⚠ 提取代理地址失败 ➜ " + I1iiilli);
      }
    } catch (i1I1IIii) {
      console.log("❌ 在处理请求代理API获取代理地址时遇到了错误\n" + i1I1IIii);
    }
    return II11lllI;
  }
  ["_getProxyConfig"](IIi1Il1I = "") {
    try {
      if (!IIi1Il1I) return null;
      if (!IIi1Il1I.includes("://")) {
        IIi1Il1I = "http://" + IIi1Il1I;
      }
      const l1ii11l = this.parseUrl(IIi1Il1I);
      if (l1ii11l?.["hostname"]) {
        const iii11III = {
          "protocol": l1ii11l.protocol.replace(":", "") === "https" ? "https" : "http",
          "host": l1ii11l.hostname,
          "port": parseInt(l1ii11l?.["port"] || "8080")
        };
        if (l1ii11l?.["username"] || l1ii11l?.["password"]) {
          iii11III.auth = {
            "username": l1ii11l?.["username"] || "",
            "password": l1ii11l?.["password"] || ""
          };
        }
        return iii11III;
      }
    } catch {}
    return null;
  }
  ["_genHttpsAgentWithProxyConfig"](iIIli111) {
    try {
      {
        if (!this._HttpsProxyAgent) {
          return null;
        }
        if (!iIIli111) return null;
        let Iii1Ii1i = (iIIli111?.["protocol"] || "http") + "://";
        if (iIIli111?.["auth"]) {
          Iii1Ii1i += (iIIli111.auth?.["username"] || "") + ":" + (iIIli111.auth?.["password"] || "") + "@";
        }
        Iii1Ii1i += iIIli111?.["host"] + ":" + (iIIli111?.["port"] || "8080");
        return new this._HttpsProxyAgent(Iii1Ii1i);
      }
    } catch (i1liIll1) {
      console.log("❌ 加载代理时遇到了错误 ➜ " + (i1liIll1.message || i1liIll1));
    }
    return null;
  }
  async ["concTaskNormal"](llIi1iil = "3", l1lIili = 100, I1lI1i1) {
    let IiiIlIll = false,
      llI1I1Il = 0,
      lI11iilI = 0;
    async function iIIIIiI1(ll111llI) {
      const iIli11li = await I1lI1i1(ll111llI);
      if (iIli11li) {
        {
          if (typeof iIli11li === "boolean") IiiIlIll = true;else typeof iIli11li === "object" && iIli11li?.["runEnd"] && (IiiIlIll = true);
        }
      }
      llI1I1Il--;
      IlI1illI();
    }
    async function IlI1illI() {
      while (llI1I1Il < llIi1iil && l1lIili > 0 && !IiiIlIll) {
        l1lIili--;
        llI1I1Il++;
        lI11iilI++;
        await iIIIIiI1(lI11iilI);
      }
      IiiIlIll && (await new Promise(IiilIlI1 => {
        {
          const ilii = setInterval(() => {
            llI1I1Il === 0 && (clearInterval(ilii), IiilIlI1());
          }, 100);
        }
      }));
    }
    const l1i11lil = Math.min(l1lIili, llIi1iil),
      iII1IIiI = [];
    for (let illi1li1 = 0; illi1li1 < l1i11lil; illi1li1++) {
      l1lIili--;
      llI1I1Il++;
      lI11iilI++;
      iII1IIiI.push(iIIIIiI1(lI11iilI));
    }
    await Promise.all(iII1IIiI);
    IlI1illI();
    await new Promise(lil1il1i => {
      {
        const IIiil1iI = setInterval(() => {
          (llI1I1Il === 0 || IiiIlIll) && (clearInterval(IIiil1iI), lil1il1i());
        }, 100);
      }
    });
  }
  ["setCookie"](iiI1lllI) {
    this._Cookie = iiI1lllI;
  }
  ["unsetCookie"]() {
    this._Cookie = "";
    this._UserAgent = "";
  }
  ["getCookie"]() {
    return this._Cookie;
  }
  ["getLatestAppVersion"]() {
    return this._latestAppVersionData.version || "";
  }
  ["getLatestAppBuildVersion"]() {
    return this._latestAppVersionData.build || "";
  }
  ["genUuid"](iII1Iil = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", l11I1il = "0123456789abcdef") {
    let IIll1lii = "";
    for (let lIil1ii1 of iII1Iil) {
      if (lIil1ii1 == "x") IIll1lii += l11I1il.charAt(Math.floor(Math.random() * l11I1il.length));else lIil1ii1 == "X" ? IIll1lii += l11I1il.charAt(Math.floor(Math.random() * l11I1il.length)).toUpperCase() : IIll1lii += lIil1ii1;
    }
    return IIll1lii;
  }
  ["genUA"](IiIIi1Il, I1lI1l1i = "jd") {
    if (this._UserAgentMap.has(IiIIi1Il)) return this._UserAgentMap.get(IiIIi1Il);
    const iIiiIlii = {
        "jd": {
          "app": "jdapp",
          "appBuild": this._latestAppVersionData.build,
          "client": "iPhone",
          "clientVersion": this._latestAppVersionData.version
        },
        "lite": {
          "app": "jdltapp",
          "appBuild": "1490",
          "client": "iPhone",
          "clientVersion": "6.14.0"
        }
      },
      lIIIlI1 = I1lI1l1i === "lite" ? "lite" : "jd",
      {
        app: i1I111l1,
        appBuild: iIiIiiIi,
        client: Il1i1Iil,
        clientVersion: illiiII1
      } = iIiiIlii[lIIIlI1],
      liIIlI11 = [this._latestIOSVersion],
      IiIilli = liIIlI11[Math.floor(Math.random() * liIIlI11.length)],
      l11Iii = "iPhone; CPU iPhone OS " + IiIilli.replace(".", "_") + " like Mac OS X",
      lIl1I1 = {
        "ud": CryptoJS.SHA1(IiIIi1Il).toString(),
        "sv": IiIilli,
        "iad": ""
      },
      IIllIi11 = JSON.stringify(this.getCipherConf(lIl1I1, lIIIlI1)),
      IIiIlI11 = this.genUuid(),
      iilli = [i1I111l1, Il1i1Iil, illiiII1, "", "rn/" + IIiIlI11, "M/5.0", "appBuild/" + iIiIiiIi, "jdSupportDarkMode/0", "ef/1", "ep/" + encodeURIComponent(IIllIi11), "Mozilla/5.0 (" + l11Iii + ") AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "supportJDSHWK/1", ""],
      iillIiii = iilli.join(";");
    this._UserAgentMap.set(IiIIi1Il, iillIiii);
    if (this._Cookie) this._UserAgent = iillIiii;
    return iillIiii;
  }
  ["getJEH"](liliilii) {
    if (!liliilii) {
      liliilii = "JD4iPhone/" + this.getLatestAppBuildVersion() + " (iPhone; iOS " + this.getLatestIOSVersion() + "; Scale/3.00)";
    }
    return encodeURIComponent(JSON.stringify(this.getCipherConf({
      "User-Agent": encodeURIComponent(liliilii)
    })));
  }
  ["getJEC"](Ii11I1ii) {
    return encodeURIComponent(JSON.stringify(this.getCipherConf({
      "pin": encodeURIComponent(Ii11I1ii)
    })));
  }
  ["getCipherConf"](iIIiiiIl, IIIIIIl = "jd") {
    if (iIIiiiIl && typeof iIIiiiIl === "object") for (let ilI1ilii in iIIiiiIl) {
      iIIiiiIl[ilI1ilii] = this.Base64(iIIiiiIl[ilI1ilii]).encode();
    } else iIIiiiIl && typeof iIIiiiIl === "string" ? iIIiiiIl = this.Base64(iIIiiiIl).encode() : iIIiiiIl = {};
    return {
      "ciphertype": 5,
      "cipher": iIIiiiIl,
      "ts": Math.floor(Date.now() / 1000),
      "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      "version": "1.0.3",
      "appname": IIIIIIl === "lite" ? "com.jd.jdmobilelite" : "com.360buy.jdmobile",
      "ridx": -1
    };
  }
  ["Base64"](IIlilii, llIiiili = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/") {
    return {
      "encode": () => {
        {
          function iIliIlli(I1IlIi1) {
            {
              I1IlIi1 = I1IlIi1.replace(/rn/g, "n");
              let lI1IillI = "",
                i1iiiIi;
              for (let IiIl11I1 = 0; IiIl11I1 < I1IlIi1.length; IiIl11I1++) {
                i1iiiIi = I1IlIi1.charCodeAt(IiIl11I1);
                if (i1iiiIi < 128) lI1IillI += String.fromCharCode(i1iiiIi);else i1iiiIi > 127 && i1iiiIi < 2048 ? (lI1IillI += String.fromCharCode(i1iiiIi >> 6 | 192), lI1IillI += String.fromCharCode(i1iiiIi & 63 | 128)) : (lI1IillI += String.fromCharCode(i1iiiIi >> 12 | 224), lI1IillI += String.fromCharCode(i1iiiIi >> 6 & 63 | 128), lI1IillI += String.fromCharCode(i1iiiIi & 63 | 128));
              }
              return lI1IillI;
            }
          }
          let ii1Iiili = "",
            IIliiIl,
            iI1Il1l,
            lIIilIlI,
            l1ii1il,
            IIll1IiI,
            lIliIiIi,
            i11ilii,
            l1liIlil = 0;
          IIlilii = iIliIlli(IIlilii);
          while (l1liIlil < IIlilii.length) {
            IIliiIl = IIlilii.charCodeAt(l1liIlil++);
            iI1Il1l = IIlilii.charCodeAt(l1liIlil++);
            lIIilIlI = IIlilii.charCodeAt(l1liIlil++);
            l1ii1il = IIliiIl >> 2;
            IIll1IiI = (IIliiIl & 3) << 4 | iI1Il1l >> 4;
            lIliIiIi = (iI1Il1l & 15) << 2 | lIIilIlI >> 6;
            i11ilii = lIIilIlI & 63;
            if (isNaN(iI1Il1l)) lIliIiIi = i11ilii = 64;else isNaN(lIIilIlI) && (i11ilii = 64);
            ii1Iiili = ii1Iiili + llIiiili.charAt(l1ii1il) + llIiiili.charAt(IIll1IiI) + llIiiili.charAt(lIliIiIi) + llIiiili.charAt(i11ilii);
          }
          while (ii1Iiili.length % 4 > 1) ii1Iiili += "=";
          return ii1Iiili;
        }
      },
      "decode": () => {
        function l1il(ll1lI1ii) {
          let l1iIiiI = "",
            II1l1111,
            llI1iIli,
            Il1I1i1I,
            ll11Iil1 = 0;
          while (ll11Iil1 < ll1lI1ii.length) {
            II1l1111 = ll1lI1ii.charCodeAt(ll11Iil1);
            if (II1l1111 < 128) l1iIiiI += String.fromCharCode(II1l1111), ll11Iil1++;else II1l1111 > 191 && II1l1111 < 224 ? (llI1iIli = ll1lI1ii.charCodeAt(ll11Iil1 + 1), l1iIiiI += String.fromCharCode((II1l1111 & 31) << 6 | llI1iIli & 63), ll11Iil1 += 2) : (llI1iIli = ll1lI1ii.charCodeAt(ll11Iil1 + 1), Il1I1i1I = ll1lI1ii.charCodeAt(ll11Iil1 + 2), l1iIiiI += String.fromCharCode((II1l1111 & 15) << 12 | (llI1iIli & 63) << 6 | Il1I1i1I & 63), ll11Iil1 += 3);
          }
          return l1iIiiI;
        }
        let lllII1I = "",
          iIl1Il1,
          Il1lil1i,
          i1Ilil1,
          II1IIiIl,
          llliII1l,
          l1i11Ii,
          III1iIIi,
          Ii1II11l = 0;
        while (Ii1II11l < IIlilii.length) {
          II1IIiIl = llIiiili.indexOf(IIlilii.charAt(Ii1II11l++));
          llliII1l = llIiiili.indexOf(IIlilii.charAt(Ii1II11l++));
          l1i11Ii = llIiiili.indexOf(IIlilii.charAt(Ii1II11l++));
          III1iIIi = llIiiili.indexOf(IIlilii.charAt(Ii1II11l++));
          iIl1Il1 = II1IIiIl << 2 | llliII1l >> 4;
          Il1lil1i = (llliII1l & 15) << 4 | l1i11Ii >> 2;
          i1Ilil1 = (l1i11Ii & 3) << 6 | III1iIIi;
          lllII1I += String.fromCharCode(iIl1Il1);
          if (l1i11Ii != 64) lllII1I += String.fromCharCode(Il1lil1i);
          if (III1iIIi != 64) lllII1I += String.fromCharCode(i1Ilil1);
        }
        lllII1I = l1il(lllII1I);
        return lllII1I;
      }
    };
  }
  async ["getLoginStatus"](IiI1Ii1I = this._Cookie) {
    if (!IiI1Ii1I) return console.log("🚫 getLoginStatus 请求失败 ➜ 未设置Cookie"), undefined;
    try {
      {
        const il1I1I1I = {
          "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
          "method": "GET",
          "headers": {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "Cookie": IiI1Ii1I,
            "Host": "plogin.m.jd.com",
            "User-Agent": this._UserAgent || this._defaultUserAgent
          },
          "timeout": 30000,
          "debug": false
        };
        let iil1IilI = 0,
          lI1llI = null;
        const li1111il = 1;
        while (iil1IilI < li1111il) {
          {
            const iiIiIiIl = await this.request(il1I1I1I);
            if (!iiIiIiIl.success) {
              lI1llI = "🚫 getLoginStatus 请求失败 ➜ " + iiIiIiIl.error;
              iil1IilI++;
              continue;
            }
            if (!iiIiIiIl.data) {
              lI1llI = "🚫 getLoginStatus 请求异常 ➜ 无响应数据";
              iil1IilI++;
              continue;
            }
            const l11iiii1 = iiIiIiIl.data?.["islogin"];
            if (l11iiii1 === "1") return true;else {
              if (l11iiii1 === "0") return false;
            }
            iil1IilI++;
          }
        }
        iil1IilI >= li1111il && console.log(lI1llI);
      }
    } catch (iIIiiIi) {
      console.log("❌ getLoginStatus 在处理请求中遇到了错误\n" + iIIiiIi);
    }
    return undefined;
  }
  async ["joinShopMember"](IillI1l1, ilIlliII = this._Cookie) {
    if (!ilIlliII) return console.log("🚫 joinShopMember 请求失败 ➜ 未设置Cookie"), undefined;
    if (!IillI1l1) return undefined;
    try {
      this._loadModule("h5st");
      const il111lII = {
        "appId": "27004",
        "appid": "shopmember_m_jd_com",
        "functionId": "bindWithVender",
        "clientVersion": "9.2.0",
        "client": "H5",
        "body": {
          "venderId": IillI1l1,
          "shopId": IillI1l1,
          "bindByVerifyCodeFlag": 1,
          "registerExtend": {},
          "writeChildFlag": 0,
          "channel": 102,
          "appid": "27004",
          "needSecurity": true,
          "bizId": "shopmember_m_jd_com"
        },
        "version": "4.1",
        "t": true,
        "ua": this._UserAgent || this._defaultUserAgent
      };
      if (!this._H5st) return undefined;
      const i1iII1il = await this._H5st.getH5st(il111lII);
      if (!i1iII1il.paramsData) {
        return undefined;
      }
      const Iil111Il = {
          "url": "https://api.m.jd.com/client.action",
          "method": "POST",
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "https://pages.jd.com",
            "Host": "api.m.jd.com",
            "Accept": "*/*",
            "User-Agent": this._UserAgent || this._defaultUserAgent,
            "Cookie": ilIlliII
          },
          "data": Object.assign({}, i1iII1il.paramsData, {
            "area": "",
            "uuid": "88888"
          }),
          "timeout": 30000
        },
        li1lil = await this.request(Iil111Il);
      if (!li1lil.success) {
        console.log("🚫 joinShopMember 请求失败 ➜ " + li1lil.error);
        return undefined;
      }
      if (!li1lil.data) return console.log("🚫 joinShopMember 请求异常 ➜ 无响应数据"), undefined;
      const ll1ii11l = li1lil.data;
      if (ll1ii11l?.["success"] === true) {
        if (ll1ii11l?.["result"] && ll1ii11l.result?.["giftInfo"]) for (let i1ll1Ii of ll1ii11l.result?.["giftInfo"]?.["giftList"]) {
          console.log(" >> 入会获得：" + i1ll1Ii.discountString + i1ll1Ii.prizeName + i1ll1Ii.secondLineDesc);
        }
        if (ll1ii11l?.["message"] === "加入店铺会员成功") {
          return true;
        } else {
          if (ll1ii11l?.["message"] === "活动太火爆，请稍后再试") {
            console.log("🚫 加入店铺会员失败 ➜ " + ll1ii11l.message);
          } else {
            console.log("🚫 加入店铺会员失败 ➜ " + ll1ii11l?.["message"]);
            return false;
          }
        }
      } else {
        if (ll1ii11l?.["message"]) return console.log("🚫 加入店铺会员失败 ➜ " + ll1ii11l.message), false;else console.log("🚫 加入店铺会员失败 ➜ " + JSON.stringify(ll1ii11l));
      }
    } catch (iliII1il) {
      console.log("❌ joinShopMember 在处理请求中遇到了错误\n" + iliII1il);
    }
    return undefined;
  }
  async ["getShopMemberStatus"](lIlii1Il, lIi11Il = this._Cookie) {
    if (!lIi11Il) {
      console.log("🚫 getShopMemberStatus 请求失败 ➜ 未设置Cookie");
      return undefined;
    }
    if (!lIlii1Il) {
      return undefined;
    }
    try {
      this._loadModule("h5st");
      const lilil1 = {
        "appId": "27004",
        "appid": "shopmember_m_jd_com",
        "functionId": "getShopOpenCardInfo",
        "clientVersion": "9.2.0",
        "client": "H5",
        "body": {
          "venderId": lIlii1Il,
          "channel": 2,
          "payUpShop": true,
          "queryVersion": "10.5.2",
          "appid": "27004",
          "needSecurity": true,
          "bizId": "shopmember_m_jd_com"
        },
        "version": "3.1",
        "ua": this._UserAgent || this._defaultUserAgent
      };
      if (!this._H5st) return undefined;
      const li1il1i = await this._H5st.getH5st(lilil1);
      if (!li1il1i.paramsData) return undefined;
      const IliI1IiI = {
          "url": "https://api.m.jd.com/client.action",
          "method": "GET",
          "headers": {
            "Content-Type": "application/json;charset=utf-8",
            "Origin": "https://api.m.jd.com",
            "Host": "api.m.jd.com",
            "Accept": "*/*",
            "User-Agent": this._UserAgent || this._defaultUserAgent,
            "Cookie": lIi11Il
          },
          "params": li1il1i.paramsData,
          "timeout": 30000
        },
        l111iIlI = await this.request(IliI1IiI);
      if (!l111iIlI.success) {
        console.log("🚫 getShopMemberStatus 请求失败 ➜ " + l111iIlI.error);
        return undefined;
      }
      if (!l111iIlI.data) return console.log("🚫 getShopMemberStatus 请求异常 ➜ 无响应数据"), undefined;
      const I1III1ll = l111iIlI.data;
      if (I1III1ll?.["success"] === true) {
        {
          console.log("去加入：" + (I1III1ll.result?.["shopMemberCardInfo"]?.["venderCardName"] || "未知"));
          if (I1III1ll?.["result"]?.["userInfo"]?.["openCardStatus"] === 1) {
            return true;
          } else return false;
        }
      } else I1III1ll?.["message"] ? console.log("🚫 获取店铺会员状态异常 ➜ " + I1III1ll.message) : console.log("🚫 获取店铺会员状态异常 ➜ " + JSON.stringify(I1III1ll));
    } catch (il11i11) {
      console.log("❌ getShopMemberStatus 在处理请求中遇到了错误\n" + il11i11);
    }
    return undefined;
  }
  async ["getShopDetail"](I1I1llli = {
    "venderId": "",
    "shopId": ""
  }, l11I1i1l = this._Cookie) {
    const {
      venderId: Ili1lli,
      shopId: Ili1i1ii
    } = I1I1llli;
    if (!Ili1lli && !Ili1i1ii) return {};
    try {
      {
        const liililIi = {
            "url": "https://api.m.jd.com/client.action",
            "method": "POST",
            "headers": {
              "Accept": "*/*",
              "Accept-Encoding": "gzip, deflate, br",
              "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
              "Content-Type": "application/x-www-form-urlencoded",
              "Origin": "https://shop.m.jd.com",
              "Referer": "https://shop.m.jd.com/",
              "Host": "api.m.jd.com",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-site",
              "User-Agent": this._defaultUserAgent,
              "X-Referer-Page": "https://shop.m.jd.com/shop/introduce",
              "X-Rp-Client": "h5_1.0.0",
              "Cookie": l11I1i1l || ""
            },
            "data": {
              "functionId": "whx_getMShopDetail",
              "body": JSON.stringify({
                "shopId": "".concat(Ili1i1ii || ""),
                "venderId": "".concat(Ili1lli || ""),
                "source": "m-shop"
              }),
              "t": Date.now().toString(),
              "appid": "shop_m_jd_com",
              "clientVersion": "11.0.0",
              "client": "wh5",
              "area": "",
              "uuid": ""
            },
            "timeout": 30000
          },
          iIiiIllI = await this.request(liililIi);
        if (!iIiiIllI.success) {
          console.log("🚫 getShopDetail 请求失败 ➜ " + iIiiIllI.error);
          return {};
        }
        if (!iIiiIllI.data) {
          console.log("🚫 getShopDetail 请求异常 ➜ 无响应数据");
          return {};
        }
        const Ii1IiIIl = iIiiIllI.data;
        if (Ii1IiIIl.code === "200" && Ii1IiIIl.success === true && Ii1IiIIl.data) {
          return Ii1IiIIl?.["data"] || {};
        } else {
          if (Ii1IiIIl?.["msg"]) {
            console.log("🚫 获取店铺信息异常 ➜ " + Ii1IiIIl.message);
          } else console.log("🚫 获取店铺信息异常 ➜ " + JSON.stringify(Ii1IiIIl));
        }
      }
    } catch (ll1IIliI) {
      console.log("❌ getShopDetail 在处理请求中遇到了错误\n" + ll1IIliI);
    }
    return {};
  }
  async ["getShopId"](iiIliiil, IliIIiI = this._Cookie) {
    if (!iiIliiil) {
      return null;
    }
    try {
      const IIli11lI = await this.getShopDetail({
        "venderId": iiIliiil
      }, IliIIiI);
      return IIli11lI?.["shopBaseInfo"]?.["shopId"] || null;
    } catch (i1ilIIli) {
      console.log("❌ getShopId 在处理请求中遇到了错误\n" + i1ilIIli);
    }
    return null;
  }
  async ["getVenderId"](iiIi1Ii, lI11II11 = this._Cookie) {
    if (!iiIi1Ii) return null;
    try {
      {
        const II1iIii1 = await this.getShopDetail({
          "shopId": iiIi1Ii
        }, lI11II11);
        return II1iIii1?.["shopBaseInfo"]?.["venderId"] || null;
      }
    } catch (lIli111I) {
      console.log("❌ getVenderId 在处理请求中遇到了错误\n" + lIli111I);
    }
    return null;
  }
  async ["getShopName"](lIiil1Il = {
    "venderId": "",
    "shopId": ""
  }, Ili11II1 = this._Cookie) {
    const {
      venderId: l1111l11,
      shopId: iI1lliI
    } = lIiil1Il;
    if (!l1111l11 && !iI1lliI) return null;
    try {
      const IiliIl1i = await this.getShopDetail(lIiil1Il, Ili11II1);
      return IiliIl1i?.["shopBaseInfo"]?.["shopName"] || null;
    } catch (IiIil1l1) {
      console.log("❌ getShopName 在处理请求中遇到了错误\n" + IiIil1l1);
    }
    return null;
  }
  async ["followShop"](IiI111l, IillI1I1, IllIlli1 = this._Cookie) {
    if (!IllIlli1) {
      console.log("🚫 followShop 请求失败 ➜ 未设置Cookie");
      return undefined;
    }
    if (!IiI111l && typeof IiI111l !== "boolean" || !IillI1I1) return undefined;
    try {
      const IlIiI11I = {
          "url": "https://api.m.jd.com/client.action",
          "method": "POST",
          "headers": {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "https://shop.m.jd.com",
            "Referer": "https://shop.m.jd.com/",
            "Connection": "keep-alive",
            "Accept-Language": "zh-cn",
            "Cookie": IllIlli1,
            "User-Agent": this._defaultUserAgent
          },
          "data": {
            "functionId": "whx_followShop",
            "body": JSON.stringify({
              "shopId": IillI1I1,
              "follow": IiI111l
            }),
            "t": Date.now(),
            "appid": "shop_m_jd_com",
            "clientVersion": "11.0.0",
            "client": "wh5"
          },
          "timeout": 30000
        },
        lil1ll1I = await this.request(IlIiI11I);
      if (!lil1ll1I.success) return console.log("🚫 followShop 请求失败 ➜ " + lil1ll1I.error), undefined;
      if (!lil1ll1I.data) {
        console.log("🚫 followShop 请求异常 ➜ 无响应数据");
        return undefined;
      }
      const IlIIlI = lil1ll1I.data;
      if (IlIIlI?.["code"] === "0") return IlIIlI?.["result"]?.["code"] === "0" ? true : false;else {
        if (IlIIlI?.["msg"]) return false;else {
          console.log("🚫 " + (IiI111l ? "关注" : "取关") + "店铺异常 ➜ " + JSON.stringify(IlIIlI));
        }
      }
    } catch (iliiIiil) {
      console.log("❌ followShop 在处理请求中遇到了错误\n" + iliiIiil);
    }
    return undefined;
  }
  ["useAppTls"](Iili11li = {}) {
    return Object.assign({}, this._appHttpsTlsOptions, Iili11li);
  }
  async ["concTask"](i1l1I1lI = "3", l1iiI1I, IlliiII) {
    let l1lIll11 = false,
      ilI1IIl1 = 0,
      iiiill11 = 0;
    async function l1iiIi11(iI1I1II, ll11Il1I) {
      const lIlilI11 = await IlliiII(iI1I1II, ll11Il1I);
      if (lIlilI11) {
        if (typeof lIlilI11 === "boolean") l1lIll11 = true;else {
          if (typeof lIlilI11 === "object") {
            lIlilI11?.["runEnd"] && (l1lIll11 = true);
          }
        }
      }
      ilI1IIl1--;
      ii1Illi1();
    }
    async function ii1Illi1() {
      {
        while (ilI1IIl1 < i1l1I1lI && l1iiI1I.length > 0 && !l1lIll11) {
          const iiIIlIll = l1iiI1I.shift();
          ilI1IIl1++;
          iiiill11++;
          await l1iiIi11(iiIIlIll, iiiill11);
        }
        l1lIll11 && (await new Promise(iII11li1 => {
          {
            const iIliII1l = setInterval(() => {
              if (ilI1IIl1 === 0) {
                clearInterval(iIliII1l);
                iII11li1();
              }
            }, 100);
          }
        }));
      }
    }
    const llI11lI = Math.min(l1iiI1I.length, i1l1I1lI),
      Iilili1l = [];
    for (let I1liiII1 = 0; I1liiII1 < llI11lI; I1liiII1++) {
      const IlI1l1ii = l1iiI1I.shift();
      ilI1IIl1++;
      iiiill11++;
      Iilili1l.push(l1iiIi11(IlI1l1ii, iiiill11));
    }
    await Promise.all(Iilili1l);
    ii1Illi1();
    await new Promise(ili1lII => {
      {
        const liiIiIll = setInterval(() => {
          (ilI1IIl1 === 0 || l1lIll11) && (clearInterval(liiIiIll), ili1lII());
        }, 100);
      }
    });
  }
  async ["getSign"](liI1ii11, lII1I1i1) {
    !this._hasInitAppSignConfig && (this._initAppSignConfig(), this._hasInitAppSignConfig = true);
    let i1lI1li = "";
    try {
      const i1I11iI = this._appSignConfig;
      if (i1I11iI.genSign) {
        {
          try {
            i1lI1li = i1I11iI.genSign(liI1ii11, lII1I1i1);
          } catch (IIlllil1) {
            console.log("🚫 getSign 获取本地签名遇到了错误 ➜ " + (IIlllil1.message || IIlllil1));
          }
          if (i1lI1li) return i1lI1li;else console.log("🚫 getSign 本地签名获取失败");
        }
      }
      let IliIi11 = {
        [i1I11iI.functionIdField]: liI1ii11,
        [i1I11iI.bodyField]: lII1I1i1
      };
      const l1I1iIi1 = {
        "url": i1I11iI.requestApi,
        "method": i1I11iI.requestMethod.toLowerCase(),
        "headers": {
          "Content-Type": i1I11iI.requestContentType
        },
        "data": null,
        "timeout": 60000,
        "proxy": null,
        "debug": false
      };
      if (i1I11iI.requestMethod === "GET") i1I11iI.requestApi += "?" + this.objectToQueryString(IliIi11), delete l1I1iIi1.data, delete l1I1iIi1.headers["Content-Type"];else {
        {
          if (i1I11iI.requestContentType.indexOf("application/x-www-form-urlencoded") !== -1) {
            {
              if (typeof IliIi11[i1I11iI.bodyField] === "object") {
                IliIi11[i1I11iI.bodyField] = JSON.stringify(IliIi11[i1I11iI.bodyField]);
              }
              l1I1iIi1.data = this.objectToQueryString(IliIi11);
            }
          } else l1I1iIi1.data = JSON.stringify(IliIi11);
        }
      }
      const II11llii = await this.request(l1I1iIi1);
      if (!II11llii.success) return console.log("🚫 getSign 请求失败 ➜ " + II11llii.error), i1lI1li;else {}
      if (!II11llii.data) return console.log("🚫 getSign 请求异常 ➜ 无响应数据"), i1lI1li;
      try {
        {
          if (typeof II11llii.data === "object") {
            let IiiIli = II11llii?.["data"];
            if (IiiIli?.["data"]) {
              IiiIli = IiiIli.data;
            }
            if (IiiIli?.["body"] && this._checkSignStrFormat(IiiIli.body)) {
              i1lI1li = IiiIli.body;
            } else {
              if (IiiIli?.["convertUrl"] && this._checkSignStrFormat(IiiIli.convertUrl)) i1lI1li = IiiIli.convertUrl;else {
                if (IiiIli?.["convertUrlNew"] && this._checkSignStrFormat(IiiIli.convertUrlNew)) {
                  i1lI1li = IiiIli.convertUrlNew;
                }
              }
            }
            !i1lI1li && console.log("🚫 getSign 响应数据解析异常 ➜ " + JSON.stringify(IiiIli));
          } else {
            if (this._checkSignStrFormat(II11llii)) {
              i1lI1li = II11llii;
            } else console.log("🚫 getSign 响应数据解析异常 ➜ " + II11llii);
          }
        }
      } catch {
        console.log("🚫 getSign 响应数据解析异常 ➜ " + JSON.stringify(data));
      }
    } catch (I11iilII) {
      console.log("🚫 getSign 在处理请求中遇到了错误\n" + I11iilII);
    }
    return i1lI1li;
  }
  ["_checkSignStrFormat"](I1iIIiII) {
    const iIili1li = ["body=", "st=", "sign=", "sv="];
    for (let iil1ilII = 0; iil1ilII < iIili1li.length; iil1ilII++) {
      if (!I1iIIiII.includes(iIili1li[iil1ilII])) return false;
    }
    return true;
  }
  ["_loadModule"](IiIIli1) {
    switch (IiIIli1) {
      case "h5st":
        if (!this._H5st) try {
          {
            const {
              H5st: IIi1lIi
            } = require(this._jdCryptoModelPath);
            this._H5st = IIi1lIi;
          }
        } catch (iiI1lII1) {
          console.log("❌ h5st 组件加载失败");
        }
        break;
      case "TablePrint":
        if (!this._Table) try {
          {
            const {
              Table: I11liI1i
            } = require("console-table-printer");
            this._Table = I11liI1i;
          }
        } catch (Ii1lIi) {
          console.log("❌ TablePrint 组件加载失败");
        }
        break;
      case "HttpsProxyAgent":
        if (!this._HttpsProxyAgent) {
          try {
            {
              const {
                HttpsProxyAgent: I1lIiiii
              } = require("https-proxy-agent");
              this._HttpsProxyAgent = I1lIiiii;
            }
          } catch (iiiiIll) {
            try {
              const IIl1I1i = require("https-proxy-agent");
              this._HttpsProxyAgent = IIl1I1i;
            } catch (Il1111I) {
              console.log("❌ https-proxy-agent 代理模块加载失败");
            }
          }
        }
        break;
      default:
        break;
    }
  }
}
module.exports = new Common();