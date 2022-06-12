import type {
  CategoryComponent,
  FormBuilderComponent,
} from "@/types/form-builder.types";
import { uid } from "uid";

export default class ComponentCreator {
  static create(element: CategoryComponent): FormBuilderComponent {
    switch (element.name) {
      case "DateComponent":
        return this.dateComponent(element.name);
      case "NumberComponent":
        return this.numberComponent(element.name);
      case "SelectComponent":
        return this.selectComponent(element.name);
      case "TextComponent":
        return this.textComponent(element.name);
    }
  }

  private static textComponent(label: string): FormBuilderComponent {
    const component: FormBuilderComponent = {
      id: `c${uid()}`,
      label,
      type: "TextComponent",
      validation: {
        required: false,
        maxLength: 100,
        minLength: 0,
      },
    };

    return component;
  }

  private static numberComponent(label: string): FormBuilderComponent {
    const component: FormBuilderComponent = {
      id: `c${uid()}`,
      label,
      type: "NumberComponent",
      validation: {
        required: false,
        min: 0,
        max: 100000,
      },
    };

    return component;
  }

  private static dateComponent(label: string): FormBuilderComponent {
    const component: FormBuilderComponent = {
      id: `c${uid()}`,
      label,
      type: "DateComponent",
      validation: {
        required: false,
      },
    };

    return component;
  }

  private static selectComponent(label: string): FormBuilderComponent {
    const component: FormBuilderComponent = {
      id: `c${uid()}`,
      label,
      type: "SelectComponent",
      validation: {
        required: false,
      },
    };

    return component;
  }
}
