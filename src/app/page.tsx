import { ProfileInfoCard } from '@/components/profile-info-card';
import ProjectInfoCard from '@/components/project-info-card';
import FooterContactCard from '@/components/footer-contact-card';
import TestomonialsCard from '@/components/testomonials-card';
import './page.css';
import ProjectInfoContainer from '@/components/projects';

export default function Home() {
  return (
    <div className='base-page m-2'>
      <ProfileInfoCard />
      <ProjectInfoContainer />
      <iframe
        className='spotify-embed rounded-3xl'
        src='https://open.spotify.com/embed/album/0JLN7JryQ2T7lBEYIrSQF1?utm_source=generator&theme=0'
        width='100%'
        height='172px'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
      {/* <ProjectInfoCard /> */}
      {/* <TestomonialsCard /> */}

      {/* <FooterContactCard /> */}
    </div>
  );
}
