import React from "react";

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// type Album = {
//   userId: number;
//   id: number;
//   title: string;
// };

async function getUserPosts(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return response.json();
}

async function getUserAlbums(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  return response.json();
}

const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  // paralell fetching of data is possible, bez they are independent.
  // Dont await any of them, otherwise it will block the request.
  const postsData = getUserPosts(id);
  const albumsData = getUserAlbums(id);

  const [posts, albums] = await Promise.all([postsData, albumsData]);

  console.log(posts);
  console.log(albums);

  return <div></div>;
};

export default UserProfile;
