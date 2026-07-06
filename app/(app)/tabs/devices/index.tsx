import DeviceCard from '@/components/DeviceCard';
import PrimaryButton from '@/components/PrimaryButton';
import { useRouter } from 'expo-router';
import { Droplet } from 'lucide-react-native';
import { Text, View } from 'react-native';

 
export default function DevicesScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-content items-center bg-white">
        <View className=" justify-between w-full px-5 py-4 mt-10 bg-white">
          <Text className="text-extralarge font-bold">Devices</Text>
        </View>
        

        <DeviceCard
          name="Karim Truck"
          icon={Droplet}
          isOnline={true}
          statusLabel="Live"
          valueLabel="12.4 L/min"
          onPress={() => router.push(`/tabs/devices/2`)}
      />
      <PrimaryButton label="Track device" onPress={() => console.log('tracking...')} />
        
    </View>
  );
}
 