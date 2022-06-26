import {
  UiSchemaDataTypeLookupMap,
  type UiSchemaComponent,
  type UiSchemaComponentConfig,
  type UiSchemaComponentType,
  type UiSchemaCreatorDropdownConfig,
  type UiSchemaDateConfig,
  type UiSchemaTextInputConfig,
} from "@/types/uischema";
import { uid } from "uid";

export function createComponentId() {
  return `c${uid()}`;
}

export function createTextInputComponent(
  label: string,
  config?: UiSchemaTextInputConfig
) {
  return buildComponent("TextInputComponent", label, config);
}

export function createDateComponent(
  label: string,
  config?: UiSchemaDateConfig
) {
  return buildComponent("DateInputComponent", label, config);
}

export function createDropdownComponent(
  label: string,
  config?: UiSchemaCreatorDropdownConfig
) {
  return buildComponent("TextInputComponent", label, config);
}

export function create(
  componentType: UiSchemaComponentType,
  label: string,
  config?: UiSchemaComponentConfig
): UiSchemaComponent {
  return buildComponent(componentType, label, config);
}

function buildComponent(
  componentType: UiSchemaComponentType,
  label: string,
  config?: UiSchemaComponentConfig
): UiSchemaComponent {
  const component: UiSchemaComponent = {
    id: createComponentId(),
    dataType: UiSchemaDataTypeLookupMap.get(componentType) || "none",
    component: componentType,
    label: label,
  };

  if (config) component.config = config;

  return component;
}
