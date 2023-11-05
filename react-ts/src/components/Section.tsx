import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children: ReactNode;
};

function Section({
  title = "This is my sub heading bro",
  children,
}: SectionProps) {
  return (
    <div>
      <p>{title}</p>

      {children}
    </div>
  );
}

export default Section;
