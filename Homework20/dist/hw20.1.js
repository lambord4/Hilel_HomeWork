"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var btn = document.querySelectorAll('button');
var myModal = btn[0];
var myInput = document.getElementById('myInput');
myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
});
var tooltipTriggerList = document.querySelectorAll('button');
var tooltipList = _toConsumableArray(tooltipTriggerList).map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
var alertPlaceholder = document.getElementById('alertPlaceholder');
var alertButton = document.getElementById('showAlert');
var alertVisible = false;
alertButton.addEventListener('click', function () {
  if (!alertVisible) {
    alertPlaceholder.innerHTML = "\n      <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n        <strong>\u0423\u0441\u043F\u0435\u0445!</strong> \u042D\u0442\u043E Bootstrap-\u0430\u043B\u0435\u0440\u0442.\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>\n      </div>";
    alertVisible = true;
  } else {
    alertPlaceholder.innerHTML = '';
    alertVisible = false;
  }
});
alertPlaceholder.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-close')) {
    alertVisible = false;
  }
});