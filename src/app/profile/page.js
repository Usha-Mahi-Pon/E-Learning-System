import EnrolledCourses from "@/components/EnrolledCourses";
import UserProfile from "@/components/UserProfile";
import { getUser } from "@/lib/data";

const Profile = async () => {
  const user = await getUser(process.env.DefaultUser);
  return (
    <div className="max-w-4xl mx-auto my-10 p-4 bg-white shadow-md rounded-lg">
      <UserProfile user={user} />
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Enrolled Courses</h3>
        <EnrolledCourses />
      </div>
    </div>
  );
};

export default Profile;
