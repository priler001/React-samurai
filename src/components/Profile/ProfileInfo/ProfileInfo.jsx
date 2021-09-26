import React from "react";
import profile from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={profile.profile_img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        />
        <div className={profile.description_block}>
          ava + description
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
