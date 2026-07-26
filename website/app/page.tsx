import './home.css';
import { CommunityCallToAction } from './_components/home-page-sections/CommunityCallToAction';
import { DomainsSection } from './_components/home-page-sections/DomainsSection';
import { EcosystemSection } from './_components/home-page-sections/EcosystemSection';
import { FeaturesSection } from './_components/home-page-sections/FeaturesSection';
import { HeroSection } from './_components/home-page-sections/HeroSection';
import { IntegrationSection } from './_components/home-page-sections/IntegrationSection';
import { RecentActivities } from './_components/home-page-sections/RecentActivities';
import { WhyJoin } from './_components/home-page-sections/WhyJoin';
import { PageLayout } from './_components/PageLayout';

export default function HomePage() {
  return (
    <PageLayout customHero={<HeroSection />}>
      <IntegrationSection />
      <FeaturesSection />
      <DomainsSection />
      <EcosystemSection />
      <WhyJoin />
      <RecentActivities />
      <CommunityCallToAction />
    </PageLayout>
  );
}
