import {
  GgWebsite,
  UilForecastcloudMoonTear,
  MaterialSymbolsAirplaneTicketOutline,
  MaterialSymbolsAttachMoney,
  MaterialSymbolsMovieFilterOutline,
  MaterialSymbolsWidgetsOutline,
  TablerIcons,
  MdiTailwind,
  ShieldIcon,
} from '../../styles/icons';
import {
  Container,
  UpcomingProject,
  LinkProject,
  ContentCard,
  TextCard,
  ContainerLinksProjects,
} from './styles';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects - Gabriel Lopes</title>
      </Head>
      <Container>
        <h1>Projects</h1>
        <p>List of projects that i am proud of</p>
        <h4>Upcoming</h4>
        <UpcomingProject>
          <ContainerLinksProjects>
            <LinkProject
              href="https://github.com/Gabriellopes232/portfolio-2.0"
              target="_blank"
            >
              <ContentCard>
                <GgWebsite />
                <TextCard>
                  <h3>Website</h3>
                  <p>My personal Website</p>
                </TextCard>
              </ContentCard>
            </LinkProject>
            <LinkProject
              href="https://github.com/Gabriellopes232/forecast-api"
              target="_blank"
            >
              <ContentCard>
                <UilForecastcloudMoonTear />
                <TextCard>
                  <h3>Forecast</h3>
                  <p>Forecast Api for surf</p>
                </TextCard>
              </ContentCard>
            </LinkProject>
            <LinkProject
              href="https://github.com/Gabriellopes232/mytrips"
              target="_blank"
            >
              <ContentCard>
                <MaterialSymbolsAirplaneTicketOutline />
                <TextCard>
                  <h3>Mytrips</h3>
                  <p>Project about travel</p>
                </TextCard>
              </ContentCard>
            </LinkProject>
          </ContainerLinksProjects>
          <h4>Lastest</h4>
          <ContainerLinksProjects>
            <LinkProject
              href="https://github.com/Gabriellopes232/datmoney"
              target="_blank"
            >
              <ContentCard>
                <MaterialSymbolsAttachMoney />
                <TextCard>
                  <h3>Datmoney</h3>
                  <p>Financial app</p>
                </TextCard>
              </ContentCard>
            </LinkProject>
            <LinkProject
              href="https://github.com/Gabriellopes232/Prime-Flix"
              target="_blank"
            >
              <ContentCard>
                <MaterialSymbolsMovieFilterOutline />
                <TextCard>
                  <h3>PrimeFlix</h3>
                  <p>Movies Website</p>
                </TextCard>
              </ContentCard>
            </LinkProject>
            <LinkProject
              href="https://github.com/Gabriellopes232/mytrips"
              target="_blank"
            >
              <ContentCard>
                <MaterialSymbolsWidgetsOutline />
                <TextCard>
                  <h3>FeedGet</h3>
                  <p>Feedback feature</p>
                </TextCard>
              </ContentCard>
            </LinkProject>
          </ContainerLinksProjects>
          <h4>Websites / Online Tools</h4>
          <ContainerLinksProjects>
            <LinkProject href="https://icones.netlify.app/" target="_blank">
              <ContentCard>
                <TablerIcons />
                <TextCard>
                  <h3>Icônes</h3>
                  <p>Iconify Explorer with Instant searching</p>
                </TextCard>
              </ContentCard>
            </LinkProject>
            <LinkProject
              href="https://css-tricks.com/tag/tailwind/"
              target="_blank"
            >
              <ContentCard>
                <MdiTailwind />
                <TextCard>
                  <h3>Tailwind</h3>
                  <p>Tailwind css ticks and hacks</p>
                </TextCard>
              </ContentCard>
            </LinkProject>
            <LinkProject href="https://defensivecss.dev/" target="_blank">
              <ContentCard>
                <ShieldIcon />
                <TextCard>
                  <h3>Defensive Css</h3>
                  <p>Good css practices</p>
                </TextCard>
              </ContentCard>
            </LinkProject>
          </ContainerLinksProjects>
        </UpcomingProject>
        <footer>
          © 2022 - present www.gablopes.me - All Rights Reserved.
        </footer>
      </Container>
    </>
  );
};
export default Projects;
