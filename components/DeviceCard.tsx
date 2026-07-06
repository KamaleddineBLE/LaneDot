// components/devices/DeviceCard.tsx
import { ChevronRight, LucideIcon, Waves } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

type DeviceCardProps = {
  name: string;
  icon?: LucideIcon;
  isOnline?: boolean;
  statusLabel?: string;      // e.g. "Live", "Idle", "Offline"
  valueLabel?: string;       // e.g. "42 km/h", "78% battery", "12.4 L/min"
  onPress?: () => void;
};

export default function DeviceCard({
  name,
  icon: Icon = Waves,
  isOnline = false,
  statusLabel = isOnline ? 'Live' : 'Offline',
  valueLabel,
  onPress,
}: DeviceCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center bg-white rounded-2xl px-4 py-4 my-1.5 mx-5 active:opacity-80"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <View className="w-12 h-12 rounded-xl bg-gray-100 justify-center items-center mr-3.5">
        <Icon size={26} color="#111" />
      </View>

      <View className="flex-1">
        <Text
          numberOfLines={1}
          className="text-[17px] font-bold text-gray-900"
          style={{ fontFamily: 'SpaceGrotesk-Bold' }}
        >
          {name}
        </Text>

        <View className="flex-row items-center mt-1 gap-1.5">
          <View
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: isOnline ? '#3B82F6' : '#9CA3AF' }}
          />
          <Text
            className="text-sm font-medium"
            style={{
              color: isOnline ? '#3B82F6' : '#9CA3AF',
              fontFamily: 'SpaceGrotesk-Medium',
            }}
          >
            {statusLabel}
            {valueLabel ? ` · ${valueLabel}` : ''}
          </Text>
        </View>
      </View>

      <ChevronRight size={20} color="#C4C4C4" />
    </Pressable>
  );
}