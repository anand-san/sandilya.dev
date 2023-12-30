import { ProfileInfoCard } from '@/components/profile-info-card';
import ProjectInfoCard from '@/components/project-info-card';
import FooterContactCard from '@/components/footer-contact-card';
import TestomonialsCard from '@/components/testomonials-card';
import ProjectInfoContainer from '@/components/projects';
import KindWordsContainer from '@/components/kind-words';
import './page.css';
import AchievementsContainer from '@/components/achievements';

export default function Home() {
  return (
    <div className='base-page m-2'>
      <div className='website-alert mb-4 mt-2 rounded-[4px] border p-4 sm:mt-0'>
        ⚠️ I am still working on this website. You might find some parts of the
        website not working as expected. Please bear with me 🙏
      </div>

      <ProfileInfoCard />
      <ProjectInfoContainer />
      <KindWordsContainer />
      <AchievementsContainer />

      {/* <iframe
        className='spotify-embed bg-[#404040] dark:bg-[#404040]'
        src='https://open.spotify.com/embed/track/3FVy3aVs0TFzLv6FEiLqC2?utm_source=generator&theme=0'
        width='100%'
        height='80px'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe> */}
      {/* <ProjectInfoCard /> */}
      {/* <TestomonialsCard /> */}

      {/* <FooterContactCard /> */}
    </div>
  );
}
