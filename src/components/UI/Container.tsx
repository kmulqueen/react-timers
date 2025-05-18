import {
  type ElementType,
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
} from "react";

type ContainerProps<T extends ElementType> = PropsWithChildren<
  {
    as?: T;
  } & ComponentPropsWithoutRef<T>
>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}
