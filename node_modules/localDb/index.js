/**
 * Created by YikaJ on 15/6/10.
 */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var LocalDb = (function () {
    function LocalDb() {
        var localDb = arguments[0] === undefined ? 'localDb' : arguments[0];

        _classCallCheck(this, LocalDb);

        if (!window.localStorage) {
            throw new Error('Not supports localStorage');
        }
        this.localDb = localDb;

        if (localStorage[localDb]) {
            this.db = JSON.parse(localStorage[localDb]);
        } else {
            this.db = {};
        }
    }

    _createClass(LocalDb, [{
        key: 'getDb',
        value: function getDb() {
            return this.db;
        }
    }, {
        key: 'set',
        value: function set(key, value) {
            if (key) {
                this.db[key] = value;

                return this._saveToLocalStorage();
            }

            throw new Error('set参数key不能为空');
        }
    }, {
        key: 'get',
        value: function get(key) {
            if (key) {
                var value = this.db[key];
                if (typeof value === 'undefined') {
                    console.warn(key + '的值不存在');
                }
                return value;
            }

            throw new Error('get参数key不能为空');
        }
    }, {
        key: 'clean',
        value: function clean() {
            this.db = {};
            this._saveToLocalStorage();
        }
    }, {
        key: '_saveToLocalStorage',
        value: function _saveToLocalStorage() {
            localStorage[this.localDb] = JSON.stringify(this.getDb());
        }
    }]);

    return LocalDb;
})();

module.exports = LocalDb;
