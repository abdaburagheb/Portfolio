// typing animation
$(document).ready(function () {
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };

  })(jQuery);
  // input text for typing animation 
  $("#holder").writeText("FRONT-END DEVELOPER & GRAPHIC DESIGNER");
  $("#thankYou").writeText("I Will be in touch with you soon!");
});

// Scroll function 
$(document).ready(function () {

  var scrollLink = $('.scroll');

  scrollLink.click(function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 700);
    return false;
  });
  
// Active link
$(window).scroll(function () {
    var scrollBarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      var sectionOffset = $(this.hash).offset().top - 40;

      if (sectionOffset <= scrollBarLocation) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    })
  })
});

// Skills section
(function () {

  var skillBar = {},
      demoBar;

  if (!(window.CSS && CSS.supports('display', 'var(--customProperties)'))) {
    return;
  }

  skillBar.init = function (skillBar) {

    this.skillBar = skillBar;
    this.valueBox = this.skillBar.querySelector('.js-skillbar__value');
    this.progress = this.skillBar.querySelector('.js-skillbar__progress-value');
    this.styles = window.getComputedStyle(this.skillBar);
    this.circumference = 2 * Math.PI * ((this.styles.getPropertyValue('--skillBarRadius') * this.styles.getPropertyValue('--skillBarSize')) / 100);

    this.skillBar.style.setProperty('--skillBarPercent', this.circumference);
    this.skillBar.style.setProperty('--skillBarCircumference', this.circumference);

    return this;
  };

  skillBar.draw = function () {

    var skillBarValue = this.styles.getPropertyValue('--skillBarValue'),
      progressValue = this.circumference - ((100 - skillBarValue * this.circumference) / 100);

    this.progress.classList.add('js-skillbar__progress-value_animated');
    this.skillBar.style.setProperty('--skillBarPercent', progressValue);
    this.valueBox.textContent = skillBarValue + "%";
  };

  demoBar = skillBar.init(document.querySelector('.js-skillbar'));
  demoBar.draw();

  function updateSkillBar() {

    demoBar.skillBar.style.setProperty('--skillBarValue', this.getAttribute('data-skill-bar-value'));
    demoBar.skillBar.style.setProperty('--skillBarColor', this.getAttribute('data-skill-bar-color'));
    demoBar.draw();
  }

  document.querySelectorAll('.js-switch').forEach(function (item) {
    item.addEventListener('change', updateSkillBar);
  });
})();


