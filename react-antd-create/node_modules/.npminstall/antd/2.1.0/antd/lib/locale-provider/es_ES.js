'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _en_US = require('rc-pagination/lib/locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = require('../date-picker/locale/en_US');

var _en_US4 = _interopRequireDefault(_en_US3);

var _en_US5 = require('../time-picker/locale/en_US');

var _en_US6 = _interopRequireDefault(_en_US5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = {
    Pagination: _en_US2["default"],
    DatePicker: _en_US4["default"],
    TimePicker: _en_US6["default"],
    Table: {
        filterTitle: 'Filtrar Menu',
        filterConfirm: 'OK',
        filterReset: 'Resetear',
        emptyText: 'No Hay Datos'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancelar',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancelar'
    },
    Transfer: {
        notFoundContent: 'No Encontrado',
        searchPlaceholder: 'Buscar Aquí',
        itemUnit: 'item',
        itemsUnit: 'items'
    }
};
module.exports = exports['default'];