import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getpostbyid/" + id)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
  
    axios
      .post("http://localhost:5000/delete", { id })
      .then((res) => {
        if (res.data === "success") {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            style={{ height: "24em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            />
            <img
              src={`http://localhost:5000/Images/${post.file}`}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <a
                href="#"
                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
              >
                Nutrition
              </a>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                {post.title}
              </h2>
              <div className="flex mt-3">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    {" "}
                    Mike Sullivan{" "}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">
                    {" "}
                    14 Aug{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <p className="pb-6">{post.description}</p>
            {/* <p className="pb-6">
                  Difficulty on insensible reasonable in. From as went he they.
                  Preference themselves me as thoroughly partiality considered
                  on in estimating. Middletons acceptance discovered projecting
                  so is so or. In or attachment inquietude remarkably comparison
                  at an. Is surrounded prosperous stimulated am me discretion
                  expression. But truth being state can she china widow.
                  Occasional preference fat remarkably now projecting uncommonly
                  dissimilar. Sentiments projection particular companions
                  interested do at my delightful. Listening newspaper in
                  advantage frankness to concluded unwilling.
                </p>
                <p className="pb-6">
                  Adieus except say barton put feebly favour him. Entreaties
                  unpleasant sufficient few pianoforte discovered uncommonly
                  ask. Morning cousins amongst in mr weather do neither. Warmth
                  object matter course active law spring six. Pursuit showing
                  tedious unknown winding see had man add. And park eyes too
                  more him. Simple excuse active had son wholly coming number
                  add. Though all excuse ladies rather regard assure yet. If
                  feelings so prospect no as raptures quitting.
                </p>
                <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                  Sportsman do offending supported extremity breakfast by
                  listening. Decisively advantages nor expression unpleasing she
                  led met. Estate was tended ten boy nearer seemed. As so seeing
                  latter he should thirty whence. Steepest speaking up attended
                  it as. Made neat an on be gave show snug tore.
                </div>
                <p className="pb-6">
                  Exquisite cordially mr happiness of neglected distrusts.
                  Boisterous impossible unaffected he me everything. Is fine
                  loud deal an rent open give. Find upon and sent spot song son
                  eyes. Do endeavor he differed carriage is learning my
                  graceful. Feel plan know is he like on pure. See burst found
                  sir met think hopes are marry among. Delightful remarkably new
                  assistance saw literature mrs favourable.
                </p>
                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                  Uneasy barton seeing remark happen his has
                </h2>
                <p className="pb-6">
                  Guest it he tears aware as. Make my no cold of need. He been
                  past in by my hard. Warmly thrown oh he common future.
                  Otherwise concealed favourite frankness on be at dashwoods
                  defective at. Sympathize interested simplicity at do
                  projecting increasing terminated. As edward settle limits at
                  in.
                </p>
                <p className="pb-6">
                  Dashwood contempt on mr unlocked resolved provided of of.
                  Stanhill wondered it it welcomed oh. Hundred no prudent he
                  however smiling at an offence. If earnestly extremity he he
                  propriety something admitting convinced ye. Pleasant in to
                  although as if differed horrible. Mirth his quick its set
                  front enjoy hoped had there. Who connection imprudence
                  middletons too but increasing celebrated principles joy.
                  Herself too improve gay winding ask expense are compact. New
                  all paid few hard pure she.
                </p>
                <p className="pb-6">
                  Breakfast agreeable incommode departure it an. By ignorant at
                  on wondered relation. Enough at tastes really so cousin am of.
                  Extensive therefore supported by extremity of contented. Is
                  pursuit compact demesne invited elderly be. View him she roof
                  tell her case has sigh. Moreover is possible he admitted
                  sociable concerns. By in cold no less been sent hard hill.
                </p>
                <p className="pb-6">
                  Detract yet delight written farther his general. If in so bred
                  at dare rose lose good. Feel and make two real miss use easy.
                  Celebrated delightful an especially increasing instrument am.
                  Indulgence contrasted sufficient to unpleasant in in
                  insensible favourable. Latter remark hunted enough vulgar say
                  man. Sitting hearted on it without me.
                </p> */}
          </div>
          <div className="auth flex items-center justify-center w-full md:w-full">
            <div className="flex justify-between">
              <Link
                to={`/editpost/${post._id}`}
                className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"
              >
                Edit
              </Link>

              <button
                onClick={(e) => handleDelete(post._id)}
                className="bg-red-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100"
              >
                Delete
              </button>
            </div>
          </div>
        </main>

        {/* main ends here */}
        {/* footer */}
        <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
          <div className="flex">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
              <ul>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Team
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    About us
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Press
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
              <ul>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Blog
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Privacy Policy
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Terms &amp; Conditions
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Documentation
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
