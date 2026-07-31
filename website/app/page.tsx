import './home.css';
import { CommunityCallToAction } from './_components/home-page-sections/CommunityCallToAction';
import { DomainsSection } from './_components/home-page-sections/DomainsSection';
import { EcosystemSection } from './_components/home-page-sections/EcosystemSection';
import { FeaturesSection } from './_components/home-page-sections/FeaturesSection';
import { HeroSection } from './_components/home-page-sections/hero/HeroSection';
import { ApplicationLayerSection } from './_components/home-page-sections/application-layer/ApllicationLayerSection';
import { RecentActivities } from './_components/home-page-sections/RecentActivities';
import { WhyJoin } from './_components/home-page-sections/WhyJoin';
import { PageLayout } from './_components/PageLayout';

export default function HomePage() {
  return (
    <PageLayout customHero={<HeroSection />}>
      <ApplicationLayerSection />
      <FeaturesSection />
      <DomainsSection />
      <EcosystemSection />
      <WhyJoin />
      <RecentActivities />
      <CommunityCallToAction />
    </PageLayout>
  );
}
