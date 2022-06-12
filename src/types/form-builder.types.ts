export interface Category {
  categoryName: string;
  components: CategoryComponent[];
}

export interface CategoryComponent {
  id: string;
  name: componentType;
  description: string;
}

export interface FormBuilderComponent {
  id: string;
  type: componentType;
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

export type componentType = "DateComponent" | "NumberComponent" | "TextComponent" | "SelectComponent"