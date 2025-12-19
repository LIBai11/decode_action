//Fri Dec 19 2025 10:18:51 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var rxetjS = Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79'],
  TaQIiK,
  zYJb7eh,
  OCL1TU,
  KbBYLyW,
  oybxB2,
  nYYAKMt,
  w7Xyd45,
  ZCrnjUc,
  iHeAMh,
  YNQbkBD,
  mMdQGim,
  JtJHI5;
function fINIk6G() {
  return globalThis;
}
function wF3JiLE() {
  return global;
}
function f_B4Cl() {
  return window;
}
function xZQi6B() {
  return new Function("return this")();
}
function IL5gE3(rxetjS = [fINIk6G, wF3JiLE, f_B4Cl, xZQi6B], prEjtk, FKIKvm = [], TaQIiK, zYJb7eh) {
  prEjtk = prEjtk;
  try {
    prEjtk = Object
    FKIKvm.push(''.__proto__["constructor"].name)
  } catch (e) {}
  s5dVwVR: for (TaQIiK = 0; TaQIiK < rxetjS.length; TaQIiK++) try {
    prEjtk = rxetjS[TaQIiK]();
    for (zYJb7eh = 0; zYJb7eh < FKIKvm.length; zYJb7eh++) if (typeof prEjtk[FKIKvm[zYJb7eh]] === "undefined") {
      continue s5dVwVR;
    }
    return prEjtk;
  } catch (e) {}
  return prEjtk || this;
}
TaQIiK = IL5gE3() || {}
zYJb7eh = TaQIiK.TextDecoder
OCL1TU = TaQIiK["Uint8Array"]
KbBYLyW = TaQIiK.Buffer
oybxB2 = TaQIiK.String || String
nYYAKMt = TaQIiK["Array"] || Array
function P6_hdvq(...rxetjS) {
  return rxetjS[rxetjS["length"] - 1];
}
function dgGqGo(OjFdaZ, rxetjS) {
  switch (ZCrnjUc) {
    case -0x9:
      return OjFdaZ + rxetjS;
    case -0x2b:
      return OjFdaZ * rxetjS;
    case 51:
      return OjFdaZ - rxetjS;
    case -0x24:
      return OjFdaZ / rxetjS;
    case -0xd:
      return -OjFdaZ;
    case -0x11:
      return !OjFdaZ;
    case 14:
      return typeof OjFdaZ;
  }
}
function EdB9_MH(OjFdaZ) {
  return P6_hdvq(OjFdaZ = ZCrnjUc + (ZCrnjUc = OjFdaZ, 0x0), OjFdaZ);
}
ZCrnjUc = ZCrnjUc
iHeAMh = Object["create"](null)
function wl52ooA(OjFdaZ, rxetjS) {
  return YNQbkBD(OjFdaZ, "length", {
    ["value"]: rxetjS,
    ["configurable"]: true
  });
}
YNQbkBD = Object["defineProperty"]
mMdQGim = Object.create(null)
JtJHI5 = []
const mWO7Gu = require('crypto-js'),
  fMQ7QU = require('querystring'),
  oiaEVy = require('./Rebels_jdCommon'),
  O3PM1FN = (() => {
    const OCL1TU = [],
      KbBYLyW = [],
      oybxB2 = [...OCL1TU, ...KbBYLyW],
      nYYAKMt = ["B6dB3QqGZP1lKNICTaiAeNJSHKNepO5GGgtL6FUceqSlpFZCdx2SZ5MPPbzrgy91HeR0dnJazcMrvMgPF7bhFrfsGaApJKk4JohEEhoJ4kKJpAaGsfrFhb7FPgMvrMczaJnd0ReH19ygrzbPPM5ZS2xdCZFplSqecUF6LtgGG5OpeNKHSJNeAiaTCINKl1PZGqQ3Bd6B", "EUhzJoyKP7VydtpyBwNUGU2tqzI0QB0LIpQ10Fk3hX2ZcPoGRpACqmzcTQbKd98i3U7raFz2rMl2kys0ODgtAh22E3i57wmh38RbbR83hmw75i3E22hAtgDO0syk2lMr2zFar7U3i89dKbQTczmqCApRGoPcZ2Xh3kF01QpIL0BQ0Izqt2UGUNwByptdyV7PKyoJzhUE", "xexcHoyVwOs5TYTQVvU0iXn56ryKVdWedLTpq3KEKmbUHfwzuZjIpZOPVXMEappFhjdqwtp1bBrWaRBCfPFwCq2W8SsyvwqZ6sIGGIs6ZqwvysS8W2qCwFPfCBRaWrBb1ptwqdjhFppaEMXVPOZpIjZuzwfHUbmKEK3qpTLdeWdVKyr65nXi0UvVQTYT5sOwVyoHcxex", "2Llnegc5i4flqd4HZPFK210yh61boBxRSdnNVMeudKimx92Qi4aPuHP12HmEImbWrXjLgBGqy1bSnKvLhqMqhknyuse4nFoeLTkJJkTLeoFn4esuynkhqMqhLvKnSb1yqGBgLjXrWbmIEmH21PHuPa4iQ29xmiKdueMVNndSRxBob16hy012KFPZH4dqlf4i5cgenlL2", "dZzoMZF6xtt3voTFDbPzEZ7GeM8t7uY05d4K4xfhtdxELh96dDRB4oRYA2smET5dy1dafGkXOz2V7tNOVi0vSqfuhI99IKprVK6QQ6KVrpKI99IhufqSv0iVONt7V2zOXkGfad1yd5TEms2AYRo4BRDd69hLExdthfx4K4d50Yu7t8MeG7ZEzPbDFTov3ttx6FZMozZd", "SNYr3bWMtQulWZO2FEwuhSFp3EXPR1TujPRJwUFlxBh9Pvf2MeTEpR7a3dU6e9rNUMyBh2osDdK4Vdm4gZ0XcRCoHZPi2jiXT2dCCd2TXij2iPZHoCRcX0Zg4mdV4KdDso2hByMUNr9e6Ud3a7RpETeM2fvP9hBxlFUwJRPjuT1RPXE3pFShuwEF2OZWluQtMWb3rYNS", "4viQ2FrYHcrH44gqvPLo6KtiFu56AW1eXbDBZrBepzdLKE33Ey4TwFERnkVLnbHAXbKqAi0HFP9Eu7yg8WNlI7q2dvXGGiPaMbrBBrbMaPiGGXvd2q7IlNW8gy7uE9PFH0iAqKbXAHbnLVknREFwT4yE33EKLdzpeBrZBDbXe1WA65uFitK6oLPvqg44HrcHYrF2Qiv4", "0VIoSHBNVAW8De7NquFyEUm0o9xNnQJGn2OR1yOK9djWALhyP3a1XoQEwTnXuzypRuwsaLPUlertksOY6LYmnbQmPgdDQRXXKdKooKdKXXRQDdgPmQbnmYL6YOsktrelUPLaswuRpyzuXnTwEQoX1a3PyhLAWjd9KOy1RO2nGJQnNx9o0mUEyFuqN7eD8WAVNBHSoIV0", "fdJPBiTra9E0qg2HJrobeEC2SkOfSzbw6nG5J5ACx42GQDBsCyGfxNlHHYhl7EmkdvYaKAXUVXSKcTT1KhyYaj9Q4YtyhnOA7cLrrLc7AOnhytY4Q9jaYyhK1TTcKSXVUXAKaYvdkmE7lhYHHlNxfGyCsBDQG24xCA5J5Gn6wbzSfOkS2CEeborJH2gq0E9arTiBPJdf", "kLOA93PyUOX3QdlLuZ9JgNq1peyIITAQSnKzuLBZ2NthOSseAJMGCecvSLVKAww61Y31hJ4l7kAOcjLmtqQNJlNyJb5yu9d9vqWUUWqv9d9uy5bJyNlJNQqtmLjcOAk7l4Jh13Y16wwAKVLSvceCGMJAesSOhtN2ZBLuzKnSQATIIyep1qNgJ9ZuLldQ3XOUyP39AOLk"];
    function w7Xyd45(prEjtk, TaQIiK, OCL1TU) {
      let mMdQGim = dgGqGo(Date["now"](), parseInt(OCL1TU), ZCrnjUc = -9);
      if (typeof prEjtk !== "object") {
        prEjtk = JSON["parse"](prEjtk);
      }
      let fINIk6G = P6_hdvq(prEjtk["nowTime"] = mMdQGim, dgGqGo(TaQIiK, mMdQGim, EdB9_MH(-9)));
      const {
          ["keyBytes"]: wF3JiLE,
          ["ivBytes"]: f_B4Cl
        } = JtJHI5(fINIk6G),
        FGnovrW = mWO7Gu["AES"]["encrypt"](JSON["stringify"](prEjtk), wF3JiLE, {
          iv: f_B4Cl,
          ["mode"]: mWO7Gu["mode"]["ECB"],
          ["padding"]: mWO7Gu["pad"]["Pkcs7"]
        });
      return FGnovrW["toString"]();
    }
    function iHeAMh(prEjtk, TaQIiK, OCL1TU) {
      let YNQbkBD = dgGqGo(Date["now"](), parseInt(OCL1TU), EdB9_MH(-9)),
        mMdQGim = dgGqGo(TaQIiK, YNQbkBD, EdB9_MH(-9));
      const {
          ["keyBytes"]: fINIk6G,
          ["ivBytes"]: wF3JiLE
        } = JtJHI5(mMdQGim),
        f_B4Cl = mWO7Gu["AES"]["decrypt"](prEjtk, fINIk6G, {
          ["iv"]: wF3JiLE,
          ["mode"]: mWO7Gu["mode"]["ECB"],
          ["padding"]: mWO7Gu["pad"]["Pkcs7"]
        }),
        FGnovrW = mWO7Gu["enc"]["Utf8"]["stringify"](f_B4Cl)["toString"]();
      try {
        var ZCrnjUc = "parse";
        return JSON[ZCrnjUc](FGnovrW);
      } catch {
        return FGnovrW;
      }
    }
    function YNQbkBD(rxetjS) {
      const TaQIiK = Object["fromEntries"](oybxB2["map"](rxetjS => [rxetjS, true]));
      return TaQIiK[rxetjS] !== undefined;
    }
    function mMdQGim(prEjtk) {
      const OCL1TU = P6_hdvq(prEjtk = prEjtk["split"]('')["reverse"]()["join"](''), new Uint8Array(0xc)),
        KbBYLyW = new TextEncoder()["encode"](prEjtk);
      for (let oybxB2 = 0; oybxB2 < KbBYLyW["length"]; oybxB2 += 2) {
        let w7Xyd45 = KbBYLyW[oybxB2] << 0x5 | KbBYLyW[oybxB2 + 0x1] & 255;
        w7Xyd45 %= 63
        OCL1TU[oybxB2 >> 1] = w7Xyd45
      }
      let iHeAMh = '';
      for (let oybxB2 = 0; oybxB2 < OCL1TU["length"]; oybxB2++) {
        iHeAMh += dgGqGo(OCL1TU[oybxB2], 256, EdB9_MH(-9))["toString"](0x2)["slice"](1)
      }
      let JtJHI5 = '',
        fINIk6G = '';
      for (let oybxB2 = 0x0; oybxB2 < 0x10; oybxB2++) {
        if (oybxB2 !== 0x0) {
          const xZQi6B = dgGqGo(oybxB2, 6, EdB9_MH(-43)),
            IL5gE3 = iHeAMh["substring"](xZQi6B, dgGqGo(xZQi6B, 6, ZCrnjUc = -0x9));
          let wl52ooA = parseInt(IL5gE3, 0x2);
          const mWO7Gu = fINIk6G["split"]('');
          for (let fMQ7QU = 0; fMQ7QU < mWO7Gu["length"]; fMQ7QU++) if (mWO7Gu[fMQ7QU] === '1') {
            wl52ooA = (wl52ooA >> 6 - fMQ7QU | wl52ooA << fMQ7QU) & 63;
          }
          fINIk6G = (wl52ooA & 63)["toString"](2)["padStart"](0x6, "0");
        } else {
          fINIk6G = iHeAMh["substring"](0, 6)
        }
        JtJHI5 += fINIk6G;
      }
      for (let oybxB2 = 0; oybxB2 < 0xc; oybxB2++) {
        const xZQi6B = dgGqGo(oybxB2, 0x8, EdB9_MH(-43));
        OCL1TU[oybxB2] = parseInt(JtJHI5["substring"](xZQi6B, dgGqGo(xZQi6B, 8, ZCrnjUc = -0x9)), 0x2);
      }
      return btoa(String["fromCharCode"]["apply"](null, OCL1TU));
    }
    function JtJHI5(prEjtk) {
      var OCL1TU, KbBYLyW, oybxB2, w7Xyd45;
      const YNQbkBD = prEjtk["substring"](0x0, dgGqGo(prEjtk["length"], 0x5, ZCrnjUc = 51));
      let JtJHI5 = '';
      for (let w7Xyd45 = 0x0; w7Xyd45 < YNQbkBD["length"]; w7Xyd45++) {
        let fINIk6G = YNQbkBD["charCodeAt"](w7Xyd45),
          wF3JiLE = fINIk6G % 0xa,
          f_B4Cl = nYYAKMt[wF3JiLE][w7Xyd45];
        JtJHI5 += f_B4Cl;
      }
      OCL1TU = JtJHI5["length"]
      KbBYLyW = Math["floor"](dgGqGo(OCL1TU, 24, ZCrnjUc = -0x24))
      oybxB2 = ''
      for (w7Xyd45 = 0x0; w7Xyd45 < 24; w7Xyd45++) {
        var fMQ7QU, oiaEVy, O3PM1FN, _kHHzhI, u2GJ6LG, zUT94Sa;
        fMQ7QU = dgGqGo(w7Xyd45 + 1, KbBYLyW, EdB9_MH(-43))
        if (w7Xyd45 === 23 && true) {
          fMQ7QU = OCL1TU;
        }
        oiaEVy = JtJHI5["substring"](dgGqGo(w7Xyd45, KbBYLyW, EdB9_MH(-43)), fMQ7QU)
        O3PM1FN = []
        for (_kHHzhI = 0x0; _kHHzhI < oiaEVy["length"]; _kHHzhI++) O3PM1FN["push"](oiaEVy["charCodeAt"](_kHHzhI));
        u2GJ6LG = O3PM1FN["reduce"]((prEjtk, TaQIiK) => {
          return dgGqGo(prEjtk, TaQIiK, EdB9_MH(-9));
        }, 0x0)
        zUT94Sa = Math["floor"](dgGqGo(u2GJ6LG, O3PM1FN["length"], EdB9_MH(-36)))
        oybxB2 += String["fromCharCode"](zUT94Sa)
      }
      const ESkseQt = P6_hdvq(JtJHI5 = oybxB2, mMdQGim(JtJHI5)),
        N4rva3Y = mWO7Gu["enc"]["Utf8"]["parse"](ESkseQt),
        graMrrW = mWO7Gu["enc"]["Utf8"]["parse"]('');
      return {
        ["keyBytes"]: N4rva3Y,
        ["ivBytes"]: graMrrW
      };
    }
    const fINIk6G = (() => {
        const OCL1TU = mWO7Gu["enc"]["Utf8"]["parse"]("Hd5W5ONsYKmGm9QA"),
          KbBYLyW = mWO7Gu["enc"]["Utf8"]["parse"]("2JjUvJEAsA2Yog==");
        function oybxB2(TaQIiK) {
          var oybxB2 = "Utf8";
          if (typeof TaQIiK !== "string") {
            TaQIiK = JSON["stringify"](TaQIiK);
          }
          const nYYAKMt = mWO7Gu["enc"][oybxB2]["parse"](TaQIiK),
            YNQbkBD = mWO7Gu.AES.encrypt(nYYAKMt, OCL1TU, {
              iv: KbBYLyW,
              mode: mWO7Gu.mode.CBC,
              padding: mWO7Gu.pad.Pkcs7
            });
          return mWO7Gu["enc"]["Base64"]["stringify"](YNQbkBD["ciphertext"]);
        }
        function nYYAKMt(TaQIiK) {
          var oybxB2 = "Utf8";
          const YNQbkBD = mWO7Gu["enc"]["Base64"]["parse"](TaQIiK),
            w7Xyd45 = mWO7Gu.enc.Base64.stringify(YNQbkBD),
            iHeAMh = mWO7Gu.AES.decrypt(w7Xyd45, OCL1TU, {
              iv: KbBYLyW,
              mode: mWO7Gu.mode.CBC,
              padding: mWO7Gu.pad.Pkcs7
            }),
            mMdQGim = mWO7Gu["enc"][oybxB2]["stringify"](iHeAMh)["toString"]();
          try {
            return JSON["parse"](mMdQGim);
          } catch {
            return mMdQGim;
          }
        }
        return {
          ["encrypt"]: oybxB2,
          ["decrypt"]: nYYAKMt
        };
      })(),
      wF3JiLE = (() => {
        const OCL1TU = mWO7Gu["enc"]["Utf8"]["parse"]("12345678@guanmei"),
          KbBYLyW = mWO7Gu["enc"]["Utf8"]["parse"]("DYgjCEIMVrj2W9xN");
        function oybxB2(prEjtk) {
          if (typeof prEjtk !== "string") {
            prEjtk = JSON["stringify"](prEjtk);
          }
          const YNQbkBD = mWO7Gu["enc"]["Utf8"]["parse"](prEjtk),
            w7Xyd45 = mWO7Gu.AES.encrypt(YNQbkBD, OCL1TU, {
              iv: KbBYLyW,
              mode: mWO7Gu.mode.CBC,
              padding: mWO7Gu.pad.Pkcs7
            });
          return mWO7Gu["enc"]["Base64"]["stringify"](w7Xyd45["ciphertext"]);
        }
        function nYYAKMt(prEjtk) {
          var TaQIiK = {
            ["PQjunM7"]: "AES",
            ["re6OJ0"]: "Pkcs7"
          };
          let oybxB2 = prEjtk;
          try {
            oybxB2 = decodeURIComponent(prEjtk);
          } catch (decodeError) {}
          const nYYAKMt = mWO7Gu[TaQIiK.PQjunM7]["decrypt"](oybxB2, OCL1TU, {
            ["iv"]: KbBYLyW,
            ["mode"]: mWO7Gu["mode"]["CBC"],
            ["padding"]: mWO7Gu["pad"][TaQIiK.re6OJ0]
          })["toString"](mWO7Gu["enc"]["Utf8"]);
          try {
            return JSON["parse"](nYYAKMt);
          } catch {
            return nYYAKMt;
          }
        }
        function YNQbkBD(prEjtk) {
          try {
            const YNQbkBD = mWO7Gu["enc"]["Hex"]["parse"](prEjtk),
              w7Xyd45 = mWO7Gu.AES.decrypt({
                ciphertext: YNQbkBD
              }, OCL1TU, {
                iv: KbBYLyW,
                mode: mWO7Gu.mode.CBC,
                padding: mWO7Gu.pad.Pkcs7
              });
            return w7Xyd45["toString"](mWO7Gu["enc"]["Utf8"]);
          } catch (error) {
            return P6_hdvq(console["error"]("解密失败:", error), null);
          }
        }
        return {
          ["encrypt"]: oybxB2,
          ["decrypt"]: nYYAKMt,
          ["decryptHex"]: YNQbkBD
        };
      })();
    return {
      ["encrypt"]: w7Xyd45,
      ["decrypt"]: iHeAMh,
      ["isDefenseApi"]: YNQbkBD,
      ["interactionV2"]: fINIk6G,
      ["cryptoHelper"]: wF3JiLE
    };
  })();
async function _kHHzhI(rxetjS, prEjtk, TaQIiK = {}, zYJb7eh = {}) {
  var OCL1TU = ["jsToken"],
    KbBYLyW,
    oybxB2;
  KbBYLyW = Object.create(null)
  oybxB2 = []
  let nYYAKMt = {
    ["eid"]: '',
    [OCL1TU[0x0]]: '',
    ["fp"]: ''
  };
  try {
    const fINIk6G = zUT94Sa["hash128"]([rxetjS["substring"](0x0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", '\u004e\u0041', '\x4e\x41', 0x20, "932x430", dgGqGo(0x1e0, EdB9_MH(-13)), "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", '\u004e\u0041', "iPhone", 0xa, '\u004e\u0041', '', null, null]["join"]("~~~"), 31),
      wF3JiLE = P6_hdvq(nYYAKMt.fp = fINIk6G, (oybxB2 = [Object["assign"]({}, {
        ["pin"]: '',
        ["oid"]: '',
        ["bizId"]: "jd-babelh5",
        fc: '',
        ["mode"]: "strict",
        p: /^https:/["test"](prEjtk) ? 's' : '\u0068',
        ["fp"]: fINIk6G,
        ["ctype"]: 1,
        v: "3.2.1.1",
        f: '3',
        o: prEjtk["replace"](/^https?:\/\//, ''),
        qs: '',
        ["jsTk"]: '',
        qi: '',
        ["stk"]: ''
      }, TaQIiK)], new UijrEI("_RBO9E", undefined, "ESnT_Gz").VlcvDL)),
      f_B4Cl = (oybxB2 = [Object["assign"]({}, {
        ts: {
          ["deviceTime"]: Date["now"](),
          ["deviceEndTime"]: dgGqGo(Date["now"](), 0x14, ZCrnjUc = -0x9)
        },
        ca: {
          ["tdHash"]: ''
        },
        m: {
          ["compatMode"]: "CSS1Compat"
        },
        fo: ["Bauhaus 93", "Chalkduster", "Impact", "Menlo", "Papyrus", "Rockwell"],
        n: {
          ["standalone"]: false,
          ["hardwareConcurrency"]: 4,
          ["webdriver"]: false,
          ["maxTouchPoints"]: 0x5,
          ["cookieEnabled"]: true,
          ["appCodeName"]: "Mozilla",
          ["appName"]: "Netscape",
          ["appVersion"]: /\/(.+)/g["exec"](rxetjS) && /\/(.+)/g["exec"](rxetjS)[1] || rxetjS,
          ["platform"]: "iPhone",
          ["product"]: "Gecko",
          ["productSub"]: "20030107",
          ["userAgent"]: rxetjS,
          ["vendor"]: "Apple Computer, Inc.",
          ["vendorSub"]: '',
          ["language"]: "zh-CN",
          ["onLine"]: true,
          ["pdfViewerEnabled"]: true,
          ["javaEnabled"]: false,
          ["enumerationOrder"]: ["sendBeacon", "standalone", "hardwareConcurrency", "clipboard", "audioSession", "credentials", "geolocation", "mediaCapabilities", "mediaSession", "mediaDevices", "permissions", "wakeLock", "locks", "webdriver", "maxTouchPoints", "userActivation", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform", "product", "productSub", "userAgent", "vendor", "vendorSub", "language", "languages", "onLine", "plugins", "mimeTypes", "pdfViewerEnabled", "storage", "requestMediaKeySystemAccess", "getGamepads", "javaEnabled", "canShare", "share"]
        },
        p: [],
        ["w"]: {
          ["devicePixelRatio"]: 0x1,
          ["screenTop"]: 0x0,
          ["screenLeft"]: 0x0
        },
        s: {
          ["availHeight"]: 0x34c,
          ["availWidth"]: 390,
          ["colorDepth"]: 24,
          ["height"]: 0x34c,
          ["width"]: 390,
          ["pixelDepth"]: 24
        },
        sc: {
          ["ActiveBorder"]: "rgb(118, 118, 118)",
          ["ActiveCaption"]: "rgb(0, 0, 0)",
          ["AppWorkspace"]: "rgb(255, 255, 255)",
          ["Background"]: "rgb(255, 255, 255)",
          ["ButtonFace"]: "rgb(239, 239, 239)",
          ["ButtonHighlight"]: "rgb(239, 239, 239)",
          ["ButtonShadow"]: "rgb(239, 239, 239)",
          ["ButtonText"]: "rgb(0, 0, 0)",
          ["CaptionText"]: "rgb(0, 0, 0)",
          ["GrayText"]: "rgb(128, 128, 128)",
          ["Highlight"]: "rgba(51, 181, 229, 0.4)",
          ["HighlightText"]: "rgb(255, 255, 255)",
          ["InactiveBorder"]: "rgb(118, 118, 118)",
          ["InactiveCaption"]: "rgb(255, 255, 255)",
          ["InactiveCaptionText"]: "rgb(128, 128, 128)",
          ["InfoBackground"]: "rgb(255, 255, 255)",
          ["InfoText"]: "rgb(0, 0, 0)",
          ["Menu"]: "rgb(255, 255, 255)",
          ["MenuText"]: "rgb(0, 0, 0)",
          ["Scrollbar"]: "rgb(255, 255, 255)",
          ["ThreeDDarkShadow"]: "rgb(118, 118, 118)",
          ["ThreeDFace"]: "rgb(239, 239, 239)",
          ["ThreeDHighlight"]: "rgb(118, 118, 118)",
          ["ThreeDLightShadow"]: "rgb(118, 118, 118)",
          ["ThreeDShadow"]: "rgb(118, 118, 118)",
          ["Window"]: "rgb(255, 255, 255)",
          ["WindowFrame"]: "rgb(118, 118, 118)",
          ["WindowText"]: "rgb(0, 0, 0)"
        },
        ss: {
          ["cookie"]: true,
          ["localStorage"]: true,
          ["sessionStorage"]: true,
          ["globalStorage"]: false,
          ["indexedDB"]: true
        },
        tz: dgGqGo(480, EdB9_MH(-0xd)),
        ["lil"]: '',
        ["wil"]: ''
      }, zYJb7eh)], new UijrEI("_RBO9E", undefined, "ESnT_Gz").VlcvDL),
      xZQi6B = {
        ["url"]: "https://gia.jd.com/jsTk.do",
        ["method"]: "POST",
        ["headers"]: {
          ["Accept"]: "*/*",
          ["Accept-Encoding"]: "gzip, deflate, br",
          ["Accept-Language"]: "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
          ["Content-Type"]: "application/x-www-form-urlencoded;charset=UTF-8",
          ["Connection"]: "keep-alive",
          ["Host"]: "gia.jd.com",
          ["Origin"]: oiaEVy["parseUrl"](prEjtk)?.["origin"] || "https://pro.m.jd.com",
          ["Referer"]: prEjtk,
          ["Sec-Fetch-Dest"]: "empty",
          ["Sec-Fetch-Mode"]: "cors",
          ["Sec-Fetch-Site"]: "same-site",
          ["User-Agent"]: rxetjS
        },
        ["params"]: {
          a: wF3JiLE
        },
        ["data"]: {
          d: f_B4Cl
        },
        ["proxy"]: null,
        ["timeout"]: 0xea60,
        ["debug"]: false
      };
    let IL5gE3 = 0,
      mWO7Gu = null;
    const fMQ7QU = 1;
    while (IL5gE3 < fMQ7QU && true) {
      const O3PM1FN = await oiaEVy["request"](xZQi6B);
      if (dgGqGo(O3PM1FN["success"], EdB9_MH(-17))) {
        mWO7Gu = `❌ jsTk 请求失败 ➜ ${O3PM1FN["error"]}`
        IL5gE3++
        continue;
      }
      if (dgGqGo(O3PM1FN["data"], EdB9_MH(-17))) {
        mWO7Gu = "🚫 jsTk 请求失败 ➜ 无响应数据"
        IL5gE3++
        continue;
      }
      try {
        const _kHHzhI = O3PM1FN["data"];
        if (_kHHzhI?.["data"]?.["eid"] && _kHHzhI?.["data"]?.["token"]) {
          return P6_hdvq(nYYAKMt["eid"] = _kHHzhI["data"]["eid"], nYYAKMt["jsToken"] = _kHHzhI["data"]["token"], nYYAKMt);
        }
        mWO7Gu = `🚫 jsTk 请求异常 ➜ ${JSON["stringify"](_kHHzhI)}`;
      } catch (error) {
        mWO7Gu = `❌ jsTk 在处理接口响应时遇到了错误 ➜ ${error["message"] || error}`;
      }
      IL5gE3++;
    }
    if (IL5gE3 >= fMQ7QU) {
      console["log"](mWO7Gu);
    }
  } catch (error) {
    console["log"](`❌ 在处理 jsTk 时遇到了错误 ➜ ${error["message"] || error}`);
  }
  return nYYAKMt;
  function UijrEI(rxetjS, prEjtk, TaQIiK, zYJb7eh, OCL1TU, nYYAKMt) {
    zYJb7eh = {
      ["_RBO9E"]: (rxetjS, prEjtk, TaQIiK, zYJb7eh, OCL1TU, nYYAKMt, w7Xyd45, KbBYLyW) => {
        var [iHeAMh] = oybxB2;
        rxetjS = P6_hdvq(iHeAMh = JSON["stringify"](iHeAMh), iHeAMh = encodeURIComponent(iHeAMh), '')
        prEjtk = 0
        do {
          TaQIiK = iHeAMh["charCodeAt"](prEjtk++)
          zYJb7eh = iHeAMh["charCodeAt"](prEjtk++)
          OCL1TU = iHeAMh["charCodeAt"](prEjtk++)
          nYYAKMt = TaQIiK >> 0x2
          w7Xyd45 = P6_hdvq(TaQIiK = (TaQIiK & 3) << 4 | zYJb7eh >> 4, (zYJb7eh & 15) << 2 | OCL1TU >> 0x6)
          KbBYLyW = OCL1TU & 63
          isNaN(zYJb7eh) ? w7Xyd45 = KbBYLyW = 64 : isNaN(OCL1TU) && (KbBYLyW = 64)
          rxetjS = dgGqGo(rxetjS + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-"["charAt"](nYYAKMt) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-"["charAt"](TaQIiK) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-"["charAt"](w7Xyd45), "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-"["charAt"](KbBYLyW), EdB9_MH(-9))
        } while (prEjtk < iHeAMh["length"] && 1);
        return dgGqGo(rxetjS, '/', EdB9_MH(-9));
      }
    }
    OCL1TU = OCL1TU
    if (prEjtk == "aA1Puu") {
      oybxB2 = [];
    }
    nYYAKMt = {
      ["_RBO9E"]: 0x1
    };
    function w7Xyd45() {
      var prEjtk = function (...prEjtk) {
          return P6_hdvq(oybxB2 = prEjtk, zYJb7eh[rxetjS].call(this));
        },
        TaQIiK = nYYAKMt[rxetjS];
      if (TaQIiK) {
        return wl52ooA(prEjtk, TaQIiK);
      }
      return prEjtk;
    }
    OCL1TU = prEjtk == "N8kBb3" ? KbBYLyW[rxetjS] || (KbBYLyW[rxetjS] = w7Xyd45()) : zYJb7eh[rxetjS]();
    return TaQIiK == "ESnT_Gz" ? {
      VlcvDL: OCL1TU
    } : OCL1TU;
  }
}
class u2GJ6LG {
  constructor() {
    this._defaultVersion = "4.7"
    this._supportVersionList = ["3.1", "4.1", "4.2", "4.3", "4.4", "4.7"]
    this._latestAppVersionData = {
      ["build"]: "169480",
      ["version"]: "13.2.2"
    }
    this._latestIOSVersion = "17.6.1"
    this.invalidApis = new Set()
    this.hasLogged = false
    this._keyMap = {
      3.1: "wm0!@w_s#ll1flo(",
      4.1: "HL4|FW#Chc3#q?0)",
      [4.2]: "DNiHi703B0&17hh1",
      4.3: "&d74&yWoV.EYbWbZ",
      4.4: "r1T.6Vinpb.k+/a)",
      4.7: "X[FMV04Nfvd?Y6M_"
    }
    this._algoMethodMap = {
      3.1: "HmacSHA256",
      4.1: "MD5",
      [4.2]: "SHA256",
      4.3: "HmacSHA256",
      4.4: "MD5",
      4.71: "SHA256",
      [4.72]: "HmacSHA256",
      [4.73]: "HmacSHA256",
      4.7: "MD5"
    }
    this._fvMap = {
      3.1: "v3.2.0",
      4.1: "v0.1.6",
      [4.2]: "h5_npm_v4.2.0",
      [4.3]: "h5_file_v4.3.3",
      [4.4]: "h5_file_v4.4.0",
      [4.71]: "h5_file_v4.7.1",
      4.72: "h5_file_v4.7.2",
      [4.73]: "h5_file_v4.7.3",
      [4.7]: "h5_file_v4.7.4"
    }
    this._timePaddingMap = {
      3.1: '',
      4.1: '\u0030\u0034',
      [4.2]: '74',
      [4.3]: '\x32\x32',
      4.4: '\u0038\u0038',
      [4.71]: '\u0039\u0037',
      4.72: '\x30\x37',
      [4.73]: '\x37\x38',
      [4.7]: '\u0034\u0037'
    }
    this._localTokenCipherMap = {
      4.2: {
        ["prefix"]: '\x7a\x37',
        ["secret"]: "qem7+)g%Dhw5",
        ["key"]: "x6e@RoHi$Fgy7!5k"
      },
      4.3: {
        ["prefix"]: '\x30\x4a',
        ["secret"]: "+WzD<U36rlTf",
        ["key"]: "ML0Qq&DS81pP/an@"
      },
      [4.4]: {
        ["prefix"]: '\x28\x3e',
        ["secret"]: "HiO81-Ei89DH",
        ["key"]: "eHL4|FW#Chc3#q?0"
      },
      [4.71]: {
        ["prefix"]: '\u0063\u0077',
        ["secret"]: "8[8I[]d?960w",
        ["key"]: "X5g1-CN|7<IvRisX"
      },
      4.72: {
        ["prefix"]: '\x43\x32',
        ["secret"]: "K3rOqML0Qq&D",
        ["key"]: "5Tb26XFO]@7n?)F="
      },
      [4.73]: {
        ["prefix"]: '\x64\x6c',
        ["secret"]: "A._/XV*bOm%!",
        ["key"]: "_2/7Z#Uumt!A+!Vq"
      },
      4.7: {
        ["prefix"]: '\u0046\u0058',
        ["secret"]: "4*iK&33Z|+6)",
        ["key"]: "gs8&99W04zm5U>Rz"
      }
    }
    this._genAlgoSuffixStrMap = {
      4.2: "9>5*t5",
      [4.3]: "Z=<J_2",
      4.4: "qV!+A!",
      [4.71]: "hh1BNE",
      [4.72]: "87n8!-",
      4.73: "kEjxS-",
      4.7: "Mp(2C1"
    }
    this._tokenStorageMap = Object.fromEntries(this._supportVersionList.map(rxetjS => [rxetjS, {}]))
    this._genAlgoStorageMap = Object.fromEntries(this._supportVersionList.map(rxetjS => [rxetjS, {}]))
    this._fpMap = new Map()
    this._canvasAndWebglFpMap = new Map()
    this._customAlgorithmConfigMap = {
      [4.71]: {
        ["salt"]: "23k@X!",
        ["keySlice"]: 16
      },
      4.72: {
        ["salt"]: "JdM3|5",
        ["keySlice"]: 7
      },
      4.73: {
        ["salt"]: "=LN6GO",
        ["keySlice"]: 0x3
      },
      [4.7]: {
        ["salt"]: "7n5<G*",
        ["keySlice"]: 5
      }
    }
    this._algorithmMap = {
      [4.7]: this["_genCustomAlgorithm"](this["_customAlgorithmConfigMap"]["4.7"])
    }
    this.ADLER32 = this.load_module_ADLER32()
  }
  async ["getH5st"](OjFdaZ) {
    const rxetjS = dgGqGo(process["env"]["JD_H5ST_STATE"] === "false", EdB9_MH(-0x11));
    try {
      return rxetjS ? await this["_getH5stApi"](OjFdaZ) : await this["_getH5stDefault"](OjFdaZ);
    } catch (error) {
      return await this["_getH5stDefault"](OjFdaZ);
    }
  }
  async ["_getH5stApi"](rxetjS) {
    const zYJb7eh = ["https://algo.sass.466661.xyz/h5st", "https://algo.466661.xyz/h5st", "http://h5api.257999.xyz/h5st"],
      OCL1TU = process["env"]["JD_H5ST_API"],
      KbBYLyW = {
        ["Content-Type"]: "application/json"
      },
      oybxB2 = {
        ["version"]: process["env"]["JD_H5ST_VERSION"] || rxetjS?.["versions"] || "5.2.5",
        ["body"]: {
          ["appid"]: rxetjS["appid"] || '',
          ["body"]: JSON["stringify"](rxetjS["body"]),
          ["client"]: rxetjS["client"] || '',
          ["clientVersion"]: rxetjS["clientVersion"] || '',
          ["functionId"]: rxetjS["functionId"] || '',
          ["t"]: Math["round"](Date["now"]())
        },
        ["pin"]: rxetjS["pin"] || "jd_xxx",
        ["ua"]: rxetjS["ua"] || "jdapp;iPhone;13.2.2;;;M/5.0;appBuild/169480;jdSupportDarkMode/1;ef/1;ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22CNqnEJTuCNYyC2S4DtK5ZtTwC2DvCzUmYWSnDzVsZtVvYzqzENHwCm%3D%3D%22%2C%22sv%22%3A%22CJckDs4n%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A1727191087%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D;Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;",
        ["appId"]: rxetjS["appId"]
      };
    if (OCL1TU) {
      const nYYAKMt = await this["makeApiRequest"](OCL1TU, KbBYLyW, oybxB2);
      if (nYYAKMt) {
        return nYYAKMt;
      } else {
        this["invalidApis"]["add"](OCL1TU);
      }
    }
    for (const w7Xyd45 of zYJb7eh) {
      if (this["invalidApis"]["has"](w7Xyd45)) {
        continue;
      }
      const nYYAKMt = await this["makeApiRequest"](w7Xyd45, KbBYLyW, oybxB2);
      if (nYYAKMt) {
        return nYYAKMt;
      } else {
        this["invalidApis"]["add"](w7Xyd45);
      }
    }
    return {
      ["paramsData"]: '',
      ["params"]: ''
    };
  }
  async ["makeApiRequest"](rxetjS, qmhBaT, prEjtk) {
    var TaQIiK = "bXsoHsI" in iHeAMh;
    try {
      const OCL1TU = await oiaEVy["request"]({
          ["url"]: rxetjS,
          ["method"]: "POST",
          ["headers"]: qmhBaT,
          ["body"]: prEjtk,
          ["timeout"]: 0x7530,
          ["proxy"]: false
        }),
        KbBYLyW = OCL1TU["data"];
      if (KbBYLyW && KbBYLyW["code"] === 0xc8 && KbBYLyW["body"] && KbBYLyW["body"]["body"] && KbBYLyW["body"].qs) {
        return {
          ["paramsData"]: KbBYLyW["body"]["body"],
          ["params"]: KbBYLyW["body"].qs
        };
      } else {
        if (dgGqGo(this["hasLogged"], EdB9_MH(-0x11))) {
          console["log"](dgGqGo("❌ 获取 H5ST 失败，错误信息：" + JSON["stringify"](KbBYLyW), " 切换其他API中~", ZCrnjUc = -9))
          this["hasLogged"] = true
        }
      }
    } catch (error) {}
    if (TaQIiK) {
      function FGnovrW(rxetjS, qmhBaT) {
        var prEjtk;
        if (typeof rxetjS !== "string") {
          throw new Error("Invalid data key provided (not type string)");
        }
        if (dgGqGo(rxetjS, EdB9_MH(-0x11))) {
          throw new Error("Invalid data key provided (empty string)");
        }
        prEjtk = window.localStorage.getItem(rxetjS);
        try {
          prEjtk = JSON.parse(prEjtk);
        } catch (e) {
          qmhBaT(new Error(dgGqGo("Serialization error for data '" + rxetjS + "': ", e.message, EdB9_MH(-0x9))));
        }
        qmhBaT(null, prEjtk);
      }
    }
    return null;
  }
  async ["_getH5stDefault"](rxetjS) {
    let prEjtk = Object["assign"]({}, rxetjS, {
      ["h5st"]: '',
      ["params"]: '',
      ["paramsData"]: {}
    });
    try {
      if (dgGqGo(typeof rxetjS === "object" && rxetjS !== null, EdB9_MH(-0x11)) && 1) {
        return P6_hdvq(console["log"]("❌ getH5st 传入参数有误"), prEjtk);
      } else {
        const TaQIiK = ["appId", "appid", "body", "functionId"],
          zYJb7eh = TaQIiK["filter"](prEjtk => dgGqGo(rxetjS[prEjtk], EdB9_MH(-0x11)));
        if (zYJb7eh["length"] > 0x0) {
          return P6_hdvq(console["log"](`❌ getH5st 传入参数有误，缺少必要参数：${zYJb7eh["join"]('\x2c\x20')}`), prEjtk);
        }
      }
      if (dgGqGo(this["_supportVersionList"]["includes"](rxetjS?.["version"]), EdB9_MH(-0x11)) && 1) {
        rxetjS["version"] = this["_defaultVersion"];
      }
      const oybxB2 = this["_initParams"](rxetjS),
        nYYAKMt = oybxB2["version"],
        {
          ["appid"]: w7Xyd45,
          ["body"]: iHeAMh,
          ["client"]: YNQbkBD,
          ["clientVersion"]: mMdQGim,
          ["functionId"]: JtJHI5
        } = rxetjS,
        fINIk6G = oybxB2["appId"];
      let wF3JiLE = oybxB2["tokenCache"] ? this["_tokenStorageMap"][nYYAKMt][fINIk6G] : null,
        f_B4Cl = oybxB2["tokenCache"] ? this["_genAlgoStorageMap"][nYYAKMt][fINIk6G] : null;
      if (dgGqGo(wF3JiLE, ZCrnjUc = -0x11) || dgGqGo(f_B4Cl, EdB9_MH(-0x11))) {
        if (oybxB2["localToken"] && dgGqGo(dgGqGo(this["_localTokenCipherMap"][nYYAKMt], ZCrnjUc = -0x11), ZCrnjUc = -17)) {
          const IL5gE3 = P6_hdvq(wF3JiLE = this["_genToken"](oybxB2.fp, this["_localTokenCipherMap"][nYYAKMt], nYYAKMt), this["_genAlgoSuffixStrMap"][nYYAKMt]),
            wl52ooA = this["_genAlgo"];
          f_B4Cl = function (...rxetjS) {
            return wl52ooA(...rxetjS, IL5gE3);
          };
        } else {
          const mWO7Gu = await this["_requestAlgorithm"](oybxB2);
          wF3JiLE = mWO7Gu["token"]
          f_B4Cl = new Function("return "["concat"](mWO7Gu["algo"]))()
        }
        if (oybxB2["tokenCache"]) {
          this["_tokenStorageMap"][nYYAKMt][fINIk6G] = wF3JiLE
          this["_genAlgoStorageMap"][nYYAKMt][fINIk6G] = f_B4Cl
        }
      }
      if (dgGqGo(wF3JiLE, ZCrnjUc = -0x11) && dgGqGo(f_B4Cl, ZCrnjUc = -0x11)) {
        return prEjtk;
      }
      const O3PM1FN = {
        ["appid"]: w7Xyd45,
        ["body"]: iHeAMh,
        ["client"]: YNQbkBD,
        ["clientVersion"]: mMdQGim,
        ["functionId"]: JtJHI5
      };
      if (rxetjS?.["t"] && dgGqGo(rxetjS["t"], ZCrnjUc = 14) === "boolean") {
        rxetjS.t = Date["now"]()
        O3PM1FN["t"] = rxetjS["t"]
      } else {
        rxetjS.t = '';
      }
      if (dgGqGo(O3PM1FN["client"], EdB9_MH(-0x11))) {
        delete O3PM1FN["client"];
      }
      if (dgGqGo(O3PM1FN["clientVersion"], EdB9_MH(-0x11))) {
        delete O3PM1FN["clientVersion"];
      }
      const _kHHzhI = this["_makeSign"](O3PM1FN, wF3JiLE, f_B4Cl, oybxB2),
        u2GJ6LG = {
          ["functionId"]: JtJHI5,
          ["body"]: JSON["stringify"](iHeAMh),
          ["t"]: '',
          ["appid"]: w7Xyd45,
          ["client"]: '',
          ["clientVersion"]: '',
          ["h5st"]: _kHHzhI?.["h5st"] || ''
        };
      for (const zUT94Sa of ["t", "client", "clientVersion"]) if (rxetjS[zUT94Sa]) {
        u2GJ6LG[zUT94Sa] = rxetjS[zUT94Sa];
      } else {
        delete u2GJ6LG[zUT94Sa];
      }
      Object["assign"](prEjtk, {
        ["h5st"]: _kHHzhI?.["h5st"] || '',
        ["params"]: fMQ7QU["stringify"](u2GJ6LG),
        ["paramsData"]: u2GJ6LG
      });
    } catch (error) {
      console["log"](`❌ 在生成 H5 签名时遇到了错误 ${error["message"] || error}`);
    }
    return prEjtk;
  }
  ["_initParams"](rxetjS) {
    const TaQIiK = rxetjS["version"],
      zYJb7eh = {
        ["version"]: TaQIiK,
        ["appId"]: rxetjS?.["appId"] || '',
        fv: this["_fvMap"][TaQIiK],
        fp: '',
        ["ua"]: '',
        ["sua"]: '',
        av: '',
        ["url"]: '',
        og: '',
        ["referer"]: rxetjS?.["referer"] || '',
        ["pin"]: rxetjS?.["pin"] || '',
        ["cookie"]: rxetjS?.["cookie"] || '',
        ["timestamp"]: rxetjS?.["timestamp"] || Date["now"](),
        ["bu1"]: '',
        ["random"]: '',
        ["canvas"]: '',
        ["webglFp"]: '',
        ["ccn"]: 0x4,
        ["localToken"]: false,
        ["tokenCache"]: false
      };
    for (const OCL1TU of ["localToken", "tokenCache"]) {
      if (rxetjS["hasOwnProperty"](OCL1TU) && dgGqGo(rxetjS[OCL1TU], EdB9_MH(0xe)) === "boolean") {
        zYJb7eh[OCL1TU] = rxetjS[OCL1TU];
      }
    }
    if (rxetjS["hasOwnProperty"]("bu1")) {
      zYJb7eh["bu1"] = rxetjS["bu1"];
    }
    if (rxetjS["hasOwnProperty"]("random")) {
      zYJb7eh["random"] = rxetjS["random"];
    } else {
      zYJb7eh["random"] = this["_genRandomStr"](dgGqGo(dgGqGo(this["_algorithmMap"][TaQIiK], ZCrnjUc = -17), EdB9_MH(-17)) ? 11 : 10);
    }
    if (rxetjS?.ua) {
      let nYYAKMt = rxetjS.ua,
        w7Xyd45 = nYYAKMt["match"](/^[\s\S]*?\(([\s\S]*?)\)/),
        FGnovrW = nYYAKMt["match"](/(?<=\/)[0-9]\.0[^'"\n]+/g);
      if (w7Xyd45?.["length"] > 0 && FGnovrW?.["length"] > 0) {
        zYJb7eh.ua = nYYAKMt
        zYJb7eh["sua"] = w7Xyd45[0x1]
        zYJb7eh["av"] = FGnovrW[0]
      }
    }
    if (dgGqGo(zYJb7eh.ua, ZCrnjUc = -17)) {
      let nYYAKMt = this["_genUA"](),
        w7Xyd45 = nYYAKMt["match"](/^[\s\S]*?\(([\s\S]*?)\)/),
        FGnovrW = nYYAKMt["match"](/(?<=\/)[0-9]\.0[^'"\n]+/g);
      if (w7Xyd45?.["length"] > 0x0 && FGnovrW?.["length"] > 0) {
        zYJb7eh.ua = nYYAKMt
        zYJb7eh["sua"] = w7Xyd45[0x1]
        zYJb7eh.av = FGnovrW[0x0]
      }
    }
    if (P6_hdvq(zYJb7eh["version"] = TaQIiK, zYJb7eh.fp = this["_fpMap"]["get"](zYJb7eh.ua) || '', dgGqGo(zYJb7eh.fp, ZCrnjUc = -17))) {
      if (P6_hdvq(zYJb7eh["fp"] = this[`${"_makeFp"["concat"](zYJb7eh["version"]["replace"](".", '\u005f'))}`](), zYJb7eh.ua["startsWith"]('jd'))) {
        this["_fpMap"]["set"](zYJb7eh.ua, zYJb7eh["fp"]);
      }
    }
    const iHeAMh = this["_canvasAndWebglFpMap"]["get"](zYJb7eh["ua"]) || '';
    if (dgGqGo(iHeAMh, ZCrnjUc = -17)) {
      const YNQbkBD = this["_genCanvasAndWebglFp"](TaQIiK);
      if (P6_hdvq(zYJb7eh["canvas"] = YNQbkBD["canvas"], zYJb7eh["webglFp"] = YNQbkBD["webglFp"], zYJb7eh.ua["startsWith"]('\u006a\u0064'))) {
        this["_canvasAndWebglFpMap"]["set"](zYJb7eh["ua"], YNQbkBD);
      }
    } else {
      const {
        ["canvas"]: mMdQGim,
        ["webglFp"]: JtJHI5
      } = iHeAMh;
      zYJb7eh["canvas"] = mMdQGim
      zYJb7eh["webglFp"] = JtJHI5
    }
    if (rxetjS?.["url"]) {
      try {
        const fINIk6G = new URL(rxetjS["url"]);
        zYJb7eh["url"] = fINIk6G["href"]
        zYJb7eh["og"] = fINIk6G["origin"]
      } catch {}
    }
    return zYJb7eh;
  }
  async ["_requestAlgorithm"](rxetjS) {
    try {
      const prEjtk = this["_getExpandParamsData"](rxetjS),
        TaQIiK = this["_AESEncrypt"](JSON["stringify"](prEjtk, null, 2), mWO7Gu["enc"]["Utf8"]["parse"](dgGqGo(dgGqGo(this["_algorithmMap"][rxetjS["version"]], ZCrnjUc = -0x11), ZCrnjUc = -0x11) ? "(olf1ll#s-w@!0mw" : "wm0!@w-s#ll1flo("), rxetjS["version"]),
        zYJb7eh = {
          ["version"]: rxetjS["version"],
          ["fp"]: rxetjS["fp"],
          ["appId"]: rxetjS["appId"],
          ["timestamp"]: Date["now"](),
          ["platform"]: "web",
          ["expandParams"]: TaQIiK,
          fv: rxetjS.fv
        },
        OCL1TU = {
          ["url"]: "https://cactus.jd.com/request_algo?g_ty=ajax",
          ["method"]: "POST",
          ["headers"]: {
            ["Content-Type"]: "application/json;charset=utf-8",
            ["Origin"]: "https://cactus.jd.com",
            ["Host"]: "cactus.jd.com",
            ["Accept"]: "*/*",
            ["User-Agent"]: rxetjS?.["ua"] || "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/126.0.0.0"
          },
          ["data"]: zYJb7eh,
          ["proxy"]: null,
          ["timeout"]: 0xea60,
          ["debug"]: false
        };
      let KbBYLyW = 0x0,
        oybxB2 = null;
      const nYYAKMt = 0x1;
      while (KbBYLyW < nYYAKMt) {
        const w7Xyd45 = await oiaEVy["request"](OCL1TU);
        if (dgGqGo(w7Xyd45["success"], EdB9_MH(-0x11))) {
          oybxB2 = `❌ request_algo 请求失败 ➜ ${w7Xyd45["error"]}`
          KbBYLyW++
          continue;
        }
        if (dgGqGo(w7Xyd45["data"], EdB9_MH(-17))) {
          oybxB2 = "🚫 request_algo 请求失败 ➜ 无响应数据"
          KbBYLyW++
          continue;
        }
        try {
          const FGnovrW = w7Xyd45["data"];
          if (FGnovrW?.["data"] && FGnovrW?.["data"]?.["result"]) {
            const iHeAMh = FGnovrW["data"]["result"]?.["algo"],
              YNQbkBD = FGnovrW["data"]["result"]?.tk;
            if (iHeAMh && YNQbkBD) {
              return {
                ["token"]: YNQbkBD,
                ["algo"]: iHeAMh
              };
            }
          }
          oybxB2 = `🚫 request_algo 请求异常 ➜ ${JSON["stringify"](FGnovrW)}`;
        } catch (error) {
          oybxB2 = `❌ request_algo 在处理接口响应时遇到了错误 ➜ ${error["message"] || error}`;
        }
        KbBYLyW++;
      }
      if (KbBYLyW >= nYYAKMt) {
        console["log"](oybxB2);
      }
    } catch (error) {
      console["log"](`❌ request_algo 在处理API请求时遇到了错误 ${error["message"] || error}`);
    }
    return {
      ["token"]: '',
      ["algo"]: ''
    };
  }
  ["_getExpandParamsData"](rxetjS) {
    const prEjtk = 430,
      TaQIiK = 0x3a4,
      zYJb7eh = 0x1ae,
      OCL1TU = 0x3a4;
    switch (rxetjS["version"]) {
      case "3.1":
        return {
          wc: 0x0,
          ["wd"]: 0x0,
          l: "zh-CN",
          ls: "zh-CN,zh",
          ml: 0,
          ["pl"]: 0x0,
          av: rxetjS["av"],
          ua: rxetjS.ua,
          ["sua"]: rxetjS["sua"],
          pp: rxetjS["pin"] ? {
            ["p1"]: rxetjS["pin"],
            p2: rxetjS["pin"]
          } : {},
          ["pp1"]: '',
          pm: {
            ps: "prompt",
            np: "default"
          },
          ["w"]: prEjtk,
          h: TaQIiK,
          ow: zYJb7eh,
          oh: OCL1TU,
          ["url"]: rxetjS["url"],
          og: rxetjS.og,
          pr: 1.25,
          ["re"]: rxetjS["referer"],
          ai: rxetjS["appId"],
          fp: rxetjS.fp
        };
      case "4.1":
        return {
          wc: 0,
          wd: 0x0,
          l: "zh-CN",
          ls: "zh-CN,zh",
          ml: 0x0,
          pl: 0x0,
          av: rxetjS.av,
          ["ua"]: rxetjS.ua,
          ["sua"]: rxetjS["sua"],
          ["pp"]: {},
          ["pp1"]: rxetjS["cookie"],
          pm: {
            ps: "prompt",
            np: "default"
          },
          ["w"]: prEjtk,
          ["h"]: TaQIiK,
          ow: zYJb7eh,
          oh: OCL1TU,
          ["url"]: rxetjS["url"],
          og: rxetjS.og,
          ["pr"]: 1.25,
          ["re"]: rxetjS["referer"],
          ["random"]: rxetjS["random"],
          ["referer"]: rxetjS["referer"],
          ["v"]: rxetjS.fv,
          ai: rxetjS["appId"],
          ["fp"]: rxetjS.fp
        };
      case "4.2":
        return {
          wc: 0x0,
          ["wd"]: 0x0,
          l: "zh-CN",
          ["ls"]: "zh-CN,zh",
          ml: 0,
          ["pl"]: 0x0,
          av: rxetjS["av"],
          ua: rxetjS["ua"],
          ["sua"]: rxetjS["sua"],
          pp: rxetjS["pin"] ? {
            p1: rxetjS["pin"],
            ["p2"]: rxetjS["pin"]
          } : {},
          ["extend"]: {
            ["pm"]: 0x0,
            wd: 0,
            l: 0x0,
            ["ls"]: 0x2,
            ["wk"]: 0x0,
            ["bu1"]: rxetjS["bu1"] || "9.9.9"
          },
          ["pp1"]: rxetjS["pin"] ? '' : rxetjS["cookie"],
          ["pm"]: {
            ps: "prompt",
            np: "default"
          },
          ["w"]: prEjtk,
          ["h"]: TaQIiK,
          ["ow"]: zYJb7eh,
          ["oh"]: OCL1TU,
          ["url"]: rxetjS["url"],
          og: rxetjS["og"],
          pr: 1.25,
          ["re"]: rxetjS["referer"],
          ["random"]: rxetjS["random"],
          ["referer"]: rxetjS["referer"],
          v: rxetjS["fv"],
          ai: rxetjS["appId"],
          ["fp"]: rxetjS.fp
        };
      case "4.3":
        return {
          wc: 0,
          wd: 0,
          ["l"]: "zh-CN",
          ["ls"]: "zh-CN,zh",
          ml: 2,
          pl: 0x5,
          ["av"]: rxetjS["av"],
          ua: rxetjS.ua,
          ["sua"]: rxetjS["sua"],
          ["pp"]: rxetjS["pin"] ? {
            p1: rxetjS["pin"],
            p2: rxetjS["pin"],
            p3: rxetjS["pin"]
          } : {},
          ["extend"]: {
            ["wd"]: 0,
            ["l"]: 0x0,
            ["ls"]: 0x5,
            wk: 0x0,
            ["bu1"]: rxetjS["bu1"] || "0.1.9",
            ["bu2"]: 0x0,
            ["bu3"]: 100,
            ["bu4"]: 0x0
          },
          ["pp1"]: rxetjS["pin"] ? '' : rxetjS["cookie"],
          pm: {
            ps: "prompt",
            np: "default"
          },
          w: prEjtk,
          ["h"]: TaQIiK,
          ow: zYJb7eh,
          ["oh"]: OCL1TU,
          ["url"]: rxetjS["url"],
          og: rxetjS.og,
          pr: 0x1,
          ["re"]: rxetjS["referer"],
          ["random"]: rxetjS["random"],
          ["referer"]: rxetjS["referer"],
          ["v"]: rxetjS.fv,
          ai: rxetjS["appId"],
          fp: rxetjS.fp
        };
      case "4.4":
        return {
          wc: 0x0,
          wd: 0x0,
          ["l"]: "zh-CN",
          ["ls"]: "zh-CN,zh",
          ["ml"]: 0,
          ["pl"]: 0x0,
          av: rxetjS["av"],
          ua: rxetjS.ua,
          ["sua"]: rxetjS["sua"],
          ["pp"]: rxetjS["pin"] ? {
            p1: rxetjS["pin"],
            ["p2"]: rxetjS["pin"]
          } : {},
          ["extend"]: {
            ["wd"]: 0,
            l: 0x0,
            ls: 5,
            wk: 0,
            ["bu1"]: rxetjS["bu1"] || "0.1.7",
            ["bu2"]: 0,
            ["bu3"]: 100,
            ["bu4"]: 0x0
          },
          ["pp1"]: rxetjS["pin"] ? '' : rxetjS["cookie"],
          ["w"]: prEjtk,
          ["h"]: TaQIiK,
          ow: zYJb7eh,
          oh: OCL1TU,
          ["url"]: rxetjS["url"],
          ["og"]: rxetjS.og,
          pr: 0x1,
          ["re"]: rxetjS["referer"],
          ["random"]: rxetjS["random"],
          ["referer"]: rxetjS["referer"],
          ["v"]: rxetjS["fv"],
          ai: rxetjS["appId"],
          fp: rxetjS["fp"]
        };
      case "4.7":
        return {
          wc: 0,
          wd: 0,
          ["l"]: "zh-CN",
          ls: "zh-CN",
          ["ml"]: 0x2,
          ["pl"]: 5,
          ["av"]: rxetjS["av"],
          ["ua"]: rxetjS["ua"],
          ["sua"]: rxetjS["sua"],
          ["pp"]: rxetjS["pin"] ? {
            p1: rxetjS["pin"]
          } : {},
          ["extend"]: {
            wd: 0,
            ["l"]: 0x0,
            ["ls"]: 0,
            wk: 0,
            ["bu1"]: rxetjS["bu1"] || "0.1.7",
            ["bu2"]: 0,
            ["bu3"]: 0x40,
            ["bu4"]: 0,
            ["bu5"]: 0x0,
            ["bu6"]: 14,
            ["bu7"]: '',
            ["bu8"]: 0
          },
          ["pp1"]: rxetjS["pin"] ? '' : rxetjS["cookie"],
          ["w"]: prEjtk,
          ["h"]: TaQIiK,
          ["ow"]: zYJb7eh,
          oh: OCL1TU,
          ["url"]: rxetjS["url"],
          og: rxetjS.og,
          pf: "iPhone",
          ["pr"]: 1,
          re: rxetjS["referer"],
          ["random"]: rxetjS["random"],
          ["referer"]: rxetjS["referer"],
          v: rxetjS.fv,
          ["bu2"]: '',
          ["canvas"]: rxetjS["canvas"],
          ["canvas1"]: rxetjS["canvas"],
          ["webglFp"]: rxetjS["webglFp"],
          ["webglFp1"]: rxetjS["webglFp"],
          ["ccn"]: rxetjS["ccn"],
          ai: rxetjS["appId"],
          fp: rxetjS.fp
        };
      default:
        return {};
    }
  }
  ["_makeSign"](rxetjS, qmhBaT, prEjtk, TaQIiK) {
    try {
      const OCL1TU = TaQIiK["version"],
        KbBYLyW = new Date(TaQIiK["timestamp"]),
        oybxB2 = `${KbBYLyW["getFullYear"]()}${String(dgGqGo(KbBYLyW["getMonth"](), 0x1, EdB9_MH(-0x9)))["padStart"](2, '\x30')}${String(KbBYLyW["getDate"]())["padStart"](0x2, '0')}${String(KbBYLyW["getHours"]())["padStart"](0x2, "0")}${String(KbBYLyW["getMinutes"]())["padStart"](0x2, "0")}${String(KbBYLyW["getSeconds"]())["padStart"](0x2, "0")}${String(KbBYLyW["getMilliseconds"]())["padStart"](3, "0")}`,
        nYYAKMt = oybxB2["concat"](this["_timePaddingMap"][OCL1TU]);
      let w7Xyd45 = Object["entries"](rxetjS)["map"](([rxetjS, qmhBaT]) => {
        if (rxetjS === "body") {
          qmhBaT = mWO7Gu["SHA256"](JSON["stringify"](qmhBaT))["toString"]();
        }
        return {
          ["key"]: rxetjS,
          ["value"]: qmhBaT
        };
      });
      const ZCrnjUc = this["_algorithmMap"][OCL1TU] || mWO7Gu;
      let iHeAMh = '',
        YNQbkBD = '',
        mMdQGim = '';
      const JtJHI5 = w7Xyd45["map"](rxetjS => `${rxetjS["key"]}:${rxetjS["value"]}`)["join"]('\x26'),
        fINIk6G = prEjtk(qmhBaT, TaQIiK["fp"], nYYAKMt, TaQIiK["appId"], ZCrnjUc)["toString"]() || '',
        wF3JiLE = this["_algoMethodMap"][OCL1TU];
      if (["MD5", "SHA1", "SHA256", "SHA512"]["includes"](wF3JiLE)) {
        iHeAMh = ZCrnjUc[wF3JiLE](''["concat"](fINIk6G)["concat"](JtJHI5)["concat"](fINIk6G))["toString"]();
      } else {
        if (["HmacMD5", "HmacSHA1", "HmacSHA256", "HmacSHA512"]["includes"](wF3JiLE)) {
          iHeAMh = ZCrnjUc[wF3JiLE](''["concat"](JtJHI5), ''["concat"](fINIk6G))["toString"]();
        }
      }
      let f_B4Cl = {};
      switch (OCL1TU) {
        case "3.1":
          f_B4Cl = {
            ["sua"]: TaQIiK["sua"],
            pp: TaQIiK["pin"] ? {
              p1: TaQIiK["pin"],
              p2: TaQIiK["pin"]
            } : {},
            fp: TaQIiK["fp"]
          };
          break;
        case "4.1":
          f_B4Cl = {
            ["sua"]: TaQIiK["sua"],
            pp: {},
            ["random"]: TaQIiK["random"],
            ["referer"]: TaQIiK["referer"],
            ["v"]: TaQIiK["fv"],
            ["fp"]: TaQIiK.fp
          };
          break;
        case "4.2":
          f_B4Cl = {
            ["sua"]: TaQIiK["sua"],
            ["pp"]: TaQIiK["pin"] ? {
              p1: TaQIiK["pin"],
              p2: TaQIiK["pin"]
            } : {},
            ["extend"]: {
              pm: 0x0,
              ["wd"]: 0x0,
              ["l"]: 0x0,
              ["ls"]: 0x2,
              ["wk"]: 0x0,
              ["bu1"]: TaQIiK["bu1"] || "9.9.9"
            },
            ["random"]: TaQIiK["random"],
            ["referer"]: TaQIiK["referer"],
            ["v"]: TaQIiK["fv"],
            fp: TaQIiK.fp
          };
          break;
        case "4.3":
          f_B4Cl = {
            ["sua"]: TaQIiK["sua"],
            ["pp"]: TaQIiK["pin"] ? {
              p1: TaQIiK["pin"],
              p2: TaQIiK["pin"],
              p3: TaQIiK["pin"]
            } : {},
            ["extend"]: {
              wd: 0,
              l: 0,
              ["ls"]: 5,
              ["wk"]: 0x0,
              ["bu1"]: TaQIiK["bu1"] || "0.1.8",
              ["bu2"]: dgGqGo(1, EdB9_MH(-13)),
              ["bu3"]: 0x64,
              ["bu4"]: 0
            },
            ["random"]: TaQIiK["random"],
            ["v"]: TaQIiK["fv"],
            ["fp"]: TaQIiK["fp"]
          };
          break;
        case "4.4":
          f_B4Cl = {
            ["sua"]: TaQIiK["sua"],
            ["pp"]: TaQIiK["pin"] ? {
              ["p1"]: TaQIiK["pin"],
              p2: TaQIiK["pin"]
            } : {},
            ["extend"]: {
              ["wd"]: 0x0,
              l: 0,
              ["ls"]: 0x5,
              wk: 0x0,
              ["bu1"]: TaQIiK["bu1"] || "0.1.7",
              ["bu2"]: dgGqGo(0x1, EdB9_MH(-13)),
              ["bu3"]: 6,
              ["bu4"]: 0,
              ["bu5"]: 0x0
            },
            ["random"]: TaQIiK["random"],
            v: TaQIiK["fv"],
            fp: TaQIiK["fp"]
          };
          break;
        case "4.7":
          f_B4Cl = {
            ["sua"]: TaQIiK["sua"],
            ["pp"]: TaQIiK["pin"] ? {
              p1: TaQIiK["pin"]
            } : {},
            ["extend"]: {
              wd: 0,
              l: 0x0,
              ["ls"]: 0x5,
              ["wk"]: 0x0,
              ["bu1"]: TaQIiK["bu1"] || "0.1.7",
              ["bu2"]: dgGqGo(1, EdB9_MH(-0xd)),
              ["bu3"]: 0x42,
              ["bu4"]: 0x0,
              ["bu5"]: 0,
              ["bu6"]: 0xf,
              ["bu7"]: '',
              ["bu8"]: 0x0
            },
            ["random"]: TaQIiK["random"],
            v: TaQIiK.fv,
            ["canvas"]: TaQIiK["canvas"],
            ["webglFp"]: TaQIiK["webglFp"],
            ["ccn"]: TaQIiK["ccn"],
            ["fp"]: TaQIiK.fp
          };
      }
      YNQbkBD = this["_AESEncrypt"](JSON["stringify"](f_B4Cl, null, 0x2), mWO7Gu["enc"]["Utf8"]["parse"](this["_keyMap"][OCL1TU]), OCL1TU);
      switch (TaQIiK["version"]) {
        case "4.7":
          mMdQGim = ZCrnjUc["MD5"](''["concat"](fINIk6G)["concat"](`appid:${rxetjS["appid"]}&functionId:${rxetjS["functionId"]}`)["concat"](fINIk6G))["toString"]();
      }
      const xZQi6B = [''["concat"](oybxB2), ''["concat"](TaQIiK["fp"]), ''["concat"](TaQIiK["appId"]), ''["concat"](qmhBaT), ''["concat"](iHeAMh), ''["concat"](OCL1TU), ''["concat"](String(TaQIiK["timestamp"])), ''["concat"](YNQbkBD)];
      if (mMdQGim) {
        xZQi6B["push"](mMdQGim);
      }
      return {
        ["_stk"]: w7Xyd45["map"](rxetjS => rxetjS["key"])["join"]('\x2c'),
        ["_ste"]: 0x1,
        ["h5st"]: xZQi6B["join"]('\u003b')
      };
    } catch (error) {
      console["log"](`❌ 遇到了错误 ${error["message"] || error}`);
    }
    return {
      ["_stk"]: '',
      ["_ste"]: 0x0,
      ["h5st"]: ''
    };
  }
  ["_genToken"](rxetjS, qmhBaT, prEjtk) {
    const TaQIiK = () => {
        const qmhBaT = ["1", '\u0032', '\u0033'],
          prEjtk = ['\u002b', '\x78'],
          TaQIiK = dgGqGo(0x2, Math["floor"](0x4 * Math["random"]()), EdB9_MH(-0x9));
        let zYJb7eh = '';
        for (let OCL1TU = 0x0; OCL1TU < TaQIiK && 1; OCL1TU++) if (P6_hdvq(zYJb7eh += qmhBaT[Math["floor"](dgGqGo(Math["random"](), 3, ZCrnjUc = -43))], OCL1TU) < TaQIiK - 0x1) {
          zYJb7eh += prEjtk[Math["floor"](dgGqGo(Math["random"](), 0x2, EdB9_MH(-43)))];
        }
        if (zYJb7eh["length"] < 9) {
          zYJb7eh += this["_genRandomStr"]()["substring"](0x0, dgGqGo(0x9, zYJb7eh["length"], EdB9_MH(51)));
        }
        const KbBYLyW = mWO7Gu["enc"]["Utf8"]["parse"](zYJb7eh);
        return mWO7Gu["enc"]["Base64"]["stringify"](KbBYLyW)["replace"](/\+/g, '\u002d')["replace"](/\//g, '\u005f')["replace"](/=/g, '');
      },
      zYJb7eh = rxetjS => {
        function TaQIiK(TaQIiK) {
          return TaQIiK["map"](zYJb7eh => {
            let OCL1TU = dgGqGo('\x30\x30', (255 & zYJb7eh)["toString"](0x10), EdB9_MH(-9));
            return OCL1TU["slice"](dgGqGo(2, EdB9_MH(-13)));
          })["join"]('');
        }
        function zYJb7eh(zYJb7eh) {
          let OCL1TU = new Uint8Array(zYJb7eh["length"]);
          return P6_hdvq(OCL1TU["forEach"]((OCL1TU, TaQIiK, OjFdaZ) => (OjFdaZ[TaQIiK] = zYJb7eh["charCodeAt"](TaQIiK), undefined)), TaQIiK(OCL1TU));
        }
        function OCL1TU(TaQIiK) {
          let zYJb7eh = function () {
              let zYJb7eh = new ArrayBuffer(0x2);
              return P6_hdvq(new DataView(zYJb7eh)["setInt16"](0, 256, dgGqGo(0, ZCrnjUc = -17)), 0x100 === new Int16Array(zYJb7eh)[0]);
            }(),
            OCL1TU = Math["floor"](dgGqGo(TaQIiK, Math["pow"](0x2, 0x20), EdB9_MH(-36))),
            oybxB2 = TaQIiK % Math["pow"](0x2, 32),
            w7Xyd45 = new ArrayBuffer(0x8),
            qmhBaT = new DataView(w7Xyd45);
          return P6_hdvq(zYJb7eh ? (qmhBaT["setUint32"](0, oybxB2, zYJb7eh), qmhBaT["setUint32"](4, OCL1TU, zYJb7eh)) : (qmhBaT["setUint32"](0, OCL1TU, zYJb7eh), qmhBaT["setUint32"](4, oybxB2, zYJb7eh)), new Uint8Array(w7Xyd45));
        }
        let oybxB2 = '',
          OjFdaZ = Date.now(),
          nYYAKMt = qmhBaT.secret,
          w7Xyd45 = function (TaQIiK, zYJb7eh, OjFdaZ, w7Xyd45) {
            let qmhBaT = new Uint8Array(0x10),
              prEjtk = P6_hdvq(qmhBaT.forEach((zYJb7eh, qmhBaT, prEjtk) => (prEjtk[qmhBaT] = TaQIiK.charCodeAt(qmhBaT), undefined)), OCL1TU(zYJb7eh)),
              FGnovrW = new Uint8Array(0x2),
              iHeAMh = P6_hdvq(FGnovrW.forEach((TaQIiK, qmhBaT, prEjtk) => (prEjtk[qmhBaT] = OjFdaZ.charCodeAt(qmhBaT), undefined)), new Uint8Array(12)),
              YNQbkBD = P6_hdvq(iHeAMh.forEach((TaQIiK, qmhBaT, prEjtk) => (prEjtk[qmhBaT] = w7Xyd45.charCodeAt(qmhBaT), undefined)), new Uint8Array(0x26)),
              mMdQGim = P6_hdvq((YNQbkBD.set(FGnovrW), YNQbkBD.set(iHeAMh, 2), YNQbkBD.set(prEjtk, 14), YNQbkBD.set(qmhBaT, 0x16)), KbBYLyW.buf(YNQbkBD)),
              JtJHI5 = P6_hdvq(mMdQGim >>>= 0x0, dgGqGo("00000000", mMdQGim.toString(16), ZCrnjUc = -9));
            return JtJHI5.substring(dgGqGo(JtJHI5.length, 0x8, EdB9_MH(51)));
          }(rxetjS, OjFdaZ, qmhBaT.prefix, nYYAKMt);
        return P6_hdvq(oybxB2 += zYJb7eh(w7Xyd45), oybxB2 += zYJb7eh(qmhBaT["prefix"]), oybxB2 += zYJb7eh(nYYAKMt), oybxB2 += TaQIiK(OCL1TU(OjFdaZ)), oybxB2 += zYJb7eh(rxetjS), this["_AESEncrypt"](mWO7Gu["enc"]["Hex"]["parse"](oybxB2), mWO7Gu["enc"]["Utf8"]["parse"](qmhBaT["key"]), prEjtk));
      },
      OCL1TU = rxetjS => {
        const qmhBaT = [rxetjS["magic"], rxetjS["version"], rxetjS["platform"], rxetjS["expires"], rxetjS["producer"], rxetjS["expr"], rxetjS["cipher"]]["join"]('');
        let prEjtk = KbBYLyW["str"](qmhBaT),
          TaQIiK = P6_hdvq(prEjtk >>>= 0, dgGqGo("00000000", prEjtk["toString"](0x10), ZCrnjUc = -9));
        return TaQIiK["substring"](dgGqGo(TaQIiK["length"], 0x8, EdB9_MH(51)));
      },
      KbBYLyW = this["ADLER32"],
      oybxB2 = {
        ["magic"]: '\u0074\u006b',
        ["version"]: '\x30\x33',
        ["platform"]: '\x77',
        ["expires"]: '\x34\x31',
        ["producer"]: "l",
        ["expr"]: TaQIiK(),
        ["cipher"]: zYJb7eh(rxetjS)
      };
    return P6_hdvq(oybxB2["adler32"] = OCL1TU(oybxB2), [oybxB2["magic"], oybxB2["version"], oybxB2["platform"], oybxB2["adler32"], oybxB2["expires"], oybxB2["producer"], oybxB2["expr"], oybxB2["cipher"]]["join"](''));
  }
  ["_genAlgo"](OjFdaZ, rxetjS, qmhBaT, prEjtk, TaQIiK, zYJb7eh) {
    const OCL1TU = (rxetjS, qmhBaT, prEjtk) => {
      let zYJb7eh = '';
      switch (rxetjS) {
        case "1":
          zYJb7eh = "MD5";
          break;
        case '\u0032':
          zYJb7eh = "SHA256";
          break;
        case '\u0033':
          zYJb7eh = "HmacSHA256";
      }
      return rxetjS === '3' ? prEjtk[zYJb7eh](qmhBaT, OjFdaZ)["toString"]() : prEjtk[zYJb7eh](qmhBaT)["toString"]();
    };
    let KbBYLyW = '';
    const oybxB2 = ''["concat"](OjFdaZ)["concat"](rxetjS)["concat"](qmhBaT)["concat"](prEjtk)["concat"](zYJb7eh),
      nYYAKMt = OjFdaZ["slice"](16, 0x1c),
      w7Xyd45 = mWO7Gu["enc"]["Utf8"]["stringify"](mWO7Gu["enc"]["Base64"]["parse"](nYYAKMt["replace"](/-/g, '\u002b')["replace"](/_/g, '/'))),
      ZCrnjUc = w7Xyd45["match"](new RegExp("^[123]([x+][123])+"))[0]["split"]('');
    return P6_hdvq(ZCrnjUc["forEach"]((OjFdaZ, rxetjS, qmhBaT) => {
      if (["1", '\u0032', '\x33']["includes"](OjFdaZ) && true) {
        if (rxetjS === 0) {
          KbBYLyW = OCL1TU(OjFdaZ, oybxB2, TaQIiK);
        } else {
          if (rxetjS >= 2) {
            const prEjtk = qmhBaT[dgGqGo(rxetjS, 1, EdB9_MH(0x33))];
            if (prEjtk === '\u002b') {
              KbBYLyW += OCL1TU(OjFdaZ, oybxB2, TaQIiK);
            } else {
              if (prEjtk === '\x78' && 1) {
                KbBYLyW = OCL1TU(OjFdaZ, KbBYLyW, TaQIiK);
              }
            }
          }
        }
      }
    }), KbBYLyW);
  }
  ["_genCustomAlgorithm"](rxetjS) {
    const {
      ["salt"]: prEjtk,
      ["keySlice"]: TaQIiK
    } = rxetjS;
    let zYJb7eh = {
      ["enc"]: mWO7Gu["enc"]
    };
    for (let OCL1TU of ["MD5", "SHA1", "SHA256", "SHA512"]) zYJb7eh[OCL1TU] = function (rxetjS) {
      return mWO7Gu[OCL1TU](dgGqGo(rxetjS, prEjtk, ZCrnjUc = -9));
    };
    for (let OCL1TU of ["HmacMD5", "HmacSHA1", "HmacSHA256", "HmacSHA512"]) zYJb7eh[OCL1TU] = function (rxetjS, qmhBaT) {
      return mWO7Gu[OCL1TU](dgGqGo(rxetjS, prEjtk, ZCrnjUc = -0x9), dgGqGo(qmhBaT["slice"](0, TaQIiK)["split"]('')["map"](rxetjS => String["fromCharCode"](0x9e - rxetjS["charCodeAt"](0)))["reverse"]()["join"](''), qmhBaT["slice"](TaQIiK), EdB9_MH(-9)));
    };
    const KbBYLyW = "WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX"["split"]('')["filter"](Boolean),
      oybxB2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="["split"]('')["filter"](Boolean);
    return P6_hdvq(zYJb7eh["enc"]["Base64"]["encode"] = function (rxetjS) {
      let prEjtk = Object["fromEntries"](oybxB2["map"]((rxetjS, prEjtk) => [rxetjS, KbBYLyW[prEjtk]])),
        TaQIiK = '' + rxetjS.ciphertext,
        zYJb7eh = dgGqGo(0x3, rxetjS.ciphertext.sigBytes % 0x3, EdB9_MH(0x33));
      for (let OCL1TU of Array(zYJb7eh)) TaQIiK += dgGqGo('0', zYJb7eh, ZCrnjUc = -9);
      let nYYAKMt = new Buffer["from"](TaQIiK, "hex")["toString"]("base64")["split"]('')["reverse"]()["join"]('');
      return nYYAKMt["split"]('')["map"](rxetjS => prEjtk[rxetjS] || rxetjS)["join"]('')["replace"](/\+/g, '\u002d')["replace"](/\//g, '\x5f')["replace"](/=/g, '');
    }, zYJb7eh);
  }
  ["_genCanvasAndWebglFp"](OjFdaZ) {
    const rxetjS = this["_algorithmMap"][OjFdaZ] || mWO7Gu,
      qmhBaT = `envCollectdata:image/png;base64,${this["_genRandomStr"](10, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/")}`,
      prEjtk = `${qmhBaT}§extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_clip_control;EXT_color_buffer_half_float;EXT_depth_clamp;EXT_frag_depth;EXT_polygon_offset_clamp;EXT_shader_texture_lod;EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_astc;WEBGL_compressed_texture_etc;WEBGL_compressed_texture_etc1;WEBGL_compressed_texture_pvrtc;WEBKIT_WEBGL_compressed_texture_pvrtc;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw;WEBGL_polygon_mode§extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_clip_control;EXT_color_buffer_half_float;EXT_depth_clamp;EXT_frag_depth;EXT_polygon_offset_clamp;EXT_shader_texture_lod;EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_astc;WEBGL_compressed_texture_etc;WEBGL_compressed_texture_etc1;WEBGL_compressed_texture_pvrtc;WEBKIT_WEBGL_compressed_texture_pvrtc;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw;WEBGL_polygon_mode§w1[1, 1]§w2[1, 511]§w38§w4yes§w58§w624§w78§w816§w932§w1016384§w111024§w1216384§w1316§w1416384§w1531§w1616§w1716§w181024§w19[16384, 16384]§w208§w21WebKit WebGL§w22WebGL GLSL ES 1.0 (1.0)§w230§w24WebKit§w25WebGL 1.0§wuv:Apple Inc.§wur:Apple GPU`;
    return P6_hdvq('', {
      ["canvas"]: rxetjS["MD5"](qmhBaT)["toString"](),
      ["webglFp"]: rxetjS["MD5"](prEjtk)["toString"]()
    });
  }
  ["_AESEncrypt"](rxetjS, qmhBaT, prEjtk) {
    const TaQIiK = mWO7Gu["enc"]["Utf8"]["parse"](rxetjS),
      zYJb7eh = mWO7Gu["AES"]["encrypt"](TaQIiK, qmhBaT, {
        iv: mWO7Gu["enc"]["Utf8"]["parse"]("0102030405060708"),
        ["mode"]: mWO7Gu["mode"]["CBC"],
        ["padding"]: mWO7Gu["pad"]["Pkcs7"]
      }),
      OCL1TU = this["_algorithmMap"][prEjtk];
    if (OCL1TU) {
      return OCL1TU["enc"]["Base64"]["encode"](zYJb7eh);
    } else {
      return zYJb7eh["ciphertext"]["toString"]();
    }
  }
  ["_genRandomStr"](OjFdaZ = 32, rxetjS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const qmhBaT = rxetjS["length"];
    let prEjtk = '';
    for (let TaQIiK = 0; TaQIiK < OjFdaZ && true; TaQIiK++) prEjtk += rxetjS["charAt"](Math["floor"](dgGqGo(Math["random"](), qmhBaT, ZCrnjUc = -43)));
    return prEjtk;
  }
  ["_genUA"]() {
    const OjFdaZ = ["jdapp", "iPhone", this["_latestAppVersionData"]["version"], '', '', "M/5.0", `appBuild/${this["_latestAppVersionData"]["build"]}`, "jdSupportDarkMode/1", "ef/1", `ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22DG%3D%3D%22%2C%22sv%22%3A%22CG%3D%3D%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A${Math["floor"](dgGqGo(Date["now"](), 0x3e8, ZCrnjUc = -0x24))}%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D`, `Mozilla/5.0 (iPhone; CPU iPhone OS ${this["_latestIOSVersion"]["replace"](".", '\u005f')} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`, "supportJDSHWK/1", ''];
    return OjFdaZ["join"](';');
  }
  ["_makeFp3_1"]() {
    function rxetjS(rxetjS, TaQIiK) {
      return dgGqGo(rxetjS, Math["floor"](Math["random"]() * (TaQIiK + 1 - rxetjS)), ZCrnjUc = -0x9);
    }
    function qmhBaT(nYYAKMt, w7Xyd45) {
      let iHeAMh = [];
      for (let YNQbkBD = 0x0; YNQbkBD < nYYAKMt["length"] && true; YNQbkBD++) {
        let mMdQGim = nYYAKMt[YNQbkBD];
        if (rxetjS(0x0, nYYAKMt["length"] - YNQbkBD - 0x1) < w7Xyd45 - iHeAMh["length"] && (iHeAMh["push"](mMdQGim), iHeAMh["length"] == w7Xyd45) && true) {
          break;
        }
      }
      let JtJHI5 = '';
      for (let NpX14G = 0x0; NpX14G < iHeAMh["length"]; NpX14G += 1) {
        let YJSUnJ = Math["random"]() * (iHeAMh["length"] - NpX14G) | 0x0;
        JtJHI5 += iHeAMh[YJSUnJ]
        iHeAMh[YJSUnJ] = iHeAMh[dgGqGo(iHeAMh["length"] - NpX14G, 0x1, ZCrnjUc = 51)]
      }
      return JtJHI5;
    }
    function prEjtk(rxetjS, zYJb7eh) {
      for (let OCL1TU = 0; OCL1TU < zYJb7eh["length"]; OCL1TU += 1) {
        let KbBYLyW = rxetjS["indexOf"](zYJb7eh[OCL1TU]);
        dgGqGo(0x1, EdB9_MH(-13)) !== KbBYLyW && (rxetjS = rxetjS["replace"](zYJb7eh[OCL1TU], ''));
      }
      return rxetjS;
    }
    let TaQIiK = "0123456789",
      zYJb7eh = qmhBaT(TaQIiK, 0x3),
      OCL1TU = rxetjS(0, 0x9),
      KbBYLyW = prEjtk(TaQIiK, zYJb7eh),
      oybxB2 = {},
      nYYAKMt = P6_hdvq(oybxB2["size"] = OCL1TU, oybxB2["num"] = KbBYLyW, dgGqGo(this["_genRandomStr"](oybxB2["size"], oybxB2["num"]) + zYJb7eh + this["_genRandomStr"](14 - (OCL1TU + 3) + 0x1, KbBYLyW), OCL1TU, ZCrnjUc = -9)),
      w7Xyd45 = nYYAKMt.split(''),
      iHeAMh = [];
    while (w7Xyd45["length"] > 0x0) iHeAMh["push"](dgGqGo(0x9, parseInt(w7Xyd45["pop"]() || ''), ZCrnjUc = 51));
    return iHeAMh["join"]('');
  }
  ["_makeFp4_1"]() {
    return this["_makeFp4"]("uct6d0jhqw", 6, 0x9, 0xe);
  }
  ["_makeFp4_2"]() {
    return this["_makeFp4"]("6d0jhqw3pa", 4, 11, 0xe);
  }
  ["_makeFp4_3"]() {
    return this["_makeFp4"]("kl9i1uct6d", 0x3, 0xc, 10);
  }
  ["_makeFp4_4"]() {
    return this["_makeFp4"]("1uct6d0jhq", 0x4, 11, 0x8);
  }
  ["_makeFp4_7"]() {
    return this["_makeFp4"]("1uct6d0jhq", 5, 10, 15);
  }
  ["_makeFp4"](rxetjS, qmhBaT, prEjtk, TaQIiK) {
    function zYJb7eh(rxetjS, qmhBaT) {
      return dgGqGo(rxetjS, Math["floor"](Math["random"]() * (qmhBaT + 0x1 - rxetjS)), ZCrnjUc = -0x9);
    }
    function OCL1TU(rxetjS, qmhBaT) {
      let prEjtk = [];
      for (let TaQIiK = 0; TaQIiK < rxetjS["length"]; TaQIiK++) {
        let YNQbkBD = rxetjS[TaQIiK];
        if (zYJb7eh(0, rxetjS["length"] - TaQIiK - 1) < qmhBaT - prEjtk["length"] && (prEjtk["push"](YNQbkBD), prEjtk["length"] == qmhBaT)) {
          break;
        }
      }
      let mMdQGim = '';
      for (let JtJHI5 = 0x0; JtJHI5 < prEjtk["length"]; JtJHI5 += 1) {
        let NpX14G = Math["random"]() * (prEjtk["length"] - JtJHI5) | 0x0;
        mMdQGim += prEjtk[NpX14G]
        prEjtk[NpX14G] = prEjtk[dgGqGo(prEjtk["length"] - JtJHI5, 0x1, EdB9_MH(0x33))]
      }
      return mMdQGim;
    }
    function KbBYLyW(rxetjS, qmhBaT) {
      for (let prEjtk = 0x0; prEjtk < qmhBaT["length"]; prEjtk += 0x1) {
        let TaQIiK = rxetjS["indexOf"](qmhBaT[prEjtk]);
        dgGqGo(0x1, EdB9_MH(-13)) !== TaQIiK && (rxetjS = rxetjS["replace"](qmhBaT[prEjtk], ''));
      }
      return rxetjS;
    }
    let oybxB2 = rxetjS,
      nYYAKMt = OCL1TU(oybxB2, qmhBaT),
      w7Xyd45 = zYJb7eh(0, 0x9),
      FGnovrW = KbBYLyW(oybxB2, nYYAKMt),
      iHeAMh = {},
      YNQbkBD = P6_hdvq(iHeAMh["size"] = w7Xyd45, iHeAMh["num"] = FGnovrW, dgGqGo(this["_genRandomStr"](iHeAMh["size"], iHeAMh["num"]) + nYYAKMt + this["_genRandomStr"](prEjtk - w7Xyd45, FGnovrW), w7Xyd45, EdB9_MH(-0x9))),
      mMdQGim = YNQbkBD.split(''),
      JtJHI5 = mMdQGim.slice(0x0, TaQIiK),
      NpX14G = mMdQGim.slice(TaQIiK),
      YJSUnJ = [];
    while (JtJHI5["length"] > 0) YJSUnJ["push"](dgGqGo(0x23, parseInt(JtJHI5["pop"](), 36), ZCrnjUc = 51)["toString"](36));
    return YJSUnJ = YJSUnJ["concat"](NpX14G), YJSUnJ["join"]('');
  }
  ["load_module_ADLER32"]() {
    let rxetjS = {};
    rxetjS["version"] = "1.3.1";
    function qmhBaT(rxetjS, qmhBaT) {
      var prEjtk = 1,
        TaQIiK,
        zYJb7eh,
        OCL1TU,
        KbBYLyW;
      TaQIiK = 0
      zYJb7eh = rxetjS.length
      OCL1TU = 0
      if (typeof qmhBaT === "number") {
        prEjtk = qmhBaT & 0xffff
        TaQIiK = qmhBaT >>> 16
      }
      for (KbBYLyW = 0x0; KbBYLyW < zYJb7eh;) {
        OCL1TU = dgGqGo(Math["min"](zYJb7eh - KbBYLyW, 0xa5e), KbBYLyW, EdB9_MH(-9));
        for (; KbBYLyW < OCL1TU; KbBYLyW++) prEjtk += rxetjS["charCodeAt"](KbBYLyW) & 255, TaQIiK += prEjtk;
        prEjtk = dgGqGo(15 * (prEjtk >>> 0x10), prEjtk & 65535, ZCrnjUc = -9)
        TaQIiK = dgGqGo(15 * (TaQIiK >>> 0x10), TaQIiK & 0xffff, EdB9_MH(-9))
      }
      return TaQIiK % 65521 << 0x10 | prEjtk % 0xfff1;
    }
    function prEjtk(rxetjS, qmhBaT) {
      var prEjtk = 1,
        TaQIiK,
        zYJb7eh,
        OCL1TU,
        KbBYLyW;
      TaQIiK = 0
      zYJb7eh = rxetjS.length
      OCL1TU = 0
      if (typeof qmhBaT === "number") {
        prEjtk = qmhBaT & 65535
        TaQIiK = qmhBaT >>> 0x10 & 65535
      }
      for (KbBYLyW = 0; KbBYLyW < zYJb7eh;) {
        OCL1TU = dgGqGo(Math["min"](zYJb7eh - KbBYLyW, 0xa5e), KbBYLyW, EdB9_MH(-9));
        for (; KbBYLyW < OCL1TU; KbBYLyW++) prEjtk += rxetjS[KbBYLyW] & 255, TaQIiK += prEjtk;
        prEjtk = dgGqGo(15 * (prEjtk >>> 0x10), prEjtk & 65535, EdB9_MH(-0x9))
        TaQIiK = dgGqGo(15 * (TaQIiK >>> 0x10), TaQIiK & 0xffff, ZCrnjUc = -0x9)
      }
      return TaQIiK % 0xfff1 << 16 | prEjtk % 65521;
    }
    function TaQIiK(rxetjS, qmhBaT) {
      var prEjtk = 1,
        TaQIiK,
        zYJb7eh,
        OCL1TU,
        KbBYLyW,
        oybxB2,
        nYYAKMt;
      TaQIiK = 0
      zYJb7eh = rxetjS.length
      OCL1TU = 0x0
      KbBYLyW = 0
      oybxB2 = 0
      if (typeof qmhBaT === "number") {
        prEjtk = qmhBaT & 0xffff
        TaQIiK = qmhBaT >>> 16
      }
      for (nYYAKMt = 0; nYYAKMt < zYJb7eh && 1;) {
        OCL1TU = Math["min"](dgGqGo(zYJb7eh, nYYAKMt, EdB9_MH(51)), 0xb66);
        while (OCL1TU > 0) {
          if (P6_hdvq(KbBYLyW = rxetjS["charCodeAt"](nYYAKMt++), KbBYLyW) < 128) {
            prEjtk += KbBYLyW;
          } else {
            if (KbBYLyW < 0x800) {
              prEjtk += 0xc0 | KbBYLyW >> 0x6 & 31
              TaQIiK += prEjtk
              --OCL1TU
              prEjtk += 0x80 | KbBYLyW & 0x3f
            } else {
              if (KbBYLyW >= 0xd800 && KbBYLyW < 0xe000 && 1) {
                KbBYLyW = dgGqGo(KbBYLyW & 0x3ff, 0x40, EdB9_MH(-0x9))
                oybxB2 = rxetjS["charCodeAt"](nYYAKMt++) & 0x3ff
                prEjtk += 0xf0 | KbBYLyW >> 0x8 & 0x7
                TaQIiK += prEjtk
                --OCL1TU
                prEjtk += 128 | KbBYLyW >> 0x2 & 63
                TaQIiK += prEjtk
                --OCL1TU
                prEjtk += 0x80 | oybxB2 >> 0x6 & 0xf | (KbBYLyW & 3) << 0x4
                TaQIiK += prEjtk
                --OCL1TU
                prEjtk += 128 | oybxB2 & 63
              } else {
                prEjtk += 224 | KbBYLyW >> 12 & 15
                TaQIiK += prEjtk
                --OCL1TU
                prEjtk += 128 | KbBYLyW >> 6 & 0x3f
                TaQIiK += prEjtk
                --OCL1TU
                prEjtk += 0x80 | KbBYLyW & 0x3f
              }
            }
          }
          TaQIiK += prEjtk
          --OCL1TU
        }
        prEjtk = dgGqGo(15 * (prEjtk >>> 16), prEjtk & 0xffff, ZCrnjUc = -0x9)
        TaQIiK = dgGqGo(0xf * (TaQIiK >>> 16), TaQIiK & 0xffff, ZCrnjUc = -9)
      }
      return TaQIiK % 65521 << 0x10 | prEjtk % 65521;
    }
    return P6_hdvq(rxetjS["bstr"] = qmhBaT, rxetjS["buf"] = prEjtk, rxetjS["str"] = TaQIiK, rxetjS);
  }
}
const zUT94Sa = (() => {
  var rxetjS = (qmhBaT, prEjtk) => {
    var TaQIiK = P6_hdvq((qmhBaT = [qmhBaT[0] >>> 0x10, 65535 & qmhBaT[0x0], qmhBaT[0x1] >>> 0x10, 0xffff & qmhBaT[0x1]], prEjtk = [prEjtk[0x0] >>> 16, 65535 & prEjtk[0], prEjtk[0x1] >>> 16, 0xffff & prEjtk[0x1]]), [0x0, 0x0, 0, 0x0]);
    return TaQIiK[3] += dgGqGo(qmhBaT[0x3], prEjtk[0x3], ZCrnjUc = -9), TaQIiK[0x2] += TaQIiK[3] >>> 0x10, TaQIiK[0x3] &= 0xffff, TaQIiK[0x2] += dgGqGo(qmhBaT[2], prEjtk[2], EdB9_MH(-9)), TaQIiK[1] += TaQIiK[2] >>> 0x10, TaQIiK[2] &= 65535, TaQIiK[1] += dgGqGo(qmhBaT[0x1], prEjtk[1], EdB9_MH(-0x9)), TaQIiK[0x0] += TaQIiK[1] >>> 0x10, TaQIiK[1] &= 0xffff, TaQIiK[0x0] += dgGqGo(qmhBaT[0x0], prEjtk[0x0], ZCrnjUc = -0x9), TaQIiK[0] &= 0xffff, [TaQIiK[0x0] << 16 | TaQIiK[0x1], TaQIiK[2] << 0x10 | TaQIiK[0x3]];
  };
  function qmhBaT(rxetjS, qmhBaT) {
    var prEjtk = P6_hdvq((rxetjS = [rxetjS[0x0] >>> 0x10, 65535 & rxetjS[0x0], rxetjS[1] >>> 16, 0xffff & rxetjS[0x1]], qmhBaT = [qmhBaT[0] >>> 16, 0xffff & qmhBaT[0], qmhBaT[0x1] >>> 16, 0xffff & qmhBaT[0x1]]), [0x0, 0x0, 0x0, 0x0]);
    return prEjtk[0x3] += dgGqGo(rxetjS[0x3], qmhBaT[0x3], ZCrnjUc = -43), prEjtk[2] += prEjtk[3] >>> 16, prEjtk[3] &= 0xffff, prEjtk[0x2] += dgGqGo(rxetjS[2], qmhBaT[3], ZCrnjUc = -0x2b), prEjtk[1] += prEjtk[0x2] >>> 16, prEjtk[0x2] &= 0xffff, prEjtk[2] += dgGqGo(rxetjS[0x3], qmhBaT[2], EdB9_MH(-43)), prEjtk[0x1] += prEjtk[2] >>> 16, prEjtk[0x2] &= 0xffff, prEjtk[0x1] += dgGqGo(rxetjS[0x1], qmhBaT[3], EdB9_MH(-43)), prEjtk[0] += prEjtk[0x1] >>> 0x10, prEjtk[0x1] &= 65535, prEjtk[1] += dgGqGo(rxetjS[0x2], qmhBaT[0x2], ZCrnjUc = -0x2b), prEjtk[0] += prEjtk[1] >>> 16, prEjtk[0x1] &= 65535, prEjtk[1] += dgGqGo(rxetjS[0x3], qmhBaT[1], EdB9_MH(-43)), prEjtk[0x0] += prEjtk[1] >>> 16, prEjtk[1] &= 0xffff, prEjtk[0] += dgGqGo(rxetjS[0] * qmhBaT[0x3] + rxetjS[0x1] * qmhBaT[0x2] + rxetjS[0x2] * qmhBaT[1], rxetjS[3] * qmhBaT[0x0], ZCrnjUc = -9), prEjtk[0x0] &= 0xffff, [prEjtk[0x0] << 0x10 | prEjtk[0x1], prEjtk[2] << 0x10 | prEjtk[3]];
  }
  function prEjtk(rxetjS, qmhBaT) {
    return 0x20 === (qmhBaT %= 64) ? [rxetjS[1], rxetjS[0x0]] : qmhBaT < 32 ? [rxetjS[0] << qmhBaT | rxetjS[0x1] >>> 32 - qmhBaT, rxetjS[1] << qmhBaT | rxetjS[0] >>> 32 - qmhBaT] : [rxetjS[0x1] << (qmhBaT -= 32) | rxetjS[0x0] >>> 32 - qmhBaT, rxetjS[0] << qmhBaT | rxetjS[1] >>> 32 - qmhBaT];
  }
  function TaQIiK(rxetjS, qmhBaT) {
    return 0x0 === (qmhBaT %= 64) ? rxetjS : qmhBaT < 32 ? [rxetjS[0] << qmhBaT | rxetjS[0x1] >>> 32 - qmhBaT, rxetjS[0x1] << qmhBaT] : [rxetjS[1] << qmhBaT - 0x20, 0];
  }
  function zYJb7eh(rxetjS, qmhBaT) {
    return [rxetjS[0] ^ qmhBaT[0x0], rxetjS[0x1] ^ qmhBaT[1]];
  }
  function OCL1TU(rxetjS) {
    return rxetjS = zYJb7eh(rxetjS, [0, rxetjS[0x0] >>> 1]), rxetjS = zYJb7eh(rxetjS = qmhBaT(rxetjS, [0xff51afd7, 0xed558ccd]), [0x0, rxetjS[0x0] >>> 0x1]), zYJb7eh(rxetjS = qmhBaT(rxetjS, [0xc4ceb9fe, 0x1a85ec53]), [0x0, rxetjS[0x0] >>> 0x1]);
  }
  return {
    ["hash128"]: (KbBYLyW, oybxB2) => {
      for (var nYYAKMt, w7Xyd45, iHeAMh = oybxB2 || 0, YNQbkBD = (oybxB2 = (KbBYLyW = KbBYLyW || '')["length"] % 16, dgGqGo(KbBYLyW["length"], oybxB2, ZCrnjUc = 0x33)), mMdQGim = [0x0, iHeAMh], iHeAMh = [0x0, iHeAMh], JtJHI5 = [0x87c37b91, 0x114253d5], NpX14G = [0x4cf5ad43, 0x2745937f], YJSUnJ = 0; YJSUnJ < YNQbkBD; YJSUnJ += 0x10) nYYAKMt = [0xff & KbBYLyW["charCodeAt"](YJSUnJ + 4) | (255 & KbBYLyW["charCodeAt"](YJSUnJ + 0x5)) << 8 | (0xff & KbBYLyW["charCodeAt"](YJSUnJ + 0x6)) << 0x10 | (255 & KbBYLyW["charCodeAt"](YJSUnJ + 0x7)) << 24, 255 & KbBYLyW["charCodeAt"](YJSUnJ) | (255 & KbBYLyW["charCodeAt"](YJSUnJ + 1)) << 0x8 | (0xff & KbBYLyW["charCodeAt"](YJSUnJ + 2)) << 16 | (0xff & KbBYLyW["charCodeAt"](YJSUnJ + 3)) << 0x18], w7Xyd45 = [0xff & KbBYLyW["charCodeAt"](YJSUnJ + 12) | (255 & KbBYLyW["charCodeAt"](YJSUnJ + 0xd)) << 0x8 | (255 & KbBYLyW["charCodeAt"](YJSUnJ + 14)) << 16 | (0xff & KbBYLyW["charCodeAt"](YJSUnJ + 15)) << 24, 255 & KbBYLyW["charCodeAt"](YJSUnJ + 8) | (0xff & KbBYLyW["charCodeAt"](YJSUnJ + 0x9)) << 0x8 | (255 & KbBYLyW["charCodeAt"](YJSUnJ + 10)) << 0x10 | (0xff & KbBYLyW["charCodeAt"](YJSUnJ + 11)) << 0x18], nYYAKMt = prEjtk(nYYAKMt = qmhBaT(nYYAKMt, JtJHI5), 31), mMdQGim = rxetjS(mMdQGim = prEjtk(mMdQGim = zYJb7eh(mMdQGim, nYYAKMt = qmhBaT(nYYAKMt, NpX14G)), 0x1b), iHeAMh), mMdQGim = rxetjS(qmhBaT(mMdQGim, [0x0, 5]), [0x0, 0x52dce729]), w7Xyd45 = prEjtk(w7Xyd45 = qmhBaT(w7Xyd45, NpX14G), 0x21), iHeAMh = rxetjS(iHeAMh = prEjtk(iHeAMh = zYJb7eh(iHeAMh, w7Xyd45 = qmhBaT(w7Xyd45, JtJHI5)), 31), mMdQGim), iHeAMh = rxetjS(qmhBaT(iHeAMh, [0x0, 0x5]), [0, 0x38495ab5]);
      switch (nYYAKMt = [0x0, 0x0], w7Xyd45 = [0x0, 0x0], oybxB2) {
        case 15:
          w7Xyd45 = zYJb7eh(w7Xyd45, TaQIiK([0x0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 0xe, EdB9_MH(-9)))], 0x30));
        case 0xe:
          w7Xyd45 = zYJb7eh(w7Xyd45, TaQIiK([0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 13, ZCrnjUc = -0x9))], 40));
        case 0xd:
          w7Xyd45 = zYJb7eh(w7Xyd45, TaQIiK([0x0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 12, EdB9_MH(-0x9)))], 32));
        case 12:
          w7Xyd45 = zYJb7eh(w7Xyd45, TaQIiK([0x0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 0xb, ZCrnjUc = -0x9))], 0x18));
        case 11:
          w7Xyd45 = zYJb7eh(w7Xyd45, TaQIiK([0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 10, ZCrnjUc = -0x9))], 16));
        case 10:
          w7Xyd45 = zYJb7eh(w7Xyd45, TaQIiK([0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 0x9, ZCrnjUc = -9))], 0x8));
        case 0x9:
          w7Xyd45 = qmhBaT(w7Xyd45 = zYJb7eh(w7Xyd45, [0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 8, EdB9_MH(-0x9)))]), NpX14G)
          iHeAMh = zYJb7eh(iHeAMh, w7Xyd45 = qmhBaT(w7Xyd45 = prEjtk(w7Xyd45, 0x21), JtJHI5))
        case 0x8:
          nYYAKMt = zYJb7eh(nYYAKMt, TaQIiK([0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 7, ZCrnjUc = -0x9))], 56));
        case 0x7:
          nYYAKMt = zYJb7eh(nYYAKMt, TaQIiK([0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 0x6, EdB9_MH(-9)))], 0x30));
        case 0x6:
          nYYAKMt = zYJb7eh(nYYAKMt, TaQIiK([0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 0x5, EdB9_MH(-0x9)))], 0x28));
        case 0x5:
          nYYAKMt = zYJb7eh(nYYAKMt, TaQIiK([0x0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 4, ZCrnjUc = -9))], 0x20));
        case 0x4:
          nYYAKMt = zYJb7eh(nYYAKMt, TaQIiK([0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 3, ZCrnjUc = -0x9))], 0x18));
        case 0x3:
          nYYAKMt = zYJb7eh(nYYAKMt, TaQIiK([0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 0x2, ZCrnjUc = -9))], 0x10));
        case 0x2:
          nYYAKMt = zYJb7eh(nYYAKMt, TaQIiK([0x0, KbBYLyW["charCodeAt"](dgGqGo(YJSUnJ, 0x1, EdB9_MH(-9)))], 8));
        case 0x1:
          nYYAKMt = qmhBaT(nYYAKMt = zYJb7eh(nYYAKMt, [0, KbBYLyW["charCodeAt"](YJSUnJ)]), JtJHI5)
          mMdQGim = zYJb7eh(mMdQGim, nYYAKMt = qmhBaT(nYYAKMt = prEjtk(nYYAKMt, 31), NpX14G))
      }
      return mMdQGim = rxetjS(mMdQGim = zYJb7eh(mMdQGim, [0x0, KbBYLyW["length"]]), iHeAMh = zYJb7eh(iHeAMh, [0x0, KbBYLyW["length"]])), iHeAMh = rxetjS(iHeAMh, mMdQGim), mMdQGim = rxetjS(mMdQGim = OCL1TU(mMdQGim), iHeAMh = OCL1TU(iHeAMh)), iHeAMh = rxetjS(iHeAMh, mMdQGim), dgGqGo(("00000000" + (mMdQGim[0x0] >>> 0)["toString"](16))["slice"](dgGqGo(8, ZCrnjUc = -13)) + ("00000000" + (mMdQGim[0x1] >>> 0)["toString"](0x10))["slice"](dgGqGo(8, ZCrnjUc = -13)) + ("00000000" + (iHeAMh[0x0] >>> 0)["toString"](16))["slice"](dgGqGo(0x8, EdB9_MH(-13))), ("00000000" + (iHeAMh[1] >>> 0)["toString"](0x10))["slice"](dgGqGo(0x8, ZCrnjUc = -0xd)), EdB9_MH(-9));
    }
  };
})();
module["exports"] = {
  ["wuxianDefense"]: O3PM1FN,
  ["jsTk"]: _kHHzhI,
  ["getJdEnvInfo"]: fCvvNj("bxevG1e", "oBrXjcm"),
  ["getJdEnvInfov2"]: fCvvNj("_ex6YJH", "oBrXjcm"),
  ["H5st"]: new u2GJ6LG()
};
function fCvvNj(rxetjS, qmhBaT, prEjtk, TaQIiK, zYJb7eh, OCL1TU) {
  TaQIiK = {
    ["bxevG1e"]: function (rxetjS, qmhBaT = []) {
      var [prEjtk, TaQIiK] = JtJHI5;
      rxetjS = Object.create(null);
      try {
        const zYJb7eh = new URL(TaQIiK),
          oybxB2 = zYJb7eh["pathname"]["slice"](0x0, dgGqGo(zYJb7eh["pathname"]["lastIndexOf"]('\u002f'), 1, ZCrnjUc = -9));
        return {
          ["version"]: "1.0.0",
          ["data"]: oiaEVy["Base64"]["encode"](JSON["stringify"]({
            ["userAgent"]: prEjtk,
            ["url"]: zYJb7eh["hostname"]["concat"](oybxB2),
            ["urlQStr"]: zYJb7eh["search"]["slice"](1),
            ["language"]: "zh-CN",
            ["browser"]: "applewebkit_chrome",
            ["browserVersion"]: null,
            os: "NA",
            ["osVersion"]: "NA",
            ["screenResolution"]: "932x430",
            ["timezoneOffset"]: dgGqGo(0x8, EdB9_MH(-0xd)),
            ["sessionStorage"]: "true",
            ["localStorage"]: "true",
            ["indexedDb"]: "true",
            ["openDatabase"]: "false",
            ["hardwareConcurrency"]: 4,
            ["doNotTrack"]: '\u004e\u0041',
            ["platform"]: "iPhone",
            ["canvasFp"]: new nYYAKMt("Ynyaxi3", "Qb9H2A", "eP2gX8").PY3sPg,
            ["webglFp"]: '',
            ["fp"]: zUT94Sa["hash128"]([prEjtk["substring"](0x0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", '\u004e\u0041', "NA", 0x20, "932x430", dgGqGo(480, ZCrnjUc = -13), "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", '\x4e\x41', "iPhone", 0xa, "NA", '', null, null]["join"]("~~~"), 31),
            ["randomId"]: new nYYAKMt("Ynyaxi3", "Qb9H2A", "eP2gX8").PY3sPg
          }), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")
        };
      } catch (e) {
        return null;
      }
      function nYYAKMt(prEjtk, TaQIiK, zYJb7eh, oybxB2, nYYAKMt, w7Xyd45 = {}) {
        oybxB2 = {
          ["Ynyaxi3"]: () => {
            try {
              for (var prEjtk = [], TaQIiK = 0; 0x20 > TaQIiK; TaQIiK++) prEjtk[TaQIiK] = "0123456789abcdef"["charAt"](Math["floor"](dgGqGo(0x10, Math["random"](), EdB9_MH(-43))));
              return P6_hdvq(prEjtk[0xe] = '\x34', prEjtk[0x13] = "0123456789abcdef"["charAt"](prEjtk[0x13] & 3 | 8), prEjtk[8] = prEjtk[13] = prEjtk[18] = prEjtk[0x17], prEjtk["join"](''));
            } catch (b) {
              return '';
            }
          }
        }
        nYYAKMt = nYYAKMt
        if (TaQIiK == "Qb9H2A") {
          qmhBaT = [];
        }
        function FGnovrW() {
          var TaQIiK = function (...TaQIiK) {
              return P6_hdvq(qmhBaT = TaQIiK, oybxB2[prEjtk].call(this));
            },
            zYJb7eh = w7Xyd45[prEjtk];
          if (zYJb7eh) {
            return wl52ooA(TaQIiK, zYJb7eh);
          }
          return TaQIiK;
        }
        nYYAKMt = TaQIiK == "EcN_nTm" ? rxetjS[prEjtk] || (rxetjS[prEjtk] = FGnovrW()) : oybxB2[prEjtk]();
        return zYJb7eh == "eP2gX8" ? {
          PY3sPg: nYYAKMt
        } : nYYAKMt;
      }
    },
    ["_ex6YJH"]: function (rxetjS, qmhBaT = []) {
      var [prEjtk, TaQIiK] = JtJHI5;
      rxetjS = Object.create(null);
      try {
        const zYJb7eh = new URL(TaQIiK),
          oybxB2 = zYJb7eh["pathname"]["slice"](0x0, dgGqGo(zYJb7eh["pathname"]["lastIndexOf"]('\x2f'), 0x1, EdB9_MH(-9)));
        return {
          ["version"]: "1.0.0",
          ["data"]: oiaEVy["Base64"]["encode"](JSON["stringify"]({
            ["userAgent"]: prEjtk,
            ["url"]: zYJb7eh["hostname"]["concat"](oybxB2),
            ["urlQStr"]: zYJb7eh["search"]["slice"](1),
            ["language"]: "zh-CN",
            ["browser"]: "applewebkit_chrome",
            ["browserVersion"]: null,
            os: "NA",
            ["osVersion"]: "NA",
            ["screenResolution"]: "736x414",
            ["timezoneOffset"]: dgGqGo(8, ZCrnjUc = -13),
            ["sessionStorage"]: "true",
            ["localStorage"]: "true",
            ["indexedDb"]: "true",
            ["openDatabase"]: "false",
            ["hardwareConcurrency"]: "NA",
            ["doNotTrack"]: '\u004e\u0041',
            ["platform"]: "iPhone",
            ["canvasFp"]: '',
            ["webglFp"]: '',
            ["fp"]: zUT94Sa["hash128"]([prEjtk["substring"](0x0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", 'NA', "NA", 0x20, "736x414", dgGqGo(0x1e0, EdB9_MH(-13)), "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", 'NA', "iPhone", 10, "NA", '', null, null]["join"]("~~~"), 0x1f),
            ["randomId"]: new nYYAKMt("sGX_ojW", "E7CsoG", "_8c_qvU").IcNOYJ
          }), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")
        };
      } catch (e) {
        return null;
      }
      function nYYAKMt(prEjtk, TaQIiK, zYJb7eh, oybxB2, nYYAKMt, w7Xyd45 = {}) {
        oybxB2 = {
          ["sGX_ojW"]: () => {
            try {
              for (var prEjtk = [], TaQIiK = 0x0; 32 > TaQIiK; TaQIiK++) prEjtk[TaQIiK] = "0123456789abcdef"["charAt"](Math["floor"](dgGqGo(16, Math["random"](), ZCrnjUc = -0x2b)));
              return P6_hdvq(prEjtk[0xe] = '\u0034', prEjtk[0x13] = "0123456789abcdef"["charAt"](prEjtk[19] & 3 | 0x8), prEjtk[8] = prEjtk[0xd] = prEjtk[0x12] = prEjtk[23], prEjtk["join"](''));
            } catch (b) {
              return '';
            }
          }
        }
        nYYAKMt = nYYAKMt
        if (TaQIiK == "E7CsoG") {
          qmhBaT = [];
        }
        function FGnovrW() {
          var TaQIiK = function (...TaQIiK) {
              return P6_hdvq(qmhBaT = TaQIiK, oybxB2[prEjtk].call(this));
            },
            zYJb7eh = w7Xyd45[prEjtk];
          if (zYJb7eh) {
            return wl52ooA(TaQIiK, zYJb7eh);
          }
          return TaQIiK;
        }
        nYYAKMt = TaQIiK == "i3PUVm" ? rxetjS[prEjtk] || (rxetjS[prEjtk] = FGnovrW()) : oybxB2[prEjtk]();
        return zYJb7eh == "_8c_qvU" ? {
          IcNOYJ: nYYAKMt
        } : nYYAKMt;
      }
    }
  }
  zYJb7eh = zYJb7eh
  if (qmhBaT == "Rn6b_J") {
    JtJHI5 = [];
  }
  OCL1TU = {
    ["bxevG1e"]: 2,
    ["_ex6YJH"]: 0x2
  };
  function KbBYLyW(qmhBaT) {
    qmhBaT = "VK7VuBV" in iHeAMh;
    var prEjtk = function (...qmhBaT) {
        return P6_hdvq(JtJHI5 = qmhBaT, TaQIiK[rxetjS].call(this));
      },
      zYJb7eh = OCL1TU[rxetjS];
    if (zYJb7eh) {
      return wl52ooA(prEjtk, zYJb7eh);
    }
    if (qmhBaT && 1) {
      var KbBYLyW = (qmhBaT, prEjtk) => {
        var zYJb7eh;
        if (typeof qmhBaT !== "string") {
          throw new Error("Invalid data key provided (not type string)");
        }
        if (dgGqGo(qmhBaT, EdB9_MH(-0x11))) {
          throw new Error("Invalid data key provided (empty string)");
        }
        zYJb7eh = window.localStorage.getItem(qmhBaT);
        try {
          zYJb7eh = JSON.parse(zYJb7eh);
        } catch (e) {
          prEjtk(new Error(dgGqGo("Serialization error for data '" + qmhBaT + "': ", e.message, ZCrnjUc = -9)));
        }
        prEjtk(null, zYJb7eh);
      };
    }
    return prEjtk;
  }
  zYJb7eh = qmhBaT == "oBrXjcm" ? mMdQGim[rxetjS] || (mMdQGim[rxetjS] = KbBYLyW()) : TaQIiK[rxetjS]();
  return prEjtk == "NkuprxW" ? {
    U5awJS: zYJb7eh
  } : zYJb7eh;
}