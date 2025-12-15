import { useTranslation } from 'react-i18next';
import { User } from 'lucide-react';
import './Team.css';

const teamMembers = [
  { name: 'Sami Sahin', roleKey: 'ceo' },
  { name: 'Ekrem Sahin', roleKey: 'prokurist' },
  { name: 'Aycan Kocaoglu', roleKey: 'sales' },
  { name: 'Abdullah Adaileh', roleKey: 'technician' },
  { name: 'Yasin Aras', roleKey: 'area_manager' },
  { name: 'Taha Aras', roleKey: 'area_manager' },
];

const Team = () => {
  const { t } = useTranslation();

  return (
    <section className="team-section">
      <h2>{t('about_page.team.title')}</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="image-placeholder">
              <User size={64} color="#e09a26" />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{t(`about_page.team.roles.${member.roleKey}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
