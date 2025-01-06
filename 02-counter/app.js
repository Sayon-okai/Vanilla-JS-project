// Initial count 
let count = 0;

// Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');



btns.forEach( (btn) => {
      btn.addEventListener("click", (e) => {
            let styles = e.currentTarget.classList;

            if(styles.contains('decrease')) {
                count--;
            
            } 
            else if (styles.contains('increase')) {
                count++;
                
            }
            else {
                   count = 0;
                  
            };
          
            if (count < 0) {
                value.style.color = 'red';
            }
            if (count > 0) {
                value.style.color = 'green';
            }
            else {
                  value.style.color = '#222';
            }
            value.textContent = count;
           
      });
      
    
});