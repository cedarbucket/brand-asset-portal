const acceptedDOMProps = [
  "style",
  "height",
  "width",
  "children",
  "variant",
  "onClick",
  "onKeyDown",
  "onChange",
  "id",
  "onFocus",
  "onBlur",
  "type",
  "name",
  "value",
  "cols",
  "rows",
  "placeholder",
  "zIndex",
  "cursor",
  "dangerouslySetInnerHTML",
  "disabled",
  "list",
];
export const StyledWithConfig = {
  shouldForwardProp: (prop: string) => {
    return acceptedDOMProps.includes(prop);
  },
};
