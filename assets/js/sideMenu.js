function sidebarFunction(){

  document.querySelectorAll('.side-menu').forEach(function(el) {
    el.addEventListener('click', function(ev){
      ev.preventDefault()

      //menue item el
      let el_classList = el.classList

      //If element has dropdown
      let parent_el = el.parentNode
      let ul_el = parent_el.querySelector('ul')
      if(ul_el){

        let icon_el = el.querySelector('.side-menu__sub-icon');
        let icon_classList = (icon_el)? icon_el.classList : null
        let ul_classList = ul_el.classList

        // side-menu__sub-open
        if(el_classList.contains('side-menu--open') ){

          if(icon_classList){
            icon_classList.remove('transform');
            icon_classList.remove('rotate-180');
          }

          el_classList.remove('side-menu--open');
          slideUp(ul_el, 500, function() {
            ul_classList.remove('side-menu__sub-open');
          })

        }else{

          if(icon_classList){
            icon_classList.add('transform');
            icon_classList.add('rotate-180');
          }

          el_classList.add('side-menu--open');
          slideDown(ul_el, function() {
            ul_classList.add('side-menu__sub-open');
          })

        }
      }
    })
  })
}

export default sidebarFunction
