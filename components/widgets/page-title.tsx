import IconWidget,{ IconType } from "./icon-widget";
export default function PageTitle({
  title,
  icon,
}: {
  title: string;
  Icon?: LucideIcon;
}) {
  if (icon) {
    return (
      <h1>
        <IconWidget icon={icon} className="" />
        <span>{title}</span>
      </h1>
    );
  }
  return <h1></h1>;
}
