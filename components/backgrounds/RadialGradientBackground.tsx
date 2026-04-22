type GradientColor = {
  color: string;
  stop: string;
};

type Gradient = {
  position: string;
  size: string;
  colors: GradientColor[];
  blur: string;
  opacity: number;
};

type VariantType = "hero" | "about" | "custom";

interface Props {
  variant?: VariantType;
  gradients?: Gradient[];
}

const RadialGradientBackground = ({
  variant = "hero",
  gradients = [],
}: Props) => {
  const variants: Record<Exclude<VariantType, "custom">, Gradient[]> = {
    hero: [
      {
        position: "top-1 left-1 -translate-x-1/2 -translate-y-1/2",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.5)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
      {
        position: "top-1 left-1",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.5)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
      {
        position: "bottom-1 right-1",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.5)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
    ],

    about: [
      {
        position: "bottom-0 left-[75%]",
        size: "w-[700px] h-[700px]",
        colors: [
          { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.5)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.45)", stop: "100%" },
          { color: "rgba(141, 255, 105, 0.25)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
    ],
  };

  const activeGradients: Gradient[] =
    variant === "custom" ? gradients : variants[variant as "hero" | "about"];

  const generateGradient = (colors: GradientColor[]): string => {
    const colorStops = colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(", ");

    return `radial-gradient(circle at center, transparent 0%, transparent 30%, ${colorStops}, transparent 60%, transparent 100%)`;
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RadialGradientBackground;
