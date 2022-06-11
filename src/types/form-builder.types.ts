export interface Category {
  categoryName: string;
  components: CategoryComponent[];
}

export interface CategoryComponent {
  id: string;
  name: string;
  description: string;
}

export interface FormBuilderComponent {
  id: string;
  label: string;
  validation: ComponentValidation;
}

export interface ComponentValidation {
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
}
