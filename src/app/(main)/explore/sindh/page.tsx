import ProvincePageTemplate from '@/components/provinces/ProvincePageTemplate';
import { sindhData } from '@/lib/mapData/provinces/sindh-full';

export default function SindhPage() {
    return <ProvincePageTemplate data={sindhData} colorScheme="blue" />;
}
