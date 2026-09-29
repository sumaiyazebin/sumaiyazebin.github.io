// Opens gallery images full size in a modal viewer.
(function () {
  var dlg = document.getElementById('viewer');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  var img = document.getElementById('viewer-img');
  var cap = document.getElementById('viewer-cap');
  document.querySelectorAll('.shot button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var src = btn.querySelector('img');
      var fc = btn.parentElement.querySelector('figcaption');
      img.src = src.src;
      img.alt = src.alt;
      cap.textContent = fc ? fc.textContent : '';
      dlg.showModal();
    });
  });
  document.getElementById('viewer-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
})();
