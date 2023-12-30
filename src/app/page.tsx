import { ProfileInfoCard } from '@/components/profile-info-card';
import FooterContactCard from '@/components/footer-contact-card';
import ProjectInfoContainer from '@/components/projects';
import KindWordsContainer from '@/components/kind-words';
import AchievementsContainer from '@/components/achievements';

import './page.css';

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
      <iframe
        className='spotify-embed mt-10'
        src='https://open.spotify.com/embed/album/0JLN7JryQ2T7lBEYIrSQF1?utm_source=generator'
        width='100%'
        height='80px'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
      {/* Featured Blogs --  Match with Spotify style */}

      <AchievementsContainer />
      <FooterContactCard />
    </div>
  );
}
