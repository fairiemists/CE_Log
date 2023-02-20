




const Emailjs = () => {

    const btn = document.getElementById('button');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       btn.value = 'Sending...';
    
       const serviceID = 'default_service';
       const templateID = 'contact_form';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          alert('Sent!');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });


    return ( 
        <div>
            <form id="form">
                <div class="field">
                    <label for="from_name">from_name</label>
                    <input type="text" name="from_name" id="from_name"/>
                </div>
                <div class="field">
                    <label for="first_name">first_name</label>
                    <input type="text" name="first_name" id="first_name"/>
                </div>
                <div class="field">
                    <label for="total_credits">total_credits</label>
                    <input type="text" name="total_credits" id="total_credits"/>
                </div>
                <div class="field">
                    <label for="total_ethics">total_ethics</label>
                    <input type="text" name="total_ethics" id="total_ethics"/>
                </div>
                <div class="field">
                    <label for="user_email">user_email</label>
                    <input type="text" name="user_email" id="user_email"/>
                </div>
                <div class="field">
                    <label for="reply_to">reply_to</label>
                    <input type="text" name="reply_to" id="reply_to"/>
                </div>

                <input type="submit" id="button" value="Send Email" />
                </form>

                <script type="text/javascript"
                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

                <script type="text/javascript">
                emailjs.init('pdrQnWDOb7HvG1zJG')
                </script>
        </div>
    );

}
 
export default Emailjs;




