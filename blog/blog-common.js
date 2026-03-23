(function () {
  function formatDate(value) {
    if (!value) return '';
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat(document.documentElement.lang || 'zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  document.querySelectorAll('[data-article-date]').forEach(function (node) {
    var value = node.getAttribute('data-article-date');
    node.textContent = formatDate(value);
  });

  document.querySelectorAll('[data-last-edited]').forEach(function (node) {
    var value = node.getAttribute('data-last-edited');
    node.textContent = formatDate(value);
  });

  document.querySelectorAll('[data-reading-minutes]').forEach(function (node) {
    var value = node.getAttribute('data-reading-minutes');
    if (!value) return;
    node.textContent = value + ' 分钟阅读';
  });

  document.querySelectorAll('[data-current-year]').forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });

  var zoomableImages = Array.prototype.slice.call(
    document.querySelectorAll('main img, .section-card img, .showcase-card img')
  ).filter(function (img) {
    return !img.closest('.navbar') && !img.closest('.lightbox-overlay');
  });

  if (!zoomableImages.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = [
    '<div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="图片放大预览">',
    '  <button class="lightbox-close" type="button" aria-label="关闭预览">×</button>',
    '  <div class="lightbox-content"></div>',
    '  <p class="lightbox-caption" hidden></p>',
    '</div>'
  ].join('');
  document.body.appendChild(overlay);

  var dialog = overlay.querySelector('.lightbox-dialog');
  var closeButton = overlay.querySelector('.lightbox-close');
  var content = overlay.querySelector('.lightbox-content');
  var caption = overlay.querySelector('.lightbox-caption');
  var activeTrigger = null;

  function closeLightbox() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    content.innerHTML = '';
    caption.textContent = '';
    caption.hidden = true;
    if (activeTrigger) activeTrigger.focus();
    activeTrigger = null;
  }

  function openLightbox(source) {
    activeTrigger = source;
    var modalImage = document.createElement('img');
    modalImage.src = source.currentSrc || source.src;
    modalImage.alt = source.alt || '';
    content.innerHTML = '';
    content.appendChild(modalImage);

    var text = source.getAttribute('data-zoom-caption') || source.alt || '';
    caption.textContent = text;
    caption.hidden = !text;

    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  }

  zoomableImages.forEach(function (img) {
    img.classList.add('zoomable-media');
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('title', '点击放大查看');
    img.addEventListener('click', function () {
      openLightbox(img);
    });
    img.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(img);
      }
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', function (event) {
    if (!dialog.contains(event.target) || event.target === overlay) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeLightbox();
    }
  });
})();
