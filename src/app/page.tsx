import { ProfileInfoCard } from '@/components/profile-info-card';
import ProjectInfoCard from '@/components/project-info-card';
import FooterContactCard from '@/components/footer-contact-card';
import TestomonialsCard from '@/components/testomonials-card';
import ProjectInfoContainer from '@/components/projects';
import KindWordsContainer from '@/components/kind-words';
import './page.css';

export default function Home() {
  return (
    <div className='base-page m-2'>
      <ProfileInfoCard />
      <ProjectInfoContainer />
      <KindWordsContainer />

      <iframe
        className='spotify-embed bg-[#404040] dark:bg-[#404040]'
        src='https://open.spotify.com/embed/track/3FVy3aVs0TFzLv6FEiLqC2?utm_source=generator&theme=0'
        width='100%'
        height='80px'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
      {/* <ProjectInfoCard /> */}
      {/* <TestomonialsCard /> */}

      {/* <FooterContactCard /> */}
    </div>
  );
}
