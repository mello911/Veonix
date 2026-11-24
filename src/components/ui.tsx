import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  CSSProperties,
} from "react";
import { palette, type BrandColor } from "@/design/palette";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};
export function Button({
  variant = "primary",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`control button ${variant} ${className}`}
    />
  );
}
export function TextLink({
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return <a {...props} className={`text-link ${className}`} />;
}
export function IconButton({
  label,
  children,
  ...props
}: Omit<ButtonProps, "children"> & { label: string; children: ReactNode }) {
  return (
    <Button
      variant="secondary"
      {...props}
      aria-label={label}
      title={label}
      className={`icon-button ${props.className ?? ""}`}
    >
      <span aria-hidden="true">{children}</span>
    </Button>
  );
}
type FieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};
function InputField({
  label,
  kind,
  className = "",
  ...props
}: FieldProps & { kind: "text" | "search" }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input {...props} type={kind} className={`control ${className}`} />
    </label>
  );
}
export function TextInput(props: FieldProps) {
  return <InputField {...props} kind="text" />;
}
export function SearchInput(props: FieldProps) {
  return <InputField {...props} kind="search" />;
}
export function Select({
  label,
  children,
  className = "",
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { label: string }) {
  return (
    <label className="field">
      <span>{label}</span>
      <span className="select-wrap">
        <select {...props} className={`control ${className}`}>
          {children}
        </select>
      </span>
    </label>
  );
}
export function Checkbox({
  label,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { label: string }) {
  return (
    <label className="check">
      <input {...props} type="checkbox" />
      {label}
    </label>
  );
}
export function Divider({ strong = false }: { strong?: boolean }) {
  return <hr className={strong ? "divider strong" : "divider"} />;
}
export function SectionHeading({
  children,
  id,
  as: Heading = "h2",
}: {
  children: ReactNode;
  id?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Heading id={id} className="type-section">
      {children}
    </Heading>
  );
}
export function ContentPanel({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`content-panel ${className}`}>
      {children}
    </div>
  );
}
type SwatchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "color" | "value"
> & { color: BrandColor; name: string };
export function ColorSwatch({ color, name, ...props }: SwatchProps) {
  return (
    <label
      className="swatch-choice"
      title={palette[color].name}
      style={{ "--sample": `var(--brand-${color})` } as CSSProperties}
    >
      <input
        {...props}
        name={name}
        type="radio"
        value={color}
        aria-label={palette[color].name}
      />
      <span aria-hidden="true" />
    </label>
  );
}
type SizeOption = { value: string; disabled?: boolean };
type SizeProps = {
  label: string;
  name: string;
  options: readonly SizeOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};
export function SizeSelector({
  label,
  name,
  options,
  value,
  defaultValue,
  onChange,
  disabled,
}: SizeProps) {
  return (
    <fieldset disabled={disabled} className="option-set">
      <legend>{label}</legend>
      <div className="choice-row">
        {options.map((option) => (
          <label key={option.value} className="size-choice">
            <input
              type="radio"
              name={name}
              value={option.value}
              disabled={option.disabled}
              checked={value === undefined ? undefined : value === option.value}
              defaultChecked={
                value === undefined ? option.value === defaultValue : undefined
              }
              onChange={onChange ? () => onChange(option.value) : undefined}
            />
            <span>{option.value}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
export function StatusLabel({
  tone = "neutral",
  children,
}: {
  tone?: "neutral" | "success" | "error";
  children: ReactNode;
}) {
  return <span className={`status-label ${tone}`}>{children}</span>;
}
