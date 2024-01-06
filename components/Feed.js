import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id:"1",
      name:"Zee M",
      username:"zee_M",
      userImg: "https://e0.pxfuel.com/wallpapers/530/368/desktop-wallpaper-hijab-girl-cartoon-anime-hijab.jpg",
      img:"https://images.pexels.com/photos/206792/pexels-photo-206792.jpeg",
      text: "Pretty!",
      timestamp:"2 hours ago"
    },
    {
      id:"2",
      name:"Zee M",
      username:"zee_M",
      userImg: "https://e0.pxfuel.com/wallpapers/530/368/desktop-wallpaper-hijab-girl-cartoon-anime-hijab.jpg",
      img:"https://images.pexels.com/photos/1287089/pexels-photo-1287089.jpeg",
      text: "Nice View!",
      timestamp:"1 day ago"
    },
    {
      id:"3",
      name:"Zee M",
      username:"zee_M",
      userImg: "https://e0.pxfuel.com/wallpapers/530/368/desktop-wallpaper-hijab-girl-cartoon-anime-hijab.jpg",
      img:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
      text: "Delicious",
      timestamp:"3 days ago"
    },
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
              <SparklesIcon className="h-5"/>
            </div>
            </div>
            <Input />
            {posts.map((post)=> (
              <Post key={post.id} post={post} />
            ))}
            </div>
  )
}
