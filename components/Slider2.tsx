import * as RadixSlider from '@radix-ui/react-slider';


interface Slider2Props {
  value?: number;
  onChange?: (value: number) => void;
  progress: number;
}

const Slider2: React.FC<Slider2Props> = ({ value = 0, onChange, progress }) => {
  const initialValue = (progress / 100) * 1;

  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <RadixSlider.Root
      className="relative flex items-center w-full h-2 cursor-pointer"
      defaultValue={[initialValue]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.00001}
      aria-label="Volume"
    >
      <RadixSlider.Track className="bg-neutral-600 relative grow rounded-full h-[3px]">
        <RadixSlider.Range
          className="absolute bg-white rounded-full h-full "
        />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
};

export default Slider2;

{/* transition-width duration-[5000ms] ease-linear */}