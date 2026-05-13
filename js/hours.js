/* ============================================================
   AnaYurt — Opening Hours / Open-Closed Indicator
   Used on: index.html, kontakt.html
   ============================================================ */

(function () {
  'use strict';

  /**
   * Opening hours definition.
   * Key = day of week (0=Sunday, 1=Monday … 6=Saturday)
   * Value = [openHour, closeHour] or null if closed
   * Times from Figma: Mo 12-22, Di closed, Mi 12-22, Do 12-22, Fr 15-22, Sa 12-22, So 12-22
   */
  var HOURS = {
    0: [12, 22],   // Sunday
    1: [12, 22],   // Monday
    2: null,       // Tuesday — closed
    3: [12, 22],   // Wednesday
    4: [12, 22],   // Thursday
    5: [15, 22],   // Friday
    6: [12, 22],   // Saturday
  };

  var DAY_NAMES = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

  function getStatus() {
    var now = new Date();
    var day = now.getDay();
    var hour = now.getHours() + now.getMinutes() / 60;
    var range = HOURS[day];
    if (!range) return { open: false, label: 'Geschlossen', today: 'Heute geschlossen' };
    var open = hour >= range[0] && hour < range[1];
    return {
      open: open,
      label: open ? 'Geöffnet' : 'Geschlossen',
      today: 'Heute: ' + formatHours(range),
    };
  }

  function formatHours(range) {
    if (!range) return 'Geschlossen';
    return range[0] + ':00\u2013' + range[1] + ':00 Uhr';
  }

  // Inject status into all .open-status elements
  function renderStatus() {
    var els = document.querySelectorAll('.open-status');
    var status = getStatus();
    els.forEach(function (el) {
      el.textContent = status.label;
      if (status.open) {
        el.classList.remove('closed');
      } else {
        el.classList.add('closed');
      }
    });

    // Also update .today-hours if present
    var todayEls = document.querySelectorAll('.today-hours');
    todayEls.forEach(function (el) {
      el.textContent = status.today;
    });
  }

  // Highlight today's row in hours table
  function highlightToday() {
    var today = new Date().getDay();
    var rows = document.querySelectorAll('.hours-row');
    rows.forEach(function (row) {
      if (parseInt(row.dataset.day, 10) === today) {
        row.classList.add('is-today');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderStatus();
    highlightToday();
  });

})();