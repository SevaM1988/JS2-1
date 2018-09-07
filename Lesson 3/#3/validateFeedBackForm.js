'use strict';

class Form {
	constructor(field, template, error) {
		this.field = field;
		this.template = template;
		this.error = error;
		this.success = true;
	}
	
	validateForm() {
		let fieldVal = this.field.value;
		
		if (!fieldVal.match(this.template)) {
			this.success = false;
			this.field.value = '';
			this.error.style.display = 'block';
			this.field.classList.add('feedback__fieldBorderError');
			
			setTimeout(() => {
				this.error.style.display = 'none';
				this.field.classList.remove('feedback__fieldBorderError');
			}, 5000);
		}
	}
	
	showResult() {
		if (this.success) {
			document.getElementById('feedback__success').style.display = 'block';
		}
	}
}

document.getElementById('btnSubmit').onclick = function() {
	let feedBackName = document.getElementById('feedback__name');
	let templateName = /^[A-Za-zА-Яа-я]+/;
	let errorName = document.getElementById('feedback__errorName');
	
	let feedBackPhone = document.getElementById('feedback__phone');
	let templatePhone = /^\+\d\(\d{3}\)\d{3}\-\d{4}$/;
	let errorPhone = document.getElementById('feedback__errorPhone');
	
	let feedBackEmail = document.getElementById('feedback__email');
	let templateEmail = /^[a-z]+(\.|\-)?[a-z]+\@[a-z]+\.[a-z]{2,4}$/;
	let errorEmail = document.getElementById('feedback__errorEmail');
	
	let validateName = new Form(feedBackName, templateName, errorName);
	let validatePhone = new Form(feedBackPhone, templatePhone, errorPhone);
	let validateEmail = new Form(feedBackEmail, templateEmail, errorEmail);
	
	validateName.validateForm();
	validatePhone.validateForm();
	validateEmail.validateForm();
	
	validateEmail.showResult();
};