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
            else if (count > 0) {
                value.style.color = 'green';
            }
            else {
                  value.style.color = '#222';
            }
            // alert if the count % 5 is equal 0 and count is greater then 5
            if(count % 5 == 0 && count > 5) {
                alert(`The You have count up to: ${count}`)
            }
            value.textContent = count;

           
      });
      
    
});