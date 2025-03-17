document.addEventListener('DOMContentLoaded', () => {
    
    
    function openModal($el) {
      $el.classList.add('is-active');
    }
    console.log("Added openModal function");
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
    console.log("Added closeModal function");
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
    console.log("Added closeAllModals");
  
    
    (document.querySelectorAll('.modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
        
      });
      console.log("Lade till click event för $trigger");
    });
  
    
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    document.addEventListener('keydown', (event) => {
      if(event.key === "Escape") {
        closeAllModals();
      }
    });
  });