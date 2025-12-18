import ProvincePageTemplate from '@/components/provinces/ProvincePageTemplate';
import { kpkData } from '@/lib/mapData/provinces/kpk-full';

export default function KPKPage() {
    return <ProvincePageTemplate data={kpkData} colorScheme="purple" />;
}
