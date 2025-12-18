import ProvincePageTemplate from '@/components/provinces/ProvincePageTemplate';
import { balochistanData } from '@/lib/mapData/provinces/balochistan-full';

export default function BalochistanPage() {
    return <ProvincePageTemplate data={balochistanData} colorScheme="amber" />;
}
