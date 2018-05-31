Vue.component ('registration',{
	template : '#template-registration',
	data: function () {
        return {
            first_name: '',
            last_name: '',
            login: '',
            country: '',
            city: '',
            email: '',
            countries: [
		      { value: 'Беларусь' },
		      { value: 'Россия' },
		      { value: 'Украина' }
		    ],
		    cities: [
		      { value: 'Гомель' ,country: 'Беларусь'},
		      { value: 'Москва', country: 'Россия'},
		      { value: 'Киев', country: 'Украина'}
		    ],

        }
    },
    computed: {
	  chose_city: function (country) {
	    var current_contry = this.country;
        return this.cities.filter(function (elem) {
            if(current_contry==='') return true;
            else return elem.country.indexOf(current_contry) > -1;
        })
	  }
	}
});
new Vue ({
	el: "#registration",    
})



$(function() {
    $('#reg').click(function() {
        var formValid = true;
        $('input').each(function() {
            var formGroup = $(this).parents('.form-group');
            if (this.checkValidity()) {
                formGroup.addClass('has-success').removeClass('has-error');
            } else {
                formGroup.addClass('has-error').removeClass('has-success');
                formValid = false;
            }
        });
        $('select').each(function() {
            var formGroup = $(this).parents('.form-group');
            if (this.checkValidity() && (jQuery.type($(this).val()) != 'null')) {
                formGroup.addClass('has-success').removeClass('has-error');
            } else {
                formGroup.addClass('has-error').removeClass('has-success');
                formValid = false;
            }
        });
        if (formValid) {
            $('#success-alert').removeClass('hidden');
        }
    });
});