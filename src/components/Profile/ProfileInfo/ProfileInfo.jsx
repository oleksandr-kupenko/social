import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }
	return  (
      <div>
        <div className={s.bigAvatar}>
          <img src="https://atlantis.nyc3.digitaloceanspaces.com/styled/72025f140f22a3eb32950bbb9d76e68d" />
        </div> 
        <div className={s.descriptionBlock}>
          <img src={profile.photos.large} />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    )

}

export default ProfileInfo;


