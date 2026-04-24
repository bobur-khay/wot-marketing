import './mastodon.css';
import { Box, Chip, Stack, Typography } from '@mui/joy';
import { HomePageSection } from './_components/HomePageSection';
import { Page } from './_components/Page';
import iotProjectsImg from '@/public/iot-projects.png';
import Image from 'next/image';
import { MembersModalButton } from './_components/MembersModal';
import { LinkButton } from './_components/LinkButton';
import { JoinButtons } from './_components/JoinButtons';
import { liaisons } from '@/lib/liaisons';
import { articles } from '@/lib/articles';
import { events } from '@/lib/events';

export default function HomePage() {
  return (
    <Page
      title="W3C Web of Things"
      subtitle="The Web of Things (WoT) counters IoT fragmentation by extending proven Web standards. Through standardized metadata and reusable building blocks, W3C WoT enables seamless integration across IoT platforms and application domains."
    >
      <HomePageSection title="WoT in a Nutshell">
        <Stack direction="row" gap={4}>
          <Stack gap={2} style={{ width: '50%' }}>
            <Typography>
              In typical IoT projects, developers face a fragmented landscape of proprietary systems, incompatible
              communication protocols, differing data models, and varying security requirements. Applications built this
              way demand high effort for narrow use cases and become difficult to extend, maintain, or reuse over time.
            </Typography>
            <Typography>
              WoT provides standardized building blocks that simplify IoT application development by applying the
              well-established Web paradigm. This approach boosts flexibility and interoperability—especially for
              cross-domain scenarios—while enabling reuse of proven standards and tooling. WoT unlocks the commercial
              potential held back by IoT fragmentation.
            </Typography>
          </Stack>
          <Image src={iotProjectsImg} alt="section image" style={{ width: '50%' }} />
        </Stack>
      </HomePageSection>

      <HomePageSection title="Members">
        <Stack gap={4}>
          <Typography>
            Many organizations are involved in the Web of Things ecosystem across various groups. Click below to explore
            its active participants.
          </Typography>
          <MembersModalButton />
        </Stack>
      </HomePageSection>

      <HomePageSection title="Liaisons">
        <Stack gap={4}>
          <Typography>
            Liaisons systematically coordinate efforts between the core WoT group and external bodies governing specific
            protocols, semantics, or domains
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gridAutoRows: '1fr',
              gap: 2,
            }}
          >
            {liaisons.map((liaison, index) => (
              <LinkButton key={liaison.title + index} href={liaison.href}>
                {liaison.title}
              </LinkButton>
            ))}
          </Box>
        </Stack>
      </HomePageSection>
      <HomePageSection title="Why join?">
        <Stack gap={4}>
          <Typography>
            We develop the Web of Things standards and guidelines to ensure long-term IoT interoperability. By joining,
            you drive W3C standards that shape future device integration and build a cohesive connected ecosystem.
          </Typography>
          <JoinButtons />
        </Stack>
      </HomePageSection>

      <HomePageSection title="Recent Activities">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 2,
          }}
        >
          <Typography level="title-lg" sx={{ gridColumn: { md: '1' }, gridRow: { md: '1' } }}>
            Latest Articles
          </Typography>
          {articles.slice(0, 3).map((article, index) => (
            <LinkButton
              key={article.title + index}
              href={article.url}
              sx={{ gridColumn: { md: '1' }, gridRow: { md: String(index + 2) }, textAlign: 'left' }}
            >
              <Stack sx={{ width: '100%', gap: 4, alignItems: 'flex-start', py: 2, px: 1 }}>
                <Typography level="title-lg">{article.title}</Typography>
                <Typography level="body-sm">{`${article.publisher} | ${article.type} | ${article.date}`}</Typography>
              </Stack>
            </LinkButton>
          ))}
          <LinkButton
            href="/articles"
            sx={{
              gridColumn: { md: '1' },
              gridRow: { md: '5' },
              fontSize: 'md',
              height: 'min-content',
              minHeight: '0',
            }}
          >
            See All
          </LinkButton>

          <Typography level="title-lg" sx={{ gridColumn: { md: '2' }, gridRow: { md: '1' }, mt: { xs: 5, md: 0 } }}>
            Latest Events
          </Typography>
          {events.slice(0, 3).map((event, index) => (
            <LinkButton
              key={event.name + index}
              href={event.url}
              sx={{ gridColumn: { md: '2' }, gridRow: { md: String(index + 2) } }}
            >
              <Stack sx={{ width: '100%', gap: 4, alignItems: 'flex-start', py: 2, px: 1 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                  <Typography level="title-lg">{event.name}</Typography>
                  {new Date(event.date) > new Date() && (
                    <Chip color="primary" variant="soft">
                      Upcoming
                    </Chip>
                  )}
                </Stack>
                <Typography level="body-sm">{`${event.date_display}`}</Typography>
              </Stack>
            </LinkButton>
          ))}
          <LinkButton
            href="/events"
            sx={{
              gridColumn: { md: '2' },
              gridRow: { md: '5' },
              fontSize: 'md',
              height: 'min-content',
              minHeight: '0',
            }}
          >
            See All
          </LinkButton>
        </Box>
      </HomePageSection>
      <Stack gap={2}>
        <Stack direction="row" alignItems="center" gap={1.6}>
          <Image width={24} height={24} alt="Mastodon" src="https://www.cdnlogo.com/logos/m/33/mastodon.svg" />
          <Typography level="h3" color="primary">
            Latest on Mastodon
          </Typography>
        </Stack>
        <div
          className="mastodon-scroll"
          style={{
            height: '600px',
            overflowY: 'auto',
            background: '#fff',
            border: '1px solid #dbe7f0',
            borderRadius: 8,
            padding: '0 16px',
          }}
        >
          <a className="mastodon-feed" href="https://w3c.social/@wot" data-toot-limit="20">
            WoT in Mastodon
          </a>
        </div>
      </Stack>
    </Page>
  );
}
