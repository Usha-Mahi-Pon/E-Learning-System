"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { updateUser } from "@/lib/action";

const UserProfile = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: user.name,
    bio: user.bio,
    location: user.location,
    profilePicture: user.img,
  });

  useEffect(() => {
    updateUser(profileData);  
  }, [editing]);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({ ...profileData, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Save profile data to the server
    setEditing(false);
  };

  return (
    <div>
      <div className="flex items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
          <Image
            src={
              profileData.profilePicture ||
              "https://i.pinimg.com/564x/40/31/00/403100c729d0ef4551aeadfa57d9cbf7.jpg"
            }
            alt="Profile Picture"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{profileData.fullName}</h2>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Profile Information</h3>
        {editing ? (
          <div>
            <div className="mt-4">
              <label className="block text-gray-700">Profile Picture</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profileData.fullName}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={profileData.location}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div className="mt-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
              <button
                onClick={handleEditToggle}
                className="ml-4 px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="mt-2">
              <strong>Full Name: </strong>
              {profileData.fullName}
            </p>
            <p className="mt-2">
              <strong>Bio: </strong>
              {profileData.bio}
            </p>
            <p className="mt-2">
              <strong>Location: </strong>
              {profileData.location}
            </p>
            <button
              onClick={handleEditToggle}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
