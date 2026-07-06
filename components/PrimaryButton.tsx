
// components/ui/PrimaryButton.tsx
import { Pressable, Text } from 'react-native';

type PrimaryButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
};

export default function PrimaryButton({ label, onPress, disabled }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`rounded-2xl py-5 w-[80%] items-center justify-center ${
        disabled ? 'bg-neutral-800' : 'bg-neutral-900 active:opacity-80'
      }`}
    >
      <Text
        className="text-white text-base font-semibold text-medium"
        
      >
        {label}
      </Text>
    </Pressable>
  );
}