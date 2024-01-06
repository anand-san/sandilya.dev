import { ProfileInfoCard } from '@/components/profile-info-card';
import FooterContactCard from '@/components/footer-contact-card';
import ProjectInfoContainer from '@/components/projects';
import KindWordsContainer from '@/components/kind-words';
import AchievementsContainer from '@/components/achievements';

import './page.css';

export default function Home() {
  return (
    <div className='base-page'>
      <div className='website-alert !mt-8 rounded-[4px] border p-4 sm:mt-0'>
        ⚠️ I am still working on this website. You might find some parts of the
        website not working as expected. Please bear with me 🙏
      </div>
      <ProfileInfoCard />
      <ProjectInfoContainer />
      <KindWordsContainer />
      {/* Featured Blogs --  Match with Spotify style */}

      <AchievementsContainer />
      <FooterContactCard />
    </div>
  );
}
