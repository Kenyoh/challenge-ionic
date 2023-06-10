import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  formData = {
    name: '',
    birth: '',
    gender: '',
    address: '',
    religion: '',
    maritalStatus: '',
    occupation: '',
    citizenship: '',
    phoneNumber: '',
    email: ''
  };

  constructor() {}

  submitForm() {
    // Handle form submission logic here
  }

  submitToWhatsApp() {
    const phoneNumber = '+6285217375048'; // Replace with your desired phone number
    const message = `Nama: ${this.formData.name}\n` +
                    `Tanggal Lahir: ${this.formData.birth}\n` +
                    `Jenis Kelamin: ${this.formData.gender}\n` +
                    `Alamat: ${this.formData.address}\n` +
                    `Agama: ${this.formData.religion}\n` +
                    `Status perkawinana: ${this.formData.maritalStatus}\n` +
                    `Pekerjaan: ${this.formData.occupation}\n` +
                    `Kewarganegaraan: ${this.formData.citizenship}`;

                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
                  
                    window.open(whatsappUrl, '_blank');
  }

  submitToTelegram() {
    // Handle sending data to Telegram
    // Access form data using this.formData
  }

  submitToEmail() {
    const subject = 'Form Submission';
    const body = `Name: ${this.formData.name}\n` +
               `Birth: ${this.formData.birth}\n` +
               `Gender: ${this.formData.gender}\n` +
               `Address: ${this.formData.address}\n` +
               `Religion: ${this.formData.religion}\n` +
               `Marital Status: ${this.formData.maritalStatus}\n` +
               `Occupation: ${this.formData.occupation}\n` +
               `Citizenship: ${this.formData.citizenship}\n` +
               `Phone Number: ${this.formData.phoneNumber}\n` +
               `Email: ${this.formData.email}`;

  const mailtoUrl = `mailto:${this.formData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.open(mailtoUrl);
  }
}