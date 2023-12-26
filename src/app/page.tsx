import { ProfileInfoCard } from '@/components/profile-info-card';
import ProjectInfoCard from '@/components/project-info-card';
import FooterContactCard from '@/components/footer-contact-card';
import TestomonialsCard from '@/components/testomonials-card';

export default function Home() {
  return (
    <>
      <ProfileInfoCard />

      {/* <ProjectInfoCard /> */}
      {/* <TestomonialsCard /> */}
      <iframe
        className='m-2 rounded-lg'
        src='https://open.spotify.com/embed/album/0JLN7JryQ2T7lBEYIrSQF1?utm_source=generator&theme=0'
        width='98%'
        height='172'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
      <FooterContactCard />
    </>
  );
}
