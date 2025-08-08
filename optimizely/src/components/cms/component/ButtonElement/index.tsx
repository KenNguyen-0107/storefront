import { type ComponentProps, type FunctionComponent } from "react";
import {
  type CmsComponent,
  type WithGqlFragment,
} from "@remkoj/optimizely-cms-react";
import { extractSettings, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import {
  ButtonElementDataFragmentDoc,
  type ButtonElement as ButtonElementType,
} from "@/gql/graphql";
import { Button } from "@/packages/niteco-ui/components/atoms/button";
import clsx from "clsx";
import { getComponentSettingsClass, ILayoutSettings } from "@/utils";

type ButtonElementProps = ComponentProps<CmsComponent<ButtonElementType>>;
type ButtonElementComponent =
  CmsComponent<ButtonElementType> extends WithGqlFragment<
    any,
    ButtonElementType
  >
    ? WithGqlFragment<FunctionComponent<ButtonElementProps>, ButtonElementType>
    : never;

const ButtonElement: ButtonElementComponent = ({
  data: { ButtonText, ButtonLink, className: configuredClassName } = {},
  layoutProps,
  contentLink,
  ctx,
}: ButtonElementProps) => {
  if (!ButtonText || !ButtonLink?.default) return null;
  const settings = extractSettings({
    type: "",
    layoutType: "",
    template: "",
    settings: (layoutProps as any)?.settings || {},
  });

  const buttonType = settings.buttonType || "Primary";

  const containerClasses = clsx(
    "button-element",
    getComponentSettingsClass(settings as ILayoutSettings),
  );
  const buttonClasses = clsx(configuredClassName || "");

  return (
    <CmsEditable
      cmsId={contentLink?.key}
      cmsFieldName="ButtonText"
      editType="floating"
      ctx={ctx}
      className={containerClasses}
    >
      <Button
        href={ButtonLink.default}
        buttonType={buttonType}
        className={buttonClasses}
        buttonLabel={ButtonText}
      >
        {ButtonText}
      </Button>
    </CmsEditable>
  );
};

ButtonElement.displayName = "Button (Component/ButtonElement)";
ButtonElement.getDataFragment = () => [
  "ButtonElementData",
  ButtonElementDataFragmentDoc,
];

export default ButtonElement;
