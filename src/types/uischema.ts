export interface UiSchema {
  version: string;
  id: string;
  createdDate: string;
  name: string;
  description: string;
  components: UiSchemaComponent[];
}

export interface UiSchemaComponent {
  id: string;
  dataType: UiSchemaDataType;
  component: UiSchemaComponentType;
  label: string;
  config?: UiSchemaComponentConfig;
  fieldViewProperties?: FieldViewProperties;
}

export interface UiSchemaComponentConfig {
  default?: string | number | boolean | Date;
  validators?: UiSchemaComponentValidators;
  conditionals?: string;
}

export interface FieldViewProperties {
  icon: string;
  text: string;
  description: string;
}

export interface UiSchemaComponentConfigOptions {
  options: UiSchemaComponentOption[];
}

export interface UiSchemaComponentOption {
  label: string;
  value: number;
}

export type UiSchemaDataType =
  | "boolean"
  | "string"
  | "date"
  | "number"
  | "component"
  | "none";

export type UiSchemaComponentType =
  | "CheckboxComponent"
  | "DateInputComponent"
  | "DropdownComponent"
  | "GridComponent"
  | "LinkComponent"
  | "NumberInputComponent"
  | "RadioListComponent"
  | "TextAreaComponent"
  | "TextInputComponent"
  | "TitleComponent"
  | "YesNoComponent";

export const UiSchemaDataTypeLookupMap = new Map<
  UiSchemaComponentType,
  UiSchemaDataType
>([
  ["CheckboxComponent", "boolean"],
  ["DateInputComponent", "date"],
  ["DropdownComponent", "number"],
  ["GridComponent", "component"],
  ["LinkComponent", "none"],
  ["NumberInputComponent", "number"],
  ["RadioListComponent", "number"],
  ["TextAreaComponent", "string"],
  ["TextInputComponent", "string"],
  ["TitleComponent", "none"],
  ["YesNoComponent", "boolean"],
]);

export interface UiSchemaRequiredValidator {
  required?: boolean;
}

export interface UiSchemaPatternValidator {
  pattern?: string;
}

export interface UiSchemaNumberValidator {
  min?: number;
  max?: number;
}

export interface UiSchemaTextValidator {
  minLength?: number;
  maxLength?: number;
}

export interface UiSchemaComponentValidators {
  required?: boolean;
  pattern?: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
}

export interface UiSchemaTextInputConfig {
  default?: string;
  validators?: UiSchemaRequiredValidator | UiSchemaNumberValidator;
  conditionals?: string;
}

export interface UiSchemaDateConfig {
  default?: Date;
  validators?: UiSchemaRequiredValidator;
  conditionals?: string;
}

export interface UiSchemaCreatorDropdownConfig
  extends UiSchemaComponentConfigOptions {
  default?: number;
  validators?: UiSchemaDropdownValidators;
  conditionals?: string;
}

export interface UiSchemaDropdownValidators {
  required?: boolean;
}

export interface UiSchemaCreatorRadioListConfig
  extends UiSchemaComponentConfigOptions {
  default?: number;
  validators?: UiSchemaComponentValidators;
  conditionals?: string;
}
