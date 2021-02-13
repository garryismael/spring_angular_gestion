import {FormGroup} from '@angular/forms';

export class ModelForm extends FormGroup {
  private form: IFormGroup;
  constructor(form: IFormGroup) {
    super(form.value, form.validators);
    this.form = form;
  }

  get validationMessages(): string[] {
    const messages: string[] = [];
    if (this.errors) {
      for (const errorName in this.errors) {
        if (errorName === 'required') {
          messages.push(`${this.form.label} est requis.`);
        } else if (errorName === 'minlength') {
          messages.push(`${this.form.label} a au moins
            ${this.errors.minlength.requiredLength} charactères.`);
        } else if (errorName === 'maxlength') {
          messages.push(`${this.form.label} a au plus
            ${this.errors.maxlength.requiredLength} charactères.`);
        } else if (errorName === 'pattern') {
          messages.push(`${this.form.label} est invalide.`);
        } else if (errorName === 'select') {
          messages.push(`${this.form.label} est invalide.`);
        } else if (errorName === 'exist') {
          messages.push(`${this.value} existe.`);
        } else if (errorName === 'min') {
          messages.push(`${this.value} est insuffisante.`);
        }
      }
    }
    return messages;
  }

  select(): boolean {
    return this.form.type === 'select';
  }
}
