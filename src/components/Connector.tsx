type VerticalLineProps = {
  height?: number;
};

export const VerticalLine = ({ height = 32 }: VerticalLineProps) => {
  return (
    <div
      className="w-[2px] bg-slate-700"
      style={{ height, margin: 0 }} // Ensure no margin
    />
  );
};

type HorizontalLineProps = {
  width?: string;
};

export const HorizontalLine = ({ width = "100%" }: HorizontalLineProps) => {
  return (
    <div
      className="h-[2px] bg-slate-700 mx-auto"
      style={{ width, margin: 0 }} // Ensure no margin
    />
  );
};
