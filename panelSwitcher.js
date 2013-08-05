(function () {

  $.fn.panelSwitcher = function(options) {


    /*

      Developer: Nick Price
      Created: 5th August

      Structure:

      +-- .panelSwitcher__control -----------+
      +-- .panelSwitcher__panels ------------+
      |  +----- .panelSwitcher__panel ----+  |
      |  +----- .panelSwitcher__panel ----+  |
      |  +----- .panelSwitcher__panel ----+  |
      +--------------------------------------+


    */


    //
    // Globalise this
    //
    var $this = this





    //
    // Extend options => settings with private variables
    //
    var settings = $.extend(
    {
      color: '#556b2f'
    }, options)

    var $dropdown = this.find('select')
      , $currentPanel = $('<div />')
      , $panelArray = []



    //
    // Function calls
    //
    this.showPanel = function showPanel($panel){
      // Check if panel is already active
      if($currentPanel.data('panel') !== $panel) {
        // Hide active panel
        $panelArray.find('.panelSwitcher__active').removeClass('panelSwitcher__active')
        // Show new panel
        $currentPanel = $panelArray.find('[data-panel="' + $panel + '"]')
        $currentPanel.addClass('panelSwitcher__active')
      }
    }


    $this.on('submit', function(e) {
      e.preventDefault()

      $('html, body').animate({
         scrollTop: $this.offset().top-10
     }, 300)

      $this.showPanel( $dropdown.val() )
      return false
    })






    //
    // Initialise!
    //
    this.init = function() {

      // Build array of panels
      $panelArray = $('.js-panelSwitcher__panels')

      // Get the first option's value
      var $initOption = $dropdown.children('option:first-child').val()
      if($initOption !== ''){
        $this.showPanel($initOption)
      }
      return this
    }

    return this.init()

  }

})()